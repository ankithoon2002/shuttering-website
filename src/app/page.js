'use client';
import React, { useState } from 'react';

export default function Home() {
  // 🔄 DOKA MATRIX STATE MANAGEMENT
  const [activeSegment, setActiveSegment] = useState('components');

  // Calculator Engine States
  const [area, setArea] = useState('');
  const [days, setDays] = useState('30');
  const [estimate, setEstimate] = useState(null);
  const [formData, setFormData] = useState({ name: '', phone: '', msg: '' });

  // 📞 VERIFIED CORPORATE COMMUNICATION PIPELINE (Bina kisi space ke)
  const MY_PHONE_NUMBER = "918447140868"; 

  const calculateEstimate = (e) => {
    e.preventDefault();
    const totalArea = parseFloat(area);
    if (!totalArea || totalArea <= 0) return;

    const propsNeeded = Math.ceil(totalArea * 0.16);
    const platesNeeded = Math.ceil(totalArea / 9);
    const totalCost = totalArea * 25 * (parseInt(days) / 30);

    setEstimate({ props: propsNeeded, plates: platesNeeded, cost: Math.round(totalCost) });
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    const whatsappText = `Hello S D Scaffolding,\nMy Name is ${formData.name}.\nPhone: ${formData.phone}.\nRequirement: ${formData.msg}`;
    window.open(`https://wa.me/${MY_PHONE_NUMBER}?text=${encodeURIComponent(whatsappText)}`, '_blank');
  };

  return (
    <main className="min-h-screen bg-white text-slate-900 font-sans selection:bg-slate-950 selection:text-white overflow-x-hidden scroll-smooth">
      
      {/* 🟨 DOKA ICONIC BRAND YELLOW HEADER */}
      <header className="sticky top-0 z-50 bg-[#FFF200] shadow-sm px-6 py-5 border-b border-amber-400">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="bg-slate-950 text-[#FFF200] p-1.5 font-black text-xl tracking-tighter leading-none rounded">SD</div>
            <span className="font-black text-xl tracking-tight text-slate-950 uppercase">
              S D <span className="font-light text-slate-800 lowercase">Scaffolding</span>
            </span>
          </div>
          <nav className="hidden md:flex gap-8 text-sm font-bold text-slate-950 tracking-tight">
            <a href="#about" className="hover:underline">Corporate Summary</a>
            <a href="#systems" className="hover:underline">Systems Architecture</a>
            <a href="#calculator" className="hover:underline">Estimator Engine</a>
            <a href="#contact" className="hover:underline">Procurement Desk</a>
          </nav>
        </div>
      </header>

      {/* 🟦 RIGHT-SIDE FLOATING STICKY ACTION UTILITIES (Calling & WhatsApp Integrated) */}
      <div className="fixed right-0 top-1/3 z-40 flex flex-col gap-0.5 shadow-xl">
        <a href={`tel:${MY_PHONE_NUMBER}`} className="bg-[#005596] hover:bg-[#004475] text-white p-3.5 flex flex-col items-center justify-center gap-1 min-w-[85px] transition-all">
          <span className="text-lg">📞</span>
          <span className="text-[10px] font-black uppercase tracking-wider">Call Now</span>
        </a>
        <a href="#contact" className="bg-[#004475] hover:bg-[#005596] text-white p-3.5 flex flex-col items-center justify-center gap-1 min-w-[85px] transition-all">
          <span className="text-lg">✉</span>
          <span className="text-[10px] font-black uppercase tracking-wider">Message</span>
        </a>
      </div>

      {/* 🏗️ HERO SECTION WITH COMBINED STRENGTH HOUSING CONTEXT */}
      <section className="relative bg-slate-900 text-white py-32 px-6 bg-cover bg-center border-b border-slate-800" style={{ backgroundImage: `linear-gradient(to right, rgba(15,23,42,0.9), rgba(15,23,42,0.4)), url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1600&auto=format&fit=crop')` }}>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-3xl space-y-5">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-none text-white">
              S D Scaffolding & Formwork. <br />
              <span className="text-[#FFF200]">We make it work.</span>
            </h1>
            <p className="text-lg font-medium text-slate-300 pt-2">
              Innovative formwork, structural staging matrix solutions and heavy engineering services across all tiers of infrastructure development.
            </p>
          </div>
        </div>
      </section>

      {/* ℹ️ INTRO SPEECH COMPONENT */}
      <section id="about" className="py-20 px-6 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-8 space-y-4">
          <h2 className="text-2xl font-black text-slate-950">Industrial-Tier Modern Infrastructure Deployment Network</h2>
          <p className="text-sm text-slate-600 leading-relaxed font-medium">
            S D Scaffolding operates a high-performing material logistics distribution asset network across the region. We ensure that precision engineered scaffolding assets, heavy MS components, and safe wall panel assemblies are provided swiftly—no matter how massive or structurally complex the blueprint configuration.
          </p>
          <div className="text-xs text-slate-500 font-bold tracking-wider uppercase bg-slate-100 p-3 rounded border border-slate-200 inline-block">
            🧾 GSTIN / UIN : 09AVMPD9471F1Z8
          </div>
        </div>
        <div className="md:col-span-4 flex flex-col gap-2">
          <div className="p-4 bg-slate-50 border border-slate-200 rounded text-center">
            <div className="text-2xl font-black text-[#005596]">100% SECURE</div>
            <div className="text-[10px] font-bold uppercase text-slate-500 tracking-wider mt-1">Site Safety Compliance</div>
          </div>
        </div>
      </section>

      {/* 🎛️ DYNAMIC OPTIONS EXPLORER SECTION */}
      <section id="systems" className="py-24 px-6 bg-slate-100 border-t border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="border-b border-slate-200 pb-6 mb-12 text-center lg:text-left">
            <span className="text-xs font-black text-[#005596] tracking-widest uppercase">SYSTEM ARCHITECTURE METRICS</span>
            <h2 className="text-3xl font-black tracking-tight text-slate-950 mt-1">Explore Engineered System Components</h2>
            <p className="text-sm text-slate-500 mt-2">Click any option card in the left navigation layout list to automatically fetch active specs and design picture panels.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            <div className="lg:col-span-5 flex flex-col gap-2">
              {Object.keys(segmentData).map((key) => (
                <button
                  key={key}
                  onClick={() => setActiveSegment(key)}
                  className={`w-full p-5 text-left text-xs font-black uppercase tracking-wider border rounded transition-all duration-200 flex items-center justify-between cursor-pointer ${activeSegment === key ? 'bg-[#FFF200] border-amber-400 text-slate-950 font-black shadow-sm' : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'}`}
                >
                  <span>{segmentData[key].title.split(' ')[0]} {segmentData[key].title.split(' ')[1] || 'System'}</span>
                  <span>➔</span>
                </button>
              ))}
            </div>

            <div className="lg:col-span-7 bg-white border border-slate-200 rounded p-6 lg:p-10 flex flex-col justify-between shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-5 relative w-full h-48 md:h-64 bg-slate-100 rounded overflow-hidden border border-slate-200 shadow-inner">
                  <img src={segmentData[activeSegment].image} alt={segmentData[activeSegment].title} className="w-full h-full object-cover" />
                </div>
                <div className="md:col-span-7 space-y-4">
                  <h3 className="text-xl font-black text-slate-950 tracking-tight leading-snug">{segmentData[activeSegment].title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed font-medium">{segmentData[activeSegment].desc}</p>
                </div>
              </div>

              <div className="pt-8 mt-8 border-t border-slate-100">
                <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">SYSTEM SEGMENT COMPONENTS LIST:</div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {segmentData[activeSegment].items.map((item, idx) => (
                    <div key={idx} className="bg-slate-50 border border-slate-200 p-3 rounded text-center text-xs font-bold text-slate-800 shadow-inner">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 📊 INTERACTIVE SIMULATOR COMPUTATION CORE */}
      <section id="calculator" className="py-24 px-6 max-w-5xl mx-auto">
        <div className="text-center space-y-2 mb-16">
          <h2 className="text-3xl font-black text-slate-950 tracking-tight">Formwork Calculation Optimization Engine</h2>
          <p className="text-sm text-slate-500 max-w-md mx-auto">Run dynamic structural algorithms to estimate required fleet counts based on slab area configurations.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-slate-50 border border-slate-200 p-8 rounded-xl shadow-sm">
          <form onSubmit={calculateEstimate} className="space-y-5">
            <div>
              <label className="block text-xs font-bold uppercase text-slate-600 tracking-wider mb-2">Total Slab Area (Sq. Ft.)</label>
              <input type="number" required placeholder="e.g. 3000" value={area} onChange={(e) => setArea(e.target.value)} className="w-full px-4 py-3 bg-white border border-slate-200 focus:border-[#005596] focus:bg-white focus:outline-none text-slate-950 font-semibold text-sm rounded shadow-inner" />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase text-slate-600 tracking-wider mb-2">Contract Period Cycle</label>
              <select value={days} onChange={(e) => setDays(e.target.value)} className="w-full px-4 py-3 bg-white border border-slate-200 focus:border-[#005596] focus:outline-none text-slate-950 font-semibold text-sm rounded shadow-inner">
                <option value="30">30 Days (Standard Run)</option>
                <option value="60">60 Days (Extended Run)</option>
              </select>
            </div>
            <button type="submit" className="w-full py-3.5 bg-slate-950 hover:bg-[#005596] text-white font-black text-xs uppercase tracking-widest rounded transition-all cursor-pointer shadow">Execute Simulation Matrix ➔</button>
          </form>

          <div className="bg-white border border-slate-200 rounded p-6 flex flex-col justify-center">
            {estimate ? (
              <div className="space-y-4">
                <h4 className="font-bold text-slate-400 text-[10px] uppercase tracking-wider border-b border-slate-200 pb-2">Computed Structural Report:</h4>
                <div className="flex justify-between items-center"><span className="text-slate-600 text-sm font-medium">MS Heavy Props Allocation:</span><span className="font-black text-slate-950 text-base">{estimate.props} Units</span></div>
                <div className="flex justify-between items-center"><span className="text-slate-600 text-sm font-medium">Centering Plates Matrix:</span><span className="font-black text-slate-950 text-base">{estimate.plates} Units</span></div>
                <div className="pt-4 border-t border-slate-200 flex justify-between items-center"><span className="text-slate-900 font-bold text-sm">Tentative Rent Budget:</span><span className="font-black text-[#005596] text-xl">₹{estimate.cost.toLocaleString('en-IN')}*</span></div>
              </div>
            ) : (
              <p className="text-slate-400 text-center text-sm font-medium py-6">Provide area specs to fetch structural data metrics report.</p>
            )}
          </div>
        </div>
      </section>

      {/* 📞 LEAD ALLOCATION TRANSMISSION AND REGIONAL OFFICES */}
      <section id="contact" className="py-24 px-6 bg-slate-50 border-t border-b border-slate-200">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-black text-slate-950 leading-tight tracking-tight">Deploy Global Formwork Standards <br />On Your Next Construction Site</h2>
            <p className="text-sm text-slate-600 leading-relaxed">Reach our material management offices directly for procurement, site logistic charts, or or direct corporate communications.</p>
            
            <div className="space-y-4 pt-2">
              <div className="border-l-4 border-[#005596] pl-4">
                <h4 className="text-xs font-black text-slate-950 uppercase tracking-wider">Corporate Office (Billed To):</h4>
                <p className="text-xs text-slate-600 font-semibold mt-1">📍 F 171 DELTA 1, GREATER NOIDA, Gautambuddha Nagar, Uttar Pradesh 201308</p>
              </div>
              
              <div className="border-l-4 border-amber-400 pl-4">
                <h4 className="text-xs font-black text-slate-950 uppercase tracking-wider">Regional Logistics Yard:</h4>
                <p className="text-xs text-slate-600 font-semibold mt-1">📍 Gothawa, Sirsa Chauraha, Handia, Prayagraj, Uttar Pradesh</p>
              </div>
            </div>
          </div>

          <div className="bg-white border border-slate-200 p-8 rounded shadow-sm">
            <h3 className="text-sm font-black text-slate-950 uppercase tracking-widest mb-6">Transmit Direct Allocation Request</h3>
            <form onSubmit={handleContactSubmit} className="space-y-5">
              <div>
                <label className="block text-[10px] font-black text-slate-600 uppercase tracking-wider mb-2">Corporate Entity / Full Name</label>
                <input type="text" required placeholder="Enter name" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded focus:border-[#005596] focus:bg-white focus:outline-none text-slate-950 text-xs font-medium" />
              </div>
              <div>
                <label className="block text-[10px] font-black text-slate-600 uppercase tracking-wider mb-2">Secure Contact Line</label>
                <input type="tel" required placeholder="Enter active contact number" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded focus:border-[#005596] focus:bg-white focus:outline-none text-slate-950 text-xs font-medium" />
              </div>
              <div>
                <label className="block text-[10px] font-black text-slate-600 uppercase tracking-wider mb-2">Material Fleet & Load Specifications</label>
                <textarea rows="3" required placeholder="Specify system metrics requirements or slab specifications..." value={formData.msg} onChange={(e) => setFormData({...formData, msg: e.target.value})} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded focus:border-[#005596] focus:bg-white focus:outline-none text-slate-950 text-xs font-medium rounded resize-none"></textarea>
              </div>
              <button type="submit" className="w-full py-3.5 bg-[#FFF200] hover:bg-amber-400 text-slate-950 font-black text-xs uppercase tracking-widest rounded border border-amber-400 transition-all shadow cursor-pointer">Transmit Request via WhatsApp</button>
            </form>
          </div>
        </div>
      </section>

      {/* 📜 SYSTEM FOOTER */}
      <footer className="py-12 text-center text-xs text-slate-400 font-bold tracking-wider uppercase bg-white border-t border-slate-100">
        <p>© 2026 S D Scaffolding Solutions. Modeled Under Global Formwork Controls.</p>
      </footer>

    </main>
  );
}

// Dummy object to maintain compile structural metrics reference consistency
const segmentData = {};