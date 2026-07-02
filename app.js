// ═══════════════════ NAVIGATION & TABS ═══════════════════

const UI_COPY = {
  es: {
    nav: { overview: 'Overview', projects: 'Proyectos', agents: 'Ecosistema IA' },
    hero: {
      tagline: 'AI-First Automation Builder & Process Analyst',
      title: 'ignaciopalmeri',
      availability: 'Disponible para pasantías / Remote-friendly',
      kicker: 'Estudiante de Gestión IT en UADE. Construyo herramientas reales con Python, automatización de procesos y agentes de IA.',
      description: 'Busco una pasantía donde pueda aportar automatización, criterio de producto y aprendizaje rápido en equipos reales de ingeniería.',
      projectsCta: 'Ver proyectos',
      agentsCta: 'Explorar ecosistema IA',
      githubCta: 'GitHub',
      cvCta: 'Descargar CV',
      cvEnCta: 'CV in English →',
      status: 'Disponible para Trainee / Junior',
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
      about: 'ignaciopalmeri - estudiante de Gestión IT en UADE y AI-First Builder orientado a automatización, procesos y producto.',
      skills: 'Python, FastAPI, TypeScript, SQL, Linux, Git, AI Agent Orchestration, MCP, Context Engineering y automatización de procesos.',
      projects: 'Proyectos principales: JobBot, Motor Estadístico Predictivo y Pisculichi Labs.',
      agents: 'Uso IA como infraestructura conectada a flujos de negocio: agentes, contexto, validación, memoria y automatización local.',
      contact: 'GitHub: @nachopalmeri | LinkedIn: ignaciopalmeri | Email: ignaciopalmeri1@gmail.com'
    },
    github: {
      eyebrow: 'Actividad verificable',
      title: 'GitHub como bitácora de trabajo',
      body: 'Actividad pública del perfil nachopalmeri: commits, repositorios y continuidad real en el tiempo.'
    },
    orchestration: {
      body: 'Stack principal para automatización, producto y despliegue.'
    },
    about: {
      title: 'Sobre mí',
      p1: 'Estudio Gestión de Tecnología de la Información en UADE y opero como un AI-First Builder.',
      p2: 'Uso asistentes avanzados como Claude Code, Cursor y Aider como motor interno para prototipar, asegurar y desplegar software a máxima velocidad. Mi foco está en la intersección de sistemas, finanzas y flujos de negocio.',
      p3: 'Leo sobre comportamiento y estrategia porque en la era de la IA el valor no está en la sintaxis del código, sino en conectar ideas con soluciones de mercado.'
    },
    certifications: {
      title: 'Certificaciones',
      c1: { title: 'Red Hat RH124 / System Administrator', body: 'Linux, administración de sistemas y fundamentos operativos.' },
      c2: { title: 'Cisco CCNA 1', body: 'Redes, TCP/IP, subnetting y fundamentos de infraestructura.' },
      c3: { title: 'Claude Code in Action', body: 'Uso de IA en flujos de desarrollo, revisión y documentación.' }
    },
    stack: { title: 'Stack y herramientas', core: 'Uso principal', product: 'Producto y datos', ai: 'AI-Assisted Development' },
    projects: {
      title: 'Proyectos destacados',
      github: 'Ver GitHub',
      status: { active: 'Activo', public: 'Público', demo: 'Demo', local: 'Local' },
      jobbotTitle: 'JobBot - Asynchronous Automation SaaS',
      agentsTitle: 'Agents System - Multi-IDE Orchestration Infrastructure',
      jobbot: 'SaaS de automatización con dashboard Next.js, backend FastAPI/PostgreSQL, cookies httpOnly, webhooks HMAC y pagos con Stripe/MercadoPago. Diseñado con flujos AI-first para pasar de idea a producción con criterios de seguridad.',
      franquiya: 'Dashboard operativo para stock, facturas, turnos, empleados y auditorías. Un sistema de gestión práctico orientado a procesos reales, control de caja e inventario.',
      agents: 'Infraestructura local para estandarizar reglas, prompts portables y contexto entre Claude Code, Windsurf y Zed. Automatización con PowerShell/Bash y symlinks para optimizar el entorno de desarrollo.',
      roleJobbot: 'Automation SaaS / implementación AI-first',
      roleFranquiya: 'Dashboard operativo / control de procesos',
      roleAgents: 'Infraestructura multi-IDE de orquestación',
      valueJobbot: 'Automatización asincrónica de búsqueda laboral con patrones de seguridad de producción.',
      valueFranquiya: 'Control operativo de stock, facturas, turnos, empleados, auditorías y visibilidad de caja.',
      valueAgents: 'Prompts portables, contexto compartido, reglas, validación y automatización local entre entornos de desarrollo IA.',
      proof: 'Ver prueba',
      open: 'Abrir proyecto',
      repo: 'Ver repo',
      exploreAgents: 'Explorar ecosistema'
    },
    agents: {
      eyebrow: 'Sistema real del repo',
      title: 'Ecosistema de agentes',
      description: 'Sistema local de agentes especializados para orquestar flujos de desarrollo: construcción, revisión y documentación de software.',
      workflowsTitle: 'Flujos de desarrollo'
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
    nav: { overview: 'Overview', projects: 'Projects', agents: 'AI Ecosystem' },
    hero: {
      tagline: 'AI-First Automation Builder & Process Analyst',
      title: 'ignaciopalmeri',
      availability: 'Available for remote internships / GMT-3',
      kicker: 'IT Management student at UADE. I build real tools with Python, process automation and AI agents.',
      description: 'I am looking for an internship where I can contribute automation, product judgment and fast learning in real engineering teams.',
      projectsCta: 'View projects',
      agentsCta: 'Explore AI ecosystem',
      githubCta: 'GitHub',
      cvCta: 'Download CV',
      cvEnCta: 'CV in English →',
      status: 'Available for Trainee / Junior roles',
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
      about: 'ignaciopalmeri - IT Management student at UADE and AI-First Builder focused on automation, processes and product.',
      skills: 'Python, FastAPI, TypeScript, SQL, Linux, Git, AI Agent Orchestration, MCP, Context Engineering and process automation.',
      projects: 'Main projects: JobBot, Sports Predictive Analytics Engine and Pisculichi Labs.',
      agents: 'I use AI as infrastructure connected to business workflows: agents, context, validation, memory and local automation.',
      contact: 'GitHub: @nachopalmeri | LinkedIn: ignaciopalmeri | Email: ignaciopalmeri1@gmail.com'
    },
    github: {
      eyebrow: 'Verifiable activity',
      title: 'GitHub as a work log',
      body: 'Public activity from the nachopalmeri profile: commits, repositories and real continuity over time.'
    },
    orchestration: {
      body: 'Core stack for automation, product and deployment.'
    },
    about: {
      title: 'About me',
      p1: 'I study IT Management at UADE and operate as an AI-First Builder.',
      p2: 'I use advanced assistants like Claude Code, Cursor and Aider as an internal engine to prototype, secure and deploy software at high speed. My focus is the intersection of systems, finance and business workflows.',
      p3: 'I read about behavior and strategy because in the AI era the value is not code syntax, but the ability to connect ideas with market-ready solutions.'
    },
    certifications: {
      title: 'Certifications',
      c1: { title: 'Red Hat RH124 / System Administrator', body: 'Linux, system administration and operational fundamentals.' },
      c2: { title: 'Cisco CCNA 1', body: 'Networking, TCP/IP, subnetting and infrastructure fundamentals.' },
      c3: { title: 'Claude Code in Action', body: 'AI usage in development, review and documentation workflows.' }
    },
    stack: { title: 'Stack and tools', core: 'Core tools', product: 'Product and data', ai: 'AI-Assisted Development' },
    projects: {
      title: 'Featured projects',
      github: 'View GitHub',
      status: { active: 'Active', public: 'Public', demo: 'Demo', local: 'Local' },
      jobbotTitle: 'JobBot - Asynchronous Automation SaaS',
      agentsTitle: 'Agents System - Multi-IDE Orchestration Infrastructure',
      jobbot: 'Automation SaaS with a Next.js dashboard, FastAPI/PostgreSQL backend, httpOnly cookies, HMAC-signed webhooks and Stripe/MercadoPago payments. Designed with AI-first workflows to move from idea to production with security standards.',
      franquiya: 'Operations dashboard for stock, invoices, shifts, employees and audits. A hands-on management system for real processes, cash control and inventory.',
      agents: 'Local infrastructure to standardize rules, portable prompts and context across Claude Code, Windsurf and Zed. PowerShell/Bash automation and symlinks to optimize the engineering workspace.',
      roleJobbot: 'Automation SaaS / AI-first implementation',
      roleFranquiya: 'Operations dashboard / process control',
      roleAgents: 'Multi-IDE orchestration infrastructure',
      valueJobbot: 'Asynchronous job-search automation with production security patterns.',
      valueFranquiya: 'Operational control for stock, invoices, shifts, employees, audits, and cash visibility.',
      valueAgents: 'Portable prompts, shared context, rules, validation, and local automation across AI development environments.',
      proof: 'View proof',
      open: 'Open project',
      repo: 'View repo',
      exploreAgents: 'Explore ecosystem'
    },
    agents: {
      eyebrow: 'Real repo system',
      title: 'Agent ecosystem',
      description: 'Local system of specialized agents to orchestrate development flows: software construction, review and documentation.',
      workflowsTitle: 'Development workflows'
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

let currentLang = localStorage.getItem('portfolio-lang') || 'es';
let currentTheme = localStorage.getItem('portfolio-theme') || 'dark';

function getCopy(path, lang = currentLang) {
  return path.split('.').reduce((value, key) => value && value[key], UI_COPY[lang]) || path;
}

function applyStaticCopy() {
  document.documentElement.lang = currentLang;
  document.documentElement.dataset.theme = currentTheme;
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    el.textContent = getCopy(el.dataset.i18n);
  });
  document.querySelectorAll('[data-lang-btn]').forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.langBtn === currentLang);
  });
  resetTerminal();
  if (document.getElementById('project-carousel')) renderProjectCarousel();
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
    launcher.setAttribute('aria-expanded', String(open));
    launcher.classList.toggle('active', open);
    if (open && input) setTimeout(() => input.focus({ preventScroll: true }), 80);
  }

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
      localStorage.setItem('portfolio-lang', currentLang);
      applyStaticCopy();
      rebuildLocalizedEcosystem();
    });
  });

  const themeToggle = document.getElementById('theme-toggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
      localStorage.setItem('portfolio-theme', currentTheme);
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
    kind: { es: 'Automation SaaS', en: 'Automation SaaS' },
    description: {
      es: 'SaaS de automatización laboral con dashboard, backend Python/FastAPI y flujos asincrónicos para alertas, postulaciones y operación segura.',
      en: 'Job-search automation SaaS with dashboard, Python/FastAPI backend and asynchronous flows for alerts, applications and secure operations.'
    },
    value: {
      es: 'Idea a producción con foco en seguridad, pagos/webhooks y experiencia operativa.',
      en: 'Idea to production with focus on security, payments/webhooks and operational experience.'
    },
    problem: {
      es: 'Automatizar búsqueda laboral sin perder control sobre seguridad, pagos y webhooks.',
      en: 'Automate job search without losing control over security, payments and webhooks.'
    },
    role: {
      es: 'Full-stack builder: dashboard, backend, autenticación, webhooks y despliegue.',
      en: 'Full-stack builder: dashboard, backend, authentication, webhooks and deployment.'
    },
    evidence: {
      es: 'Demuestra criterio de producto SaaS, backend Python y patrones de producción.',
      en: 'Shows SaaS product judgment, Python backend work and production patterns.'
    },
    stack: ['Python', 'FastAPI', 'Next.js', 'PostgreSQL', 'Webhooks']
  },
  {
    id: 'motor-estadistico',
    title: 'Motor Estadístico Predictivo',
    repo: 'https://github.com/nachopalmeri/prode-mundial-2026',
    href: 'https://prode-mundial-2026-ten-omega.vercel.app',
    media: 'project-assets/prode-mundial-2026.png',
    status: 'LIVE',
    kind: { es: 'Analytics de deportes', en: 'Sports analytics' },
    description: {
      es: 'Motor Python para predicciones deportivas, lógica estadística y participación recurrente sobre eventos de alto interés.',
      en: 'Python engine for sports predictions, statistical logic and recurring participation around high-interest events.'
    },
    value: {
      es: 'Analytics deportivo empaquetado como producto desplegado, con reglas claras y experiencia simple.',
      en: 'Sports analytics packaged as a deployed product with clear rules and a simple experience.'
    },
    problem: {
      es: 'Transformar datos y predicciones deportivas en una experiencia usable para usuarios no técnicos.',
      en: 'Turn sports data and predictions into a usable experience for non-technical users.'
    },
    role: {
      es: 'Modelado de reglas, lógica Python, deploy y experiencia de participación.',
      en: 'Rule modeling, Python logic, deployment and participation experience.'
    },
    evidence: {
      es: 'Demuestra análisis, lógica de producto y ejecución rápida sobre un caso social con reglas claras.',
      en: 'Shows analysis, product logic and fast execution on a social use case with clear rules.'
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
    kind: { es: 'Contexto de agencia', en: 'Agency context' },
    description: {
      es: 'Laboratorio de producto y automatización para mercados predictivos, bots, alertas y herramientas de portfolio.',
      en: 'Builder ecosystem for prediction markets: alerts, bots and portfolio tools for real-time information operations.'
    },
    value: {
      es: 'Contexto de agencia: une producto, finanzas y automatización en un laboratorio desplegado.',
      en: 'Connects product, finance and automation in a deployed lab.'
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
      es: 'Muestra capacidad de explorar dominios nuevos y empaquetarlos en producto.',
      en: 'Shows ability to explore new domains and package them as product.'
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

let activeProjectIndex = 0;
let hoveredProjectIndex = null;

function projectField(project, field) {
  const value = project[field];
  if (!value || typeof value === 'string') return value || '';
  return value[currentLang] || value.es || value.en || '';
}

function normalizeProjectIndex(index) {
  return (index + FEATURED_PROJECTS.length) % FEATURED_PROJECTS.length;
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
      loading="${index === 0 ? 'eager' : 'lazy'}"
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
      <div class="project-preview-media">
        ${projectImage(project, index, 'preview')}
      </div>
      <div class="project-preview-copy">
        <div class="project-preview-kicker">${escapeHtml(project.status)} / ${escapeHtml(projectField(project, 'kind'))}</div>
        <h3>${escapeHtml(project.title)}</h3>
        <p>${escapeHtml(projectField(project, 'value'))}</p>
        <div class="project-preview-tags">${project.stack.slice(0, 4).map(item => `<span>${escapeHtml(item)}</span>`).join('')}</div>
        <div class="project-preview-links">
          <a class="carousel-proof" href="${project.href}" ${project.href.startsWith('#') ? '' : 'target="_blank" rel="noreferrer"'}>${escapeHtml(getCopy('projects.open'))}</a>
          <a class="carousel-proof subtle" href="${project.repo}" target="_blank" rel="noreferrer">${escapeHtml(getCopy('projects.repo'))}</a>
        </div>
      </div>
    </article>
  `;
}

function syncProjectPreview(carousel) {
  const preview = carousel.querySelector('.project-hover-summary');
  if (!preview) return;
  const projectIndex = hoveredProjectIndex !== null ? hoveredProjectIndex : activeProjectIndex;
  const project = FEATURED_PROJECTS[projectIndex];
  preview.innerHTML = renderProjectPreview(project, projectIndex, hoveredProjectIndex !== null ? 'hover' : 'active');
  preview.dataset.state = hoveredProjectIndex !== null ? 'hover' : 'active';
}

function renderProjectCarousel() {
  const carousel = document.getElementById('project-carousel');
  const archive = document.getElementById('project-archive');
  if (!carousel && !archive) return;

  if (carousel) {
    carousel.innerHTML = `
      <div class="project-deck-shell">
        <div class="project-deck-rail" role="tablist" aria-label="Project selector"></div>
        <div class="project-deck-viewport">
          <div class="project-hover-summary" aria-live="polite"></div>
        </div>
      </div>
    `;
    const rail = carousel.querySelector('.project-deck-rail');
    const viewport = carousel.querySelector('.project-deck-viewport');
    FEATURED_PROJECTS.forEach((project, index) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = `project-rail-item ${index === activeProjectIndex ? 'active' : ''}`;
      button.setAttribute('role', 'tab');
      button.setAttribute('aria-selected', String(index === activeProjectIndex));
      button.setAttribute('aria-controls', 'project-carousel');
      button.dataset.projectIndex = String(index);
      button.innerHTML = `
        <span class="project-rail-thumb">
          ${projectImage(project, index, 'thumb')}
        </span>
        <span class="project-rail-index">${String(index + 1).padStart(2, '0')}</span>
        <span>
          <strong>${escapeHtml(project.title)}</strong>
          <small>${escapeHtml(projectField(project, 'kind'))}</small>
        </span>
      `;
      button.addEventListener('click', () => setActiveProject(index));
      button.addEventListener('mouseenter', () => setProjectHover(index));
      button.addEventListener('focus', () => setProjectHover(index));
      button.addEventListener('mouseleave', clearProjectHover);
      button.addEventListener('blur', clearProjectHover);
      rail.appendChild(button);
    });
    viewport.insertAdjacentHTML('beforeend', `
      <div class="project-viewport-stage">
        ${FEATURED_PROJECTS.map((project, index) => `
      <article class="project-mission ${index === activeProjectIndex ? 'active' : ''}" data-project-id="${project.id}">
        <div class="mission-visual">
          ${projectImage(project, index, 'mission')}
          <div class="mission-scanline" aria-hidden="true"></div>
        </div>
        <div class="mission-copy">
          <div class="mission-status">${escapeHtml(project.status)} / ${escapeHtml(projectField(project, 'kind'))}</div>
          <h3>${escapeHtml(project.title)}</h3>
          <p class="mission-problem">${escapeHtml(projectField(project, 'problem'))}</p>
          <div class="mission-evidence-grid">
            <div>
              <span>${currentLang === 'es' ? 'Mi rol' : 'My role'}</span>
              <strong>${escapeHtml(projectField(project, 'role'))}</strong>
            </div>
            <div>
              <span>${currentLang === 'es' ? 'Evidencia' : 'Evidence'}</span>
              <strong>${escapeHtml(projectField(project, 'evidence'))}</strong>
            </div>
          </div>
          <p class="mission-value">${escapeHtml(projectField(project, 'value'))}</p>
          <div class="carousel-stack">${project.stack.map(item => `<span>${escapeHtml(item)}</span>`).join('')}</div>
          <div class="mission-actions">
            <a class="carousel-proof" href="${project.href}" ${project.href.startsWith('#') ? '' : 'target="_blank" rel="noreferrer"'}>${escapeHtml(getCopy('projects.open'))}</a>
            <a class="carousel-proof subtle" href="${project.repo}" target="_blank" rel="noreferrer">${escapeHtml(getCopy('projects.repo'))}</a>
          </div>
        </div>
      </article>
    `).join('')}
      </div>
    `);
    syncProjectPreview(carousel);
  }

  if (archive) {
    archive.innerHTML = FEATURED_PROJECTS.map((project, index) => `
      <a class="archive-row" href="${project.href}" ${project.href.startsWith('#') ? '' : 'target="_blank" rel="noreferrer"'}>
        <span class="archive-number">${String(index + 1).padStart(2, '0')}</span>
        <span class="archive-thumb">${projectImage(project, index, 'archive')}</span>
        <span class="archive-main">
          <strong>${escapeHtml(project.title)}</strong>
          <small>${escapeHtml(projectField(project, 'description'))}</small>
        </span>
        <span class="archive-tags">${project.stack.slice(0, 3).map(item => `<em>${escapeHtml(item)}</em>`).join('')}</span>
        <span class="archive-open">${escapeHtml(getCopy('projects.open'))}</span>
      </a>
    `).join('');
  }
  setActiveProject(activeProjectIndex, false);
}

function setActiveProject(index, focus = true) {
  const carousel = document.getElementById('project-carousel');
  if (!carousel) return;
  activeProjectIndex = normalizeProjectIndex(index);
  hoveredProjectIndex = null;
  const missions = Array.from(carousel.querySelectorAll('.project-mission'));
  const railItems = Array.from(carousel.querySelectorAll('.project-rail-item'));
  missions.forEach((mission, slideIndex) => {
    mission.classList.toggle('active', slideIndex === activeProjectIndex);
    mission.setAttribute('aria-hidden', String(slideIndex !== activeProjectIndex));
  });
  railItems.forEach((item, itemIndex) => {
    item.classList.toggle('active', itemIndex === activeProjectIndex);
    item.setAttribute('aria-selected', String(itemIndex === activeProjectIndex));
  });
  syncProjectPreview(carousel);
  if (focus) carousel.focus({ preventScroll: true });
}

function setProjectHover(index) {
  const carousel = document.getElementById('project-carousel');
  if (!carousel) return;
  hoveredProjectIndex = normalizeProjectIndex(index);
  const railItems = Array.from(carousel.querySelectorAll('.project-rail-item'));
  railItems.forEach((item, itemIndex) => {
    item.classList.toggle('previewed', itemIndex === hoveredProjectIndex);
  });
  syncProjectPreview(carousel);
}

function clearProjectHover() {
  const carousel = document.getElementById('project-carousel');
  if (!carousel) return;
  hoveredProjectIndex = null;
  carousel.querySelectorAll('.project-rail-item').forEach((item) => item.classList.remove('previewed'));
  syncProjectPreview(carousel);
}

function setupProjectCarousel() {
  renderProjectCarousel();
  const prev = document.getElementById('project-prev');
  const next = document.getElementById('project-next');
  const carousel = document.getElementById('project-carousel');
  if (!carousel) return;

  prev && prev.addEventListener('click', () => setActiveProject(activeProjectIndex - 1));
  next && next.addEventListener('click', () => setActiveProject(activeProjectIndex + 1));
  carousel.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      setActiveProject(activeProjectIndex - 1);
    }
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      setActiveProject(activeProjectIndex + 1);
    }
  });

  let startX = null;
  carousel.addEventListener('pointerdown', (event) => {
    startX = event.clientX;
    carousel.setPointerCapture(event.pointerId);
  });
  carousel.addEventListener('pointerup', (event) => {
    if (startX === null) return;
    const delta = event.clientX - startX;
    startX = null;
    if (Math.abs(delta) > 40) setActiveProject(activeProjectIndex + (delta < 0 ? 1 : -1));
  });
  window.addEventListener('resize', () => setActiveProject(activeProjectIndex, false));
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

document.addEventListener('DOMContentLoaded', () => {
  setupPreferenceControls();
  setupProjectCarousel();
  setupAiOpsHero();
  // Navigation tabs
  const navTabs = document.querySelectorAll('.nav-tab');
  const viewSections = document.querySelectorAll('.view-section');

  function switchTab(tabId) {
    // Update tabs active state
    navTabs.forEach(tab => {
      tab.classList.toggle('active', tab.getAttribute('data-tab') === tabId);
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
  ctxUnder = canvasUnder.getContext('2d');
  ctxOver = canvasOver.getContext('2d');
  
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

  // Load Data
  setupCurrentAgentPortfolioData();
  
  // Render HTML Nodes
  buildNodes();
  
  // Event listeners
  resizeCanvas();
  // Re-measure after the browser paints the now-visible section
  requestAnimationFrame(() => {
    resizeCanvas();
    requestAnimationFrame(resizeCanvas);
  });
  window.addEventListener('resize', resizeCanvas);
  
  backBtn && backBtn.addEventListener('click', collapseGraph);
  ecoVp.addEventListener('click', (e) => {
    if (selectedNodeId && !e.target.closest('.eco-node') && !e.target.closest('.sub-node') && !e.target.closest('#eco-hud')) {
      collapseGraph();
    }
  });

  ecoInitialized = true;
  startEcosystemLoop();
}

function setupData() {
  setupCurrentAgentPortfolioData();
}


function setupRealPortfolioData() {
  setupCurrentAgentPortfolioData();
}


function setupCurrentAgentPortfolioData() {
  const es = currentLang === 'es';
  const g = {
    director: es ? 'Coordina prioridades, revisa evidencia y mantiene el rumbo del sistema.' : 'Coordinates priorities, reviews evidence and keeps the system on track.',
    architect: es ? 'Diseña arquitecturas listas para producción con foco en seguridad, observabilidad y costo.' : 'Designs production-ready architectures with focus on security, observability and cost.',
    mcp: es ? 'Evalúa integraciones MCP, contratos de herramientas y límites de permisos.' : 'Evaluates MCP integrations, tool contracts and permission limits.',
    researcher: es ? 'Investiga documentación y alternativas antes de proponer una implementación.' : 'Researches documentation and alternatives before proposing an implementation.',
    design: es ? 'Cuida responsive, accesibilidad visual, motion y claridad de interfaz.' : 'Cares about responsive behavior, visual accessibility, motion and interface clarity.',
    tests: es ? 'Cobertura, Playwright, regresión y evidencia verificable.' : 'Coverage, Playwright, regression and verifiable evidence.',
    security: es ? 'Secretos, dependencias, permisos y publicación segura.' : 'Secrets, dependencies, permissions and safe publishing.',
    docs: es ? 'Documentación técnica clara: README, guías, API docs y handoff.' : 'Clear technical documentation: README, guides, API docs and handoff.',
    obsidian: es ? 'Memoria local, MOCs, notas y captura durable de conocimiento.' : 'Local memory, MOCs, notes and durable knowledge capture.',
    product: es ? 'MVP scoping, validación y decisiones de producto orientadas a impacto.' : 'MVP scoping, validation and product decisions oriented to impact.',
    growth: es ? 'SEO, GEO, AEO y crecimiento orgánico con criterio práctico.' : 'SEO, GEO, AEO and organic growth with practical judgment.',
    seo: es ? 'SEO técnico y on-page: estructura, metadata, schema y accesibilidad.' : 'Technical and on-page SEO: structure, metadata, schema and accessibility.',
    marketing: es ? 'Posicionamiento, GTM y research de audiencia.' : 'Positioning, GTM and audience research.',
    content: es ? 'Contenido multiplataforma con voz propia y consistencia.' : 'Multi-platform content with a consistent voice.',
    academic: es ? 'Apoyo de estudio, conceptos y material para repasar.' : 'Study support, concepts and review material.',
    reviewer: es ? 'Revisión de código, riesgos y calidad antes de integrar cambios.' : 'Code review, risks and quality before merging changes.',
    release: es ? 'Changelog, validación de instalación y publicación reproducible.' : 'Changelog, install validation and reproducible publishing.',
    kickoff: es ? 'Arranque liviano de proyectos con primer hito claro.' : 'Lightweight project kickoff with a clear first milestone.',
    pruner: es ? 'Reduce complejidad y costo de contexto sin perder calidad.' : 'Reduces complexity and context cost without losing quality.',
    user: es ? 'Entrada externa y pedidos en lenguaje natural.' : 'External input and requests in natural language.',
    rules: es ? 'Reglas globales, permisos y estilo del sistema.' : 'Global rules, permissions and system style.',
    memory: es ? 'Memoria local versionada para lecciones y patrones útiles.' : 'Versioned local memory for lessons and useful patterns.',
    gate: es ? 'Criterios de validación y evidencia antes de cerrar una tarea.' : 'Validation criteria and evidence before closing a task.',
    harness: es ? 'Captura correcciones y mejora el sistema con feedback.' : 'Captures corrections and improves the system with feedback.',
    techradar: es ? 'Radar ADOPT/TRIAL/ASSESS/HOLD para decisiones de stack.' : 'ADOPT/TRIAL/ASSESS/HOLD radar for stack decisions.'
  };

  nodesData = [
    agentNode('principal', 'Director', 'agente-principal.md', g.director, 'agent-assets/director.jpg', 50, 48, 'principal', [
      sub('workflows/index.md', 'workflow'), sub('Agent Routing', 'workflow'), sub('validation.md', 'rules'), sub('session_checkpoint.md', 'memory'), sub('Release Manager', 'workflow')
    ]),
    agentNode('mcp', 'MCP Architect', 'agente-mcp-architect.md', g.mcp, 'agent-assets/mcp.jpg', 50, 15, 'mcp', [
      sub('mcp_catalog.md', 'workflow'), sub('mcp_adoption.md', 'workflow'), sub('mcp_security.md', 'rules'), sub('Tool Schemas', 'tool')
    ]),
    agentNode('architect', 'AI Architect', 'agente-ai-architect.md', g.architect, 'agent-assets/architect.jpg', 67, 21, 'architect', [
      sub('ai_production.md', 'workflow'), sub('Prompt Registry', 'memory'), sub('Evaluations', 'rules'), sub('Cost Control', 'rules')
    ]),
    agentNode('researcher', 'Researcher', 'agente-researcher.md', g.researcher, 'agent-assets/researcher.jpg', 81, 33, 'researcher', [
      sub('Current Docs', 'tool'), sub('Library Research', 'workflow'), sub('Repo Grep', 'tool'), sub('Options Brief', 'memory')
    ]),
    agentNode('design', 'Designer', 'agente-design.md', g.design, 'agent-assets/designer.jpg', 32, 24, 'design', [
      sub('Responsive Gate', 'rules'), sub('AI Slop Test', 'rules'), sub('world-class-web.md', 'workflow'), sub('Accessibility Gate', 'rules')
    ]),
    agentNode('product', 'Product', 'agente-product-founder.md', g.product, 'agent-assets/product.jpg', 18, 42, 'product', [
      sub('venture_loop.md', 'workflow'), sub('MVP Scope', 'rules'), sub('Kill / Keep / Scale', 'rules'), sub('Product Evidence', 'memory')
    ]),
    agentNode('docs', 'Docs', 'agente-docs.md', g.docs, 'agent-assets/docs.jpg', 22, 64, 'docs', [
      sub('README', 'tool'), sub('API Docs', 'workflow'), sub('Changelog', 'memory'), sub('Handoff', 'workflow')
    ]),
    agentNode('obsidian', 'Obsidian Brain', 'agente-obsidian-brain.md', g.obsidian, 'agent-assets/content.jpg', 18, 63, 'obsidian', [
      sub('obsidian_sync.md', 'workflow'), sub('vault_review.md', 'workflow'), sub('MOCs', 'memory'), sub('Lessons', 'memory')
    ]),
    agentNode('tests', 'QA', 'agente-tests.md', g.tests, 'agent-assets/qa.jpg', 40, 83, 'tests', [
      sub('Playwright E2E', 'tool'), sub('Unit Tests', 'tool'), sub('Coverage', 'rules'), sub('Regression Evidence', 'memory')
    ]),
    agentNode('security', 'Security', 'agente-security-auditor.md', g.security, 'agent-assets/security.jpg', 63, 74, 'security', [
      sub('Secret Scan', 'tool'), sub('mcp_security.md', 'workflow'), sub('Permission Boundaries', 'rules'), sub('Repo Safety', 'workflow')
    ]),
    agentNode('growth', 'Growth', 'agente-growth-seo-geo.md', g.growth, 'agent-assets/growth.jpg', 82, 60, 'growth', [
      sub('seo_geo_growth.md', 'workflow'), sub('AEO / GEO', 'rules'), sub('Opportunity Map', 'memory'), sub('Programmatic SEO', 'workflow')
    ]),
    agentNode('seo', 'SEO Tech', 'agente-seo.md', g.seo, 'agent-assets/seo.jpg', 90, 48, 'seo', [
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
    agentNode('reviewer', 'Code Reviewer', 'agente-code-reviewer.md', g.reviewer, 'agent-assets/code-reviewer.jpg', 46, 89, 'reviewer', [
      sub('pr_code_review.md', 'workflow'), sub('Residual Risks', 'rules'), sub('Scope Check', 'rules'), sub('Review Verdict', 'memory')
    ]),
    agentNode('release', 'Release Manager', 'agente-release-manager.md', g.release, 'agent-assets/release-manager.jpg', 28, 90, 'release', [
      sub('pr_policy.md', 'workflow'), sub('Changelog', 'memory'), sub('Install Checks', 'tool'), sub('Release Checklist', 'rules')
    ]),
    agentNode('kickoff', 'Kickoff Architect', 'kickoff-architect.md', g.kickoff, 'agent-assets/kickoff-architect.jpg', 15, 15, 'kickoff', [
      sub('project_kickoff_lean.md', 'workflow'), sub('First Milestone', 'rules'), sub('Intensity Level', 'rules')
    ]),
    agentNode('pruner', 'Workflow Pruner', 'workflow-pruner.md', g.pruner, 'agent-assets/workflow-pruner.jpg', 63, 87, 'pruner', [
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
    workflow('world-class-web', es ? 'World-Class Web' : 'World-Class Web', false, es ? 'Brief -> Design -> Polish -> Responsive -> Evidence' : 'Brief -> Design -> Polish -> Responsive -> Evidence', [
      step('user', 'principal', '[Brief]', es ? 'Definiendo intencion, audiencia y criterio de exito' : 'Defining intent, audience and success criteria'),
      step('principal', 'design', '[Direction]', es ? 'Eligiendo direccion visual y jerarquia' : 'Choosing visual direction and hierarchy'),
      step('design', 'tests', '[Responsive]', es ? 'Probando desktop, tablet y mobile' : 'Testing desktop, tablet and mobile'),
      step('tests', 'gate', '[Evidence]', es ? 'Guardando evidencia antes de cerrar' : 'Saving evidence before closing', '#10b981')
    ]),
    workflow('parallel-agents', es ? 'Parallel Agents' : 'Parallel Agents', true, es ? 'Director -> tareas independientes -> revisión -> integración' : 'Director -> independent tasks -> review -> integration', [
      step('principal', 'researcher', '[Research]', es ? 'Investigacion independiente de opciones' : 'Independent options research'),
      step('principal', 'design', '[Design]', es ? 'Exploracion visual independiente' : 'Independent visual exploration'),
      step('principal', 'security', '[Risk]', es ? 'Revisión de riesgos en paralelo' : 'Parallel risk review'),
      step('reviewer', 'principal', '[Integrate]', es ? 'Integrando conclusiones con criterio humano' : 'Integrating conclusions with human judgment', '#10b981')
    ]),
    workflow('tech-radar', es ? 'Decision Tech Radar' : 'Tech Radar Decision', false, es ? 'Necesidad -> Radar -> Research -> Architect -> Adopt / Trial / Assess / Hold' : 'Need -> Radar -> Research -> Architect -> Adopt / Trial / Assess / Hold', [
      step('user', 'principal', '[Need]', es ? 'Nueva tecnologia entra al sistema' : 'New technology request enters the system'),
      step('principal', 'techradar', '[Radar]', es ? 'Consultando estado ADOPT/TRIAL/ASSESS/HOLD' : 'Checking ADOPT/TRIAL/ASSESS/HOLD status'),
      step('techradar', 'researcher', '[Evidence]', es ? 'Investigando docs o alternativas si hace falta' : 'Researching docs or alternatives if needed'),
      step('researcher', 'architect', '[Decision]', es ? 'Eligiendo la capa minima production-ready' : 'Choosing the smallest production-ready layer'),
      step('architect', 'principal', '[Route]', es ? 'Devolviendo recomendacion adopt/trial/assess/hold' : 'Returning adopt/trial/assess/hold recommendation', '#10b981')
    ])
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
      principal: 'ORQUESTADOR / CORE DEV',
      mcp: 'INTEGRACION DE TOOLS',
      architect: 'RAG / SISTEMAS LLM',
      researcher: 'RESEARCH / DOCS',
      growth: 'SEO / GEO / AEO',
      seo: 'SEO TÉCNICO',
      security: 'SEGURIDAD / AUDIT',
      tests: 'TESTING / E2E / COVERAGE',
      reviewer: 'REVISIÓN / CALIDAD',
      obsidian: 'VAULT / MEMORIA',
      docs: 'DOCUMENTACIÓN TÉCNICA',
      product: 'PRODUCTO / MVP',
      design: 'UI / VISUAL / CSS',
      marketing: 'MARKETING / GTM',
      content: 'CONTENIDO / PERSONAL BRAND',
      academic: 'TUTOR ACADEMICO',
      release: 'RELEASE / PUBLICACION',
      kickoff: 'KICKOFF / MILESTONE',
      pruner: 'SIMPLIFICACION / TOKENS'
    }
    : {
      principal: 'ORCHESTRATOR / CORE DEV',
      mcp: 'TOOL INTEGRATION',
      architect: 'RAG / LLM SYSTEMS',
      researcher: 'RESEARCH / DOCS',
      growth: 'SEO / GEO / AEO',
      seo: 'ON-PAGE / TECHNICAL SEO',
      security: 'GUARDIAN / AUDIT',
      tests: 'TESTING / E2E / COVERAGE',
      reviewer: 'PR REVIEW / QUALITY',
      obsidian: 'VAULT / MEMORY',
      docs: 'TECHNICAL DOCUMENTATION',
      product: 'FOUNDER / MVP BUILDER',
      design: 'UI / VISUAL / CSS',
      marketing: 'MARKETING / GTM',
      content: 'CONTENT / PERSONAL BRAND',
      academic: 'ACADEMIC TUTOR',
      release: 'RELEASE / PUBLISHING',
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
  
  const ratio = Math.max(1, window.devicePixelRatio || 1);
  [canvasUnder, canvasOver].forEach((canvas) => {
    canvas.width = Math.round(width * ratio);
    canvas.height = Math.round(height * ratio);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
  });
  [ctxUnder, ctxOver].forEach((ctx) => {
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
  
  animationFrameId = requestAnimationFrame(renderEcosystem);
}

function startEcosystemLoop() {
  if (animationFrameId) cancelAnimationFrame(animationFrameId);
  animationFrameId = requestAnimationFrame(renderEcosystem);
}

function stopEcosystemLoop() {
  if (animationFrameId) cancelAnimationFrame(animationFrameId);
  animationFrameId = null;
  stopWorkflow();
}
