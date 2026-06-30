// ── Tab switching ──
export const switchTab = (name) => {
    document.querySelectorAll('.tab').forEach((t, i) => {
        const ids = ['lineup', 'dependency', 'insights', 'program'];
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

// ── Program data ──
const programs = {
    'rang-dong': {
        name: 'Rạng Đông', score: 83, status: 'strengthen', slot: '20:00–21:00 · T2–T6',
        ret: 77, rv: 69, li: 74, retColor: 'var(--green)', rvColor: 'var(--green)', liColor: 'var(--cyan)',
        insight: '3 tuần tăng liên tiếp. Fan base đang tích lũy. Khuyến nghị: nâng tier giá slot QC khung 20–21h.',
        curveTitle: 'Drop-off Curve · Rạng Đông · Tập mới nhất · 60 phút',
        curveNote: 'QC1 tại phút 24 gây drop 18% · QC2 tại phút 40 gây drop 11% · Peak Attention: phút 27–40',
        episodes: [71.1, 73.4, 74.1, 72.8, 75.2, 74.9, 76.1, 77.4],
        epNote: 'Xu hướng tăng tốt trong 3 tập gần nhất. Tập 28 cao nhất trong chuỗi.',
        rvr: '68.9%', rvrSub: '↑ +2.3pp vs tuần trước',
        loyal: '41.2%', loyalSub: 'Fan base ổn định',
        newv: '31.1%', newSub: 'Vẫn thu hút người mới',
        leadin: '68%', leadinSub: 'Anchor chain prime time',
        epTitle: '📈 Retention Trend theo tập · 8 tập gần nhất · Rạng Đông',
    },
    'thoi-su': {
        name: 'Thời Sự 19h', score: 88, status: 'strengthen', slot: '19:00–19:30 · Hàng ngày',
        ret: 81, rv: 71, li: 68, retColor: 'var(--green)', rvColor: 'var(--green)', liColor: 'var(--cyan)',
        insight: 'Anchor kênh. Retention cao nhất và ổn định nhất. Là "xương sống" của prime time chain.',
        curveTitle: 'Drop-off Curve · Thời Sự 19h · Hôm qua · 30 phút',
        curveNote: 'Drop-off thấp và đều — tin tức giữ khán giả tốt. QC1 tại phút 14 gây drop chỉ 7%',
        episodes: [79.8, 80.1, 80.5, 79.9, 80.8, 81.2, 80.9, 81.2],
        epNote: 'Rất ổn định — dao động chỉ ±1.5pp trong 8 tuần. Benchmark tốt nhất kênh.',
        rvr: '71.3%', rvrSub: '↑ Tăng đều',
        loyal: '52.1%', loyalSub: 'Loyal audience cao nhất kênh',
        newv: '28.7%', newSub: 'Tin tức ít người mới hơn phim',
        leadin: '—', leadinSub: 'Mở đầu Prime time block',
        epTitle: '📈 Retention Trend theo tập · 8 tuần gần nhất · Thời Sự 19h',
    },
    'chuyen-dong': {
        name: 'Chuyển Động 24h', score: 47, status: 'review', slot: '15:00–15:30 · Hàng ngày',
        ret: 45, rv: 39, li: 19, retColor: 'var(--amber)', rvColor: 'var(--amber)', liColor: 'var(--red)',
        insight: 'Giảm đột ngột 8.3pp trong 1 tuần — cần audit ngay nội dung tuần vừa rồi. Return viewer đang mất.',
        curveTitle: 'Drop-off Curve · Chuyển Động 24h · Hôm qua · 30 phút',
        curveNote: 'Drop mạnh từ phút 8–12 — khán giả thoát sớm hơn bình thường. QC1 aggravate thêm.',
        episodes: [53.1, 51.8, 50.2, 50.9, 49.4, 48.1, 47.6, 44.8],
        epNote: 'Xu hướng giảm 4 tuần liên tiếp. Tuần này giảm mạnh nhất — cần tìm nguyên nhân cụ thể.',
        rvr: '38.7%', rvrSub: '↓ Mất 12pp trong 4 tuần',
        loyal: '18.4%', loyalSub: '↓ Loyal audience đang rời',
        newv: '43.1%', newSub: 'Người mới đến nhưng không ở lại',
        leadin: '19%', leadinSub: '↓ Không giữ được cho 15:30',
        epTitle: '📈 Retention Trend · 8 tuần gần nhất · Chuyển Động 24h',
    },
    'phim-trua': {
        name: 'Phim Trưa VTV1', score: 32, status: 'at-risk', slot: '12:00–13:30 · T2–T6',
        ret: 31, rv: 24, li: 12, retColor: 'var(--red)', rvColor: 'var(--red)', liColor: 'var(--red)',
        insight: 'AT RISK. Giảm từ 53% xuống 31% trong 4 tuần. Phim hiện tại không phù hợp khán giả trưa. Cần thay thế ngay.',
        curveTitle: 'Drop-off Curve · Phim Trưa VTV1 · Hôm qua · 90 phút',
        curveNote: 'Drop cực mạnh từ phút 5–20 — mất 40% audience ở đầu phim. Kịch bản mở đầu yếu nghiêm trọng.',
        episodes: [53.1, 48.2, 42.3, 40.1, 38.8, 36.4, 33.1, 31.4],
        epNote: 'Giảm đều và liên tục không có dấu hiệu phục hồi. Cần quyết định thay phim hoặc dừng phát.',
        rvr: '24.3%', rvrSub: '↓↓ Mất gần hết khán giả quen',
        loyal: '8.2%', loyalSub: '↓↓ Fan base gần như không còn',
        newv: '67.8%', newSub: 'Người mới xem thử rồi bỏ',
        leadin: '12%', leadinSub: '↓ Bleed cao nhất kênh: 88%',
        epTitle: '📈 Retention Trend · 8 tập gần nhất · Phim Trưa VTV1',
    },
    'suc-khoe': {
        name: 'Sức Khỏe & Cuộc Sống', score: 80, status: 'strengthen', slot: '06:30–07:00 · Hàng ngày',
        ret: 75, rv: 66, li: 82, retColor: 'var(--green)', rvColor: 'var(--green)', liColor: 'var(--cyan)',
        insight: 'Anchor sáng quan trọng nhất. Ratings tuyệt đối thấp do khung giờ nhưng Lead-in 82% — giữ audience tốt nhất buổi sáng. Đừng cắt chỉ vì ratings.',
        curveTitle: 'Drop-off Curve · Sức Khỏe & Cuộc Sống · Hôm qua · 30 phút',
        curveNote: 'Retention ổn định suốt chương trình — audience sáng sớm rất trung thành. Drop chỉ 8% tổng cộng.',
        episodes: [74.1, 74.8, 75.2, 74.9, 75.0, 75.1, 75.0, 75.1],
        epNote: 'Cực kỳ ổn định — dao động <1pp trong 8 tuần. Khán giả sáng sớm là loyal audience đặc thù.',
        rvr: '66.2%', rvrSub: 'Stable — loyal audience sáng',
        loyal: '58.3%', loyalSub: 'Loyal rate cao nhất cả kênh',
        newv: '33.8%', newSub: 'Vẫn thu hút người mới xem',
        leadin: '82%', leadinSub: 'Anchor morning chain',
        epTitle: '📈 Retention Trend · 8 tuần gần nhất · Sức Khỏe & Cuộc Sống',
    },
};

export const loadProgram = (id) => {
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
        const h = Math.round((v / 100) * 70) + 4;
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

export const selectProgram = (id) => {
    switchTab('program');
    setTimeout(() => loadProgram(id), 50);
}

// Init
export const init = () => {
    loadProgram('rang-dong');
}