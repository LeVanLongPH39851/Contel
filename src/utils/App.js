// ── Tab switching ──
export const switchTab = (name) => {
    document.querySelectorAll('.tab').forEach((t, i) => {
        const ids = ['lineup', 'dependency', 'program', 'report'];
        t.classList.toggle('active', ids[i] === name);
    });
    document.querySelectorAll('.view').forEach(v => {
        v.classList.remove('active');
    });
    document.getElementById('tab-' + name).classList.add('active');
}

// ── Draw sparklines ──
export const drawSparkline = (id, data, color) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.innerHTML = '';
    const max = Math.max(...data), min = Math.min(...data) - 5;
    data.forEach(v => {
        const bar = document.createElement('div');
        const h = Math.round(((v - min) / (max - min)) * 20) + 4;
        bar.className = 'spark-bar';
        bar.style.height = h + 'px';
        bar.style.background = color;
        bar.style.opacity = 0.7 + (data.indexOf(v) / data.length) * 0.3;
        el.appendChild(bar);
    });
}

export const loadProgram = (id, programs) => {
    const p = programs[id];
    if (!p) return;

    document.getElementById('prog-name').textContent = p.name;
    document.getElementById('prog-score').textContent = p.score;
    document.getElementById('prog-score').className = 'hs-score ' + p.status;
    const badgeEl = document.getElementById('prog-badge');
    badgeEl.className = 'badge ' + p.status;
    badgeEl.textContent = p.status.replace('-', ' ').toUpperCase();
    document.getElementById('prog-slot').textContent = p.slot;
    document.getElementById('prog-insight').textContent = p.insight;

    document.getElementById('bar-ret').style.width = p.ret + '%';
    document.getElementById('bar-ret').style.background = p.retColor;
    document.getElementById('val-ret').textContent = p.ret + '%';
    document.getElementById('bar-rv').style.width = p.rv + '%';
    document.getElementById('bar-rv').style.background = p.rvColor;
    document.getElementById('val-rv').textContent = p.rv + '%';
    document.getElementById('bar-li').style.width = p.li + '%';
    document.getElementById('bar-li').style.background = p.liColor;
    document.getElementById('val-li').textContent = p.li + '%';

    document.getElementById('curve-title').textContent = p.curveTitle;
    document.getElementById('curve-note').textContent = p.curveNote;

    // Episode bars
    const barsEl = document.getElementById('episode-bars');
    const labelsEl = document.getElementById('episode-labels');
    barsEl.innerHTML = ''; labelsEl.innerHTML = '';
    const maxEp = Math.max(...p.episodes);
    p.episodes.forEach((v, i) => {
        const h = Math.round((v / 100) * 250) + 4;
        const color = v >= 75 ? 'var(--green)' : v >= 55 ? 'var(--blue)' : v >= 35 ? 'var(--amber)' : 'var(--red)';
        barsEl.innerHTML += `<div style="flex:1;height:${h}px;background:${color};border-radius:3px 3px 0 0;opacity:${0.5 + i / p.episodes.length * 0.5}" title="${v}%"></div>`;
        labelsEl.innerHTML += `<div style="flex:1;text-align:center;font-size:8px;color:var(--text-4)">T${i + 1}</div>`;
    });

    document.getElementById('ep-trend-note').textContent = p.epNote;
    document.getElementById('ep-trend-title').textContent = p.epTitle;
    document.getElementById('kpi-rvr').textContent = p.rvr;
    document.getElementById('kpi-rvr-sub').textContent = p.rvrSub;
    document.getElementById('kpi-loyal').textContent = p.loyal;
    document.getElementById('kpi-loyal-sub').textContent = p.loyalSub;
    document.getElementById('kpi-new').textContent = p.newv;
    document.getElementById('kpi-new-sub').textContent = p.newSub;
    document.getElementById('kpi-leadin').textContent = p.leadin;
    document.getElementById('kpi-leadin-sub').textContent = p.leadinSub;
}

export const selectProgram = (id, programs) => {
    switchTab('program');
    setTimeout(() => loadProgram(id, programs), 50);
}

// Init
export const init = (programs) => {
    loadProgram('thoi-su-19h', programs);
}