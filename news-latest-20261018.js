(function () {
  const latestUpdates = [
    {
      source: "TechCrunch",
      date: "2026-10-17",
      displayDate: "October 17, 2026",
      category: "ai-general-news",
      companies: ["Meta", "AI Training", "Publishers", "Web Crawlers"],
      title: "Meta Removes Terms Language That Raised AI Training Concerns",
      url: "https://techcrunch.com/2026/10/17/meta-removes-language-that-raised-scraping-and-ai-training-concerns/",
      summary: "TechCrunch reports that Meta removed wording from its commercial terms after legal experts warned it could be read as permission to use content from a business account's websites for product development and model training. Meta says the consolidated provision applied only to ads and business products and that the clarification does not change how its web crawlers operate."
    },
    {
      source: "TechCrunch",
      date: "2026-10-17",
      displayDate: "October 17, 2026",
      category: "ai-general-news",
      companies: ["Anthropic", "Claude", "AI Workflows", "Workforce"],
      title: "Anthropic's AI-Heavy Workflow Shifts Hiring and Coordination",
      url: "https://techcrunch.com/2026/10/17/anthropic-says-its-workforce-has-become-less-junior-and-is-spending-more-time-in-meetings/",
      summary: "TechCrunch's account of Anthropic's internal report says junior technical hires fell from 27% to 9% while meeting time rose 20% overall. Anthropic describes employees increasingly managing Claude-produced work, with human attention, judgment, trust, and coordination becoming bottlenecks even as code, sales, and contract-processing output rise."
    },
    {
      source: "TechCrunch",
      date: "2026-10-17",
      displayDate: "October 17, 2026",
      category: "ai-general-news",
      companies: ["Replit", "OpenAI", "Anthropic", "Coding Agents"],
      title: "Replit Makes OpenAI the Default Provider for Replit Agent",
      url: "https://techcrunch.com/2026/10/17/replit-is-no-longer-working-with-anthropic-ceo-says/",
      summary: "In a clarified update, TechCrunch reports that Replit now prefers OpenAI for Replit Agent based on performance, economics, and the partnership, while Claude and other supported models remain selectable. Replit says it remains model-agnostic and emphasizes that production agents still need orchestration, recovery, sandboxing, networking, identity, and authorization around the model."
    }
  ];

  const existingItems = Array.isArray(window.newsFeed) ? window.newsFeed : [];
  const existingKeys = new Set(existingItems.map((item) => item && (item.url || item.title)).filter(Boolean));
  window.newsFeed = [...latestUpdates.filter((item) => !existingKeys.has(item.url || item.title)), ...existingItems];
})();
