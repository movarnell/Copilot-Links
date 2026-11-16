(function () {
  const latestUpdates = [
    {
      source: "OpenAI",
      date: "2026-11-16",
      displayDate: "November 16, 2026",
      category: "ai-agents",
      companies: ["OpenAI", "Healthcare", "Computer use"],
      title: "OpenAI Reports Healthcare Computer-Use Agent Results and Deployment Controls",
      url: "https://openai.com/index/advancing-computer-use-for-healthcare-teams/",
      summary: "OpenAI published results and partner examples for computer-use agents that move between EHR and payer interfaces. In company-run reviews, physicians rated 99% of 325 tasks safe and 93% of 646 assessments very or extremely helpful; those results are not independent clinical validation, one percent of reviewed tasks was not rated safe, and the demonstration used synthetic patient data. OpenAI says deployments need scoped access, audit logs, validation, and human approval for consequential actions."
    },
    {
      source: "Axios",
      date: "2026-11-16",
      displayDate: "November 16, 2026",
      category: "ai-security",
      companies: ["AI Agents", "Identity", "Governance"],
      title: "Agent Accountability Starts with Scoped Identity and Real-Time Oversight",
      url: "https://www.axios.com/2026/11/16/ai-agent-accountability-safety-workforce",
      summary: "Axios describes a practical governance pattern for autonomous agents: give each agent a unique, temporary identity; limit its permissions to the task; define human intervention points; monitor behavior in real time; and keep a trusted audit trail. The framework is advice from SecureG's CEO rather than independent empirical research, but it offers concrete controls that teams can test before granting agents consequential access."
    },
    {
      source: "Anthropic",
      date: "2026-11-16",
      displayDate: "November 16, 2026",
      category: "ai-security",
      companies: ["Anthropic", "Cybersecurity", "Vulnerability disclosure"],
      title: "Anthropic Shortens Disclosure Timelines for AI-Discovered Vulnerabilities",
      url: "https://www.anthropic.com/research/coordinated-vulnerability-disclosure-timelines",
      summary: "Anthropic says that beginning January 1, 2027 it will target disclosure within 30 days for high- or critical-severity AI-discovered vulnerabilities and 45 days for other severities, while keeping a seven-day window for actively exploited flaws and involving an external coordinator after 15 days without vendor engagement. Human review remains required before outreach or publication, and the policy is Anthropic's process rather than an industry-wide standard."
    }
  ];

  const existingItems = Array.isArray(window.newsFeed) ? window.newsFeed : [];
  const existingKeys = new Set(existingItems.map((item) => item && (item.url || item.title)).filter(Boolean));
  window.newsFeed = [...latestUpdates.filter((item) => !existingKeys.has(item.url || item.title)), ...existingItems];
})();
