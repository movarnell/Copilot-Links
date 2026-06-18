(function () {
  const latestUpdates = [
    {
      source: "Wall Street Journal",
      date: "2026-06-18",
      displayDate: "June 18, 2026",
      category: "ai-general-news",
      companies: ["Anthropic", "OpenAI", "Google DeepMind", "G7", "AI governance"],
      title: "WSJ: Anthropic Model-Access Talks Continue After G7 AI Summit",
      url: "https://www.wsj.com/tech/ai/trump-says-anthropic-negotiations-going-fine-as-ai-model-shutdown-drags-on-90b0a46b",
      summary:
        "The Wall Street Journal reported that U.S. negotiations with Anthropic continued after G7 leaders and AI executives debated frontier-model access, national-security review, and international safety standards. The article follows the June 17 governance coverage with a practical enterprise signal: access to top-tier models can change quickly when governments treat model deployment as a strategic control point. Teams using Claude, OpenAI, Gemini, or other frontier systems in developer workflows should keep provider fallback plans, policy review, and model-availability monitoring close to their rollout process.",
    },
    {
      source: "Business Insider",
      date: "2026-06-18",
      displayDate: "June 18, 2026",
      category: "ai-general-news",
      companies: ["OpenAI", "Google", "Gemini", "Character.AI", "AI talent"],
      title: "Business Insider: Noam Shazeer Leaves Google for OpenAI as AI Talent War Intensifies",
      url: "https://www.businessinsider.com/google-veteran-founded-characterai-is-jumping-to-openai-talent-war-2026-6",
      summary:
        "Business Insider reported that Noam Shazeer, a major Google AI researcher and Character.AI cofounder who recently worked on Gemini, is moving to OpenAI. The hire highlights how frontier-model labs are competing for scarce research and product talent as model quality, coding agents, and infrastructure demands become strategic differentiators. For AI workflow owners, the takeaway is that provider roadmaps can shift with talent movement, so model choice should be revisited against current capability, pricing, governance, and ecosystem fit instead of being treated as a one-time decision.",
    },
  ];

  const existingItems = Array.isArray(window.newsFeed) ? window.newsFeed : [];
  const existingKeys = new Set(existingItems.map((item) => item && (item.url || item.title)).filter(Boolean));
  window.newsFeed = [...latestUpdates.filter((item) => !existingKeys.has(item.url || item.title)), ...existingItems];
})();
