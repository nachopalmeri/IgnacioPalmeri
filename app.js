// ═══════════════════ NAVIGATION & TABS ═══════════════════

document.addEventListener('DOMContentLoaded', () => {
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
      const validTabs = ['overview', 'projects', 'agents', 'vault'];
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
  system:     { c: '#71717a', s: 'rgba(113, 113, 122, 0.15)' }, // Gray
  gate:       { c: '#f59e0b', s: 'rgba(245, 158, 11, 0.15)' },   // Amber
  harness:    { c: '#a855f7', s: 'rgba(168, 85, 247, 0.15)' }  // Purple
};

const SYSTEM_ICONS = {
  user: `<svg viewBox="0 0 24 24" stroke="currentColor" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,
  rules: `<svg viewBox="0 0 24 24" stroke="currentColor" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>`,
  memory: `<svg viewBox="0 0 24 24" stroke="currentColor" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>`,
  gate: `<svg viewBox="0 0 24 24" stroke="currentColor" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
  harness: `<svg viewBox="0 0 24 24" stroke="currentColor" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>`
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
  setupData();
  
  // Render HTML Nodes
  buildNodes();
  
  // Event listeners
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);
  
  backBtn.addEventListener('click', collapseGraph);
  ecoVp.addEventListener('click', (e) => {
    if (selectedNodeId && !e.target.closest('.eco-node') && !e.target.closest('.sub-node') && !e.target.closest('#eco-hud')) {
      collapseGraph();
    }
  });

  ecoInitialized = true;
  startEcosystemLoop();
}

function setupData() {
  nodesData = [
    // ── 12 Active Agents (with consistent image paths) ──
    {
      id: 'principal', type: 'agent', name: 'Director', role: 'Orchestrator / Core Dev',
      desc: 'Central nervous system. Routes user intents, coordinates delegation hierarchies, manages local Git commits, checks validation reports, and handles automatic rollbacks on failure.',
      img: 'agent-assets/director.jpg', x: 50, y: 46, col: 'principal',
      subs: [
        { l: 'Task Routing', t: 'workflow' },
        { l: 'Agent Delegation', t: 'workflow' },
        { l: 'Error Recovery', t: 'workflow' },
        { l: 'Context Budgeting', t: 'memory' },
        { l: 'Git Handoffs', t: 'tool' },
        { l: 'Session Checkpoints', t: 'workflow' },
        { l: 'Workflow Pruner', t: 'rules' }
      ]
    },
    {
      id: 'architect', type: 'agent', name: 'AI Architect', role: 'LLM Systems / RAG',
      desc: 'Designs prompt templates, context assembly strategies, vector embedding pipelines, and semantic caches. Audits token consumption patterns to optimize performance and prevent degradation.',
      img: 'agent-assets/architect.jpg', x: 74, y: 22, col: 'architect',
      subs: [
        { l: 'Context Assembly', t: 'workflow' },
        { l: 'Prompt Templates', t: 'memory' },
        { l: 'Semantic Cache', t: 'tool' },
        { l: 'Token Guard', t: 'rules' },
        { l: 'Vector DB (gbrain)', t: 'tool' },
        { l: 'Golden Datasets', t: 'memory' }
      ]
    },
    {
      id: 'design', type: 'agent', name: 'Designer', role: 'UI / UX / CSS',
      desc: 'Enforces mobile-first responsive layout contracts, layouts systems, CSS variables, interactive triggers, dark mode tokens, and smooth, hardware-accelerated animations.',
      img: 'agent-assets/content.jpg', x: 26, y: 22, col: 'design',
      subs: [
        { l: 'Mobile-First Spec', t: 'rules' },
        { l: 'Design Tokens', t: 'memory' },
        { l: 'Transitions System', t: 'workflow' },
        { l: 'Glassmorphism', t: 'tool' },
        { l: 'Figma Token Sync', t: 'tool' },
        { l: 'A11y Standards', t: 'rules' }
      ]
    },
    {
      id: 'growth', type: 'agent', name: 'Growth', role: 'SEO / GEO Growth',
      desc: 'Formulates local SEO structures, citation builders, GEO ranking indicators for AI search engines, programmatic landings, and user metric loops using Mixpanel/GA4 integration.',
      img: 'agent-assets/growth.jpg', x: 88, y: 44, col: 'growth',
      subs: [
        { l: 'GEO Positioning', t: 'workflow' },
        { l: 'Programmatic Lands', t: 'workflow' },
        { l: 'Analytics SDKs', t: 'tool' },
        { l: 'Backlink Citations', t: 'memory' },
        { l: 'Intent Mapping', t: 'rules' }
      ]
    },
    {
      id: 'seo', type: 'agent', name: 'SEO Tech', role: 'On-Page Optimization',
      desc: 'Validates sitemap.xml, robots.txt, semantic HTML tags, JSON-LD Schema structures, canonical endpoints, and metadata layouts for maximum indexing efficiency.',
      img: 'agent-assets/marketing.jpg', x: 88, y: 62, col: 'seo',
      subs: [
        { l: 'JSON-LD Builder', t: 'tool' },
        { l: 'Heading Hierarchy', t: 'rules' },
        { l: 'Canonical Validator', t: 'workflow' },
        { l: 'Sitemap Auto-Gen', t: 'tool' },
        { l: 'Meta Tag Audit', t: 'workflow' }
      ]
    },
    {
      id: 'security', type: 'agent', name: 'Security', role: 'Audit / Shield',
      desc: 'Performs pre-commit code scans for hardcoded API credentials. Monitors dangerous command inputs, audits dependency CVE databases, and sets execution risk policies (Risk Levels 0-4).',
      img: 'agent-assets/security.jpg', x: 74, y: 74, col: 'security',
      subs: [
        { l: 'Credential Guard', t: 'tool' },
        { l: 'CVE Database Check', t: 'workflow' },
        { l: 'Execution Policies', t: 'rules' },
        { l: 'MCP Permission Model', t: 'rules' },
        { l: 'Semgrep Scanners', t: 'tool' }
      ]
    },
    {
      id: 'tests', type: 'agent', name: 'QA Reviewer', role: 'Browser / E2E',
      desc: 'Builds end-to-end user path validations using Playwright. Sets regression limits, writes assertions, and executes automated runs. Operates as read-only on the codebase.',
      img: 'agent-assets/reviewer.jpg', x: 26, y: 74, col: 'tests',
      subs: [
        { l: 'Playwright Runners', t: 'tool' },
        { l: 'Regression Checks', t: 'workflow' },
        { l: 'Test Mocks Creator', t: 'tool' },
        { l: 'Assertion Engines', t: 'memory' },
        { l: 'Coverage Gate', t: 'rules' }
      ]
    },
    {
      id: 'docs', type: 'agent', name: 'Docs Spec', role: 'Technical Writing',
      desc: 'Builds READMEs, JSDoc definitions, API routing schemas, setup guides, and synchronizes system status logs to the local Obsidian knowledge base.',
      img: 'agent-assets/content.jpg', x: 12, y: 54, col: 'docs',
      subs: [
        { l: 'Obsidian MOC Builder', t: 'tool' },
        { l: 'API Docs Compiler', t: 'workflow' },
        { l: 'Markdown Linting', t: 'rules' },
        { l: 'Changelog Tracking', t: 'memory' },
        { l: 'Setup Guide Specs', t: 'memory' }
      ]
    },
    {
      id: 'product', type: 'agent', name: 'Product Founder', role: 'MVP Strategy',
      desc: 'Coordinates product scoring across 9 dimensions, manages the Venture Loop, designs lean mockups, outlines customer acquisition milestones, and defines MVP kill/scale criteria.',
      img: 'agent-assets/product.jpg', x: 12, y: 26, col: 'product',
      subs: [
        { l: '9-D Scoring Grid', t: 'rules' },
        { l: 'Venture Roadmap', t: 'memory' },
        { l: 'Kill/Scale Triggers', t: 'rules' },
        { l: 'Acquisition Funnel', t: 'workflow' },
        { l: 'MVP Prototyper', t: 'tool' }
      ]
    },
    {
      id: 'mcp', type: 'agent', name: 'MCP Architect', role: 'Integrations Broker',
      desc: 'Secures and manages Model Context Protocol integrations. Verifies tool schemas, maintains risk levels, evaluates custom plugins, and governs secure system network access.',
      img: 'agent-assets/mcp.jpg', x: 50, y: 15, col: 'mcp',
      subs: [
        { l: 'Secure MCP Schema', t: 'rules' },
        { l: 'gbrain Vector Sync', t: 'tool' },
        { l: 'Plugin Sandbox', t: 'tool' },
        { l: 'Client Auth Broker', t: 'workflow' },
        { l: 'API Security Token', t: 'memory' }
      ]
    },
    {
      id: 'researcher', type: 'agent', name: 'Researcher', role: 'Intelligence / Search',
      desc: 'Leverages browser execution, web search engines, and local codebase grep queries to scan libraries, locate dependencies, analyze competitor solutions, and compile developer reports.',
      img: 'agent-assets/researcher.jpg', x: 88, y: 20, col: 'researcher',
      subs: [
        { l: 'Web Crawler Tools', t: 'tool' },
        { l: 'Library Explorer', t: 'workflow' },
        { l: 'Competitor Reports', t: 'memory' },
        { l: 'Grep Search Patterns', t: 'tool' },
        { l: 'Deep Search Engine', t: 'workflow' }
      ]
    },
    {
      id: 'reviewer', type: 'agent', name: 'Code Reviewer', role: 'PR Critic / Lint',
      desc: 'Examines code pull requests for static analysis warnings, stylistic anomalies, memory leaks, and alignment with the project rules. Executes refactoring instructions.',
      img: 'agent-assets/reviewer.jpg', x: 38, y: 80, col: 'reviewer',
      subs: [
        { l: 'Static Code Check', t: 'tool' },
        { l: 'Memory Leak Auditor', t: 'workflow' },
        { l: 'Refactor Suggestion', t: 'memory' },
        { l: 'Style Guide Lint', t: 'rules' },
        { l: 'PR Approval Verdict', t: 'workflow' }
      ]
    },

    // ── 5 System Components (Icons) ──
    {
      id: 'user', type: 'system', name: 'User Intent', role: 'External Input',
      desc: 'The starting point. Human developer queries, task specs, UI reviews, and workflow activations enter here.',
      icon: 'user', x: 50, y: 88, col: 'system',
      subs: []
    },
    {
      id: 'rules', type: 'system', name: 'AGENTS.md', role: 'System Rules',
      desc: 'Injected rules defining the system limits: Judgment Boundaries (NEVER/ASK/ALWAYS), active workflows, and system context limits.',
      icon: 'rules', x: 34, y: 40, col: 'system',
      subs: [
        { l: 'Judgment Boundary', t: 'rules' },
        { l: 'Workflow Router', t: 'workflow' },
        { l: 'Context Limit', t: 'memory' },
        { l: 'ARCH_DECISIONS', t: 'memory' }
      ]
    },
    {
      id: 'memory', type: 'system', name: 'lessons.md', role: 'Persisted Memory',
      desc: 'Local and global engrams saved across runtime sessions. Captures past routing, quality, and output mistakes to avoid repeating them.',
      icon: 'memory', x: 38, y: 58, col: 'system',
      subs: [
        { l: 'Local Lessons', t: 'memory' },
        { l: 'Global Lessons', t: 'memory' },
        { l: 'Rule Promotion', t: 'workflow' },
        { l: 'Engram postgres', t: 'tool' }
      ]
    },
    {
      id: 'gate', type: 'system', name: 'validation.md', role: 'Quality Gate',
      desc: 'Validates code before shipping. Criteria: All Playwright tests must pass, linters must return clean, and test count must not decrease.',
      icon: 'gate', x: 62, y: 58, col: 'gate',
      subs: [
        { l: 'Exit Criteria', t: 'rules' },
        { l: 'Test Count Assert', t: 'workflow' },
        { l: 'Secret Check', t: 'tool' },
        { l: 'Human Verdict', t: 'rules' }
      ]
    },
    {
      id: 'harness', type: 'system', name: 'Harness', role: 'Self-Improvement',
      desc: 'Background daemon checking session runs. Catches syntax, security, or structural errors, writing lessons to update rules.',
      icon: 'harness', x: 50, y: 66, col: 'harness',
      subs: [
        { l: 'Error Capture', t: 'workflow' },
        { l: 'Pattern Detect', t: 'workflow' },
        { l: 'feedback_loop.md', t: 'workflow' },
        { l: 'Rule Update', t: 'workflow' }
      ]
    }
  ];

  linksData = [
    // Director Hub and Spoke
    ['principal', 'architect'], ['principal', 'design'], ['principal', 'growth'],
    ['principal', 'security'], ['principal', 'tests'], ['principal', 'docs'],
    ['principal', 'product'], ['principal', 'mcp'], ['principal', 'seo'],
    ['principal', 'researcher'], ['principal', 'reviewer'],
    
    // Cross Collaborations
    ['architect', 'security'], ['architect', 'tests'], ['architect', 'mcp'], ['architect', 'researcher'],
    ['growth', 'seo'], ['growth', 'product'],
    ['security', 'tests'], ['product', 'design'], ['tests', 'reviewer'], ['design', 'docs'],
    
    // System wiring
    ['user', 'principal'], ['rules', 'principal'], ['memory', 'principal'],
    ['tests', 'gate'], ['reviewer', 'gate'], ['security', 'gate'],
    ['gate', 'harness'], ['harness', 'memory']
  ];

  workflowsData = [
    {
      id: 'feature', name: 'Feature Implementation', isLoop: false,
      desc: 'User Query → Tech Specs → UI Design → PR Checks → QA Gate → Ship',
      seq: [
        { f: 'user', t: 'principal', lbl: '[Query input]', act: 'Parsing request and planning delegation' },
        { f: 'rules', t: 'principal', lbl: '[Load Rules]', act: 'Applying code style and constraints' },
        { f: 'principal', t: 'architect', lbl: '[Architect spec]', act: 'Designing DB scheme and RAG nodes' },
        { f: 'architect', t: 'researcher', lbl: '[API Search]', act: 'Scanning dependencies and official specs' },
        { f: 'principal', t: 'design', lbl: '[UI Design]', act: 'Drafting responsive layout variables' },
        { f: 'design', t: 'reviewer', lbl: '[Code Check]', act: 'Verifying layout CSS nesting guidelines' },
        { f: 'reviewer', t: 'tests', lbl: '[QA Prep]', act: 'Creating Vitest assertions and mocks' },
        { f: 'tests', t: 'gate', lbl: '[Run E2E]', act: 'Executing Playwright browser suite' },
        { f: 'security', t: 'gate', lbl: '[Credentials]', act: 'Verifying pre-commit API key shield' },
        { f: 'gate', t: 'principal', lbl: '[Luz Verde ✓]', col: '#10b981', act: 'Success: Code merged and pushed to GitHub' }
      ]
    },
    {
      id: 'learning-loop', name: 'Self-Correction Loop', isLoop: true,
      desc: 'Audit Fail → Harness capture → lessons.md log → Global promotion',
      seq: [
        { f: 'user', t: 'principal', lbl: '[User intent]', act: 'Initiating codebase edit' },
        { f: 'rules', t: 'principal', lbl: '[Check constraints]', act: 'Verifying security guidelines' },
        { f: 'principal', t: 'security', lbl: '[Audit request]', act: 'Scanning repository for secrets' },
        { f: 'security', t: 'gate', lbl: '[Fail: Token!]', col: '#ef4444', act: 'REJECTED: Hardcoded connection token detected' },
        { f: 'gate', t: 'harness', lbl: '[Log event]', col: '#a855f7', act: 'Harness compiling failure metadata' },
        { f: 'harness', t: 'memory', lbl: '[Save Lesson]', col: '#a855f7', act: 'Writing lesson: "Strictly block raw credentials in git"' },
        { f: 'memory', t: 'principal', lbl: '[Re-inject rule]', col: '#3b82f6', act: 'Director loading updated lessons' },
        { f: 'principal', t: 'security', lbl: '[Clean run]', act: 'Applying environment variables to build' },
        { f: 'security', t: 'gate', lbl: '[Verify clean]', act: 'Credentials scanner report: 0 secrets' },
        { f: 'gate', t: 'principal', lbl: '[Luz Verde ✓]', col: '#10b981', act: 'Success: Harness auto-cleared build' }
      ]
    },
    {
      id: 'growth-flow', name: 'Organic Growth Pipeline', isLoop: false,
      desc: 'Market Search → Programmatic landing → SEO audit → Publish',
      seq: [
        { f: 'user', t: 'principal', lbl: '[Growth Brief]', act: 'Coordinating growth strategy' },
        { f: 'principal', t: 'growth', lbl: '[Market specs]', act: 'Analyzing competitor indexing keywords' },
        { f: 'growth', t: 'seo', lbl: '[Schema markup]', act: 'Generating JSON-LD structured data' },
        { f: 'seo', t: 'docs', lbl: '[Write landing]', act: 'Updating pages sitemap and index list' },
        { f: 'docs', t: 'security', lbl: '[Risk Audit]', act: 'Auditing page inputs and external resources' },
        { f: 'security', t: 'gate', lbl: '[Passed checks]', act: 'Sitemap integrity checks completed' },
        { f: 'gate', t: 'principal', lbl: '[Shipped ✓]', col: '#10b981', act: 'Live: Programmatic pages indexed' }
      ]
    },
    {
      id: 'product-launch', name: 'Product Venture Loop', isLoop: false,
      desc: 'Opportunity score → MVP mockup → Landing launch → Acquisition test',
      seq: [
        { f: 'user', t: 'principal', lbl: '[New Idea]', act: 'Evaluating new MVP opportunity' },
        { f: 'principal', t: 'product', lbl: '[9-D Score]', act: 'Scoring project variables' },
        { f: 'product', t: 'design', lbl: '[Wireframe spec]', act: 'Drafting minimal landing mockup' },
        { f: 'design', t: 'growth', lbl: '[Funnel set]', act: 'Wiring user action tracker script' },
        { f: 'growth', t: 'security', lbl: '[GDPR check]', act: 'Verifying data tracking privacy guidelines' },
        { f: 'security', t: 'gate', lbl: '[Audit clean]', act: 'All launch checkpoints verified' },
        { f: 'gate', t: 'principal', lbl: '[Live ✓]', col: '#10b981', act: 'Success: MVP landing live' }
      ]
    },
    {
      id: 'review-loop', name: 'Multi-Agent Review Loop', isLoop: true,
      desc: 'PR Init → Performance Critic → Concurrency Red Team → Roadmap',
      seq: [
        { f: 'principal', t: 'architect', lbl: '[Proposal]', act: 'Proposing complex database migration' },
        { f: 'architect', t: 'reviewer', lbl: '[Check PR]', act: 'Evaluating database indexing constraints' },
        { f: 'reviewer', t: 'security', lbl: '[Simulate load]', act: 'Assessing connection pool lock risks' },
        { f: 'security', t: 'reviewer', lbl: '[Lock Alert!]', col: '#ef4444', act: 'Warning: Concurrency deadlocks detected' },
        { f: 'reviewer', t: 'architect', lbl: '[Refactor DB]', col: '#a855f7', act: 'Rewriting pool timeout limits' },
        { f: 'architect', t: 'gate', lbl: '[Verify fix]', act: 'Running regression simulation tests' },
        { f: 'gate', t: 'principal', lbl: '[Luz Verde ✓]', col: '#10b981', act: 'Success: Multi-agent review loop approved' }
      ]
    },
    {
      id: 'session-start', name: 'Session Initialization', isLoop: false,
      desc: 'lessons.md load → Rule injection → Director active → System Check',
      seq: [
        { f: 'memory', t: 'rules', lbl: '[Promote rule]', act: 'Promoting local memory lessons to global rules' },
        { f: 'rules', t: 'principal', lbl: '[Inject context]', act: 'Loading active project instructions' },
        { f: 'principal', t: 'docs', lbl: '[Obsidian sync]', act: 'Verifying vault efforts MOC status' },
        { f: 'principal', t: 'gate', lbl: '[Status check]', act: 'Validating token budget thresholds' },
        { f: 'gate', t: 'principal', lbl: '[System Ready]', col: '#10b981', act: 'Ecosystem fully online' }
      ]
    }
  ];
}

function buildNodes() {
  ecoGraphWrapper.innerHTML = '';
  
  nodesData.forEach(node => {
    const col = ACCENT_COLORS[node.col];
    const nodeEl = document.createElement('div');
    nodeEl.className = node.type === 'system' ? 'eco-node system-node' : 'eco-node';
    nodeEl.style.left = `${node.x}%`;
    nodeEl.style.top = `${node.y}%`;
    nodeEl.setAttribute('data-id', node.id);
    nodeEl.style.setProperty('--active-color', col.c);
    nodeEl.style.setProperty('--shadow-color', col.s);
    
    let bubbleContent = '';
    if (node.type === 'agent') {
      bubbleContent = `<div class="node-bubble"><img src="${node.img}" alt="${node.name}" onerror="handleImgError(this, '${col.c}')"></div>`;
    } else {
      bubbleContent = `<div class="node-bubble" style="color:${col.c}; border-color:${col.c}33;">${SYSTEM_ICONS[node.icon]}</div>`;
    }
    
    nodeEl.innerHTML = `
      ${bubbleContent}
      <div class="node-info">
        <div class="node-name">${node.name}</div>
        <div class="node-role">${node.role}</div>
      </div>
    `;
    
    // Interactions
    nodeEl.addEventListener('click', (e) => {
      e.stopPropagation();
      if (activeWorkflow) stopWorkflow();
      expandNode(node.id);
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

  // Build workflows UI list
  wfList.innerHTML = '';
  workflowsData.forEach(wf => {
    const wfEl = document.createElement('div');
    wfEl.className = `wf-item ${wf.isLoop ? 'loop' : ''}`;
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
  linksData.forEach(([fromId, toId]) => {
    // 3 ambient particles per connection path
    for (let i = 0; i < 3; i++) {
      ambientParticles.push({
        from: fromId,
        to: toId,
        t: Math.random(),
        speed: 0.0003 + Math.random() * 0.0006,
        size: 1 + Math.random() * 1.5,
        alpha: 0.15 + Math.random() * 0.35,
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
  width = rect.width;
  height = rect.height;
  
  canvasUnder.width = width;
  canvasUnder.height = height;
  canvasOver.width = width;
  canvasOver.height = height;
}

// ═══════════════════ COORDINATE MATH ═══════════════════

function getNodeCoords(nodeId) {
  const node = nodesData.find(n => n.id === nodeId);
  if (!node || !node.el) return { x: 0, y: 0 };
  
  // Find position based on percentage layout of parent
  const x = (node.x / 100) * width;
  const y = (node.y / 100) * height;
  return { x, y };
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
  const col = ACCENT_COLORS[node.col];
  hudDot.style.color = col.c;
  hudDot.style.background = col.c;
  hudDot.style.boxShadow = `0 0 8px ${col.c}`;
  hudName.textContent = node.name;
  hudRole.textContent = node.role;
  hudRole.style.color = col.c;
  hudBody.textContent = node.desc;
  
  const connectionCount = linksData.filter(l => l[0] === node.id || l[1] === node.id).length;
  hudMeta.innerHTML = `
    <span style="display:inline-block; width:6px; height:6px; border-radius:50%; background:${col.c}; margin-right:6px;"></span>
    ${node.subs.length} sub-nodes · ${connectionCount} connections
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
  backBtn.classList.add('active');
  statsBadge.classList.add('faded');
  wfpPanel.classList.add('faded');
  ecoHint.classList.add('faded');
  
  // Stagger node updates (selected vs faded)
  nodesData.forEach(n => {
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
  
  backBtn.classList.remove('active');
  statsBadge.classList.remove('faded');
  wfpPanel.classList.remove('faded');
  ecoHint.classList.remove('faded');
  
  nodesData.forEach(n => {
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
  
  const col = ACCENT_COLORS[node.col];
  const subRadius = Math.min(220, Math.min(width, height) * 0.28);
  
  node.subs.forEach((sub, i) => {
    // Distribute sub-nodes in a circle around the parent node
    const angle = (i / node.subs.length) * Math.PI * 2 - Math.PI / 2;
    const subX = Math.cos(angle) * subRadius;
    const subY = Math.sin(angle) * subRadius;
    
    const subEl = document.createElement('div');
    subEl.className = `sub-node type-${sub.t}`;
    subEl.style.setProperty('--sub-color', col.c);
    subEl.style.setProperty('--sub-shadow', col.s);
    
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
    item.uiEl.classList.toggle('active', item.id === wf.id);
  });
  
  statsBadge.classList.add('faded');
  ecoHint.classList.add('faded');
  executeWorkflowStep(0);
}

function stopWorkflow() {
  activeWorkflow = null;
  if (workflowTimeout) clearTimeout(workflowTimeout);
  
  stagePanel.classList.remove('active');
  activeWfParticles = [];
  
  // Clear highlighting and fades
  nodesData.forEach(node => {
    node.el.classList.remove('faded');
    const bubble = node.el.querySelector('.node-bubble');
    bubble.style.boxShadow = '';
    bubble.style.borderColor = '';
  });
  
  workflowsData.forEach(item => {
    item.uiEl.classList.remove('active');
  });
  
  statsBadge.classList.remove('faded');
  ecoHint.classList.remove('faded');
}

function executeWorkflowStep(stepIndex) {
  if (!activeWorkflow) return;
  
  const seq = activeWorkflow.seq;
  
  // If workflow completes
  if (stepIndex >= seq.length) {
    stageBadge.textContent = 'COMPLETE';
    stageBadge.style.background = '#10b981';
    stageBadge.style.boxShadow = '0 0 10px rgba(16,185,129,0.3)';
    stageText.textContent = activeWorkflow.isLoop 
      ? 'Automejora completada: Sistema adaptado' 
      : 'Ecosistema validado: Despliegue completado';
    stageStep.textContent = 'Listo ✓';
    
    // Highlight all participating nodes at the end
    const uniqueIds = [...new Set(seq.flatMap(s => [s.f, s.t]))];
    uniqueIds.forEach(id => {
      const node = nodesData.find(n => n.id === id);
      if (node) {
        const bubble = node.el.querySelector('.node-bubble');
        const col = ACCENT_COLORS[node.col].c;
        bubble.style.boxShadow = `0 0 25px ${col}55`;
      }
    });
    
    workflowTimeout = setTimeout(stopWorkflow, 4000);
    return;
  }
  
  const step = seq[stepIndex];
  const sourceNode = nodesData.find(n => n.id === step.f);
  const targetNode = nodesData.find(n => n.id === step.t);
  
  const stepColor = step.col || (targetNode ? ACCENT_COLORS[targetNode.col].c : '#ffffff');
  
  // Update floating stage controls
  stageBadge.textContent = targetNode ? targetNode.name : 'System';
  stageBadge.style.background = stepColor;
  stageBadge.style.boxShadow = `0 0 10px ${stepColor}33`;
  stageText.textContent = step.act;
  stageStep.textContent = `Paso ${stepIndex + 1} de ${seq.length}`;
  stagePanel.classList.add('active');
  
  // Fade non-participants in the active step
  nodesData.forEach(node => {
    if (node.id === step.f || node.id === step.t) {
      node.el.classList.remove('faded');
      if (node.id === step.t) {
        const bubble = node.el.querySelector('.node-bubble');
        bubble.style.boxShadow = `0 0 30px ${stepColor}77`;
        bubble.style.borderColor = stepColor;
      }
    } else {
      // Fade if not in this active link transition
      node.el.classList.add('faded');
      const bubble = node.el.querySelector('.node-bubble');
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
    linksData.forEach(([fromId, toId]) => {
      const p1 = getNodeCoords(fromId);
      const p2 = getNodeCoords(toId);
      const cps = getControlPoints(p1, p2);
      
      const isHoveredLink = (hoveredNodeId === fromId || hoveredNodeId === toId);
      
      const fromNode = nodesData.find(n => n.id === fromId);
      const toNode = nodesData.find(n => n.id === toId);
      
      const color1 = ACCENT_COLORS[fromNode.col].c;
      const color2 = ACCENT_COLORS[toNode.col].c;
      
      const grad = ctxUnder.createLinearGradient(p1.x, p1.y, p2.x, p2.y);
      grad.addColorStop(0, color1);
      grad.addColorStop(1, color2);
      
      ctxUnder.strokeStyle = grad;
      ctxUnder.lineWidth = isHoveredLink ? 2.5 : 1.2;
      
      // V7 Alive Connections: breathing opacity (sinusoidal pulse)
      const baseAlpha = isHoveredLink ? 0.65 : 0.18;
      const breathingPulse = Math.sin(timestamp * 0.0015 + (p1.x + p1.y) * 0.001) * 0.06;
      ctxUnder.globalAlpha = Math.max(0.08, baseAlpha + breathingPulse);
      
      // Draw bezier link curve
      ctxUnder.beginPath();
      ctxUnder.moveTo(p1.x, p1.y);
      ctxUnder.bezierCurveTo(cps.c1.x, cps.c1.y, cps.c2.x, cps.c2.y, p2.x, p2.y);
      ctxUnder.stroke();
      
      // Connection glow on hover
      if (isHoveredLink) {
        ctxUnder.lineWidth = 7;
        ctxUnder.globalAlpha = 0.12;
        ctxUnder.beginPath();
        ctxUnder.moveTo(p1.x, p1.y);
        ctxUnder.bezierCurveTo(cps.c1.x, cps.c1.y, cps.c2.x, cps.c2.y, p2.x, p2.y);
        ctxUnder.stroke();
      }
      ctxUnder.globalAlpha = 1.0;
    });
    
    // RENDER AMBIENT TRAFFIC PARTICLES
    ambientParticles.forEach(p => {
      const p1 = getNodeCoords(p.from);
      const p2 = getNodeCoords(p.to);
      const cps = getControlPoints(p1, p2);
      
      // Animate progress
      p.t += p.speed * p.direction;
      if (p.t > 1) p.t = 0;
      if (p.t < 0) p.t = 1;
      
      const pt = bezierPoint(p1, cps.c1, cps.c2, p2, p.t);
      const isHoverLink = (hoveredNodeId === p.from || hoveredNodeId === p.to);
      
      ctxUnder.beginPath();
      ctxUnder.arc(pt.x, pt.y, p.size, 0, Math.PI * 2);
      ctxUnder.fillStyle = isHoverLink ? '#ffffff' : ACCENT_COLORS[nodesData.find(n => n.id === p.from).col].c;
      ctxUnder.globalAlpha = isHoverLink ? 0.85 : p.alpha;
      ctxUnder.fill();
      ctxUnder.globalAlpha = 1.0;
    });
  }
  
  // 2. RENDER SUB-UNIVERSE INNER-LINK CURVES
  if (isZoomed) {
    const parentNode = nodesData.find(n => n.id === selectedNodeId);
    const pCoords = getNodeCoords(selectedNodeId);
    const parentColor = ACCENT_COLORS[parentNode.col].c;
    
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
