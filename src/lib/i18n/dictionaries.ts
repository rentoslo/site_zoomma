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
      aeo: "A Zoomma é uma consultoria estratégica de marketing para negócios da beleza — salões, clínicas e harmonização — operados por brasileiros e hispanos nos Estados Unidos. Unimos estratégia de negócio, marketing orientado a vendas e gestão comercial em um único parceiro.",
      sub: "Para donos de negócios da beleza nos EUA que faturam, mas não enxergam clareza de crescimento. Sem pacotes engessados. Sem promessas vazias. Estratégia real, executada com você.",
      cta_primary: "Solicitar Diagnóstico",
      cta_secondary: "Ver como funciona",
      trust_strip: "Brasileiros e hispanos · Beleza · EUA · Estratégia + Execução",
    },
    problem: {
      eyebrow: "O que estamos vendo",
      h2: "Você não tem um problema de marketing. Você tem um problema de clareza.",
      intro: "Conversamos com dezenas de donos de negócios da beleza. Os sintomas se repetem:",
      pains: [
        "Faturamento que cresce, mas margem que não acompanha — e ninguém sabe explicar por quê.",
        "Tráfego pago rodando, leads chegando — mas clientes que marcam e não aparecem ainda travam a agenda.",
        "Equipe de vendas fechando no improviso, sem método, sem acompanhamento do cliente, sem previsibilidade.",
        "Conteúdo bonito no Instagram, sem propósito comercial, sem ligação com a oferta.",
        "Decisões tomadas no achismo — não em dados, não em estratégia.",
      ],
    },
    solution: {
      eyebrow: "A Zoomma",
      h2: "Não somos agência. Somos seu parceiro estratégico de crescimento.",
      sub: "Três frentes integradas, com participação direta dos sócios na estratégia. Marketing que conversa com vendas que conversa com negócio.",
      pillars: [
        {
          kicker: "01",
          title: "Estratégia de Negócio",
          desc: "Diagnóstico profundo, posicionamento, plano de crescimento. Você sai sabendo onde está, para onde vai e como chega lá.",
        },
        {
          kicker: "02",
          title: "Marketing Orientado a Vendas",
          desc: "Conteúdo com propósito comercial. Tráfego pago pensado para trazer clientes reais — não para inflar números sem retorno.",
        },
        {
          kicker: "03",
          title: "Gestão Comercial",
          desc: "Treinamento de vendas, scripts, acompanhamento estruturado do cliente e redução de agendamentos perdidos. Lead que chega, lead que fecha.",
        },
      ],
    },
    method: {
      eyebrow: "O Método Zoomma",
      h2: "Cinco etapas. Uma direção: crescimento sustentável.",
      sub: "Nada de framework genérico. Cada etapa é desenhada para o seu negócio — pelos sócios.",
      steps: [
        {
          n: "01",
          title: "Estratégia",
          desc: "Diagnóstico, posicionamento e plano. Antes de tocar em qualquer anúncio, entendemos o negócio.",
        },
        {
          n: "02",
          title: "Atração",
          desc: "Conteúdo e mídia paga calibrados para o público certo, com mensagem alinhada à oferta.",
        },
        {
          n: "03",
          title: "Conversão",
          desc: "Funil comercial estruturado: scripts, acompanhamento do cliente, redução de agendamentos perdidos e fechamento previsível.",
        },
        {
          n: "04",
          title: "Retenção",
          desc: "Programas de recorrência, pós-venda e ciclo de vida. Cliente que volta vale 5× o que entra.",
        },
        {
          n: "05",
          title: "Crescimento",
          desc: "Escala com previsibilidade — não com ansiedade. Decisões em dados, não em achismo.",
        },
      ],
    },
    features: {
      eyebrow: "O que muda no seu negócio",
      h2: "Cada entrega vira impacto direto na operação.",
      items: [
        {
          title: "Clareza de números",
          desc: "Você passa a entender quanto custa conquistar cada cliente, quanto ele deixa no seu negócio e se está crescendo de verdade. Decisão vira dado, não achismo.",
        },
        {
          title: "Posicionamento que vende",
          desc: "Mensagem que conversa com o público real — brasileiros e hispanos no mercado americano da beleza.",
        },
        {
          title: "Funil que fecha",
          desc: "De primeiro contato a venda recorrente, com scripts, acompanhamento e redução de agendamentos perdidos.",
        },
        {
          title: "Equipe treinada",
          desc: "Sua equipe de vendas para de improvisar e passa a operar com método replicável.",
        },
        {
          title: "Tráfego com ROI",
          desc: "Mídia paga conectada à venda, não a curtidas. Custo por cliente sob controle, escala previsível.",
        },
        {
          title: "Sócios envolvidos",
          desc: "Os sócios — Renato, Bruno, Camila e Paola — participam ativamente de cada projeto, garantindo direção estratégica e qualidade na execução.",
        },
      ],
    },
    midCta: {
      h2: "Cada mês de improviso é um mês de margem que você não recupera.",
      sub: "O diagnóstico é gratuito. O que você vai descobrir sobre seu negócio, não tem preço.",
      cta: "Solicitar Diagnóstico Estratégico",
    },
    trust: {
      eyebrow: "Nosso compromisso",
      h2: "Integridade e honestidade acima de tudo.",
      promise: "Antes de iniciar qualquer projeto, dedicamos 48 horas para entender se somos realmente o parceiro certo para você neste momento. Se não formos, dizemos com clareza — porque acreditamos que o encaixe certo importa mais do que fechar mais um contrato.",
      notFor: "A Zoomma não é para você se",
      forYou: "A Zoomma é para você se",
      notForList: [
        "Você quer agência que entrega post bonito e relatório no fim do mês.",
        "Você busca a 'fórmula mágica' que escala sem mexer no negócio.",
        "Você quer terceirizar marketing e nunca mais pensar nisso.",
        "Você espera resultado em 7 dias.",
      ],
      forYouList: [
        "Você quer um parceiro estratégico envolvido na operação.",
        "Você está disposto a olhar para os dados — mesmo os incômodos.",
        "Você entende que crescimento sustentável leva tempo, não é milagre.",
        "Você opera no mercado da beleza nos EUA e quer escalar com clareza.",
      ],
    },
    comparison: {
      eyebrow: "Zoomma vs Agência tradicional",
      h2: "Por que não somos uma agência.",
      sub: "Não há ataque a ninguém aqui. Só uma diferença real de modelo de trabalho.",
      headers: {
        col1: "Critério",
        col2: "Agência tradicional",
        col3: "Zoomma",
      },
      rows: [
        { topic: "Quem cuida da estratégia", agency: "Times com muitos clientes simultâneos", zoomma: "Sócios diretamente envolvidos" },
        { topic: "Escopo", agency: "Marketing isolado", zoomma: "Estratégia + marketing + vendas" },
        { topic: "Métrica principal", agency: "Cliques, alcance e curtidas", zoomma: "Clientes gerados, margem e crescimento real" },
        { topic: "Modelo", agency: "Pacote engessado", zoomma: "Projeto sob medida" },
        { topic: "Postura", agency: "Fornecedor de serviço", zoomma: "Parceiro estratégico dedicado" },
        { topic: "Velocidade de execução", agency: "Entrega rápida desde o início", zoomma: "Começa com diagnóstico — para crescer na direção certa" },
      ],
      fairness: "Sim, agência entrega rápido em tarefas pontuais. Se é isso que você precisa, não somos a melhor escolha — e está tudo bem.",
    },
    faq: {
      eyebrow: "Dúvidas frequentes",
      h2: "Tudo que você precisa saber antes de conversar.",
      items: [
        {
          q: "O que é a Zoomma?",
          a: "A Zoomma é uma consultoria estratégica de marketing para negócios da beleza — salões, clínicas e harmonização — operados por brasileiros e hispanos nos Estados Unidos. Unimos estratégia, marketing e gestão comercial.",
        },
        {
          q: "Vocês trabalham com qualquer negócio da beleza?",
          a: "Trabalhamos com negócios já operando, com faturamento, que querem clareza para escalar. Não atendemos quem está abrindo do zero — não é nosso foco.",
        },
        {
          q: "Quanto custa?",
          a: "Cada projeto é único. Após o diagnóstico de 48 horas, apresentamos um plano e investimento sob medida. Não trabalhamos com pacotes engessados.",
        },
        {
          q: "Em quanto tempo vejo resultado?",
          a: "Resultado de tráfego e captação aparece em semanas. Resultado estrutural — margem, posicionamento, retenção — leva de 90 a 180 dias. Qualquer promessa de prazo menor merece ser avaliada com cuidado.",
        },
        {
          q: "Vocês atendem em português, espanhol e inglês?",
          a: "Sim. Operamos nas três línguas do mercado: PT-BR, ES e EN. Toda comunicação acontece no idioma que você preferir.",
        },
        {
          q: "Quem conduz o meu projeto?",
          a: "Os sócios — Renato, Bruno, Camila e Paola. A estratégia passa por nós. Camila e Paola trazem experiência direta do setor de beleza.",
        },
        {
          q: "Como começa?",
          a: "Você preenche o formulário ou clica no WhatsApp. Em até 48 horas, fazemos uma análise inicial e dizemos se a Zoomma é a parceria certa para o seu momento.",
        },
      ],
    },
    finalCta: {
      eyebrow: "Próximo passo",
      h2: "Solicite seu Diagnóstico Estratégico.",
      sub: "Em até 48 horas, entramos em contato para iniciar o processo de análise. Sem compromisso e sem pressão.",
      form: {
        name: "Nome completo",
        whatsapp: "WhatsApp (com DDI)",
        instagram: "Instagram do negócio",
        email: "Email (opcional)",
        challenge: "Maior desafio hoje",
        challenge_options: [
          "Faturamento estagnado",
          "Custo por cliente alto / margem baixa",
          "Equipe de vendas sem método",
          "Muitos agendamentos perdidos / leads frios",
          "Posicionamento confuso",
          "Outro",
        ],
        challenge_placeholder: "Selecione",
        submit: "Solicitar Diagnóstico",
        submitting: "Enviando...",
        success_title: "Recebemos sua solicitação.",
        success_msg: "Em até 48 horas, um sócio da Zoomma entrará em contato com a análise inicial.",
        success_whatsapp: "Enquanto aguarda, fale conosco no WhatsApp.",
        error_msg: "Algo deu errado. Tente novamente ou nos chame no WhatsApp.",
        consent: "Ao enviar, você concorda em receber contato sobre o diagnóstico. Sem spam.",
        microtrust: ["Sem compromisso", "Resposta em 48h", "Gratuito"],
      },
    },
    footer: {
      tagline: "Parceiro estratégico de crescimento para o mercado da beleza.",
      rights: "Todos os direitos reservados.",
      contact: "Contato",
    },
    whatsapp: {
      fab_label: "Falar no WhatsApp",
      modal_title: "Fale com a Zoomma",
      modal_sub: "Deixe seu nome e WhatsApp para que possamos conversar com contexto.",
      name: "Seu nome",
      whatsapp: "WhatsApp (com DDI)",
      submit: "Continuar no WhatsApp",
      pre_msg: "Olá! Vim pelo site da Zoomma e quero entender como vocês podem me ajudar.",
    },
  },

  es: {
    nav: {
      method: "Método",
      services: "Servicios",
      method_section: "Cómo funciona",
      faq: "Preguntas",
      cta: "Diagnóstico Estratégico",
    },
    hero: {
      eyebrow: "Para clínicas, salones y estudios de belleza",
      niche_strip: "Clínicas estéticas · Estudios de belleza · Armonización facial · Salones",
      h1_line1: "Deja de improvisar.",
      h1_line2: "Empieza a escalar.",
      aeo: "Zoomma es una consultoría estratégica de marketing para negocios de belleza — salones, clínicas y armonización — operados por brasileños e hispanos en los Estados Unidos. Unimos estrategia de negocio, marketing orientado a ventas y gestión comercial en un solo socio.",
      sub: "Para dueños de negocios de belleza en EE.UU. que facturan, pero no ven claridad de crecimiento. Sin paquetes rígidos. Sin promesas vacías. Estrategia real, ejecutada contigo.",
      cta_primary: "Solicitar Diagnóstico",
      cta_secondary: "Ver cómo funciona",
      trust_strip: "Brasileños e hispanos · Belleza · EE.UU. · Estrategia + Ejecución",
    },
    problem: {
      eyebrow: "Lo que estamos viendo",
      h2: "No tienes un problema de marketing. Tienes un problema de claridad.",
      intro: "Hablamos con decenas de dueños de negocios de belleza. Los síntomas se repiten:",
      pains: [
        "Facturación que crece, pero margen que no acompaña — y nadie sabe explicar por qué.",
        "Tráfico pagado activo, leads llegando — pero clientes que agendan y no aparecen siguen frenando la agenda.",
        "Equipo de ventas cerrando por improvisación, sin método, sin seguimiento al cliente, sin previsibilidad.",
        "Contenido bonito en Instagram, sin propósito comercial, sin conexión con la oferta.",
        "Decisiones tomadas por instinto — no por datos, no por estrategia.",
      ],
    },
    solution: {
      eyebrow: "Zoomma",
      h2: "No somos agencia. Somos tu socio estratégico de crecimiento.",
      sub: "Tres frentes integrados, con participación directa de los socios en la estrategia. Marketing que conversa con ventas que conversa con el negocio.",
      pillars: [
        {
          kicker: "01",
          title: "Estrategia de Negocio",
          desc: "Diagnóstico profundo, posicionamiento, plan de crecimiento. Sales sabiendo dónde estás, hacia dónde vas y cómo llegar.",
        },
        {
          kicker: "02",
          title: "Marketing Orientado a Ventas",
          desc: "Contenido con propósito comercial. Tráfico pagado pensado para traer clientes reales — no para inflar números sin retorno.",
        },
        {
          kicker: "03",
          title: "Gestión Comercial",
          desc: "Entrenamiento de ventas, scripts, seguimiento estructurado del cliente y reducción de citas perdidas. Lead que llega, lead que cierra.",
        },
      ],
    },
    method: {
      eyebrow: "El Método Zoomma",
      h2: "Cinco etapas. Una dirección: crecimiento sostenible.",
      sub: "Nada de framework genérico. Cada etapa se diseña para tu negocio — por los socios.",
      steps: [
        { n: "01", title: "Estrategia", desc: "Diagnóstico, posicionamiento y plan. Antes de tocar cualquier anuncio, entendemos el negocio." },
        { n: "02", title: "Atracción", desc: "Contenido y media pagada calibrados para el público correcto, con mensaje alineado a la oferta." },
        { n: "03", title: "Conversión", desc: "Funnel comercial estructurado: scripts, seguimiento al cliente, reducción de citas perdidas y cierre previsible." },
        { n: "04", title: "Retención", desc: "Programas de recurrencia, post-venta y ciclo de vida. Cliente que vuelve vale 5× lo que entra." },
        { n: "05", title: "Crecimiento", desc: "Escala con previsibilidad — no con ansiedad. Decisiones en datos, no en suposiciones." },
      ],
    },
    features: {
      eyebrow: "Qué cambia en tu negocio",
      h2: "Cada entrega se vuelve impacto directo en la operación.",
      items: [
        { title: "Claridad de números", desc: "Empiezas a entender cuánto cuesta cada cliente, cuánto deja en tu negocio y si estás creciendo de verdad. Las decisiones se basan en datos, no en suposiciones." },
        { title: "Posicionamiento que vende", desc: "Mensaje que conversa con el público real — brasileños e hispanos en el mercado americano de belleza." },
        { title: "Funnel que cierra", desc: "Del primer contacto a la venta recurrente, con scripts, seguimiento y reducción de citas perdidas." },
        { title: "Equipo entrenado", desc: "Tu equipo de ventas deja de improvisar y opera con método replicable." },
        { title: "Tráfico con ROI", desc: "Media pagada conectada a la venta, no a likes. Costo por cliente bajo control, escala previsible." },
        { title: "Socios involucrados", desc: "Los socios — Renato, Bruno, Camila y Paola — participan activamente en cada proyecto, garantizando dirección estratégica y calidad en la ejecución." },
      ],
    },
    midCta: {
      h2: "Cada mes de improvisación es un mes de margen que no recuperas.",
      sub: "El diagnóstico es gratuito. Lo que vas a descubrir sobre tu negocio, no tiene precio.",
      cta: "Solicitar Diagnóstico Estratégico",
    },
    trust: {
      eyebrow: "Nuestro compromiso",
      h2: "Integridad y honestidad por encima de todo.",
      promise: "Antes de iniciar cualquier proyecto, dedicamos 48 horas para entender si somos realmente el socio adecuado para ti en este momento. Si no lo somos, te lo decimos con claridad — porque creemos que el encaje correcto importa más que cerrar un contrato más.",
      notFor: "Zoomma no es para ti si",
      forYou: "Zoomma es para ti si",
      notForList: [
        "Buscas una agencia que entrega un post bonito y reporte a fin de mes.",
        "Buscas la 'fórmula mágica' que escala sin tocar el negocio.",
        "Quieres tercerizar marketing y nunca más pensar en eso.",
        "Esperas resultado en 7 días.",
      ],
      forYouList: [
        "Quieres un socio estratégico involucrado en la operación.",
        "Estás dispuesto a mirar los datos — incluso los incómodos.",
        "Entiendes que crecimiento sostenible toma tiempo, no es un milagro.",
        "Operas en el mercado de belleza en EE.UU. y quieres escalar con claridad.",
      ],
    },
    comparison: {
      eyebrow: "Zoomma vs Agencia tradicional",
      h2: "Por qué no somos una agencia.",
      sub: "No hay ataque a nadie aquí. Solo una diferencia real de modelo de trabajo.",
      headers: { col1: "Criterio", col2: "Agencia tradicional", col3: "Zoomma" },
      rows: [
        { topic: "Quién cuida la estrategia", agency: "Equipos con muchos clientes simultáneos", zoomma: "Socios directamente involucrados" },
        { topic: "Alcance", agency: "Marketing aislado", zoomma: "Estrategia + marketing + ventas" },
        { topic: "Métrica principal", agency: "Clicks, alcance y likes", zoomma: "Clientes generados, margen y crecimiento real" },
        { topic: "Modelo", agency: "Paquete rígido", zoomma: "Proyecto a medida" },
        { topic: "Postura", agency: "Proveedor de servicio", zoomma: "Socio estratégico dedicado" },
        { topic: "Velocidad de ejecución", agency: "Entrega rápida desde el inicio", zoomma: "Empieza con diagnóstico — para crecer en la dirección correcta" },
      ],
      fairness: "Sí, una agencia entrega rápido en tareas puntuales. Si eso es lo que necesitas, no somos la mejor opción — y está bien.",
    },
    faq: {
      eyebrow: "Preguntas frecuentes",
      h2: "Todo lo que necesitas saber antes de conversar.",
      items: [
        { q: "¿Qué es Zoomma?", a: "Zoomma es una consultoría estratégica de marketing para negocios de belleza — salones, clínicas y armonización — operados por brasileños e hispanos en EE.UU. Unimos estrategia, marketing y gestión comercial." },
        { q: "¿Trabajan con cualquier negocio de belleza?", a: "Trabajamos con negocios ya operando, con facturación, que quieren claridad para escalar. No atendemos quien está abriendo desde cero — no es nuestro foco." },
        { q: "¿Cuánto cuesta?", a: "Cada proyecto es único. Tras el diagnóstico de 48 horas, presentamos un plan e inversión a medida. No trabajamos con paquetes rígidos." },
        { q: "¿En cuánto tiempo veo resultado?", a: "Resultados de tráfico y captación aparecen en semanas. Resultados estructurales — margen, posicionamiento, retención — llevan de 90 a 180 días. Cualquier promesa de plazo menor merece evaluarse con cuidado." },
        { q: "¿Atienden en portugués, español e inglés?", a: "Sí. Operamos en los tres idiomas del mercado: PT-BR, ES e EN. Toda la comunicación ocurre en el idioma que prefieras." },
        { q: "¿Quién conduce mi proyecto?", a: "Los socios — Renato, Bruno, Camila y Paola. La estrategia pasa por nosotros. Camila y Paola traen experiencia directa del sector belleza." },
        { q: "¿Cómo empieza?", a: "Llenas el formulario o haces clic en WhatsApp. En hasta 48 horas, hacemos un análisis inicial y te decimos si Zoomma es la sociedad correcta para tu momento." },
      ],
    },
    finalCta: {
      eyebrow: "Siguiente paso",
      h2: "Solicita tu Diagnóstico Estratégico.",
      sub: "En hasta 48 horas, nos ponemos en contacto para iniciar el proceso de análisis. Sin compromiso y sin presión.",
      form: {
        name: "Nombre completo",
        whatsapp: "WhatsApp (con código)",
        instagram: "Instagram del negocio",
        email: "Email (opcional)",
        challenge: "Mayor desafío hoy",
        challenge_options: [
          "Facturación estancada",
          "Costo por cliente alto / margen bajo",
          "Equipo de ventas sin método",
          "Muchas citas perdidas / leads fríos",
          "Posicionamiento confuso",
          "Otro",
        ],
        challenge_placeholder: "Selecciona",
        submit: "Solicitar Diagnóstico",
        submitting: "Enviando...",
        success_title: "Recibimos tu solicitud.",
        success_msg: "En hasta 48 horas, un socio de Zoomma te contactará con el análisis inicial.",
        success_whatsapp: "Mientras esperas, escríbenos por WhatsApp.",
        error_msg: "Algo salió mal. Intenta de nuevo o escríbenos por WhatsApp.",
        consent: "Al enviar, aceptas recibir contacto sobre el diagnóstico. Sin spam.",
        microtrust: ["Sin compromiso", "Respuesta en 48h", "Gratuito"],
      },
    },
    footer: {
      tagline: "Socio estratégico de crecimiento para el mercado de belleza.",
      rights: "Todos los derechos reservados.",
      contact: "Contacto",
    },
    whatsapp: {
      fab_label: "Hablar por WhatsApp",
      modal_title: "Habla con Zoomma",
      modal_sub: "Deja tu nombre y WhatsApp para que podamos conversar con contexto.",
      name: "Tu nombre",
      whatsapp: "WhatsApp (con código)",
      submit: "Continuar en WhatsApp",
      pre_msg: "¡Hola! Vine por el sitio de Zoomma y quiero entender cómo pueden ayudarme.",
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
      aeo: "Zoomma is a strategic marketing consultancy for beauty businesses — salons, clinics, and aesthetic harmonization — operated by Brazilians and Hispanics in the United States. We integrate business strategy, sales-driven marketing, and commercial management under one partner.",
      sub: "For beauty business owners in the U.S. who generate revenue but lack growth clarity. No rigid packages. No empty promises. Real strategy, executed alongside you.",
      cta_primary: "Request Diagnosis",
      cta_secondary: "See how it works",
      trust_strip: "Brazilians and Hispanics · Beauty · USA · Strategy + Execution",
    },
    problem: {
      eyebrow: "What we're seeing",
      h2: "You don't have a marketing problem. You have a clarity problem.",
      intro: "We've spoken with dozens of beauty business owners. The symptoms repeat:",
      pains: [
        "Revenue grows, but margin doesn't follow — and nobody can explain why.",
        "Paid traffic running, leads coming in — yet clients who book and don't show up keep blocking the schedule.",
        "Sales team closing on improvisation, with no method, no client follow-through, no predictability.",
        "Beautiful content on Instagram, with no commercial purpose, disconnected from the offer.",
        "Decisions made by guesswork — not on data, not on strategy.",
      ],
    },
    solution: {
      eyebrow: "Zoomma",
      h2: "We're not an agency. We're your strategic growth partner.",
      sub: "Three integrated fronts, with the partners directly involved in strategy. Marketing that talks to sales that talks to the business.",
      pillars: [
        { kicker: "01", title: "Business Strategy", desc: "Deep diagnosis, positioning, growth plan. You leave knowing where you are, where you're going, and how to get there." },
        { kicker: "02", title: "Sales-Driven Marketing", desc: "Content with commercial purpose. Paid traffic built to bring real clients — not to inflate numbers without return." },
        { kicker: "03", title: "Commercial Management", desc: "Sales training, scripts, structured client follow-through and reduced missed appointments. Leads that come in, leads that close." },
      ],
    },
    method: {
      eyebrow: "The Zoomma Method",
      h2: "Five stages. One direction: sustainable growth.",
      sub: "No generic framework. Each stage is designed for your business — by the partners.",
      steps: [
        { n: "01", title: "Strategy", desc: "Diagnosis, positioning and plan. Before touching any ad, we understand the business." },
        { n: "02", title: "Attraction", desc: "Content and paid media calibrated for the right audience, with messaging aligned to the offer." },
        { n: "03", title: "Conversion", desc: "Structured commercial funnel: scripts, client follow-through, fewer missed appointments and predictable closing." },
        { n: "04", title: "Retention", desc: "Recurrence programs, post-sale and lifecycle. A returning client is worth 5× a new one." },
        { n: "05", title: "Growth", desc: "Scale with predictability — not anxiety. Decisions on data, not guesswork." },
      ],
    },
    features: {
      eyebrow: "What changes in your business",
      h2: "Each delivery becomes direct operational impact.",
      items: [
        { title: "Number clarity", desc: "You start understanding what each client costs, what they bring to your business, and whether you're truly growing. Decisions become data-driven, not guesswork." },
        { title: "Positioning that sells", desc: "Messaging that speaks to the real audience — Brazilians and Hispanics in the American beauty market." },
        { title: "A funnel that closes", desc: "From first contact to recurring sale, with scripts, client follow-through and fewer missed appointments." },
        { title: "Trained team", desc: "Your sales team stops improvising and operates with a replicable method." },
        { title: "Traffic with ROI", desc: "Paid media tied to sales, not likes. Client acquisition cost under control, predictable scale." },
        { title: "Partners involved", desc: "The partners — Renato, Bruno, Camila and Paola — are actively involved in every project, ensuring strategic direction and quality throughout." },
      ],
    },
    midCta: {
      h2: "Every month of improvisation is a month of margin you don't recover.",
      sub: "The diagnosis is free. What you'll discover about your business is priceless.",
      cta: "Request Strategic Diagnosis",
    },
    trust: {
      eyebrow: "Our commitment",
      h2: "Integrity and honesty, above everything else.",
      promise: "Before starting any project, we take 48 hours to understand whether we're truly the right partner for your moment. If we're not, we say so clearly — because the right fit matters more to us than signing another contract.",
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
