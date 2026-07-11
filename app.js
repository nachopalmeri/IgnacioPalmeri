// ═══════════════════ NAVIGATION & TABS ═══════════════════

const UI_COPY = {
  es: {
    nav: { overview: 'Inicio', projects: 'Proyectos', agents: 'Sistema de trabajo' },
    hero: {
      tagline: 'Junior AI Automation & Product Engineer',
      title: 'ignaciopalmeri',
      availability: 'Disponible para pasantías y roles trainee',
      kicker: 'Construyo automatizaciones y productos pequeños con IA, backend y criterio operativo.',
      description: 'Estudio Gestión IT en UADE y busco mi primer rol en IA, automatización o producto. Mi portfolio funciona como una sala de operaciones: proyectos desplegados, agentes, decisiones y pruebas visibles.',
      projectsCta: 'Ver proyectos',
      agentsCta: 'Ver sistema de trabajo',
      githubCta: 'GitHub',
      cvCta: 'Descargar CV',
      cvEnCta: 'CV in English →',
      status: 'Disponible para Trainee / Junior',
      systemKicker: 'AI Operations Room',
      systemTitle: 'Proyectos, agentes y pruebas conectadas',
      feedOneTitle: 'JobBot feature',
      feedOneBody: 'Planifico, implemento backend/frontend y verifico deploy.',
      feedTwoTitle: 'Portfolio verification',
      feedTwoBody: 'Playwright, mobile checks y revision visual antes de publicar.',
      feedThreeTitle: 'README handoff',
      feedThreeBody: 'Convierto decisiones tecnicas en setup y proximos pasos.',
      labKicker: 'Prueba viva',
      labTitle: 'JobBot -> tests -> agentes -> deploy',
      labBody: 'Proyectos visibles, repos revisables y rutas de trabajo que muestran cÃ³mo construyo.',
      locationLabel: 'Ubicación',
      location: 'Buenos Aires, Argentina',
      focusLabel: 'Foco',
      focus: 'Python - Bots - Dashboards - Product/Fintech',
      oldPortfolio: 'Portfolio anterior',
      email: 'Email'
    },
    console: {
      title: 'ignacio@portfolio',
      welcome: 'Escribí help para explorar mi perfil.',
      prompt: 'Comandos: about, skills, projects, agents, contact, clear',
      unknown: 'Comando no encontrado',
      about: 'ignaciopalmeri - estudiante de Gestión IT en UADE que combina experiencia operativa, producto y automatización para construir software útil.',
      skills: 'Python, FastAPI, TypeScript, SQL, Linux, Git, Playwright, automatización de procesos y desarrollo asistido por IA.',
      projects: 'Proyectos principales: JobBot, Agents System, Sports Probability Dashboard y Pisculichi Labs. El archivo completo muestra 9 piezas desplegadas o revisables.',
      agents: 'Uso asistentes de IA como parte de un flujo ordenado: plan, construcción, revisión, pruebas, documentación y publicación.',
      contact: 'GitHub: @nachopalmeri | LinkedIn: ignaciopalmeri | Email: ignaciopalmeri1@gmail.com'
    },
    github: {
      eyebrow: 'Actividad verificable',
      title: 'Repos que se pueden revisar',
      body: 'Prueba pública de trabajo: demos, repositorios, decisiones técnicas y continuidad visible.'
    },
    orchestration: {
      body: 'Evidencia visible.'
    },
    proof: {
      shipped: { label: 'Proyectos', body: 'JobBot, Agents System y dashboard de probabilidades.' },
      stack: { label: 'Stack', body: 'Python, FastAPI, PostgreSQL, Linux.' },
      ops: { label: 'Operaciones', body: 'Caja, inventario y auditorías.' }
    },
    about: {
      eyebrow: 'Estudiante IT orientado a automatización operativa',
      title: 'Sobre mí',
      thesis: 'Convierto operaciones repetitivas en software pequeño, desplegado y revisable.',
      p1: 'Estudio Gestión IT en UADE y estoy construyendo mi primera experiencia profesional en tecnología. Uso IA para acelerar la implementación, pero el valor que busco desarrollar está en decidir qué vale la pena construir y cómo hacerlo útil.',
      p2: 'Me interesa la intersección entre software, economía, incentivos y comportamiento humano. Leo y estudio fuera de la programación porque los buenos productos no nacen solo de sintaxis: nacen de entender sistemas, usuarios y restricciones.',
      p3: 'Mi experiencia en atención al cliente y operaciones me dio presión real, caja, inventario y auditorías. Quiero llevar esa base a soporte IT, QA trainee, automatización o startups donde pueda convertir procesos repetitivos en software revisable.',
      panelKicker: 'Modelo de trabajo',
      panelTitle: 'Código + sistemas + contexto de negocio',
      panelBody: 'La IA vuelve más rápida la producción de código. Mi foco es aprender a orquestar herramientas, criterio técnico y contexto humano para construir soluciones que tengan sentido.'
    },
    certifications: {
      title: 'Certificaciones',
      body: 'Credenciales verificables y aprendizaje aplicado para sostener lo que muestro en proyectos.',
      verified: 'Verificada',
      visible: 'Visible',
      open: 'Ver credencial',
      noLink: 'Sin link público directo',
      redhat: {
        title: 'Red Hat',
        body: 'Base Linux, terminal, permisos y administración de sistemas para trabajar con entornos reales.'
      },
      claude: {
        title: 'Claude Code',
        body: 'Uso de asistentes de IA para desarrollo, revisión, contexto de repo y flujos de implementación verificables.'
      },
      cisco: {
        title: 'Cisco CCNA 1',
        body: 'Fundamentos de redes, direccionamiento, conectividad y troubleshooting para comprender infraestructura.'
      }
    },
    stack: { title: 'Stack y herramientas', core: 'Core técnico', product: 'Producto y operaciones', ai: 'IA aplicada' },
    projects: {
      title: 'Proyectos destacados',
      archiveTitle: 'Archivo de proyectos',
      featuredBody: 'Cuatro piezas: producto, trabajo, analytics y lab.',
      archiveBody: 'El archivo completa el rango: CLI, deportes, comercio local y landings.',
      github: 'Ver GitHub',
      status: { active: 'Activo', public: 'Público', demo: 'Demo', local: 'Local' },
      jobbotTitle: 'JobBot - Automation prototype',
      agentsTitle: 'Sistema de trabajo - flujo con IA',
      jobbot: 'Prototipo para búsquedas laborales. Next.js, FastAPI, PostgreSQL, auth, webhooks y pagos.',
      franquiya: 'Dashboard en Python para probabilidades deportivas y escenarios.',
      agents: 'Laboratorio para bots, alertas y herramientas web.',
      roleJobbot: 'Prototipo de automatización / implementación',
      roleFranquiya: 'Analytics / producto desplegado',
      roleAgents: 'Laboratorio de producto / prototipado rápido',
      valueJobbot: 'Next.js + FastAPI + PostgreSQL, auth segura, webhooks, Telegram y pagos.',
      valueFranquiya: 'Python, fuentes múltiples, matrices Poisson y dashboard.',
      valueAgents: 'Bots, alertas y experimentos web.',
      proof: 'Ver prueba',
      open: 'Abrir proyecto',
      repo: 'Ver repo',
      exploreAgents: 'Explorar ecosistema'
    },
    agents: {
      eyebrow: 'Sistema real del repo',
      title: 'Sistema de trabajo',
      description: 'Sistema local que uso para construir, revisar y documentar con IA. Prioriza contexto, pruebas y decisiones claras.',
      workflowsTitle: 'Flujos de trabajo',
      workflowsBody: 'Basado en archivos reales de ~/.agents.',
      proofTitle: 'Flujo real',
      proofBody: 'Tres rutas que uso para entregar mejor.',
      workflow1: { label: 'JobBot feature', body: 'Plan, build, review y documentación.' },
      workflow2: { label: 'Portfolio verification', body: 'Playwright, mobile checks y localStorage.' },
      workflow3: { label: 'README handoff', body: 'Setup, diagramas y próximos pasos.' },
      stats: '19 módulos de workflow - Rutas documentadas - Memoria local activa',
      back: 'Volver a la red',
      hint: 'Click en un agente para explorar - Simula una ruta documentada',
      stageIdle: 'Esperando workflow',
      steps: { plan: 'Plan', build: 'Build', review: 'Review', test: 'Test', ship: 'Ship' }
    },
    graph: {
      subnodes: 'sub-nodos',
      connections: 'conexiones',
      step: 'Paso',
      complete: 'COMPLETO',
      ready: 'Listo',
      selfImproved: 'Automejora completada: sistema adaptado',
      validated: 'Ecosistema visualizado: evidencia revisada',
      system: 'Sistema'
    },
      footer: { text: '2026 ignaciopalmeri.', contact: 'Contacto' }
  },
  en: {
    nav: { overview: 'Overview', projects: 'Projects', agents: 'Workflow System' },
    hero: {
      tagline: 'Junior AI Automation & Product Engineer',
      title: 'ignaciopalmeri',
      availability: 'Available for internships and trainee roles',
      kicker: 'I build small AI automations and products with backend, product judgment and operational context.',
      description: 'I am an IT Management student at UADE looking for my first role in AI, automation or product. This portfolio works like an operations room: shipped projects, agents, decisions and visible proof.',
      projectsCta: 'View projects',
      agentsCta: 'View workflow system',
      githubCta: 'GitHub',
      cvCta: 'Download CV',
      cvEnCta: 'CV in English →',
      status: 'Available for Trainee / Junior roles',
      systemKicker: 'AI Operations Room',
      systemTitle: 'Connected projects, agents and proof',
      feedOneTitle: 'JobBot feature',
      feedOneBody: 'I plan, implement backend/frontend and verify deployment.',
      feedTwoTitle: 'Portfolio verification',
      feedTwoBody: 'Playwright, mobile checks and visual review before publishing.',
      feedThreeTitle: 'README handoff',
      feedThreeBody: 'I turn technical decisions into setup and next steps.',
      labKicker: 'Live proof',
      labTitle: 'JobBot -> tests -> agents -> deploy',
      labBody: 'Visible projects, reviewable repos and workflow routes that show how I build.',
      locationLabel: 'Location',
      location: 'Buenos Aires, Argentina',
      focusLabel: 'Focus',
      focus: 'Python - Bots - Dashboards - Product/Fintech',
      oldPortfolio: 'Previous portfolio',
      email: 'Email'
    },
    console: {
      title: 'ignacio@portfolio',
      welcome: 'Type help to explore my profile.',
      prompt: 'Commands: about, skills, projects, agents, contact, clear',
      unknown: 'Command not found',
      about: 'ignaciopalmeri - IT Management student at UADE combining operations, product and automation to build useful software.',
      skills: 'Python, FastAPI, TypeScript, SQL, Linux, Git, Playwright, automatización de procesos e IA aplicada.',
      projects: 'Main projects: JobBot, Agents System, Sports Probability Dashboard and Pisculichi Labs. The full archive shows 9 deployed or reviewable pieces.',
      agents: 'I use AI assistants inside an ordered workflow: planning, building, review, tests, documentation and shipping.',
      contact: 'GitHub: @nachopalmeri | LinkedIn: ignaciopalmeri | Email: ignaciopalmeri1@gmail.com'
    },
    github: {
      eyebrow: 'Verifiable activity',
      title: 'Repos you can review',
      body: 'Public proof of work: demos, repos and visible continuity.'
    },
    orchestration: {
      body: 'Visible proof.'
    },
    proof: {
      shipped: { label: 'Projects', body: 'JobBot, Agents System and probability dashboard.' },
      stack: { label: 'Stack', body: 'Python, FastAPI, PostgreSQL, Linux.' },
      ops: { label: 'Operations', body: 'Cash handling, inventory and audits.' }
    },
    about: {
      title: 'About me',
      eyebrow: 'IT student focused on operational automation',
      thesis: 'I turn repetitive operations into small, deployed and reviewable software.',
      p1: 'I am an IT Management student at UADE building my first professional path in technology. I use AI to move faster, but the value I want to develop is deciding what is worth building and how to make it useful.',
      p2: 'I am interested in the intersection of software, economics, incentives and human behavior. I study beyond programming because strong products are not only syntax: they come from understanding systems, users and constraints.',
      p3: 'My customer service and operations background gave me real pressure, cash handling, inventory and audits. I want to bring that base into IT support, QA trainee, automation or startups where I can turn repetitive processes into reviewable software.',
      panelKicker: 'Operating model',
      panelTitle: 'Code + systems + business context',
      panelBody: 'AI makes code production faster. My focus is learning how to orchestrate tools, technical judgment and human context into solutions that make sense.'
    },
    certifications: {
      title: 'Certifications',
      body: 'Verified credentials and applied learning that support the work shown in projects.',
      verified: 'Verified',
      visible: 'Visible',
      open: 'View credential',
      noLink: 'No direct public link',
      redhat: {
        title: 'Red Hat',
        body: 'Linux, terminal, permissions and system administration fundamentals for working with real environments.'
      },
      claude: {
        title: 'Claude Code',
        body: 'AI-assisted development workflows for repo context, review, implementation and verifiable delivery.'
      },
      cisco: {
        title: 'Cisco CCNA 1',
        body: 'Networking fundamentals, addressing, connectivity and troubleshooting for understanding infrastructure.'
      }
    },
    stack: { title: 'Stack and tools', core: 'Technical core', product: 'Product and operations', ai: 'Applied AI' },
    projects: {
      title: 'Featured projects',
      archiveTitle: 'Project archive',
      featuredBody: 'Four main pieces: product, workflow system, analytics and experimental lab.',
      archiveBody: 'The first four are the core. The rest shows range: CLI, sports, local commerce and deployed landing pages.',
      github: 'View GitHub',
      status: { active: 'Active', public: 'Public', demo: 'Demo', local: 'Local' },
      jobbotTitle: 'JobBot - Automation prototype',
      agentsTitle: 'Workflow system - AI-fluent process',
      jobbot: 'Full-stack automation prototype for job-search workflows. Includes API, dashboard, authentication, webhooks, Telegram notifications and payment integrations.',
      franquiya: 'Sports probability dashboard built with Python logic, multiple sources and a deployed interface for reviewing match scenarios.',
      agents: 'Experimental product lab for bots, alerts, prediction-market tools and portfolio systems. Shows domain exploration, fast prototyping and the ability to connect finance, automation and web interfaces.',
      roleJobbot: 'Automation prototype / implementation',
      roleFranquiya: 'Analytics / deployed product',
      roleAgents: 'Product lab / rapid prototyping',
      valueJobbot: 'Next.js + FastAPI + PostgreSQL, secure auth, webhooks, Telegram and payments.',
      valueFranquiya: 'Python, multiple sources, Poisson matrices, Monte Carlo simulations and dashboard.',
      valueAgents: 'Bots, alerts and web experiments with explicit prototype scope.',
      proof: 'View proof',
      open: 'Open project',
      repo: 'View repo',
      exploreAgents: 'Explore ecosystem'
    },
    agents: {
      eyebrow: 'Real repo system',
      title: 'Workflow system',
      description: 'A local system I use to build, review and document with AI.',
      workflowsTitle: 'Workflows',
      workflowsBody: 'Based on real ~/.agents files.',
      proofTitle: 'Real flow',
      proofBody: 'Three routes I use to ship better.',
      workflow1: { label: 'JobBot feature', body: 'Plan, build, review and document.' },
      workflow2: { label: 'Portfolio verification', body: 'Playwright, mobile checks and localStorage.' },
      workflow3: { label: 'README handoff', body: 'Setup, diagrams and next steps.' },
      stats: '19 workflow modules - Documented routes - Local memory active',
      back: 'Back to graph',
      hint: 'Click an agent to inspect it - Simulate a route',
      stageIdle: 'Waiting for workflow',
      steps: { plan: 'Plan', build: 'Build', review: 'Review', test: 'Test', ship: 'Ship' }
    },
    graph: {
      subnodes: 'sub-nodes',
      connections: 'connections',
      step: 'Step',
      complete: 'COMPLETE',
      ready: 'Ready',
      selfImproved: 'Self-improvement complete: system adapted',
      validated: 'Ecosystem visualized: evidence reviewed',
      system: 'System'
    },
      footer: { text: '2026 ignaciopalmeri.', contact: 'Contact' }
  }
};

UI_COPY.es.workflowLedger = {
  title: 'Como trabajo con agentes',
  body: 'No vendo agentes como magia: los uso como rutas de trabajo verificables.',
  cta: 'Ver sistema completo',
  trigger: 'Trigger',
  agent: 'Agente',
  output: 'Output',
  proof: 'Proof'
};

UI_COPY.en.workflowLedger = {
  title: 'How I work with agents',
  body: 'I do not sell agents as magic: I use them as verifiable workflow routes.',
  cta: 'View full system',
  trigger: 'Trigger',
  agent: 'Agent',
  output: 'Output',
  proof: 'Proof'
};

UI_COPY.es.jobbotCase = {
  eyebrow: 'Case study principal',
  title: 'JobBot: de tarea repetitiva a producto full-stack',
  body: 'Lo uso como prueba central porque junta lo que quiero aportar en mi primer rol: entender una operación real, convertirla en flujo de producto y dejar evidencia técnica revisable.',
  problemLabel: 'Problema',
  problem: 'Buscar oportunidades, registrar avances y responder a tiempo se vuelve repetitivo. La automatización sirve solo si mantiene control sobre usuarios, pagos, webhooks y notificaciones.',
  solutionLabel: 'Solución',
  solution: 'Dashboard web, API en FastAPI, persistencia, autenticación, webhooks, Telegram y pagos integrados como prototipo desplegado.',
  architectureLabel: 'Arquitectura',
  decisionLabel: 'Decisiones',
  decisionOne: 'Separar UI y API para poder razonar sobre seguridad, datos y experiencia sin mezclar responsabilidades.',
  decisionTwo: 'Usar webhooks y notificaciones para mostrar integración real con servicios externos, no solo CRUD.',
  decisionThree: 'Documentar demo, repo, stack y próximos pasos para que un dev pueda auditar el alcance.',
  proofLabel: 'Prueba visible',
  proofOne: 'Demo pública',
  proofTwo: 'Repositorio revisable',
  proofThree: 'CV y portfolio conectados',
  demo: 'Abrir demo',
  repo: 'Ver repo',
  cv: 'Descargar CV'
};

UI_COPY.en.jobbotCase = {
  eyebrow: 'Main case study',
  title: 'JobBot: from repetitive task to full-stack product',
  body: 'I use it as the central proof because it combines what I want to bring to my first role: understanding an operation, turning it into a product flow and leaving reviewable technical evidence.',
  problemLabel: 'Problem',
  problem: 'Finding opportunities, tracking progress and responding on time becomes repetitive. Automation only helps if it keeps control over users, payments, webhooks and notifications.',
  solutionLabel: 'Solution',
  solution: 'Web dashboard, FastAPI backend, persistence, authentication, webhooks, Telegram and payments integrated as a deployed prototype.',
  architectureLabel: 'Architecture',
  decisionLabel: 'Decisions',
  decisionOne: 'Separate UI and API so security, data and UX can be reasoned about without mixing responsibilities.',
  decisionTwo: 'Use webhooks and notifications to show real integration with external services, beyond CRUD.',
  decisionThree: 'Document demo, repo, stack and next steps so another developer can audit the scope.',
  proofLabel: 'Visible proof',
  proofOne: 'Public demo',
  proofTwo: 'Reviewable repository',
  proofThree: 'CV and portfolio connected',
  demo: 'Open demo',
  repo: 'View repo',
  cv: 'Download CV'
};

UI_COPY.es.signalStations = {
  eyebrow: 'Estaciones de evidencia',
  title: 'Tres señales más para distintos públicos',
  body: 'Después del caso principal, estas piezas muestran rango: datos, producto experimental y prueba verificable.',
  prodeLabel: 'Datos / simulación',
  prodeTitle: 'Sports Probability Dashboard',
  prodeBody: 'Modelo de probabilidades con Python, escenarios deportivos y una interfaz desplegada para usuarios no técnicos.',
  prodeProof: 'Prueba: demo pública + repositorio + lógica inspeccionable.',
  labsLabel: 'Producto experimental',
  labsTitle: 'Pisculichi Labs',
  labsBody: 'Laboratorio de bots, alertas y herramientas para mercados predictivos. Muestra exploración rápida sin vender humo.',
  labsProof: 'Prueba: beta desplegada + experimentos de automatización.',
  proofLabel: 'Verificación',
  proofTitle: 'Evidencia revisable',
  proofBody: 'GitHub, CV, capturas, tests Playwright y rutas de agentes conectan el relato con artefactos concretos.',
  proofProof: 'Prueba: navegador verificado, repos públicos y CV descargable.',
  open: 'Abrir',
  inspect: 'Inspeccionar'
};

UI_COPY.en.signalStations = {
  eyebrow: 'Evidence stations',
  title: 'Three more signals for different audiences',
  body: 'After the main case, these pieces show range: data, experimental product work and verifiable proof.',
  prodeLabel: 'Data / simulation',
  prodeTitle: 'Sports Probability Dashboard',
  prodeBody: 'Probability model with Python, sports scenarios and a deployed interface for non-technical users.',
  prodeProof: 'Proof: public demo + repository + inspectable logic.',
  labsLabel: 'Experimental product',
  labsTitle: 'Pisculichi Labs',
  labsBody: 'Lab for bots, alerts and prediction-market tools. Shows fast exploration without overclaiming.',
  labsProof: 'Proof: deployed beta + automation experiments.',
  proofLabel: 'Verification',
  proofTitle: 'Reviewable evidence',
  proofBody: 'GitHub, CV, screenshots, Playwright tests and agent routes connect the story to concrete artifacts.',
  proofProof: 'Proof: browser-verified UI, public repos and downloadable CV.',
  open: 'Open',
  inspect: 'Inspect'
};

const STORAGE_FALLBACK = new Map();

function safeStorageGet(key, fallback) {
  try {
    if (typeof window === 'undefined' || !window.localStorage) return STORAGE_FALLBACK.has(key) ? STORAGE_FALLBACK.get(key) : fallback;
    const value = window.localStorage.getItem(key);
    return value === null ? fallback : value;
  } catch {
    return STORAGE_FALLBACK.has(key) ? STORAGE_FALLBACK.get(key) : fallback;
  }
}

function safeStorageSet(key, value) {
  try {
    if (typeof window !== 'undefined' && window.localStorage) {
      window.localStorage.setItem(key, value);
      return;
    }
  } catch {
    // Fall through to the in-memory fallback.
  }
  STORAGE_FALLBACK.set(key, value);
}

function secureExternalLinks(root = document) {
  root.querySelectorAll('a[target="_blank"]').forEach((anchor) => {
    const rel = new Set((anchor.getAttribute('rel') || '').split(/\s+/).filter(Boolean));
    rel.add('noopener');
    rel.add('noreferrer');
    anchor.setAttribute('rel', Array.from(rel).join(' '));
  });
}

let currentLang = safeStorageGet('portfolio-lang', 'es');
let currentTheme = safeStorageGet('portfolio-theme', 'dark');

const HERO_OPERATIONS = {
  jobbot: {
    es: {
      kicker: 'LIVE CASE',
      title: 'JobBot',
      body: 'Prototipo full-stack para automatizar búsqueda laboral con backend, auth, webhooks, Telegram y pagos.',
      stack: ['Next.js', 'FastAPI', 'PostgreSQL']
    },
    en: {
      kicker: 'LIVE CASE',
      title: 'JobBot',
      body: 'Full-stack prototype for job-search automation with backend, auth, webhooks, Telegram and payments.',
      stack: ['Next.js', 'FastAPI', 'PostgreSQL']
    }
  },
  agents: {
    es: {
      kicker: 'WORKFLOW SYSTEM',
      title: 'Agents System',
      body: 'Mapa de trabajo con agentes para planear, construir, revisar, probar y documentar entregas reales.',
      stack: ['Agents', 'Playwright', 'Docs']
    },
    en: {
      kicker: 'WORKFLOW SYSTEM',
      title: 'Agents System',
      body: 'Agent workflow map for planning, building, reviewing, testing and documenting real deliveries.',
      stack: ['Agents', 'Playwright', 'Docs']
    }
  },
  prode: {
    es: {
      kicker: 'DATA PRODUCT',
      title: 'Sports Probability',
      body: 'Dashboard de probabilidades con Python, escenarios, simulaciones y visualización para usuarios no técnicos.',
      stack: ['Python', 'Analytics', 'Vercel']
    },
    en: {
      kicker: 'DATA PRODUCT',
      title: 'Sports Probability',
      body: 'Probability dashboard with Python, scenarios, simulations and visualization for non-technical users.',
      stack: ['Python', 'Analytics', 'Vercel']
    }
  },
  labs: {
    es: {
      kicker: 'PRODUCT LAB',
      title: 'Pisculichi Labs',
      body: 'Experimentos con bots, alertas, mercados predictivos e interfaces web con alcance de prototipo.',
      stack: ['Bots', 'Markets', 'Alerts']
    },
    en: {
      kicker: 'PRODUCT LAB',
      title: 'Pisculichi Labs',
      body: 'Experiments with bots, alerts, prediction markets and web interfaces with explicit prototype scope.',
      stack: ['Bots', 'Markets', 'Alerts']
    }
  },
  proof: {
    es: {
      kicker: 'VISIBLE PROOF',
      title: 'Repos, CV y tests',
      body: 'La experiencia no se queda en claims: muestra demos, repos, capturas, CV y verificación con navegador.',
      stack: ['GitHub', 'CV', 'Tests']
    },
    en: {
      kicker: 'VISIBLE PROOF',
      title: 'Repos, CV and tests',
      body: 'The experience does not stop at claims: it shows demos, repos, screenshots, CV and browser verification.',
      stack: ['GitHub', 'CV', 'Tests']
    }
  }
};

function getCopy(path, lang = currentLang) {
  return path.split('.').reduce((value, key) => value && value[key], UI_COPY[lang]) || path;
}

function applyStaticCopy() {
  document.documentElement.lang = currentLang;
  document.documentElement.dataset.theme = currentTheme;
  document.title = currentLang === 'es'
    ? 'ignaciopalmeri - Junior AI Automation & Product Engineer'
    : 'ignaciopalmeri - Junior AI Automation & Product Engineer';
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    el.textContent = getCopy(el.dataset.i18n);
  });
  document.querySelectorAll('[data-lang-btn]').forEach((btn) => {
    const isActive = btn.dataset.langBtn === currentLang;
    btn.classList.toggle('active', isActive);
    btn.setAttribute('aria-pressed', String(isActive));
  });
  secureExternalLinks(document);
  resetTerminal();
  if (document.getElementById('project-carousel')) renderProjectCarousel();
  updateHeroOperationDetail(document.querySelector('[data-ops-node].active')?.dataset.opsNode || 'jobbot');
}

function rebuildLocalizedEcosystem() {
  if (!ecoInitialized) return;
  stopWorkflow();
  setupCurrentAgentPortfolioData();
  buildNodes();
  collapseGraph();
  resizeCanvas();
}

const terminalHistory = [];

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function writeTerminal(line, tone = 'muted') {
  const output = document.getElementById('terminal-output');
  if (!output) return;
  terminalHistory.push({ line, tone });
  output.innerHTML = terminalHistory
    .slice(-8)
    .map(item => `<div class="terminal-line terminal-line-${item.tone}">${escapeHtml(item.line)}</div>`)
    .join('');
  output.scrollTop = output.scrollHeight;
}

function resetTerminal() {
  const output = document.getElementById('terminal-output');
  if (!output) return;
  terminalHistory.length = 0;
  writeTerminal(getCopy('console.welcome'));
  writeTerminal(getCopy('console.prompt'), 'accent');
}

function runTerminalCommand(rawCommand) {
  const command = rawCommand.trim().toLowerCase();
  if (!command) return;
  writeTerminal(`$ ${command}`, 'input');
  if (command === 'clear') {
    resetTerminal();
    return;
  }
  const key = `console.${command}`;
  const response = getCopy(key);
  writeTerminal(response === key ? `${getCopy('console.unknown')}: ${command}` : response, response === key ? 'error' : 'muted');
}

function setupTerminal() {
  const form = document.getElementById('terminal-form');
  const input = document.getElementById('terminal-input');
  if (!form || !input) return;

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    runTerminalCommand(input.value);
    input.value = '';
  });

  document.querySelectorAll('[data-terminal-cmd]').forEach((button) => {
    button.addEventListener('click', () => runTerminalCommand(button.dataset.terminalCmd));
  });
}

function setupFloatingConsole() {
  const launcher = document.getElementById('console-launcher');
  const panel = document.getElementById('console-chat');
  const close = document.getElementById('console-close');
  const input = document.getElementById('terminal-input');
  if (!launcher || !panel) return;

  function setOpen(open) {
    panel.classList.toggle('open', open);
    panel.setAttribute('aria-hidden', String(!open));
    if ('inert' in panel) panel.inert = !open;
    else panel.toggleAttribute('inert', !open);
    launcher.setAttribute('aria-expanded', String(open));
    launcher.classList.toggle('active', open);
    if (open && input) setTimeout(() => input.focus({ preventScroll: true }), 80);
  }

  setOpen(false);
  launcher.addEventListener('click', () => setOpen(!panel.classList.contains('open')));
  close && close.addEventListener('click', () => setOpen(false));
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && panel.classList.contains('open')) setOpen(false);
  });
}

function setupPreferenceControls() {
  applyStaticCopy();
  setupTerminal();
  setupFloatingConsole();
  document.querySelectorAll('[data-lang-btn]').forEach((btn) => {
    btn.addEventListener('click', () => {
      currentLang = btn.dataset.langBtn;
      safeStorageSet('portfolio-lang', currentLang);
      applyStaticCopy();
      rebuildLocalizedEcosystem();
    });
  });

  const themeToggle = document.getElementById('theme-toggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
      safeStorageSet('portfolio-theme', currentTheme);
      applyStaticCopy();
    });
  }
}

const FEATURED_PROJECTS = [
  {
    id: 'jobbot',
    title: 'JobBot',
    repo: 'https://github.com/nachopalmeri/jobbot',
    href: 'https://jobbot-lime.vercel.app',
    media: 'project-assets/job-bot.png',
    status: 'ACTIVE',
    kind: { es: 'Automation prototype', en: 'Automation prototype' },
    description: {
      es: 'Prototipo full-stack para automatizar búsquedas laborales. Next.js, FastAPI, PostgreSQL, auth, webhooks y pagos.',
      en: 'Full-stack prototype for job-search automation. Next.js, FastAPI, PostgreSQL, auth, webhooks and payments.'
    },
    value: {
      es: 'Incluye API, dashboard, autenticación, webhooks, Telegram y despliegue público.',
      en: 'Includes API, dashboard, authentication, webhooks, Telegram and public deployment.'
    },
    problem: {
      es: 'Automatizar búsqueda laboral sin perder control sobre seguridad, pagos y webhooks.',
      en: 'Automate job search without losing control over security, payments and webhooks.'
    },
    role: {
      es: 'Implementación: dashboard, backend, autenticación, webhooks y despliegue.',
      en: 'Implementation: dashboard, backend, authentication, webhooks and deployment.'
    },
    evidence: {
      es: 'Demo pública, repo revisable y stack claro: API, dashboard, auth, webhooks, pagos y Telegram.',
      en: 'Public demo, reviewable repo and clear stack: API, dashboard, auth, webhooks, payments and Telegram.'
    },
    stack: ['Python', 'FastAPI', 'Next.js', 'PostgreSQL', 'Webhooks']
  },
  {
    id: 'agents-system',
    title: 'Agents System',
    repo: 'https://github.com/nachopalmeri/agents-system',
    href: '#/agents',
    media: 'project-assets/agents-system.png',
    status: 'LOCAL',
    kind: { es: 'Workflow system', en: 'Workflow system' },
    description: {
      es: 'Mapa visual de mi sistema local con agentes, reglas y memoria.',
      en: 'Visual map of my local system with agents, rules and memory.'
    },
    value: {
      es: 'Explica como uso IA para planear, revisar, verificar y documentar sin venderlo como producto falso.',
      en: 'Explains how I use AI to plan, review, verify and document without selling it as a fake product.'
    },
    problem: {
      es: 'Hacer visible un proceso de trabajo que normalmente queda escondido en prompts, notas y decisiones locales.',
      en: 'Make visible a work process that usually stays hidden in prompts, notes and local decisions.'
    },
    role: {
      es: 'Orquestacion, documentacion, UI del grafo, pruebas y narrativa del sistema.',
      en: 'Orchestration, documentation, graph UI, tests and system narrative.'
    },
    evidence: {
      es: 'Grafo interactivo, rutas seleccionables, capturas y tests de navegador del portfolio.',
      en: 'Interactive graph, selectable routes, screenshots and browser tests in the portfolio.'
    },
    stack: ['Agents', 'Playwright', 'Docs', 'Workflow']
  },
  {
    id: 'motor-estadistico',
    title: 'Sports Probability Dashboard',
    repo: 'https://github.com/nachopalmeri/prode-mundial-2026',
    href: 'https://prode-mundial-2026-ten-omega.vercel.app',
    media: 'project-assets/prode-mundial-2026.png',
    status: 'LIVE',
    kind: { es: 'Analytics de deportes', en: 'Sports analytics' },
    description: {
      es: 'Dashboard en Python para probabilidades deportivas, escenarios y visualización.',
      en: 'Python dashboard for sports probabilities, scenarios and visualization.'
    },
    value: {
      es: 'Python, múltiples fuentes, matrices Poisson, simulaciones Monte Carlo y dashboard para usuarios no técnicos.',
      en: 'Python, multiple sources, Poisson matrices, Monte Carlo simulations and a dashboard for non-technical users.'
    },
    problem: {
      es: 'Transformar datos deportivos y escenarios en una experiencia usable para usuarios no técnicos.',
      en: 'Turn sports data and scenarios into a usable experience for non-technical users.'
    },
    role: {
      es: 'Modelado de reglas, lógica Python, deploy y experiencia de participación.',
      en: 'Rule modeling, Python logic, deployment and participation experience.'
    },
    evidence: {
      es: 'Dashboard desplegado, repositorio público y lógica de predicción explicable desde el código.',
      en: 'Deployed dashboard, public repository and prediction logic that can be inspected in code.'
    },
    stack: ['Python', 'Analytics', 'Vercel', 'Game Logic']
  },
  {
    id: 'pisculichi',
    title: 'Pisculichi Labs',
    repo: 'https://github.com/nachopalmeri/a',
    href: 'https://polytools-omega.vercel.app',
    media: 'project-assets/polymarktporyect.PNG',
    status: 'BETA',
    kind: { es: 'Product lab', en: 'Product lab' },
    description: {
      es: 'Laboratorio para bots, alertas y herramientas web.',
      en: 'Lab for bots, alerts and web tools.'
    },
    value: {
      es: 'Conecta finanzas, automatización e interfaces web con alcance explícito de prototipo.',
      en: 'Connects finance, automation and web interfaces with explicit prototype scope.'
    },
    problem: {
      es: 'Convertir información de mercados predictivos en herramientas accionables.',
      en: 'Turn prediction-market information into actionable tools.'
    },
    role: {
      es: 'Producto experimental, automatización, bots y experiencia web.',
      en: 'Experimental product, automation, bots and web experience.'
    },
    evidence: {
      es: 'Demo beta desplegada y repositorio de experimentos con bots, alertas e interfaces de mercado.',
      en: 'Deployed beta demo and experiment repository with bots, alerts and market interfaces.'
    },
    stack: ['HTML', 'Telegram Bot', 'Prediction Markets', 'Alerts']
  },
  {
    id: 'pisku',
    title: 'PISKU CLI',
    repo: 'https://github.com/nachopalmeri/pisku-',
    href: 'https://pisku-cli.vercel.app',
    media: 'project-assets/pisku-cli-correct.png',
    status: 'PUBLIC',
    kind: { es: 'CLI Product Interface', en: 'CLI Product Interface' },
    description: {
      es: 'Interfaz estilo CLI para mostrar un producto de control de gasto/ahorro con identidad propia y experiencia directa.',
      en: 'CLI-style interface for a spending/savings control product with a strong identity and direct experience.'
    },
    value: {
      es: 'Explora una forma distinta de empaquetar producto financiero sin caer en landing genérica.',
      en: 'Explores a different way to package a finance product without a generic landing.'
    },
    problem: {
      es: 'Presentar gestión de gasto/ahorro con una interfaz recordable y directa.',
      en: 'Present spending/savings control with a memorable, direct interface.'
    },
    role: {
      es: 'Dirección de producto, copy, experiencia CLI y despliegue web.',
      en: 'Product direction, copy, CLI experience and web deployment.'
    },
    evidence: {
      es: 'Demuestra criterio de empaque, narrativa y UX fuera del molde de landing.',
      en: 'Shows packaging, narrative and UX judgment beyond generic landing pages.'
    },
    stack: ['Python', 'CLI', 'Finance UX', 'Landing']
  },
  {
    id: 'fulbotracker',
    title: 'FulboTracker',
    repo: 'https://github.com/nachopalmeri/fulbotracker',
    href: 'https://fulbotracker.vercel.app',
    media: 'project-assets/futtracker.PNG',
    status: 'PUBLIC',
    kind: { es: 'Sports Product', en: 'Sports Product' },
    description: {
      es: 'Producto para trackear partidos, torneos y dinámicas entre amigos, con foco en experiencia social simple.',
      en: 'Product for tracking matches, tournaments and friend-group dynamics with a simple social experience.'
    },
    value: {
      es: 'Convierte una actividad informal en flujo medible y compartible.',
      en: 'Turns an informal activity into a measurable and shareable flow.'
    },
    problem: {
      es: 'Transformar partidos entre amigos en registro, dinámica social y seguimiento.',
      en: 'Turn friend-group matches into records, social dynamics and tracking.'
    },
    role: {
      es: 'Producto social, estructura de datos simple e interfaz clara.',
      en: 'Social product, simple data structure and clear interface.'
    },
    evidence: {
      es: 'Muestra sensibilidad para productos pequenos con uso recurrente.',
      en: 'Shows sensitivity for small products with recurring use.'
    },
    stack: ['HTML', 'Product UX', 'Sports', 'Vercel']
  },
  {
    id: 'comidadebarrio',
    title: 'Comida de Barrio',
    repo: 'https://github.com/nachopalmeri/comidadebarrio',
    href: 'https://comidadebarrio.vercel.app',
    media: 'project-assets/comidadebarrio.PNG',
    status: 'PUBLIC',
    kind: { es: 'Local Commerce', en: 'Local Commerce' },
    description: {
      es: 'Experimento web para comercio gastronómico local, enfocado en oferta clara, marca y conversión simple.',
      en: 'Web experiment for local food commerce, focused on clear offer, brand and simple conversion.'
    },
    value: {
      es: 'Muestra criterio para llevar negocios chicos a una presencia digital usable.',
      en: 'Shows judgment for turning small businesses into usable digital presences.'
    },
    problem: {
      es: 'Dar presencia digital concreta a un comercio gastronómico local.',
      en: 'Give a local food business a concrete digital presence.'
    },
    role: {
      es: 'Landing, mensaje comercial, dirección visual y conversión simple.',
      en: 'Landing page, commercial message, visual direction and simple conversion.'
    },
    evidence: {
      es: 'Muestra criterio para resolver necesidades reales sin sobredisenar.',
      en: 'Shows judgment for solving real needs without overdesigning.'
    },
    stack: ['HTML', 'Local Business', 'Landing', 'Vercel']
  },
  {
    id: 'dom',
    title: 'DOM',
    repo: 'https://github.com/nachopalmeri/dom',
    href: 'https://dom-two.vercel.app',
    media: 'project-assets/dom.PNG',
    status: 'PUBLIC',
    kind: { es: 'Sports Landing', en: 'Sports Landing' },
    description: {
      es: 'Landing visual para experiencia deportiva, con foco en narrativa, CTA y presentación de propuesta.',
      en: 'Visual landing for a sports experience, focused on narrative, CTA and offer presentation.'
    },
    value: {
      es: 'Prueba de dirección visual y conversión en un contexto no técnico.',
      en: 'Visual direction and conversion practice in a non-technical context.'
    },
    problem: {
      es: 'Comunicar una propuesta deportiva con narrativa, impacto visual y CTA.',
      en: 'Communicate a sports offer with narrative, visual impact and CTA.'
    },
    role: {
      es: 'Dirección visual, estructura de landing y experiencia responsive.',
      en: 'Visual direction, landing structure and responsive experience.'
    },
    evidence: {
      es: 'Demuestra amplitud para construir interfaces no solo tecnicas.',
      en: 'Shows range for building interfaces beyond technical dashboards.'
    },
    stack: ['HTML', 'Sports', 'Landing', 'Vercel']
  },
  {
    id: 'dulces',
    title: 'Dulces Creaciones',
    repo: 'https://github.com/nachopalmeri/dulcescreaciones',
    href: 'https://dulcescreaciones.vercel.app',
    media: 'project-assets/dulcescreaciones.png',
    status: 'PUBLIC',
    kind: { es: 'Commerce Landing', en: 'Commerce Landing' },
    description: {
      es: 'Sitio comercial desplegado para una marca de productos dulces, dentro de la línea de landing/producto para negocios reales.',
      en: 'Deployed commercial site for a sweets brand, part of the landing/product line for real businesses.'
    },
    value: {
      es: 'Práctica de empaquetado visual, mensaje y despliegue rápido.',
      en: 'Practice in visual packaging, messaging and fast deployment.'
    },
    problem: {
      es: 'Convertir una marca de productos dulces en una vidriera web clara.',
      en: 'Turn a sweets brand into a clear web storefront.'
    },
    role: {
      es: 'Brand landing, copy comercial, presentación visual y deploy.',
      en: 'Brand landing, commercial copy, visual presentation and deploy.'
    },
    evidence: {
      es: 'Muestra velocidad para entregar sitios simples con criterio comercial.',
      en: 'Shows speed delivering simple sites with commercial judgment.'
    },
    stack: ['HTML', 'Commerce', 'Brand', 'Vercel']
  }
];

function projectField(project, field) {
  const value = project[field];
  if (!value || typeof value === 'string') return value || '';
  return value[currentLang] || value.es || value.en || '';
}

function projectMediaFallbackMarkup(project, kind, label) {
  return `
    <div class="project-media-fallback ${kind ? `kind-${kind.toLowerCase().replace(/[^a-z0-9]+/g, '-')}` : ''}">
      <span class="project-media-fallback-kicker">${escapeHtml(project.status)}</span>
      <strong>${escapeHtml(project.title)}</strong>
      <span>${escapeHtml(label || projectField(project, 'kind'))}</span>
    </div>
  `;
}

window.handleProjectMediaError = function handleProjectMediaError(img) {
  if (!img || !img.parentElement || img.dataset.fallbackApplied === 'true') return;
  const projectTitle = img.dataset.projectTitle || 'Project';
  const projectKind = img.dataset.projectKind || '';
  img.dataset.fallbackApplied = 'true';
  const container = img.parentElement;
  container.classList.add('media-fallback');
  container.innerHTML = projectMediaFallbackMarkup(
    {
      title: projectTitle,
      status: img.dataset.projectStatus || 'LIVE',
      kind: projectKind
    },
    projectKind,
    img.dataset.projectLabel || projectKind
  );
};

function projectImage(project, index, variant = 'mission') {
  const alt = `${project.title} screenshot`;
  const loading = variant === 'preview' || variant === 'archive' || index === 0 ? 'eager' : 'lazy';
  const dataset = [
    `data-project-title="${escapeHtml(project.title)}"`,
    `data-project-kind="${escapeHtml(projectField(project, 'kind'))}"`,
    `data-project-status="${escapeHtml(project.status)}"`,
    `data-project-label="${escapeHtml(projectField(project, 'value'))}"`
  ].join(' ');
  return `
    <img
      src="${project.media}"
      alt="${escapeHtml(alt)}"
      width="1280"
      height="720"
      loading="${loading}"
      decoding="async"
      onerror="handleProjectMediaError(this)"
      ${dataset}
      class="project-media-img project-media-${variant}"
    >
  `;
}

function renderProjectPreview(project, index, mode = 'active') {
  const previewClass = mode === 'hover' ? 'hover' : 'active';
  return `
    <article class="project-preview ${previewClass}" data-project-id="${project.id}">
      <figure class="project-preview-media">
        ${projectImage(project, index, 'preview')}
      </figure>
      <div class="project-preview-copy">
        <div class="project-preview-kicker">${escapeHtml(project.status)} / ${escapeHtml(projectField(project, 'kind'))}</div>
        <h3>${escapeHtml(project.title)}</h3>
        <p>${escapeHtml(projectField(project, 'description'))}</p>
        <dl class="project-proof-points">
          <div><dt>${currentLang === 'es' ? 'Rol' : 'Role'}</dt><dd>${escapeHtml(projectField(project, 'role'))}</dd></div>
        </dl>
        <div class="project-preview-tags">${project.stack.slice(0, 4).map(item => `<span>${escapeHtml(item)}</span>`).join('')}</div>
        <div class="project-preview-links">
          <a class="carousel-proof" href="${project.href}" ${project.href.startsWith('#') ? '' : 'target="_blank" rel="noopener noreferrer"'}>${escapeHtml(getCopy('projects.open'))}</a>
          <a class="carousel-proof subtle" href="${project.repo}" target="_blank" rel="noopener noreferrer">${escapeHtml(getCopy('projects.repo'))}</a>
        </div>
      </div>
    </article>
  `;
}

function renderProjectCarousel() {
  const carousel = document.getElementById('project-carousel');
  const archive = document.getElementById('project-archive');
  if (!carousel && !archive) return;

  if (carousel) {
    carousel.innerHTML = `
      <div class="featured-project-grid" aria-label="Featured projects">
        ${FEATURED_PROJECTS.slice(0, 4).map((project, index) => renderProjectPreview(project, index, 'active')).join('')}
      </div>
    `;
  }

  if (archive) {
    archive.innerHTML = FEATURED_PROJECTS.map((project, index) => `
      <a class="archive-row ${index < 4 ? 'archive-row-featured' : 'archive-row-secondary'}" href="${project.href}" ${project.href.startsWith('#') ? '' : 'target="_blank" rel="noopener noreferrer"'}>
        <span class="archive-number">${String(index + 1).padStart(2, '0')}</span>
        <span class="archive-thumb">${projectImage(project, index, 'archive')}</span>
        <span class="archive-main">
          <span class="archive-meta">${escapeHtml(project.status)} / ${escapeHtml(projectField(project, 'kind'))}</span>
          <strong>${escapeHtml(project.title)}</strong>
          <small>${escapeHtml(projectField(project, 'description'))}</small>
          <span class="archive-problem">${escapeHtml(projectField(project, 'problem'))}</span>
        </span>
        <span class="archive-tags">${project.stack.slice(0, 3).map(item => `<em>${escapeHtml(item)}</em>`).join('')}</span>
        <span class="archive-open">${escapeHtml(getCopy('projects.open'))}</span>
      </a>
    `).join('');
  }
}

function updateHeroOperationDetail(key = 'jobbot') {
  const item = HERO_OPERATIONS[key]?.[currentLang] || HERO_OPERATIONS.jobbot[currentLang];
  const kicker = document.getElementById('hero-ops-kicker');
  const title = document.getElementById('hero-ops-title');
  const body = document.getElementById('hero-ops-body');
  const stack = document.getElementById('hero-ops-stack');
  if (!kicker || !title || !body || !stack) return;

  kicker.textContent = item.kicker;
  title.textContent = item.title;
  body.textContent = item.body;
  stack.innerHTML = item.stack.map((label) => `<span>${escapeHtml(label)}</span>`).join('');
}

function focusPortfolioTarget(target, highlightTarget = target) {
  const element = typeof target === 'string' ? document.querySelector(target) : target;
  const highlight = typeof highlightTarget === 'string' ? document.querySelector(highlightTarget) : highlightTarget;
  if (!element) return;

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  element.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
  if (highlight) {
    highlight.classList.remove('section-focus-pulse');
    // Restart the animation if the same target is selected repeatedly.
    void highlight.offsetWidth;
    highlight.classList.add('section-focus-pulse');
    window.setTimeout(() => highlight.classList.remove('section-focus-pulse'), 1400);
  }
}

function navigateHeroOperation(key) {
  const targets = {
    jobbot: ['#jobbot-case-title', '.jobbot-case-section'],
    prode: ['#signal-prode', '#signal-prode'],
    labs: ['#signal-labs', '#signal-labs'],
    proof: ['#signal-proof', '#signal-proof']
  };

  if (key === 'agents') {
    window.location.hash = '#/agents';
    return;
  }

  const [target, highlight] = targets[key] || targets.jobbot;
  focusPortfolioTarget(target, highlight);
}

function setupHeroOperations() {
  const buttons = Array.from(document.querySelectorAll('[data-ops-node]'));
  if (!buttons.length) return;

  function activate(button) {
    buttons.forEach((item) => {
      const active = item === button;
      item.classList.toggle('active', active);
      item.setAttribute('aria-pressed', String(active));
    });
    updateHeroOperationDetail(button.dataset.opsNode);
  }

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      activate(button);
      navigateHeroOperation(button.dataset.opsNode);
    });
    button.addEventListener('mouseenter', () => activate(button));
    button.addEventListener('focus', () => activate(button));
  });

  updateHeroOperationDetail(buttons.find((button) => button.classList.contains('active'))?.dataset.opsNode || 'jobbot');
}

function setupProjectCarousel() {
  renderProjectCarousel();
}

function setupThreeAiOpsHero(canvas, hero, nodes, reduceMotion) {
  const THREE = window.THREE;
  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true, powerPreference: 'high-performance' });
  renderer.setClearColor(0x000000, 0);
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
  camera.position.set(0, 0, 8.5);

  const group = new THREE.Group();
  scene.add(group);

  const core = new THREE.Mesh(
    new THREE.SphereGeometry(0.72, 48, 48),
    new THREE.MeshBasicMaterial({ color: 0x0f172a, transparent: true, opacity: 0.82 })
  );
  group.add(core);

  const halo = new THREE.Mesh(
    new THREE.SphereGeometry(1.08, 48, 48),
    new THREE.MeshBasicMaterial({ color: 0x10b981, transparent: true, opacity: 0.08, wireframe: true })
  );
  group.add(halo);

  const rings = [1.4, 2.0, 2.55].map((radius, index) => {
    const ring = new THREE.Mesh(
      new THREE.TorusGeometry(radius, 0.008, 8, 120),
      new THREE.MeshBasicMaterial({ color: index === 1 ? 0x3b82f6 : 0x10b981, transparent: true, opacity: 0.34 })
    );
    ring.rotation.x = Math.PI / 2.8 + index * 0.18;
    ring.rotation.y = index * 0.45;
    group.add(ring);
    return ring;
  });

  const particleCount = window.innerWidth < 760 ? 36 : 90;
  const particlePositions = new Float32Array(particleCount * 3);
  for (let i = 0; i < particleCount; i++) {
    const radius = 1.5 + Math.random() * 3.8;
    const angle = Math.random() * Math.PI * 2;
    particlePositions[i * 3] = Math.cos(angle) * radius;
    particlePositions[i * 3 + 1] = (Math.random() - 0.5) * 3.8;
    particlePositions[i * 3 + 2] = Math.sin(angle) * radius * 0.72;
  }
  const particleGeometry = new THREE.BufferGeometry();
  particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
  const particles = new THREE.Points(
    particleGeometry,
    new THREE.PointsMaterial({ color: 0xededed, size: 0.035, transparent: true, opacity: 0.62 })
  );
  group.add(particles);

  const lineMaterial = new THREE.LineBasicMaterial({ color: 0x10b981, transparent: true, opacity: 0.24 });
  const nodeObjects = nodes.map((label, index) => {
    const nodeGroup = new THREE.Group();
    const angle = (index / nodes.length) * Math.PI * 2;
    nodeGroup.position.set(Math.cos(angle) * 3.0, Math.sin(angle) * 1.55, Math.sin(angle) * 0.85);

    const nodeMesh = new THREE.Mesh(
      new THREE.SphereGeometry(0.16, 24, 24),
      new THREE.MeshBasicMaterial({ color: 0x10b981, transparent: true, opacity: 0.78 })
    );
    nodeGroup.add(nodeMesh);

    const sprite = makeTextSprite(label);
    sprite.position.set(0, -0.42, 0);
    nodeGroup.add(sprite);

    const lineGeometry = new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(0, 0, 0), nodeGroup.position.clone()]);
    const line = new THREE.Line(lineGeometry, lineMaterial.clone());
    group.add(line);
    group.add(nodeGroup);
    return { group: nodeGroup, mesh: nodeMesh, line, angle };
  });

  let width = 0;
  let height = 0;
  let frameId = null;
  let running = false;

  function makeTextSprite(text) {
    const labelCanvas = document.createElement('canvas');
    labelCanvas.width = 256;
    labelCanvas.height = 74;
    const labelCtx = labelCanvas.getContext('2d');
    if (!labelCtx) {
      const fallbackMaterial = new THREE.SpriteMaterial({ color: 0x10b981, transparent: true, opacity: 0.12 });
      const fallbackSprite = new THREE.Sprite(fallbackMaterial);
      fallbackSprite.scale.set(0.9, 0.24, 1);
      return fallbackSprite;
    }
    labelCtx.fillStyle = 'rgba(9,9,11,0.82)';
    roundedCanvasRect(labelCtx, 12, 12, 232, 46, 23);
    labelCtx.fill();
    labelCtx.strokeStyle = 'rgba(16,185,129,0.72)';
    labelCtx.lineWidth = 2;
    labelCtx.stroke();
    labelCtx.fillStyle = '#ededed';
    labelCtx.font = '700 24px Space Grotesk, Arial, sans-serif';
    labelCtx.textAlign = 'center';
    labelCtx.textBaseline = 'middle';
    labelCtx.fillText(text, 128, 35);
    const texture = new THREE.CanvasTexture(labelCanvas);
    const material = new THREE.SpriteMaterial({ map: texture, transparent: true });
    const sprite = new THREE.Sprite(material);
    sprite.scale.set(1.18, 0.34, 1);
    return sprite;
  }

  function roundedCanvasRect(context, x, y, w, h, r) {
    context.beginPath();
    context.moveTo(x + r, y);
    context.arcTo(x + w, y, x + w, y + h, r);
    context.arcTo(x + w, y + h, x, y + h, r);
    context.arcTo(x, y + h, x, y, r);
    context.arcTo(x, y, x + w, y, r);
    context.closePath();
  }

  function resize() {
    const rect = hero.getBoundingClientRect();
    width = Math.max(1, rect.width);
    height = Math.max(420, rect.height);
    renderer.setPixelRatio(Math.min(2, Math.max(1, window.devicePixelRatio || 1)));
    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    group.position.x = width < 900 ? 1.55 : 4.05;
    group.position.y = width < 760 ? 0.65 : -0.05;
    group.scale.setScalar(width < 760 ? 0.6 : 0.86);
  }

  function shouldRun() {
    return !reduceMotion.matches && document.visibilityState === 'visible' && document.getElementById('overview-section')?.classList.contains('active');
  }

  function render(time = 0) {
    const active = Math.floor(time / 1100) % nodeObjects.length;
    group.rotation.y = time * 0.00012;
    core.rotation.y = time * 0.0005;
    halo.rotation.y = -time * 0.00035;
    particles.rotation.y = time * 0.00008;
    rings.forEach((ring, index) => {
      ring.rotation.z = time * (0.00018 + index * 0.00006);
    });
    nodeObjects.forEach((node, index) => {
      const angle = node.angle + time * 0.00022;
      node.group.position.set(Math.cos(angle) * 3.0, Math.sin(angle) * 1.55, Math.sin(angle) * 0.85);
      node.mesh.material.color.set(0x10b981);
      node.mesh.scale.setScalar(index === active ? 1.28 + Math.sin(time * 0.008) * 0.12 : 1);
      node.line.geometry.setFromPoints([new THREE.Vector3(0, 0, 0), node.group.position.clone()]);
      node.line.material.opacity = index === active ? 0.72 : 0.2;
    });
    renderer.render(scene, camera);
    if (running) frameId = requestAnimationFrame(render);
  }

  function start() {
    running = shouldRun();
    if (frameId) cancelAnimationFrame(frameId);
    if (running) frameId = requestAnimationFrame(render);
    else render(0);
  }

  resize();
  start();
  window.addEventListener('resize', () => {
    resize();
    start();
  });
  document.addEventListener('visibilitychange', start);
  reduceMotion.addEventListener('change', () => {
    if (reduceMotion.matches) renderer.render(scene, camera);
    start();
  });
  window.addEventListener('hashchange', start);
  window.addEventListener('portfolio-tab-change', start);
}

function setupAiOpsHero() {
  const canvas = document.getElementById('ai-ops-canvas');
  const hero = document.querySelector('.ai-ops-hero');
  if (!canvas || !hero) return;
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const nodes = ['Planner', 'Builder', 'Reviewer', 'Security', 'Docs'];
  if (window.THREE && !reduceMotion.matches) {
    try {
      setupThreeAiOpsHero(canvas, hero, nodes, reduceMotion);
      return;
    } catch (error) {
      console.warn('Three.js hero failed, falling back to canvas 2D.', error);
    }
  }
  const ctx = canvas.getContext('2d');
  if (!ctx) {
    hero.classList.add('no-canvas');
    canvas.hidden = true;
    return;
  }
  let width = 0;
  let height = 0;
  let particles = [];
  let frameId = null;
  let running = false;

  function resize() {
    const rect = hero.getBoundingClientRect();
    width = Math.max(1, rect.width);
    height = Math.max(420, rect.height);
    const ratio = Math.min(2, Math.max(1, window.devicePixelRatio || 1));
    canvas.width = Math.round(width * ratio);
    canvas.height = Math.round(height * ratio);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    const count = width < 760 ? 36 : 90;
    particles = Array.from({ length: count }, (_, i) => ({
      seed: i,
      radius: 80 + Math.random() * Math.min(width, height) * 0.42,
      angle: Math.random() * Math.PI * 2,
      speed: 0.001 + Math.random() * 0.0022,
      size: 1 + Math.random() * 2.2,
      alpha: 0.14 + Math.random() * 0.42
    }));
  }

  function getCore() {
    return {
      x: width < 900 ? width * 0.54 : width * 0.66,
      y: width < 900 ? height * 0.38 : height * 0.46,
      r: Math.min(width, height) * (width < 760 ? 0.11 : 0.13)
    };
  }

  function nodePosition(index, time) {
    const core = getCore();
    const angle = (index / nodes.length) * Math.PI * 2 - Math.PI / 2 + Math.sin(time * 0.0004) * 0.08;
    const rx = core.r * 2.8;
    const ry = core.r * 2.05;
    return {
      x: core.x + Math.cos(angle) * rx,
      y: core.y + Math.sin(angle) * ry
    };
  }

  function draw(time = 0) {
    ctx.clearRect(0, 0, width, height);
    const core = getCore();
    const active = Math.floor(time / 1100) % nodes.length;

    const gradient = ctx.createRadialGradient(core.x, core.y, 0, core.x, core.y, core.r * 3.6);
    gradient.addColorStop(0, 'rgba(16,185,129,0.28)');
    gradient.addColorStop(0.38, 'rgba(59,130,246,0.11)');
    gradient.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(core.x, core.y, core.r * 3.6, 0, Math.PI * 2);
    ctx.fill();

    particles.forEach((particle) => {
      if (!reduceMotion.matches) particle.angle += particle.speed;
      const x = core.x + Math.cos(particle.angle) * particle.radius;
      const y = core.y + Math.sin(particle.angle * 0.86) * particle.radius * 0.55;
      ctx.fillStyle = `rgba(237,237,237,${particle.alpha})`;
      ctx.beginPath();
      ctx.arc(x, y, particle.size, 0, Math.PI * 2);
      ctx.fill();
    });

    for (let ring = 0; ring < 3; ring++) {
      ctx.strokeStyle = ring === 1 ? 'rgba(59,130,246,0.28)' : 'rgba(16,185,129,0.24)';
      ctx.lineWidth = 1.2;
      ctx.beginPath();
      ctx.ellipse(core.x, core.y, core.r * (1.25 + ring * 0.62), core.r * (0.74 + ring * 0.34), time * 0.00025 + ring, 0, Math.PI * 2);
      ctx.stroke();
    }

    ctx.fillStyle = 'rgba(9,9,11,0.72)';
    ctx.strokeStyle = 'rgba(16,185,129,0.62)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(core.x, core.y, core.r, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = '#ededed';
    ctx.font = '700 13px Space Grotesk, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('AI CORE', core.x, core.y + 4);

    nodes.forEach((label, index) => {
      const pos = nodePosition(index, time);
      const isActive = index === active;
      ctx.strokeStyle = isActive ? 'rgba(16,185,129,0.82)' : 'rgba(255,255,255,0.12)';
      ctx.lineWidth = isActive ? 2 : 1;
      ctx.beginPath();
      ctx.moveTo(core.x, core.y);
      ctx.lineTo(pos.x, pos.y);
      ctx.stroke();

      const pulse = isActive && !reduceMotion.matches ? Math.sin(time * 0.008) * 4 : 0;
      ctx.fillStyle = isActive ? 'rgba(16,185,129,0.22)' : 'rgba(18,18,21,0.78)';
      ctx.strokeStyle = isActive ? 'rgba(16,185,129,0.86)' : 'rgba(255,255,255,0.15)';
      roundRect(ctx, pos.x - 52 - pulse / 2, pos.y - 18 - pulse / 2, 104 + pulse, 36 + pulse, 18);
      ctx.fill();
      ctx.stroke();
      ctx.fillStyle = isActive ? '#ededed' : 'rgba(237,237,237,0.72)';
      ctx.font = '700 11px Space Grotesk, sans-serif';
      ctx.fillText(label, pos.x, pos.y + 4);
    });

    if (!reduceMotion.matches && running) frameId = requestAnimationFrame(draw);
  }

  function roundRect(context, x, y, w, h, r) {
    context.beginPath();
    context.moveTo(x + r, y);
    context.arcTo(x + w, y, x + w, y + h, r);
    context.arcTo(x + w, y + h, x, y + h, r);
    context.arcTo(x, y + h, x, y, r);
    context.arcTo(x, y, x + w, y, r);
    context.closePath();
  }

  function shouldRun() {
    return !reduceMotion.matches && document.visibilityState === 'visible' && document.getElementById('overview-section')?.classList.contains('active');
  }

  function start() {
    running = shouldRun();
    if (frameId) cancelAnimationFrame(frameId);
    if (running) frameId = requestAnimationFrame(draw);
    else draw(0);
  }

  resize();
  start();
  window.addEventListener('resize', () => {
    resize();
    start();
  });
  document.addEventListener('visibilitychange', start);
  reduceMotion.addEventListener('change', start);
  window.addEventListener('hashchange', start);
  window.addEventListener('portfolio-tab-change', start);
}

function setupAboutNetwork() {
  const canvas = document.getElementById('about-network-canvas');
  const section = document.querySelector('.about-intelligence-section');
  if (!canvas || !section) return;
  const ctx = canvas.getContext('2d');
  if (!ctx) {
    canvas.hidden = true;
    return;
  }

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const labels = ['AI', 'Ops', 'Market', 'Users', 'Systems', 'Ship'];
  let width = 0;
  let height = 0;
  let ratio = 1;
  let frameId = null;
  let running = false;
  let points = [];

  function resize() {
    const rect = section.getBoundingClientRect();
    width = Math.max(1, rect.width);
    height = Math.max(260, rect.height);
    ratio = Math.min(2, Math.max(1, window.devicePixelRatio || 1));
    canvas.width = Math.round(width * ratio);
    canvas.height = Math.round(height * ratio);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    const count = width < 720 ? 18 : 30;
    points = Array.from({ length: count }, (_, index) => ({
      x: width * (0.1 + Math.random() * 0.8),
      y: height * (0.12 + Math.random() * 0.76),
      vx: (Math.random() - 0.5) * 0.22,
      vy: (Math.random() - 0.5) * 0.18,
      r: 1.2 + Math.random() * 2.4,
      label: index < labels.length ? labels[index] : ''
    }));
  }

  function draw(time = 0) {
    ctx.clearRect(0, 0, width, height);
    const pulse = reduceMotion.matches ? 0 : Math.sin(time * 0.0014) * 0.5 + 0.5;
    ctx.lineWidth = 1;

    points.forEach((point) => {
      if (!reduceMotion.matches) {
        point.x += point.vx;
        point.y += point.vy;
        if (point.x < 20 || point.x > width - 20) point.vx *= -1;
        if (point.y < 20 || point.y > height - 20) point.vy *= -1;
      }
    });

    for (let i = 0; i < points.length; i += 1) {
      for (let j = i + 1; j < points.length; j += 1) {
        const a = points[i];
        const b = points[j];
        const distance = Math.hypot(a.x - b.x, a.y - b.y);
        if (distance > 165) continue;
        const alpha = Math.max(0, 1 - distance / 165) * 0.18;
        ctx.strokeStyle = `rgba(16,185,129,${alpha})`;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();
      }
    }

    points.forEach((point, index) => {
      const isKey = Boolean(point.label);
      const radius = point.r + (isKey ? pulse * 1.8 : 0);
      ctx.fillStyle = isKey ? 'rgba(16,185,129,0.28)' : 'rgba(237,237,237,0.26)';
      ctx.strokeStyle = isKey ? 'rgba(16,185,129,0.72)' : 'rgba(255,255,255,0.18)';
      ctx.beginPath();
      ctx.arc(point.x, point.y, radius + (isKey ? 5 : 0), 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
      ctx.fillStyle = index % 3 === 0 ? 'rgba(59,130,246,0.7)' : 'rgba(237,237,237,0.82)';
      ctx.beginPath();
      ctx.arc(point.x, point.y, radius, 0, Math.PI * 2);
      ctx.fill();
      if (point.label) {
        ctx.fillStyle = 'rgba(237,237,237,0.72)';
        ctx.font = '700 10px IBM Plex Sans, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(point.label, point.x, point.y - 12);
      }
    });

    if (!reduceMotion.matches && running) frameId = requestAnimationFrame(draw);
  }

  function shouldRun() {
    return !reduceMotion.matches && document.visibilityState === 'visible' && document.getElementById('overview-section')?.classList.contains('active');
  }

  function start() {
    running = shouldRun();
    if (frameId) cancelAnimationFrame(frameId);
    if (running) frameId = requestAnimationFrame(draw);
    else draw(0);
  }

  resize();
  start();
  window.addEventListener('resize', () => {
    resize();
    start();
  });
  document.addEventListener('visibilitychange', start);
  reduceMotion.addEventListener('change', start);
  window.addEventListener('hashchange', start);
  window.addEventListener('portfolio-tab-change', start);
}

document.addEventListener('DOMContentLoaded', () => {
  setupPreferenceControls();
  setupProjectCarousel();
  setupHeroOperations();
  setupAiOpsHero();
  setupAboutNetwork();
  // Navigation tabs
  const navTabs = document.querySelectorAll('.nav-tab');
  const viewSections = document.querySelectorAll('.view-section');

  function switchTab(tabId) {
    // Update tabs active state
    navTabs.forEach(tab => {
      const isActive = tab.getAttribute('data-tab') === tabId;
      tab.classList.toggle('active', isActive);
      if (isActive) tab.setAttribute('aria-current', 'page');
      else tab.removeAttribute('aria-current');
    });

    // Update section active state
    viewSections.forEach(section => {
      section.classList.toggle('active', section.id === `${tabId}-section`);
    });

    // Initialize ecosystem canvas when switching to agents tab
    if (tabId === 'agents') {
      setTimeout(initEcosystem, 100);
    } else {
      stopEcosystemLoop();
    }
    window.dispatchEvent(new CustomEvent('portfolio-tab-change', { detail: { tabId } }));
  }

  navTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const tabId = tab.getAttribute('data-tab');
      window.location.hash = tabId === 'overview' ? '' : `#/${tabId}`;
      switchTab(tabId);
    });
  });

  // Handle URL Hash Router
  function handleRouting() {
    const hash = window.location.hash;
    if (hash.startsWith('#/')) {
      const tabId = hash.replace('#/', '');
      const validTabs = ['overview', 'projects', 'agents'];
      if (validTabs.includes(tabId)) {
        switchTab(tabId);
        return;
      }
    }
    // Default fallback
    switchTab('overview');
  }

  window.addEventListener('hashchange', handleRouting);
  handleRouting(); // Initial call
});


// ═══════════════════ AGENT ECOSYSTEM CODE (V7) ═══════════════════

let ecoInitialized = false;
let canvasUnder, canvasOver, ctxUnder, ctxOver;
let ecoVp, ecoGraphWrapper, ecoSubUniverse;
let hudElement, hudDot, hudName, hudRole, hudBody, hudMeta;
let wfpPanel, wfList, stagePanel, stageBadge, stageText, stageStep;
let backBtn, ecoHint, statsBadge;
let ecoGraphicsReady = false;

let nodesData = [];
let linksData = [];
let workflowsData = [];
let ambientParticles = [];
let activeWfParticles = [];

let width = 0, height = 0;
let selectedNodeId = null;
let hoveredNodeId = null;
let activeWorkflow = null;
let workflowTimeout = null;
let animationFrameId = null;
const ecoReduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
let ecoReduceMotionListenerAttached = false;

// Colors
const ACCENT_COLORS = {
  principal:  { c: '#3b82f6', s: 'rgba(59, 130, 246, 0.15)' }, // Blue
  architect:  { c: '#f97316', s: 'rgba(249, 115, 22, 0.15)' },  // Orange
  design:     { c: '#a855f7', s: 'rgba(168, 85, 247, 0.15)' }, // Purple
  growth:     { c: '#10b981', s: 'rgba(16, 185, 129, 0.15)' }, // Green
  seo:        { c: '#38bdf8', s: 'rgba(56, 189, 248, 0.15)' },  // Light Blue
  security:   { c: '#ef4444', s: 'rgba(239, 68, 68, 0.15)' },   // Red
  tests:      { c: '#22c55e', s: 'rgba(34, 197, 94, 0.15)' },   // Emerald
  docs:       { c: '#facc15', s: 'rgba(250, 204, 21, 0.15)' },   // Yellow
  product:    { c: '#f472b6', s: 'rgba(244, 114, 182, 0.15)' }, // Pink
  mcp:        { c: '#06b6d4', s: 'rgba(6, 182, 212, 0.15)' },   // Cyan
  researcher: { c: '#8b5cf6', s: 'rgba(139, 92, 246, 0.15)' },  // Violet
  reviewer:   { c: '#60a5fa', s: 'rgba(96, 165, 250, 0.15)' },  // Sky
  obsidian:   { c: '#c084fc', s: 'rgba(192, 132, 252, 0.15)' }, // Purple
  release:    { c: '#fbbf24', s: 'rgba(251, 191, 36, 0.15)' },  // Gold
  content:    { c: '#fb7185', s: 'rgba(251, 113, 133, 0.15)' }, // Rose
  academic:   { c: '#818cf8', s: 'rgba(129, 140, 248, 0.15)' }, // Indigo
  marketing:  { c: '#fb923c', s: 'rgba(251, 146, 60, 0.15)' },  // Orange
  kickoff:    { c: '#34d399', s: 'rgba(52, 211, 153, 0.15)' },  // Mint
  pruner:     { c: '#eab308', s: 'rgba(234, 179, 8, 0.15)' },   // Yellow
  system:     { c: '#71717a', s: 'rgba(113, 113, 122, 0.15)' }, // Gray
  gate:       { c: '#f59e0b', s: 'rgba(245, 158, 11, 0.15)' },   // Amber
  harness:    { c: '#a855f7', s: 'rgba(168, 85, 247, 0.15)' }  // Purple
};

function getAccent(colKey) {
  return ACCENT_COLORS[colKey] || ACCENT_COLORS.system;
}

const SYSTEM_ICONS = {
  user: `<svg viewBox="0 0 24 24" stroke="currentColor" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,
  rules: `<svg viewBox="0 0 24 24" stroke="currentColor" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>`,
  memory: `<svg viewBox="0 0 24 24" stroke="currentColor" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>`,
  gate: `<svg viewBox="0 0 24 24" stroke="currentColor" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
  harness: `<svg viewBox="0 0 24 24" stroke="currentColor" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>`,
  check: `<svg viewBox="0 0 24 24" stroke="currentColor" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/><path d="M19 13v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h8"/></svg>`,
  layout: `<svg viewBox="0 0 24 24" stroke="currentColor" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>`
};

function initEcosystem() {
  if (ecoInitialized) {
    resizeCanvas();
    startEcosystemLoop();
    return;
  }

  // Get DOM Elements
  canvasUnder = document.getElementById('eco-canvas-under');
  canvasOver = document.getElementById('eco-canvas-over');
  ecoVp = document.getElementById('eco-viewport');
  ecoGraphWrapper = document.getElementById('eco-graph-wrapper');
  ecoSubUniverse = document.getElementById('eco-sub-universe');
  
  hudElement = document.getElementById('eco-hud');
  hudDot = document.getElementById('eco-hud-dot');
  hudName = document.getElementById('eco-hud-name');
  hudRole = document.getElementById('eco-hud-role');
  hudBody = document.getElementById('eco-hud-body');
  hudMeta = document.getElementById('eco-hud-meta');
  
  wfpPanel = document.getElementById('eco-wfp');
  wfList = document.getElementById('eco-wf-list');
  
  stagePanel = document.getElementById('eco-stage');
  stageBadge = document.getElementById('eco-stage-badge');
  stageText = document.getElementById('eco-stage-text');
  stageStep = document.getElementById('eco-stage-step');
  
  backBtn = document.getElementById('eco-back-btn');
  ecoHint = document.getElementById('eco-hint');
  statsBadge = document.getElementById('eco-stats-badge');

  ecoGraphicsReady = Boolean(canvasUnder && canvasOver);
  ctxUnder = ecoGraphicsReady ? canvasUnder.getContext('2d') : null;
  ctxOver = ecoGraphicsReady ? canvasOver.getContext('2d') : null;
  ecoGraphicsReady = Boolean(ecoGraphicsReady && ctxUnder && ctxOver);
  if (!ecoGraphicsReady && ecoVp) {
    ecoVp.classList.add('no-canvas');
  }

  // Load Data
  setupCurrentAgentPortfolioData();
  
  // Render HTML Nodes
  buildNodes();
  
  // Event listeners
  resizeCanvas();
  if (ecoGraphicsReady) {
    // Re-measure after the browser paints the now-visible section
    requestAnimationFrame(() => {
      resizeCanvas();
      requestAnimationFrame(resizeCanvas);
    });
    window.addEventListener('resize', resizeCanvas);
  }
  
  backBtn && backBtn.addEventListener('click', collapseGraph);
  if (!ecoReduceMotionListenerAttached) {
    ecoReduceMotion.addEventListener('change', () => {
      if (ecoReduceMotion.matches) stopEcosystemLoop();
      else if (document.getElementById('agents-section')?.classList.contains('active')) startEcosystemLoop();
    });
    ecoReduceMotionListenerAttached = true;
  }
  ecoVp.addEventListener('click', (e) => {
    if (selectedNodeId && !e.target.closest('.eco-node') && !e.target.closest('.sub-node') && !e.target.closest('#eco-hud')) {
      collapseGraph();
    }
  });

  ecoInitialized = true;
  if (ecoGraphicsReady) startEcosystemLoop();
}

function setupCurrentAgentPortfolioData() {
  const es = currentLang === 'es';
  const g = {
    director: es ? 'Ordena prioridades, define el siguiente paso y mantiene evidencia visible.' : 'Orders priorities, defines the next step and keeps evidence visible.',
    architect: es ? 'Baja una idea a arquitectura simple: datos, API, UI, riesgos y despliegue.' : 'Turns an idea into simple architecture: data, API, UI, risks and deployment.',
    mcp: es ? 'Evalúa herramientas, permisos e integraciones antes de sumarlas al flujo.' : 'Reviews tools, permissions and integrations before adding them to the workflow.',
    researcher: es ? 'Investiga documentación y alternativas antes de proponer una implementación.' : 'Researches documentation and alternatives before proposing an implementation.',
    design: es ? 'Cuida responsive, accesibilidad visual, motion y claridad de interfaz.' : 'Cares about responsive behavior, visual accessibility, motion and interface clarity.',
    tests: es ? 'Cobertura, Playwright, regresión y evidencia verificable.' : 'Coverage, Playwright, regression and verifiable evidence.',
    security: es ? 'Secretos, dependencias, permisos y publicación segura.' : 'Secrets, dependencies, permissions and safe publishing.',
    docs: es ? 'Documentación técnica clara: README, guías, API docs y handoff.' : 'Clear technical documentation: README, guides, API docs and handoff.',
    obsidian: es ? 'Memoria local, MOCs, notas y captura durable de conocimiento.' : 'Local memory, MOCs, notes and durable knowledge capture.',
    product: es ? 'Define alcance, usuario, prueba mínima y próximos pasos concretos.' : 'Defines scope, user, minimum proof and concrete next steps.',
    growth: es ? 'Ajusta posicionamiento, claridad de oferta y canales de búsqueda.' : 'Improves positioning, offer clarity and search channels.',
    seo: es ? 'Revisa estructura, metadata, Open Graph y accesibilidad básica.' : 'Reviews structure, metadata, Open Graph and basic accessibility.',
    marketing: es ? 'Posicionamiento, GTM y research de audiencia.' : 'Positioning, GTM and audience research.',
    content: es ? 'Contenido multiplataforma con voz propia y consistencia.' : 'Multi-platform content with a consistent voice.',
    academic: es ? 'Apoyo de estudio, conceptos y material para repasar.' : 'Study support, concepts and review material.',
    reviewer: es ? 'Revisión de código, riesgos y calidad antes de integrar cambios.' : 'Code review, risks and quality before merging changes.',
    release: es ? 'Changelog, validación de instalación y publicación reproducible.' : 'Changelog, install validation and reproducible publishing.',
    kickoff: es ? 'Arranque liviano de proyectos con primer hito claro.' : 'Lightweight project kickoff with a clear first milestone.',
    pruner: es ? 'Reduce complejidad y costo de contexto sin perder calidad.' : 'Reduces complexity and context cost without losing quality.',
    user: es ? 'Entrada externa y pedidos en lenguaje natural.' : 'External input and requests in natural language.',
    rules: es ? 'Reglas globales, permisos y estilo del sistema.' : 'Global rules, permissions and system style.',
    memory: es ? 'Notas locales para no perder decisiones, lecciones y patrones útiles.' : 'Local notes for preserving decisions, lessons and useful patterns.',
    gate: es ? 'Criterios de validación y evidencia antes de cerrar una tarea.' : 'Validation criteria and evidence before closing a task.',
    harness: es ? 'Captura correcciones y mejora el sistema con feedback.' : 'Captures corrections and improves the system with feedback.',
    techradar: es ? 'Radar ADOPT/TRIAL/ASSESS/HOLD para decisiones de stack.' : 'ADOPT/TRIAL/ASSESS/HOLD radar for stack decisions.'
  };

  nodesData = [
    agentNode('principal', es ? 'Plan' : 'Plan', 'workflow-planning', g.director, 'agent-assets/director.jpg', 50, 48, 'principal', [
      sub('workflows/index.md', 'workflow'), sub('Agent Routing', 'workflow'), sub('validation.md', 'rules'), sub('session_checkpoint.md', 'memory'), sub('Release Manager', 'workflow')
    ]),
    agentNode('mcp', es ? 'Tools' : 'Tools', 'tooling-check', g.mcp, 'agent-assets/mcp.jpg', 50, 15, 'mcp', [
      sub('mcp_catalog.md', 'workflow'), sub('mcp_adoption.md', 'workflow'), sub('mcp_security.md', 'rules'), sub('Tool Schemas', 'tool')
    ]),
    agentNode('architect', es ? 'Architecture' : 'Architecture', 'simple-architecture', g.architect, 'agent-assets/architect.jpg', 67, 21, 'architect', [
      sub('ai_production.md', 'workflow'), sub('Prompt Registry', 'memory'), sub('Evaluations', 'rules'), sub('Cost Control', 'rules')
    ]),
    agentNode('researcher', 'Researcher', 'agente-researcher.md', g.researcher, 'agent-assets/researcher.jpg', 81, 33, 'researcher', [
      sub('Current Docs', 'tool'), sub('Library Research', 'workflow'), sub('Repo Grep', 'tool'), sub('Options Brief', 'memory')
    ]),
    agentNode('design', 'Designer', 'agente-design.md', g.design, 'agent-assets/designer.jpg', 32, 24, 'design', [
      sub('Responsive Gate', 'rules'), sub('AI Slop Test', 'rules'), sub('world-class-web.md', 'workflow'), sub('Accessibility Gate', 'rules')
    ]),
    agentNode('product', 'Product', 'product-scope', g.product, 'agent-assets/product.jpg', 18, 42, 'product', [
      sub('venture_loop.md', 'workflow'), sub('MVP Scope', 'rules'), sub('Kill / Keep / Scale', 'rules'), sub('Product Evidence', 'memory')
    ]),
    agentNode('docs', 'Docs', 'agente-docs.md', g.docs, 'agent-assets/docs.jpg', 22, 64, 'docs', [
      sub('README', 'tool'), sub('API Docs', 'workflow'), sub('Changelog', 'memory'), sub('Handoff', 'workflow')
    ]),
    agentNode('obsidian', 'Notes', 'local-notes', g.obsidian, 'agent-assets/content.jpg', 18, 63, 'obsidian', [
      sub('obsidian_sync.md', 'workflow'), sub('vault_review.md', 'workflow'), sub('MOCs', 'memory'), sub('Lessons', 'memory')
    ]),
    agentNode('tests', 'QA', 'agente-tests.md', g.tests, 'agent-assets/qa.jpg', 40, 83, 'tests', [
      sub('Playwright E2E', 'tool'), sub('Unit Tests', 'tool'), sub('Coverage', 'rules'), sub('Regression Evidence', 'memory')
    ]),
    agentNode('security', 'Security', 'agente-security-auditor.md', g.security, 'agent-assets/security.jpg', 63, 74, 'security', [
      sub('Secret Scan', 'tool'), sub('mcp_security.md', 'workflow'), sub('Permission Boundaries', 'rules'), sub('Repo Safety', 'workflow')
    ]),
    agentNode('growth', 'Positioning', 'positioning', g.growth, 'agent-assets/growth.jpg', 82, 60, 'growth', [
      sub('seo_geo_growth.md', 'workflow'), sub('AEO / GEO', 'rules'), sub('Opportunity Map', 'memory'), sub('Programmatic SEO', 'workflow')
    ]),
    agentNode('seo', 'SEO', 'seo-check', g.seo, 'agent-assets/seo.jpg', 90, 48, 'seo', [
      sub('Meta Tags', 'tool'), sub('Open Graph', 'tool'), sub('Schema Markup', 'tool'), sub('Canonical URLs', 'rules')
    ]),
    agentNode('marketing', 'Marketing', 'agente-marketing-strategist.md', g.marketing, 'agent-assets/marketing.jpg', 88, 70, 'marketing', [
      sub('marketing.md', 'workflow'), sub('GTM', 'workflow'), sub('GO / NO-GO / PIVOT', 'rules'), sub('Audience Research', 'memory')
    ]),
    agentNode('content', 'X Content', 'agente-x-content-strategist.md', g.content, 'agent-assets/x-content.jpg', 75, 85, 'content', [
      sub('x_content_system.md', 'workflow'), sub('LinkedIn', 'tool'), sub('Substack', 'tool'), sub('Authentic Voice', 'rules')
    ]),
    agentNode('academic', 'Academic Tutor', 'agente-academic-tutor.md', g.academic, 'agent-assets/academic-tutor.jpg', 11, 73, 'academic', [
      sub('academic_tutor.md', 'workflow'), sub('Exam Prep', 'workflow'), sub('Flashcards', 'memory'), sub('Obsidian Sync', 'workflow')
    ]),
    agentNode('reviewer', 'Review', 'code-review', g.reviewer, 'agent-assets/code-reviewer.jpg', 46, 89, 'reviewer', [
      sub('pr_code_review.md', 'workflow'), sub('Residual Risks', 'rules'), sub('Scope Check', 'rules'), sub('Review Verdict', 'memory')
    ]),
    agentNode('release', 'Ship', 'release-check', g.release, 'agent-assets/release-manager.jpg', 28, 90, 'release', [
      sub('pr_policy.md', 'workflow'), sub('Changelog', 'memory'), sub('Install Checks', 'tool'), sub('Release Checklist', 'rules')
    ]),
    agentNode('kickoff', 'Kickoff', 'project-kickoff', g.kickoff, 'agent-assets/kickoff-architect.jpg', 15, 15, 'kickoff', [
      sub('project_kickoff_lean.md', 'workflow'), sub('First Milestone', 'rules'), sub('Intensity Level', 'rules')
    ]),
    agentNode('pruner', 'Simplify', 'workflow-pruning', g.pruner, 'agent-assets/workflow-pruner.jpg', 63, 87, 'pruner', [
      sub('Simplify System', 'workflow'), sub('Token Cost', 'memory'), sub('Delete / Keep', 'rules')
    ]),
    systemNode('user', 'User', es ? 'Entrada externa' : 'External input', g.user, 'user', 92, 22, 'system', []),
    systemNode('rules', 'AGENTS.md', es ? 'Reglas globales' : 'Global rules', g.rules, 'rules', 41, 38, 'system', [
      sub('rules/*.md', 'rules'), sub('workflows/index.md', 'workflow'), sub('Permissions', 'rules'), sub('Chat-first', 'rules')
    ]),
    systemNode('memory', 'Memory', es ? 'Lessons / Tech Radar' : 'Lessons / Tech Radar', g.memory, 'memory', 42, 60, 'obsidian', [
      sub('Local Lessons', 'memory'), sub('Global Lessons', 'memory'), sub('promote_lesson.md', 'workflow'), sub('developer_growth.md', 'memory')
    ]),
    systemNode('gate', 'Validation', 'validation.md', g.gate, 'gate', 58, 58, 'gate', [
      sub('Evidence Levels', 'rules'), sub('Scope Check', 'workflow'), sub('Residual Risks', 'rules'), sub('Human Verdict', 'rules')
    ]),
    systemNode('harness', 'Harness', es ? 'Feedback loop' : 'Feedback loop', g.harness, 'harness', 50, 68, 'harness', [
      sub('feedback_loop.md', 'workflow'), sub('Capture', 'workflow'), sub('Analyze', 'workflow'), sub('Promote Proposal', 'workflow')
    ]),
    systemNode('techradar', 'Tech Radar', 'memory/tech_radar.md', g.techradar, 'rules', 62, 38, 'system', [
      sub('ADOPT', 'rules'), sub('TRIAL', 'rules'), sub('ASSESS', 'rules'), sub('HOLD', 'rules')
    ])
  ];

  linksData = [
    link('user', 'principal', 'core'), link('rules', 'principal', 'core'), link('memory', 'principal', 'core'),
    link('principal', 'architect', 'primary'), link('principal', 'design', 'primary'), link('principal', 'tests', 'primary'), link('principal', 'security', 'primary'),
    link('principal', 'docs', 'primary'), link('principal', 'obsidian', 'secondary'), link('principal', 'growth', 'secondary'), link('principal', 'mcp', 'secondary'),
    link('principal', 'researcher', 'secondary'), link('principal', 'product', 'primary'), link('principal', 'reviewer', 'secondary'), link('principal', 'release', 'secondary'),
    link('principal', 'kickoff', 'secondary'), link('principal', 'pruner', 'secondary'), link('growth', 'seo', 'primary'), link('growth', 'marketing', 'primary'),
    link('marketing', 'content', 'primary'), link('product', 'marketing', 'secondary'), link('product', 'design', 'primary'), link('docs', 'obsidian', 'secondary'),
    link('academic', 'obsidian', 'secondary'), link('architect', 'researcher', 'primary'), link('architect', 'techradar', 'secondary'), link('mcp', 'security', 'primary'),
    link('tests', 'gate', 'core'), link('security', 'gate', 'core'), link('reviewer', 'gate', 'secondary'), link('release', 'gate', 'secondary'),
    link('gate', 'harness', 'core'), link('harness', 'memory', 'core'), link('memory', 'obsidian', 'secondary')
  ];

  workflowsData = [
    workflow('feature', es ? 'Implementacion de feature' : 'Feature Implementation', false, es ? 'User -> Director -> Architect -> Design -> QA -> Security -> Validation' : 'User -> Director -> Architect -> Design -> QA -> Security -> Validation', [
      step('user', 'principal', '[Intent]', es ? 'Leyendo pedido y seleccionando el workflow minimo util' : 'Parsing request and selecting the smallest useful workflow'),
      step('principal', 'architect', '[Architecture]', es ? 'Definiendo profundidad tecnica para la tarea' : 'Choosing technical depth for the task'),
      step('architect', 'researcher', '[Docs]', es ? 'Verificando docs actuales y alternativas' : 'Checking current docs and alternatives'),
      step('principal', 'design', '[UI]', es ? 'Refinando interaccion responsive y estados visuales' : 'Refining responsive interaction and visual states'),
      step('design', 'tests', '[QA path]', es ? 'Preparando superficie de validación visible' : 'Preparing user-facing validation surface'),
      step('tests', 'security', '[Risk]', es ? 'Chequeando regresion, secretos y comportamiento riesgoso' : 'Checking regression, secrets and risky behavior'),
      step('security', 'gate', '[Evidence]', es ? 'Enviando evidencia a validation.md' : 'Sending evidence to validation.md'),
      step('gate', 'principal', '[Report]', es ? 'Reportando resultado verificado y riesgos residuales' : 'Reporting verified outcome and residual risks', '#10b981')
    ]),
    workflow('validation', es ? 'Validation Gate' : 'Validation Gate', false, es ? 'Diff / tests / build / logs / screenshot -> reporte honesto' : 'Diff / tests / build / logs / screenshot -> honest report', [
      step('principal', 'tests', '[Checks]', es ? 'Ejecutando verificacion relevante para el cambio' : 'Running relevant verification for the change'),
      step('tests', 'security', '[Risk]', es ? 'Revisando regresion y riesgos del cambio' : 'Reviewing regression and change risk'),
      step('security', 'gate', '[Evidence]', es ? 'Consolidando evidencia en validation.md' : 'Consolidating evidence in validation.md'),
      step('gate', 'principal', '[Report]', es ? 'Reportando resultado y limitaciones explicitas' : 'Reporting result and explicit limitations', '#10b981')
    ]),
    workflow('learning-loop', es ? 'Harness Learning Loop' : 'Harness Learning Loop', true, es ? 'Correccion -> Harness -> Lessons -> Patron -> promocion humana' : 'Correction -> Harness -> Lessons -> Pattern -> human promotion', [
      step('user', 'principal', '[Correction]', es ? 'La correccion del usuario se convierte en senal de aprendizaje' : 'User correction becomes a learning signal'),
      step('principal', 'harness', '[Watch]', es ? 'Harness detecta senal de routing, output, scope o calidad' : 'Harness detects routing, output, scope or quality signals'),
      step('harness', 'memory', '[Capture]', es ? 'Guardando lesson local en markdown' : 'Writing local lesson to markdown', '#a855f7'),
      step('memory', 'harness', '[Analyze]', es ? 'Buscando patrones repetidos y estado candidato' : 'Checking repeated patterns and candidate status', '#a855f7'),
      step('harness', 'principal', '[Proposal]', es ? 'Preparando propuesta promote_lesson.md si hay evidencia' : 'Preparing promote_lesson.md proposal when evidence exists'),
      step('principal', 'user', '[Human OK]', es ? 'La promocion global espera confirmacion humana explicita' : 'Global promotion waits for explicit human confirmation', '#10b981')
    ]),
    workflow('review-loop', es ? 'Review Loop multiagente' : 'Multiagent Review Loop', true, es ? 'Crear -> Criticar -> Red Team -> Roadmap -> Re-evaluar' : 'Create -> Critique -> Red Team -> Roadmap -> Re-evaluate', [
      step('principal', 'architect', '[Create]', es ? 'Borrador inicial con contexto real' : 'Drafting initial solution with real context'),
      step('architect', 'reviewer', '[Critique]', es ? 'Buscando contradicciones, riesgos y falta de tests' : 'Finding contradictions, risks and missing tests'),
      step('reviewer', 'security', '[Red Team]', es ? 'Atacando modos de falla y automatización insegura' : 'Attacking failure modes and unsafe automation', '#ef4444'),
      step('security', 'pruner', '[Simplify]', es ? 'Quitando proceso que no cambia el resultado' : 'Removing process that does not change the outcome'),
      step('pruner', 'principal', '[Roadmap]', es ? 'Devolviendo fases ejecutables y criterios de exito' : 'Returning executable phases and success criteria'),
      step('principal', 'gate', '[Re-evaluate]', es ? 'Verificando si las criticas originales quedaron resueltas' : 'Checking whether original critiques are resolved')
    ]),
    workflow('obsidian-flow', es ? 'Obsidian Knowledge Sync' : 'Obsidian Knowledge Sync', false, es ? 'Decision -> Docs -> Obsidian Brain -> MOC / Retro / Lesson' : 'Decision -> Docs -> Obsidian Brain -> MOC / Retro / Lesson', [
      step('principal', 'docs', '[Decision]', es ? 'Capturando decisión, retro o aprendizaje técnico' : 'Capturing decision, retro or technical learning'),
      step('docs', 'obsidian', '[Vault]', es ? 'Eligiendo tipo de nota y ruta en Obsidian' : 'Choosing Obsidian note type and path'),
      step('obsidian', 'memory', '[Learning]', es ? 'Conectando lesson local con conocimiento durable' : 'Connecting local lesson with durable knowledge'),
      step('academic', 'obsidian', '[Study]', es ? 'Guardando material academico cuando aplica' : 'Saving academic material when it applies'),
      step('obsidian', 'principal', '[Handoff]', es ? 'Devolviendo ruta de nota y proxima accion' : 'Returning note path and next action', '#10b981')
    ]),
    workflow('parallel-agents', es ? 'Parallel Agents' : 'Parallel Agents', true, es ? 'Director -> tareas independientes -> revisión -> integración' : 'Director -> independent tasks -> review -> integration', [
      step('principal', 'researcher', '[Research]', es ? 'Investigacion independiente de opciones' : 'Independent options research'),
      step('principal', 'design', '[Design]', es ? 'Exploracion visual independiente' : 'Independent visual exploration'),
      step('principal', 'security', '[Risk]', es ? 'Revisión de riesgos en paralelo' : 'Parallel risk review'),
      step('reviewer', 'principal', '[Integrate]', es ? 'Integrando conclusiones con criterio humano' : 'Integrating conclusions with human judgment', '#10b981')
    ]),
    
  ];
}

function sub(l, t) {
  return { l, t };
}

function step(f, t, lbl, act, col) {
  return { f, t, lbl, act, col };
}

function workflow(id, name, isLoop, desc, seq) {
  return { id, name, isLoop, desc, seq };
}

function link(from, to, tier = 'secondary') {
  return { from, to, tier };
}

function getNodeLayer(id) {
  const core = new Set(['principal', 'rules', 'memory', 'gate', 'harness']);
  const execution = new Set(['architect', 'design', 'product', 'docs', 'security', 'tests', 'growth']);
  if (core.has(id)) return 'core';
  if (execution.has(id)) return 'execution';
  return 'specialist';
}

function agentNode(id, name, role, desc, img, x, y, col, subs, badgeIcon = null) {
  const roleLabels = currentLang === 'es'
    ? {
      principal: 'PLAN / EVIDENCIA',
      mcp: 'TOOLS / PERMISOS',
      architect: 'API / DATOS / RIESGO',
      researcher: 'RESEARCH / DOCS',
      growth: 'POSICIONAMIENTO',
      seo: 'SEO / METADATA',
      security: 'SEGURIDAD / AUDIT',
      tests: 'TESTING / E2E / COVERAGE',
      reviewer: 'REVISIÓN / CALIDAD',
      obsidian: 'NOTAS / MEMORIA',
      docs: 'DOCUMENTACIÓN TÉCNICA',
      product: 'PRODUCTO / MVP',
      design: 'UI / VISUAL / CSS',
      marketing: 'MARKETING / GTM',
      content: 'CONTENIDO / PERSONAL BRAND',
      academic: 'TUTOR ACADEMICO',
      release: 'PUBLICACIÓN',
      kickoff: 'KICKOFF / MILESTONE',
      pruner: 'SIMPLIFICACION / TOKENS'
    }
    : {
      principal: 'PLANNING / EVIDENCE',
      mcp: 'TOOLS / PERMISSIONS',
      architect: 'API / DATA / RISK',
      researcher: 'RESEARCH / DOCS',
      growth: 'POSITIONING',
      seo: 'SEO / METADATA',
      security: 'GUARDIAN / AUDIT',
      tests: 'TESTING / E2E / COVERAGE',
      reviewer: 'PR REVIEW / QUALITY',
      obsidian: 'NOTES / MEMORY',
      docs: 'TECHNICAL DOCUMENTATION',
      product: 'FOUNDER / MVP BUILDER',
      design: 'UI / VISUAL / CSS',
      marketing: 'MARKETING / GTM',
      content: 'CONTENT / PERSONAL BRAND',
      academic: 'ACADEMIC TUTOR',
      release: 'PUBLISHING',
      kickoff: 'KICKOFF / MILESTONE',
      pruner: 'SIMPLIFICATION / TOKENS'
    };
  return { id, type: 'agent', layer: getNodeLayer(id), name, role: roleLabels[id] || role, source: role, desc, img, x, y, col, subs, badgeIcon };
}

function systemNode(id, name, role, desc, icon, x, y, col, subs) {
  return { id, type: 'system', layer: getNodeLayer(id), name, role, desc, icon, x, y, col, subs };
}

function getNodeInitials(name) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map(part => part[0])
    .join('')
    .toUpperCase();
}

function buildNodes() {
  ecoGraphWrapper.innerHTML = '';
  
  nodesData.forEach(node => {
    const col = getAccent(node.col);
    const nodeEl = document.createElement('div');
    nodeEl.className = `eco-node ${node.type === 'system' ? 'system-node' : ''} ${node.layer || ''}`.trim();
    nodeEl.style.left = `${node.x}%`;
    nodeEl.style.top = `${node.y}%`;
    nodeEl.setAttribute('data-id', node.id);
    nodeEl.setAttribute('data-layer', node.layer || 'specialist');
    nodeEl.setAttribute('role', 'button');
    nodeEl.setAttribute('tabindex', '0');
    nodeEl.setAttribute('aria-label', `${node.name}: ${node.desc}`);
    nodeEl.style.setProperty('--active-color', col.c);
    nodeEl.style.setProperty('--shadow-color', col.s);
    
    let bubbleContent = '';
    if (node.type === 'agent') {
      bubbleContent = node.img
        ? `<div class="node-bubble"><img src="${node.img}" alt="${node.name}" onerror="handleImgError(this, '${col.c}')"></div>`
        : `<div class="node-bubble node-badge" style="color:${col.c}; border-color:${col.c}55;">${SYSTEM_ICONS[node.badgeIcon] || `<strong>${escapeHtml(getNodeInitials(node.name))}</strong>`}</div>`;
    } else {
      bubbleContent = `<div class="node-bubble" style="color:${col.c}; border-color:${col.c}33;">${SYSTEM_ICONS[node.icon]}</div>`;
    }
    
    nodeEl.innerHTML = `
      ${bubbleContent}
      <div class="node-info">
        <div class="node-name">${node.name}</div>
        <div class="node-role">${node.role}</div>
        <div class="node-detail">${node.desc}</div>
      </div>
    `;
    
    const activateNode = (e) => {
      e.stopPropagation();
      if (activeWorkflow) stopWorkflow();
      if (window.matchMedia('(max-width: 768px)').matches) {
        nodesData.forEach(n => n.el && n.el.classList.toggle('mobile-open', n.id === node.id));
        return;
      }
      expandNode(node.id);
    };
    
    nodeEl.addEventListener('click', activateNode);
    nodeEl.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        activateNode(e);
      }
    });
    
    nodeEl.addEventListener('mouseenter', () => {
      if (!selectedNodeId && !activeWorkflow) {
        hoveredNodeId = node.id;
        showHUD(node);
      }
    });
    
    nodeEl.addEventListener('mouseleave', () => {
      if (!selectedNodeId && !activeWorkflow) {
        hoveredNodeId = null;
        hideHUD();
      }
    });
    
    ecoGraphWrapper.appendChild(nodeEl);
    node.el = nodeEl;
  });

  // Workflow controls are optional; the simplified public view keeps only the graph.
  if (wfList) {
    wfList.innerHTML = '';
    workflowsData.forEach(wf => {
      const wfEl = document.createElement('button');
      wfEl.type = 'button';
      wfEl.className = `wf-item ${wf.isLoop ? 'loop' : ''}`;
      wfEl.setAttribute('aria-pressed', 'false');
      wfEl.setAttribute('aria-label', `${wf.name}: ${wf.desc}`);
      wfEl.innerHTML = `
        <div>
          <div class="wf-name">${wf.name}</div>
          <div class="wf-desc">${wf.desc}</div>
        </div>
        <div class="wf-play-btn">
          <svg viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3"/></svg>
        </div>
      `;

      wfEl.addEventListener('click', (e) => {
        e.stopPropagation();
        runWorkflow(wf);
      });

      wfList.appendChild(wfEl);
      wf.uiEl = wfEl;
    });
  }
  
  // Stagger nodes entrance
  setTimeout(() => {
    nodesData.forEach((node, i) => {
      setTimeout(() => {
        if (node.el) node.el.classList.add('visible');
      }, i * 40);
    });
  }, 150);

  // Setup Ambient Particles
  ambientParticles = [];
  linksData.forEach((linkDef) => {
    const fromId = linkDef.from;
    const toId = linkDef.to;
    // 3 ambient particles per connection path
    const particleCount = linkDef.tier === 'core' ? 2 : linkDef.tier === 'primary' ? 2 : 1;
    for (let i = 0; i < particleCount; i++) {
      ambientParticles.push({
        from: fromId,
        to: toId,
        t: Math.random(),
        speed: 0.00024 + Math.random() * 0.00042,
        size: linkDef.tier === 'core' ? 1.2 : 0.9 + Math.random() * 1.1,
        alpha: linkDef.tier === 'core' ? 0.18 : linkDef.tier === 'primary' ? 0.12 + Math.random() * 0.2 : 0.06 + Math.random() * 0.1,
        tier: linkDef.tier,
        direction: Math.random() > 0.5 ? 1 : -1
      });
    }
  });
}

window.handleImgError = function(img, backupColor) {
  // If an avatar image is missing, replace it with a styled SVG container
  img.parentElement.innerHTML = `
    <svg viewBox="0 0 80 80" fill="none">
      <rect x="12" y="12" width="56" height="56" rx="16" fill="${backupColor}" opacity="0.12"/>
      <circle cx="28" cy="30" r="4" fill="${backupColor}" opacity="0.5"/>
      <circle cx="52" cy="30" r="4" fill="${backupColor}" opacity="0.5"/>
      <path d="M24 50 C 32 58, 48 58, 56 50" stroke="${backupColor}" stroke-width="3" stroke-linecap="round" opacity="0.4"/>
    </svg>
  `;
};

function resizeCanvas() {
  if (!ecoVp) return;
  const rect = ecoVp.getBoundingClientRect();
  // If the viewport is hidden (display:none), dimensions will be 0.
  // Use the CSS-defined fallback size to ensure canvas is properly sized.
  width = rect.width || ecoVp.offsetWidth || 1200;
  height = rect.height || ecoVp.offsetHeight || 720;
  if (!ecoGraphicsReady) return;
  const ratio = Math.max(1, window.devicePixelRatio || 1);
  [canvasUnder, canvasOver].forEach((canvas) => {
    if (!canvas) return;
    canvas.width = Math.round(width * ratio);
    canvas.height = Math.round(height * ratio);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
  });
  [ctxUnder, ctxOver].forEach((ctx) => {
    if (!ctx) return;
    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
  });
}

// ═══════════════════ COORDINATE MATH ═══════════════════

function getNodeCoords(nodeId) {
  const node = nodesData.find(n => n.id === nodeId);
  if (!node || !node.el) return { x: 0, y: 0 };

  const nodeRect = node.el.getBoundingClientRect();
  const vpRect = ecoVp.getBoundingClientRect();
  if (nodeRect.width && vpRect.width) {
    return {
      x: nodeRect.left - vpRect.left + nodeRect.width / 2,
      y: nodeRect.top - vpRect.top + nodeRect.height / 2
    };
  }

  return {
    x: (node.x / 100) * width,
    y: (node.y / 100) * height
  };
}

// Bezier Control points calculation
function getControlPoints(p1, p2, curveStrength = 0.16) {
  const dx = p2.x - p1.x;
  const dy = p2.y - p1.y;
  const distance = Math.sqrt(dx * dx + dy * dy);
  
  const midX = (p1.x + p2.x) / 2;
  const midY = (p1.y + p2.y) / 2;
  
  const angle = Math.atan2(dy, dx);
  const perpAngle = angle + Math.PI / 2;
  
  const offset = distance * curveStrength;
  
  return {
    c1: {
      x: midX + Math.cos(perpAngle) * offset,
      y: midY + Math.sin(perpAngle) * offset
    },
    c2: {
      x: midX - Math.cos(perpAngle) * offset,
      y: midY - Math.sin(perpAngle) * offset
    }
  };
}

// Bezier interpolation
function bezierPoint(p0, c1, c2, p3, t) {
  const u = 1 - t;
  const uu = u * u;
  const uuu = uu * u;
  const tt = t * t;
  const ttt = tt * t;
  
  return {
    x: uuu * p0.x + 3 * uu * t * c1.x + 3 * u * tt * c2.x + ttt * p3.x,
    y: uuu * p0.y + 3 * uu * t * c1.y + 3 * u * tt * c2.y + ttt * p3.y
  };
}

// ═══════════════════ HUD RENDER ═══════════════════

function showHUD(node) {
  const col = getAccent(node.col);
  hudDot.style.color = col.c;
  hudDot.style.background = col.c;
  hudDot.style.boxShadow = `0 0 8px ${col.c}`;
  hudName.textContent = node.name;
  hudRole.textContent = node.role;
  hudRole.style.color = col.c;
  hudBody.textContent = node.desc;
  
  const sourceMeta = node.source ? `<span style="opacity:.72">${escapeHtml(node.source)}</span>` : '';
  hudMeta.innerHTML = `
    <span style="display:inline-block; width:6px; height:6px; border-radius:50%; background:${col.c}; margin-right:6px;"></span>
    ${node.layer === 'core' ? (currentLang === 'es' ? 'Núcleo' : 'Core') : node.layer === 'execution' ? (currentLang === 'es' ? 'Ejecución' : 'Execution') : (currentLang === 'es' ? 'Especialista' : 'Specialist')}
    ${sourceMeta ? ` - ${sourceMeta}` : ''}
  `;
  hudElement.classList.add('active');
}

function hideHUD() {
  hudElement.classList.remove('active');
}

// ═══════════════════ INTERACTIVE ZOOM (V7) ═══════════════════

function expandNode(nodeId) {
  selectedNodeId = nodeId;
  hoveredNodeId = null;
  
  const node = nodesData.find(n => n.id === nodeId);
  if (!node) return;
  
  // Calculate zoom transform (V7 Zoom: scale 1.8 centered on expanded node)
  const targetX = width * (0.5 - node.x / 100);
  const targetY = height * (0.5 - node.y / 100);
  
  ecoGraphWrapper.style.transform = `scale(1.8) translate(${targetX}px, ${targetY}px)`;
  
  // Update view states
  backBtn && backBtn.classList.add('active');
  statsBadge && statsBadge.classList.add('faded');
  wfpPanel && wfpPanel.classList.add('faded');
  ecoHint && ecoHint.classList.add('faded');
  
  // Stagger node updates (selected vs faded)
  nodesData.forEach(n => {
    if (!n.el) return;
    if (n.id === nodeId) {
      n.el.classList.add('selected');
      n.el.classList.remove('faded');
    } else {
      n.el.classList.add('faded');
      n.el.classList.remove('selected');
    }
  });
  
  showHUD(node);
  buildSubUniverse(node);
}

function collapseGraph() {
  selectedNodeId = null;
  hoveredNodeId = null;
  
  // Reset zoom transform
  ecoGraphWrapper.style.transform = 'scale(1) translate(0px, 0px)';
  
  backBtn && backBtn.classList.remove('active');
  statsBadge && statsBadge.classList.remove('faded');
  wfpPanel && wfpPanel.classList.remove('faded');
  ecoHint && ecoHint.classList.remove('faded');
  
  nodesData.forEach(n => {
    if (!n.el) return;
    n.el.classList.remove('selected', 'faded');
  });
  
  ecoSubUniverse.classList.remove('active');
  setTimeout(() => {
    ecoSubUniverse.innerHTML = '';
  }, 400);
  
  hideHUD();
}

function buildSubUniverse(node) {
  ecoSubUniverse.innerHTML = '';
  ecoSubUniverse.classList.add('active');
  
  const col = getAccent(node.col);
  const subRadius = Math.min(300, Math.min(width, height) * 0.36);
  const minLabelWidth = node.subs.length > 5 ? 132 : 150;
  
  node.subs.forEach((sub, i) => {
    const ring = i % 2 === 0 ? subRadius : subRadius * 0.74;
    const angle = (i / node.subs.length) * Math.PI * 2 - Math.PI / 2;
    const subX = Math.cos(angle) * ring * 1.15;
    const subY = Math.sin(angle) * ring * 0.82;
    
    const subEl = document.createElement('div');
    subEl.className = `sub-node type-${sub.t}`;
    subEl.style.setProperty('--sub-color', col.c);
    subEl.style.setProperty('--sub-shadow', col.s);
    subEl.style.minWidth = `${minLabelWidth}px`;
    
    subEl.innerHTML = `
      <div class="sub-indicator"></div>
      <div class="sub-label">${sub.l}</div>
      <div class="sub-type">${sub.t}</div>
    `;
    
    // Position sub-node relative to parent center on viewport
    subEl.style.left = `calc(50% + ${subX}px)`;
    subEl.style.top = `calc(50% + ${subY}px)`;
    
    ecoSubUniverse.appendChild(subEl);
    
    // V7 Emerge Transition: explode outward from the center
    setTimeout(() => {
      subEl.classList.add('visible');
    }, 150 + i * 50);
  });
}

// ═══════════════════ WORKFLOW EXECUTION ═══════════════════

function runWorkflow(wf) {
  stopWorkflow();
  collapseGraph();
  
  activeWorkflow = wf;
  
  // Highlight active item in the list
  workflowsData.forEach(item => {
    if (item.uiEl) {
      const isActive = item.id === wf.id;
      item.uiEl.classList.toggle('active', isActive);
      item.uiEl.setAttribute('aria-pressed', String(isActive));
    }
  });
  
  statsBadge && statsBadge.classList.add('faded');
  ecoHint && ecoHint.classList.add('faded');
  executeWorkflowStep(0);
}

function stopWorkflow() {
  activeWorkflow = null;
  if (workflowTimeout) clearTimeout(workflowTimeout);

  if (!stagePanel) {
    activeWfParticles = [];
    return;
  }
  
  stagePanel.classList.remove('active');
  activeWfParticles = [];
  
  // Clear highlighting and fades
  nodesData.forEach(node => {
    if (!node.el) return;
    node.el.classList.remove('faded');
    const bubble = node.el.querySelector('.node-bubble');
    if (!bubble) return;
    bubble.style.boxShadow = '';
    bubble.style.borderColor = '';
  });
  
  workflowsData.forEach(item => {
    if (item.uiEl) {
      item.uiEl.classList.remove('active');
      item.uiEl.setAttribute('aria-pressed', 'false');
    }
  });
  
  statsBadge && statsBadge.classList.remove('faded');
  ecoHint && ecoHint.classList.remove('faded');
}

function executeWorkflowStep(stepIndex) {
  if (!activeWorkflow) return;
  if (!stagePanel || !stageBadge || !stageText || !stageStep) {
    activeWfParticles = [];
    return;
  }

  const seq = activeWorkflow.seq;
  
  // If workflow completes
  if (stepIndex >= seq.length) {
    stageBadge.textContent = getCopy('graph.complete');
    stageBadge.style.background = '#10b981';
    stageBadge.style.boxShadow = '0 0 10px rgba(16,185,129,0.3)';
    stageText.textContent = activeWorkflow.isLoop 
      ? getCopy('graph.selfImproved')
      : getCopy('graph.validated');
    stageStep.textContent = `${getCopy('graph.ready')} ✓`;
    
    // Highlight all participating nodes at the end
    const uniqueIds = [...new Set(seq.flatMap(s => [s.f, s.t]))];
    uniqueIds.forEach(id => {
      const node = nodesData.find(n => n.id === id);
      if (node && node.el) {
        const bubble = node.el.querySelector('.node-bubble');
        if (!bubble) return;
        const col = getAccent(node.col).c;
        bubble.style.boxShadow = `0 0 25px ${col}55`;
      }
    });
    
    workflowTimeout = setTimeout(stopWorkflow, 4000);
    return;
  }
  
  const step = seq[stepIndex];
  const sourceNode = nodesData.find(n => n.id === step.f);
  const targetNode = nodesData.find(n => n.id === step.t);
  
  const stepColor = step.col || (targetNode ? getAccent(targetNode.col).c : '#ffffff');
  
  // Update floating stage controls
  stageBadge.textContent = targetNode ? targetNode.name : getCopy('graph.system');
  stageBadge.style.background = stepColor;
  stageBadge.style.boxShadow = `0 0 10px ${stepColor}33`;
  stageText.textContent = step.act;
  stageStep.textContent = `${getCopy('graph.step')} ${stepIndex + 1} / ${seq.length}`;
  stagePanel.classList.add('active');
  
  // Fade non-participants in the active step
  nodesData.forEach(node => {
    if (!node.el) return;
    if (node.id === step.f || node.id === step.t) {
      node.el.classList.remove('faded');
      if (node.id === step.t) {
        const bubble = node.el.querySelector('.node-bubble');
        if (!bubble) return;
        bubble.style.boxShadow = `0 0 30px ${stepColor}77`;
        bubble.style.borderColor = stepColor;
      }
    } else {
      // Fade if not in this active link transition
      node.el.classList.add('faded');
      const bubble = node.el.querySelector('.node-bubble');
      if (!bubble) return;
      bubble.style.boxShadow = '';
      bubble.style.borderColor = '';
    }
  });
  
  // Trigger particle burst stream between nodes
  const pStart = getNodeCoords(step.f);
  const pEnd = getNodeCoords(step.t);
  const cps = getControlPoints(pStart, pEnd, 0.24);
  
  let finishedCount = 0;
  const numParticles = 6;
  
  for (let i = 0; i < numParticles; i++) {
    activeWfParticles.push({
      fromCoords: pStart,
      toCoords: pEnd,
      c1: cps.c1,
      c2: cps.c2,
      t: 0,
      speed: 0.013 - i * 0.001,
      delay: i * 80,
      size: 4 - i * 0.25,
      color: stepColor,
      label: i === 0 ? step.lbl : null,
      done: false,
      onComplete: () => {
        finishedCount++;
        if (finishedCount === numParticles) {
          // Proceed to next step with slight pause
          workflowTimeout = setTimeout(() => {
            executeWorkflowStep(stepIndex + 1);
          }, 450);
        }
      }
    });
  }
}

// ═══════════════════ CANVAS RENDER LOOP ═══════════════════

function renderEcosystem(timestamp) {
  if (!ecoGraphicsReady || !ctxUnder || !ctxOver) return;
  // Clear buffers
  ctxUnder.clearRect(0, 0, width, height);
  ctxOver.clearRect(0, 0, width, height);
  
  const isZoomed = selectedNodeId !== null;
  
  // 1. RENDER GLOBAL CONNECTION LINES
  if (!isZoomed) {
    const focusId = selectedNodeId || hoveredNodeId;
    linksData.forEach((linkDef) => {
      const { from: fromId, to: toId, tier } = linkDef;
      if (tier === 'secondary' && !focusId) return;
      const p1 = getNodeCoords(fromId);
      const p2 = getNodeCoords(toId);
      const cps = getControlPoints(p1, p2);
      
      const isHoveredLink = (focusId === fromId || focusId === toId);
      
      const fromNode = nodesData.find(n => n.id === fromId);
      const toNode = nodesData.find(n => n.id === toId);
      
      const color1 = getAccent(fromNode.col).c;
      const color2 = getAccent(toNode.col).c;
      
      const grad = ctxUnder.createLinearGradient(p1.x, p1.y, p2.x, p2.y);
      grad.addColorStop(0, color1);
      grad.addColorStop(1, color2);
      
      ctxUnder.strokeStyle = grad;
      ctxUnder.lineWidth = isHoveredLink ? 2.2 : tier === 'core' ? 1.35 : tier === 'primary' ? 1.08 : 0.78;
      
      const baseAlpha = isHoveredLink ? 0.56 : tier === 'core' ? 0.24 : tier === 'primary' ? 0.14 : 0.06;
      const breathingPulse = Math.sin(timestamp * 0.0012 + (p1.x + p1.y) * 0.001) * (tier === 'core' ? 0.04 : 0.025);
      ctxUnder.globalAlpha = Math.max(0.04, baseAlpha + breathingPulse);
      
      // Draw bezier link curve
      ctxUnder.beginPath();
      ctxUnder.moveTo(p1.x, p1.y);
      ctxUnder.bezierCurveTo(cps.c1.x, cps.c1.y, cps.c2.x, cps.c2.y, p2.x, p2.y);
      ctxUnder.stroke();
      
      // Connection glow on hover
      if (isHoveredLink) {
        ctxUnder.lineWidth = 5;
        ctxUnder.globalAlpha = 0.08;
        ctxUnder.beginPath();
        ctxUnder.moveTo(p1.x, p1.y);
        ctxUnder.bezierCurveTo(cps.c1.x, cps.c1.y, cps.c2.x, cps.c2.y, p2.x, p2.y);
        ctxUnder.stroke();
      }
      ctxUnder.globalAlpha = 1.0;
    });
    
    // RENDER AMBIENT TRAFFIC PARTICLES
    ambientParticles.forEach(p => {
      if (p.tier === 'secondary' && !(selectedNodeId || hoveredNodeId)) return;
      const p1 = getNodeCoords(p.from);
      const p2 = getNodeCoords(p.to);
      const cps = getControlPoints(p1, p2);
      
      // Animate progress
      p.t += p.speed * p.direction;
      if (p.t > 1) p.t = 0;
      if (p.t < 0) p.t = 1;
      
      const pt = bezierPoint(p1, cps.c1, cps.c2, p2, p.t);
      const isHoverLink = ((selectedNodeId || hoveredNodeId) === p.from || (selectedNodeId || hoveredNodeId) === p.to);
      
      ctxUnder.beginPath();
      ctxUnder.arc(pt.x, pt.y, p.size, 0, Math.PI * 2);
      ctxUnder.fillStyle = isHoverLink ? '#ffffff' : getAccent(nodesData.find(n => n.id === p.from).col).c;
      ctxUnder.globalAlpha = isHoverLink ? 0.75 : p.alpha;
      ctxUnder.fill();
      ctxUnder.globalAlpha = 1.0;
    });
  }
  
  // 2. RENDER SUB-UNIVERSE INNER-LINK CURVES
  if (isZoomed) {
    const parentNode = nodesData.find(n => n.id === selectedNodeId);
    const pCoords = getNodeCoords(selectedNodeId);
    const parentColor = getAccent(parentNode.col).c;
    
    const subNodes = ecoSubUniverse.querySelectorAll('.sub-node');
    subNodes.forEach((subEl, index) => {
      const rect = subEl.getBoundingClientRect();
      const vpRect = ecoVp.getBoundingClientRect();
      
      // Calculate coordinates relative to viewport
      const subX = rect.left - vpRect.left + rect.width / 2;
      const subY = rect.top - vpRect.top + rect.height / 2;
      
      const sCoords = { x: subX, y: subY };
      const cps = getControlPoints(pCoords, sCoords, 0.1);
      
      // Draw sub-links
      ctxUnder.lineWidth = 1.8;
      ctxUnder.strokeStyle = parentColor;
      ctxUnder.globalAlpha = 0.35;
      
      ctxUnder.beginPath();
      ctxUnder.moveTo(pCoords.x, pCoords.y);
      ctxUnder.bezierCurveTo(cps.c1.x, cps.c1.y, cps.c2.x, cps.c2.y, sCoords.x, sCoords.y);
      ctxUnder.stroke();
      
      // Sub-node pulse particle stream
      const t = (timestamp * 0.0008 + index * 0.3) % 1.0;
      const pt = bezierPoint(pCoords, cps.c1, cps.c2, sCoords, t);
      
      ctxUnder.beginPath();
      ctxUnder.arc(pt.x, pt.y, 2.5, 0, Math.PI * 2);
      ctxUnder.fillStyle = '#ffffff';
      ctxUnder.globalAlpha = 0.8 * (1.0 - t) * t * 4; // Fade out near targets
      ctxUnder.fill();
      ctxUnder.globalAlpha = 1.0;
    });
  }
  
  // 3. RENDER ACTIVE WORKFLOW FLOW STREAMS
  if (activeWorkflow && activeWfParticles.length) {
    for (let i = activeWfParticles.length - 1; i >= 0; i--) {
      const p = activeWfParticles[i];
      if (p.done) continue;
      
      if (p.delay > 0) {
        p.delay -= 16.6; // ~1 frame duration in ms
        continue;
      }
      
      // Draw flow line background highlight
      ctxOver.lineWidth = 2.8;
      ctxOver.strokeStyle = p.color;
      ctxOver.globalAlpha = 0.15;
      ctxOver.beginPath();
      ctxOver.moveTo(p.fromCoords.x, p.fromCoords.y);
      ctxOver.bezierCurveTo(p.c1.x, p.c1.y, p.c2.x, p.c2.y, p.toCoords.x, p.toCoords.y);
      ctxOver.stroke();
      ctxOver.globalAlpha = 1.0;
      
      // Update particle position
      p.t += p.speed;
      if (p.t >= 1.0) {
        p.done = true;
        p.onComplete();
        activeWfParticles.splice(i, 1);
        continue;
      }
      
      const pt = bezierPoint(p.fromCoords, p.c1, p.c2, p.toCoords, p.t);
      const alphaVal = Math.sin(p.t * Math.PI); // Pulse glow shape
      
      // Core glow
      ctxOver.beginPath();
      ctxOver.arc(pt.x, pt.y, p.size * 3.5, 0, Math.PI * 2);
      ctxOver.fillStyle = p.color;
      ctxOver.globalAlpha = alphaVal * 0.24;
      ctxOver.fill();
      
      // Bright core
      ctxOver.beginPath();
      ctxOver.arc(pt.x, pt.y, p.size, 0, Math.PI * 2);
      ctxOver.fillStyle = '#ffffff';
      ctxOver.globalAlpha = alphaVal * 0.95;
      ctxOver.fill();
      
      // Flow pill labels (V7 premium step markers)
      if (p.label) {
        ctxOver.font = 'bold 10px "Space Grotesk", sans-serif';
        const textWidth = ctxOver.measureText(p.label).width;
        const rectX = pt.x - textWidth / 2 - 8;
        const rectY = pt.y - 32;
        
        ctxOver.fillStyle = 'rgba(9, 9, 11, 0.9)';
        ctxOver.beginPath();
        ctxOver.roundRect(rectX, rectY, textWidth + 16, 20, 6);
        ctxOver.fill();
        
        ctxOver.strokeStyle = `${p.color}88`;
        ctxOver.lineWidth = 1.0;
        ctxOver.stroke();
        
        ctxOver.fillStyle = p.color;
        ctxOver.globalAlpha = 1.0;
        ctxOver.fillText(p.label, pt.x - textWidth / 2, pt.y - 18);
      }
      ctxOver.globalAlpha = 1.0;
    }
  }
  
  if (!ecoReduceMotion.matches) animationFrameId = requestAnimationFrame(renderEcosystem);
}

function startEcosystemLoop() {
  if (!ecoGraphicsReady) return;
  if (animationFrameId) cancelAnimationFrame(animationFrameId);
  if (ecoReduceMotion.matches) {
    animationFrameId = null;
    renderEcosystem(0);
    return;
  }
  animationFrameId = requestAnimationFrame(renderEcosystem);
}

function stopEcosystemLoop() {
  if (animationFrameId) cancelAnimationFrame(animationFrameId);
  animationFrameId = null;
  stopWorkflow();
}
