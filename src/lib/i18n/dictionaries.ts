export type Locale = "pt-BR" | "es" | "en";

export const LOCALES: Locale[] = ["pt-BR", "es", "en"];
export const DEFAULT_LOCALE: Locale = "pt-BR";

export const LOCALE_LABELS: Record<Locale, { short: string; full: string; flag: string }> = {
  "pt-BR": { short: "PT", full: "Português", flag: "🇧🇷" },
  es: { short: "ES", full: "Español", flag: "🇪🇸" },
  en: { short: "EN", full: "English", flag: "🇺🇸" },
};

export type Dictionary = {
  nav: {
    method: string;
    services: string;
    method_section: string;
    faq: string;
    cta: string;
  };
  hero: {
    eyebrow: string;
    niche_strip: string;
    h1_line1: string;
    h1_line2: string;
    aeo: string;
    sub: string;
    cta_primary: string;
    cta_secondary: string;
    trust_strip: string;
  };
  problem: {
    eyebrow: string;
    h2: string;
    intro: string;
    pains: string[];
  };
  solution: {
    eyebrow: string;
    h2: string;
    sub: string;
    pillars: Array<{ kicker: string; title: string; desc: string }>;
  };
  method: {
    eyebrow: string;
    h2: string;
    sub: string;
    steps: Array<{ n: string; title: string; desc: string }>;
  };
  features: {
    eyebrow: string;
    h2: string;
    items: Array<{ title: string; desc: string }>;
  };
  midCta: {
    h2: string;
    sub: string;
    cta: string;
  };
  trust: {
    eyebrow: string;
    h2: string;
    promise: string;
    notFor: string;
    forYou: string;
    notForList: string[];
    forYouList: string[];
  };
  comparison: {
    eyebrow: string;
    h2: string;
    sub: string;
    headers: { col1: string; col2: string; col3: string };
    rows: Array<{ topic: string; agency: string; zoomma: string }>;
    fairness: string;
  };
  faq: {
    eyebrow: string;
    h2: string;
    items: Array<{ q: string; a: string }>;
  };
  finalCta: {
    eyebrow: string;
    h2: string;
    sub: string;
    form: {
      name: string;
      whatsapp: string;
      instagram: string;
      email: string;
      challenge: string;
      challenge_options: string[];
      challenge_placeholder: string;
      submit: string;
      submitting: string;
      success_title: string;
      success_msg: string;
      success_whatsapp: string;
      error_msg: string;
      consent: string;
      microtrust: string[];
    };
  };
  footer: {
    tagline: string;
    rights: string;
    contact: string;
  };
  whatsapp: {
    fab_label: string;
    modal_title: string;
    modal_sub: string;
    name: string;
    whatsapp: string;
    submit: string;
    pre_msg: string;
  };
};

export const dictionaries: Record<Locale, Dictionary> = {
  "pt-BR": {
    nav: {
      method: "Método",
      services: "Serviços",
      method_section: "Como funciona",
      faq: "Dúvidas",
      cta: "Diagnóstico Estratégico",
    },
    hero: {
      eyebrow: "Para clínicas, salões e studios de beleza",
      niche_strip: "Clínicas de estética · Studios de beleza · Harmonização facial · Salões",
      h1_line1: "Pare de improvisar.",
      h1_line2: "Comece a escalar.",
      aeo: "A Zoomma trabalha com donos de negócios da beleza (salões, clínicas e harmonização) que são brasileiros ou hispanos nos EUA. A gente une estratégia, marketing e gestão comercial em um único lugar. Sem terceirização, sem estagiário. Sócios de verdade.",
      sub: "Se você fatura mas não enxerga clareza no crescimento, essa conversa é para você. Sem pacotes prontos. Sem promessa de milagre. Estratégia real, feita junto com você.",
      cta_primary: "Solicitar Diagnóstico",
      cta_secondary: "Ver como funciona",
      trust_strip: "Brasileiros e hispanos · Beleza · EUA · Estratégia + Execução",
    },
    problem: {
      eyebrow: "O que estamos vendo",
      h2: "Você não tem um problema de marketing. Tem um problema de clareza.",
      intro: "A gente conversa com vários donos de negócios de beleza. Os sintomas são parecidos.",
      pains: [
        "Faturamento cresce, mas a margem fica no mesmo lugar. Ninguém consegue explicar por quê.",
        "Anúncios rodando, leads chegando. Mas tem gente que marca e não aparece, e a agenda continua furada.",
        "Equipe de vendas fechando no improviso. Sem método, sem acompanhamento, sem saber quantos vão virar cliente.",
        "Conteúdo bonito no Instagram, mas sem motivo comercial. Isolado da oferta real.",
        "As decisões saem do achismo. Não de dados, não de estratégia.",
      ],
    },
    solution: {
      eyebrow: "A Zoomma",
      h2: "Não somos agência. Somos seu sócio de crescimento.",
      sub: "Três frentes juntas: estratégia, marketing e vendas. Os sócios metem a mão em tudo, não é tarefa de estagiário.",
      pillars: [
        {
          kicker: "01",
          title: "Estratégia de Negócio",
          desc: "A gente entra, analisa, entende onde você está, para onde quer ir e como chega lá. Isso vira seu plano.",
        },
        {
          kicker: "02",
          title: "Marketing que Vende",
          desc: "Conteúdo com propósito. Anúncios pensados para trazer clientes verdadeiros. Não estufamos números só para parecer que algo está funcionando.",
        },
        {
          kicker: "03",
          title: "Gestão de Vendas",
          desc: "Seu time aprende a vender com método. Scripts, acompanhamento estruturado, redução de no-shows. Lead que chega vira venda.",
        },
      ],
    },
    method: {
      eyebrow: "O Método Zoomma",
      h2: "Cinco etapas. Uma direção: crescimento que dura.",
      sub: "Sem fórmula pronta. Cada etapa é feita para seu negócio, pelos sócios.",
      steps: [
        {
          n: "01",
          title: "Estratégia",
          desc: "A gente analisa tudo. Seu positioning, seu mercado, seu potencial. Daí vem o plano.",
        },
        {
          n: "02",
          title: "Atração",
          desc: "Conteúdo que faz sentido. Anúncios para o público certo, falando a língua deles.",
        },
        {
          n: "03",
          title: "Conversão",
          desc: "Estruturamos o funil. Scripts, acompanhamento, redução de no-shows. Quem chega, fecha.",
        },
        {
          n: "04",
          title: "Retenção",
          desc: "Cliente que volta é ouro. A gente monta programas para que eles voltem sempre.",
        },
        {
          n: "05",
          title: "Crescimento",
          desc: "Você escala porque sabe quanto cada cliente custa e quanto deixa no caixa. Sem adivinhação.",
        },
      ],
    },
    features: {
      eyebrow: "O que muda no seu negócio",
      h2: "Cada entrega tem impacto direto na operação.",
      items: [
        {
          title: "Você entende seus números",
          desc: "Quanto custa cada cliente. Quanto ele deixa no caixa. Se está crescendo de verdade. A decisão passa a ser baseada em fato, não em palpite.",
        },
        {
          title: "Seu posicionamento vende",
          desc: "A mensagem conversa com quem você quer atender: brasileiros e hispanos no mercado de beleza dos EUA.",
        },
        {
          title: "Seu funil fecha",
          desc: "Do primeiro contato até venda recorrente. Com método, scripts, acompanhamento. Sem perder ninguém no caminho.",
        },
        {
          title: "Sua equipe aprende a vender",
          desc: "Ela para de improvisar. Começa a operar com método que funciona e que se repete.",
        },
        {
          title: "Seus anúncios geram venda",
          desc: "Não estufamos métrica. Cada real gasto traz cliente. O custo fica sob controle, a escala fica previsível.",
        },
        {
          title: "Sócios que cuidam de você",
          desc: "Renato, Bruno, Camila e Paola estão no seu projeto. Estratégia e execução vêm deles, não de estagiário.",
        },
      ],
    },
    midCta: {
      h2: "Cada mês que passa sem estratégia é margem que você não recupera.",
      sub: "O diagnóstico é de graça. O que você vai entender sobre seu negócio não tem preço.",
      cta: "Solicitar Diagnóstico",
    },
    trust: {
      eyebrow: "Nosso compromisso",
      h2: "A gente é honesto antes de tudo.",
      promise: "Antes de qualquer projeto, a gente dedica 48 horas para entender se realmente somos o parceiro certo para você agora. Se não formos, a gente fala direto. Porque o encaixe certo importa mais do que fechar um contrato a mais.",
      notFor: "A Zoomma não é para você se",
      forYou: "A Zoomma é para você se",
      notForList: [
        "Você quer agência que entrega post bonito todo dia e relatório no fim do mês.",
        "Você está procurando a fórmula mágica que escala sem tocar em nada do seu negócio.",
        "Você quer terceirizar tudo de marketing e não pensar mais nisso.",
        "Você espera ver resultado em uma semana.",
      ],
      forYouList: [
        "Você quer um sócio de verdade, envolvido na operação.",
        "Você tá aberto a encarar os dados, mesmo quando doem.",
        "Você entende que crescimento que dura leva tempo. Não é milagre.",
        "Você trabalha com beleza nos EUA e quer escalar com clareza.",
      ],
    },
    comparison: {
      eyebrow: "Zoomma vs Agência tradicional",
      h2: "Por que a gente não é agência.",
      sub: "Sem ataque a ninguém. É só um modelo de trabalho diferente.",
      headers: {
        col1: "Critério",
        col2: "Agência",
        col3: "Zoomma",
      },
      rows: [
        { topic: "Quem cuida de você", agency: "Times que cuidam de vários clientes", zoomma: "Sócios diretos no seu projeto" },
        { topic: "O que a gente entrega", agency: "Marketing. Só isso.", zoomma: "Estratégia, marketing e vendas juntas" },
        { topic: "O que importa", agency: "Cliques, curtidas, alcance", zoomma: "Clientes reais, margem, crescimento" },
        { topic: "Como funciona", agency: "Pacote pronto", zoomma: "Tudo customizado para você" },
        { topic: "Relação", agency: "Prestador de serviço", zoomma: "Sócio dedicado ao seu crescimento" },
        { topic: "Velocidade", agency: "Rápida desde o começo", zoomma: "Começa com diagnóstico, cresce na direção certa" },
      ],
      fairness: "Agência é rápida em tarefas pontuais. Se é só isso que você precisa, a gente não é a melhor saída. E tudo bem.",
    },
    faq: {
      eyebrow: "Dúvidas frequentes",
      h2: "Tudo que você precisa saber antes de conversar.",
      items: [
        {
          q: "O que é a Zoomma?",
          a: "A gente trabalha com donos de negócio de beleza (salões, clínicas, harmonização) que são brasileiros ou hispanos nos EUA. A gente une estratégia, marketing e vendas em um só lugar.",
        },
        {
          q: "Vocês trabalham com todos os tipos de negócio de beleza?",
          a: "Trabalhamos com quem já está operando e faturando. Quem quer clareza para crescer. Não atendemos quem está começando do zero, porque não é nosso foco.",
        },
        {
          q: "Quanto custa?",
          a: "Cada projeto é diferente. Depois do diagnóstico, a gente monta um plano com valor sob medida. Não temos pacote pronto.",
        },
        {
          q: "Em quanto tempo vejo resultado?",
          a: "Anúncios e leads aparecem em semanas. Mudança real de margem, posicionamento, cliente que volta, isso leva 90 a 180 dias. Quem promete menos que isso está brincando.",
        },
        {
          q: "Vocês falam português, espanhol e inglês?",
          a: "Sim. A gente trabalha nos três idiomas do mercado. Você escolhe qual quer usar e a gente conversa naquela língua.",
        },
        {
          q: "Quem cuida do meu projeto?",
          a: "Os sócios. Renato, Bruno, Camila e Paola. A gente não passa para estagiário. Camila e Paola conhecem o setor de beleza por dentro.",
        },
        {
          q: "Como a gente começa?",
          a: "Você preenche o formulário ou manda mensagem no WhatsApp. Em 48 horas, a gente analisa e fala se a gente é o parceiro certo para você agora.",
        },
      ],
    },
    finalCta: {
      eyebrow: "Próximo passo",
      h2: "Peça seu diagnóstico.",
      sub: "Em 48 horas, a gente entra em contato. Sem compromisso, sem pressão.",
      form: {
        name: "Seu nome",
        whatsapp: "WhatsApp (com DDI)",
        instagram: "Instagram do negócio (opcional)",
        email: "Seu email (opcional)",
        challenge: "Qual é seu maior desafio agora",
        challenge_options: [
          "Faturamento parado no mesmo lugar",
          "Cada cliente custa caro, margem é pequena",
          "Meu time de vendas não segue método nenhum",
          "Muita gente marca e não aparece",
          "Meu posicionamento é confuso",
          "Outro",
        ],
        challenge_placeholder: "Escolha uma opção",
        submit: "Solicitar diagnóstico",
        submitting: "Enviando...",
        success_title: "Recebemos seu pedido.",
        success_msg: "Em 48 horas, a gente liga para você com as primeiras análises.",
        success_whatsapp: "Enquanto aguarda, fale conosco no WhatsApp.",
        error_msg: "Algo deu errado. Tenta de novo ou manda mensagem no WhatsApp.",
        consent: "Ao enviar, você concorda em receber contato sobre o diagnóstico. Sem spam.",
        microtrust: ["Sem compromisso", "Resposta em 48h", "Gratuito"],
      },
    },
    footer: {
      tagline: "Crescimento sustentável para negócios de beleza nos EUA.",
      rights: "Todos os direitos reservados.",
      contact: "Contato",
    },
    whatsapp: {
      fab_label: "Conversar pelo WhatsApp",
      modal_title: "Fale com a Zoomma",
      modal_sub: "Deixa seu nome e WhatsApp que a gente conversa com você.",
      name: "Seu nome",
      whatsapp: "Seu WhatsApp (com DDI)",
      submit: "Conversar no WhatsApp",
      pre_msg: "Oi! Vi o site da Zoomma e quero entender como vocês podem me ajudar a crescer.",
    },
  },

  es: {
    nav: {
      method: "Método",
      services: "Servicios",
      method_section: "Cómo funciona",
      faq: "Preguntas",
      cta: "Diagnóstico",
    },
    hero: {
      eyebrow: "Para clínicas, salones y estudios de belleza",
      niche_strip: "Clínicas estéticas · Estudios de belleza · Armonización facial · Salones",
      h1_line1: "Deja de improvisar.",
      h1_line2: "Empieza a escalar.",
      aeo: "Zoomma trabaja con dueños de negocios de belleza (salones, clínicas y armonización) que son brasileños o hispanos en los EE.UU. Nosotros reunimos estrategia, marketing y gestión comercial en un mismo lugar. Sin tercerización, sin becarios. Socios de verdad.",
      sub: "Si factúas pero no ves claridad en el crecimiento, esta conversación es para ti. Sin paquetes listos. Sin promesa de milagro. Estrategia real, hecha contigo.",
      cta_primary: "Solicitar Diagnóstico",
      cta_secondary: "Ver cómo funciona",
      trust_strip: "Brasileños e hispanos · Belleza · EE.UU. · Estrategia + Ejecución",
    },
    problem: {
      eyebrow: "Lo que estamos viendo",
      h2: "No tienes problema de marketing. Tienes problema de claridad.",
      intro: "Hablamos con varios dueños de negocios de belleza. Los síntomas son parecidos.",
      pains: [
        "La facturación crece, pero la margen se queda en el mismo lugar. Nadie sabe por qué.",
        "Anuncios corriendo, leads llegando. Pero hay gente que agenda y no aparece, y la agenda sigue furada.",
        "Tu equipo de ventas cierra improvisando. Sin método, sin seguimiento, sin saber cuántos van a volver.",
        "Contenido bonito en Instagram, pero sin razón comercial. Desconectado de lo que realmente ofreces.",
        "Las decisiones salen de tu intuición. No de datos, no de estrategia.",
      ],
    },
    solution: {
      eyebrow: "Zoomma",
      h2: "No somos agencia. Somos tu socio de crecimiento.",
      sub: "Tres frentes juntos: estrategia, marketing y ventas. Los socios metemos la mano en todo, no es tarea de becario.",
      pillars: [
        {
          kicker: "01",
          title: "Estrategia de Negocio",
          desc: "Entramos, analizamos, entendemos dónde estás, adónde quieres ir y cómo llegas. Eso se convierte en tu plan.",
        },
        {
          kicker: "02",
          title: "Marketing que Vende",
          desc: "Contenido con propósito. Anuncios pensados para traer clientes reales. No inflamos números solo para parecer que algo funciona.",
        },
        {
          kicker: "03",
          title: "Gestión de Ventas",
          desc: "Tu equipo aprende a vender con método. Scripts, seguimiento estructurado, reducción de no-shows. Lead que llega se convierte en venta.",
        },
      ],
    },
    method: {
      eyebrow: "El Método Zoomma",
      h2: "Cinco etapas. Una dirección: crecimiento que dura.",
      sub: "Sin fórmula lista. Cada etapa se hace para tu negocio, por los socios.",
      steps: [
        { n: "01", title: "Estrategia", desc: "Analizamos todo. Tu posicionamiento, tu mercado, tu potencial. De ahí sale el plan." },
        { n: "02", title: "Atracción", desc: "Contenido que tiene sentido. Anuncios para el público correcto, hablándoles en su idioma." },
        { n: "03", title: "Conversión", desc: "Estructuramos el funnel. Scripts, seguimiento, reducción de no-shows. Quien llega, cierra." },
        { n: "04", title: "Retención", desc: "Cliente que vuelve es oro. Montamos programas para que regresen siempre." },
        { n: "05", title: "Crecimiento", desc: "Escalas porque sabes cuánto cuesta cada cliente y cuánto deja en tu caja. Sin adivinanzas." },
      ],
    },
    features: {
      eyebrow: "Qué cambia en tu negocio",
      h2: "Cada entrega tiene impacto directo en la operación.",
      items: [
        { title: "Entiendes tus números", desc: "Cuánto cuesta cada cliente. Cuánto deja en tu caja. Si realmente estás creciendo. La decisión se basa en hechos, no en intuición." },
        { title: "Tu posicionamiento vende", desc: "El mensaje conversa con quién quieres atender: brasileños e hispanos en el mercado de belleza de EE.UU." },
        { title: "Tu funnel cierra", desc: "Del primer contacto hasta venta recurrente. Con método, scripts, seguimiento. Sin perder a nadie en el camino." },
        { title: "Tu equipo aprende a vender", desc: "Deja de improvisar. Comienza a operar con método que funciona y se repite." },
        { title: "Tus anuncios generan ventas", desc: "No inflamos métrica. Cada peso gastado trae cliente. El costo está bajo control, la escala es predecible." },
        { title: "Socios que te cuidan", desc: "Renato, Bruno, Camila y Paola están en tu proyecto. Estrategia y ejecución vienen de ellos, no de becario." },
      ],
    },
    midCta: {
      h2: "Cada mes que pasa sin estrategia es margen que no recuperas.",
      sub: "El diagnóstico es de gratis. Lo que vas a entender sobre tu negocio no tiene precio.",
      cta: "Solicitar Diagnóstico",
    },
    trust: {
      eyebrow: "Nuestro compromiso",
      h2: "Somos honestos antes que nada.",
      promise: "Antes de cualquier proyecto, dedicamos 48 horas para entender si realmente somos el socio correcto para ti ahora. Si no lo somos, te lo decimos directo. Porque el encaje correcto importa más que cerrar un contrato más.",
      notFor: "Zoomma no es para ti si",
      forYou: "Zoomma es para ti si",
      notForList: [
        "Buscas agencia que entregue un post bonito cada día y reporte a fin de mes.",
        "Estás buscando la fórmula mágica que escala sin tocar nada de tu negocio.",
        "Quieres tercerizar todo en marketing y no pensar más en eso.",
        "Esperas ver resultado en una semana.",
      ],
      forYouList: [
        "Quieres un socio de verdad, involucrado en la operación.",
        "Estás abierto a encarar los datos, incluso cuando duelen.",
        "Entiendes que crecimiento que dura toma tiempo. No es milagro.",
        "Trabajas con belleza en EE.UU. y quieres escalar con claridad.",
      ],
    },
    comparison: {
      eyebrow: "Zoomma vs Agencia tradicional",
      h2: "Por qué no somos agencia.",
      sub: "Sin ataque a nadie. Es solo un modelo de trabajo diferente.",
      headers: { col1: "Criterio", col2: "Agencia", col3: "Zoomma" },
      rows: [
        { topic: "Quién te cuida", agency: "Equipos que cuidan varios clientes", zoomma: "Socios directos en tu proyecto" },
        { topic: "Qué entregas", agency: "Marketing. Solo eso.", zoomma: "Estrategia, marketing y ventas juntos" },
        { topic: "Qué importa", agency: "Clicks, likes, alcance", zoomma: "Clientes reales, margen, crecimiento" },
        { topic: "Cómo funciona", agency: "Paquete listo", zoomma: "Todo personalizado para ti" },
        { topic: "La relación", agency: "Proveedor de servicio", zoomma: "Socio dedicado a tu crecimiento" },
        { topic: "Velocidad", agency: "Rápida desde el inicio", zoomma: "Comienza con diagnóstico, crece en la dirección correcta" },
      ],
      fairness: "La agencia es rápida en tareas puntuales. Si es solo eso que necesitas, nosotros no somos la mejor salida. Y está bien.",
    },
    faq: {
      eyebrow: "Preguntas frecuentes",
      h2: "Todo lo que necesitas saber antes de conversar.",
      items: [
        { q: "¿Qué es Zoomma?", a: "Trabajamos con dueños de negocio de belleza (salones, clínicas, armonización) que son brasileños o hispanos en EE.UU. Reunimos estrategia, marketing y ventas en un mismo lugar." },
        { q: "¿Trabajan con todos los tipos de negocio de belleza?", a: "Trabajamos con quién ya está operando y facturando. Quién quiere claridad para crecer. No atendemos quien está empezando desde cero, porque no es nuestro foco." },
        { q: "¿Cuánto cuesta?", a: "Cada proyecto es diferente. Después del diagnóstico, armamos un plan con valor a medida. No tenemos paquete listo." },
        { q: "¿En cuánto tiempo veo resultado?", a: "Anuncios y leads aparecen en semanas. Cambio real de margen, posicionamiento, cliente que vuelve, eso toma 90 a 180 días. Quién promete menos está bromeando." },
        { q: "¿Hablan portugués, español e inglés?", a: "Sí. Trabajamos en los tres idiomas del mercado. Tú eliges cuál quieres usar y nosotros conversamos en ese idioma." },
        { q: "¿Quién cuida mi proyecto?", a: "Los socios. Renato, Bruno, Camila y Paola. Nosotros no pasamos a becario. Camila y Paola conocen el sector de belleza por dentro." },
        { q: "¿Cómo empezamos?", a: "Llenas el formulario o mandas mensaje por WhatsApp. En 48 horas, analizamos y te decimos si somos el socio correcto para ti ahora." },
      ],
    },
    finalCta: {
      eyebrow: "Siguiente paso",
      h2: "Pide tu diagnóstico.",
      sub: "En 48 horas, nosotros nos contactamos contigo. Sin compromiso, sin presión.",
      form: {
        name: "Tu nombre",
        whatsapp: "Tu WhatsApp (con código)",
        instagram: "Instagram del negocio (opcional)",
        email: "Tu email (opcional)",
        challenge: "Cuál es tu mayor desafío ahora",
        challenge_options: [
          "La facturación está parada en el mismo lugar",
          "Cada cliente cuesta caro, la margen es pequeña",
          "Mi equipo de ventas no sigue método ninguno",
          "Mucha gente agenda y no aparece",
          "Mi posicionamiento es confuso",
          "Otro",
        ],
        challenge_placeholder: "Elige una opción",
        submit: "Pedir diagnóstico",
        submitting: "Enviando...",
        success_title: "Recibimos tu pedido.",
        success_msg: "En 48 horas, nosotros te llamamos con los primeros análisis.",
        success_whatsapp: "Mientras esperas, escríbenos por WhatsApp.",
        error_msg: "Algo salió mal. Intenta de nuevo o envía mensaje por WhatsApp.",
        consent: "Al enviar, aceptas recibir contacto sobre el diagnóstico. Sin spam.",
        microtrust: ["Sin compromiso", "Respuesta en 48h", "Gratuito"],
      },
    },
    footer: {
      tagline: "Crecimiento sostenible para negocios de belleza en EE.UU.",
      rights: "Todos los derechos reservados.",
      contact: "Contacto",
    },
    whatsapp: {
      fab_label: "Conversar por WhatsApp",
      modal_title: "Habla con Zoomma",
      modal_sub: "Deja tu nombre y WhatsApp que nosotros conversamos contigo.",
      name: "Tu nombre",
      whatsapp: "Tu WhatsApp (con código)",
      submit: "Conversar en WhatsApp",
      pre_msg: "¡Hola! Vi el sitio de Zoomma y quiero entender cómo pueden ayudarme a crecer.",
    },
  },

  en: {
    nav: {
      method: "Method",
      services: "Services",
      method_section: "How it works",
      faq: "FAQ",
      cta: "Strategic Diagnosis",
    },
    hero: {
      eyebrow: "For clinics, salons and beauty studios",
      niche_strip: "Aesthetic clinics · Beauty studios · Facial harmonization · Salons",
      h1_line1: "Stop improvising.",
      h1_line2: "Start scaling.",
      aeo: "Zoomma works with beauty business owners (salons, clinics, harmonization) who are Brazilian or Hispanic in the U.S. We bring strategy, marketing, and sales together in one place. No outsourcing, no interns. Real partners.",
      sub: "If you're generating revenue but don't see clear growth, this is for you. No off-the-shelf packages. No promises of miracles. Real strategy, built with you.",
      cta_primary: "Request Diagnosis",
      cta_secondary: "See how it works",
      trust_strip: "Brazilians and Hispanics · Beauty · USA · Strategy + Execution",
    },
    problem: {
      eyebrow: "What we're seeing",
      h2: "You don't have a marketing problem. You have a clarity problem.",
      intro: "We talk with several beauty business owners. The symptoms are similar.",
      pains: [
        "Revenue grows, but margin stays flat. Nobody knows why.",
        "Ads running, leads coming. But people book and don't show up. Your calendar is still blocked.",
        "Your sales team closes by winging it. No method, no follow-through, no idea who comes back.",
        "Beautiful Instagram content, but no business reason. Disconnected from your actual offer.",
        "Decisions come from your gut. Not from data, not from strategy.",
      ],
    },
    solution: {
      eyebrow: "Zoomma",
      h2: "We're not an agency. We're your growth partner.",
      sub: "Three things work together: strategy, marketing, and sales. The partners are hands-on, not in the background.",
      pillars: [
        { kicker: "01", title: "Business Strategy", desc: "We come in, analyze, understand where you are and where you want to go. That becomes your plan." },
        { kicker: "02", title: "Marketing that Sells", desc: "Content with purpose. Ads built to bring real clients. We don't inflate numbers just to look good." },
        { kicker: "03", title: "Sales Management", desc: "Your team learns to sell with method. Scripts, follow-through, fewer no-shows. Leads that come in turn into sales." },
      ],
    },
    method: {
      eyebrow: "The Zoomma Method",
      h2: "Five stages. One direction: growth that lasts.",
      sub: "No cookie-cutter approach. Each stage is built for your business, by the partners.",
      steps: [
        { n: "01", title: "Strategy", desc: "We analyze everything. Your positioning, your market, your potential. That becomes the plan." },
        { n: "02", title: "Attraction", desc: "Content that makes sense. Ads for the right people, in their language." },
        { n: "03", title: "Conversion", desc: "We structure the funnel. Scripts, follow-through, fewer no-shows. Who comes in turns into a sale." },
        { n: "04", title: "Retention", desc: "Returning clients are gold. We build programs to keep them coming back." },
        { n: "05", title: "Growth", desc: "You scale because you know how much each client costs and what they bring in. No guessing." },
      ],
    },
    features: {
      eyebrow: "What changes in your business",
      h2: "Each delivery becomes direct operational impact.",
      items: [
        { title: "You understand your numbers", desc: "How much each client costs. What they bring to your bottom line. If you're really growing. Decisions come from facts, not hunches." },
        { title: "Your positioning sells", desc: "Your message reaches who you want: Brazilians and Hispanics in the U.S. beauty market." },
        { title: "Your funnel closes", desc: "From first contact to recurring sale. With method, scripts, follow-through. Nobody falls through the cracks." },
        { title: "Your team learns to sell", desc: "They stop winging it. They operate with a method that works and repeats." },
        { title: "Your ads generate sales", desc: "We don't inflate metrics. Every dollar spent brings clients. Costs stay under control, scale is predictable." },
        { title: "Partners who care", desc: "Renato, Bruno, Camila and Paola are on your project. Strategy and execution come from them, not interns." },
      ],
    },
    midCta: {
      h2: "Every month without strategy is margin you don't get back.",
      sub: "The diagnosis is free. What you learn about your business is priceless.",
      cta: "Request Diagnosis",
    },
    trust: {
      eyebrow: "Our commitment",
      h2: "We're honest before anything else.",
      promise: "Before any project, we spend 48 hours understanding if we're truly the right partner for you now. If we're not, we say it straight. Because the right fit matters more than signing another contract.",
      notFor: "Zoomma is NOT for you if",
      forYou: "Zoomma IS for you if",
      notForList: [
        "You want an agency that delivers pretty posts and an end-of-month report.",
        "You're looking for the 'magic formula' that scales without touching the business.",
        "You want to outsource marketing and never think about it again.",
        "You expect results in 7 days.",
      ],
      forYouList: [
        "You want a strategic partner involved in the operation.",
        "You're willing to look at the data — even the uncomfortable parts.",
        "You understand sustainable growth takes time — it's not a miracle.",
        "You operate in the U.S. beauty market and want to scale with clarity.",
      ],
    },
    comparison: {
      eyebrow: "Zoomma vs Traditional agency",
      h2: "Why we're not an agency.",
      sub: "No attack on anyone here. Just a real difference in working model.",
      headers: { col1: "Criterion", col2: "Traditional agency", col3: "Zoomma" },
      rows: [
        { topic: "Who owns the strategy", agency: "Teams juggling many clients at once", zoomma: "Partners directly involved" },
        { topic: "Scope", agency: "Marketing in isolation", zoomma: "Strategy + marketing + sales" },
        { topic: "Key metric", agency: "Clicks, reach and likes", zoomma: "Clients generated, margin and real growth" },
        { topic: "Model", agency: "Rigid package", zoomma: "Custom project" },
        { topic: "Posture", agency: "Service vendor", zoomma: "Dedicated strategic partner" },
        { topic: "Execution speed", agency: "Fast delivery from day one", zoomma: "Starts with diagnosis — to grow in the right direction" },
      ],
      fairness: "Yes, an agency delivers fast on point tasks. If that's what you need, we're not the best fit — and that's fine.",
    },
    faq: {
      eyebrow: "Frequently asked",
      h2: "Everything you need to know before talking.",
      items: [
        { q: "What is Zoomma?", a: "Zoomma is a strategic marketing consultancy for beauty businesses — salons, clinics and aesthetic harmonization — operated by Brazilians and Hispanics in the U.S. We integrate strategy, marketing and commercial management." },
        { q: "Do you work with any beauty business?", a: "We work with operating businesses, generating revenue, that want clarity to scale. We don't serve those starting from scratch — it's not our focus." },
        { q: "How much does it cost?", a: "Each project is unique. After the 48-hour diagnosis, we present a custom plan and investment. We don't work with rigid packages." },
        { q: "How long until I see results?", a: "Traffic and lead-gen results show up in weeks. Structural results — margin, positioning, retention — take 90 to 180 days. Any shorter timeline promise should be evaluated carefully." },
        { q: "Do you work in Portuguese, Spanish and English?", a: "Yes. We operate in all three market languages: PT-BR, ES and EN. All communication happens in the language you prefer." },
        { q: "Who runs my project?", a: "The partners — Renato, Bruno, Camila and Paola. Strategy goes through us. Camila and Paola bring direct expertise from the beauty sector." },
        { q: "How does it start?", a: "You fill out the form or click WhatsApp. Within 48 hours we run an initial analysis and tell you if Zoomma is the right partner for your moment." },
      ],
    },
    finalCta: {
      eyebrow: "Next step",
      h2: "Request your Strategic Diagnosis.",
      sub: "Within 48 hours, we'll reach out to begin the analysis process. No commitment and no sales pressure.",
      form: {
        name: "Full name",
        whatsapp: "WhatsApp (with country code)",
        instagram: "Business Instagram",
        email: "Email (optional)",
        challenge: "Biggest challenge today",
        challenge_options: [
          "Stagnant revenue",
          "High client cost / low margin",
          "Sales team without method",
          "Too many missed appointments / cold leads",
          "Confused positioning",
          "Other",
        ],
        challenge_placeholder: "Select",
        submit: "Request Diagnosis",
        submitting: "Sending...",
        success_title: "We've received your request.",
        success_msg: "Within 48 hours, a Zoomma partner will reach out with the initial analysis.",
        success_whatsapp: "While you wait, message us on WhatsApp.",
        error_msg: "Something went wrong. Try again or message us on WhatsApp.",
        consent: "By submitting, you agree to be contacted about the diagnosis. No spam.",
        microtrust: ["No commitment", "48h response", "Free"],
      },
    },
    footer: {
      tagline: "Strategic growth partner for the beauty market.",
      rights: "All rights reserved.",
      contact: "Contact",
    },
    whatsapp: {
      fab_label: "Chat on WhatsApp",
      modal_title: "Chat with Zoomma",
      modal_sub: "Leave your name and WhatsApp so we can chat with context.",
      name: "Your name",
      whatsapp: "WhatsApp (with country code)",
      submit: "Continue on WhatsApp",
      pre_msg: "Hi! I came from the Zoomma website and I'd like to understand how you can help me.",
    },
  },
};

export function detectLocale(input?: string | null): Locale {
  if (!input) return DEFAULT_LOCALE;
  const norm = input.toLowerCase();
  if (norm.startsWith("pt")) return "pt-BR";
  if (norm.startsWith("es")) return "es";
  if (norm.startsWith("en")) return "en";
  return DEFAULT_LOCALE;
}
