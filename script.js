const resources = [
  {
    title: "Awesome Copilot",
    url: "https://github.com/github/awesome-copilot",
    type: "Collection",
    note: "Community-curated repository of Copilot resources and examples.",
  },
  {
    title: "About Agent Skills",
    url: "https://docs.github.com/en/copilot/concepts/agents/about-agent-skills",
    type: "Docs",
    note: "GitHub Docs page describing agent skills in Copilot.",
  },
  {
    title: "Skills Introduction (Notebooks)",
    url: "https://platform.claude.com/cookbook/skills-notebooks-01-skills-introduction",
    type: "Cookbook",
    note: "Comprehensive interactive notebook covering Claude Skills fundamentals. Learn how to create professional documents (Excel, PowerPoint, PDFs) with expert-level quality using Skills. Covers setup and installation, understanding the progressive disclosure architecture, discovering available Anthropic-managed skills (xlsx, pptx, pdf, docx), and includes quick-start examples with code. Explains key benefits including expert-level performance, cost efficiency through efficient token usage, proven helper scripts, and composable skills. Features troubleshooting guidance and real-world examples for automating business workflows and document generation.",
  },
];

const grid = document.getElementById("resource-grid");
const template = document.getElementById("resource-card-template");

function createCard(resource) {
  const fragment = template.content.cloneNode(true);
  const card = fragment.querySelector(".resource-card");
  const chip = fragment.querySelector(".chip");
  const title = fragment.querySelector("h3");
  const note = fragment.querySelector(".note");
  const link = fragment.querySelector(".visit-link");

  chip.textContent = resource.type;
  title.textContent = resource.title;
  note.textContent = resource.note || "No note provided.";
  link.href = resource.url;
  link.textContent = resource.url;

  card.addEventListener("click", () => {
    window.open(resource.url, "_blank", "noopener,noreferrer");
  });

  return fragment;
}

function render() {
  grid.innerHTML = "";
  resources.forEach((resource) => {
    grid.appendChild(createCard(resource));
  });
}

render();
