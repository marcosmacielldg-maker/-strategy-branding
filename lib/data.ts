
export interface CheckProject {
  id: string; // Changed to string for URL friendly IDs (e.g. "persist")
  client: string;
  title: string;
  titleEn: string; // Added field
  description: string;
  descriptionEn: string; // Added field
  image: string; // Thumbnail
  year: string;

  // Detailed Page Content
  subtitle?: string; // "A essência do feito à mão"
  subtitleEn?: string; // Added field
  detailDescription?: string; // Long text
  detailDescriptionEn?: string; // Added field

  // Structured Content
  construction?: string;
  constructionEn?: string; // Added field
  result?: string;
  resultEn?: string; // Added field

  // Extra Section (like the requested "Impressos")
  extraSection?: {
    title: string;
    titleEn: string;
    description: string;
    descriptionEn: string;
    images: string[];
  };

  detailImages?: string[]; // Gallery

  // UI Props
  className?: string;
  category?: string;
}

export const projects: CheckProject[] = [
  {
    id: "braem",
    client: "Braem",
    title: "Identidade Visual",
    titleEn: "Visual Identity",
    description: "Construir uma marca de contabilidade moderna, que unisse rigor técnico e proximidade humana, com comunicação clara e presença consistente em todos os pontos de contato.",
    descriptionEn: "Build a modern accounting brand that combines technical rigor with human proximity, with clear communication and consistent presence across all touchpoints.",
    construction: "Eu co-liderei o branding e a identidade visual, estruturando um sistema neutro e versátil, pronto para escalar e se adaptar a diferentes perfis de clientes. O símbolo nasce da própria tipografia, transformando a letra b em um ícone contínuo, e a paleta equilibra tons frios e quentes para reforçar confiança, clareza e proximidade.",
    constructionEn: "I co-led the branding and visual identity, structuring a neutral and versatile system, ready to scale and adapt to different client profiles. The symbol is born from the typography itself, transforming the letter b into a continuous icon, and the palette balances cool and warm tones to reinforce trust, clarity, and proximity.",
    result: "Uma identidade coesa, com tom de voz direto e acolhedor, e um pacote completo de iconografia como diferencial de entrega. Os assets seguem um sistema próprio, em estilo flat com glassmorphism sutil, ampliando consistência e personalidade no digital e nas aplicações.",
    resultEn: "A cohesive identity, with a direct and welcoming tone of voice, and a complete iconography package as a delivery differential. The assets follow their own system, in flat style with subtle glassmorphism, expanding consistency and personality in digital and applications.",
    image: "/assets/73.webp",
    year: "2024",
    detailImages: [
      "/assets/projetos/BRAEM/Prancheta 1 cópia 13VERTICAL.webp",
      "/assets/projetos/BRAEM/iVision _ Metro de Sao Paulo.webp",
      "/assets/projetos/BRAEM/Prancheta 1 cópia 4@2x.webp",
      "/assets/projetos/BRAEM/d87a94237381767.68ffc27d11336.webp",
      "/assets/projetos/BRAEM/2.webp"
    ]
  },
  {
    id: "atelie-cultive",
    client: "Ateliê Cultive",
    title: "Identidade Visual",
    titleEn: "Visual Identity",
    description: "Criar uma identidade completa para um novo momento da marca, conectando com o público de mulheres que busca acolhimento, técnica e evolução real, sem perder sofisticação e verdade.",
    descriptionEn: "Create a complete identity for a new moment of the brand, connecting with the audience of women seeking welcome, technique, and real evolution, without losing sophistication and truth.",
    construction: "A narrativa foi desenhada para unir comunidade e aprendizado. A essência parte do acolhimento e da transformação, com pilares claros de acabamento impecável e didática acolhedora. O tom sensorial do manifesto, tecido, cuidado e significado em cada ponto, ajuda a aproximar a marca do cotidiano e das emoções de quem costura.",
    constructionEn: "The narrative was designed to unite community and learning. The essence starts from welcome and transformation, with clear pillars of impeccable finish and welcoming didactics. The sensory tone of the manifesto, fabric, care, and meaning at every point, helps bring the brand closer to the daily life and emotions of those who sew.",
    result: "Uma identidade que fortalece pertencimento e confiança, posicionando o Ateliê como referência em transformar a paixão pela costura em oportunidade de renda, valorizando cada aluna e cada detalhe.",
    resultEn: "An identity that strengthens belonging and trust, positioning the Studio as a reference in transforming the passion for sewing into an income opportunity, valuing every student and every detail.",
    image: "/assets/75.webp",
    year: "2024",
    detailImages: [
      "/assets/projetos/ATELIÊ CULTIVE/2.gif",
      "/assets/projetos/ATELIÊ CULTIVE/78.webp",
      "/assets/projetos/ATELIÊ CULTIVE/87.webp",
      "/assets/projetos/ATELIÊ CULTIVE/99.webp",
      "/assets/projetos/ATELIÊ CULTIVE/ATELIÊ CULTIVE - MANUAL. ANA.gif"
    ]
  },
  {
    id: "solique",
    client: "Solique",
    title: "Branding Completo", // Adapted from TAGS or keep Rebranding? User said "TAGS: Branding completo..."
    titleEn: "Full Branding",
    subtitle: "Naming • Identidade Visual",
    subtitleEn: "Naming • Visual Identity",
    description: "Reposicionar, de fábrica de persianas para marca de soluções e gestão, com naming proprietário e presença premium no mercado.",
    descriptionEn: "Reposition, from blinds factory to solutions and management brand, with proprietary naming and premium presence in the market.",
    construction: "Além da identidade visual, conduzi a construção do naming e co-liderei a etapa de branding, estruturando uma nova percepção de valor para a marca. O sistema partiu de um símbolo de três formas que comunica unidade, movimento e solução, com paleta versátil e elementos de apoio para dar coesão no digital e no impresso.",
    constructionEn: "In addition to visual identity, I led the naming construction and co-led the branding stage, structuring a new value perception for the brand. The system started from a symbol of three shapes that communicates unity, movement, and solution, with a versatile palette and support elements to give cohesion in digital and print.",
    result: "Uma identidade minimalista e escalável, com regras claras de aplicação e alta legibilidade, inclusive em reduções. A marca ganha consistência em múltiplos pontos de contato, reforçando o reposicionamento com confiança e clareza.",
    resultEn: "A minimalist and scalable identity, with clear application rules and high legibility, including reductions. The brand gains consistency across multiple touchpoints, reinforcing the repositioning with confidence and clarity.",
    image: "/assets/70.webp",
    year: "2024",
    extraSection: {
      title: "Naming + Branding",
      titleEn: "Naming + Branding",
      description: "Processo estratégico de naming e construção de marca.", // Placeholder description
      descriptionEn: "Strategic naming process and brand building.",
      images: [
        "/assets/projetos/SOLIQUE/naming1.webp", // Placeholder
        "/assets/projetos/SOLIQUE/naming2.webp"  // Placeholder
      ]
    },
    detailImages: [
      "/assets/projetos/SOLIQUE/SOLIQUE - MANUAL.gif",
      "/assets/projetos/SOLIQUE/41.webp",
      "/assets/projetos/SOLIQUE/46.webp",
      "/assets/projetos/SOLIQUE/48.webp",
      "/assets/projetos/SOLIQUE/58.webp"
    ]
  },
  {
    id: "trino-beauty",
    client: "Trino Beauty",
    title: "Identidade Visual",
    titleEn: "Visual Identity",
    description: "Criar uma marca que conversasse com empreendedoras da beleza, com acolhimento e credibilidade, traduzindo suporte real para quem vive a rotina de gestão no salão.",
    descriptionEn: "Create a brand that talks to beauty entrepreneurs, with welcome and credibility, translating real support for those who live the salon management routine.",
    construction: "O processo partiu de pesquisa de mercado, persona e público-alvo para acertar linguagem, símbolos e escolhas visuais. O conceito do símbolo une três formas e cria a ideia de casa, reforçando a Trino como um lar seguro para profissionais da beleza. A paleta amplia possibilidades com azuis de confiança, rosas de cuidado e roxos de sofisticação.",
    constructionEn: "The process started with market research, persona, and target audience to get the language, symbols, and visual choices right. The symbol concept unites three shapes and creates the idea of a home, reinforcing Trino as a safe home for beauty professionals. The palette expands possibilities with blues of trust, pinks of care, and purples of sophistication.",
    result: "Uma identidade versátil, aplicável no digital e no impresso, com tom de voz claro, empático e inspirador. A marca ganha consistência para apoiar, comunicar e crescer junto do público, com presença forte e próxima.",
    resultEn: "A versatile identity, applicable in digital and print, with a clear, empathetic, and inspiring tone of voice. The brand gains consistency to support, communicate, and grow together with the audience, with strong and close presence.",
    image: "/assets/71.webp",
    year: "2024",
    detailImages: [
      "/assets/projetos/TRINO/Apresentação de IDV - TRINO.gif",
      "/assets/projetos/TRINO/Hands-Holding-Cardboard-Packaging-psd-Mockup.webp",
      "/assets/projetos/TRINO/44.webp",
      "/assets/projetos/TRINO/46.webp",
      "/assets/projetos/TRINO/47.webp"
    ]
  },
  {
    id: "persist",
    client: "Persist",
    title: "Branding e ID Visual",
    titleEn: "Branding & ID Visual",
    subtitle: "A força da resiliência",
    subtitleEn: "The strength of resilience",
    description: "Criar uma identidade para uma marca esportiva feminina que traduzisse movimento, garra e superação, com personalidade própria e conexão emocional com a comunidade, sem cair no visual neutro comum do segmento.",
    descriptionEn: "Create an identity for a women's sports brand that translated movement, grit, and overcoming, with its own personality and emotional connection with the community, without falling into the common neutral look of the segment.",
    construction: "Cada decisão do projeto partiu de um mergulho estratégico, com pesquisa de mercado e leitura clara de posicionamento, para transformar a história da marca em um sistema visual memorável. A identidade nasce da fusão entre movimento e persistência, com uma paleta que tem o laranja como energia principal e se expande em variações vibrantes para sustentar coleções e campanhas com versatilidade.",
    constructionEn: "Every project decision started from a strategic dive, with market research and clear positioning reading, to transform the brand story into a memorable visual system. The identity is born from the fusion between movement and persistence, with a palette that has orange as the main energy and expands into vibrant variations to sustain collections and campaigns with versatility.",
    result: "O resultado é uma marca forte, dinâmica e proprietária, amarrada por um símbolo pensado em profundidade, a união entre seta e pássaro, que comunica direção e liberdade ao mesmo tempo. Além do sistema de identidade, desenvolvemos protótipos de peças e um protótipo de viseira para acelerar a entrada da marca no mundo real, conectando estratégia, design e produto em uma mesma entrega.",
    resultEn: "The result is a strong, dynamic, and proprietary brand, tied by a symbol thought in depth, the union between arrow and bird, which communicates direction and freedom at the same time. In addition to the identity system, we developed piece prototypes and a visor prototype to accelerate the brand's entry into the real world, connecting strategy, design, and product in the same delivery.",
    image: "/assets/69.webp",
    year: "2023",
    detailImages: [
      "/assets/projetos/PERSIST/persist imagem1.gif",
      "/assets/projetos/PERSIST/Relogio Digital _ Sao Paulo.webp",
      "/assets/projetos/PERSIST/persist2.webp",
      "/assets/projetos/PERSIST/mobile.gif",
      "/assets/projetos/PERSIST/persist1.webp"
    ]
  },
  {
    id: "oincookies",
    client: "Oincookies",
    title: "Identidade Visual",
    titleEn: "Visual Identity",
    // subtitle: "Sabor que marca presença", // Optional
    description: "Criar uma marca artesanal de cookies com presença proprietária, carismática e memorável, forte no digital e nas embalagens.",
    descriptionEn: "Create an artisanal cookie brand with proprietary, charismatic, and memorable presence, strong in digital and packaging.",
    construction: "O projeto começou com pesquisa de mercado e benchmark, identificando padrões repetidos no segmento e abrindo espaço para um sistema visual mais autoral. A direção uniu estética retrô pop, paleta quente e o mascote ÔINCO como elo simpático para dar voz à marca.",
    constructionEn: "The project started with market research and benchmark, identifying repeated patterns in the segment and opening space for a more authorial visual system. The direction united retro pop aesthetics, warm palette, and the OINCO mascot as a friendly link to give voice to the brand.",
    result: "Uma identidade reconhecível e consistente, pronta para crescer em desdobramentos de comunicação e linha de impressos. O mascote fortalece conexão com o público e torna o universo da marca mais vivo e expansível.",
    resultEn: "A recognizable and consistent identity, ready to grow in communication unfoldings and print line. The mascot strengthens connection with the audience and makes the brand universe more alive and expandable.",
    image: "/assets/74.webp",
    year: "2023",
    detailImages: [
      "/assets/projetos/OINCOOKIES/4.gif",
      "/assets/projetos/OINCOOKIES/_ Apresentação de IDV - OINCOOKIES.webp",
      "/assets/projetos/OINCOOKIES/OINCOOKIES3.webp",
      "/assets/projetos/OINCOOKIES/MASCOTE.webp",
      "/assets/projetos/OINCOOKIES/oincookies1.webp",
      "/assets/projetos/OINCOOKIES/oincokoies2.webp"
    ]
  },
  {
    id: "solvia-engenharia",
    client: "Solvia Engenharia",
    title: "Branding Completo",
    titleEn: "Full Branding",
    subtitle: "Renaming • Identidade Visual",
    subtitleEn: "Renaming • Visual Identity",
    description: "Conduzir um renaming e reposicionar a marca para um novo momento, mantendo a essência de confiança, qualidade e atendimento personalizado, agora com presença mais moderna e madura.",
    descriptionEn: "Conduct a renaming and reposition the brand for a new moment, maintaining the essence of trust, quality, and personalized service, now with a more modern and mature presence.",
    construction: "Eu liderei o naming e a identidade visual, e coordenei a etapa de branding para transformar o posicionamento em um sistema claro de comunicação. O nome SOLVIA nasce da ideia de “caminho para a solução”, com foco em simplificar processos e oferecer soluções eficientes e personalizadas.",
    constructionEn: "I led the naming and visual identity, and coordinated the branding stage to transform the positioning into a clear communication system. The name SOLVIA is born from the idea of \"path to solution\", focusing on simplifying processes and offering efficient and personalized solutions.",
    result: "Uma marca objetiva, transparente e orientada à solução, com diretrizes de tom de voz e linguagem visual prontas para crescer. A identidade tipográfica modular reforça precisão e estrutura, sustentando aplicações consistentes no digital e no offline.",
    resultEn: "An objective, transparent, and solution-oriented brand, with tone of voice and visual language guidelines ready to grow. The modular typographic identity reinforces precision and structure, sustaining consistent applications in digital and offline.",
    image: "/assets/72.webp",
    year: "2022",
    detailImages: [
      "/assets/projetos/SOLVIA/SOLVIA.gif",
      "/assets/projetos/SOLVIA/57.webp",
      "/assets/projetos/SOLVIA/58.webp",
      "/assets/projetos/SOLVIA/54.webp",
      "/assets/projetos/SOLVIA/48.webp"
    ]
  }
];

// --- SERVICES DATA ---

export interface ServiceContent {
  id: string;
  title: string; // PT Title
  titleEn: string;
  subtitle: string;
  subtitleEn: string;
  description: string;
  descriptionEn: string;
  tags: string[];
  tagsEn: string[];

  // Landing Page Specifics
  heroImage?: string; // Optional hero image for the service page
  narrative: {
    title: string;
    text: string;
  };
  narrativeEn: {
    title: string;
    text: string;
  };
  process: {
    title: string;
    steps: string[];
  };
  processEn: {
    title: string;
    steps: string[];
  };
}

export const services: ServiceContent[] = [
  {
    id: "identidade-visual",
    title: "Identidade Visual",
    titleEn: "Visual Identity",
    subtitle: "Sistema & Linguagem",
    subtitleEn: "System & Language",
    description: "Tradução da estratégia em códigos visuais proprietários. Criação de logotipos, tipografias, cores e elementos gráficos que garantem reconhecimento imediato e consistência em todos os pontos de contato.",
    descriptionEn: "Translating strategy into proprietary visual codes. Creating logos, typography, colors, and graphic elements that ensure immediate recognition and consistency across all touchpoints.",
    tags: ["Logotipo", "Universo Visual", "Brandbook"],
    tagsEn: ["Logo", "Visual Universe", "Brandbook"],
    narrative: {
      title: "Uma marca não é apenas vista, ela é sentida.",
      text: "A identidade visual vai muito além de um logotipo bonito. É a construção de um universo visual proprietário que traduz a essência do seu negócio em formas, cores e tipografia. Criamos sistemas visuais flexíveis e consistentes que permitem que sua marca se comunique com clareza e impacto em qualquer ponto de contato, seja digital ou físico."
    },
    narrativeEn: {
      title: "A brand is not just seen, it is felt.",
      text: "Visual identity goes far beyond a beautiful logo. It is the construction of a proprietary visual universe that translates the essence of your business into shapes, colors, and typography. We create flexible and consistent visual systems that allow your brand to communicate with clarity and impact at any touchpoint, whether digital or physical."
    },
    process: {
      title: "Como construímos",
      steps: [
        "Imersão e Pesquisa Visual",
        "Direção Criativa e Conceito",
        "Design do Sistema Visual",
        "Aplicação e Testes",
        "Entrega do Brandbook"
      ]
    },
    processEn: {
      title: "How we build it",
      steps: [
        "Immersion and Visual Research",
        "Creative Direction and Concept",
        "Visual System Design",
        "Application and Testing",
        "Brandbook Delivery"
      ]
    }
  },
  {
    id: "branding",
    title: "Branding",
    titleEn: "Branding",
    subtitle: "Construção de Marca",
    subtitleEn: "Brand Building",
    description: "Gestão completa da marca. Do Naming à definição do DNA e propósito, estruturamos a personalidade e a narrativa que conectarão o negócio ao seu público de forma autêntica e estratégica.",
    descriptionEn: "Complete brand management. From Naming to defining DNA and purpose, we structure the personality and narrative that will connect the business to its audience authentically and strategically.",
    tags: ["Naming", "Tom de Voz", "Plataforma de Marca"],
    tagsEn: ["Naming", "Tone of Voice", "Brand Platform"],
    narrative: {
      title: "Estratégia que define o futuro.",
      text: "Branding é sobre gerenciar percepções. Trabalhamos para descobrir e articular o que torna sua marca única. Definimos o propósito, a promessa e a personalidade que guiarão todas as decisões do negócio. É a base sólida que permite que sua empresa cresça com coerência e relevância no mercado."
    },
    narrativeEn: {
      title: "Strategy that defines the future.",
      text: "Branding is about managing perceptions. We work to discover and articulate what makes your brand unique. We define the purpose, promise, and personality that will guide all business decisions. It is the solid foundation that allows your company to grow with coherence and relevance in the market."
    },
    process: {
      title: "Nossa Abordagem",
      steps: [
        "Diagnóstico de Marca",
        "Definição de Plataforma de Marca",
        "Estratégia de Naming (se necessário)",
        "Universo Verbal e Tom de Voz",
        "Guia de Cultura"
      ]
    },
    processEn: {
      title: "Our Approach",
      steps: [
        "Brand Diagnosis",
        "Brand Platform Definition",
        "Naming Strategy (if needed)",
        "Verbal Universe and Tone of Voice",
        "Culture Guide"
      ]
    }
  },
  {
    id: "web",
    title: "Web Design",
    titleEn: "Web Design",
    subtitle: "Digital Experience",
    subtitleEn: "Digital Experience",
    description: "Interfaces digitais imersivas que unem estética e código de alta performance. Sites institucionais e landing pages desenvolvidos para conversão, com foco em otimização e experiência do usuário.",
    descriptionEn: "Immersive digital interfaces combining aesthetics and high-performance code. Institutional websites and landing pages developed for conversion, focusing on optimization and user experience.",
    tags: ["Sites", "Páginas de Vendas", "UI/UX", "Front-end"],
    tagsEn: ["Websites", "Sales Pages", "UI/UX", "Front-end"],
    narrative: {
      title: "Presença digital que converte.",
      text: "No mundo digital, seu site é sua sede. Projetamos experiências digitais que não são apenas visualmente impressionantes, mas também funcionais e orientadas para resultados. Unimos design de interface refinado (UI) com experiência do usuário (UX) intuitiva e desenvolvimento limpo para garantir performance e indexação."
    },
    narrativeEn: {
      title: "Digital presence that converts.",
      text: "In the digital world, your website is your headquarters. We design digital experiences that are not only visually stunning but also functional and result-oriented. We combine refined interface design (UI) with intuitive user experience (UX) and clean development to ensure performance and indexing."
    },
    process: {
      title: "Do Design ao Código",
      steps: [
        "Wireframing e UX",
        "UI Design e Prototipagem",
        "Desenvolvimento Front-end",
        "Otimização e SEO",
        "Lançamento"
      ]
    },
    processEn: {
      title: "From Design to Code",
      steps: [
        "Wireframing and UX",
        "UI Design and Prototyping",
        "Front-end Development",
        "Optimization and SEO",
        "Launch"
      ]
    }
  },
  {
    id: "estrategia",
    title: "Estratégia",
    titleEn: "Strategy",
    subtitle: "Consultoria & Diagnóstico",
    subtitleEn: "Consulting & Diagnosis",
    description: "O ponto de partida. Um mergulho profundo no negócio para diagnosticar o cenário atual e identificar oportunidades. A consultoria que direciona qual caminho criativo a marca deve seguir.",
    descriptionEn: "The starting point. A deep dive into the business to diagnose the current scenario and identify opportunities. The consultancy that directs which creative path the brand should follow.",
    tags: ["Diagnóstico", "Pesquisa de Mercado", "Workshops"],
    tagsEn: ["Diagnosis", "Market Research", "Workshops"],
    narrative: {
      title: "Olhar clínico para o seu negócio.",
      text: "Muitas vezes, o problema não é o logo, é o posicionamento. Nossa consultoria estratégica atua como um diagnóstico preciso para entender onde sua marca está e para onde ela pode ir. Analisamos mercado, concorrentes e público para traçar rotas claras de crescimento e diferenciação."
    },
    narrativeEn: {
      title: "Clinical eye for your business.",
      text: "Often, the problem isn't the logo, it's the positioning. Our strategic consultancy acts as a precise diagnosis to understand where your brand is and where it can go. We analyze the market, competitors, and audience to chart clear paths for growth and differentiation."
    },
    process: {
      title: "Etapas",
      steps: [
        "Briefing e Imersão",
        "Análise de Competidores",
        "Definição de Públicos",
        "Mapa de Oportunidades",
        "Plano de Ação"
      ]
    },
    processEn: {
      title: "Steps",
      steps: [
        "Briefing and Immersion",
        "Competitor Analysis",
        "Audience Definition",
        "Opportunities Map",
        "Action Plan"
      ]
    }
  },
  {
    id: "editorial",
    title: "Editorial",
    titleEn: "Editorial",
    subtitle: "Design Gráfico",
    subtitleEn: "Graphic Design",
    description: "Materiais impressos e digitais que materializam a autoridade da marca no mundo físico. Revistas, relatórios anuais, apresentações comerciais e design de embalagens.",
    descriptionEn: "Print and digital materials that materialize the brand's authority in the physical world. Magazines, annual reports, sales presentations, and packaging design.",
    tags: ["Diagramação", "Papelaria", "Embalagem"],
    tagsEn: ["Layout", "Stationery", "Packaging"],
    narrative: {
      title: "O design que se toca.",
      text: "Mesmo em um mundo digital, a experiência tátil e a apresentação visual de documentos são fundamentais para transmitir autoridade. O design editorial organiza informações complexas de forma elegante e legível, seja em uma revista, um relatório de impacto ou uma embalagem que se destaca na prateleira."
    },
    narrativeEn: {
      title: "Design you can touch.",
      text: "Even in a digital world, the tactile experience and visual presentation of documents are fundamental to conveying authority. Editorial design organizes complex information elegantly and legibly, whether in a magazine, an impact report, or packaging that stands out on the shelf."
    },
    process: {
      title: "O Processo",
      steps: [
        "Curadoria de Conteúdo",
        "Projeto Gráfico e Grid",
        "Diagramação e Composição",
        "Revisão e Finalização",
        "Fechamento de Arquivo"
      ]
    },
    processEn: {
      title: "The Process",
      steps: [
        "Content Curation",
        "Graphic Design and Grid",
        "Layout and Composition",
        "Review and Finalization",
        "File Output"
      ]
    }
  }
];