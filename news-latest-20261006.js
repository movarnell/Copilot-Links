(function () {
  const latestUpdates = [
    {
      source: "GitHub Changelog",
      date: "2026-10-06",
      displayDate: "October 6, 2026",
      category: "ai-security",
      companies: ["GitHub", "AI Scan", "Application Security", "Enterprise"],
      title: "GitHub Makes AI Scan Adoption Visible to Enterprises",
      url: "https://github.blog/changelog/2026-10-06-code-scanning-ai-scan-enablement-status-in-security-overview/",
      summary: "GitHub organization and enterprise administrators can now see repository-level AI Scan for pull requests enablement in security overview, filter for enabled or not-enabled repositories, and export the status in coverage CSVs. The new visibility gives security teams a concrete way to track adoption and manage AI Scan enablement across repositories."
    },
    {
      source: "Axios",
      date: "2026-10-06",
      displayDate: "October 6, 2026",
      category: "ai-general-news",
      companies: ["AI Policy", "U.S. Government", "AI Safety"],
      title: "Federal AI Task Force Centralizes a Divided Policy Process",
      url: "https://www.axios.com/2026/10/06/trump-ai-strategy-task-force",
      summary: "Axios reports that a new federal task force is intended to coordinate fragmented AI policy while administration factions remain divided over regulation and industry self-policing. Some task-force officials favor corporate self-policing through third-party audits and direct reporting to corporate boards, but the resulting rules and whether they will satisfy public safety concerns remain unsettled."
    },
    {
      source: "OpenAI",
      date: "2026-10-05",
      displayDate: "October 5, 2026",
      category: "ai-security",
      companies: ["OpenAI", "ChatGPT", "Codex", "AI Safety"],
      title: "OpenAI Adds Optional Text Watermarking With Clear Limits",
      url: "https://openai.com/index/eu-text-provenance/",
      summary: "OpenAI is making text watermarking opt-in for supported API models globally and plans invisible watermarks for eligible ChatGPT and Codex text output in the EU over the coming weeks. Detector access will start with approved researchers and expert organizations because editing can weaken the signal and results can include false positives or false negatives, so provenance should not be treated as proof of authorship, ownership, or accuracy."
    }
  ];

  const existingItems = Array.isArray(window.newsFeed) ? window.newsFeed : [];
  const existingKeys = new Set(existingItems.map((item) => item && (item.url || item.title)).filter(Boolean));
  window.newsFeed = [...latestUpdates.filter((item) => !existingKeys.has(item.url || item.title)), ...existingItems];
})();
