(function () {
  const latestUpdates = [
    {
      source: "Google",
      date: "2026-11-20",
      displayDate: "November 20, 2026",
      category: "ai-workflows",
      companies: ["Google", "Gemini platform", "Agent Gateway", "AI agents"],
      title: "Google Previews Policy Checks Before AI Agents Run Tool Calls",
      url: "https://developers.googleblog.com/en/check-what-your-ai-agents-do-before-they-do-it-with-semantic-governance-policies/",
      summary: "Google previewed Semantic governance policies for Gemini platform, using Agent Gateway and an LLM judge to check proposed tool calls against user intent and plain-language business rules before execution, with verdicts recorded in Cloud Logging. Google says the judgments are probabilistic, streamed responses are not evaluated, and teams should test in dry-run mode and use the feature alongside IAM, disclosure controls, and legal or compliance review."
    },
    {
      source: "OpenAI",
      date: "2026-11-20",
      displayDate: "November 20, 2026",
      category: "ai-security",
      companies: ["OpenAI", "GPT-6.2", "Model security", "Cybersecurity"],
      title: "OpenAI Details Defenses Against Adversarial Model Distillation",
      url: "https://openai.com/index/combatting-adversarial-distillation/",
      summary: "OpenAI described layered defenses against unauthorized model distillation, including adversarial training, input and output classifiers, API controls, campaign detection, and enforcement. In an internal adaptive black-box evaluation, earlier-turn reasoning extraction fell from 54.0% on GPT-6 Astra with its original safeguards to 0.2% on GPT-6.2 Astra; the vendor-run comparison covers different models and safeguard stacks, so it is not independent proof of general resistance."
    },
    {
      source: "OpenAI",
      date: "2026-11-20",
      displayDate: "November 20, 2026",
      category: "models",
      companies: ["OpenAI", "GPT-6.2 Astra", "MedChemBench", "AI research"],
      title: "OpenAI Introduces MedChemBench for Medicinal-Chemistry Reasoning",
      url: "https://openai.com/index/introducing-medchembench/",
      summary: "OpenAI introduced MedChemBench, a 99-problem benchmark drawn from 117 papers and patents that tests molecular reconstruction, evidence-based reasoning, compound selection, and property prediction. GPT-6.2 Astra scored 84.5% at xhigh reasoning, but OpenAI says the historical benchmark does not establish that models can discover drugs or improve laboratory decisions; the results are provider-run and need external validation."
    }
  ];

  const existingItems = Array.isArray(window.newsFeed) ? window.newsFeed : [];
  const existingKeys = new Set(existingItems.map((item) => item && (item.url || item.title)).filter(Boolean));
  window.newsFeed = [...latestUpdates.filter((item) => !existingKeys.has(item.url || item.title)), ...existingItems];
})();
