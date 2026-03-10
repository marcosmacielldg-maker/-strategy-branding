import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'pt' | 'en';

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const translations = {
    pt: {
        // Navbar
        'nav.projects': 'Projetos',
        'nav.solutions': 'Soluções',
        'nav.method': 'Metodologia',
        'nav.contact': 'Contato',
        'nav.book': 'Agendar Chamada',
        'nav.journey': 'A Jornada',

        // Hero
        'hero.badge': 'Estratégia & Branding',
        'hero.description': 'Da estratégia à experiência: mapeamos a jornada da sua marca, criando uma identidade que impacta e conecta.',
        'hero.cta': 'Inicie a jornada da sua marca',

        // About
        'about.step0.1': 'Sou Marcos Maciel,',
        'about.step0.2': 'estrategista criativo',
        'about.step0.3': 'especializado em marcas.',
        'about.step1.1': 'Há 4 anos atuo na interseção entre ',
        'about.step1.publicity': 'publicidade',
        'about.step1.2': ', ',
        'about.step1.direction': 'direção criativa',
        'about.step1.3': ' e ',
        'about.step1.strategy': 'estratégia',
        'about.step2.1': 'Formado em Publicidade, passei por agências e estúdios, coliderei projetos de branding e comunicação para marcas que buscam se posicionar com ',
        'about.step2.auth': 'autenticidade',
        'about.step2.vision': 'visão de futuro',
        'about.stack': 'Stack Criativa',
        'about.stack.branding': 'Branding',
        'about.stack.direction': 'Direção Criativa',
        'about.stack.web': 'Web Design',
        'about.stack.copy': 'Redação Publicitária',

        // Brand Stories
        'stories.title': 'Histórias de',
        'stories.subtitle': 'Projetos Selecionados',
        'stories.view_project': 'Ver projeto',
        'stories.years': '2021 — 2024',

        // Journey
        'journey.title': 'A Jornada',
        'journey.subtitle': 'Como trabalhamos',
        'journey.step1.title': 'Imersão',
        'journey.step1.desc': 'Entendemos o seu negócio a fundo.',
        'journey.step2.title': 'Estratégia',
        'journey.step2.desc': 'Definimos o caminho para o sucesso.',
        'journey.step3.title': 'Criação',
        'journey.step3.desc': 'Damos vida à marca visualmente.',
        'journey.step4.title': 'Entrega',
        'journey.step4.desc': 'Todo o material que você precisa.',

        // Methodology
        'method.title': 'RITMO',
        'method.subtitle': 'O Ritmo da Marca',
        'method.desc': 'Nosso processo é dividido em 5 etapas fundamentais.',
        'method.step0.title': 'Reconhecimento',
        'method.step0.desc': 'Mergulhamos no universo da marca para entender o cenário, o público e os objetivos.',
        'method.step1.title': 'Identidade',
        'method.step1.desc': 'Definimos a essência, o propósito e a personalidade que guiarão toda a comunicação.',
        'method.step2.title': 'Território',
        'method.step2.desc': 'Exploramos caminhos visuais e verbais para traduzir a estratégia em códigos proprietários.',
        'method.step3.title': 'Materialização',
        'method.step3.desc': 'Refinamos e tangibilizamos a marca em todos os seus pontos de contato.',
        'method.step4.title': 'Orquestração',
        'method.step4.desc': 'Entregamos o brandbook e preparamos a marca para ser lançada e gerida com consistência.',


        // Contact
        'contact.title': 'Vamos conversar?',
        'contact.subtitle': 'Entre em contato para discutirmos o seu projeto.',
        'contact.name': 'Seu nome',
        'contact.company': 'Nome da sua empresa:',
        'contact.company_ph': 'Seu negócio',
        'contact.email': 'Seu e-mail',
        'contact.email_ph': 'ola@empresa.com',
        'contact.need': 'Qual a sua necessidade hoje?',
        'contact.path': 'Escolha o caminho (serviço)',
        'contact.services.branding': 'Branding & Estratégia',
        'contact.services.visual': 'Identidade Visual',
        'contact.services.editorial': 'Editorial / Design',
        'contact.services.web': 'Web Design',
        'contact.services.consulting': 'Consultoria',
        'contact.services.other': 'Outros',
        'contact.message': 'Fale sobre o seu projeto (objetivos, prazos, orçamento...)',
        'contact.send': 'Enviar Mensagem',
        'contact.sending': 'Enviando...',
        'contact.sent_title': 'Mensagem enviada!',
        'contact.sent_desc': 'Obrigado pelo contato.',
        'contact.sent_desc2': 'Responderei em breve.',
        'contact.send_another': 'Enviar outra',
        'contact.error': 'Erro ao enviar. Tente novamente.',
        'contact.call_title': 'Prefere uma chamada rápida?',
        'contact.call_desc': 'Vamos bater um papo e entender a melhor forma de tirar suas ideias do papel.',
        'contact.duration': 'Duração média: 15 minutos',
        'contact.schedule': 'Agendar chamada',
        'contact.whatsapp': 'Ou chame no WhatsApp',

        // Services
        'services.title': 'Soluções',
        'services.subtitle': 'Estratégicas',
        'services.description': 'Comunicação estratégica orientada por posicionamento, clareza e intenção. Cada decisão é pensada para construir percepção, fortalecer marca e sustentar crescimento no longo prazo.',
        'services.cta': 'Solicitar orçamento',

        // Service Detail
        'service.back': 'Voltar',
        'service.cta_title': 'Pronto para transformar sua marca?',
        'service.cta_button': 'Iniciar Projeto',
        'service.methodology': 'Metodologia',

        // Project Detail
        'project.not_found': 'Projeto não encontrado',
        'project.back_home': 'Voltar para Home',
        'project.back': 'Voltar',
        'project.challenge': 'Desafio',
        'project.construction': 'Construção',
        'project.result': 'Resultado',
        'project.menu': 'Menu Principal',
        'project.view_all': 'Ver todos os projetos',
        'project.next': 'Próximo Projeto',
        'project.start': 'Iniciar Projeto',

        // Footer
        'footer.rights': '© 2026 Marcos Maciel. Todos os direitos reservados.',

        // Brand Stories (Missing)
        'stories.impact': 'Impacto',
        'stories.desc': 'Marcas gerados por mim.',
        'stories.status': 'Status',
        'stories.explore': 'Explorar',
        'stories.navigate': 'Navegue pelos projetos',
        'stories.paused': 'Pausado',
        'stories.exploring': 'Explorando',
        'stories.autoplay': 'Autoplay ON',

        // Journey (Missing)
        'journey.headline': 'Toda marca é uma jornada.',
        'journey.subheadline': 'Mas nenhuma trilha começa sem direção.',
        'journey.tagline.prefix': 'Marcas',
        'journey.tagline.suffix': 'são construídas com intenção, não por acaso.',
        'journey.words.authentic': 'autênticas',
        'journey.words.strategic': 'estratégicas',
        'journey.words.memorable': 'memoráveis',
        'journey.words.consistent': 'consistentes',
        'journey.cta': 'Comece a desenhar a rota',

        // Feedbacks
        'feedbacks.badge': 'Feedbacks',
        'feedbacks.impact': 'O impacto da',
        'feedbacks.strategy': 'estratégia bem aplicada',
        'feedbacks.desc': 'Parceiros que transformaram seus negócios através de uma nova identidade e posicionamento.',
        'feedbacks.patricia.text': 'Marcos, seu trabalho é excepcional. Você conseguiu transformar nossas conversas e ideias em algo concreto, capturando com precisão a essência da marca. Mais do que técnica, você entregou presença, dedicação e aquele algo a mais que poucos oferecem. Num mundo onde muitos fazem o mínimo, você se propõe a dar o seu melhor — e entrega.',
        'feedbacks.patricia.role': 'Fundadora, Persist',
        'feedbacks.pamela.text': 'A YW Lab Studio tomou forma, cores e personalidade pelas mãos do Marcos. O processo criativo foi leve e intenso. Somos gratos pelo olhar minucioso, entendimento do universo do studio e apresentação excelente, digna de elogios até do Kimura.',
        'feedbacks.pamela.role': 'CEO, YW Lab Studio',
        'feedbacks.gabriela.text': 'Está aprovado, eu superei minhas expectativas, eu não sabia que era possível fazer tanta coisa assim. Achei muito legal as aplicações, outdoor, produtos e a humanização com o mascote.',
        'feedbacks.gabriela.role': 'Fundadora, Oincookies',
        'feedbacks.barbara.text': 'Realmente ficou muito bom. A questão de cores funcionou de uma forma indescritível e o encaixe das letras ficou perfeito. O trabalho de vocês, para mim, ficou perfeito; vocês sempre entregam mais do que eu esperava. Ficou maravilhoso.',
        'feedbacks.barbara.role': 'Sobre sua marca pessoal',
        'feedbacks.flavio.text': 'Aprovado, sensacional!',
        'feedbacks.flavio.role': 'CEO, Solique',
        'feedbacks.vanessa.text': 'O Marcos conseguiu captar exatamente o que eu queria, e transformou isso em uma marca forte e com propósito. O resultado final ficou incrível.',
        'feedbacks.vanessa.role': 'Estrategista Digital',
    },
    en: {
        // Navbar
        'nav.projects': 'Projects',
        'nav.solutions': 'Solutions',
        'nav.method': 'Methodology',
        'nav.contact': 'Contact',
        'nav.book': 'Book a Call',
        'nav.journey': 'The Journey',

        // Hero
        'hero.badge': 'Strategy & Branding',
        'hero.description': 'From strategy to experience: we map your brand\'s journey, creating an identity that impacts and connects.',
        'hero.cta': 'Start your brand journey',

        // About
        'about.step0.1': 'I am Marcos Maciel,',
        'about.step0.2': 'creative strategist',
        'about.step0.3': 'specialized in brands.',
        'about.step1.1': 'For 4 years I act at the intersection of ',
        'about.step1.publicity': 'advertising',
        'about.step1.2': ', ',
        'about.step1.direction': 'creative direction',
        'about.step1.3': ' and ',
        'about.step1.strategy': 'strategy',
        'about.step2.1': 'Graduated in Advertising, passed through agencies and studios, co-led branding and communication projects for brands seeking to position themselves with ',
        'about.step2.auth': 'authenticity',
        'about.step2.vision': 'future vision',
        'about.stack': 'Creative Stack',
        'about.stack.branding': 'Branding',
        'about.stack.direction': 'Creative Direction',
        'about.stack.web': 'Web Design',
        'about.stack.copy': 'Copywriting',

        // Brand Stories
        'stories.title': 'Stories of',
        'stories.subtitle': 'Selected Projects',
        'stories.view_project': 'View project',
        'stories.years': '2021 — 2024',

        // Journey
        'journey.title': 'The Journey',
        'journey.subtitle': 'How we work',
        'journey.step1.title': 'Immersion',
        'journey.step1.desc': 'We understand your business deeply.',
        'journey.step2.title': 'Strategy',
        'journey.step2.desc': 'We define the path to success.',
        'journey.step3.title': 'Creation',
        'journey.step3.desc': 'We bring the brand to life visually.',
        'journey.step4.title': 'Delivery',
        'journey.step4.desc': 'All the material you need.',

        // Methodology
        'method.title': 'Methodology',
        'method.subtitle': 'Brand Rhythm',
        'method.desc': 'Our process is divided into 5 fundamental steps.',
        'method.step0.title': 'Recognition',
        'method.step0.desc': 'We dive into the brand universe to understand the scenario, audience, and objectives.',
        'method.step1.title': 'Identity',
        'method.step1.desc': 'We define the essence, purpose, and personality that will guide all communication.',
        'method.step2.title': 'Territory',
        'method.step2.desc': 'We explore visual and verbal paths to translate strategy into proprietary codes.',
        'method.step3.title': 'Materialization',
        'method.step3.desc': 'We refine and materialize the brand across all its touchpoints.',
        'method.step4.title': 'Orchestration',
        'method.step4.desc': 'We deliver the brandbook and prepare the brand to be launched and managed consistently.',

        // Contact
        'contact.title': 'Let\'s talk?',
        'contact.subtitle': 'Get in touch to discuss your project.',
        'contact.name': 'Your name',
        'contact.company': 'Company name:',
        'contact.company_ph': 'Your business',
        'contact.email': 'Your email',
        'contact.email_ph': 'hello@company.com',
        'contact.need': 'What is your need today?',
        'contact.path': 'Choose a path (service)',
        'contact.services.branding': 'Branding & Strategy',
        'contact.services.visual': 'Visual Identity',
        'contact.services.editorial': 'Editorial / Design',
        'contact.services.web': 'Web Design',
        'contact.services.consulting': 'Consulting',
        'contact.services.other': 'Others',
        'contact.message': 'Tell us about your project (goals, timeline, budget...)',
        'contact.send': 'Send Message',
        'contact.sending': 'Sending...',
        'contact.sent_title': 'Message sent!',
        'contact.sent_desc': 'Thanks for contacting.',
        'contact.sent_desc2': 'I will reply shortly.',
        'contact.send_another': 'Send another',
        'contact.error': 'Error sending. Try again.',
        'contact.call_title': 'Prefer a quick call?',
        'contact.call_desc': 'Let\'s have a chat and understand the best way to get your ideas off the paper.',
        'contact.duration': 'Avg. duration: 15 minutes',
        'contact.schedule': 'Schedule call',
        'contact.whatsapp': 'Or chat on WhatsApp',

        // Services
        'services.title': 'Solutions',
        'services.subtitle': 'Strategic',
        'services.description': 'Strategic communication driven by positioning, clarity, and intention. Every decision is made to build perception, strengthen the brand, and sustain long-term growth.',
        'services.cta': 'Request a Quote',

        // Service Detail
        'service.back': 'Back',
        'service.cta_title': 'Ready to transform your brand?',
        'service.cta_button': 'Start Project',
        'service.methodology': 'Methodology',

        // Project Detail
        'project.not_found': 'Project not found',
        'project.back_home': 'Back to Home',
        'project.back': 'Back',
        'project.challenge': 'Challenge',
        'project.construction': 'Construction',
        'project.result': 'Result',
        'project.menu': 'Main Menu',
        'project.view_all': 'View all projects',
        'project.next': 'Next Project',
        'project.start': 'Start Project',

        // Footer
        'footer.rights': '© 2026 Marcos Maciel. All rights reserved.',

        // Brand Stories (Missing)
        'stories.impact': 'Impact',
        'stories.desc': 'Brands generated by me.',
        'stories.status': 'Status',
        'stories.explore': 'Explore',
        'stories.navigate': 'Browse projects',
        'stories.paused': 'Paused',
        'stories.exploring': 'Exploring',
        'stories.autoplay': 'Autoplay ON',

        // Journey (Missing)
        'journey.headline': 'Every brand is a journey.',
        'journey.subheadline': 'But no trail begins without direction.',
        'journey.tagline.prefix': 'Brands',
        'journey.tagline.suffix': 'are built with intention, not by chance.',
        'journey.words.authentic': 'authentic',
        'journey.words.strategic': 'strategic',
        'journey.words.memorable': 'memorable',
        'journey.words.consistent': 'consistent',
        'journey.cta': 'Start plotting the route',

        // Feedbacks
        'feedbacks.badge': 'Feedbacks',
        'feedbacks.impact': 'The impact of',
        'feedbacks.strategy': 'strategy well applied',
        'feedbacks.desc': 'Partners who transformed their businesses through a new identity and positioning.',
        'feedbacks.patricia.text': 'Marcos, his work is exceptional. You managed to transform our conversations and ideas into something concrete, capturing precisely the essence of the brand. More than technique, you delivered presence, dedication, and that something extra that few offer. In a world where many do the minimum, you propose to give your best — and deliver.',
        'feedbacks.patricia.role': 'Founder, Persist',
        'feedbacks.pamela.text': 'YW Lab Studio took shape, colors, and personality by the hands of Marcos. The creative process was light and intense. We are grateful for the meticulous look, understanding of the studio universe, and excellent presentation, worthy of praise even from Kimura.',
        'feedbacks.pamela.role': 'CEO, YW Lab Studio',
        'feedbacks.gabriela.text': 'It\'s approved, I exceeded my expectations, I didn\'t know it was possible to do so much like this. I found the applications, outdoor, products, and humanization with the mascot very cool.',
        'feedbacks.gabriela.role': 'Founder, Oincookies',
        'feedbacks.barbara.text': 'Really it became very good. The color issue worked in an indescribable way and the fitting of the letters was perfect. Your work, for me, was perfect; you always deliver more than I expected. It was wonderful.',
        'feedbacks.barbara.role': 'About her personal brand',
        'feedbacks.flavio.text': 'Approved, sensational!',
        'feedbacks.flavio.role': 'CEO, Solique',
        'feedbacks.vanessa.text': 'Marcos managed to capture exactly what I wanted, and transformed this into a strong and purposeful brand. The final result was incredible.',
        'feedbacks.vanessa.role': 'Digital Strategist',
    }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [language, setLanguage] = useState<Language>('pt');

    const t = (key: string) => {
        return (translations[language] as any)[key] || key;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
