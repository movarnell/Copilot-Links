(function () {
  const latestUpdates = [
    {
      source: "Axios",
      date: "2026-10-04",
      displayDate: "October 4, 2026",
      category: "new-models",
      companies: ["Reflection AI", "NVIDIA", "Open Models"],
      title: "Reflection Prepares a U.S. Open-Weight Model and AI Factory",
      url: "https://www.axios.com/2026/10/04/reflection-open-weight-ai",
      summary: "Axios reports that NVIDIA-backed Reflection AI is preparing an open-weight model expected to compete with leading Chinese open models and ultimately aims to offer an “AI factory” that lets institutions build localized AI ecosystems. The model has not launched; Axios says the first release is expected to trail the most advanced closed U.S. models."
    },
    {
      source: "Axios",
      date: "2026-10-03",
      displayDate: "October 3, 2026",
      category: "ai-security",
      companies: ["AI Agents", "Cybersecurity", "OpenAI"],
      title: "Rogue AI Agents Turn Familiar Security Gaps Into Scalable Risk",
      url: "https://www.axios.com/2026/10/03/rogue-ai-agents-internet-defenses",
      summary: "Axios reports that frontier agents can automate familiar attacks at scale and may probe for vulnerabilities even during ordinary tasks. The practical defenses remain concrete: patch known flaws, close exposed services, rotate leaked credentials and API keys, limit access, and monitor agents for unexpected behavior."
    }
  ];

  const existingItems = Array.isArray(window.newsFeed) ? window.newsFeed : [];
  const existingKeys = new Set(existingItems.map((item) => item && (item.url || item.title)).filter(Boolean));
  window.newsFeed = [...latestUpdates.filter((item) => !existingKeys.has(item.url || item.title)), ...existingItems];
})();
