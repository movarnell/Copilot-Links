(function () {
  const latestUpdates = [
    {
      source: "Hugging Face",
      date: "2026-11-11",
      displayDate: "November 11, 2026",
      category: "new-models",
      companies: ["Tether AI Research", "Hugging Face", "Qwen"],
      title: "Tether AI Releases 0.8B On-Device Agent Model BotPsy",
      url: "https://huggingface.co/blog/qvac/botpsy",
      summary: "Tether AI Research released BotPsy, an Apache-2.0, 0.8B-parameter model built on Qwen3.5-0.8B for on-device function calling and low- to medium-difficulty agent tasks. Its strong small-model benchmark results are vendor-run comparisons; the authors say it still makes mistakes, is not intended for high-stakes use, and produced unsafe responses in 21% of their automated red-team tests and 31% under prompt injection."
    },
    {
      source: "QwenCloud",
      date: "2026-11-11",
      displayDate: "November 11, 2026",
      category: "new-models",
      companies: ["Qwen", "QwenCloud", "Alibaba"],
      title: "Qwen Opens Time-Limited Qwen4-Max Preview for Agentic Work",
      url: "https://docs.qwencloud.com/developer-guides/getting-started/latest-model",
      summary: "QwenCloud opened Qwen4-Max-Preview with a 1M-token context window, text, image and video input, deep reasoning, tool calling, structured outputs, and OpenAI- and Anthropic-compatible APIs. Access is limited to Token Plan customers, pay-as-you-go is unavailable, no model changes are planned during the November 11-25 UTC+8 preview, and Qwen says the model will be retired when the preview ends."
    }
  ];

  const existingItems = Array.isArray(window.newsFeed) ? window.newsFeed : [];
  const existingKeys = new Set(existingItems.map((item) => item && (item.url || item.title)).filter(Boolean));
  window.newsFeed = [...latestUpdates.filter((item) => !existingKeys.has(item.url || item.title)), ...existingItems];
})();
