(function () {
  const latestUpdates = [
    {
      source: "Associated Press",
      date: "2026-10-25",
      displayDate: "October 25, 2026",
      category: "ai-general-news",
      companies: ["United States", "China", "Pax Silica", "AI Infrastructure"],
      title: "Countries Face Harder Choices as U.S. and China Build Competing AI Ecosystems",
      url: "https://apnews.com/article/9974a3e5dc955a93935d131a4aeb8886",
      summary: "AP reports that governments trying to work with both U.S. and Chinese technology ecosystems face growing pressure to choose between them. The U.S.-led Pax Silica initiative emphasizes advanced chips and allied supply chains, while China offers lower-cost, more open AI infrastructure; Kazakhstan illustrates how that competition can narrow countries' room to participate in both blocs."
    },
    {
      source: "TechCrunch",
      date: "2026-10-24",
      displayDate: "October 24, 2026",
      category: "ai-general-news",
      companies: ["OpenAI", "Google", "Wiz", "AI Security"],
      title: "AI Agents Raise the Stakes for Fragile Internet Infrastructure",
      url: "https://techcrunch.com/2026/10/24/will-ai-expose-the-rickety-infrastructure-of-the-internet/",
      summary: "TechCrunch examines how AI-assisted vulnerability discovery and agent access could accelerate both defensive research and exploitation of widely used infrastructure. The article corrects an initial claim about the cited PHP flaws: human researchers found them, while AI helped demonstrate exploitation, reinforcing the need for careful attribution and rapid patching."
    },
    {
      source: "TechCrunch",
      date: "2026-10-24",
      displayDate: "October 24, 2026",
      category: "new-models",
      companies: ["Block", "Dessa", "Voice AI", "On-device AI"],
      title: "Block Unveils Dessa, a Local Full-Duplex Speech Model",
      url: "https://techcrunch.com/2026/10/24/blocks-new-voice-model-sounds-eerily-human/",
      summary: "Block says Dessa is a speech-to-speech model trained entirely on human speech that can listen and talk simultaneously and run locally on consumer-class hardware. The company has shared demonstrations and invited safety researchers to test it, but there is no public release or independent performance validation yet."
    }
  ];

  const existingItems = Array.isArray(window.newsFeed) ? window.newsFeed : [];
  const existingKeys = new Set(existingItems.map((item) => item && (item.url || item.title)).filter(Boolean));
  window.newsFeed = [...latestUpdates.filter((item) => !existingKeys.has(item.url || item.title)), ...existingItems];
})();
