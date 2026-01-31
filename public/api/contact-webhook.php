<?php
// Prevents direct access from other domains (CORS)
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");

// Check if it's a POST request
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["status" => "error", "message" => "Method not allowed"]);
    exit;
}

// Get the raw POST data (JSON)
$input = file_get_contents("php://input");
$data = json_decode($input, true);

// If request is from FormData (not JSON raw), try $_POST
if (empty($data) && !empty($_POST)) {
    $data = $_POST;
}

// Validate essential fields (Email is consistent requirement)
if (empty($data['email'])) {
    http_response_code(400);
    echo json_encode(["status" => "error", "message" => "Email is required"]);
    exit;
}

$status = $data['status'] ?? 'success'; // 'success' (default/legacy), 'partial'
$name = $data['name'] ?? 'Visitante';
$email = $data['email'];
$company = $data['company'] ?? "Não informado";
$service = $data['service'] ?? "Outros";

// User's Webhook URL
$webhookUrl = "https://webhook.fiqon.app/webhook/019be060-581a-7086-a95e-0dc12260580d/c046131d-d31d-4ad3-acce-f3cdbea9609c";

// 1. Send to Webhook (Always, or filter by status?)
// We send both Partial and Success to webhook so you can have automations there too.
$payload = json_encode([
    "submitted_at" => date("Y-m-d H:i:s"),
    "status" => $status, // New field to distinguish
    "name" => $name,
    "company" => $company,
    "email" => $email,
    "service" => $service,
    "source" => "Website Contact Form"
]);

$ch = curl_init($webhookUrl);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, $payload);
curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: application/json', 'Content-Length: ' . strlen($payload)]);
$result = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

// 2. Email Notifications
function sanitize_header($str)
{
    return str_replace(["\r", "\n"], "", $str);
}

$adminEmail = "ola@marcosmaciell.com"; // O SEU E-MAIL (Onde você vai receber)
$mailSent = false;
$autoReplySent = false;

// Configuração segura do remetente (Necessário para Hostinger/cPanel)
// O 'From' DEVE ser um e-mail válido do seu domínio para evitar SPAM.
$senderEmail = $adminEmail;

$headersAdmin = "From: " . $senderEmail . "\r\n";
$headersAdmin .= "Reply-To: " . sanitize_header($email) . "\r\n"; // Responder para o cliente
$headersAdmin .= "X-Mailer: PHP/" . phpversion();
$headersAdmin .= "Content-Type: text/plain; charset=UTF-8\r\n";

if ($status === 'success') {
    // --- A. NOTIFY ADMIN (Lead Received) ---
    $subjectAdmin = "Novo Contato do Site: " . sanitize_header($name);
    $bodyAdmin = "Você recebeu uma nova mensagem completa pelo site:\n\n";
    $bodyAdmin .= "Nome: " . $name . "\n";
    $bodyAdmin .= "Empresa: " . $company . "\n";
    $bodyAdmin .= "Email: " . $email . "\n";
    $bodyAdmin .= "Serviço: " . $service . "\n";
    $bodyAdmin .= "Data: " . date("d/m/Y H:i") . "\n";

    $mailSent = @mail($adminEmail, $subjectAdmin, $bodyAdmin, $headersAdmin);

    // --- B. AUTO-REPLY TO CLIENT (Confirmation) ---
    $subjectClient = "Recebemos sua mensagem! - Marcos Maciel";
    $bodyClient = "Olá, " . $name . "!\n\n";
    $bodyClient .= "Obrigado por entrar em contato. Recebi suas informações sobre '" . $service . "' e retornarei em breve.\n\n";
    $bodyClient .= "Enquanto isso, fique à vontade para me chamar no WhatsApp se preferir agilidade: https://wa.me/5511948635387\n\n";
    $bodyClient .= "Atenciosamente,\nMarcos Maciel\nStrategy & Branding";

    $headersClient = "From: " . $senderEmail . "\r\n";
    $headersClient .= "Reply-To: " . $adminEmail . "\r\n"; // Cliente responde para você
    $headersClient .= "X-Mailer: PHP/" . phpversion();
    $headersClient .= "Content-Type: text/plain; charset=UTF-8\r\n";

    $autoReplySent = @mail($email, $subjectClient, $bodyClient, $headersClient);

} elseif ($status === 'partial') {
    // --- C. NOTIFY ADMIN (Abandoned Cart/Partial Lead) ---
    $subjectAdmin = "⚠️ Lead em Andamento (Não finalizado): " . sanitize_header($email);
    $bodyAdmin = "Um usuário começou a preencher o formulário mas ainda não enviou (ou abandonou):\n\n";
    $bodyAdmin .= "Email capturado: " . $email . "\n";
    $bodyAdmin .= "Nome (se houver): " . $name . "\n";
    $bodyAdmin .= "Empresa (se houver): " . $company . "\n";
    $bodyAdmin .= "Data: " . date("d/m/Y H:i") . "\n\n";
    $bodyAdmin .= "Dica: Você pode enviar um e-mail ativo para este lead se ele não converter nos próximos minutos.";

    $mailSent = @mail($adminEmail, $subjectAdmin, $bodyAdmin, $headersAdmin);

    // --- D. AUTO-REPLY TO DROPOUT (Optional - Uncomment to enable) ---
    /*
    $subjectDropout = "Ficou alguma dúvida? - Marcos Maciel";
    $bodyDropout = "Olá! Vi que você começou a preencher o formulário no meu site.\n\n";
    $bodyDropout .= "Gostaria de saber se ficou com alguma dúvida ou se posso te ajudar por aqui.\n\n";
    $bodyDropout .= "Estou à disposição!\nMarcos";
    $headersDropout = $headersClient; // Reuse client headers
    // @mail($email, $subjectDropout, $bodyDropout, $headersDropout); 
    */
    // Note: Auto-replying to partials immediately receives mixed feedback. Kept disabled by default.
}

// Return response
if ($httpCode >= 200 && $httpCode < 300) {
    http_response_code(200);
    echo json_encode([
        "status" => "success",
        "message" => "Processed ($status)",
        "email_sent" => $mailSent,
        "auto_reply" => $autoReplySent
    ]);
} else {
    http_response_code(500); // Or 200 depending on if you want UI to show error for webhook failure
    echo json_encode([
        "status" => "partial_error",
        "message" => "Webhook failed but processed local logic",
        "debug" => $result
    ]);
}
?>