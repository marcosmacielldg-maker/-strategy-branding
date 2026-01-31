
export interface Question {
    id: number;
    text: string;
    options: {
        id: 'A' | 'B' | 'C';
        text: string;
        value: number; // 1 for A, 2 for B, 3 for C to help in scoring calculation if needed
    }[];
}

export const questions: Question[] = [
    {
        id: 1,
        text: "Como você descreveria a clareza sobre o propósito da sua marca hoje?",
        options: [
            { id: 'A', text: "Ainda não tenho um propósito definido, vendo produtos/serviços.", value: 1 },
            { id: 'B', text: "Tenho uma ideia, mas sinto dificuldade em comunicar isso claramente.", value: 2 },
            { id: 'C', text: "Meu propósito é claro e pauta todas as minhas decisões estratégicas.", value: 3 },
        ],
    },
    {
        id: 2,
        text: "Como é a identidade visual da sua marca atualmente?",
        options: [
            { id: 'A', text: "Não tenho uma identidade visual, uso coisas aleatórias que encontro.", value: 1 },
            { id: 'B', text: "Tenho um logotipo, mas não sinto que ele reflete a essência da marca.", value: 2 },
            { id: 'C', text: "Minha identidade é consistente, profissional e alinhada ao meu posicionamento.", value: 3 },
        ],
    },
    {
        id: 3,
        text: "Quem é o seu público-alvo?",
        options: [
            { id: 'A', text: "Todo mundo que quiser comprar meu produto.", value: 1 },
            { id: 'B', text: "Tenho uma noção de quem seja, mas não tenho uma persona definida.", value: 2 },
            { id: 'C', text: "Conheço profundamente meu público, suas dores e desejos.", value: 3 },
        ],
    },
    {
        id: 4,
        text: "Como você se diferencia dos seus concorrentes?",
        options: [
            { id: 'A', text: "Pelo preço, tento ser o mais barato ou competitivo.", value: 1 },
            { id: 'B', text: "Pela qualidade, mas sinto que o cliente nem sempre percebe.", value: 2 },
            { id: 'C', text: "Tenho um posicionamento único e meus clientes veem valor inestimável no que ofereço.", value: 3 },
        ],
    },
    {
        id: 5,
        text: "Como é a sua presença digital?",
        options: [
            { id: 'A', text: "Posto quando dá, sem muita estratégia.", value: 1 },
            { id: 'B', text: "Estou presente, mas sinto que não engajo ou não converto como gostaria.", value: 2 },
            { id: 'C', text: "Tenho uma estratégia de conteúdo clara que constrói autoridade e gera vendas.", value: 3 },
        ],
    },
    {
        id: 6,
        text: "Como você planeja o crescimento da sua marca para o próximo ano?",
        options: [
            { id: 'A', text: "Não tenho planejamento, vou vivendo um dia de cada vez.", value: 1 },
            { id: 'B', text: "Tenho metas financeiras, mas não sei exatamente como a marca vai ajudar a chegar lá.", value: 2 },
            { id: 'C', text: "Tenho um plano estratégico de marca alinhado aos meus objetivos de negócio.", value: 3 },
        ],
    },
    {
        id: 7,
        text: "Qual a sua maior dificuldade hoje?",
        options: [
            { id: 'A', text: "Vender e atrair clientes.", value: 1 },
            { id: 'B', text: "Ser reconhecido e valorizado pelo mercado.", value: 2 },
            { id: 'C', text: "Escalar sem perder a essência.", value: 3 },
        ],
    },
];

export interface DiagnosisResult {
    title: string;
    description: string;
    recommendation: string;
    color: string;
}

export const getDiagnosis = (answers: Record<number, 'A' | 'B' | 'C'>): DiagnosisResult => {
    const counts = { A: 0, B: 0, C: 0 };
    Object.values(answers).forEach((answer) => {
        counts[answer]++;
    });

    if (counts.A >= counts.B && counts.A >= counts.C) {
        return {
            title: "Iniciante na Escalada 🏔️",
            description: "Sua marca está nos primeiros passos. Você tem potencial, mas precisa construir a base. Sem clareza de propósito e identidade, você acaba competindo por preço e se esforçando muito para ter pouco resultado.",
            recommendation: "Você precisa de uma Identidade Visual e um Posicionamento Básico para começar a ser levado a sério e atrair os clientes certos.",
            color: "text-yellow-500",
        };
    } else if (counts.B >= counts.A && counts.B >= counts.C) {
        return {
            title: "No Meio do Caminho 🧗",
            description: "Você já está subindo, mas a trilha está confusa. Você tem qualidade, mas o mercado não está percebendo todo o seu valor. Falta alinhar a comunicação com a essência para destravar o próximo nível.",
            recommendation: "O foco agora é Estratégia de Marca e Refinamento Visual. Precisamos conectar o que você faz de bom com a percepção do seu cliente.",
            color: "text-brand-green",
        };
    } else {
        return {
            title: "Rumo ao Cume 🚩",
            description: "Sua marca está forte e consolidada. Você sabe quem é e para quem vende. O desafio agora é manter a consistência enquanto cresce e não deixar a essência se perder na escala.",
            recommendation: "Você está pronto para estratégias avançadas de Brand Experience e expansão de pontos de contato. O foco é longevidade e legado.",
            color: "text-brand-green",
        };
    }
};
