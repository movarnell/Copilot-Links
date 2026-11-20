(function () {
  const latestUpdates = [
    {
      source: "Google",
      date: "2026-11-19",
      displayDate: "November 19, 2026",
      category: "ai-workflows",
      companies: ["Google", "Gemini API", "Tool use", "MCP"],
      title: "Gemini API Adds On-Demand Tool Retrieval for Large Agent Toolsets",
      url: "https://blog.google/innovation-and-ai/technology/developers-tools/gemini-api-tool-retrieval/",
      summary: "Google's preview Tool Retrieval feature in the Gemini Interactions API lets agents see tool names and descriptions while deferring full parameter schemas until they are needed. Developers enable it with tool_search and defer_loading for functions or remote MCP servers; Google's token, latency, and tool-selection benefits are vendor-reported, so teams should measure them on representative workloads before changing production routing."
    },
    {
      source: "LangChain",
      date: "2026-11-19",
      displayDate: "November 19, 2026",
      category: "ai-workflows",
      companies: ["LangChain", "LangSmith", "Agents", "MCP"],
      title: "LangSmith Tool Gateway Adds Policy and Identity Controls for Agent Tools",
      url: "https://www.langchain.com/blog/langsmith-tool-gateway",
      summary: "LangChain launched LangSmith Tool Gateway in public beta as a managed layer for agent tool discovery, credentials, user or service identity, deny and approval policies, and tool-call traces. It can publish a curated tool kit through one MCP URL and load large tool sets through search mode; the security and operational benefits are vendor descriptions, not independent validation, so teams should still test authorization boundaries and audit coverage."
    }
  ];

  const existingItems = Array.isArray(window.newsFeed) ? window.newsFeed : [];
  const existingKeys = new Set(existingItems.map((item) => item && (item.url || item.title)).filter(Boolean));
  window.newsFeed = [...latestUpdates.filter((item) => !existingKeys.has(item.url || item.title)), ...existingItems];
})();
