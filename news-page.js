/* A recent-first reader for the shared, dated AI news feed. */
(() => {
  'use strict';
  const list = document.getElementById('news-current-list');
  if (!list) return;
  const category = document.getElementById('news-category');
  const windowChoice = document.getElementById('news-window');
  const more = document.getElementById('news-load-more');
  const count = document.getElementById('news-result-count');
  const note = document.getElementById('news-window-note');
  const meta = window.newsFeedMeta || {};
  const parsedChecked = new Date(meta.updatedAt);
  const checked = Number.isFinite(parsedChecked.getTime()) ? parsedChecked : new Date();
  const checkedDay = (meta.updatedAt || checked.toISOString()).slice(0,10);
  const referenceDay = Date.parse(checkedDay + 'T00:00:00Z');
  const checkedLabel = new Date(referenceDay).toLocaleDateString('en-US',{month:'long',day:'numeric',year:'numeric',timeZone:'UTC'});
  const seen = new Set();
  const items = [...(Array.isArray(window.newsFeed) ? window.newsFeed : [])].filter(item => item && Number.isFinite(Date.parse(item.date))).sort((a,b) => Date.parse(b.date) - Date.parse(a.date)).filter(item => {
    if (!item || !/^https?:\/\//.test(item.url || '') || !Number.isFinite(Date.parse(item.date)) || seen.has(item.url)) return false;
    seen.add(item.url); return true;
  }).sort((a,b) => Date.parse(b.date) - Date.parse(a.date));
  const categoryGroups = {
    'new-models': new Set(['new-models','ai-models','models']),
    'mythos-news': new Set(['mythos-news','ai-security','security']),
    'ai-general-news': new Set(['ai-general-news','vscode','github-copilot','ai-workflows','ai-research','research','workflows'])
  };
  let limit = 12;
  function makeArticle(item) {
    const article = document.createElement('article'); article.className = 'news-reader-article'; article.setAttribute('role','listitem');
    const date = document.createElement('time'); date.dateTime = item.date; date.textContent = item.displayDate || item.date;
    const heading = document.createElement('h3'); const headline = document.createElement('a');
    headline.href = item.url; headline.target = '_blank'; headline.rel = 'noopener noreferrer'; headline.textContent = item.title; heading.append(headline);
    const summary = document.createElement('p'); summary.textContent = item.summary; summary.className = 'news-reader-summary';
    const source = document.createElement('p'); source.className = 'news-reader-source';
    source.textContent = item.source + ' · ' + new URL(item.url).hostname.replace(/^www\./,'');
    const read = document.createElement('a'); read.href = item.url; read.target = '_blank'; read.rel = 'noopener noreferrer'; read.className = 'news-reader-link'; read.textContent = 'Read the original article →'; read.setAttribute('aria-label','Read the original article: ' + item.title);
    const body = document.createElement('div'); body.append(source,heading,summary,read); article.append(date,body); return article;
  }
  function render() {
    const days = Number(windowChoice.value);
    const filtered = items.filter(item => (category.value === 'all' || categoryGroups[category.value]?.has(item.category)) && (windowChoice.value === 'all' || (Date.parse(item.date) >= referenceDay - (days - 1) * 86400000 && Date.parse(item.date) <= referenceDay)));
    list.replaceChildren(); filtered.slice(0,limit).forEach(item => list.append(makeArticle(item)));
    count.textContent = filtered.length ? 'Showing ' + Math.min(limit,filtered.length) + ' of ' + filtered.length + ' articles' : 'No articles in this window';
    note.textContent = windowChoice.value === 'all' ? 'Archive · newest publication dates first' : 'Published in the ' + days + ' days ending ' + checkedLabel + ' · newest first';
    if (!filtered.length) {
      const empty = document.createElement('p'); empty.className = 'feed-status'; empty.textContent = 'No matching articles. Try another category or browse the full archive.'; list.append(empty);
    }
    more.hidden = filtered.length <= limit;
  }
  category.addEventListener('change',()=>{limit=12;render();}); windowChoice.addEventListener('change',()=>{limit=12;render();});
  document.querySelector('.news-reader-filters').addEventListener('submit',event=>event.preventDefault());
  more.addEventListener('click',()=>{limit+=12;render();});
  document.getElementById('news-open-archive').addEventListener('click',()=>{windowChoice.value='all';category.value='all';limit=12;render();document.getElementById('top-stories').scrollIntoView({behavior:'smooth'});});
  // Preserve useful legacy category bookmarks as selected reader filters.
  if (['new-models','mythos-news','ai-general-news'].includes(location.hash.slice(1))) category.value=location.hash.slice(1);
  const ageDays = (Date.now() - checked.getTime()) / 86400000;
  if (ageDays > 2) {
    const warning = document.createElement('p'); warning.className = 'news-freshness-note'; warning.textContent = 'This feed was last checked on ' + checkedLabel + '. Newer stories may not be included yet.'; document.querySelector('.news-layout > .hero').append(warning);
  }
  render();
})();
