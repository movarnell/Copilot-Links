(function () {
  const latestUpdates = [
    {
      source: "TechCrunch",
      date: "2026-10-30",
      displayDate: "October 30, 2026",
      category: "ai-general-news",
      companies: ["Google", "Amazon", "Meta", "Microsoft"],
      title: "Big Tech's AI Infrastructure Spending Draws More Investor Scrutiny",
      url: "https://techcrunch.com/2026/10/30/cracks-are-emerging-in-the-ai-spending-boom/",
      summary: "TechCrunch reports that Alphabet, Amazon, Meta, and Microsoft outlined more than $740 billion in planned capital spending this year as investors focused more closely on free cash flow, debt, and the timeline for returns. Cloud demand remains strong, so the market reaction is evidence of cost concern rather than proof that AI infrastructure demand is collapsing."
    },
    {
      source: "TechCrunch",
      date: "2026-10-30",
      displayDate: "October 30, 2026",
      category: "ai-general-news",
      companies: ["Zest"],
      title: "Zest Brings Restaurant Discovery and Booking Into Text Messages",
      url: "https://techcrunch.com/2026/10/30/zests-new-ai-agent-finds-restaurants-and-books-reservations-over-text/",
      summary: "Zest launched a text-message restaurant concierge that uses a person's dining history, supports group-chat preferences and voting, checks availability, and books through connected services including OpenTable, Resy, and SevenRooms. TechCrunch found it useful in limited testing, but broader accuracy and privacy outcomes remain unverified."
    },
    {
      source: "Google",
      date: "2026-10-30",
      displayDate: "October 30, 2026",
      category: "ai-general-news",
      companies: ["Google", "Gemma"],
      title: "Google Runs an Early Gemma 4 Test on a TPU in Orbit",
      url: "https://blog.google/innovation-and-ai/models-and-research/google-research/project-suncatcher-satellite-response/",
      summary: "Google says its Project Suncatcher prototype generated and downlinked the first AI response from a data-center-class TPU in orbit using Gemma 4. The result is an early hello-world milestone, not proof of a production space data center; thermal and radiation testing continues before a planned twin-satellite milestone in 2027."
    }
  ];

  const existingItems = Array.isArray(window.newsFeed) ? window.newsFeed : [];
  const existingKeys = new Set(existingItems.map((item) => item && (item.url || item.title)).filter(Boolean));
  window.newsFeed = [...latestUpdates.filter((item) => !existingKeys.has(item.url || item.title)), ...existingItems];
})();
