(() => {
  const cameras = window.CAMERAS;
  const state = { search: '', brand: 'all', sensor: 'all', purpose: 'all', sort: 'brand', compare: [] };
  const sensorNames = { 'Full Frame': 'フルサイズ', 'APS-C': 'APS-C', 'Medium Format': 'ラージフォーマット', 'Micro Four Thirds': 'Micro Four Thirds' };
  const purposeNames = { photo: '写真', hybrid: 'ハイブリッド', video: '映像', speed: '高速撮影' };
  const els = {
    search: document.querySelector('#search'), clearSearch: document.querySelector('#clear-search'), brand: document.querySelector('#brand-filter'), sensor: document.querySelector('#sensor-filter'), purpose: document.querySelector('#purpose-filter'), sort: document.querySelector('#sort'),
    rows: document.querySelector('#camera-rows'), cards: document.querySelector('#camera-cards'), count: document.querySelector('#result-count'), empty: document.querySelector('#empty-state'), tray: document.querySelector('#compare-tray'), compareNames: document.querySelector('#compare-names'), compareCount: document.querySelector('#compare-count'), openCompare: document.querySelector('#open-compare'), detailDialog: document.querySelector('#detail-dialog'), detailContent: document.querySelector('#detail-content'), compareDialog: document.querySelector('#compare-dialog'), comparisonTable: document.querySelector('#comparison-table')
  };

  [...new Set(cameras.map(c => c.brand))].forEach(brand => {
    const option = document.createElement('option'); option.value = brand; option.textContent = brand; els.brand.append(option);
  });

  const normalize = value => value.toLowerCase().normalize('NFKC').replace(/\s+/g, '');
  const filtered = () => {
    const query = normalize(state.search);
    const result = cameras.filter(c => {
      const haystack = normalize([c.brand, c.model, c.mount, c.sensor, sensorNames[c.sensor]].join(' '));
      return (!query || haystack.includes(query)) && (state.brand === 'all' || c.brand === state.brand) && (state.sensor === 'all' || c.sensor === state.sensor) && (state.purpose === 'all' || c.purpose.includes(state.purpose));
    });
    return result.sort((a, b) => {
      if (state.sort === 'newest') return b.released.localeCompare(a.released);
      if (state.sort === 'resolution') return b.mp - a.mp;
      if (state.sort === 'weight') return a.weight - b.weight;
      return a.brand.localeCompare(b.brand) || b.released.localeCompare(a.released);
    });
  };

  const isSelected = id => state.compare.includes(id);
  const checkbox = camera => `<input class="compare-check" type="checkbox" data-compare="${camera.id}" aria-label="${camera.brand} ${camera.model}を比較" ${isSelected(camera.id) ? 'checked' : ''}>`;
  const cameraRow = c => `<tr>
    <td class="compare-column">${checkbox(c)}</td>
    <td class="model-cell"><button class="model-button" type="button" data-detail="${c.id}"><strong>${c.model}</strong><span>${c.brand} · ${c.mount}</span></button></td>
    <td>${sensorNames[c.sensor]}</td><td>${c.mp} MP</td><td class="${c.ibis ? 'yes' : 'no'}">${c.ibis ? 'Yes' : '—'}</td><td>${c.burst}</td><td>${c.video}</td><td>${c.weight} g</td>
  </tr>`;
  const cameraCard = c => `<article class="camera-card">
    <div class="card-top"><button class="card-model" type="button" data-detail="${c.id}"><span>${c.brand} · ${c.mount}</span><strong>${c.model}</strong></button>${checkbox(c)}</div>
    <div class="card-specs"><p><span>Sensor</span>${sensorNames[c.sensor]}</p><p><span>Resolution</span>${c.mp} MP</p><p><span>Burst</span>${c.burst}</p><p><span>Weight</span>${c.weight} g</p></div>
  </article>`;

  function render() {
    const result = filtered();
    els.rows.innerHTML = result.map(cameraRow).join('');
    els.cards.innerHTML = result.map(cameraCard).join('');
    els.count.textContent = result.length;
    els.empty.hidden = result.length !== 0;
    document.querySelector('.table-shell').hidden = result.length === 0;
    els.cards.hidden = result.length === 0;
    els.clearSearch.hidden = !state.search;
    updateTray();
  }

  function updateTray() {
    const selected = state.compare.map(id => cameras.find(c => c.id === id)).filter(Boolean);
    els.tray.hidden = selected.length === 0;
    els.compareNames.textContent = selected.map(c => `${c.brand} ${c.model}`).join(' · ');
    els.compareCount.textContent = selected.length;
    els.openCompare.disabled = selected.length < 2;
  }

  function toggleCompare(id, checked) {
    if (checked && state.compare.length >= 3) {
      document.querySelectorAll(`[data-compare="${id}"]`).forEach(input => input.checked = false);
      return;
    }
    state.compare = checked ? [...state.compare, id] : state.compare.filter(item => item !== id);
    document.querySelectorAll(`[data-compare="${id}"]`).forEach(input => input.checked = checked);
    updateTray();
  }

  function openDetail(id) {
    const c = cameras.find(item => item.id === id); if (!c) return;
    els.detailContent.innerHTML = `<div class="detail-hero"><div class="detail-top"><div><p class="detail-brand">${c.brand} · ${c.mount}</p><h2>${c.model}</h2></div><button class="icon-button" type="button" data-close-dialog aria-label="閉じる">×</button></div><p class="detail-meta">Released ${c.released.replace('-', '.')} · ${c.purpose.map(p => purposeNames[p]).join(' / ')}</p></div>
      <dl class="spec-grid"><div><dt>Sensor</dt><dd>${sensorNames[c.sensor]}</dd></div><div><dt>Resolution</dt><dd>${c.mp} MP</dd></div><div><dt>Mount</dt><dd>${c.mount}</dd></div><div><dt>IBIS</dt><dd>${c.ibis ? 'あり' : 'なし'}</dd></div><div><dt>Max burst</dt><dd>${c.burst}</dd></div><div><dt>Max video</dt><dd>${c.video}</dd></div><div><dt>Weight</dt><dd>${c.weight} g</dd></div><div><dt>Released</dt><dd>${c.released.replace('-', '.')}</dd></div></dl>
      <a class="official-link" href="${c.official}" target="_blank" rel="noopener noreferrer">メーカー公式仕様を見る ↗</a>`;
    els.detailDialog.showModal();
  }

  function openComparison() {
    const selected = state.compare.map(id => cameras.find(c => c.id === id)).filter(Boolean); if (selected.length < 2) return;
    const row = (label, value) => `<tr><th scope="row">${label}</th>${selected.map(c => `<td>${value(c)}</td>`).join('')}</tr>`;
    els.comparisonTable.innerHTML = `<table><thead><tr><th></th>${selected.map(c => `<th>${c.brand}<br>${c.model}</th>`).join('')}</tr></thead><tbody>
      ${row('センサー', c => sensorNames[c.sensor])}${row('有効画素数', c => `${c.mp} MP`)}${row('マウント', c => c.mount)}${row('ボディ内手ブレ補正', c => c.ibis ? 'あり' : 'なし')}${row('最高連写', c => c.burst)}${row('動画', c => c.video)}${row('質量', c => `${c.weight} g`)}${row('発売', c => c.released.replace('-', '.'))}${row('公式仕様', c => `<a href="${c.official}" target="_blank" rel="noopener noreferrer">開く ↗</a>`)}</tbody></table>`;
    els.compareDialog.showModal();
  }

  function resetFilters() {
    Object.assign(state, { search: '', brand: 'all', sensor: 'all', purpose: 'all', sort: 'brand' });
    els.search.value = ''; els.brand.value = 'all'; els.sensor.value = 'all'; els.purpose.value = 'all'; els.sort.value = 'brand'; render();
  }

  els.search.addEventListener('input', e => { state.search = e.target.value; render(); });
  els.clearSearch.addEventListener('click', () => { state.search = ''; els.search.value = ''; els.search.focus(); render(); });
  [['brand', els.brand], ['sensor', els.sensor], ['purpose', els.purpose], ['sort', els.sort]].forEach(([key, el]) => el.addEventListener('change', e => { state[key] = e.target.value; render(); }));
  document.addEventListener('change', e => { if (e.target.matches('[data-compare]')) toggleCompare(e.target.dataset.compare, e.target.checked); });
  document.addEventListener('click', e => {
    const detail = e.target.closest('[data-detail]'); if (detail) openDetail(detail.dataset.detail);
    if (e.target.closest('[data-close-dialog]')) e.target.closest('dialog').close();
    if (e.target.matches('[data-reset]') || e.target.closest('#reset-filters')) resetFilters();
  });
  document.querySelector('#clear-compare').addEventListener('click', () => { state.compare = []; render(); });
  els.openCompare.addEventListener('click', openComparison);
  [els.detailDialog, els.compareDialog].forEach(dialog => dialog.addEventListener('click', e => { if (e.target === dialog) dialog.close(); }));
  render();
})();
