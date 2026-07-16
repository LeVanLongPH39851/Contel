import { useEffect, useMemo, useState } from 'react';
import './App.css';
import { useDashboardData } from './hooks/useDashboardData';
import { switchTab, loadProgram, selectProgram, init, drawSparkline } from "./utils/App";
import { DashboardFilterProvider } from './context/DashboardFilterContext';
import { useDashboardFilters } from './context/DashboardFilterContext';
import { toSlug, getISOWeek, formatDate } from './helpers/helper';

function DashboardContent() {
  const dashboard = useDashboardData();
  const { appliedFilters, setAppliedFilters } = useDashboardFilters();
  const [tab, setTab] = useState('lineup');
  const AvgHealthScore = dashboard.isLoading.AvgHealthScore ? null : dashboard?.AvgHealthScore?.data?.[dashboard?.AvgHealthScore?.data?.length - 1]?.['AVG(Content Health Score)']?.toFixed(2);
  const AvgHealthScoreDelta = dashboard.isLoading.AvgHealthScore ? null : ((dashboard?.AvgHealthScore?.data?.[dashboard?.AvgHealthScore?.data?.length - 1]?.['AVG(Content Health Score)'] - dashboard?.AvgHealthScore?.data?.[dashboard?.AvgHealthScore?.data?.length - 2]?.['AVG(Content Health Score)']) * 100 / dashboard?.AvgHealthScore?.data?.[dashboard?.AvgHealthScore?.data?.length - 2]?.['AVG(Content Health Score)'])?.toFixed(2);
  const AvgRetentionRate = dashboard.isLoading.AvgRetentionRate ? null : dashboard?.AvgRetentionRate?.data?.[dashboard?.AvgRetentionRate?.data?.length - 1]?.['AVG(Watch Time Efficiency)']?.toFixed(2);
  const AvgRetentionRateDelta = dashboard.isLoading.AvgRetentionRate ? null : ((dashboard?.AvgRetentionRate?.data?.[dashboard?.AvgRetentionRate?.data?.length - 1]?.['AVG(Watch Time Efficiency)'] - dashboard?.AvgRetentionRate?.data?.[dashboard?.AvgRetentionRate?.data?.length - 2]?.['AVG(Watch Time Efficiency)']) * 100 / dashboard?.AvgRetentionRate?.data?.[dashboard?.AvgRetentionRate?.data?.length - 2]?.['AVG(Watch Time Efficiency)'])?.toFixed(2);
  const programSTRENGTHEN = dashboard.isLoading.programSTRENGTHEN ? null : dashboard?.programSTRENGTHEN?.data?.[dashboard?.programSTRENGTHEN?.data?.length - 1]?.['COUNT(status)'] || 0;
  const programSTRENGTHENDelta = dashboard.isLoading.programSTRENGTHEN ? null : (dashboard?.programSTRENGTHEN?.data?.[dashboard?.programSTRENGTHEN?.data?.length - 1]?.['COUNT(status)'] - dashboard?.programSTRENGTHEN?.data?.[dashboard?.programSTRENGTHEN?.data?.length - 2]?.['COUNT(status)']) || 0;
  const programATRISK = dashboard.isLoading.programATRISK ? null : dashboard?.programATRISK?.data?.[dashboard?.programATRISK?.data?.length - 1]?.['COUNT(status)'];
  const programATRISKDelta = dashboard.isLoading.programATRISK ? null : (dashboard?.programATRISK?.data?.[dashboard?.programATRISK?.data?.length - 1]?.['COUNT(status)'] - dashboard?.programATRISK?.data?.[dashboard?.programATRISK?.data?.length - 2]?.['COUNT(status)']);
  const AvgReturnViewerRate = dashboard.isLoading.AvgReturnViewerRate ? null : dashboard?.AvgReturnViewerRate?.data?.[dashboard?.AvgReturnViewerRate?.data?.length - 1]?.['AVG(Return Viewer Rate)']?.toFixed(2);
  const AvgReturnViewerRateDelta = dashboard.isLoading.AvgReturnViewerRate ? null : ((dashboard?.AvgReturnViewerRate?.data?.[dashboard?.AvgReturnViewerRate?.data?.length - 1]?.['AVG(Return Viewer Rate)'] - dashboard?.AvgReturnViewerRate?.data?.[dashboard?.AvgReturnViewerRate?.data?.length - 2]?.['AVG(Return Viewer Rate)']) * 100 / dashboard?.AvgReturnViewerRate?.data?.[dashboard?.AvgReturnViewerRate?.data?.length - 2]?.['AVG(Return Viewer Rate)'])?.toFixed(2);
  // ── Sparkline data ──
  const sparkData = {
    ...(dashboard.isLoading.ProgramHealthScorecard ? {} : dashboard?.ProgramHealthScorecard?.data?.reduce((acc: any, item: any) => {
      acc[item.program_name] = { d: item.last_4_week.replace(/[{}]/g, "").split(",").map((num: string) => Math.round(Number(num))), c: item.status === 'STRENGTHEN' ? '#00e5a0' : item.status === 'MAINTAIN' ? '#3d8bff' : item.status === 'REVIEW' ? '#f5a623' : '#ff3d5a' };
      return acc;
    }, {}))
  };
  const program = appliedFilters?.programs?.[0] || 'THỜI SỰ 19H';
  // ── Program data ──
  const programs = useMemo(() => ({
    [toSlug(program)]: {
      name: program, score: dashboard.isLoading.ProgramInfor ? 'Loading...' : dashboard?.ProgramInfor?.data?.[0]?.["AVG(content_health_score)*100"]?.toFixed(0), status: dashboard.isLoading.ProgramInfor ? 'strengthen' : dashboard?.ProgramInfor?.data?.[0]?.["AVG(content_health_score)*100"]?.toFixed(0) >= 75 ? 'strengthen' : dashboard?.ProgramInfor?.data?.[0]?.["AVG(content_health_score)*100"]?.toFixed(0) >= 55 ? 'maintain' : dashboard?.ProgramInfor?.data?.[0]?.["AVG(content_health_score)*100"]?.toFixed(0) >= 35 ? 'review' : 'at-risk', slot: '',
      ret: dashboard.isLoading.ProgramInfor ? 0 : dashboard?.ProgramInfor?.data?.[0]?.["AVG(watch_time_efficiency)"]?.toFixed(0), rv: dashboard.isLoading.ProgramInfor ? 0 : dashboard?.ProgramInfor?.data?.[0]?.["AVG(return_viewer_rate_14days)*100"]?.toFixed(0), li: dashboard.isLoading.ProgramInfor ? 0 : dashboard?.ProgramInfor?.data?.[0]?.["AVG(lead_in_effect)*100"]?.toFixed(0), retColor: dashboard.isLoading.ProgramInfor ? 'var(--green)' : dashboard?.ProgramInfor?.data?.[0]?.["AVG(watch_time_efficiency)"]?.toFixed(0) >= 75 ? 'var(--green)' : dashboard?.ProgramInfor?.data?.[0]?.["AVG(watch_time_efficiency)"]?.toFixed(0) >= 55 ? 'var(--cyan)' : dashboard?.ProgramInfor?.data?.[0]?.["AVG(watch_time_efficiency)"]?.toFixed(0) >= 35 ? 'var(--amber)' : 'var(--red)', rvColor: dashboard.isLoading.ProgramInfor ? 'var(--green)' : dashboard?.ProgramInfor?.data?.[0]?.["AVG(return_viewer_rate_14days)*100"]?.toFixed(0) >= 75 ? 'var(--green)' : dashboard?.ProgramInfor?.data?.[0]?.["AVG(return_viewer_rate_14days)*100"]?.toFixed(0) >= 55 ? 'var(--cyan)' : dashboard?.ProgramInfor?.data?.[0]?.["AVG(return_viewer_rate_14days)*100"]?.toFixed(0) >= 35 ? 'var(--amber)' : 'var(--red)', liColor: dashboard.isLoading.ProgramInfor ? 'var(--cyan)' : dashboard?.ProgramInfor?.data?.[0]?.["AVG(lead_in_effect)*100"]?.toFixed(0) >= 75 ? 'var(--green)' : dashboard?.ProgramInfor?.data?.[0]?.["AVG(lead_in_effect)*100"]?.toFixed(0) >= 55 ? 'var(--cyan)' : dashboard?.ProgramInfor?.data?.[0]?.["AVG(lead_in_effect)*100"]?.toFixed(0) >= 35 ? 'var(--amber)' : 'var(--red)',
      insight: '',
      curveTitle: `Drop-off Curve theo thời lượng · ${program}`,
      curveNote: '',
      episodes: dashboard.isLoading.WatchTimeEfficiencyLast8Weeks ? [0, 0, 0, 0, 0, 0, 0, 0] : dashboard?.WatchTimeEfficiencyLast8Weeks?.data?.map((item: any) => (item["AVG(Watch Time Efficiency)"] || 0).toFixed(1)),
      epNote: '',
      rvr: dashboard.isLoading.ProgramInfor ? 'Loading...' : dashboard?.ProgramInfor?.data?.[0]?.["AVG(return_viewer_rate_14days)*100"]?.toFixed(1) + '%', rvrSub: '',
      loyal: dashboard.isLoading.AverageDropOffByMinute ? 'Loading...' : dashboard?.AverageDropOffByMinute?.data?.[0]?.["AVG(avg_dropoff_by_view)*100*60"]?.toFixed(1) + '%', loyalSub: '',
      newv: dashboard.isLoading.ProgramInfor ? 'Loading...' : (100 - dashboard?.ProgramInfor?.data?.[0]?.["AVG(return_viewer_rate_14days)*100"] || 0)?.toFixed(1) + '%', newSub: '',
      leadin: dashboard.isLoading.ProgramInfor ? 'Loading...' : dashboard?.ProgramInfor?.data?.[0]?.["AVG(lead_in_effect)*100"]?.toFixed(1) + '%', leadinSub: '',
      epTitle: `📈 Retention Trend theo tập · 8 tập gần nhất · ${program}`,
    }
  }), [program, dashboard.isLoading.ProgramInfor, dashboard.isLoading.AverageDropOffByMinute, dashboard.isLoading.WatchTimeEfficiencyLast8Weeks]);

  useEffect(() => {
    if (!dashboard.isLoading.ProgramHealthScorecard) {
      Object.keys(sparkData).forEach(k => drawSparkline(k, sparkData[k].d, sparkData[k].c));
    }
    init(programs);
  }, [dashboard.isLoading.ProgramHealthScorecard, programs]);

  const [selectedProgramSlug, setSelectedProgramSlug] = useState(null);

  useEffect(() => {
    if (selectedProgramSlug && tab === 'program') {
      selectProgram(selectedProgramSlug, programs);
    }
  }, [programs, selectedProgramSlug]);

  const dates = useMemo(() => {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);

    const startDate = new Date(yesterday);
    startDate.setMonth(startDate.getMonth() - 3);
    startDate.setDate(1);

    const result = [];

    for (
      let d = new Date(startDate);
      d <= yesterday;
      d.setDate(d.getDate() + 1)
    ) {
      result.push({
        label: `${String(d.getDate()).padStart(2, "0")}/${String(
          d.getMonth() + 1
        ).padStart(2, "0")}/${d.getFullYear()}`,
        value: `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(
          2,
          "0"
        )}-${String(d.getDate()).padStart(2, "0")}`,
      });
    }

    return result.reverse();
  }, []);

  const weekOptions = useMemo(() => {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);

    const startDate = new Date(yesterday);
    startDate.setMonth(startDate.getMonth() - 3);
    startDate.setDate(1);

    // Lùi về Chủ nhật gần nhất
    startDate.setDate(startDate.getDate() - startDate.getDay());

    const weeks = [];

    let current = new Date(startDate);

    while (current <= yesterday) {
      const weekStart = new Date(current);

      const weekEnd = new Date(current);
      weekEnd.setDate(weekEnd.getDate() + 6);

      if (weekEnd > yesterday) {
        weekEnd.setTime(yesterday.getTime());
      }

      weeks.push({
        week: getISOWeek(weekStart),
        start: formatDate(weekStart),
        end: formatDate(weekEnd),
        startDate: new Date(weekStart),
      });

      current.setDate(current.getDate() + 7);
    }

    return weeks.sort((a, b) => b.startDate - a.startDate);
  }, []);

  const updateText = useMemo(() => {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate());

    const day = String(yesterday.getDate()).padStart(2, "0");
    const month = String(yesterday.getMonth() + 1).padStart(2, "0");
    const year = yesterday.getFullYear();

    return `${day}/${month}/${year}`;
  }, []);

  const onChange = (key, value) => {
    if (key === 'programs') {
      setSelectedProgramSlug(toSlug(value));
    }
    setAppliedFilters({ ...appliedFilters, [key]: [value] });
  }

  return (
    <>
      {/* <!-- NAV --> */}
      <nav className="nav">
        <div className="nav-logo">ConteL</div>
        <div className="nav-sub">· Content Health</div>
        <div className="nav-divider"></div>
        <div className="nav-product">VTV Content Health Dashboard<span>· Ban Chương trình</span></div>
        <div className="nav-right">
          {tab === 'lineup' && <select className="nav-select-2" onChange={(e) => onChange("weeks", e.target.value)}>
            {weekOptions.map((item) => (
              <option key={item.week} value={`Tuần ${item.week} (${item.start} - ${item.end})`}>
                {`Tuần ${item.week} (${item.start} - ${item.end})`}
              </option>
            ))}
          </select>}
          {tab !== 'lineup' && <select
            className="nav-select-2"
            onChange={(e) => onChange("dates", e.target.value)}
          >
            {dates.map((date) => (
              <option key={date.value} value={date.value}>
                {date.label}
              </option>
            ))}
          </select>}
          <div className="nav-channel-vtv1" style={{ opacity: appliedFilters?.channels === undefined || appliedFilters?.channels?.[0] === 'VTV1' ? 1 : 0.4 }} onClick={() => { setAppliedFilters({ ...appliedFilters, channels: ['VTV1'] }); }}>VTV1</div>
          <div className="nav-channel-vtv2" style={{ opacity: appliedFilters?.channels?.[0] !== 'VTV2' ? 0.4 : 1 }} onClick={() => { setAppliedFilters({ ...appliedFilters, channels: ['VTV2'] }); }}>VTV2</div>
          <div className="nav-channel-vtv3" style={{ opacity: appliedFilters?.channels?.[0] !== 'VTV3' ? 0.4 : 1 }} onClick={() => { setAppliedFilters({ ...appliedFilters, channels: ['VTV3'] }); }}>VTV3</div>
          <div className="nav-channel-vtv4" style={{ opacity: appliedFilters?.channels?.[0] !== 'VTV4' ? 0.4 : 1 }} onClick={() => { setAppliedFilters({ ...appliedFilters, channels: ['VTV4'] }); }}>VTV4</div>
          <div className="nav-channel-vtv5" style={{ opacity: appliedFilters?.channels?.[0] !== 'VTV5' ? 0.4 : 1 }} onClick={() => { setAppliedFilters({ ...appliedFilters, channels: ['VTV5'] }); }}>VTV5</div>
          <div className="nav-channel-vtv6" style={{ opacity: appliedFilters?.channels?.[0] !== 'VTV6' ? 0.4 : 1 }} onClick={() => { setAppliedFilters({ ...appliedFilters, channels: ['VTV6'] }); }}>VTV6</div>
          <div className="nav-channel-vtv8" style={{ opacity: appliedFilters?.channels?.[0] !== 'VTV8' ? 0.4 : 1 }} onClick={() => { setAppliedFilters({ ...appliedFilters, channels: ['VTV8'] }); }}>VTV8</div>
          <div className="nav-date"><span className="live-dot"></span>Cập nhật {updateText} · 09:00</div>
        </div>
      </nav>

      {/* <!-- HEADER --> */}
      <div className="header-strip">
        <div>
          <div className="header-title">Sức khỏe <span>Nội dung</span> {appliedFilters?.channels?.[0] || 'VTV1'}</div>
          <div className="header-sub">{appliedFilters?.weeks?.[0] || `Tuần ${weekOptions[0].week} (${weekOptions[0].start} - ${weekOptions[0].end})`} · {dashboard?.ProgramHealthScorecard?.data?.length || 0} chương trình đang theo dõi</div>
        </div>
        <div className="header-divider"></div>
        <div className="header-meta"><strong>Kênh</strong>{appliedFilters?.channels?.[0] || 'VTV1'}</div>
        <div className="header-divider"></div>
        <div className="header-meta"><strong>Nguồn data</strong>VTVgo Behavioral · EPG Sync</div>
        <div className="header-divider"></div>
        <div className="header-meta"><strong>Phạm vi</strong>Viewing events có consent</div>
        <div className="powered">Powered by <span>ConteL</span> · AMI Group · Nội bộ</div>
      </div>

      {/* <!-- TABS --> */}
      <div className="tab-bar">
        <div className="tab" onClick={() => { switchTab('lineup'); setTab('lineup') }}>📋 Tổng quan chương trình</div>
        <div className="tab" onClick={() => { switchTab('dependency'); setTab('dependency') }}>🔗 Quan hệ phụ thuộc trong lịch phát sóng</div>
        {/* <div className="tab" onClick={() => { switchTab('insights'); setTab('insights') }}>⚡ Quyết định tuần này</div> */}
        <div className="tab" onClick={() => { switchTab('program'); setTab('program') }}>🔍 Chi tiết chương trình</div>
      </div>

      <div className="main">

        {/* <!-- ══════════════════════════════
        TAB 1 — LINEUP OVERVIEW
══════════════════════════════ --> */}
        <div className="view active" id="tab-lineup">

          {/* <!-- KPI Summary --> */}
          <div className="summary-row">
            <div className="sum-card">
              <div className="sum-label">Avg Health Score · Kênh</div>
              <div className="sum-val amber">{dashboard.isLoading.AvgHealthScore ? 'Loading...' : AvgHealthScore}</div>
              <div className={`sum-delta ${dashboard.isLoading.AvgHealthScore ? 'down' : Number(AvgHealthScoreDelta) > 0 ? 'up' : 'down'}`}>{dashboard.isLoading.AvgHealthScore ? 'Loading...' : Number(AvgHealthScoreDelta) > 0 ? '↑ +' + AvgHealthScoreDelta : '↓ ' + AvgHealthScoreDelta} vs tuần trước</div>
              {/* <div className="sum-sub">Mức MAINTAIN — theo dõi sát</div> */}
            </div>
            <div className="sum-card">
              <div className="sum-label">Chương trình <span style={{ color: '#00e5a0', fontWeight: 700 }}>STRENGTHEN</span></div>
              <div className="sum-val green">{dashboard.isLoading.programSTRENGTHEN ? 'Loading...' : programSTRENGTHEN}</div>
              <div className={`sum-delta ${dashboard.isLoading.programSTRENGTHEN ? 'down' : programSTRENGTHENDelta > 0 ? 'up' : 'down'}`}>{dashboard.isLoading.programSTRENGTHEN ? 'Loading...' : programSTRENGTHENDelta > 0 ? '↑ +' + programSTRENGTHENDelta : '↓ ' + programSTRENGTHENDelta} vs tuần trước</div>
              {/* <div className="sum-sub">25% tổng lineup</div> */}
            </div>
            <div className="sum-card">
              <div className="sum-label">Chương trình <span style={{ color: '#ff3d5a', fontWeight: 700 }}>AT RISK</span></div>
              <div className="sum-val red">{dashboard.isLoading.programATRISK ? 'Loading...' : programATRISK}</div>
              <div className={`sum-delta ${dashboard.isLoading.programATRISK ? 'down' : programATRISKDelta > 0 ? 'up' : 'down'}`}>{dashboard.isLoading.programATRISK ? 'Loading...' : programATRISKDelta > 0 ? '↑ +' + programATRISKDelta : '↓ ' + programATRISKDelta} vs tuần trước</div>
              {/* <div className="sum-sub">Cần quyết định trong 2 tuần</div> */}
            </div>
            <div className="sum-card">
              <div className="sum-label">Avg Retention Rate</div>
              <div className="sum-val text">{dashboard.isLoading.AvgRetentionRate ? 'Loading...' : AvgRetentionRate}%</div>
              <div className={`sum-delta ${dashboard.isLoading.AvgRetentionRate ? 'down' : Number(AvgRetentionRateDelta) > 0 ? 'up' : 'down'}`}>{dashboard.isLoading.AvgRetentionRate ? 'Loading...' : Number(AvgRetentionRateDelta) > 0 ? '↑ +' + AvgRetentionRateDelta : '↓ ' + AvgRetentionRateDelta}pp</div>
              {/* <div className="sum-sub">Cuối chương trình · avg VTV1</div> */}
            </div>
            <div className="sum-card">
              <div className="sum-label">Avg Return Viewer Rate</div>
              <div className="sum-val green">{dashboard.isLoading.AvgReturnViewerRate ? 'Loading...' : AvgReturnViewerRate}%</div>
              <div className={`sum-delta ${dashboard.isLoading.AvgReturnViewerRate ? 'down' : Number(AvgReturnViewerRateDelta) > 0 ? 'up' : 'down'}`}>{dashboard.isLoading.AvgReturnViewerRate ? 'Loading...' : Number(AvgReturnViewerRateDelta) > 0 ? '↑ +' + AvgReturnViewerRateDelta : '↓ ' + AvgReturnViewerRateDelta}pp</div>
              {/* <div className="sum-sub">Device đã xem tuần trước quay lại</div> */}
            </div>
          </div>

          {/* <!-- Program Health Table --> */}
          <div className="section">
            <div className="section-header">
              <div className="section-title">📊 Program Health Scorecard · {appliedFilters?.channels?.[0] || 'VTV1'} · {appliedFilters?.weeks?.[0] || 'Tuần 27'}</div>
              <div className="section-sub">Click tên chương trình để xem chi tiết → Tab Chi tiết</div>
            </div>
            <div className="section-body" style={{ padding: '0' }}>
              <table className="health-table">
                <thead>
                  <tr>
                    <th style={{ paddingLeft: '16px' }}>Chương trình</th>
                    <th>Health Score</th>
                    <th>Trend 4 tuần</th>
                    <th>Trạng thái</th>
                    <th>Retention</th>
                    <th>Return Viewer</th>
                    <th>Lead-in Effect</th>
                    {/* <th>Hành động đề xuất</th> */}
                  </tr>
                </thead>
                {dashboard.isLoading.ProgramHealthScorecard ? <tr><td colSpan={8} style={{ padding: '16px', textAlign: 'center' }}>Loading...</td></tr>
                  :
                  <tbody>
                    {/* <!-- STRENGTHEN --> */}
                    {dashboard.ProgramHealthScorecard.data.map((program: any) => (
                      < tr onClick={() => { setAppliedFilters({ ...appliedFilters, programs: [program.program_name] }); setTab('program'); setSelectedProgramSlug(toSlug(program.program_name)); }} style={{ cursor: 'pointer' }}>
                        <td style={{ paddingLeft: '16px' }}>
                          <div className="prog-name">{program.program_name}</div>
                          {/* <div className="prog-slot">19:00 – 19:30 · Hàng ngày</div> */}
                          {/* <div className="prog-type">Tin tức</div> */}
                        </td>
                        <td>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <div className="score-ring"><svg width="40" height="40" viewBox="0 0 40 40"><circle cx="20" cy="20" r="15" fill="none" stroke="#1c2130" stroke-width="4" /><circle cx="20" cy="20" r="15" fill="none" stroke={program.status === 'STRENGTHEN' ? '#00e5a0' : program.status === 'MAINTAIN' ? '#3d8bff' : program.status === 'REVIEW' ? '#f5a623' : '#ff3d5a'} stroke-width="4" stroke-dasharray={`${program['Content Health Score']?.toFixed(0) / 100 * 94.2} 94.2`} stroke-linecap="round" /></svg><div className="score-num" style={{ color: program.status === 'STRENGTHEN' ? 'var(--green)' : program.status === 'MAINTAIN' ? 'var(--blue)' : program.status === 'REVIEW' ? 'var(--amber)' : 'var(--red)' }}>{program['Content Health Score']?.toFixed(0)}</div></div>
                          </div>
                        </td>
                        <td><div className="sparkline" id={`${program.program_name}`}></div></td>
                        <td><span className={`badge ${program.status.toLowerCase().replace(' ', '-')}`}>{program.status}</span></td>
                        <td><div className={`metric-num ${program['Watch Time Efficiency']?.toFixed(1) > 70 ? 'green' : program['Watch Time Efficiency']?.toFixed(1) > 60 ? 'text' : program['Watch Time Efficiency']?.toFixed(1) > 40 ? 'amber' : 'red'}`}>{program['Watch Time Efficiency']?.toFixed(1)}%</div>
                          {/* <div className="metric-sub">↑ +1.4pp</div> */}
                        </td>
                        <td><div className={`metric-num ${program['Return Viewer Rate']?.toFixed(1) > 55 ? 'green' : program['Return Viewer Rate']?.toFixed(1) > 45 ? 'text' : program['Return Viewer Rate']?.toFixed(1) > 30 ? 'amber' : 'red'}`}>{program['Return Viewer Rate']?.toFixed(1)}%</div>
                          {/* <div className="metric-sub">Loyal base cao</div> */}
                        </td>
                        <td><div className={`metric-num ${program['Lead-in Effect']?.toFixed(1) > 70 ? 'green' : program['Lead-in Effect']?.toFixed(1) > 35 ? 'text' : program['Lead-in Effect']?.toFixed(1) > 18 ? 'amber' : 'red'}`}>{program['Lead-in Effect']?.toFixed(1)}%</div>
                          {/* <div className="metric-sub">→ Phim VTV1 20h</div> */}
                        </td>
                        {/* <td style={{ fontSize: '10px', color: 'var(--green)' }}>Đề xuất nâng tier giá slot QC</td> */}
                      </tr>
                    ))}

                    {/* <tr onClick={() => selectProgram('rang-dong')} style={{ cursor: 'pointer' }}>
                      <td style={{ paddingLeft: '16px' }}>
                        <div className="prog-name">Rạng Đông</div>
                        <div className="prog-slot">20:00 – 21:00 · Thứ 2 – Thứ 6</div>
                        <div className="prog-type">Phim truyện</div>
                      </td>
                      <td>
                        <div className="score-ring"><svg width="40" height="40" viewBox="0 0 40 40"><circle cx="20" cy="20" r="15" fill="none" stroke="#1c2130" stroke-width="4" /><circle cx="20" cy="20" r="15" fill="none" stroke="#00e5a0" stroke-width="4" stroke-dasharray="78.5 94.2" stroke-linecap="round" /></svg><div className="score-num" style={{ color: 'var(--green)' }}>83</div></div>
                      </td>
                      <td><span className="badge strengthen">STRENGTHEN</span></td>
                      <td><div className="metric-num green">77.4%</div><div className="metric-sub">↑ +3.2pp</div></td>
                      <td><div className="metric-num green">68.9%</div><div className="metric-sub">↑ Fan base tăng</div></td>
                      <td><div className="metric-num green">74%</div><div className="metric-sub">→ VTV1 21:30</div></td>
                      <td><div className="sparkline" id="sp-2"></div></td>
                      <td style={{ fontSize: '10px', color: 'var(--green)' }}>Giữ khung giờ · tăng đầu tư</td>
                    </tr>

                    <tr onClick={() => selectProgram('suc-khoe-cs')} style={{ cursor: 'pointer' }}>
                      <td style={{ paddingLeft: '16px' }}>
                        <div className="prog-name">Sức Khỏe & Cuộc Sống</div>
                        <div className="prog-slot">06:30 – 07:00 · Hàng ngày</div>
                        <div className="prog-type">Sức khỏe</div>
                      </td>
                      <td>
                        <div className="score-ring"><svg width="40" height="40" viewBox="0 0 40 40"><circle cx="20" cy="20" r="15" fill="none" stroke="#1c2130" stroke-width="4" /><circle cx="20" cy="20" r="15" fill="none" stroke="#00e5a0" stroke-width="4" stroke-dasharray="75.4 94.2" stroke-linecap="round" /></svg><div className="score-num" style={{ color: 'var(--green)' }}>80</div></div>
                      </td>
                      <td><span className="badge strengthen">STRENGTHEN</span></td>
                      <td><div className="metric-num green">75.1%</div><div className="metric-sub">→ Ổn định</div></td>
                      <td><div className="metric-num green">66.2%</div><div className="metric-sub">Khán giả sáng trung thành</div></td>
                      <td><div className="metric-num text">51%</div><div className="metric-sub">→ Khởi nghiệp 7h</div></td>
                      <td><div className="sparkline" id="sp-3"></div></td>
                      <td style={{ fontSize: '10px', color: 'var(--text-3)' }}>Duy trì · Xét nâng 30 phút</td>
                    </tr>

                    <tr onClick={() => selectProgram('viet-nam-hom-nay')} style={{ cursor: 'pointer' }}>
                      <td style={{ paddingLeft: '16px' }}>
                        <div className="prog-name">Việt Nam Hôm Nay</div>
                        <div className="prog-slot">11:30 – 12:00 · Hàng ngày</div>
                        <div className="prog-type">Tin tức</div>
                      </td>
                      <td>
                        <div className="score-ring"><svg width="40" height="40" viewBox="0 0 40 40"><circle cx="20" cy="20" r="15" fill="none" stroke="#1c2130" stroke-width="4" /><circle cx="20" cy="20" r="15" fill="none" stroke="#3d8bff" stroke-width="4" stroke-dasharray="66.0 94.2" stroke-linecap="round" /></svg><div className="score-num" style={{ color: 'var(--blue)' }}>70</div></div>
                      </td>
                      <td><span className="badge maintain">MAINTAIN</span></td>
                      <td><div className="metric-num text">68.3%</div><div className="metric-sub">→ Ổn định</div></td>
                      <td><div className="metric-num text">52.1%</div><div className="metric-sub">Xem lại nhiều</div></td>
                      <td><div className="metric-num text">44%</div><div className="metric-sub">→ Phim trưa 12h</div></td>
                      <td><div className="sparkline" id="sp-4"></div></td>
                      <td style={{ fontSize: '10px', color: 'var(--text-3)' }}>Không thay đổi</td>
                    </tr>

                    <tr onClick={() => selectProgram('gameshow-vtv1')} style={{ cursor: 'pointer' }}>
                      <td style={{ paddingLeft: '16px' }}>
                        <div className="prog-name">Ai Là Triệu Phú</div>
                        <div className="prog-slot">21:30 – 22:30 · Thứ 7</div>
                        <div className="prog-type">Game show</div>
                      </td>
                      <td>
                        <div className="score-ring"><svg width="40" height="40" viewBox="0 0 40 40"><circle cx="20" cy="20" r="15" fill="none" stroke="#1c2130" stroke-width="4" /><circle cx="20" cy="20" r="15" fill="none" stroke="#3d8bff" stroke-width="4" stroke-dasharray="62.2 94.2" stroke-linecap="round" /></svg><div className="score-num" style={{ color: 'var(--blue)' }}>66</div></div>
                      </td>
                      <td><span className="badge maintain">MAINTAIN</span></td>
                      <td><div className="metric-num text">63.7%</div><div className="metric-sub">↑ +0.8pp</div></td>
                      <td><div className="metric-num text">58.4%</div><div className="metric-sub">Fan base ổn</div></td>
                      <td><div className="metric-num text">38%</div><div className="metric-sub">→ Thể Thao 22:30</div></td>
                      <td><div className="sparkline" id="sp-5"></div></td>
                      <td style={{ fontSize: '10px', color: 'var(--text-3)' }}>Xem xét đổi format tập</td>
                    </tr>

                    <tr onClick={() => selectProgram('tam-su-ban-tre')} style={{ cursor: 'pointer' }}>
                      <td style={{ paddingLeft: '16px' }}>
                        <div className="prog-name">Tâm Sự Bạn Trẻ</div>
                        <div className="prog-slot">22:00 – 22:30 · Thứ 3, Thứ 5</div>
                        <div className="prog-type">Talk show</div>
                      </td>
                      <td>
                        <div className="score-ring"><svg width="40" height="40" viewBox="0 0 40 40"><circle cx="20" cy="20" r="15" fill="none" stroke="#1c2130" stroke-width="4" /><circle cx="20" cy="20" r="15" fill="none" stroke="#f5a623" stroke-width="4" stroke-dasharray="49.1 94.2" stroke-linecap="round" /></svg><div className="score-num" style={{ color: 'var(--amber)' }}>52</div></div>
                      </td>
                      <td><span className="badge review">REVIEW</span></td>
                      <td><div className="metric-num amber">49.3%</div><div className="metric-sub">↓ −6.1pp</div></td>
                      <td><div className="metric-num amber">41.2%</div><div className="metric-sub">↓ Giảm tuần 3</div></td>
                      <td><div className="metric-num amber">22%</div><div className="metric-sub">Bleed cao</div></td>
                      <td><div className="sparkline" id="sp-6"></div></td>
                      <td style={{ fontSize: '10px', color: 'var(--amber)' }}>⚠ Xem xét đổi format</td>
                    </tr>

                    <tr onClick={() => selectProgram('chuyen-dong-24h')} style={{ cursor: 'pointer' }}>
                      <td style={{ paddingLeft: '16px' }}>
                        <div className="prog-name">Chuyển Động 24h</div>
                        <div className="prog-slot">15:00 – 15:30 · Hàng ngày</div>
                        <div className="prog-type">Tin tức</div>
                      </td>
                      <td>
                        <div className="score-ring"><svg width="40" height="40" viewBox="0 0 40 40"><circle cx="20" cy="20" r="15" fill="none" stroke="#1c2130" stroke-width="4" /><circle cx="20" cy="20" r="15" fill="none" stroke="#f5a623" stroke-width="4" stroke-dasharray="44.2 94.2" stroke-linecap="round" /></svg><div className="score-num" style={{ color: 'var(--amber)' }}>47</div></div>
                      </td>
                      <td><span className="badge review">REVIEW</span></td>
                      <td><div className="metric-num amber">44.8%</div><div className="metric-sub">↓ −8.3pp ⚠</div></td>
                      <td><div className="metric-num amber">38.7%</div><div className="metric-sub">↓ Giảm 4 tuần</div></td>
                      <td><div className="metric-num amber">19%</div><div className="metric-sub">Không giữ được</div></td>
                      <td><div className="sparkline" id="sp-7"></div></td>
                      <td style={{ fontSize: '10px', color: 'var(--amber)' }}>⚠ Xem xét dời khung giờ</td>
                    </tr>

                    <tr onClick={() => selectProgram('phim-trua')} style={{ cursor: 'pointer' }}>
                      <td style={{ paddingLeft: '16px' }}>
                        <div className="prog-name">Phim Trưa VTV1</div>
                        <div className="prog-slot">12:00 – 13:30 · Thứ 2 – Thứ 6</div>
                        <div className="prog-type">Phim truyện</div>
                      </td>
                      <td>
                        <div className="score-ring"><svg width="40" height="40" viewBox="0 0 40 40"><circle cx="20" cy="20" r="15" fill="none" stroke="#1c2130" stroke-width="4" /><circle cx="20" cy="20" r="15" fill="none" stroke="#ff3d5a" stroke-width="4" stroke-dasharray="30.2 94.2" stroke-linecap="round" /></svg><div className="score-num" style={{ color: 'var(--red)' }}>32</div></div>
                      </td>
                      <td><span className="badge at-risk">AT RISK</span></td>
                      <td><div className="metric-num red">31.4%</div><div className="metric-sub">↓↓ −12.1pp</div></td>
                      <td><div className="metric-num red">24.3%</div><div className="metric-sub">↓↓ Critical</div></td>
                      <td><div className="metric-num red">12%</div><div className="metric-sub">Không giữ ai</div></td>
                      <td><div className="sparkline" id="sp-8"></div></td>
                      <td style={{ fontSize: '10px', color: 'var(--red)' }}>🔴 Thay phim ngay / review</td>
                    </tr>

                    <tr onClick={() => selectProgram('khoe-dep')} style={{ cursor: 'pointer' }}>
                      <td style={{ paddingLeft: '16px' }}>
                        <div className="prog-name">Khỏe Đẹp Mỗi Ngày</div>
                        <div className="prog-slot">14:00 – 14:30 · Thứ 3, Thứ 5, Thứ 7</div>
                        <div className="prog-type">Lifestyle</div>
                      </td>
                      <td>
                        <div className="score-ring"><svg width="40" height="40" viewBox="0 0 40 40"><circle cx="20" cy="20" r="15" fill="none" stroke="#1c2130" stroke-width="4" /><circle cx="20" cy="20" r="15" fill="none" stroke="#ff3d5a" stroke-width="4" stroke-dasharray="28.3 94.2" stroke-linecap="round" /></svg><div className="score-num" style={{ color: 'var(--red)' }}>30</div></div>
                      </td>
                      <td><span className="badge at-risk">AT RISK</span></td>
                      <td><div className="metric-num red">29.8%</div><div className="metric-sub">↓ −5.4pp</div></td>
                      <td><div className="metric-num red">22.1%</div><div className="metric-sub">↓ Mất dần</div></td>
                      <td><div className="metric-num red">9%</div><div className="metric-sub">Thấp nhất kênh</div></td>
                      <td><div className="sparkline" id="sp-9"></div></td>
                      <td style={{ fontSize: '10px', color: 'var(--red)' }}>🔴 Xem xét thay thế nội dung</td>
                    </tr> */}
                  </tbody>}
              </table>
            </div>
          </div>

        </div>
        {/* <!-- /tab-lineup --> */}

        {/* <!-- ══════════════════════════════
        TAB 2 — SCHEDULING DEPENDENCY
══════════════════════════════ --> */}
        <div className="view" id="tab-dependency">

          {/* <div className="callout" style={{ marginBottom: '14px' }}>
            <strong>Scheduling Dependency Map</strong> — Chương trình nào đang dẫn audience sang chương trình nào? Lead-in Effect cao = chương trình trước đang "cho mượn" khán giả. Nếu cắt chương trình có Lead-in cao, chương trình sau sẽ mất audience ngay lập tức. Đây là dữ liệu VTV1 chưa từng có trước đây.
          </div> */}

          <div className="two-col" style={{ marginBottom: '12px' }}>
            {/* <!-- Prime Time Chain --> */}
            <div className="section">
              <div className="section-header">
                <div className="section-title">🌟 Khung Giờ Vàng · 19:00 – 22:30</div>
                <div className="section-sub">Hàng ngày</div>
              </div>
              <div className="section-body">
                <div className="dep-map">
                  {dashboard.isLoading.PrimeTimeChain19h0022h30 ?
                    <div style={{ textAlign: 'center' }}>Loading...</div>
                    :
                    <>
                      {dashboard.PrimeTimeChain19h0022h30.data.map((program: any, index: number) => (
                        <><div className="dep-row" style={{ borderColor: program['% audience thoát ra'] > 70 ? 'rgba(255,61,90,.25)' : '' }}>
                          <div>
                            <div className="dep-prog">{program['Chương trình']}</div>
                            <div className="dep-slot">{program.start_hour}h</div>
                          </div>
                          {program['% audience thoát ra'] <= 40 && <span className="dep-anchor">ANCHOR</span>}
                          {program['% audience thoát ra'] > 70 && <span className="dep-bleed">HIGH BLEED</span>}
                          <div style={{ marginLeft: 'auto', textAlign: 'right' }}>
                            <div style={{ fontSize: '11px', color: 'var(--text-3)' }}>Khán giả thoát ra</div>
                            <div className={`metric-num ${program['% audience thoát ra'] > 70 ? 'red' : program['% audience thoát ra'] > 40 ? 'amber' : program['% audience thoát ra'] > 10 ? 'text' : 'green'}`} style={{ fontSize: '16px' }}>{program['% audience thoát ra']?.toFixed(0)}%</div>
                          </div>
                        </div>
                          {index < dashboard.PrimeTimeChain19h0022h30.data.length - 1 &&
                            <><div style={{ textAlign: 'center', fontSize: '20px', color: program['% audience tiếp tục xem'] > 70 ? 'var(--green)' : program['% audience tiếp tục xem'] > 40 ? 'var(--amber)' : 'var(--red)', padding: '2px' }}>↓</div>
                              <div style={{ textAlign: 'center', fontSize: '11px', color: program['% audience tiếp tục xem'] > 70 ? 'var(--green)' : program['% audience tiếp tục xem'] > 40 ? 'var(--amber)' : 'var(--red)', marginTop: '-6px', marginBottom: '2px', fontWeight: '700' }}>{program['% audience tiếp tục xem']?.toFixed(0)}% khán giả tiếp tục xem</div></>
                          }
                        </>
                      ))
                      }</>}
                  {/* <div className="dep-row">
                    <div>
                      <div className="dep-prog">Rạng Đông</div>
                      <div className="dep-slot">20:00 – 21:00</div>
                    </div>
                    <span className="dep-anchor">ANCHOR</span>
                    <div style={{ marginLeft: 'auto', textAlign: 'right' }}>
                      <div style={{ fontSize: '9px', color: 'var(--text-3)' }}>Audience thoát ra</div>
                      <div className="metric-num text" style={{ fontSize: '16px' }}>26%</div>
                    </div>
                  </div>

                  <div style={{ textAlign: 'center', fontSize: '18px', color: 'var(--amber)', padding: '2px' }}>↓</div>
                  <div style={{ textAlign: 'center', fontSize: '9px', color: 'var(--amber)', marginTop: '-6px', marginBottom: '2px', fontWeight: '700' }}>74% audience tiếp tục xem</div>

                  <div className="dep-row">
                    <div>
                      <div className="dep-prog">Chuyện Gia Đình</div>
                      <div className="dep-slot">21:00 – 21:30</div>
                    </div>
                    <div style={{ marginLeft: 'auto', textAlign: 'right' }}>
                      <div style={{ fontSize: '9px', color: 'var(--text-3)' }}>Audience thoát ra</div>
                      <div className="metric-num amber" style={{ fontSize: '16px' }}>43%</div>
                    </div>
                  </div>

                  <div style={{ textAlign: 'center', fontSize: '18px', color: 'var(--red)', padding: '2px' }}>↓</div>
                  <div style={{ textAlign: 'center', fontSize: '9px', color: 'var(--red)', marginTop: '-6px', marginBottom: '2px', fontWeight: '700' }}>57% audience tiếp tục xem ↓ giảm</div>

                  <div className="dep-row" style={{ borderColor: 'rgba(255,61,90,.25)' }}>
                    <div>
                      <div className="dep-prog">Tâm Sự Bạn Trẻ</div>
                      <div className="dep-slot">22:00 – 22:30</div>
                    </div>
                    <span className="dep-bleed">HIGH BLEED</span>
                    <div style={{ marginLeft: 'auto', textAlign: 'right' }}>
                      <div style={{ fontSize: '9px', color: 'var(--text-3)' }}>Audience thoát ra</div>
                      <div className="metric-num red" style={{ fontSize: '16px' }}>78%</div>
                    </div>
                  </div> */}

                </div>

                {/* <div className="callout" style={{ marginTop: '12px' }}>
                  <strong>Insight:</strong> Nếu cắt "Rạng Đông" — "Chuyện Gia Đình" mất ~540K viewers không có chương trình dẫn vào. Tác động dây chuyền đến cả block 21h–22h30.
                </div> */}
              </div>
            </div>

            {/* <!-- Morning Chain --> */}
            <div className="section">
              <div className="section-header">
                <div className="section-title">🌅 Khung Buổi Sáng · 06:30 – 09:00</div>
                <div className="section-sub">Hàng ngày</div>
              </div>
              <div className="section-body">
                <div className="dep-map">

                  {dashboard.isLoading.MorningBlock06h3009h00 ?
                    <div style={{ textAlign: 'center' }}>Loading...</div>
                    :
                    <>
                      {dashboard.MorningBlock06h3009h00.data.map((program: any, index: number) => (
                        <><div className="dep-row" style={{ borderColor: program['% audience thoát ra'] > 70 ? 'rgba(255,61,90,.25)' : '' }}>
                          <div>
                            <div className="dep-prog">{program['Chương trình']}</div>
                            <div className="dep-slot">{program.start_hour}h</div>
                          </div>
                          {program['% audience thoát ra'] <= 40 && <span className="dep-anchor">ANCHOR</span>}
                          {program['% audience thoát ra'] > 70 && <span className="dep-bleed">HIGH BLEED</span>}
                          <div style={{ marginLeft: 'auto', textAlign: 'right' }}>
                            <div style={{ fontSize: '11px', color: 'var(--text-3)' }}>Khán giả thoát ra</div>
                            <div className={`metric-num ${program['% audience thoát ra'] > 70 ? 'red' : program['% audience thoát ra'] > 40 ? 'amber' : program['% audience thoát ra'] > 10 ? 'text' : 'green'}`} style={{ fontSize: '16px' }}>{program['% audience thoát ra']?.toFixed(0)}%</div>
                          </div>
                        </div>
                          {index < dashboard.MorningBlock06h3009h00.data.length - 1 &&
                            <><div style={{ textAlign: 'center', fontSize: '20px', color: program['% audience tiếp tục xem'] > 70 ? 'var(--green)' : program['% audience tiếp tục xem'] > 40 ? 'var(--amber)' : 'var(--red)', padding: '2px' }}>↓</div>
                              <div style={{ textAlign: 'center', fontSize: '11px', color: program['% audience tiếp tục xem'] > 70 ? 'var(--green)' : program['% audience tiếp tục xem'] > 40 ? 'var(--amber)' : 'var(--red)', marginTop: '-6px', marginBottom: '2px', fontWeight: '700' }}>{program['% audience tiếp tục xem']?.toFixed(0)}% khán giả tiếp tục xem</div></>
                          }
                        </>
                      ))
                      }</>}

                  {/* <div className="dep-row">
                    <div>
                      <div className="dep-prog">Sức Khỏe & Cuộc Sống</div>
                      <div className="dep-slot">06:30 – 07:00</div>
                    </div>
                    <span className="dep-anchor">ANCHOR</span>
                    <div style={{ marginLeft: 'auto', textAlign: 'right' }}>
                      <div style={{ fontSize: '9px', color: 'var(--text-3)' }}>Thoát ra</div>
                      <div className="metric-num text" style={{ fontSize: '16px' }}>18%</div>
                    </div>
                  </div>

                  <div style={{ textAlign: 'center', fontSize: '18px', color: 'var(--green)', padding: '2px' }}>↓</div>
                  <div style={{ textAlign: 'center', fontSize: '9px', color: 'var(--green)', marginTop: '-6px', marginBottom: '2px', fontWeight: '700' }}>82% audience tiếp tục</div>

                  <div className="dep-row">
                    <div>
                      <div className="dep-prog">Khởi Nghiệp Việt</div>
                      <div className="dep-slot">07:00 – 07:30</div>
                    </div>
                    <div style={{ marginLeft: 'auto', textAlign: 'right' }}>
                      <div style={{ fontSize: '9px', color: 'var(--text-3)' }}>Thoát ra</div>
                      <div className="metric-num text" style={{ fontSize: '16px' }}>34%</div>
                    </div>
                  </div>

                  <div style={{ textAlign: 'center', fontSize: '18px', color: 'var(--amber)', padding: '2px' }}>↓</div>
                  <div style={{ textAlign: 'center', fontSize: '9px', color: 'var(--amber)', marginTop: '-6px', marginBottom: '2px', fontWeight: '700' }}>66% audience tiếp tục</div>

                  <div className="dep-row">
                    <div>
                      <div className="dep-prog">Thể Dục Buổi Sáng</div>
                      <div className="dep-slot">07:30 – 08:00</div>
                    </div>
                    <div style={{ marginLeft: 'auto', textAlign: 'right' }}>
                      <div style={{ fontSize: '9px', color: 'var(--text-3)' }}>Thoát ra</div>
                      <div className="metric-num amber" style={{ fontSize: '16px' }}>52%</div>
                    </div>
                  </div>

                  <div style={{ textAlign: 'center', fontSize: '18px', color: 'var(--red)', padding: '2px' }}>↓</div>
                  <div style={{ textAlign: 'center', fontSize: '9px', color: 'var(--red)', marginTop: '-6px', marginBottom: '2px', fontWeight: '700' }}>48% còn lại — audience break</div>

                  <div className="dep-row" style={{ borderColor: 'rgba(255,61,90,.25)' }}>
                    <div>
                      <div className="dep-prog">Chào Buổi Sáng</div>
                      <div className="dep-slot">08:00 – 09:00</div>
                    </div>
                    <span className="dep-bleed">WEAK LEAD-IN</span>
                    <div style={{ marginLeft: 'auto', textAlign: 'right' }}>
                      <div style={{ fontSize: '9px', color: 'var(--text-3)' }}>Fresh audience</div>
                      <div className="metric-num amber" style={{ fontSize: '16px' }}>61%</div>
                    </div>
                  </div> */}

                </div>

                {/* <div className="callout" style={{ marginTop: '12px' }}>
                  <strong>Counter-intuitive:</strong> "Sức Khỏe & Cuộc Sống" đang là anchor của cả buổi sáng — nhưng ratings tuyệt đối của nó không cao vì khung giờ sớm. Cắt chương trình này = mất dây chuyền sáng toàn bộ.
                </div> */}
              </div>
            </div>
          </div>
          {/* <!-- /two-col --> */}

          {/* <!-- Audience Bleed Summary --> */}
          <div className="section">
            <div className="section-header">
              <div className="section-title">📉 Điểm Rò Rỉ Audience (Audience Bleed) · Toàn kênh</div>
              <div className="section-sub">Vị trí nào đang "làm thủng" lineup</div>
            </div>
            <div className="section-body">
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '10px' }}>
                <div className="mini-kpi">
                  <div className="mk-label">Điểm bleed cao nhất</div>
                  <div className="mk-val red">{dashboard.isLoading.AudienceFullChannel ? 'Loading...' : dashboard.AudienceFullChannel?.data?.[0]?.['Điểm bleed cao nhất']}</div>
                  {/* <div className="mk-sub">Bleed 88% — mất gần hết audience sau chương trình</div> */}
                </div>
                <div className="mini-kpi">
                  <div className="mk-label">Bleed rate TB toàn kênh</div>
                  <div className={`mk-val ${dashboard.AudienceFullChannel?.data?.[0]?.["Lead-in TB toàn kênh"]?.toFixed(0) > 70 ? 'red' : dashboard.AudienceFullChannel?.data?.[0]?.["Lead-in TB toàn kênh"]?.toFixed(0) > 50 ? 'amber' : 'green'}`}>{dashboard.isLoading.AudienceFullChannel ? 'Loading...' : dashboard.AudienceFullChannel?.data?.[0]?.["Lead-in TB toàn kênh"]?.toFixed(0)}%</div>
                  {/* <div className="mk-sub">↑ +3pp vs tuần trước</div> */}
                </div>
                <div className="mini-kpi">
                  <div className="mk-label">Chương trình giữ tốt nhất</div>
                  <div className="mk-val green">{dashboard.isLoading.AudienceFullChannel ? 'Loading...' : dashboard.AudienceFullChannel?.data?.[0]?.["Chương trình giữ tốt nhất"]}</div>
                  {/* <div className="mk-sub">Bleed chỉ 7% — anchor mạnh nhất</div> */}
                </div>
                <div className="mini-kpi">
                  <div className="mk-label">Rủi ro chain reaction</div>
                  <div className={`mk-val ${dashboard.AudienceFullChannel?.data?.[0]?.["Rủi ro chain reaction"]?.toFixed(0) > 70 ? 'green' : dashboard.AudienceFullChannel?.data?.[0]?.["Rủi ro chain reaction"]?.toFixed(0) > 50 ? 'amber' : 'red'}`}>{dashboard.isLoading.AudienceFullChannel ? 'Loading...' : dashboard.AudienceFullChannel?.data?.[0]?.["Rủi ro chain reaction"]} điểm</div>
                  {/* <div className="mk-sub">Prime time 22h & Trưa 12h</div> */}
                </div>
              </div>
            </div>
          </div>

        </div>
        {/* <!-- /tab-dependency --> */}

        {/* <!-- ══════════════════════════════
        TAB 3 — QUYẾT ĐỊNH TUẦN NÀY
══════════════════════════════ --> */}
        <div className="view" id="tab-insights">

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>

            <div>
              <div style={{ fontSize: '10px', color: 'var(--red)', letterSpacing: '.08em', textTransform: 'uppercase', fontWeight: '600', marginBottom: '8px' }}>🔴 Cần quyết định ngay</div>
              <div className="insights-list">

                <div className="insight-item critical">
                  <div className="insight-icon">🔴</div>
                  <div className="insight-body">
                    <div className="insight-title critical">Phim Trưa VTV1 — Giảm 4 tuần liên tiếp</div>
                    <div className="insight-desc">Retention xuống còn 31.4% — từ 53.1% cách đây 4 tuần. Return viewer mất 52% so với baseline. Không có chương trình nào "bắt" audience sau khi thoát ra.</div>
                    <div className="insight-action critical">→ Đề xuất: Thay phim mới hoặc dời sang khung phụ</div>
                  </div>
                </div>

                <div className="insight-item critical">
                  <div className="insight-icon">🔴</div>
                  <div className="insight-body">
                    <div className="insight-title critical">Khỏe Đẹp Mỗi Ngày — Audience bleed nghiêm trọng</div>
                    <div className="insight-desc">Retention 29.8%, thấp nhất kênh. Sau chương trình này, 91% audience rời VTV1. Vị trí 14h đang "phá vỡ" chain chiều của kênh.</div>
                    <div className="insight-action critical">→ Đề xuất: Review nội dung hoặc thay thế format</div>
                  </div>
                </div>

                <div className="insight-item critical">
                  <div className="insight-icon">⚠️</div>
                  <div className="insight-body">
                    <div className="insight-title critical">Chuyển Động 24h — Giảm 8.3pp trong 1 tuần</div>
                    <div className="insight-desc">Retention từ 53.1% xuống 44.8% — mức giảm lớn bất thường trong 1 tuần. Cần kiểm tra ngay: thay đổi nội dung gì tuần vừa rồi?</div>
                    <div className="insight-action critical">→ Đề xuất: Audit nội dung tuần 18 vs tuần 19</div>
                  </div>
                </div>

              </div>
            </div>

            <div>
              <div style={{ fontSize: '10px', color: 'var(--amber)', letterSpacing: '.08em', textTransform: 'uppercase', fontWeight: '600', marginBottom: '8px' }}>🟡 Theo dõi thêm 1–2 tuần</div>
              <div className="insights-list">

                <div className="insight-item warning">
                  <div className="insight-icon">📉</div>
                  <div className="insight-body">
                    <div className="insight-title warning">Tâm Sự Bạn Trẻ — Trend giảm tuần thứ 3</div>
                    <div className="insight-desc">Retention giảm liên tục từ 61.2% → 54.8% → 49.3%. Return viewer rate đang giảm — khán giả quen đang rời bỏ. Chưa đến ngưỡng cắt nhưng cần hành động.</div>
                    <div className="insight-action warning">→ Gặp ekip sản xuất · Xem drop-off curve tập mới nhất</div>
                  </div>
                </div>

                <div className="insight-item warning">
                  <div className="insight-icon">⏰</div>
                  <div className="insight-body">
                    <div className="insight-title warning">Ai Là Triệu Phú — Plateau không tăng được</div>
                    <div className="insight-desc">Retention ổn định 63–65% nhưng không tăng dù đã 6 tuần. Return viewer bắt đầu giảm nhẹ. Khán giả không bị mất nhưng cũng không thu hút thêm mới.</div>
                    <div className="insight-action warning">→ Xem xét refresh format hoặc guest lineup</div>
                  </div>
                </div>

              </div>

              <div style={{ fontSize: '10px', color: 'var(--green)', letterSpacing: '.08em', textTransform: 'uppercase', fontWeight: '600', margin: '14px 0 8px' }}>🟢 Cơ hội tận dụng ngay</div>
              <div className="insights-list">

                <div className="insight-item opportunity">
                  <div className="insight-icon">🚀</div>
                  <div className="insight-body">
                    <div className="insight-title opportunity">Rạng Đông — Tăng 3 tuần liên tiếp</div>
                    <div className="insight-desc">Retention từ 71.1% → 74.3% → 77.4%. Fan base đang tích lũy tốt — return viewer tăng từ 61% lên 68.9%. Đây là thời điểm tốt nhất để nâng giá slot QC của khung 20h–21h.</div>
                    <div className="insight-action opportunity">→ Thông báo TVAD nâng tier pricing slot này</div>
                  </div>
                </div>

                <div className="insight-item opportunity">
                  <div className="insight-icon">💡</div>
                  <div className="insight-body">
                    <div className="insight-title opportunity">Counter-intuitive: Sức Khỏe & Cuộc Sống quan trọng hơn ratings</div>
                    <div className="insight-desc">Ratings tuyệt đối thấp vì khung 6:30 sáng — nhưng đây là anchor của toàn bộ Morning Block. 82% audience của nó xem chương trình tiếp theo. Nếu dựa vào ratings để cắt chương trình này sẽ là sai lầm lớn.</div>
                    <div className="insight-action opportunity">→ Bảo vệ trong lineup review · Trình bày với lãnh đạo</div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
        {/* <!-- /tab-insights --> */}

        {/* <!-- ══════════════════════════════
        TAB 4 — CHI TIẾT CHƯƠNG TRÌNH
══════════════════════════════ --> */}
        <div className="view" id="tab-program">

          {/* <!-- Program selector --> */}
          <div className="section" style={{ marginBottom: '14px' }}>
            <div className="section-header">
              <div className="section-title">🔍 Chọn chương trình để xem chi tiết</div>
            </div>
            <div className="section-body">
              <select
                className="nav-select-2"
                onChange={(e) => onChange("programs", e.target.value)}
              >
                {dashboard?.FilterProgram?.data?.map((program) => (
                  <option key={program.program_name} value={program.program_name}>
                    {program.program_name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* <!-- Program Detail: Rạng Đông (default) --> */}
          <div id="prog-detail">
            <div style={{ display: 'grid', gridTemplateColumns: '400px 1fr', gap: '14px', marginBottom: '14px' }}>
              {/* <!-- Health Score Card --> */}
              <div className="hs-card">
                <div className="hs-prog-name" id="prog-name">Rạng Đông</div>
                <div className="hs-score strengthen" id="prog-score">83</div>
                <div className="hs-badge"><span className="badge strengthen" id="prog-badge">STRENGTHEN</span></div>
                <div style={{ fontSize: '9px', color: 'var(--text-3)', marginTop: '4px' }} id="prog-slot">20:00 – 21:00 · T2–T6</div>
                <div className="hs-components">
                  <div className="hs-comp">
                    <div className="hs-comp-label">Retention</div>
                    <div className="hs-comp-bar-wrap"><div className="hs-comp-bar" id="bar-ret" style={{ width: '77%', background: 'var(--green)' }}></div></div>
                    <div className="hs-comp-val" id="val-ret">77%</div>
                  </div>
                  <div className="hs-comp">
                    <div className="hs-comp-label">Return-Viewer</div>
                    <div className="hs-comp-bar-wrap"><div className="hs-comp-bar" id="bar-rv" style={{ width: '69%', background: 'var(--green)' }}></div></div>
                    <div className="hs-comp-val" id="val-rv">69%</div>
                  </div>
                  <div className="hs-comp">
                    <div className="hs-comp-label">Lead-in</div>
                    <div className="hs-comp-bar-wrap"><div className="hs-comp-bar" id="bar-li" style={{ width: '74%', background: 'var(--cyan)' }}></div></div>
                    <div className="hs-comp-val" id="val-li">74%</div>
                  </div>
                </div>
                <div style={{ margin: '12px 0 0 0', fontSize: '9px', color: 'var(--text-4)', textAlign: 'left', width: '100%' }}>
                  <div id="prog-insight" style={{ color: 'var(--text-3)', lineHeight: '1.5' }}>3 tuần tăng liên tiếp. Fan base đang tích lũy. Khuyến nghị: nâng tier giá slot QC khung 20–21h.</div>
                </div>
              </div>

              {/* <!-- Retention Curve --> */}
              <div className="chart-wrap">
                <div className="chart-title" id="curve-title">Drop-off Curve · Rạng Đông · Tập mới nhất · 60 phút</div>
                <svg width="100%" height="180" viewBox="0 0 700 180" preserveAspectRatio="none" id="retention-curve">
                  <defs>
                    <linearGradient id="rg1" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#00e5a0" stopOpacity=".15" />
                      <stop offset="100%" stopColor="#00e5a0" stopOpacity=".01" />
                    </linearGradient>
                  </defs>
                  {/* <!-- grid --> */}
                  <line x1="0" y1="0" x2="700" y2="0" stroke="#1c2130" strokeWidth="1" />
                  <line x1="0" y1="45" x2="700" y2="45" stroke="#1c2130" strokeWidth="1" />
                  <line x1="0" y1="90" x2="700" y2="90" stroke="#1c2130" strokeWidth="1" />
                  <line x1="0" y1="135" x2="700" y2="135" stroke="#1c2130" strokeWidth="1" />
                  <line x1="0" y1="180" x2="700" y2="180" stroke="#1c2130" strokeWidth="1" />
                  {/* <!-- labels --> */}
                  <text x="4" y="10" fill="#2a3050" fontSize="9" fontFamily="monospace">100%</text>
                  <text x="4" y="55" fill="#2a3050" fontSize="9" fontFamily="monospace">75%</text>
                  <text x="4" y="100" fill="#2a3050" fontSize="9" fontFamily="monospace">50%</text>
                  <text x="4" y="145" fill="#2a3050" fontSize="9" fontFamily="monospace">25%</text>

                  {/* <!-- retention area --> */}
                  {dashboard.isLoading.DropOffCurve ? null : (
                    (() => {
                      const data = dashboard.DropOffCurve?.data;
                      if (!data || data.length === 0) return null;

                      const maxMin = Math.max(...data.map((d: any) => d.minute_index));
                      const pathPoints = data.map((d: any) => {
                        const x = (d.minute_index / maxMin) * 700;
                        const y = 180 - (d['AVG(dropoff_rate_by_view)'] * 180);
                        return `${x},${y}`;
                      });

                      const dLine = `M0,${180 - (data[0]['AVG(dropoff_rate_by_view)'] * 180)} L${pathPoints.join(' L')}`;
                      const dArea = `${dLine} L700,180 L0,180Z`;

                      const labels = [0, 1, 2, 3, 4].map(i => {
                        const val = Math.round(maxMin * (i / 4));
                        const x = i * 165;
                        return <text key={i} x={x} y="175" fill="#2a3050" fontSize="8" fontFamily="monospace">{val}:00</text>;
                      });

                      return (
                        <>
                          <path d={dArea} fill="url(#rg1)" />
                          <path d={dLine} fill="none" stroke="#00e5a0" strokeWidth="2" />
                          {labels}
                        </>
                      );
                    })()
                  )}

                  {/* <!-- ad break 1 --> */}
                  {/* <line x1="240" y1="0" x2="240" y2="180" stroke="#ff3d5a" strokeWidth="1" strokeDasharray="3,3" opacity=".5" />
                  <rect x="232" y="0" width="16" height="14" fill="rgba(255,61,90,0.15)" rx="2" />
                  <text x="240" y="10" fill="#ff3d5a" fontSize="8" fontFamily="monospace" textAnchor="middle">QC1</text> */}
                  {/* <!-- drop annotation --> */}
                  {/* <text x="245" y="46" fill="#ff3d5a" fontSize="9" fontFamily="monospace">−18%</text> */}
                  {/* <!-- ad break 2 --> */}
                  {/* <line x1="470" y1="0" x2="470" y2="180" stroke="#ff3d5a" strokeWidth="1" strokeDasharray="3,3" opacity=".5" />
                  <rect x="462" y="0" width="16" height="14" fill="rgba(255,61,90,0.15)" rx="2" /> */}
                  {/* <text x="470" y="10" fill="#ff3d5a" fontSize="8" fontFamily="monospace" textAnchor="middle">QC2</text>
                  <text x="475" y="76" fill="#ff3d5a" fontSize="9" fontFamily="monospace">−11%</text> */}
                  {/* <!-- peak window --> */}
                  {/* <rect x="320" y="0" width="140" height="180" fill="rgba(0,229,160,0.04)" rx="0" />
                  <text x="390" y="170" fill="#00e5a0" fontSize="8" fontFamily="monospace" textAnchor="middle">Peak Attention</text> */}
                  {/* <!-- time labels --> */}
                </svg>
                <div className="chart-note" id="curve-note">QC1 tại phút 24 gây drop 18% · QC2 tại phút 40 gây drop 11% · Peak Attention: phút 27–40 — đây là vị trí quảng cáo tối ưu nhất</div>
              </div>
            </div>

            {/* <!-- Episode Trend + Mini KPIs --> */}
            <div className="two-col-equal">
              <div className="section">
                <div className="section-header"><div className="section-title" id="ep-trend-title">📈 Retention Trend theo tập · 8 tập gần nhất</div></div>
                <div className="section-body">
                  <div style={{ display: 'flex', alignItems: 'flex-end', gap: '4px', height: '250px', paddingBottom: '4px' }} id="episode-bars">
                  </div>
                  <div style={{ display: 'flex', gap: '4px', marginTop: '2px' }} id="episode-labels"></div>
                  <div style={{ marginTop: '10px', fontSize: '10px', color: 'var(--text-3)' }} id="ep-trend-note">Xu hướng tăng tốt trong 3 tập gần nhất. Tập 28 cao nhất trong chuỗi.</div>
                </div>
              </div>
              <div className="section" style={{ display: 'flex', flexDirection: 'column' }}>
                <div className="section-header"><div className="section-title">👥 Chỉ số mức độ trung thành khán giả</div></div>
                <div className="section-body" style={{ flex: 1 }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', height: "100%" }}>
                    <div className="mini-kpi">
                      <div className="mk-label" style={{ marginBottom: 10 }}>Return Viewer Rate</div>
                      <div className={`mk-val ${dashboard.isLoading.ProgramInfor ? 'green' : (dashboard?.ProgramInfor?.data?.[0]?.["AVG(return_viewer_rate_14days)*100"] || 0).toFixed(1) > 70 ? 'green' : (dashboard?.ProgramInfor?.data?.[0]?.["AVG(return_viewer_rate_14days)*100"] || 0).toFixed(1) > 60 ? 'text' : (dashboard?.ProgramInfor?.data?.[0]?.["AVG(return_viewer_rate_14days)*100"] || 0).toFixed(1) > 40 ? 'amber' : 'red'}`} id="kpi-rvr">68.9%</div>
                      <div className="mk-sub" id="kpi-rvr-sub">↑ +2.3pp vs tuần trước</div>
                    </div>
                    <div className="mini-kpi">
                      <div className="mk-label" style={{ marginBottom: 10 }}>Loyal Fan (xem ≥3/4 tập)</div>
                      <div className={`mk-val ${dashboard.isLoading.AverageDropOffByMinute ? 'green' : (dashboard?.AverageDropOffByMinute?.data?.[0]?.["AVG(avg_dropoff_by_view)*100*60"] || 0).toFixed(1) > 70 ? 'green' : (dashboard?.AverageDropOffByMinute?.data?.[0]?.["AVG(avg_dropoff_by_view)*100*60"] || 0).toFixed(1) > 60 ? 'text' : (dashboard?.AverageDropOffByMinute?.data?.[0]?.["AVG(avg_dropoff_by_view)*100*60"] || 0).toFixed(1) > 40 ? 'amber' : 'red'}`} id="kpi-loyal">41.2%</div>
                      <div className="mk-sub" id="kpi-loyal-sub">Fan base ổn định</div>
                    </div>
                    <div className="mini-kpi">
                      <div className="mk-label" style={{ marginBottom: 10 }}>New Viewer Rate</div>
                      <div className={`mk-val ${dashboard.isLoading.ProgramInfor ? 'green' : 100 - (dashboard?.ProgramInfor?.data?.[0]?.["AVG(return_viewer_rate_14days)*100"] || 0) > 70 ? 'green' : 100 - (dashboard?.ProgramInfor?.data?.[0]?.["AVG(return_viewer_rate_14days)*100"] || 0) > 60 ? 'text' : 100 - (dashboard?.ProgramInfor?.data?.[0]?.["AVG(return_viewer_rate_14days)*100"] || 0) > 40 ? 'amber' : 'red'}`} id="kpi-new">31.1%</div>
                      <div className="mk-sub" id="kpi-new-sub">Vẫn thu hút người mới</div>
                    </div>
                    <div className="mini-kpi">
                      <div className="mk-label" style={{ marginBottom: 10 }}>Lead-in từ {program}</div>
                      <div className={`mk-val ${dashboard.isLoading.ProgramInfor ? 'green' : (dashboard?.ProgramInfor?.data?.[0]?.["AVG(lead_in_effect)*100"] || 0).toFixed(1) > 70 ? 'green' : (dashboard?.ProgramInfor?.data?.[0]?.["AVG(lead_in_effect)*100"] || 0).toFixed(1) > 60 ? 'text' : (dashboard?.ProgramInfor?.data?.[0]?.["AVG(lead_in_effect)*100"] || 0).toFixed(1) > 40 ? 'amber' : 'red'}`} id="kpi-leadin">68%</div>
                      <div className="mk-sub" id="kpi-leadin-sub">Anchor chain prime time</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
        {/* <!-- /tab-program --> */}

      </div >
      {/* <!-- /main --> */}
    </>
  )
}

const App = () => {
  return (
    <DashboardFilterProvider>
      <DashboardContent />
    </DashboardFilterProvider>
  );
};

export default App
