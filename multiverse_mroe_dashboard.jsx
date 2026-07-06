import React, { useState, useEffect, useRef } from 'react';

// --- CUSTOM SVG ICONS FOR FUTURISTIC UI ---
const InfinityIcon = () => (
  <svg className="w-6 h-6 text-cyan-400 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12a4 4 0 118 0M8 12a4 4 0 108 0M3 12h1m16 0h1M5.5 7.5l.7.7m11.6-.7l-.7.7M5.5 16.5l.7-.7m11.6.7l-.7-.7" />
  </svg>
);

const ShieldIcon = ({ className = "w-5 h-5 text-emerald-400" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

const CpuIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 5h10a2 2 0 012 2v10a2 2 0 01-2 2H7a2 2 0 01-2-2V7a2 2 0 012-2z" />
  </svg>
);

const ZapIcon = ({ className = "w-5 h-5 text-amber-400" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);

const AlertIcon = ({ className = "w-6 h-6 text-red-500 animate-bounce" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
  </svg>
);

const TerminalIcon = () => (
  <svg className="w-5 h-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

export default function App() {
  // --- INITIAL STATE ---
  const [universes, setUniverses] = useState([
    { id: 1, name: "Prime-01 (Gốc)", energy: 85, stability: 98, demand: 40, temp: 15, color: "from-cyan-500 to-blue-600" },
    { id: 2, name: "Chronos-02 (Thời gian)", energy: 40, stability: 85, demand: 75, temp: 28, color: "from-purple-500 to-indigo-600" },
    { id: 3, name: "Void-03 (Năng lượng tối)", energy: 95, stability: 60, demand: 20, temp: -50, color: "from-gray-700 to-black" },
    { id: 4, name: "Synth-04 (Cơ giới siêu cấp)", energy: 60, stability: 90, demand: 85, temp: 45, color: "from-emerald-500 to-teal-600" },
    { id: 5, name: "Omega-05 (Vũ trụ suy kiệt)", energy: 15, stability: 30, demand: 95, temp: 99, color: "from-red-500 to-pink-600" },
  ]);

  const [resilience, setResilience] = useState(100);
  const [globalEntropy, setGlobalEntropy] = useState(35);
  const [isAutoOptimizing, setIsAutoOptimizing] = useState(true);
  const [systemVersion, setSystemVersion] = useState("v1.0.0-Beta");
  const [anomaly, setAnomaly] = useState(null);
  const [logs, setLogs] = useState([
    "System Initialized. Engine version v1.0.0-Beta loaded.",
    "Ý chí bền bỉ: ĐÃ KÍCH HOẠT bảo vệ nền.",
    "Đang quét tần số liên kết đa vũ trụ..."
  ]);
  const [efficiency, setEfficiency] = useState(72);
  const [evolving, setEvolving] = useState(false);

  const logsEndRef = useRef(null);

  // Auto scroll logs
  useEffect(() => {
    logsEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [logs]);

  // Main game/simulation loop
  useEffect(() => {
    const interval = setInterval(() => {
      // 1. Natural Entropy changes
      setUniverses(prev => {
        let updated = prev.map(u => {
          // Slight fluctuations
          let energyChange = (Math.random() - 0.5) * 2;
          let stabilityChange = (Math.random() - 0.5) * 1.5;

          // If auto-optimizing, drive energies toward balance (demand-based)
          if (isAutoOptimizing) {
            const idealEnergy = u.demand * 0.9;
            energyChange += (idealEnergy - u.energy) * 0.15; // smooth transition
            stabilityChange += (95 - u.stability) * 0.1; // heal stability
          }

          let newEnergy = Math.max(5, Math.min(100, u.energy + energyChange));
          let newStability = Math.max(0, Math.min(100, u.stability + stabilityChange));

          return {
            ...u,
            energy: parseFloat(newEnergy.toFixed(1)),
            stability: parseFloat(newStability.toFixed(1)),
            temp: parseFloat((30 + (100 - newStability) * 0.8).toFixed(1))
          };
        });

        // Calculate global metrics based on current universe status
        const avgStability = updated.reduce((acc, u) => acc + u.stability, 0) / updated.length;
        const totalGap = updated.reduce((acc, u) => acc + Math.abs(u.energy - u.demand), 0);
        
        setGlobalEntropy(parseFloat((100 - avgStability).toFixed(1)));
        setEfficiency(parseFloat((100 - (totalGap / updated.length)).toFixed(1)));

        return updated;
      });

      // 2. Resilience Engine recovery logic (Self-healing)
      setResilience(prev => {
        if (prev < 100) {
          const heal = Math.random() * 5 + 3;
          const nextVal = Math.min(100, prev + heal);
          if (nextVal === 100 && prev < 100) {
            addLog("Hệ thống khôi phục hoàn toàn nhờ module Indomitable Spirit!");
            setAnomaly(null);
          }
          return parseFloat(nextVal.toFixed(1));
        }
        return prev;
      });

    }, 2000);

    return () => clearInterval(interval);
  }, [isAutoOptimizing]);

  // Log helper
  const addLog = (msg) => {
    const timestamp = new Date().toLocaleTimeString();
    setLogs(prev => [...prev, `[${timestamp}] ${msg}`]);
  };

  // Trigger Anomaly (Stress test Resilience)
  const triggerAnomaly = () => {
    const anomalies = [
      { name: "Va chạm Hố đen Siêu khối lượng", target: 5, impact: 60, desc: "Omega-05 đang bị xé toạc!" },
      { name: "Nghịch lý Thời gian Chronos", target: 2, impact: 45, desc: "Chronos-02 lặp vô tận vòng lặp entropy!" },
      { name: "Cơn bão Phản Vật Chất", target: 3, impact: 50, desc: "Void-03 thất thoát năng lượng cực độ!" }
    ];

    const selected = anomalies[Math.floor(Math.random() * anomalies.length)];
    setAnomaly(selected.name);
    addLog(`⚠️ CẢNH BÁO ĐA VŨ TRỤ: Phát hiện ${selected.name}!`);
    addLog(`-> ${selected.desc}`);

    // Instantly damage universe stability and global resilience
    setUniverses(prev => prev.map(u => {
      if (u.id === selected.target) {
        return { ...u, stability: Math.max(10, u.stability - selected.impact) };
      }
      return { ...u, stability: Math.max(40, u.stability - 15) }; // collateral damage
    }));

    setResilience(30); // Spike panic
    setGlobalEntropy(prev => Math.min(95, prev + 35));

    // Automated action
    setTimeout(() => {
      addLog("🛡️ Ý CHÍ BỀN BỈ KÍCH HOẠT: Khởi động Symmetry Restorer & Chronos Anchor.");
      addLog("-> Đang bơm năng lượng trung hòa entropy...");
    }, 1500);
  };

  // Evolution Cycle (System Self-Update)
  const runEvolution = () => {
    if (evolving) return;
    setEvolving(true);
    addLog("🌀 BẮT ĐẦU CHU TRÌNH TỰ ĐỘNG CẬP NHẬT PHIÊN BẢN (AUTO-EVOLVE)...");
    
    let steps = [
      "Đang quét mã nguồn lượng tử cũ...",
      "Tái cấu trúc giải thuật phân bổ năng lượng tối ưu...",
      "Đồng bộ hóa phiên bản tương lai thông qua liên kết dòng thời gian...",
      "Hệ thống tự viết lại mã nguồn thành công. Áp dụng nâng cấp vô hạn!"
    ];

    steps.forEach((step, idx) => {
      setTimeout(() => {
        addLog(step);
        if (idx === steps.length - 1) {
          setSystemVersion(prev => {
            const currentNum = parseFloat(prev.replace(/[^0-9.]/g, ''));
            const nextNum = (currentNum + 0.1).toFixed(1);
            return `v${nextNum}-Cosmic`;
          });
          setEvolving(false);
          // Boost stats permanently
          setUniverses(prev => prev.map(u => ({ ...u, stability: Math.min(100, u.stability + 10) })));
          addLog("✨ CẬP NHẬT HOÀN TẤT. Hiệu suất hệ thống tăng vĩnh viễn.");
        }
      }, (idx + 1) * 1200);
    });
  };

  // Manual resource transfer
  const handleTransfer = (fromId, toId, amount) => {
    setUniverses(prev => {
      const source = prev.find(u => u.id === fromId);
      const target = prev.find(u => u.id === toId);

      if (source.energy < amount) {
        addLog(`❌ Lỗi điều phối: ${source.name} không đủ năng lượng để chuyển.`);
        return prev;
      }

      addLog(`⚡ Chuyển thành công ${amount} GW lượng tử từ ${source.name} sang ${target.name}.`);
      return prev.map(u => {
        if (u.id === fromId) return { ...u, energy: parseFloat((u.energy - amount).toFixed(1)) };
        if (u.id === toId) return { ...u, energy: parseFloat((u.energy + amount).toFixed(1)) };
        return u;
      });
    });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans p-4 md:p-6 flex flex-col justify-between">
      
      {/* --- HEADER --- */}
      <header className="border-b border-cyan-500/30 pb-4 mb-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-cyan-950/50 border border-cyan-500 rounded-lg shadow-[0_0_15px_rgba(6,182,212,0.4)]">
            <InfinityIcon />
          </div>
          <div>
            <h1 className="text-xl md:text-2xl font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-purple-500">
              MROE: MULTIVERSE RESOURCE OPTIMIZATION ENGINE
            </h1>
            <p className="text-xs text-slate-400">Hệ Thống Phân Phối Năng Lượng Đa Vũ Trụ Bền Bỉ Hơn Entropy</p>
          </div>
        </div>

        <div className="flex items-center gap-4 flex-wrap">
          <div className="px-3 py-1.5 bg-slate-900 border border-purple-500/30 rounded text-xs flex items-center gap-2">
            <CpuIcon className="text-purple-400 w-4 h-4 animate-spin" />
            Phiên bản: <span className="text-cyan-400 font-mono font-bold">{systemVersion}</span>
          </div>
          <div className="px-3 py-1.5 bg-slate-900 border border-emerald-500/30 rounded text-xs flex items-center gap-2">
            <ShieldIcon className="text-emerald-400 w-4 h-4" />
            Ý chí: <span className="text-emerald-400 font-mono font-bold">100 / 100 (Bất Bại)</span>
          </div>
        </div>
      </header>

      {/* --- LIVE STATUS BAR --- */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {/* Global Efficiency */}
        <div className="bg-slate-900/60 border border-cyan-500/20 rounded-xl p-4 flex flex-col justify-between relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-3 opacity-10">
            <ZapIcon className="w-16 h-16 text-cyan-400" />
          </div>
          <span className="text-xs text-slate-400 uppercase tracking-widest font-semibold">Hiệu Suất Phân Bổ</span>
          <div className="flex items-baseline gap-2 mt-2">
            <span className="text-3xl font-extrabold text-cyan-400">{efficiency}%</span>
            <span className="text-xs text-emerald-400">↑ Tối ưu liên tục</span>
          </div>
          <div className="w-full bg-slate-950 rounded-full h-1.5 mt-3">
            <div className="bg-cyan-500 h-1.5 rounded-full transition-all duration-500" style={{ width: `${efficiency}%` }}></div>
          </div>
        </div>

        {/* Global Entropy */}
        <div className="bg-slate-900/60 border border-cyan-500/20 rounded-xl p-4 flex flex-col justify-between relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-3 opacity-10">
            <AlertIcon className="w-16 h-16 text-purple-400" />
          </div>
          <span className="text-xs text-slate-400 uppercase tracking-widest font-semibold">Chỉ Số Entropy Đa Vũ Trụ</span>
          <div className="flex items-baseline gap-2 mt-2">
            <span className={`text-3xl font-extrabold ${globalEntropy > 50 ? 'text-rose-500 animate-pulse' : 'text-purple-400'}`}>
              {globalEntropy}%
            </span>
            <span className="text-xs text-slate-400">Giới hạn an toàn: &lt;60%</span>
          </div>
          <div className="w-full bg-slate-950 rounded-full h-1.5 mt-3">
            <div className="bg-purple-500 h-1.5 rounded-full transition-all duration-500" style={{ width: `${globalEntropy}%` }}></div>
          </div>
        </div>

        {/* Resilience Engine Progress */}
        <div className="bg-slate-900/60 border border-cyan-500/20 rounded-xl p-4 flex flex-col justify-between relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-3 opacity-10">
            <ShieldIcon className="w-16 h-16 text-emerald-400" />
          </div>
          <span className="text-xs text-slate-400 uppercase tracking-widest font-semibold">Chỉ số Bền Bỉ (Resilience Index)</span>
          <div className="flex items-baseline gap-2 mt-2">
            <span className="text-3xl font-extrabold text-emerald-400">{resilience}%</span>
            <span className="text-xs text-emerald-400">Hồi phục: +3.5/s</span>
          </div>
          <div className="w-full bg-slate-950 rounded-full h-1.5 mt-3">
            <div className="bg-emerald-500 h-1.5 rounded-full transition-all duration-500" style={{ width: `${resilience}%` }}></div>
          </div>
        </div>
      </div>

      {/* --- MAIN INTERACTIVE WORKSPACE --- */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch mb-6">
        
        {/* LEFT: UNIVERSE VISUALIZATION (8 COLS) */}
        <div className="lg:col-span-8 bg-slate-900/40 border border-slate-800 rounded-2xl p-4 flex flex-col justify-between relative">
          
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-sm font-bold uppercase tracking-wider text-cyan-300 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping"></span>
              Sơ Đồ Phân Phối Lượng Tử Đa Chiều
            </h2>
            <div className="flex items-center gap-3">
              <label className="text-xs text-slate-400 flex items-center gap-1.5 cursor-pointer">
                <input 
                  type="checkbox" 
                  checked={isAutoOptimizing} 
                  onChange={(e) => {
                    setIsAutoOptimizing(e.target.checked);
                    addLog(e.target.checked ? "Đã bật tự động phân bổ cân bằng." : "Đã tắt tự động, chuyển sang chế độ thủ công.");
                  }}
                  className="rounded bg-slate-950 border-slate-700 text-cyan-500 focus:ring-0 focus:ring-offset-0" 
                />
                Tự động tối ưu hoá ($\max \sum (\alpha U - \beta E)$)
              </label>
            </div>
          </div>

          {/* Universe Grid Cards */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-3 relative z-10">
            {universes.map((u) => (
              <div 
                key={u.id} 
                className={`bg-gradient-to-b ${u.color} bg-opacity-10 border border-white/10 rounded-xl p-3 flex flex-col justify-between min-h-[220px] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(255,255,255,0.05)]`}
              >
                <div>
                  <div className="flex justify-between items-start mb-1">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-white/55">Cosmos {u.id}</span>
                    <span className={`w-2 h-2 rounded-full ${u.stability > 70 ? 'bg-emerald-400' : u.stability > 40 ? 'bg-amber-400' : 'bg-rose-500 animate-ping'}`}></span>
                  </div>
                  <h3 className="font-bold text-xs text-white truncate">{u.name}</h3>
                </div>

                {/* Energy Circle Gauge */}
                <div className="my-3 flex flex-col items-center justify-center">
                  <div className="relative w-16 h-16 flex items-center justify-center">
                    {/* Background track */}
                    <svg className="w-full h-full transform -rotate-95">
                      <circle cx="32" cy="32" r="28" className="stroke-slate-950/60" strokeWidth="6" fill="transparent" />
                      <circle 
                        cx="32" 
                        cy="32" 
                        r="28" 
                        className="stroke-cyan-400 transition-all duration-500" 
                        strokeWidth="6" 
                        fill="transparent" 
                        strokeDasharray={175} 
                        strokeDashoffset={175 - (175 * u.energy) / 100}
                      />
                    </svg>
                    <div className="absolute text-center">
                      <span className="text-xs font-bold text-white block">{u.energy}%</span>
                      <span className="text-[8px] text-cyan-300">Năng lượng</span>
                    </div>
                  </div>
                </div>

                {/* Micro Stats */}
                <div className="space-y-1.5 text-[10px] border-t border-white/5 pt-2">
                  <div className="flex justify-between text-white/70">
                    <span>Độ ổn định:</span>
                    <span className="font-mono font-semibold">{u.stability}%</span>
                  </div>
                  <div className="flex justify-between text-white/70">
                    <span>Nhu cầu:</span>
                    <span className="font-mono text-amber-300 font-semibold">{u.demand}%</span>
                  </div>
                  <div className="flex justify-between text-white/70">
                    <span>Nhiệt lượng:</span>
                    <span className="font-mono text-red-300">{u.temp}°K</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Transfer panel */}
          <div className="mt-4 p-3 bg-slate-950/60 border border-slate-800 rounded-xl">
            <h4 className="text-xs font-semibold text-slate-300 mb-2 flex items-center gap-1">
              <ZapIcon className="w-3.5 h-3.5 text-cyan-400" />
              Điều Phối Năng Lượng Thủ Công Nhanh
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-2 text-xs">
              <select id="srcUniverse" className="bg-slate-900 border border-slate-800 rounded px-2 py-1 text-slate-300 focus:outline-none">
                <option value="">-- Nguồn cung --</option>
                {universes.map(u => <option key={u.id} value={u.id}>{u.name} (Sẵn có: {u.energy}%)</option>)}
              </select>
              <select id="destUniverse" className="bg-slate-900 border border-slate-800 rounded px-2 py-1 text-slate-300 focus:outline-none">
                <option value="">-- Nơi nhận --</option>
                {universes.map(u => <option key={u.id} value={u.id}>{u.name} (Nhu cầu: {u.demand}%)</option>)}
              </select>
              <input id="transAmount" type="number" min="5" max="50" placeholder="Lượng tử (GW)" className="bg-slate-900 border border-slate-800 rounded px-2 py-1 text-slate-300 text-center focus:outline-none" />
              <button 
                onClick={() => {
                  const src = parseInt(document.getElementById("srcUniverse").value);
                  const dest = parseInt(document.getElementById("destUniverse").value);
                  const val = parseFloat(document.getElementById("transAmount").value);
                  if (src && dest && val) {
                    if (src === dest) addLog("❌ Không thể chuyển năng lượng trong cùng một vũ trụ.");
                    else handleTransfer(src, dest, val);
                  } else {
                    addLog("❌ Vui lòng nhập đầy đủ thông số điều phối lượng tử.");
                  }
                }}
                className="bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-1 px-3 rounded transition-all text-center"
              >
                Kích Hoạt Truyền Tải
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT: CONTROL CENTER & ANOMALIES (4 COLS) */}
        <div className="lg:col-span-4 flex flex-col gap-4">
          
          {/* Stress test & Upgrade controls */}
          <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-4 flex flex-col justify-between">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-cyan-300 mb-3 flex items-center gap-2">
                <CpuIcon className="text-cyan-400" />
                Hệ Thống Kiểm Soát Lõi Đa Vũ Trụ
              </h3>
              <p className="text-xs text-slate-400 mb-4">
                Tương tác với hệ thống phòng ngự và cập nhật để đảm bảo tính kiên cường trước sự hủy diệt nhiệt lượng.
              </p>
            </div>

            <div className="space-y-2.5">
              {/* BUTTON: Auto Evolve */}
              <button 
                onClick={runEvolution}
                disabled={evolving}
                className={`w-full py-2.5 px-4 rounded-xl font-bold text-xs tracking-wider transition-all duration-300 flex items-center justify-center gap-2 border ${
                  evolving 
                    ? 'bg-purple-950/40 text-purple-400 border-purple-500/30 cursor-not-allowed' 
                    : 'bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white border-purple-400/40 shadow-[0_0_15px_rgba(168,85,247,0.3)]'
                }`}
              >
                <CpuIcon className={evolving ? 'animate-spin' : ''} />
                {evolving ? 'ĐANG TỰ ĐỘNG CẬP NHẬT...' : 'KÍCH HOẠT AUTO-EVOLVE (UPGRADE)'}
              </button>

              {/* BUTTON: Stress Test Anomaly */}
              <button 
                onClick={triggerAnomaly}
                disabled={resilience < 60}
                className="w-full py-2.5 px-4 bg-gradient-to-r from-rose-700 to-red-600 hover:from-rose-600 hover:to-red-500 text-white border border-rose-400/40 rounded-xl font-bold text-xs tracking-wider transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(244,63,94,0.3)] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <AlertIcon className="w-4 h-4 animate-none" />
                GIẢ LẬP DỊ THƯỜNG (STRESS TEST)
              </button>
            </div>

            {/* Display active anomaly if any */}
            {anomaly && (
              <div className="mt-4 p-3 bg-rose-950/30 border border-rose-500/40 rounded-xl flex items-center gap-3 animate-pulse">
                <AlertIcon />
                <div>
                  <h4 className="text-xs font-bold text-rose-400">Dị thường kích hoạt:</h4>
                  <p className="text-[11px] text-rose-300/80">{anomaly}</p>
                </div>
              </div>
            )}
          </div>

          {/* Mathematical formulation block */}
          <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-4">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2.5">
              Thuật toán tối ưu hoá đa mục tiêu
            </h3>
            <div className="bg-slate-950/80 border border-slate-800/80 rounded-xl p-3 font-serif text-sm text-center text-cyan-200">
              $$\max \sum_{i=1}^{5} \left( \alpha_i \cdot U_i(R_i) - \beta_i \cdot E_i(C_i) \right) + \gamma \cdot \Psi_{\text{resilience}}$$
            </div>
            <div className="mt-2.5 space-y-1.5 text-[11px] text-slate-400">
              <div className="flex justify-between">
                <span>$\alpha_i$ (Trọng số hữu dụng tối thiểu):</span>
                <span className="font-mono text-cyan-400">1.82 (Đã chuẩn hóa)</span>
              </div>
              <div className="flex justify-between">
                <span>$\beta_i$ (Kháng hao hụt Entropy):</span>
                <span className="font-mono text-purple-400">0.95 (Độ dốc cực tiểu)</span>
              </div>
              <div className="flex justify-between">
                <span>$\gamma$ (Ý chí tự phục hồi):</span>
                <span className="font-mono text-emerald-400">2.50 (Bền bỉ tuyệt đối)</span>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* --- BOTTOM TERMINAL / LOGS (HEIGHT RESTRICTED) --- */}
      <footer className="bg-slate-950 border border-slate-800 rounded-xl p-4">
        <div className="flex items-center gap-2 mb-2 border-b border-slate-800 pb-2">
          <TerminalIcon />
          <span className="text-xs font-bold uppercase tracking-wider text-slate-300">Giao diện Báo cáo Lượng Tử Hệ Thống</span>
        </div>
        <div className="h-28 overflow-y-auto font-mono text-[11px] space-y-1 text-slate-300 custom-scrollbar">
          {logs.map((log, index) => (
            <div key={index} className="flex gap-2">
              <span className="text-cyan-500">▶</span>
              <span className={log.includes("⚠️") ? "text-rose-400 font-semibold" : log.includes("✨") ? "text-purple-400 font-semibold" : "text-slate-300"}>
                {log}
              </span>
            </div>
          ))}
          <div ref={logsEndRef} />
        </div>
      </footer>

    </div>
  );
}

