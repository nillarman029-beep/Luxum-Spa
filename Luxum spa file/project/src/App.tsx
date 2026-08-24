import { useEffect, useMemo, useRef, useState } from 'react';
import {
  ArrowRight,
  ChevronDown,
  Clock3,
  Instagram,
  MapPin,
  MessageCircle,
  BadgeCheck,
  Leaf,
  Lock,
  Phone,
  Star,
  X,
} from 'lucide-react';

const images = {
  hero: '/b133e31e-98a2-464a-af71-7b549ad2eced.png',
  interior: '/images/Image5.png',
  massage: '/images/Image3.png',
  sauna: '/images/Image2.png',
  treatment: '/images/Image1.png',
  pedicure: '/images/Image4.png',
  about: '/images/Image6.png',
};

type BlogBlock = { type: 'p' | 'h2'; text: string };
type BlogPost = { slug: string; title: string; excerpt: string; date: string; image: string; category: string; lead: string; body: BlogBlock[] };

const blogPosts: BlogPost[] = [
  {
    slug: 'the-art-of-slowing-down',
    title: 'The art of slowing down at a wellness spa in Dhaka',
    excerpt: 'Why making space for stillness is one of the most generous things you can do for yourself — and where to find it in Banani.',
    date: '12 June 2026',
    image: images.interior,
    category: 'Wellbeing',
    lead: 'There is a particular kind of relief that arrives when we stop asking the day to give us more.',
    body: [
      { type: 'p', text: 'In a city that rarely pauses, slowing down can feel like a small act of rebellion. Dhaka moves quickly — meetings, traffic, notifications — and the body quietly absorbs all of it. At Luxum Spa Banani, we think of wellbeing as less of a project and more of a practice: a treatment, a warm shower, a walk without your phone, any small ritual that brings you back into the room you are in.' },
      { type: 'h2', text: 'Finding stillness at a spa in Banani' },
      { type: 'p', text: 'Stillness is not the absence of doing. It is the presence of attention. When you step into a quiet space and let someone else hold the time for you, the nervous system begins to soften on its own. That is the idea behind every treatment at our spa in Banani — not to fill an hour with technique, but to give you back an hour that already belonged to you.' },
      { type: 'p', text: 'Guests often arrive from nearby Gulshan, Dhaka, just ten minutes away, carrying the week on their shoulders. They leave a little lighter. The distance between the two neighbourhoods is small, but the shift in feeling is considerable.' },
      { type: 'h2', text: 'A luxury spa in Dhaka that values time' },
      { type: 'p', text: 'Luxury, for us, is not about excess. It is about having time to notice — the warmth of the oil, the weight of a hand, the moment your breath slows down. A wellness spa in Dhaka should offer that kind of attention, and it is what we try to practice every day.' },
      { type: 'p', text: 'Start with one moment that belongs only to you. Keep it simple enough to repeat, and gentle enough that it never feels like another task. Over time, these pauses become a language your body understands.' },
      { type: 'p', text: 'Whenever you are ready, our doors in Banani, Dhaka are open for a little more time, warmth, and care.' },
    ],
  },
  {
    slug: 'a-quiet-guide-to-better-sleep',
    title: 'A quiet guide to better sleep with massage in Banani',
    excerpt: 'Small evening rituals that help the body leave the day behind — and how the right massage can deepen your rest.',
    date: '28 May 2026',
    image: images.sauna,
    category: 'Rituals',
    lead: 'Sleep rarely arrives on command. It comes when the body finally believes it is safe to let go.',
    body: [
      { type: 'p', text: 'Most sleep advice treats rest as a switch you can flip. In our experience, it is closer to a conversation — one the body has to trust before it agrees to settle. At Luxum Spa Banani, we have spent years watching how small evening rituals, and the right kind of touch, can change that conversation entirely.' },
      { type: 'h2', text: 'Why massage in Banani helps you sleep more deeply' },
      { type: 'p', text: 'A skilled massage does more than ease sore muscles. It lowers cortisol, slows the heart rate, and signals to the nervous system that the day is over. For guests who struggle with restless nights, a regular massage in Banani has become part of their evening rhythm — a way of telling the body, gently, that it is allowed to stop.' },
      { type: 'p', text: 'If you live or work in the neighbouring diplomatic zone, a massage in Gulshan or a short trip to a spa near Gulshan can offer the same reset. The key is consistency rather than intensity: one thoughtful hour, repeated, tends to do more than an occasional long session.' },
      { type: 'h2', text: 'Evening rituals worth keeping' },
      { type: 'p', text: 'Begin by dimming the lights an hour before bed. Warm water — a shower or a long soak — helps lower the body temperature slightly, which is part of the natural sleep signal. Keep your phone in another room if you can, and let the last thing you do be something slow: a few stretches, a cup of tea, or simply sitting quietly.' },
      { type: 'p', text: 'For many of our regulars, a weekly visit to a massage center in Banani is the anchor of this routine. The effects of a good treatment often linger for days, making the nights in between easier and the mornings gentler.' },
      { type: 'p', text: 'Sleep is not something you force. It is something you make room for — and we are happy to help you make that room.' },
    ],
  },
  {
    slug: 'meet-your-skin-in-summer',
    title: 'Meet your skin in summer at the best spa in Banani',
    excerpt: 'A softer, simpler approach to keeping skin balanced through warm Dhaka days — without overcomplicating your routine.',
    date: '04 May 2026',
    image: images.treatment,
    category: 'Skincare',
    lead: 'Summer in Dhaka asks a lot of your skin. The right care asks for very little in return.',
    body: [
      { type: 'p', text: 'When the heat settles over the city, skin tends to do one of two things: produce too much oil, or lose too much moisture. Sometimes it does both at once. The instinct is often to add more products, but at Luxum Spa Banani we have found that summer skin usually needs less interference and more consistency.' },
      { type: 'h2', text: 'Summer skincare at a spa center in Banani' },
      { type: 'p', text: 'A treatment is not a substitute for your daily routine, but it gives skin a clean baseline to work from. A gentle cleanse, light exfoliation, and the right hydration can reset a complexion that has been dulled by heat, dust, and air conditioning. At our spa center in Banani, we keep summer treatments deliberately simple — the goal is balance, not stimulation.' },
      { type: 'p', text: 'Many guests who work in the nearby diplomatic area travel from Gulshan, Dhaka for the same reason. Whether you are looking for a spa in Gulshan or prefer to visit a spa near Banani, the principle holds: in summer, the best thing you can do for your skin is to stop overworking it.' },
      { type: 'h2', text: 'What the best spa in Banani keeps simple' },
      { type: 'p', text: 'We do not believe in ten-step routines or promises that sound too good to be true. Cleanse gently, hydrate honestly, protect daily. A weekly or fortnightly professional treatment supports that routine without replacing it. That is the whole idea.' },
      { type: 'p', text: 'If your skin has been feeling tight, congested, or simply tired this season, a single thoughtful session is often enough to see the difference. Your skin will tell you what it needs — we just help you listen.' },
      { type: 'p', text: 'Whenever you are ready, our team in Banani is here to help your skin meet the season a little more gently.' },
    ],
  },
];

type Review = { quote: string; guest: string };

const reviews: Review[] = [
  { quote: 'The kind of place where you forget to check the time.', guest: 'A regular guest' },
  { quote: 'Everything felt thoughtful, from the welcome to the final cup of tea.', guest: 'Nadia R.' },
  { quote: 'The massage was exactly what my body needed after a long week.', guest: 'Maliha S.' },
  { quote: 'Quiet, warm, and beautifully unhurried. I left feeling lighter.', guest: 'Ayesha K.' },
  { quote: 'The perfect little escape in the middle of Banani.', guest: 'Farhan M.' },
  { quote: 'My skin felt refreshed and glowing for days afterwards.', guest: 'Sabrina T.' },
  { quote: 'A genuinely calming experience with the kindest team.', guest: 'Rafi N.' },
  { quote: 'The space is gorgeous, but the care is what keeps me coming back.', guest: 'Maya H.' },
  { quote: 'From start to finish, it felt personal and never rushed.', guest: 'Tania A.' },
  { quote: 'A beautiful reset. I walked out feeling completely restored.', guest: 'Imran S.' },
];

type Treatment = { name: string; durations: { minutes: number; price: string }[] };

const treatments: Treatment[] = [
  { name: 'Dry Massage', durations: [{ minutes: 60, price: '5,500' }, { minutes: 90, price: '7,500' }, { minutes: 120, price: '9,500' }] },
  { name: 'Thai Traditional Massage', durations: [{ minutes: 60, price: '5,500' }, { minutes: 90, price: '7,500' }, { minutes: 120, price: '9,500' }] },
  { name: 'Aroma Oil Massage', durations: [{ minutes: 60, price: '5,500' }, { minutes: 90, price: '7,500' }, { minutes: 120, price: '9,500' }] },
  { name: 'Oil Massage', durations: [{ minutes: 60, price: '5,500' }, { minutes: 90, price: '7,500' }, { minutes: 120, price: '9,500' }] },
  { name: 'Back & Shoulder Massage', durations: [{ minutes: 60, price: '5,000' }, { minutes: 90, price: '7,000' }, { minutes: 120, price: '8,500' }] },
  { name: 'Nuru Massage', durations: [{ minutes: 60, price: '7,000' }, { minutes: 90, price: '10,000' }, { minutes: 120, price: '15,000' }] },
  { name: 'Body to Body Massage', durations: [{ minutes: 60, price: '8,000' }, { minutes: 90, price: '11,000' }, { minutes: 120, price: '15,000' }] },
  { name: 'Foot Massage', durations: [{ minutes: 60, price: '3,000' }, { minutes: 90, price: '4,500' }, { minutes: 120, price: '6,000' }] },
  { name: 'Four Hand Massage', durations: [{ minutes: 60, price: '11,000' }, { minutes: 90, price: '15,000' }, { minutes: 120, price: '20,000' }] },
];

function navigate(path: string) {
  window.history.pushState({}, '', path);
  window.dispatchEvent(new PopStateEvent('popstate'));
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('[data-reveal]');
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('is-revealed'); obs.unobserve(e.target); } });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

function Reveal({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('is-revealed'); obs.unobserve(e.target); } });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    obs.observe(el); return () => obs.disconnect();
  }, []);
  return <div ref={ref} className={`reveal ${className}`} data-reveal>{children}</div>;
}

function Logo({ light = false }: { light?: boolean }) {
  const [failed, setFailed] = useState(false);
  return failed ? <span className={`logo-fallback ${light ? 'logo-fallback-light' : ''}`}><strong>LUXUM</strong><small>SPA · BANANI</small></span> : <img className={`logo ${light ? 'logo-light' : ''}`} src="/logo2-transparent.png" alt="Luxum Spa Banani" onError={() => setFailed(true)} />;
}

function NavLogo({ scrolled }: { scrolled: boolean }) {
  const [failed, setFailed] = useState(false);
  if (failed) return <span className={`logo-fallback ${scrolled ? '' : 'logo-fallback-light'}`}><strong>LUXUM</strong><small>SPA · BANANI</small></span>;
  return <img className="logo nav-logo" src="/logo2-transparent.png" alt="Luxum Spa Banani" onError={() => setFailed(true)} />;
}

function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  useEffect(() => { document.body.style.overflow = open ? 'hidden' : ''; return () => { document.body.style.overflow = ''; }; }, [open]);
  const links = [['Home', '/'], ['Services', '/#services'], ['Gallery', '/gallery'], ['About Us', '/about'], ['Blogs', '/blogs'], ['Contact', '/contact']];
  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''} ${open ? 'menu-open' : ''}`}>
      <div className="nav-shell">
        <a href="/" onClick={(e) => { e.preventDefault(); navigate('/'); }} aria-label="Luxum Spa home"><NavLogo scrolled={scrolled} /></a>
        <nav className={`main-nav ${open ? 'is-open' : ''}`} aria-hidden={!open}>
          <button className="menu-close" onClick={() => setOpen(false)} aria-label="Close menu"><X size={22} /></button>
          <div className="menu-logo" aria-hidden="true"><Logo light /></div>
          {links.map(([label, href], i) => <a key={label} href={href} style={{ animationDelay: open ? `${0.18 + i * 0.06}s` : '0s' }} onClick={(e) => { e.preventDefault(); setOpen(false); if (href.includes('#')) { navigate('/'); setTimeout(() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' }), 100); } else navigate(href); }}>{label}</a>)}
          <button className="nav-appointment mobile-appointment" style={{ animationDelay: open ? '0.62s' : '0s' }} onClick={() => { setOpen(false); navigate('/contact'); }}>Book Now <ArrowRight size={15} /></button>
        </nav>
        <button className="nav-appointment desktop-appointment" onClick={() => navigate('/contact')}>Book Now <ArrowRight size={15} /></button>
        <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open}><span className={`menu-icon ${open ? 'is-open' : ''}`} /></button>
      </div>
    </header>
  );
}

function Fireflies() {
  const flies = useMemo(() => Array.from({ length: 30 }, (_, i) => {
    const r = (min: number, max: number) => min + Math.random() * (max - min);
    return {
      id: i,
      left: r(2, 98),
      top: r(5, 92),
      size: r(2, 5),
      dx: r(-40, 40),
      dy: r(-70, 30),
      dx2: r(-30, 30),
      dy2: r(-50, 20),
      duration: r(9, 20),
      delay: -r(0, 20),
      brightness: r(0.5, 1),
      glow: r(8, 18),
    };
  }), []);
  return (
    <div className="fireflies" aria-hidden="true">
      {flies.map((f) => (
        <span
          key={f.id}
          className="firefly"
          style={{
            left: `${f.left}%`,
            top: `${f.top}%`,
            width: `${f.size}px`,
            height: `${f.size}px`,
            animationDuration: `${f.duration}s`,
            animationDelay: `${f.delay}s`,
            ['--dx' as string]: `${f.dx}px`,
            ['--dy' as string]: `${f.dy}px`,
            ['--dx2' as string]: `${f.dx2}px`,
            ['--dy2' as string]: `${f.dy2}px`,
            ['--brightness' as string]: f.brightness,
            ['--glow' as string]: `${f.glow}px`,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
}

function Footer() {
  const links = [['Home', '/'], ['Services', '/#services'], ['Gallery', '/gallery'], ['About Us', '/about'], ['Blogs', '/blogs'], ['Contact', '/contact']];
  const go = (href: string) => (e: React.MouseEvent) => { e.preventDefault(); if (href.includes('#')) { navigate('/'); setTimeout(() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' }), 40); } else navigate(href); };
  return (
    <footer className="site-footer">
      <Fireflies />
      <div className="footer-inner">
        <div className="footer-logo-wrap"><Logo light /></div>
        <p className="footer-tagline">Thoughtful rituals for a quieter, more beautiful day.</p>
        <div className="socials">
          <a href="https://www.instagram.com" aria-label="Instagram"><Instagram size={16} /></a>
          <a href="https://wa.me/8801342440468" aria-label="WhatsApp"><MessageCircle size={16} /></a>
        </div>
        <nav className="footer-nav">
          {links.map(([label, href]) => (
            <a key={label} href={href} onClick={go(href)}>{label}</a>
          ))}
        </nav>
        <div className="footer-contact-center">
          <p>House 5, Road 17, Block C, Banani, Dhaka</p>
          <a href="tel:01342440468"><Phone size={13} /> 01342440468</a>
          <p className="footer-hours"><Clock3 size={13} /> Open daily · 10am–10pm</p>
        </div>
        <div className="footer-divider" />
        <div className="footer-bottom">
          <span>© 2026 Luxum Spa. All Rights Reserved.</span>
          <span>Privacy Policy · Terms &amp; Conditions</span>
        </div>
      </div>
    </footer>
  );
}

function Button({ children, dark = false, onClick }: { children: React.ReactNode; dark?: boolean; onClick?: () => void }) { return <button className={`button ${dark ? 'button-dark' : ''}`} onClick={onClick}>{children}<ArrowRight size={16} /></button>; }
function Eyebrow({ children }: { children: React.ReactNode }) { return <p className="eyebrow"><span />{children}</p>; }

function Hero() {
  return <section className="hero"><div className="hero-image" style={{ backgroundImage: `url(${images.hero})` }} /><div className="hero-overlay" /><div className="hero-content"><Eyebrow>Luxum Spa · Banani</Eyebrow><h1>A softer way<br /><em>to feel.</em></h1><p>Modern rituals, warm hands, and a little more time for yourself.</p><div className="hero-actions"><button className="hero-cta-primary" onClick={() => navigate('/contact')}>Book Now <ArrowRight size={15} /></button><button className="hero-cta-secondary" onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}>Explore Services <ChevronDown size={15} /></button></div></div></section>;
}

function TreatmentCard({ treatment }: { treatment: Treatment }) {
  const [selectedMinutes, setSelectedMinutes] = useState<number | null>(null);
  const selected = treatment.durations.find((d) => d.minutes === selectedMinutes) ?? null;
  const waText = selected ? `Hello Luxum Spa, I would like to book: ${treatment.name} — ${selected.minutes} Minutes — ${selected.price} TK` : '';
  const waHref = `https://wa.me/8801342440468?text=${encodeURIComponent(waText)}`;

  return (
    <article className="treatment-card">
      <h3 className="treatment-name">{treatment.name}</h3>
      <div className="treatment-prices">
        {treatment.durations.map((d) => (
          <button
            className={`treatment-price-option ${selectedMinutes === d.minutes ? 'is-selected' : ''}`}
            key={d.minutes}
            type="button"
            aria-pressed={selectedMinutes === d.minutes}
            onClick={() => setSelectedMinutes(d.minutes)}
          >
            <span className="treatment-duration">{d.minutes} Minutes</span>
            <span className="treatment-price">{d.price} <small>TK</small></span>
          </button>
        ))}
      </div>
      {selected && (
        <a className="treatment-book" href={waHref} target="_blank" rel="noopener noreferrer">
          <MessageCircle size={15} /> Book via WhatsApp
        </a>
      )}
    </article>
  );
}

function LuxumSpecialCard() {
  return (
    <article className="treatment-card luxum-special-card">
      <span className="luxum-special-eyebrow">Signature</span>
      <h3 className="treatment-name">Luxum Special</h3>
      <p className="luxum-special-text">A bespoke ritual, crafted entirely around you.</p>
      <a className="luxum-special-cta" href="https://wa.me/8801342440468" target="_blank" rel="noopener noreferrer"><MessageCircle size={16} /> Contact WhatsApp to Book</a>
    </article>
  );
}

function ServicesSection() {
  return (
    <section className="section services-section" id="services">
      <div className="section-head"><div><Eyebrow>Our rituals</Eyebrow><h2>Care, considered.</h2></div><p>Every treatment is designed to leave you feeling lighter — in body, skin, and mind.</p></div>
      <div className="treatments-grid">
        {treatments.map((t) => <TreatmentCard key={t.name} treatment={t} />)}
        <LuxumSpecialCard />
      </div>
    </section>
  );
}

function ReviewSection() {
  const [reviewIndex, setReviewIndex] = useState(0);
  const review = reviews[reviewIndex];

  useEffect(() => {
    const timer = window.setInterval(() => setReviewIndex((current) => (current + 1) % reviews.length), 5000);
    return () => window.clearInterval(timer);
  }, []);

  return <section className="quote-section" aria-live="polite"><div className="quote-review" key={reviewIndex}><div className="quote-stars" aria-label="5 out of 5 stars"><Star fill="currentColor" size={13} /><Star fill="currentColor" size={13} /><Star fill="currentColor" size={13} /><Star fill="currentColor" size={13} /><Star fill="currentColor" size={13} /></div><blockquote>“{review.quote}”</blockquote><p>— {review.guest}</p></div></section>;
}

const marqueeItems = ['DRY MASSAGE', 'THAI TRADITIONAL MASSAGE', 'AROMA OIL MASSAGE', 'OIL MASSAGE', 'BACK & SHOULDER MASSAGE', 'LUXUM SPA BANANI', 'RELAX • REST • RECHARGE'];

function Marquee() {
  const group = (
    <div className="marquee-group" aria-hidden="true">
      {marqueeItems.map((item, i) => (
        <span key={i} className="marquee-item">{item}<span className="marquee-sep">✦</span></span>
      ))}
    </div>
  );
  return (
    <section className="marquee" aria-label="Luxum Spa treatments">
      <div className="marquee-track">
        {group}
        {group}
      </div>
    </section>
  );
}

function StatItem({ target, suffix, label, start, delay }: { target: number; suffix: string; label: string; start: boolean; delay: number }) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!start) return;
    let raf: number;
    const duration = 1800;
    const t0 = performance.now() + delay;
    const tick = (now: number) => {
      const elapsed = now - t0;
      if (elapsed < 0) { raf = requestAnimationFrame(tick); return; }
      const p = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, target, delay]);
  return <div><strong>{value}{suffix}</strong><span>{label}</span></div>;
}

function WhyChooseUs() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { setVisible(true); obs.unobserve(e.target); } });
    }, { threshold: 0.2 });
    obs.observe(el); return () => obs.disconnect();
  }, []);
  return (
    <section className="intro section">
      <div className="intro-heading">
        <Eyebrow>Why choose us</Eyebrow>
        <h2>A softer way<br /><em>to feel.</em></h2>
      </div>
      <p className="intro-copy">Thoughtful care, experienced staff, and a calm space designed to help you slow down, relax and feel refreshed.</p>
      <div ref={ref} className={`intro-features ${visible ? 'is-visible' : ''}`}>
        <div className="intro-stats">
          <StatItem target={5} suffix="K+" label="Happy clients" start={visible} delay={0} />
          <StatItem target={20} suffix="+" label="Experienced staff" start={visible} delay={150} />
          <StatItem target={10} suffix="+" label="Years of experience" start={visible} delay={300} />
        </div>
        <div className="intro-features-row">
          <div className="feature-item" style={{ transitionDelay: '0.5s' }}>
            <span className="feature-icon"><Lock size={18} strokeWidth={1.3} /></span>
            <strong>Privacy</strong>
            <span className="feature-desc">Private &amp; peaceful</span>
          </div>
          <div className="feature-item" style={{ transitionDelay: '0.65s' }}>
            <span className="feature-icon"><Leaf size={18} strokeWidth={1.3} /></span>
            <strong>Natural products</strong>
            <span className="feature-desc">Premium natural products</span>
          </div>
          <div className="feature-item" style={{ transitionDelay: '0.8s' }}>
            <span className="feature-icon"><BadgeCheck size={18} strokeWidth={1.3} /></span>
            <strong>Trained therapists</strong>
            <span className="feature-desc">Professionally trained therapists</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Home() { useScrollReveal(); return <><Header /><main><Hero /><Marquee /><WhyChooseUs /><Reveal><ServicesSection /></Reveal><Reveal><section className="story-band"><div className="story-image"><img src={images.interior} alt="A calm, sunlit Luxum Spa interior" /></div><div className="story-copy"><Eyebrow>The Luxum feeling</Eyebrow><h2>Luxury is having<br /><em>time to notice.</em></h2><p>From the first breath to the final cup of tea, each detail is made to help you settle. No rush, no noise — just considered care in a space that feels like yours.</p><Button dark onClick={() => navigate('/about')}>About Luxum</Button></div></section></Reveal><Reveal><ReviewSection /></Reveal><Reveal><section className="home-cta"><div><Eyebrow>Make room for yourself</Eyebrow><h2>Your next hour<br /><em>could feel different.</em></h2></div><Button onClick={() => navigate('/contact')}>Book Now</Button></section></Reveal></main><Footer /></>; }

function PageHero({ eyebrow, title, text }: { eyebrow: string; title: React.ReactNode; text?: string }) { return <section className="page-hero"><div><Eyebrow>{eyebrow}</Eyebrow><h1>{title}</h1>{text && <p>{text}</p>}</div></section>; }

function GalleryPage() { const gallery = ['/images/Image1.png', '/images/Image2.png', '/images/Image3.png', '/images/Image4.png', '/images/Image5.png', '/images/Image6.png']; return <><Header /><main><PageHero eyebrow="A glimpse inside" title={<>A space to <em>exhale.</em></>} text="Sunlight, warm wood, clean lines, and the quiet luxury of being looked after." /><section className="gallery-section section"><div className="gallery-grid">{gallery.map((image, i) => <div className={`gallery-item gallery-${i + 1}`} key={image}><img src={image} alt="Luxum Spa interior and treatment detail" /></div>)}</div></section></main><Footer /></>; }

function AboutPage() { return <><Header /><main><PageHero eyebrow="Our philosophy" title={<>The beauty of<br /><em>being present.</em></>} text="Luxum Spa Banani is a considered space for modern wellbeing." /><section className="about-feature section"><div className="about-photo">{images.about && <img src={images.about} alt="Luxum Spa reception" />}</div><div className="about-copy"><Eyebrow>Since 2021 · Banani</Eyebrow><h2>We believe care<br />should feel <em>personal.</em></h2><p>Not rushed. Not one-size-fits-all. Our therapists take the time to understand what you need, then create a treatment around it.</p><p>Luxum brings together trusted techniques, beautiful ingredients, and a gentler pace — so a visit feels less like an appointment and more like a return to yourself.</p><div className="about-points"><span><strong>01</strong> Thoughtful rituals</span><span><strong>02</strong> Skilled therapists</span><span><strong>03</strong> A calm, private space</span></div></div></section><section className="values-section"><div><Eyebrow>The Luxum standard</Eyebrow><h2>Nothing extra.<br /><em>Everything considered.</em></h2></div><div className="values-list"><p>01 <span>Warm welcome, always.</span></p><p>02 <span>Beautiful, honest products.</span></p><p>03 <span>Care that meets you where you are.</span></p></div></section></main><Footer /></>; }

function BlogsPage() { return <><Header /><main><PageHero eyebrow="The journal" title={<>Notes on <em>feeling well.</em></>} text="Small thoughts, rituals, and reminders from the Luxum team." /><section className="blog-section section"><article className="featured-post" onClick={() => navigate(`/blogs/${blogPosts[0].slug}`)}><div className="featured-image"><img src={blogPosts[0].image} alt={blogPosts[0].title} /></div><div className="featured-copy"><Eyebrow>{blogPosts[0].category} · {blogPosts[0].date}</Eyebrow><h2>{blogPosts[0].title}</h2><p>{blogPosts[0].excerpt}</p><button className="text-button">Read the story <ArrowRight size={16} /></button></div></article><div className="blog-grid">{blogPosts.slice(1).map((post) => <article className="blog-card" key={post.slug} onClick={() => navigate(`/blogs/${post.slug}`)}><div className="blog-image"><img src={post.image} alt={post.title} /></div><div className="blog-card-copy"><Eyebrow>{post.category} · {post.date}</Eyebrow><h3>{post.title}</h3><p>{post.excerpt}</p><span>Read more <ArrowRight size={14} /></span></div></article>)}</div></section></main><Footer /></>; }

function ArticlePage({ slug }: { slug: string }) { const post = blogPosts.find((item) => item.slug === slug) ?? blogPosts[0]; return <><Header /><main><section className="article-hero"><Eyebrow>{post.category} · {post.date}</Eyebrow><h1>{post.title}</h1><p>{post.excerpt}</p><img src={post.image} alt={post.title} /></section><article className="article-body"><p className="lead">{post.lead}</p>{post.body.map((block, i) => block.type === 'h2' ? <h2 key={i}>{block.text}</h2> : <p key={i}>{block.text}</p>)}<div className="article-signoff">With warmth,<br /><em>The Luxum team</em></div></article><section className="article-back"><button className="text-button" onClick={() => navigate('/blogs')}><ArrowRight size={16} className="rotate-180" /> Back to the journal</button></section></main><Footer /></>; }

function ContactPage() {
  const mapsUrl = 'https://www.google.com/maps/place/Luxum+Spa+Banani/@23.7934734,90.4020837,21z/data=!4m10!1m2!2m1!1sLuxum+Spa+Banani!3m6!1s0x3755c76c603c99cb:0x6d903c481a83d6b6!8m2!3d23.7933642!4d90.4022639!15sChBMdXh1bSBTcGEgQmFuYW5pWhIiEGx1eHVtIHNwYSBiYW5hbmmSAQNzcGHgAQA!16s%2Fg%2F11zdq7zqxc';
  return <><Header /><main><PageHero eyebrow="Come see us" title={<>Your time starts <em>here.</em></>} text="We are ready when you are. Reach out to reserve a little time for yourself." /><section className="contact-section section"><div className="contact-info"><Eyebrow>Luxum Spa Banani</Eyebrow><h2>A quiet corner<br /><em>in the city.</em></h2><div className="contact-details"><div><MapPin size={18} /><p><strong>Visit</strong><a href={mapsUrl} target="_blank" rel="noopener noreferrer">House 5, Road 17, Block C<br />Banani, Dhaka</a></p></div><div><Phone size={18} /><p><strong>Call</strong><a href="tel:01342440468">01342440468</a></p></div><div><MessageCircle size={18} /><p><strong>WhatsApp</strong><a href="https://wa.me/8801342440468" target="_blank" rel="noopener noreferrer">01342440468</a></p></div><div><Clock3 size={18} /><p><strong>Opening hours</strong>Every day · 10am–10pm</p></div></div></div><div className="contact-card"><div className="contact-card-bottom"><p>Ready for your pause?</p><Button onClick={() => window.open('https://wa.me/8801342440468', '_blank')}>Book via WhatsApp</Button></div></div></section><section className="contact-map-section"><div className="contact-map-wrap"><iframe src="https://maps.google.com/maps?q=23.7933642,90.4022639&z=16&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Luxum Spa Banani location map" /><a className="contact-map-link" href={mapsUrl} target="_blank" rel="noopener noreferrer"><MapPin size={16} /> Open in Google Maps</a></div></section></main><Footer /></>; }

function FloatingContact() {
  const [show, setShow] = useState<'whatsapp' | 'call'>('whatsapp');
  const [phase, setPhase] = useState<'idle' | 'exit' | 'enter'>('idle');
  const [ripple, setRipple] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const header = document.querySelector('.site-header');
    if (!header) return;
    const obs = new MutationObserver(() => {
      setMenuOpen(header.classList.contains('menu-open'));
    });
    obs.observe(header, { attributes: true, attributeFilter: ['class'] });
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (expanded) return;
    let mounted = true;
    const timers: number[] = [];
    const cycle = () => {
      if (!mounted) return;
      setPhase('enter');
      setRipple((r) => r + 1);
      timers.push(window.setTimeout(() => setPhase('idle'), 900));
      timers.push(window.setTimeout(() => setPhase('exit'), 2400));
      timers.push(window.setTimeout(() => {
        setShow((s) => (s === 'whatsapp' ? 'call' : 'whatsapp'));
        cycle();
      }, 3000));
    };
    cycle();
    return () => { mounted = false; timers.forEach((t) => clearTimeout(t)); };
  }, [expanded]);

  useEffect(() => {
    if (!expanded) return;
    const handler = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) setExpanded(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [expanded]);

  return (
    <div className={`fc-wrap ${menuOpen ? 'fc-hidden' : ''}`} ref={wrapRef}>
      <div className={`fc-options ${expanded ? 'is-open' : ''}`}>
        <button
          className="fc-option fc-option-wa"
          aria-label="Chat on WhatsApp"
          onClick={() => window.open('https://wa.me/8801342440468', '_blank')}
        >
          <MessageCircle size={22} />
        </button>
        <button
          className="fc-option fc-option-call"
          aria-label="Call Luxum Spa"
          onClick={() => (window.location.href = 'tel:01342440468')}
        >
          <Phone size={22} />
        </button>
      </div>
      <button
        className="fc-main"
        aria-label="Contact options"
        onClick={() => setExpanded((v) => !v)}
      >
        <span className="fc-ripple" key={ripple} />
        <span className={`fc-icon ${phase === 'exit' ? 'fc-icon-exit' : ''} ${phase === 'enter' ? 'fc-icon-enter' : ''}`}>
          {show === 'whatsapp' ? <MessageCircle size={26} /> : <Phone size={26} />}
        </span>
      </button>
    </div>
  );
}

function AppShell() {
  const [path, setPath] = useState(window.location.pathname);
  useEffect(() => {
    const handle = () => setPath(window.location.pathname);
    window.addEventListener('popstate', handle);
    return () => window.removeEventListener('popstate', handle);
  }, []);
  let page: React.ReactNode;
  if (path.startsWith('/blogs/')) page = <ArticlePage slug={path.split('/')[2]} />;
  else if (path === '/gallery') page = <GalleryPage />;
  else if (path === '/about') page = <AboutPage />;
  else if (path === '/blogs') page = <BlogsPage />;
  else if (path === '/contact') page = <ContactPage />;
  else page = <Home />;
  return <>{page}<FloatingContact key={path} /></>;
}

export default AppShell;
