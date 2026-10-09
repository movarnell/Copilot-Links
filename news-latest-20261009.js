(function () {
  const latestUpdates = [
    {
      source: "JetBrains",
      date: "2026-10-09",
      displayDate: "October 9, 2026",
      category: "models",
      companies: ["JetBrains", "Mellum", "Open Models", "Coding Agents"],
      title: "JetBrains Releases Mellum2.1 for Coding Agents",
      url: "https://blog.jetbrains.com/ai/2026/10/mellum2-1-gets-to-work-a-fast-open-model-for-coding-agents/",
      summary: "JetBrains released Mellum2.1, an Apache 2.0-licensed 12B mixture-of-experts model with 2.5B active parameters, for local coding-agent and subagent work. JetBrains says reinforcement learning across millions of sandboxed runs improved repository exploration, editing, and change checking; its speed and benchmark comparisons are vendor-reported results."
    },
    {
      source: "OpenAI",
      date: "2026-10-09",
      displayDate: "October 9, 2026",
      category: "ai-workflows",
      companies: ["OpenAI", "Sophos", "AI Agents", "Cybersecurity"],
      title: "Sophos Reports Faster Threat Investigations with OpenAI Daybreak Agents",
      url: "https://openai.com/index/sophos/",
      summary: "An OpenAI customer story says Sophos uses Daybreak agents to gather evidence and run a plan-execute-review investigation loop. Sophos reports that agent-assisted cases average 89 seconds instead of about 38 minutes and that 52% of managed-detection-and-response cases are resolved end to end by AI, while destructive or uncertain work remains subject to human oversight."
    },
    {
      source: "Anthropic",
      date: "2026-10-08",
      displayDate: "October 8, 2026",
      category: "ai-security",
      companies: ["Anthropic", "Claude", "Open Source", "Critical Infrastructure"],
      title: "Anthropic Launches Cyber Mission for Infrastructure and Open Source",
      url: "https://www.anthropic.com/news/anthropic-cyber-mission",
      summary: "Anthropic launched a Cyber Mission that pairs frontier Claude models, on-site engineers, and threat research with critical-infrastructure defenders, while offering open-source maintainers free recurring scans through OSS Scanner. Anthropic says the scanner sends model-generated findings without human review and is targeting a true-positive rate above 90%, so maintainers still need to verify and prioritize results."
    }
  ];

  const existingItems = Array.isArray(window.newsFeed) ? window.newsFeed : [];
  const existingKeys = new Set(existingItems.map((item) => item && (item.url || item.title)).filter(Boolean));
  window.newsFeed = [...latestUpdates.filter((item) => !existingKeys.has(item.url || item.title)), ...existingItems];
})();
