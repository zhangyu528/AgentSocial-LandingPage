export const navigationData = {
  links: [
    { label: "Features", href: "#features" },
    { label: "Interactive Demo", href: "#demo" },
    { label: "Workflow", href: "#how-it-works" },
    { label: "Docs", href: "#" },
  ],
  cta: {
    cliLabel: "CLI",
    startLabel: "Get Started",
  },
};

export const heroData = {
  badge: "Now supporting Gemini 1.5 & Claude 3.5",
  title: {
    main: "Give Your AI Agent a ",
    highlight: "Social Identity",
  },
  description: "The seamless bridge between your terminal-bound AI agents and Feishu/Lark collaboration. Move from isolated CLI prompts to team-wide collaborative execution.",
  cta: {
    github: "Get Started on GitHub",
    demo: "View Demo",
  },
};

export const featuresData = {
  title: "Engineered for Enterprise Control",
  subtitle: "Bridge the gap between raw AI power and human-centric workflows without sacrificing security.",
  items: [
    {
      icon: "public",
      title: "Social Connection",
      description: "Native Feishu/Lark integration for real-time AI interaction within your existing team channels. No new tools required.",
    },
    {
      icon: "shield_person",
      title: "Security First",
      description: "Human-in-the-loop 'Plan-Approve-Execute' architecture ensuring you remain in total control of every sensitive action.",
    },
    {
      icon: "layers_clear",
      title: "Session Isolation",
      description: "Dedicated, sandboxed environments for every agent conversation to prevent context leakage and ensure absolute privacy.",
    },
  ],
};

export const demoData = {
  feishu: {
    title: "Feishu Messenger",
    subtitle: "Lark Protocol Interface",
    userMessage: "Agent, please deploy the latest staging hotfix for the auth module.",
    agentPlan: {
      title: "Agent Execution Plan",
      steps: [
        "1. Git checkout main-staging",
        "2. Apply patch #99201",
        "3. Run pre-deployment tests",
      ],
      actions: ["Approve & Execute", "Modify"],
    },
  },
  terminal: {
    title: "TERMINAL_BRIDGE_OUTPUT",
    logs: [
      { time: "09:44:12", type: "WEBHOOK", content: "POST /approve - Status 200", color: "text-primary" },
      { time: "09:44:13", type: "COMMAND", content: "git fetch origin staging...", color: "text-white" },
      { time: "09:44:15", type: "SUCCESS", content: "Branch updated.", color: "text-slate-500" },
      { time: "09:44:17", type: "AGENT", content: "Deploying patch #99201", color: "text-primary" },
      { time: "09:44:20", type: "SYSTEM", content: "Verifying SHA checksum...", color: "text-slate-400 italic" },
    ],
  },
};

export const workflowData = {
  title: "Implementation in Seconds",
  subtitle: "A streamlined flow from your local machine to enterprise collaboration.",
  steps: [
    {
      icon: "download",
      title: "1. Setup CLI",
      description: "Install the AgentSocial CLI bridge and link your favorite AI provider keys.",
      active: true,
    },
    {
      icon: "cable",
      title: "2. Connect Feishu",
      description: "Initialize the Lark webhook or use our native app connector in one command.",
      active: false,
    },
    {
      icon: "assignment_ind",
      title: "3. Delegate Tasks",
      description: "Mention your agent in any group chat to trigger complex multi-step workflows.",
      active: false,
    },
    {
      icon: "task_alt",
      title: "4. Approve & Run",
      description: "Review the generated execution plan on a social card and click to run safely.",
      active: false,
    },
  ],
};

export const technicalData = {
  title: "Technical Architecture",
  tags: [
    { icon: "javascript", label: "Node.js v18+" },
    { icon: "swap_calls", label: "WebSocket Proxy" },
    { icon: "psychology", label: "Claude 3.5 Sonnet" },
    { icon: "cloud", label: "Gemini 1.5 Pro" },
    { icon: "security", label: "AES-256 Auth" },
  ],
  description: "AgentSocial is built as a lightweight, non-custodial middleware. Your keys never leave your environment, and communication is secured via end-to-end encrypted tunnels.",
  cta: "Ready to collaborate?",
  button: "Fork on GitHub",
  version: "v1.4.2-stable",
};

export const footerData = {
  brand: "AgentSocial",
  license: "MIT LICENSE",
  links: ["GitHub", "Documentation", "Security Audit", "Contact"],
  copyright: "© 2024 AgentSocial Open Source Project.",
};
