(function () {
  const latestUpdates = [
    {
      source: "ADNOC",
      date: "2026-11-02",
      displayDate: "November 2, 2026",
      category: "ai-general-news",
      companies: ["ADNOC", "OpenAI", "G42"],
      title: "ADNOC Plans Connected OpenAI Agents for Energy Operations",
      url: "https://www.adnoc.ae/media-center/news/2026/11/ADNOC-Signs-Landmark-Partnership-Agreement-with-OpenAI",
      summary: "ADNOC announced a multi-year OpenAI and G42 partnership to connect frontier-model agents across field planning and commercial operations. The first applications will combine well, reservoir, facility, cost, and market data; ADNOC's claim that planning could shrink from months to hours is prospective, and human experts will retain oversight of consequential decisions on UAE-based G42 infrastructure."
    }
  ];

  const existingItems = Array.isArray(window.newsFeed) ? window.newsFeed : [];
  const existingKeys = new Set(existingItems.map((item) => item && (item.url || item.title)).filter(Boolean));
  window.newsFeed = [...latestUpdates.filter((item) => !existingKeys.has(item.url || item.title)), ...existingItems];
})();
