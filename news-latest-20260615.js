(function () {
  const latestUpdates = [
    {
      source: "Business Insider",
      date: "2026-06-15",
      displayDate: "June 15, 2026",
      category: "ai-general-news",
      companies: ["Anthropic", "Claude Fable 5", "Claude Mythos 5", "AI safety", "AI policy"],
      title: "Anthropic Disables Fable and Mythos Models After U.S. Order",
      url: "https://www.businessinsider.com/why-white-house-ordered-export-controls-anthropic-mythos-fable-2026-6",
      summary:
        "Business Insider reported that the Trump administration ordered export controls on Anthropic's Fable 5 and Mythos 5 models after officials raised national-security concerns about whether safeguards around the models could be bypassed. Anthropic disputed the government's urgency and said it was given limited technical specifics, but disabled access while responding to the order. For teams evaluating frontier models, the operational takeaway is that model availability can now change quickly when cyber capability, export controls, and government review collide.",
    },
    {
      source: "Associated Press",
      date: "2026-06-14",
      displayDate: "June 14, 2026",
      category: "ai-general-news",
      companies: ["OpenAI", "ChatGPT", "AI safety", "State attorneys general", "AI governance"],
      title: "OpenAI Faces Multistate Probe Into ChatGPT User Safety",
      url: "https://apnews.com/article/openai-chatgpt-subpoena-attorneys-general-probe-a95894407773307fae8ae3ce9742b586",
      summary:
        "The Associated Press reported that OpenAI received a subpoena from several states as part of a probe into ChatGPT user safety as the company prepares for a public stock offering. The inquiry focuses on potential user harm, data handling, vulnerable users, and safeguards, while OpenAI said it will respond constructively and pointed to protections for minors and people in distress. For AI workflow owners, the signal is that safety, data governance, and escalation controls are becoming board-level concerns alongside model capability and product adoption.",
    },
  ];

  const existingItems = Array.isArray(window.newsFeed) ? window.newsFeed : [];
  const existingKeys = new Set(existingItems.map((item) => item && (item.url || item.title)).filter(Boolean));
  window.newsFeed = [...latestUpdates.filter((item) => !existingKeys.has(item.url || item.title)), ...existingItems];
})();
