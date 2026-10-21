(function () {
  const latestUpdates = [
    {
      source: "Axios",
      date: "2026-10-21",
      displayDate: "October 21, 2026",
      category: "new-models",
      companies: ["OpenAI", "Google Cloud", "Codex", "Enterprise AI"],
      title: "OpenAI Brings Frontier Models and Codex to Google Cloud",
      url: "https://www.axios.com/2026/10/21/openai-google-cloud-ai-models",
      summary: "Axios reports that Google Cloud customers will be able to buy OpenAI frontier models through Model Garden and Marketplace, extending OpenAI's reach across the three largest U.S. cloud providers. Google's launch post says selected enterprise customers can already access GPT-Astra, GPT-6.1 Sol, and GPT-6 Luna in private preview and connect local Codex CLI and Desktop workflows to the Gemini platform, with broader integrations still coming soon."
    },
    {
      source: "Axios",
      date: "2026-10-21",
      displayDate: "October 21, 2026",
      category: "mythos-news",
      companies: ["OpenCode", "Cybersecurity", "AI Guardrails", "Incident Response"],
      title: "AI Safety Guardrails Can Also Slow Defensive Incident Response",
      url: "https://www.axios.com/2026/10/21/when-ai-models-refuse-to-fight-hackers",
      summary: "Axios reports that OpenCode said attackers obtained some customer API keys and that frontier models began refusing help during the ensuing investigation. The account highlights a real workflow tension: abuse controls can constrain defenders during a live incident, so security teams need tested escalation paths, alternate tools, careful access controls, and human incident leadership rather than assuming one model will remain available."
    },
    {
      source: "Axios",
      date: "2026-10-20",
      displayDate: "October 20, 2026",
      category: "ai-general-news",
      companies: ["OpenAI", "Orchestra Bio", "Rosalind", "Life Sciences"],
      title: "OpenAI Acquires Orchestra Bio for Agent-Based Drug Development",
      url: "https://www.axios.com/2026/10/20/exclusive-openai-biotech-startup-drug-development",
      summary: "Axios reports that OpenAI acquired Orchestra Bio and plans to integrate its team and agent-based drug-development workflow technology into Rosalind. Orchestra's platform delegates tasks such as study monitoring, timeline tracking, and delay detection to agents; financial terms were not disclosed, and the acquisition does not establish clinical outcomes."
    }
  ];

  const existingItems = Array.isArray(window.newsFeed) ? window.newsFeed : [];
  const existingKeys = new Set(existingItems.map((item) => item && (item.url || item.title)).filter(Boolean));
  window.newsFeed = [...latestUpdates.filter((item) => !existingKeys.has(item.url || item.title)), ...existingItems];
})();
