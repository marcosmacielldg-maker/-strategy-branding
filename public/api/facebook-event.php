<?php
// public/api/facebook-event.php

// Prevent direct access constraints or CORS issues if needed
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

// CONFIGURATION
$PIXEL_ID = '1229981235892203';
// IMPORTANT: Replace this with your actual long-lived Access Token
$ACCESS_TOKEN = 'EAANQnHZBUO0oBQRgN4aYS9fkC4mYUqhIebZArP8Krt6zbbfixfTaXQy38WSfXhsvG4Uz8xZBZCDxITs4HXTfM2zWH8O0t5j1DhkQBv1nAKXswivSt09J4bkztFaQ6q3QxtWwJTkD3BKzsLxVodZBcROXGwLCZATYDo9acpnwVvZBoBo1TWpuWZCUSUathCSYQK83oAZDZD';

$input = json_decode(file_get_contents('php://input'), true);

if (!$input) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid JSON']);
    exit;
}

$eventName = $input['eventName'] ?? 'PageView'; // Default to PageView
$userDataInput = $input['userData'] ?? [];
$customData = $input['customData'] ?? [];
$eventSourceUrl = $input['eventSourceUrl'] ?? $_SERVER['HTTP_REFERER'];

// Prepare the event data for Meta Graph API
// https://developers.facebook.com/docs/marketing-api/conversions-api/parameters
$data = [
    'data' => [
        [
            'event_name' => $eventName,
            'event_time' => time(),
            'event_source_url' => $eventSourceUrl,
            'action_source' => 'website',
            'user_data' => [
                'em' => !empty($userDataInput['em']) ? hash('sha256', strtolower(trim($userDataInput['em']))) : null,
                'ph' => !empty($userDataInput['ph']) ? hash('sha256', preg_replace('/[^0-9]/', '', $userDataInput['ph'])) : null,
                // Add other user data fields if you collect them (hashed)
                'client_ip_address' => $_SERVER['REMOTE_ADDR'],
                'client_user_agent' => $_SERVER['HTTP_USER_AGENT'],
            ],
            'custom_data' => $customData,
        ]
    ]
];

// Remove null values from user_data
$data['data'][0]['user_data'] = array_filter($data['data'][0]['user_data']);

$url = "https://graph.facebook.com/v19.0/{$PIXEL_ID}/events?access_token={$ACCESS_TOKEN}";

$ch = curl_init($url);
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: application/json']);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

$response = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

http_response_code($httpCode);
echo $response;
?>