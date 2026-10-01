/* Published USD per million tokens, standard tier. Verified 2026-10-01.
 * Source: https://docs.github.com/en/copilot/reference/copilot-billing/models-and-pricing
 * Recommendations and workload assumptions are editorial, not benchmarks. */
(() => {
  'use strict';
  const rates = {
    luna: { name: 'GPT-6 Luna', short: 'Luna', input: 0.10, output: 0.50 },
    flash: { name: 'Gemini 3.8 Flash', short: 'Flash', input: 0.75, output: 3.75 },
    sol: { name: 'GPT-6.1 Sol', short: 'Sol', input: 2, output: 10 },
    sonnet: { name: 'Claude Sonnet 5.5', short: 'Sonnet', input: 2, output: 10 },
    opus: { name: 'Claude Opus 5.5', short: 'Opus', input: 4, output: 20 },
    astra: { name: 'GPT-6 Astra', short: 'Astra', input: 10, output: 50 }
  };
  const $ = (id) => document.getElementById(id);
  const price = (model, input, output) => (input * model.input + output * model.output) / 1e6;
  const dollars = (n) => '$' + n.toFixed(3);
  const chart = $('price-chart');
  if (chart) ['luna', 'flash', 'sol', 'sonnet', 'opus', 'astra'].forEach((key) => {
    const model = rates[key], cost = price(model, 20000, 4000);
    const row = document.createElement('div'); row.className = 'price-row';
    const label = document.createElement('span'); label.textContent = model.name;
    const track = document.createElement('div'); track.className = 'bar-track';
    const fill = document.createElement('div'); fill.className = 'bar-fill' + (key === 'luna' ? '' : ' neutral');
    fill.style.width = (cost / 0.4 * 100) + '%'; track.append(fill);
    const value = document.createElement('strong'); value.textContent = dollars(cost);
    row.append(label, track, value); chart.append(row);
  });
  const tasks = {
    edit: ['Try Luna first.', 'A rename, a small utility, a known-schema edit, or an isolated test is a good place to try a lightweight model.', 'Escalate if it misses the specification or repeats a failed fix.'],
    feature: ['Plan with Sol. Build with Luna.', 'Ask a stronger model to define interfaces, sequencing, and acceptance checks. Give Luna one bounded step at a time.', 'Return to the planner when dependencies or architecture change.'],
    debug: ['Diagnose with a stronger model.', 'Use Luna to collect logs and reproduce the problem. Ask Sol or another stronger model to reason across components.', 'Once you have a verified cause, try Luna for the focused fix.'],
    risk: ['Spend on judgment; keep human review.', 'Use a stronger model to examine security, data integrity, payment behavior, or migration risks before implementation.', 'Require independent checks. Model choice alone cannot make a risky change safe.'],
    docs: ['Try Luna with your sources.', 'Provide the reference material, audience, and required structure. Use Luna for a first draft or straightforward explanation.', 'Verify citations and claims. Escalate if the sources conflict or interpretation is difficult.']
  };
  function showTask() {
    const entry = tasks[$('task-choice').value], answer = $('task-answer'); answer.replaceChildren();
    ['h3','p','p'].forEach((tag, i) => { const node = document.createElement(tag); node.textContent = entry[i]; answer.append(node); });
  }
  if ($('task-choice')) { $('task-choice').addEventListener('change', showTask); showTask(); }
  const form = $('cost-form');
  if (!form) return;
  function number(id) { return Number($(id).value); }
  function update() {
    if (!form.checkValidity()) { $('savings-number').textContent = '—'; $('savings-text').textContent = 'Enter valid token counts and step counts.'; $('all-cost').textContent = '—'; $('mixed-cost').textContent = '—'; $('all-bar').style.width = '0%'; $('mixed-bar').style.width = '0%'; $('formula').textContent = 'Enter values within the displayed limits to calculate an estimate.'; return; }
    const strong = rates[$('strong-model').value], steps = number('build-steps'), planning = number('strong-steps');
    const input = number('input-tokens'), output = number('output-tokens'), overhead = number('luna-overhead'), retries = number('luna-retries') / 100;
    const strongCost = price(strong, input, output);
    const leanCost = price(rates.luna, input, output * overhead);
    const all = (steps + planning) * strongCost, mixed = planning * strongCost + steps * leanCost * (1 + retries);
    $('steps-value').textContent = steps; $('effort-value').textContent = overhead + '×'; $('retry-value').textContent = Math.round(retries * 100) + '%';
    $('all-label').textContent = strong.short + ' for every step'; $('mixed-label').textContent = strong.short + ' plan + Luna build';
    $('all-cost').textContent = dollars(all); $('mixed-cost').textContent = dollars(mixed);
    const maximum = Math.max(all, mixed);
    $('all-bar').style.width = (maximum ? all / maximum * 100 : 0) + '%';
    $('mixed-bar').style.width = (maximum ? mixed / maximum * 100 : 0) + '%';
    const savings = all ? (1 - mixed / all) * 100 : null;
    $('savings-number').textContent = savings === null ? '—' : Math.abs(savings).toFixed(0) + '%';
    $('savings-text').textContent = savings === null ? 'No usage cost with these token counts' : (savings >= 0 ? 'less' : 'more') + ' estimated usage cost';
    $('mixed-bar').classList.toggle('over-budget', mixed > all);
    $('formula').textContent = 'All-strong: ' + (steps + planning) + ' × ' + dollars(strongCost) + ' = ' + dollars(all) + '. Mixed: ' + planning + ' × ' + dollars(strongCost) + ' + ' + steps + ' × ' + dollars(leanCost) + ' × ' + (1 + retries).toFixed(1) + ' = ' + dollars(mixed) + '. Displayed values are rounded; calculations use full precision.';
  }
  form.addEventListener('input', update); form.addEventListener('change', update);
  form.addEventListener('submit', (event) => event.preventDefault());
  form.addEventListener('reset', () => requestAnimationFrame(update));
  update();
})();
