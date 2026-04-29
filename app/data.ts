export type Locale = "pt" | "en";

type LocalizedText = Record<Locale, string>;

type Project = {
  name: string;
  href: string;
  repo: string;
  stack: string[];
  kind: LocalizedText;
  description: LocalizedText;
  highlight: LocalizedText;
  linkLabel: LocalizedText;
};

type ExperienceItem = {
  title: LocalizedText;
  description: LocalizedText;
};

type HighlightItem = {
  label: LocalizedText;
  value: LocalizedText;
  description: LocalizedText;
};

type TimelineItem = {
  label: LocalizedText;
  title: LocalizedText;
  description: LocalizedText;
};

export const profile = {
  name: "Miguel Lucas",
  role: {
    pt: "Desenvolvedor de software com foco em backend, produto e DevOps",
    en: "Software developer focused on backend, product, and DevOps"
  },
  intro: {
    pt: "Graduando em Ciência da Computação pela UFS, com atuação em projetos de software, inovação e produtos digitais. Trabalho principalmente com Java, Node.js, NestJS, Fastify e Docker, além de participar de iniciativas ligadas a saúde pública, empreendedorismo e sistemas escaláveis.",
    en: "Computer Science student at UFS, working on software, innovation, and digital product projects. I mainly build with Java, Node.js, NestJS, Fastify, and Docker, while contributing to initiatives connected to public health, entrepreneurship, and scalable systems."
  },
  status: {
    pt: "Busco oportunidades em desenvolvimento backend e engenharia de software, com abertura para times de produto, inovação e tecnologia aplicada.",
    en: "I am looking for backend and software engineering opportunities, especially in product, innovation, and applied technology teams."
  },
  email: "lucasmiguel646@gmail.com",
  phone: "+55 79 99604-7071",
  github: "https://github.com/Miguells10",
  linkedin: "https://www.linkedin.com/in/lucasfreire089/",
  lattes: "http://lattes.cnpq.br/2794681193269120",
  cv: "/cv/CV.pdf",
  stats: [
    { value: "3º lugar", label: { pt: "Hackathon Radix & Maravalley 2026", en: "Radix & Maravalley Hackathon 2026" } },
    { value: "PET-Saúde", label: { pt: "bolsista em saúde digital", en: "digital health scholarship" } },
    { value: "B2", label: { pt: "inglês high intermediate", en: "high intermediate English" } }
  ]
};

export const sections = {
  nav: {
    pt: ["Projetos", "Experiência", "Stack", "Trajetória", "Contato"],
    en: ["Projects", "Experience", "Stack", "Journey", "Contact"]
  },
  hero: {
    badge: {
      pt: "Portfólio principal",
      en: "Main portfolio"
    },
    primaryCta: {
      pt: "Ver projetos",
      en: "See projects"
    },
    secondaryCta: {
      pt: "Baixar CV",
      en: "Download CV"
    }
  },
  highlightsTitle: {
    pt: "Resumo rápido",
    en: "Quick overview"
  },
  projectsTitle: {
    pt: "Projetos em destaque",
    en: "Selected projects"
  },
  projectsLead: {
    pt: "Uma seleção que combina projetos públicos, trabalho aplicado e iniciativas que representam bem minha atuação atual.",
    en: "A selection that combines public repositories, applied work, and initiatives that represent my current work well."
  },
  experienceTitle: {
    pt: "Experiência atual",
    en: "Current experience"
  },
  experienceLead: {
    pt: "Hoje minha atuação mistura desenvolvimento, requisitos, produto e colaboração com equipes multidisciplinares.",
    en: "My current work blends software development, requirements, product thinking, and collaboration with multidisciplinary teams."
  },
  stackTitle: {
    pt: "Stack e áreas de atuação",
    en: "Stack and areas of work"
  },
  journeyTitle: {
    pt: "Formação e destaques",
    en: "Education and highlights"
  },
  contactTitle: {
    pt: "Contato",
    en: "Contact"
  },
  contactLead: {
    pt: "Se fizer sentido para a sua equipe, fico à disposição para conversar sobre estágio, posição júnior ou projetos com foco em backend, produto e tecnologia aplicada.",
    en: "If it makes sense for your team, I would be glad to talk about internships, junior roles, or projects focused on backend, product, and applied technology."
  }
};

export const strengths: ExperienceItem[] = [
  {
    title: {
      pt: "Backend e arquitetura",
      en: "Backend and architecture"
    },
    description: {
      pt: "Experiência com Java, Spring Boot, Node.js, NestJS, Fastify, APIs REST, microsserviços e modelagem de dados.",
      en: "Experience with Java, Spring Boot, Node.js, NestJS, Fastify, REST APIs, microservices, and data modeling."
    }
  },
  {
    title: {
      pt: "Produto e operação",
      en: "Product and operations"
    },
    description: {
      pt: "Atuação em discovery, requisitos, backlog, documentação técnica, alinhamento com stakeholders e organização de escopo.",
      en: "Hands-on work in discovery, requirements, backlog planning, technical documentation, stakeholder alignment, and scope organization."
    }
  },
  {
    title: {
      pt: "Design e entrega",
      en: "Design and delivery"
    },
    description: {
      pt: "Uso de Figma no ciclo de produto, apoio a UX/UI e participação em deploy, conteinerização e rotinas de DevOps.",
      en: "Use of Figma in the product cycle, support for UX/UI, and participation in deployment, containerization, and DevOps routines."
    }
  }
];

export const highlights: HighlightItem[] = [
  {
    label: {
      pt: "Innovation Hub",
      en: "Innovation Hub"
    },
    value: {
      pt: "Assessor de Projetos e Desenvolvedor",
      en: "Project Advisor and Developer"
    },
    description: {
      pt: "Atuação entre cliente, requisitos, escopo e desenvolvimento dentro do ecossistema de empreendedorismo da UFS.",
      en: "Working across clients, requirements, scope, and development inside the UFS entrepreneurship ecosystem."
    }
  },
  {
    label: {
      pt: "PET-Saúde Digital",
      en: "PET Digital Health"
    },
    value: {
      pt: "Tecnologia aplicada à saúde pública",
      en: "Technology applied to public health"
    },
    description: {
      pt: "Bolsista em iniciativa do Ministério da Saúde, UFS e SES-SE para criação de ferramentas digitais voltadas à gestão pública em saúde.",
      en: "Scholarship holder in an initiative by the Ministry of Health, UFS, and SES-SE to build digital tools for public health management."
    }
  },
  {
    label: {
      pt: "Hackathon Radix",
      en: "Radix Hackathon"
    },
    value: {
      pt: "3º lugar nacional em 2026",
      en: "National 3rd place in 2026"
    },
    description: {
      pt: "Reconhecimento com o GridScope, solução de inteligência geoespacial aplicada à energia.",
      en: "Awarded for GridScope, a geospatial intelligence solution applied to the energy sector."
    }
  }
];

export const experiences: TimelineItem[] = [
  {
    label: {
      pt: "Abr 2026 - Atual",
      en: "Apr 2026 - Present"
    },
    title: {
      pt: "Growth Specialist, CDL Jovem Aracaju",
      en: "Growth Specialist, CDL Jovem Aracaju"
    },
    description: {
      pt: "Atuação ligada a crescimento, posicionamento e desenvolvimento de iniciativas voltadas ao ecossistema empresarial local.",
      en: "Work connected to growth, positioning, and the development of initiatives for the local business ecosystem."
    }
  },
  {
    label: {
      pt: "Fev 2026 - Atual",
      en: "Feb 2026 - Present"
    },
    title: {
      pt: "Assessor de Projetos, Innovation Hub",
      en: "Project Advisor, Innovation Hub"
    },
    description: {
      pt: "Responsável por requisitos, documentos de visão, backlog, viabilidade, proposta técnica e apoio à definição de arquitetura para novos projetos.",
      en: "Responsible for requirements, vision documents, backlog, feasibility analysis, technical proposals, and support for architectural decisions in new projects."
    }
  },
  {
    label: {
      pt: "Abr 2025 - Atual",
      en: "Apr 2025 - Present"
    },
    title: {
      pt: "Desenvolvedor Full Stack, Innovation Hub",
      en: "Full Stack Developer, Innovation Hub"
    },
    description: {
      pt: "Construção de aplicações com Next.js, Node.js, NestJS, PostgreSQL, Prisma e Docker, em parceria com times de design e negócios.",
      en: "Building applications with Next.js, Node.js, NestJS, PostgreSQL, Prisma, and Docker in collaboration with design and business teams."
    }
  },
  {
    label: {
      pt: "Ago 2025 - Atual",
      en: "Aug 2025 - Present"
    },
    title: {
      pt: "Bolsista PET-Saúde Digital, Ministério da Saúde / UFS / SES-SE",
      en: "PET Digital Health Scholar, Ministry of Health / UFS / SES-SE"
    },
    description: {
      pt: "Participação no desenvolvimento de ferramentas digitais para a gestão pública em saúde, com foco em requisitos, BPMN, UML, dados e backend.",
      en: "Contributing to digital tools for public health management, with focus on requirements, BPMN, UML, data modeling, and backend development."
    }
  }
];

export const stacks = [
  {
    title: "Backend",
    items: ["Java", "Spring Boot", "Node.js", "NestJS", "Fastify", "Python", "Django REST"]
  },
  {
    title: "Front-end",
    items: ["Next.js", "React", "TypeScript", "JavaScript", "HTML", "CSS", "Figma"]
  },
  {
    title: "Dados e DevOps",
    items: ["PostgreSQL", "Docker", "Prisma", "Drizzle ORM", "RabbitMQ", "AWS"]
  }
];

export const journey: TimelineItem[] = [
  {
    label: {
      pt: "Formação",
      en: "Education"
    },
    title: {
      pt: "Ciência da Computação, UFS",
      en: "Computer Science, UFS"
    },
    description: {
      pt: "Graduação em andamento na Universidade Federal de Sergipe, com atuação paralela em projetos de software, inovação e extensão.",
      en: "Ongoing degree at the Federal University of Sergipe, alongside work in software, innovation, and extension projects."
    }
  },
  {
    label: {
      pt: "Base técnica",
      en: "Technical foundation"
    },
    title: {
      pt: "Técnico em Eletrotécnica, IFS",
      en: "Technical Degree in Electrotechnics, IFS"
    },
    description: {
      pt: "Formação técnica no IFS com vivência em pesquisa científica, inovação e desenvolvimento de projetos desde o ensino médio.",
      en: "Technical training at IFS with early experience in scientific research, innovation, and project development."
    }
  },
  {
    label: {
      pt: "Pesquisa",
      en: "Research"
    },
    title: {
      pt: "PIBIC-Jr/CNPq e projetos científicos",
      en: "PIBIC-Jr/CNPq and scientific projects"
    },
    description: {
      pt: "Participação em iniciação científica e em projetos como a síntese de nanoferrita tipo-M de estrôncio e a construção de capturadores para Aedes aegypti.",
      en: "Participation in scientific initiation programs and projects such as the synthesis of strontium M-type hexaferrite and mosquito capture devices for Aedes aegypti."
    }
  },
  {
    label: {
      pt: "Prêmio",
      en: "Award"
    },
    title: {
      pt: "3º lugar nacional no Hackathon Radix & Maravalley",
      en: "National 3rd place at the Radix & Maravalley Hackathon"
    },
    description: {
      pt: "Premiação conquistada com o GridScope, projeto de análise de geração distribuída e perfis de carga com apoio de dados e inteligência geoespacial.",
      en: "Award earned with GridScope, a project for distributed energy generation and load profile analysis using data and geospatial intelligence."
    }
  },
  {
    label: {
      pt: "Inglês",
      en: "English"
    },
    title: {
      pt: "Proficiência B2",
      en: "B2 proficiency"
    },
    description: {
      pt: "Nível High Intermediate, com certificação Voxy e foco contínuo em conversação, leitura técnica e contexto profissional.",
      en: "High Intermediate level, with Voxy certification and continuous focus on conversation, technical reading, and professional usage."
    }
  },
  {
    label: {
      pt: "Comunidade",
      en: "Community"
    },
    title: {
      pt: "Oficinas, eventos e organização acadêmica",
      en: "Workshops, events, and academic organization"
    },
    description: {
      pt: "Participação em eventos como CSBC e ERBASE, organização do IA++ e atuação em oficina sobre Figma na Engenharia de Software.",
      en: "Participation in events such as CSBC and ERBASE, organization of IA++, and involvement in a workshop on Figma in Software Engineering."
    }
  }
];

export const projects: Project[] = [
  {
    name: "GridScope",
    href: "https://github.com/Irandisilvaa/gridScope-core",
    repo: "Irandisilvaa/gridScope-core",
    stack: ["Python", "IA", "Geoespacial", "Energia"],
    kind: {
      pt: "Hackathon e inteligência geoespacial",
      en: "Hackathon and geospatial intelligence"
    },
    description: {
      pt: "Solução desenvolvida para análise de perfis de carga e geração distribuída, unindo dados, mapas e tomada de decisão.",
      en: "A solution created to analyze load profiles and distributed generation, combining data, maps, and decision support."
    },
    highlight: {
      pt: "Projeto responsável pelo 3º lugar nacional no Hackathon Radix & Maravalley 2026.",
      en: "The project that earned national 3rd place at the 2026 Radix & Maravalley Hackathon."
    },
    linkLabel: {
      pt: "Abrir repositório",
      en: "Open repository"
    }
  },
  {
    name: "Ficaqui",
    href: "https://github.com/Miguells10/Ficaqui",
    repo: "Miguells10/Ficaqui",
    stack: ["React", "NestJS", "Prisma", "PostgreSQL", "Docker"],
    kind: {
      pt: "Marketplace local full stack",
      en: "Full-stack local marketplace"
    },
    description: {
      pt: "Projeto mobile-first criado em hackathon para conectar lojistas e consumidores locais com uma base full stack moderna.",
      en: "A mobile-first hackathon project created to connect local merchants and consumers through a modern full-stack architecture."
    },
    highlight: {
      pt: "Bom exemplo de integração entre front-end, API, banco relacional e infraestrutura com Docker.",
      en: "A strong example of integrating front-end, API, relational database, and Docker-based infrastructure."
    },
    linkLabel: {
      pt: "Abrir repositório",
      en: "Open repository"
    }
  },
  {
    name: "API de Gerenciamento de Consultas Médicas",
    href: "https://github.com/Miguells10/Api-Gerenciamento-de-Consultas-Medicas",
    repo: "Miguells10/Api-Gerenciamento-de-Consultas-Medicas",
    stack: ["Python", "Django", "DRF", "JWT", "Docker"],
    kind: {
      pt: "API REST para saúde",
      en: "REST API for healthcare"
    },
    description: {
      pt: "API com autenticação JWT, filtros, documentação Swagger e organização voltada a boas práticas de backend.",
      en: "An API with JWT authentication, filtering, Swagger documentation, and a structure aligned with backend best practices."
    },
    highlight: {
      pt: "Representa bem meu trabalho com Python aplicado a APIs e segurança.",
      en: "A solid representation of my Python work applied to APIs and security."
    },
    linkLabel: {
      pt: "Abrir repositório",
      en: "Open repository"
    }
  },
  {
    name: "Projeto Web Services",
    href: "https://github.com/Miguells10/Projeto-Web-Services",
    repo: "Miguells10/Projeto-Web-Services",
    stack: ["Java 21", "Spring Boot 3", "React", "JWT", "PostgreSQL"],
    kind: {
      pt: "Sistema web com Spring Boot",
      en: "Web system with Spring Boot"
    },
    description: {
      pt: "Projeto com foco em backend corporativo, modelagem de domínio, API REST e integração com front-end.",
      en: "A project focused on enterprise backend development, domain modeling, REST APIs, and frontend integration."
    },
    highlight: {
      pt: "Ajuda a mostrar minha base em Java, Spring e organização em camadas.",
      en: "It helps showcase my foundation in Java, Spring, and layered architecture."
    },
    linkLabel: {
      pt: "Abrir repositório",
      en: "Open repository"
    }
  },
  {
    name: "Scalable Microservices",
    href: "https://github.com/Miguells10/scalable-microservices",
    repo: "Miguells10/scalable-microservices",
    stack: ["Node.js", "TypeScript", "RabbitMQ", "Drizzle", "Pulumi"],
    kind: {
      pt: "Microsserviços e infraestrutura",
      en: "Microservices and infrastructure"
    },
    description: {
      pt: "Desafio voltado a comunicação assíncrona, observabilidade e infraestrutura como código em um cenário de microsserviços.",
      en: "A challenge focused on asynchronous communication, observability, and infrastructure as code in a microservices scenario."
    },
    highlight: {
      pt: "Mostra repertório além do CRUD tradicional e aproxima meu perfil de times mais estruturados.",
      en: "It shows range beyond traditional CRUD apps and aligns my profile with more structured engineering teams."
    },
    linkLabel: {
      pt: "Abrir repositório",
      en: "Open repository"
    }
  },
  {
    name: "DevRoaster",
    href: "https://github.com/Miguells10/devroaster",
    repo: "Miguells10/devroaster",
    stack: ["Next.js 15", "TypeScript", "Tailwind"],
    kind: {
      pt: "Ferramenta web",
      en: "Web tool"
    },
    description: {
      pt: "Aplicação com proposta autoral voltada à análise de código, explorando interface, identidade visual e experiência de uso.",
      en: "An original code analysis app that explores interface design, visual identity, and product experience."
    },
    highlight: {
      pt: "Complementa meu portfólio com um projeto mais voltado a produto e front-end.",
      en: "It complements my portfolio with a project that leans more into product and frontend work."
    },
    linkLabel: {
      pt: "Abrir repositório",
      en: "Open repository"
    }
  }
];
