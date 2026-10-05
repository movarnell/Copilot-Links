(function () {
  const latestUpdates = [
    {
      source: "Axios",
      date: "2026-10-05",
      displayDate: "October 5, 2026",
      category: "ai-security",
      companies: ["AI Agents", "Health Care", "Cybersecurity"],
      title: "Health Systems Confront Unauthorized AI Agents",
      url: "https://www.axios.com/2026/10/05/ai-agents-hospital-risks",
      summary: "Axios reports that health-care agent adoption is outpacing governance: 72% of surveyed leaders said AI tools or agents are being deployed without formal IT approval. The practical controls apply broadly: define what agents may access and do, use time-limited credentials, and continuously monitor autonomous actions."
    },
    {
      source: "Axios",
      date: "2026-10-05",
      displayDate: "October 5, 2026",
      category: "ai-agents",
      companies: ["Microsoft", "Meta", "OpenAI", "AI Agents"],
      title: "The Agent Economy Moves From Apps to Delegated Work",
      url: "https://www.axios.com/2026/10/05/ai-agents-consumers-business",
      summary: "Axios frames consumer and enterprise software as shifting toward agents that act through connected cloud services, highlighting Meta Muse, Microsoft Autopilot, OpenAI dots, and Copilot. Deep integrations and accumulated context could make switching difficult, so Axios says leaders should rethink organizational structures, customer relationships, and monetization for an agent-to-agent world."
    },
    {
      source: "Axios",
      date: "2026-10-05",
      displayDate: "October 5, 2026",
      category: "ai-workflows",
      companies: ["AI Adoption", "Workplace", "Leadership"],
      title: "AI Adoption Works Better When It Removes Drudgery",
      url: "https://www.axios.com/2026/10/05/ai-employee-purpose-productivity-ceos",
      summary: "Axios argues that organizations should frame AI adoption around removing drudgery and improving meaningful work, not only increasing output. Its practical recommendations include transparent company-wide guidance, broad access and training, and recognition for employees who find useful workflow improvements."
    }
  ];

  const existingItems = Array.isArray(window.newsFeed) ? window.newsFeed : [];
  const existingKeys = new Set(existingItems.map((item) => item && (item.url || item.title)).filter(Boolean));
  window.newsFeed = [...latestUpdates.filter((item) => !existingKeys.has(item.url || item.title)), ...existingItems];
})();
