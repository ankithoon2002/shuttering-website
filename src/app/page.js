'use client';
import React, { useState, useEffect } from 'react';

export default function Home() {
  // Navigation and Interactive UI States
  const [activeSegment, setActiveSegment] = useState('components');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Form and Estimator States
  const [area, setArea] = useState('');
  const [days, setDays] = useState('30');
  const [estimate, setEstimate] = useState(null);
  const [formData, setFormData] = useState({
    salutation: 'mr',
    firstname: '',
    surname: '',
    company: '',
    phone: '',
    email: '',
    message: '',
    approval: true
  });

  const MY_PHONE_NUMBER = "918447140868"; 

  // Multi-Slide Hero Data (Inspired by Doka Fit & Minerva Tower)
  const slides = [
    {
      title: "S D Scaffolding. Fit for purpose.",
      subtitle: "Formwork and Scaffolding. We make it work.",
      desc: "Providing world-class robust engineering solutions for critical infrastructure sectors across India.",
      bgImage: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1600&auto=format&fit=crop"
    },
    {
      title: "Understanding how to gain height faster.",
      subtitle: "Formwork solutions for your High Rise projects",
      desc: "Optimized automatic climbing safety mechanisms engineered for heavy commercial complexes.",
      bgImage: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1600&auto=format&fit=crop"
    }
  ];

  // Auto Slider Effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  // Doka Product Breakdown Matrix
  const segmentData = {
    components: {
      title: "Props, beams, sheets and more formwork components",
      desc: "One of the fundamental things our formwork systems are based on is their site-proven components.",
      image: "https://images.unsplash.com/photo-1590069261209-f8e9b8642343?q=80&w=800&auto=format&fit=crop",
      items: ["Adjustable Heavy MS Props", "H-Beam Timber Girders", "Load-bearing Screw Jacks", "DokaFit Custom Framework Pins"]
    },
    wall: {
      title: "Wall formwork systems",
      desc: "S D Scaffolding offers a wide range of proven wall formwork systems for all jobsite situations, all fields of use, and all specifications regarding the concrete finish.",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=800&auto=format&fit=crop",
      items: ["Framed Plywood Panels", "Heavy-duty Tie Rod Matrix", "Column Casting Shuttering", "Circular Wall Anchors"]
    },
    floor: {
      title: "Floor and Slab formwork",
      desc: "S D Scaffolding floor forms score for their diversity and their adaptability to widely differing construction tasks.",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1600&auto=format&fit=crop",
      items: ["MS Centering Sheets (3x3)", "Flexible Decking Frames", "Slab Edge Formwork", "Drop-Head Quick Stripping Units"]
    },
    safety: {
      title: "Safety & Protection systems",
      desc: "Safety on the site is a very great responsibility for all those involved.",
      image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop",
      items: ["Perimeter Side Mesh Guards", "Anti-Slip Working Platforms", "Handrails & Edge Safety Grid", "Self-Climbing Screen Mesh"]
    }
  };

  const currentData = segmentData[activeSegment] || segmentData.components;

  const calculateEstimate = (e) => {
    e.preventDefault();
    const totalArea = parseFloat(area);
    if (!totalArea || totalArea <= 0) return;

    const propsNeeded = Math.ceil(totalArea * 0.16);
    const platesNeeded = Math.ceil(totalArea / 9);
    const totalCost = totalArea * 25 * (parseInt(days) / 30);

    setEstimate({ props: propsNeeded, plates: platesNeeded, cost: Math.round(totalCost) });
  };

  const handleModalSubmit = (e) => {
    e.preventDefault();
    const whatsappText = `*S D Scaffolding - Procurement Request*\n\n` +
      `*Client:* ${formData.salutation.toUpperCase()} ${formData.firstname} ${formData.surname}\n` +
      `*Company:* ${formData.company}\n` +
      `*Phone:* ${formData.phone}\n` +
      `*Email:* ${formData.email}\n` +
      `*Requirement Spec:* ${formData.message}`;
      
    window.open(`https://wa.me/${MY_PHONE_NUMBER}?text=${encodeURIComponent(whatsappText)}`, '_blank');
    setIsModalOpen(false);
  };

  return (
    <main className="min-h-screen bg-white text-slate-900 font-sans selection:bg-slate-950 selection:text-white overflow-x-hidden scroll-smooth">
      
      {/* 🟨 DOKA ICONIC BRAND YELLOW HEADER */}
      <header className="sticky top-0 z-50 bg-[#FFF200] shadow-md px-6 py-4 border-b border-amber-400">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="bg-[#004588] text-white px-2 py-1 font-black text-xl tracking-tighter rounded">SD</div>
            <span className="font-black text-xl tracking-tight text-[#004588] uppercase">
              S D <span className="font-light text-slate-800 lowercase">Scaffolding</span>
            </span>
          </div>
          <nav className="hidden lg:flex gap-8 text-sm font-bold text-[#004588] tracking-tight">
            <a href="#about" className="hover:underline">About Us</a>
            <a href="#digital" className="hover:underline">Digital Infrastructure</a>
            <a href="#systems" className="hover:underline">Solutions & Products</a>
            <a href="#calculator" className="hover:underline">Estimator Engine</a>
          </nav>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="bg-[#004588] hover:bg-[#003366] text-white font-bold text-xs uppercase px-4 py-2.5 rounded shadow transition-all"
          >
            Contact Desk
          </button>
        </div>
      </header>

      {/* 🟦 RIGHT-SIDE FLOATING STICKY ACTION UTILITIES */}
      <div className="fixed right-0 top-1/3 z-40 flex flex-col gap-0.5 shadow-xl">
        <a href={`tel:${MY_PHONE_NUMBER}`} className="bg-[#004588] hover:bg-[#003366] text-white p-3.5 flex flex-col items-center justify-center gap-1 min-w-[90px] transition-all">
          <span className="text-xl">📞</span>
          <span className="text-[10px] font-black uppercase tracking-wider">Call Now</span>
        </a>
        <button 
          onClick={() => setIsModalOpen(true)} 
          className="bg-[#FFF200] hover:bg-amber-400 text-[#004588] p-3.5 flex flex-col items-center justify-center gap-1 min-w-[90px] transition-all border-l border-amber-300"
        >
          <span className="text-xl">✉</span>
          <span className="text-[10px] font-black uppercase tracking-wider">Inquiry</span>
        </button>
      </div>

      {/* 🏗️ DOKA STYLE MULTI-SLIDE HERO ENGINE */}
      <section className="relative bg-slate-950 text-white h-[580px] overflow-hidden transition-all duration-700">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-all duration-1000 transform scale-105"
          style={{ 
            backgroundImage: `linear-gradient(to right, rgba(12, 35, 64, 0.95) 0%, rgba(12, 35, 64, 0.4) 100%), url('${slides[currentSlide].bgImage}')` 
          }}
        />
        <div className="absolute inset-0 flex items-center px-6 max-w-7xl mx-auto z-10">
          <div className="max-w-3xl space-y-4 animate-fadeIn">
            <span className="bg-[#FFF200] text-[#004588] text-[10px] font-black tracking-widest px-2.5 py-1 uppercase rounded">Industrial Tier</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-none text-white">
              {slides[currentSlide].title}
            </h1>
            <h2 className="text-xl sm:text-2xl text-[#FFF200] font-bold">
              {slides[currentSlide].subtitle}
            </h2>
            <p className="text-base text-slate-300 font-medium max-w-xl">
              {slides[currentSlide].desc}
            </p>
            <div className="pt-4 flex gap-4">
              <button onClick={() => setIsModalOpen(true)} className="px-6 py-3 bg-[#FFF200] text-[#004588] hover:bg-white font-black text-xs uppercase tracking-widest transition-all rounded shadow">Discover More ➔</button>
              <a href="#systems" className="px-6 py-3 border border-white hover:bg-white hover:text-slate-950 font-black text-xs uppercase tracking-widest transition-all rounded">System Specs</a>
            </div>
          </div>
        </div>
        {/* Slide Indicator Dots */}
        <div className="absolute bottom-6 left-6 z-20 flex gap-2">
          {slides.map((_, idx) => (
            <button 
              key={idx} 
              onClick={() => setCurrentSlide(idx)}
              className={`h-3 rounded-full transition-all ${currentSlide === idx ? 'w-8 bg-[#FFF200]' : 'w-3 bg-white/40'}`} 
            />
          ))}
        </div>
      </section>

      {/* 🌐 DOKA DIGITAL HUB ROW (Concremote + Tools Row) */}
      <section id="digital" className="bg-[#495866] text-white py-12 px-6 border-b-4 border-[#FFF200]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-slate-800/40 p-6 rounded border border-slate-700 space-y-3">
            <div className="text-2xl">🎛️</div>
            <h3 className="text-lg font-bold text-[#FFF200]">Concremote Matrix</h3>
            <p className="text-xs text-slate-300 font-medium">Concrete structural maturity indicators and modular fleet testing algorithms deployed dynamically on-site.</p>
          </div>
          <div className="bg-slate-800/40 p-6 rounded border border-slate-700 space-y-3">
            <div className="text-2xl">📂</div>
            <h3 className="text-lg font-bold text-[#FFF200]">User Tech Manuals</h3>
            <p className="text-xs text-slate-300 font-medium">Download load capacity limits, structural layout configuration guides, and compliance checklist metrics maps.</p>
          </div>
          <div className="bg-slate-800/40 p-6 rounded border border-slate-700 space-y-3">
            <div className="text-2xl">⚡</div>
            <h3 className="text-lg font-bold text-[#FFF200]">S D Tools Engine</h3>
            <p className="text-xs text-slate-300 font-medium">Integrated digital calculation tools built specifically to optimize components distribution cycles seamlessly.</p>
          </div>
        </div>
      </section>

      {/* ℹ️ CORPORATE INFO SPEECH COMPONENT */}
      <section id="about" className="py-20 px-6 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-8 space-y-4">
          <h2 className="text-3xl font-black text-[#004588]">S D Scaffolding & Formwork Network</h2>
          <p className="text-sm text-slate-600 leading-relaxed font-medium">
            Operating high-performing material logistics distribution asset networks across industrial sectors. We ensure that precision-engineered scaffolding assets, heavy MS components, and safe wall panel assemblies are delivered swiftly—no matter the structural scale.
          </p>
          <div className="text-xs text-slate-500 font-bold tracking-wider uppercase bg-slate-100 p-3 rounded border border-slate-200 inline-block">
            🧾 GSTIN / UIN : 09AVMPD9471F1Z8
          </div>
        </div>
        <div className="md:col-span-4 p-6 bg-slate-50 border border-slate-200 rounded text-center shadow-inner">
          <div className="text-3xl font-black text-[#004588]">A TO Z</div>
          <div className="text-[10px] font-bold uppercase text-slate-500 tracking-wider mt-1">Compliance Guaranteed Under Engineering Controls</div>
        </div>
      </section>

      {/* 🎛️ SOLUTIONS EXPLORER TAB LAYOUT */}
      <section id="systems" className="py-24 px-6 bg-slate-50 border-t border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="border-b border-slate-200 pb-6 mb-12 text-center lg:text-left">
            <span className="text-xs font-black text-[#004588] tracking-widest uppercase">SYSTEM ARCHITECTURE METRICS</span>
            <h2 className="text-3xl font-black tracking-tight text-slate-950 mt-1">Explore Engineered System Components</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            <div className="lg:col-span-4 flex flex-col gap-2">
              {Object.keys(segmentData).map((key) => (
                <button
                  key={key}
                  onClick={() => setActiveSegment(key)}
                  className={`w-full p-4 text-left text-xs font-black uppercase tracking-wider border rounded transition-all flex items-center justify-between cursor-pointer ${activeSegment === key ? 'bg-[#FFF200] border-amber-400 text-[#004588] font-black shadow-sm' : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100'}`}
                >
                  <span>{key} Sector Module</span>
                  <span>➔</span>
                </button>
              ))}
            </div>

            <div className="lg:col-span-8 bg-white border border-slate-200 rounded p-6 lg:p-10 flex flex-col justify-between shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-5 relative w-full h-48 md:h-60 bg-slate-100 rounded overflow-hidden border border-slate-200">
                  <img src={currentData.image} alt={currentData.title} className="w-full h-full object-cover" />
                </div>
                <div className="md:col-span-7 space-y-3">
                  <h3 className="text-xl font-black text-[#004588] tracking-tight">{currentData.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed font-medium">{currentData.desc}</p>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100">
                <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">SYSTEM COMPONENT UNITS INCLUDED:</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {currentData.items.map((item, idx) => (
                    <div key={idx} className="bg-slate-50 border border-slate-200 p-2.5 rounded text-left text-xs font-bold text-slate-800 shadow-sm">
                      🔹 {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 📊 INTERACTIVE ESTIMATOR CALCULATOR */}
      <section id="calculator" className="py-24 px-6 max-w-5xl mx-auto">
        <div className="text-center space-y-2 mb-16">
          <h2 className="text-3xl font-black text-slate-950 tracking-tight">Formwork Calculation Optimization Engine</h2>
          <p className="text-sm text-slate-500">Run structural layout metrics estimates based on expected fleet footprints.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-slate-50 border border-slate-200 p-8 rounded-xl shadow-sm">
          <form onSubmit={calculateEstimate} className="space-y-5">
            <div>
              <label className="block text-xs font-bold uppercase text-slate-600 tracking-wider mb-2">Total Slab Area (Sq. Ft.)</label>
              <input type="number" required placeholder="e.g. 4000" value={area} onChange={(e) => setArea(e.target.value)} className="w-full px-4 py-3 bg-white border border-slate-200 focus:border-[#004588] focus:outline-none text-slate-950 font-semibold text-sm rounded shadow-inner" />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase text-slate-600 tracking-wider mb-2">Contract Period Cycle</label>
              <select value={days} onChange={(e) => setDays(e.target.value)} className="w-full px-4 py-3 bg-white border border-slate-200 focus:border-[#004588] focus:outline-none text-slate-950 font-semibold text-sm rounded">
                <option value="30">30 Days (Standard Allocation)</option>
                <option value="60">60 Days (Extended Allocation)</option>
              </select>
            </div>
            <button type="submit" className="w-full py-3.5 bg-slate-950 hover:bg-[#004588] text-white font-black text-xs uppercase tracking-widest rounded transition-all cursor-pointer shadow">Run Calculation Report ➔</button>
          </form>

          <div className="bg-white border border-slate-200 rounded p-6 flex flex-col justify-center">
            {estimate ? (
              <div className="space-y-4">
                <h4 className="font-bold text-slate-400 text-[10px] uppercase tracking-wider border-b pb-2">Computed Structural Estimates:</h4>
                <div className="flex justify-between items-center"><span className="text-slate-600 text-sm font-medium">MS Heavy Props Fleet:</span><span className="font-black text-slate-950 text-base">{estimate.props} Units</span></div>
                <div className="flex justify-between items-center"><span className="text-slate-600 text-sm font-medium">Centering Shuttering Plates:</span><span className="font-black text-slate-950 text-base">{estimate.plates} Units</span></div>
                <div className="pt-4 border-t flex justify-between items-center"><span className="text-slate-900 font-bold text-sm">Rent Estimate Budget:</span><span className="font-black text-[#004588] text-xl">₹{estimate.cost.toLocaleString('en-IN')}*</span></div>
              </div>
            ) : (
              <p className="text-slate-400 text-center text-sm font-medium py-6">Provide floor area specs to view structural report calculation fields.</p>
            )}
          </div>
        </div>
      </section>

      {/* 🗺️ OFFICE REGIONAL DIRECTIONS SUMMARY */}
      <section className="py-12 bg-slate-100 border-t border-slate-200 text-slate-700 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 text-xs font-semibold">
          <div className="border-l-4 border-[#004588] pl-4">
            <h4 className="text-xs font-black text-slate-950 uppercase tracking-wider mb-1">Corporate Billing Desk:</h4>
            <p>📍 F 171 DELTA 1, GREATER NOIDA, Gautambuddha Nagar, Uttar Pradesh 201308</p>
          </div>
          <div className="border-l-4 border-amber-400 pl-4">
            <h4 className="text-xs font-black text-slate-950 uppercase tracking-wider mb-1">Regional Yards Pipeline:</h4>
            <p>📍GREATER NOIDA, Gautambuddha Nagar, Uttar Pradesh 201308</p>
          </div>
        </div>
      </section>

      {/* 📜 SYSTEM FOOTER */}
      <footer className="py-10 text-center text-[10px] text-slate-400 font-bold tracking-wider uppercase bg-white border-t border-slate-100">
        <p>© 2026 S D Scaffolding Solutions Commercial Group. Engineered Compliance Controls.</p>
      </footer>

      {/* 🟨 DOKA INSPIRED POPUP OVERLAY MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-slate-950/70 z-[1000] flex items-center justify-center p-4 backdrop-blur-sm">
          <div className="bg-white rounded-lg shadow-2xl max-w-md w-full overflow-hidden border border-slate-200">
            <div className="bg-[#FFF200] px-6 py-4 border-b border-amber-300 flex justify-between items-center">
              <h3 className="font-black text-[#004588] uppercase text-sm">Request Corporate Documentation</h3>
              <button onClick={() => setIsModalOpen(false)} className="text-[#004588] font-black text-lg hover:text-red-600">✕</button>
            </div>
            <form onSubmit={handleModalSubmit} className="p-6 space-y-4">
              <div className="flex gap-4 text-xs font-bold text-slate-700">
                <label className="flex items-center gap-1.5 cursor-pointer">
                  <input type="radio" value="mr" checked={formData.salutation === 'mr'} onChange={(e) => setFormData({...formData, salutation: e.target.value})} className="accent-[#004588]" /> Mr.
                </label>
                <label className="flex items-center gap-1.5 cursor-pointer">
                  <input type="radio" value="mrs" checked={formData.salutation === 'mrs'} onChange={(e) => setFormData({...formData, salutation: e.target.value})} className="accent-[#004588]" /> Mrs.
                </label>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <input type="text" required placeholder="Forename *" value={formData.firstname} onChange={(e) => setFormData({...formData, firstname: e.target.value})} className="w-full px-3 py-2 border rounded bg-slate-50 text-xs focus:outline-none focus:border-[#004588]" />
                <input type="text" required placeholder="Surname *" value={formData.surname} onChange={(e) => setFormData({...formData, surname: e.target.value})} className="w-full px-3 py-2 border rounded bg-slate-50 text-xs focus:outline-none focus:border-[#004588]" />
              </div>
              <input type="text" required placeholder="Company / Organisation *" value={formData.company} onChange={(e) => setFormData({...formData, company: e.target.value})} className="w-full px-3 py-2 border rounded bg-slate-50 text-xs focus:outline-none focus:border-[#004588]" />
              <input type="tel" required placeholder="Telephone Secure Line *" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} className="w-full px-3 py-2 border rounded bg-slate-50 text-xs focus:outline-none focus:border-[#004588]" />
              <input type="email" required placeholder="Corporate Email Address *" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full px-3 py-2 border rounded bg-slate-50 text-xs focus:outline-none focus:border-[#004588]" />
              <textarea rows="3" required placeholder="Specify your site requirements..." value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} className="w-full px-3 py-2 border rounded bg-slate-50 text-xs focus:outline-none focus:border-[#004588] resize-none" />
              
              <button type="submit" className="w-full py-3 bg-[#004588] hover:bg-[#003366] text-white font-black text-xs uppercase tracking-widest rounded shadow transition-all">
                Transmit Records via WhatsApp
              </button>
            </form>
          </div>
        </div>
      )}

    </main>
  );
}
