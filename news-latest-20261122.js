(function () {
  const latestUpdates = [
    {
      source: "Microsoft Foundry",
      date: "2026-11-21",
      displayDate: "November 21, 2026",
      category: "ai-workflows",
      companies: ["Microsoft", "Microsoft Foundry", "Hosted agents", "Azure networking"],
      title: "Microsoft Publishes Five Network Checks for Hosted-Agent Timeouts",
      url: "https://devblogs.microsoft.com/foundry/hosted-agents-private-network-setup/",
      summary: "Microsoft published a command-level checklist for diagnosing hosted-agent timeouts in bring-your-own virtual networks. The guide traces failures through the delegated agent subnet, private DNS and endpoints, Microsoft Entra sign-in through TLS-inspecting firewalls, peered-network routing, and soft-deleted resources that keep a subnet in use; teams should validate the steps against their own Azure region, security policy, and production topology."
    },
    {
      source: "Axios",
      date: "2026-11-21",
      displayDate: "November 21, 2026",
      category: "ai-workflows",
      companies: ["GoFundMe", "AI adoption", "Workflow design", "Fundraising"],
      title: "GoFundMe Says Workflow Decomposition Made Its AI Coach Useful",
      url: "https://www.axios.com/2026/11/21/tim-cadogan-gofundme-ai-strategy",
      summary: "Axios reports that GoFundMe spent about nine months testing an AI fundraising coach around specific user drop-off points, including campaign titles and financial goals, instead of adding a general-purpose assistant. CEO Tim Cadogan says more than 80% of users accept or modify suggested titles and the coach is on track to generate over $250 million in incremental help, but those company-reported outcomes are not an independent controlled evaluation."
    },
    {
      source: "Le Monde",
      date: "2026-11-21",
      displayDate: "November 21, 2026",
      category: "models",
      companies: ["Anthropic", "Claude", "Lean", "AI research"],
      title: "Claimed Claude-Assisted Riemann Proof Still Needs Verification",
      url: "https://www.lemonde.fr/en/science/article/2026/11/21/the-likely-solution-to-the-riemann-hypothesis-by-ai-marks-a-turning-point-for-mathematics_6786232_10.html",
      summary: "Le Monde covered Anthropic mathematician Levent Alpöge's claim that work with Claude produced a formal Lean proof of the Riemann and Generalized Riemann hypotheses. The article stresses that mathematicians still need to confirm the encoded theorem, translate the machine-checked work into readable mathematics, and investigate reported software concerns; the claim should not be treated as an accepted solution until independent verification is complete."
    }
  ];

  const existingItems = Array.isArray(window.newsFeed) ? window.newsFeed : [];
  const existingKeys = new Set(existingItems.map((item) => item && (item.url || item.title)).filter(Boolean));
  window.newsFeed = [...latestUpdates.filter((item) => !existingKeys.has(item.url || item.title)), ...existingItems];
})();
