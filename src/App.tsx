import { useState, useEffect } from 'react';
import { 
  MessageCircle, 
  Phone, 
  MapPin, 
  ArrowUpRight, 
  Lock, 
  Building2, 
  Home, 
  Stethoscope, 
  X, 
  Check, 
  Instagram, 
  Youtube, 
  Linkedin,
  Menu
} from 'lucide-react';

export default function App() {
  const [isConciergeOpen, setIsConciergeOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('Facial Architecture');
  const [consultationType, setConsultationType] = useState('In-Clinic Private Suite');
  const [clientName, setClientName] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Lock body scroll when mobile menu or concierge modal is active
  useEffect(() => {
    if (mobileMenuOpen || isConciergeOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen, isConciergeOpen]);

  // Direct WhatsApp VIP dispatch with pre-filled concierge text
  const handleWhatsAppDispatch = () => {
    const text = encodeURIComponent(
      `Hello Lucia Clinic Concierge,\n\nI would like to request a priority VIP consultation.\n\n• Name: ${clientName || 'VIP Client'}\n• Treatment Interest: ${selectedService}\n• Preference: ${consultationType}\n• Location: Villa 323, Jumeirah Beach Road\n\nPlease let me know available slots.`
    );
    window.open(`https://wa.me/97143854525?text=${text}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#fcfcf9] text-[#1a1918] selection:bg-[#b99882] selection:text-white">
      {/* 1. STICKY TOP NAVIGATION */}
      <header className="sticky top-0 z-40 bg-[#fcfcf9]/90 backdrop-blur-md border-b border-[#1a1918]/10 transition-all">
        <div className="max-w-[1360px] mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#" className="font-serif text-xl sm:text-2xl tracking-[0.25em] uppercase font-light text-[#1a1918] hover:opacity-80 transition-opacity">
            Lucia Clinic Dubai
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-8 text-[13px] tracking-[0.08em] font-medium text-[#1a1918]/80">
            <a href="#treatments" className="hover:text-[#b99882] transition-colors">Treatments</a>
            <a href="#masters" className="hover:text-[#b99882] transition-colors">Visiting Masters</a>
            <a href="#roster" className="hover:text-[#b99882] transition-colors">Celebrity Roster</a>
            <a href="#founder" className="hover:text-[#b99882] transition-colors">About Dr. Lukian</a>
            <a href="#sanctuary" className="hover:text-[#b99882] transition-colors">Jumeirah Sanctuary</a>
          </nav>

          {/* VIP Concierge Action */}
          <div className="hidden sm:flex items-center space-x-4">
            <button 
              onClick={() => setIsConciergeOpen(true)}
              className="group flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#1a1918]/25 text-[12px] font-medium tracking-[0.14em] uppercase hover:bg-[#1a1918] hover:text-[#fcfcf9] hover:border-[#1a1918] transition-all"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#b99882] group-hover:text-[#fcfcf9] transition-colors" />
              <span>VIP Concierge</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(true)} 
            className="md:hidden p-2 text-[#1a1918] rounded-full hover:bg-[#efebe4] transition-colors"
            aria-label="Open Navigation Menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Mobile Luxury Full-Screen Navigation Drawer (Root Level) */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[999] w-full h-[100dvh] bg-[#fcfcf9] flex flex-col justify-between p-6 sm:p-8 animate-in fade-in duration-200 overflow-y-auto">
          {/* Top Bar inside Drawer */}
          <div className="flex items-center justify-between pb-6 border-b border-[#1a1918]/10 shrink-0">
            <span className="font-serif text-lg tracking-[0.25em] uppercase font-light text-[#1a1918]">
              Lucia Clinic Dubai
            </span>
            <button 
              onClick={() => setMobileMenuOpen(false)}
              className="w-10 h-10 rounded-full border border-[#1a1918]/20 flex items-center justify-center text-[#1a1918] hover:bg-[#efebe4] transition-colors"
              aria-label="Close Menu"
            >
              <X className="w-5 h-5 text-[#1a1918]" />
            </button>
          </div>

          {/* Editorial Navigation Links */}
          <nav className="flex flex-col space-y-6 my-auto py-8">
            {[
              { num: '01', title: 'Treatments', href: '#treatments', tag: 'Core Disciplines' },
              { num: '02', title: 'Visiting Masters', href: '#masters', tag: 'Dr. Raj Kanodia' },
              { num: '03', title: 'Celebrity Roster', href: '#roster', tag: 'Social Proof' },
              { num: '04', title: 'About Dr. Lukian', href: '#founder', tag: 'Medical Director' },
              { num: '05', title: 'Jumeirah Sanctuary', href: '#sanctuary', tag: 'Villa 323' },
            ].map((item) => (
              <a
                key={item.num}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="group flex items-center justify-between border-b border-[#1a1918]/10 pb-4 transition-colors"
              >
                <div className="flex items-baseline gap-4">
                  <span className="text-[11px] font-mono tracking-widest text-[#b99882] font-medium">
                    {item.num}
                  </span>
                  <span className="font-serif text-3xl text-[#1a1918] group-hover:text-[#b99882] transition-colors font-normal">
                    {item.title}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] tracking-[0.16em] uppercase text-[#1a1918]/50 hidden sm:inline">
                    {item.tag}
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-[#b99882] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </a>
            ))}
          </nav>

          {/* Bottom Luxury Concierge Card */}
          <div className="bg-[#efebe4] rounded-2xl p-6 border border-[#1a1918]/10 space-y-4 shrink-0">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#b99882] block">
                  Private Concierge
                </span>
                <a href="tel:+97143854525" className="font-serif text-lg text-[#1a1918] hover:text-[#b99882] transition-colors">
                  +971 4 385 4525
                </a>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-[10px] tracking-wider uppercase text-[#1a1918]/70 border border-[#1a1918]/10">
                <MapPin className="w-3 h-3 text-[#b99882]" />
                <span>Jumeirah 2</span>
              </div>
            </div>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setIsConciergeOpen(true);
              }}
              className="w-full py-3.5 rounded-full bg-[#1a1918] text-[#fcfcf9] text-[11px] font-semibold tracking-[0.16em] uppercase flex items-center justify-center gap-2 hover:bg-[#b99882] transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-[#b99882]" />
              <span>Reserve VIP Consultation</span>
            </button>
          </div>
        </div>
      )}

      {/* 2. HERO SECTION */}
      <section className="relative pt-12 pb-16 lg:pt-16 lg:pb-24 overflow-hidden">
        <div className="max-w-[1360px] mx-auto px-6 lg:px-12">
          {/* Location Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#1a1918]/15 text-[11px] font-medium tracking-[0.16em] uppercase text-[#1a1918]/80 mb-8 sm:mb-12">
            <MapPin className="w-3 h-3 text-[#b99882]" />
            <span>Villa 323, Jumeirah Beach Road • Dubai</span>
          </div>

          {/* Hero Titles & Statement */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end mb-12 lg:mb-16">
            <div className="lg:col-span-8">
              <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[84px] leading-[1.05] tracking-[-0.01em] font-normal text-[#1a1918]">
                The Pinnacle of <br />
                Non-Surgical <br />
                Aesthetics{' '}
                <span className="italic font-serif font-light text-[#b99882]">
                  &amp; Longevity
                </span>
              </h1>
            </div>

            <div className="lg:col-span-4 flex flex-col justify-end space-y-6 lg:pb-3">
              <p className="text-[15px] sm:text-[16px] leading-relaxed text-[#1a1918]/75 font-normal">
                Where Swiss medical precision meets bespoke Arabian hospitality. Trusted by global icons, royalty, and international pioneers.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                <a 
                  href="#treatments"
                  className="px-8 py-3.5 rounded-full bg-[#1a1918] text-[#fcfcf9] text-[12px] font-medium tracking-[0.14em] uppercase text-center hover:bg-[#b99882] transition-colors"
                >
                  Explore Treatments
                </a>
                <button 
                  onClick={() => setIsConciergeOpen(true)}
                  className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-[#1a1918]/25 text-[12px] font-medium tracking-[0.14em] uppercase text-[#1a1918] hover:bg-[#efebe4] transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-[#b99882]" />
                  <span>WhatsApp VIP Concierge</span>
                </button>
              </div>
            </div>
          </div>

          {/* Architectural Hero Visual Frame */}
          <div className="relative w-full rounded-2xl overflow-hidden aspect-[16/9] max-h-[640px] shadow-sm border border-[#1a1918]/10 group">
            <img 
              src="https://framerusercontent.com/images/1TfCnBPi4A1Ch89YkMcyvmEts.jpg" 
              alt="Lucia Aesthetic Clinic Sanctuary Interior" 
              className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-1000 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>
      </section>

      {/* 3. THE RED CARPET ROSTER (CELEBRITY PROOF) */}
      <section id="roster" className="py-20 bg-[#fcfcf9] border-t border-[#1a1918]/10">
        <div className="max-w-[1360px] mx-auto px-6 lg:px-12">
          {/* Section Header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
            <div className="lg:col-span-7">
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal leading-tight text-[#1a1918]">
                Trusted by the world's most <br />
                photographed faces
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="text-[14px] leading-relaxed text-[#1a1918]/65 font-normal">
                Discretion is our first protocol. These words are shared with permission — the rest of our roster remains, as always, private.
              </p>
            </div>
          </div>

          {/* 3-Column Quotes Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 pt-4">
            {/* Naomi Campbell */}
            <div className="border-t border-[#1a1918]/20 pt-8 flex flex-col justify-between space-y-8">
              <p className="font-serif italic text-xl sm:text-2xl text-[#1a1918] leading-relaxed">
                “Lucia Clinic is my first destination when I arrive in Dubai.”
              </p>
              <div>
                <p className="text-[12px] font-semibold tracking-[0.16em] uppercase text-[#1a1918]">Naomi Campbell</p>
                <p className="text-[12px] text-[#1a1918]/60 mt-0.5">Supermodel &amp; Activist</p>
              </div>
            </div>

            {/* Eva Longoria */}
            <div className="border-t border-[#1a1918]/20 pt-8 flex flex-col justify-between space-y-8">
              <p className="font-serif italic text-xl sm:text-2xl text-[#1a1918] leading-relaxed">
                “My trusted sanctuary for enduring skin health and flawless vitality.”
              </p>
              <div>
                <p className="text-[12px] font-semibold tracking-[0.16em] uppercase text-[#1a1918]">Eva Longoria</p>
                <p className="text-[12px] text-[#1a1918]/60 mt-0.5">Actress &amp; Producer</p>
              </div>
            </div>

            {/* Huda Kattan */}
            <div className="border-t border-[#1a1918]/20 pt-8 flex flex-col justify-between space-y-8">
              <p className="font-serif italic text-xl sm:text-2xl text-[#1a1918] leading-relaxed">
                “A masterclass in precision, skin transformation, and bespoke care.”
              </p>
              <div>
                <p className="text-[12px] font-semibold tracking-[0.16em] uppercase text-[#1a1918]">Huda Kattan</p>
                <p className="text-[12px] text-[#1a1918]/60 mt-0.5">Founder, Huda Beauty</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SIGNATURE TREATMENT DIRECTORY */}
      <section id="treatments" className="py-24 bg-[#efebe4]">
        <div className="max-w-[1360px] mx-auto px-6 lg:px-12">
          {/* Section Eyebrow & Title */}
          <div className="mb-14">
            <span className="text-[11px] font-medium tracking-[0.2em] uppercase text-[#b99882] block mb-3">
              Signature Treatment Directory
            </span>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
              <div className="lg:col-span-7">
                <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal leading-[1.1] text-[#1a1918]">
                  Four disciplines, one <br />
                  uncompromising standard
                </h2>
              </div>
              <div className="lg:col-span-5">
                <p className="text-[15px] leading-relaxed text-[#1a1918]/70 font-normal">
                  Each protocol is composed in private consultation and performed by board-certified physicians, never by technicians.
                </p>
              </div>
            </div>
          </div>

          {/* 4 Pillars Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="bg-[#fcfcf9] rounded-xl p-8 flex flex-col justify-between min-h-[380px] border border-[#1a1918]/5 hover:shadow-md transition-shadow">
              <div>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#1a1918] mb-4">
                  Facial Architecture
                </h3>
                <p className="text-[14px] leading-relaxed text-[#1a1918]/70">
                  Signature non-surgical facelifts, polynucleotides, Profhilo &amp; Morpheus8 — sculpted with restraint.
                </p>
              </div>
              <div className="pt-8 border-t border-[#1a1918]/10 flex items-center justify-between text-[11px] font-semibold tracking-[0.16em] uppercase text-[#1a1918] group cursor-pointer"
                onClick={() => { setSelectedService('Facial Architecture'); setIsConciergeOpen(true); }}
              >
                <span>Discover</span>
                <ArrowUpRight className="w-4 h-4 text-[#b99882] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-[#fcfcf9] rounded-xl p-8 flex flex-col justify-between min-h-[380px] border border-[#1a1918]/5 hover:shadow-md transition-shadow">
              <div>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#1a1918] mb-4">
                  Laser &amp; Skin Rejuvenation
                </h3>
                <p className="text-[14px] leading-relaxed text-[#1a1918]/70">
                  Fotona 4D, Pico Genesis and medical HydraFacials for luminous, even, resilient skin.
                </p>
              </div>
              <div className="pt-8 border-t border-[#1a1918]/10 flex items-center justify-between text-[11px] font-semibold tracking-[0.16em] uppercase text-[#1a1918] group cursor-pointer"
                onClick={() => { setSelectedService('Laser & Skin Rejuvenation'); setIsConciergeOpen(true); }}
              >
                <span>Discover</span>
                <ArrowUpRight className="w-4 h-4 text-[#b99882] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>

            {/* Card 3 */}
            <div id="masters" className="bg-[#fcfcf9] rounded-xl p-8 flex flex-col justify-between min-h-[380px] border border-[#1a1918]/5 hover:shadow-md transition-shadow">
              <div>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#1a1918] mb-4">
                  Visiting Beverly Hills Masters
                </h3>
                <p className="text-[14px] leading-relaxed text-[#1a1918]/70">
                  An exclusive residency with Dr. Raj Kanodia, celebrated as the “King of the Nose.”
                </p>
              </div>
              <div className="pt-8 border-t border-[#1a1918]/10 flex items-center justify-between text-[11px] font-semibold tracking-[0.16em] uppercase text-[#1a1918] group cursor-pointer"
                onClick={() => { setSelectedService('Visiting Beverly Hills Masters (Dr. Raj Kanodia)'); setIsConciergeOpen(true); }}
              >
                <span>Discover</span>
                <ArrowUpRight className="w-4 h-4 text-[#b99882] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-[#fcfcf9] rounded-xl p-8 flex flex-col justify-between min-h-[380px] border border-[#1a1918]/5 hover:shadow-md transition-shadow">
              <div>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#1a1918] mb-4">
                  Longevity &amp; Cellular Medicine
                </h3>
                <p className="text-[14px] leading-relaxed text-[#1a1918]/70">
                  NAD+ infusion protocols, bio-identical rejuvenation and hyperbaric wellness.
                </p>
              </div>
              <div className="pt-8 border-t border-[#1a1918]/10 flex items-center justify-between text-[11px] font-semibold tracking-[0.16em] uppercase text-[#1a1918] group cursor-pointer"
                onClick={() => { setSelectedService('Longevity & Cellular Medicine'); setIsConciergeOpen(true); }}
              >
                <span>Discover</span>
                <ArrowUpRight className="w-4 h-4 text-[#b99882] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FOUNDER PROFILE — DR. RADMILA LUKIAN */}
      <section id="founder" className="py-24 bg-[#fcfcf9]">
        <div className="max-w-[1360px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Portrait Frame */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden shadow-sm aspect-[4/5] border border-[#1a1918]/10">
                <img 
                  src="https://framerusercontent.com/images/HoVqGLirSRsCxfOJQkMcY6npw.jpg" 
                  alt="Dr. Radmila Lukian, Founder & Medical Director" 
                  className="w-full h-full object-cover object-top filter grayscale contrast-105"
                />
              </div>
            </div>

            {/* Biography & Philosophy */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <span className="text-[11px] font-medium tracking-[0.2em] uppercase text-[#b99882] mb-3">
                Founder &amp; Medical Director
              </span>
              <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#1a1918] font-normal leading-tight mb-6">
                Dr. Radmila Lukian
              </h2>

              <p className="font-serif italic text-2xl sm:text-3xl text-[#b99882] leading-relaxed mb-8">
                “True beauty is never announced. It is simply, unmistakably, there.”
              </p>

              <p className="text-[15px] sm:text-[16px] leading-relaxed text-[#1a1918]/75 font-normal mb-12">
                With more than twenty years of European board-certified mastery, Dr. Lukian is a pioneer of natural, undetectable lifting techniques and a long-standing CNN medical contributor. Her philosophy is precise and patient: restore architecture, protect skin health, and never erase character.
              </p>

              {/* Authority Credential Badges */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-[#1a1918]/15">
                <div>
                  <p className="font-serif text-3xl sm:text-4xl text-[#1a1918] font-light">20+</p>
                  <p className="text-[12px] text-[#1a1918]/65 mt-1 leading-snug">Years of European board-certified practice</p>
                </div>
                <div>
                  <p className="font-serif text-3xl sm:text-4xl text-[#1a1918] font-light">CNN</p>
                  <p className="text-[12px] text-[#1a1918]/65 mt-1 leading-snug">Medical contributor &amp; aesthetic authority</p>
                </div>
                <div>
                  <p className="font-serif text-3xl sm:text-4xl text-[#1a1918] font-light">EU</p>
                  <p className="text-[12px] text-[#1a1918]/65 mt-1 leading-snug">Swiss-trained clinical protocols</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. VIP CONSULTATION BOOKING SUITE (CALL TO ACTION) */}
      <section id="concierge" className="py-24 bg-[#efebe4] border-t border-[#1a1918]/10">
        <div className="max-w-[1360px] mx-auto px-6 lg:px-12 text-center">
          <div className="max-w-2xl mx-auto mb-14">
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal text-[#1a1918] mb-4">
              Reserve Your Private Consultation Suite
            </h2>
            <p className="text-[15px] text-[#1a1918]/70 leading-relaxed">
              Every request is handled personally by our concierge through an encrypted line — confirmations within the hour.
            </p>
          </div>

          {/* 3 Experience Choices */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 text-left">
            <div className="bg-[#fcfcf9] p-8 rounded-xl border border-[#1a1918]/5">
              <Building2 className="w-5 h-5 text-[#b99882] mb-4" />
              <h3 className="font-serif text-2xl text-[#1a1918] mb-2">In-Clinic Private Suite</h3>
              <p className="text-[14px] text-[#1a1918]/70">A secluded suite with private entrance at Villa 323.</p>
            </div>

            <div className="bg-[#fcfcf9] p-8 rounded-xl border border-[#1a1918]/5">
              <Home className="w-5 h-5 text-[#b99882] mb-4" />
              <h3 className="font-serif text-2xl text-[#1a1918] mb-2">In-Villa Private Doctor Visit</h3>
              <p className="text-[14px] text-[#1a1918]/70">Your physician attends at your residence, hotel or yacht.</p>
            </div>

            <div className="bg-[#fcfcf9] p-8 rounded-xl border border-[#1a1918]/5">
              <Stethoscope className="w-5 h-5 text-[#b99882] mb-4" />
              <h3 className="font-serif text-2xl text-[#1a1918] mb-2">Specialist Surgical Advisory</h3>
              <p className="text-[14px] text-[#1a1918]/70">Candid counsel with our visiting masters before any decision.</p>
            </div>
          </div>

          {/* Dual Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <button 
              onClick={() => setIsConciergeOpen(true)}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#1a1918] text-[#fcfcf9] text-[12px] font-medium tracking-[0.16em] uppercase hover:bg-[#b99882] transition-colors"
            >
              WhatsApp VIP Concierge
            </button>
            <a 
              href="tel:+97143854525"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-[#1a1918]/25 text-[12px] font-medium tracking-[0.16em] uppercase text-[#1a1918] hover:bg-[#fcfcf9] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#b99882]" />
              <span>+971 4 385 4525</span>
            </a>
          </div>

          <div className="inline-flex items-center gap-2 text-[12px] text-[#1a1918]/60">
            <Lock className="w-3.5 h-3.5 text-[#b99882]" />
            <span>End-to-end encrypted · Strictly confidential</span>
          </div>
        </div>
      </section>

      {/* 7. FOOTER */}
      <footer id="sanctuary" className="bg-[#1a1918] text-[#fcfcf9] pt-20 pb-12">
        <div className="max-w-[1360px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-[#fcfcf9]/15">
            {/* Column 1: Brand & Address */}
            <div className="lg:col-span-5 space-y-4">
              <h3 className="font-serif text-2xl tracking-[0.2em] uppercase font-light text-[#fcfcf9]">
                Lucia Clinic Dubai
              </h3>
              <div className="text-[14px] text-[#fcfcf9]/70 space-y-1 pt-2 font-normal">
                <p>Villa 323, Jumeirah Beach Road</p>
                <p>Jumeirah 2, Dubai, United Arab Emirates</p>
                <p className="text-[#b99882]">Opposite Four Seasons Resort</p>
              </div>
            </div>

            {/* Column 2: Concierge Desk */}
            <div className="lg:col-span-4 space-y-4">
              <h4 className="text-[12px] font-semibold tracking-[0.16em] uppercase text-[#fcfcf9]">Concierge</h4>
              <div className="text-[14px] text-[#fcfcf9]/70 space-y-2">
                <p><a href="tel:+97143854525" className="hover:text-[#b99882] transition-colors">+971 4 385 4525</a></p>
                <p><a href="https://wa.me/97143854525" target="_blank" rel="noreferrer" className="hover:text-[#b99882] transition-colors">WhatsApp VIP Line</a></p>
                <p className="text-[#fcfcf9]/50">Daily · 9:00 – 21:00</p>
              </div>
            </div>

            {/* Column 3: Explore */}
            <div className="lg:col-span-3 space-y-4">
              <h4 className="text-[12px] font-semibold tracking-[0.16em] uppercase text-[#fcfcf9]">Explore</h4>
              <div className="text-[14px] text-[#fcfcf9]/70 space-y-2 flex flex-col">
                <a href="#treatments" className="hover:text-[#b99882] transition-colors">Treatments</a>
                <a href="#roster" className="hover:text-[#b99882] transition-colors">Celebrity Roster</a>
                <a href="#founder" className="hover:text-[#b99882] transition-colors">About Dr. Lukian</a>
                <button onClick={() => setIsConciergeOpen(true)} className="text-left hover:text-[#b99882] transition-colors">Private Consultation</button>
              </div>
            </div>
          </div>

          {/* Subfooter */}
          <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-[12px] text-[#fcfcf9]/50">
            <p>© 2026 Lucia Aesthetic &amp; Dermatology Clinic. DHA licensed medical facility. Results vary by individual.</p>
            
            <div className="flex items-center space-x-6 tracking-widest text-[#fcfcf9]/75 text-[11px] font-medium">
              <span className="text-[#b99882]">EN</span>
              <span className="hover:text-white cursor-pointer">AR</span>
              <span className="hover:text-white cursor-pointer">RU</span>
            </div>

            <div className="flex items-center space-x-4 text-[#fcfcf9]/80">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-[#b99882] transition-colors" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="hover:text-[#b99882] transition-colors" aria-label="YouTube">
                <Youtube className="w-4 h-4" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-[#b99882] transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* 8. APPLE-STYLE SPRING CONCIERGE MODAL */}
      {isConciergeOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div 
            className="relative w-full max-w-lg bg-[#fcfcf9] rounded-2xl shadow-2xl border border-[#1a1918]/15 p-6 sm:p-8 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between pb-4 border-b border-[#1a1918]/10 mb-6">
              <div>
                <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#b99882] block mb-1">
                  Private VIP Concierge
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#1a1918]">
                  Reserve Your Consultation
                </h3>
              </div>
              <button 
                onClick={() => setIsConciergeOpen(false)}
                className="p-1 rounded-full text-[#1a1918]/60 hover:text-[#1a1918] hover:bg-[#efebe4] transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Service Selector */}
            <div className="space-y-4 mb-6">
              <label className="text-[12px] font-semibold tracking-[0.1em] uppercase text-[#1a1918]/80 block">
                Select Discipline / Objective
              </label>
              <div className="grid grid-cols-2 gap-2 text-xs">
                {[
                  'Facial Architecture',
                  'Laser & Rejuvenation',
                  'Visiting Masters (Dr. Kanodia)',
                  'Longevity & NAD+'
                ].map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setSelectedService(s)}
                    className={`p-3 rounded-lg border text-left flex items-center justify-between transition-all ${
                      selectedService === s 
                        ? 'border-[#1a1918] bg-[#1a1918] text-[#fcfcf9]' 
                        : 'border-[#1a1918]/15 bg-white text-[#1a1918] hover:border-[#1a1918]/40'
                    }`}
                  >
                    <span className="truncate">{s}</span>
                    {selectedService === s && <Check className="w-3.5 h-3.5 text-[#b99882]" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Preference Type */}
            <div className="space-y-4 mb-6">
              <label className="text-[12px] font-semibold tracking-[0.1em] uppercase text-[#1a1918]/80 block">
                Appointment Setting
              </label>
              <div className="grid grid-cols-2 gap-2 text-xs">
                {['In-Clinic Private Suite', 'In-Villa / Yacht Visit'].map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setConsultationType(t)}
                    className={`p-3 rounded-lg border text-left flex items-center justify-between transition-all ${
                      consultationType === t 
                        ? 'border-[#1a1918] bg-[#1a1918] text-[#fcfcf9]' 
                        : 'border-[#1a1918]/15 bg-white text-[#1a1918] hover:border-[#1a1918]/40'
                    }`}
                  >
                    <span>{t}</span>
                    {consultationType === t && <Check className="w-3.5 h-3.5 text-[#b99882]" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Name Input */}
            <div className="mb-6">
              <label className="text-[12px] font-semibold tracking-[0.1em] uppercase text-[#1a1918]/80 block mb-2">
                Your Full Name (Optional / Confidential)
              </label>
              <input 
                type="text" 
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                placeholder="e.g. H.E. / Lady / Mr. Smith" 
                className="w-full px-4 py-3 rounded-lg border border-[#1a1918]/20 bg-white text-sm focus:outline-none focus:border-[#b99882] transition-colors"
              />
            </div>

            {/* Dispatch Action */}
            <button
              onClick={handleWhatsAppDispatch}
              className="w-full py-4 rounded-full bg-[#1a1918] text-[#fcfcf9] text-xs font-semibold tracking-[0.16em] uppercase flex items-center justify-center gap-2 hover:bg-[#b99882] transition-colors shadow-lg"
            >
              <MessageCircle className="w-4 h-4 text-[#b99882]" />
              <span>Connect on WhatsApp VIP Line</span>
            </button>

            <p className="text-center text-[11px] text-[#1a1918]/50 mt-4">
              Your inquiry connects directly to our lead concierge in Jumeirah.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
