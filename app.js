(() => {
  const cameras = window.CAMERAS;
  const state = { search: '', brand: 'all' };
  const sensorNames = { 'Full Frame': 'フルサイズ', 'APS-C': 'APS-C', 'Medium Format': 'ラージフォーマット' };
  const purposeNames = { photo: '写真', hybrid: 'ハイブリッド', video: '映像', speed: '高速撮影' };
  const strengthOrder = [
    'fuji-gfx100s-ii',
    'nikon-zr', 'nikon-z9', 'nikon-z8', 'nikon-z6-iii', 'nikon-z5-ii',
    'sigma-fpl', 'sigma-bf', 'sigma-fp',
    'sony-a1-ii', 'sony-a9-iii', 'sony-a7r-vi', 'sony-fx5', 'sony-fx3', 'sony-fx2', 'sony-a7-v', 'sony-a7-iv', 'sony-a7cr', 'sony-a7c-ii', 'sony-fx30', 'sony-a6700'
  ];
  const strengthRank = new Map(strengthOrder.map((id, index) => [id, index]));
  const els = {
    controls: document.querySelector('.controls'), search: document.querySelector('#search'), clearSearch: document.querySelector('#clear-search'), brand: document.querySelector('#brand-filter'),
    rows: document.querySelector('#camera-rows'), cards: document.querySelector('#camera-cards'), count: document.querySelector('#result-count'), empty: document.querySelector('#empty-state'), detailDialog: document.querySelector('#detail-dialog'), detailContent: document.querySelector('#detail-content')
  };

  const syncStickyOffset = () => {
    document.documentElement.style.setProperty('--controls-height', `${els.controls.offsetHeight}px`);
  };
  syncStickyOffset();
  if ('ResizeObserver' in window) new ResizeObserver(syncStickyOffset).observe(els.controls);
  else window.addEventListener('resize', syncStickyOffset);

  [...new Set(cameras.map(c => c.brand))].forEach(brand => {
    const option = document.createElement('option'); option.value = brand; option.textContent = brand; els.brand.append(option);
  });

  const normalize = value => value.toLowerCase().normalize('NFKC').replace(/\s+/g, '');
  const cameraImage = (c, className) => c.image ? `<span class="${className}-wrap"><img class="${className}" src="${c.image}" alt="${c.brand} ${c.model} の外観" decoding="async"></span>` : '';
  const filtered = () => {
    const query = normalize(state.search);
    const result = cameras.filter(c => {
      const haystack = normalize([c.brand, c.model, c.mount, c.sensor, sensorNames[c.sensor]].join(' '));
      return (!query || haystack.includes(query)) && (state.brand === 'all' || c.brand === state.brand);
    });
    return result.sort((a, b) => a.brand.localeCompare(b.brand) || (strengthRank.get(a.id) ?? 999) - (strengthRank.get(b.id) ?? 999));
  };

  const cameraRow = c => `<tr>
    <td class="model-cell"><button class="model-button" type="button" data-detail="${c.id}">${cameraImage(c, 'camera-thumb')}<span class="model-copy"><strong>${c.model}</strong><span>${c.brand} · ${c.mount}</span></span></button></td>
    <td>${sensorNames[c.sensor]}</td><td>${c.mp} MP</td><td>${c.ibisLabel}</td><td>${c.burst}</td><td>${c.video}</td><td class="monitor-cell">${c.display}</td><td class="price-cell">${c.price}</td><td>${c.weight} g</td>
  </tr>`;
  const cameraCard = c => `<article class="camera-card">
    ${cameraImage(c, 'card-image')}
    <div class="card-top"><button class="card-model" type="button" data-detail="${c.id}"><span>${c.brand} · ${c.mount}</span><strong>${c.model}</strong></button></div>
    <div class="card-specs"><p><span>Sensor</span>${sensorNames[c.sensor]}</p><p><span>Resolution</span>${c.mp} MP</p><p><span>IBIS</span>${c.ibisLabel}</p><p><span>Burst</span>${c.burst}</p><p><span>Video</span>${c.video}</p><p><span>Monitor</span>${c.display}</p><p><span>Official price</span>${c.price}</p><p><span>Weight</span>${c.weight} g</p></div>
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
  }

  function openDetail(id) {
    const c = cameras.find(item => item.id === id); if (!c) return;
    els.detailContent.innerHTML = `<div class="detail-hero"><div class="detail-top"><div><p class="detail-brand">${c.brand} · ${c.mount}</p><h2>${c.model}</h2></div><button class="icon-button" type="button" data-close-dialog aria-label="閉じる">×</button></div>${cameraImage(c, 'detail-image')}<p class="detail-meta">Released ${c.released.replace('-', '.')} · ${c.purpose.map(p => purposeNames[p]).join(' / ')}</p></div>
      <dl class="spec-grid"><div><dt>Sensor</dt><dd>${sensorNames[c.sensor]}</dd></div><div><dt>Resolution</dt><dd>${c.mp} MP</dd></div><div><dt>Mount</dt><dd>${c.mount}</dd></div><div><dt>IBIS</dt><dd>${c.ibisLabel}</dd></div><div><dt>Max burst</dt><dd>${c.burst}</dd></div><div><dt>Max video</dt><dd>${c.video}</dd></div><div><dt>Monitor</dt><dd>${c.display}</dd></div><div><dt>Official price</dt><dd>${c.price}</dd></div><div><dt>Weight</dt><dd>${c.weight} g</dd></div><div><dt>Released</dt><dd>${c.released.replace('-', '.')}</dd></div></dl>
      <a class="official-link" href="${c.official}" target="_blank" rel="noopener noreferrer">メーカー公式仕様を見る ↗</a>`;
    els.detailDialog.showModal();
  }

  function resetFilters() {
    Object.assign(state, { search: '', brand: 'all' });
    els.search.value = ''; els.brand.value = 'all'; render();
  }

  els.search.addEventListener('input', e => { state.search = e.target.value; render(); });
  els.clearSearch.addEventListener('click', () => { state.search = ''; els.search.value = ''; els.search.focus(); render(); });
  els.brand.addEventListener('change', e => { state.brand = e.target.value; render(); });
  document.addEventListener('click', e => {
    const detail = e.target.closest('[data-detail]'); if (detail) openDetail(detail.dataset.detail);
    if (e.target.closest('[data-close-dialog]')) e.target.closest('dialog').close();
    if (e.target.matches('[data-reset]') || e.target.closest('#reset-filters')) resetFilters();
  });
  els.detailDialog.addEventListener('click', e => { if (e.target === els.detailDialog) els.detailDialog.close(); });
  render();
})();
