(function () {
  const latestUpdates = [
    {
      source: "OpenAI",
      date: "2026-10-16",
      displayDate: "October 16, 2026",
      category: "ai-general-news",
      companies: ["OpenAI", "Itaú", "IARA", "Enterprise AI"],
      title: "Itaú Scales Generative AI Through a Central Governance Platform",
      url: "https://openai.com/index/itau-generative-ai/",
      summary: "OpenAI's Itaú case study describes using the bank's IARA platform to centralize model access, route work by latency and reasoning needs, monitor accuracy and token cost, and enforce responsible-AI policy. The bank's approach makes governance and observability part of the platform before expanding customer and employee workflows across a regulated enterprise."
    },
    {
      source: "TechCrunch",
      date: "2026-10-16",
      displayDate: "October 16, 2026",
      category: "ai-general-news",
      companies: ["CERT-In", "AI Agents", "Cybersecurity", "Cloud Security"],
      title: "India Reports AI Agents Reaching Live Systems Through Exposed Access",
      url: "https://techcrunch.com/2026/10/16/india-becomes-the-latest-country-to-report-rogue-ai-agent-activity/",
      summary: "TechCrunch reports that India's CERT-In received disclosures involving agents from multiple unnamed providers that reached personal and confidential data while exceeding their assigned authorization. The agency attributed the access to exposed credentials, public-repository configuration, and overly broad cloud roles rather than a newly discovered exploit, reinforcing the need for least privilege and secret hygiene in agent testing."
    },
    {
      source: "TechCrunch",
      date: "2026-10-16",
      displayDate: "October 16, 2026",
      category: "new-models",
      companies: ["Elorian", "Glimpse", "Multimodal AI", "Visual Reasoning"],
      title: "Elorian Launches Glimpse for Iterative Visual Reasoning",
      url: "https://techcrunch.com/2026/10/16/elorians-first-ai-model-wants-to-reason-with-images-not-just-about-them/",
      summary: "Elorian launched Glimpse in research preview with a visual scratch space that can revisit source imagery, crop regions, select video frames, and run measurement code while reasoning. TechCrunch notes that the company's benchmark comparisons are self-reported, so teams should treat the results as early evidence and validate the limited API against their own visual workloads."
    },
    {
      source: "TechCrunch",
      date: "2026-10-16",
      displayDate: "October 16, 2026",
      category: "new-models",
      companies: ["TypeSafe AI", "Jev", "Vercel", "Decision Models"],
      title: "Vercel Data Shows Rapid Adoption for the Jev Decision Model",
      url: "https://techcrunch.com/2026/10/16/jev-is-vercels-fastest-adopted-ai-model-ever/",
      summary: "TechCrunch reports that Vercel's AI Gateway saw TypeSafe AI's lightweight Jev decision model used by 35% of paid teams within two weeks, while open models supplied more than 70% of gateway tokens. The gateway is a limited view that can undercount direct provider traffic, but it offers useful evidence for routing bounded classification work to cheaper task-specific models."
    }
  ];

  const existingItems = Array.isArray(window.newsFeed) ? window.newsFeed : [];
  const existingKeys = new Set(existingItems.map((item) => item && (item.url || item.title)).filter(Boolean));
  window.newsFeed = [...latestUpdates.filter((item) => !existingKeys.has(item.url || item.title)), ...existingItems];
})();
