(function () {
  const latestUpdates = [
    {
      source: "Simon Willison's Weblog",
      date: "2026-11-11",
      displayDate: "November 11, 2026",
      category: "ai-general-news",
      companies: ["AWS", "Kiro"],
      title: "AWS Ships an Agent-Built Local Cloud Emulator",
      url: "https://simonwillison.net/2026/Nov/11/aws-emulator/",
      summary: "AWS released a free, offline emulator built from more than 400 API models covering more than 200 AWS services. AWS says agents wrote and tested all of its code against real-service fidelity tests, while engineers supplied specifications, deterministic boundaries, automated merge gates, and multiple security-agent reviews; AWS also publishes known fidelity gaps, so it is a verification-heavy agentic engineering case study rather than a claim of complete cloud parity."
    },
    {
      source: "Google",
      date: "2026-11-11",
      displayDate: "November 11, 2026",
      category: "new-models",
      companies: ["Google", "Google DeepMind", "Gemini"],
      title: "Google Launches Gemini Decision 1 for Bounded Agent Decisions",
      url: "https://blog.google/innovation-and-ai/technology/developers-tools/gemini-decisions-api/",
      summary: "Google launched Gemini Decision 1 and the Decisions API for bounded yes/no, choice, and rubric scoring across text, images, audio, video, and PDFs. It can evaluate up to 1,000 questions per request, returns probabilities and confidence scores, and costs $0.10 per million input tokens with no output-token charge; Google's benchmark, latency, calibration, and nearly five-times-cheaper comparisons are vendor-reported, and the API is designed for constrained decisions such as tool selection, policy checks, routing, and grading rather than open-ended generation."
    }
  ];

  const existingItems = Array.isArray(window.newsFeed) ? window.newsFeed : [];
  const existingKeys = new Set(existingItems.map((item) => item && (item.url || item.title)).filter(Boolean));
  window.newsFeed = [...latestUpdates.filter((item) => !existingKeys.has(item.url || item.title)), ...existingItems];
})();
