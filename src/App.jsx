
import { useState } from 'react';

const HERO_SRC = 'https://images.unsplash.com/photo-1567789884554-0b844b597180?auto=format&fit=crop&w=1800&q=80';

const lowerFeatures = [
  { icon: 'gear', title: 'Engineering Excellence', text: 'Advanced design and engineering expertise.' },
  { icon: 'robot', title: 'Custom Integration', text: 'Seamless integration with your existing systems.' },
  { icon: 'check', title: 'Proven Results', text: 'Delivering measurable ROI and operational improvement.' },
  { icon: 'users', title: 'Client Focused', text: 'We are committed to your long-term success.' },
];

const COLORS = {
  navy: '#030b18',
  deep: '#020814',
  soft: '#081224',
  yellow: '#facc15',
  blue: '#60a5fa',
  text: '#081224',
  muted: '#64748b',
  page: '#f3f4f6',
  white: '#ffffff',
};

const pages = [
  ['home', 'Home'],
  ['solutions', 'Solutions'],
  ['services', 'Services'],
  ['industries', 'Industries'],
  ['about', 'About'],
  ['caseStudies', 'Case Studies'],
];

const featureCards = [
  ['target', 'Custom Solutions', 'Built for your unique manufacturing needs.'],
  ['trend', 'Increase Efficiency', 'Streamline operations and maximize output.'],
  ['shield', 'Reliable Performance', 'Engineered for reliability and long-term success.'],
  ['support', 'Worldwide Support', 'Supporting clients across Texas and beyond.'],
];

const solutionCards = [
  ['wrench', 'Custom Automation Cells', 'Purpose-built systems designed around your workflow, throughput targets, and production environment.'],
  ['robot', 'Robotic Integration', 'Industrial robot cells for handling, tending, assembly, inspection, and end-of-line operations.'],
  ['factory', 'Production Line Upgrades', 'Modernization services that improve reliability, safety, and long-term maintainability.'],
  ['check', 'Controls & Validation', 'Controls programming, testing, and commissioning to ensure your system performs in the real world.'],
];

const industries = ['Automotive', 'Industrial Manufacturing', 'Food & Beverage', 'Building Products', 'Energy Equipment', 'General Industrial Automation'];

const services = [
  'System design and engineering',
  'PLC and HMI programming',
  'Robotics integration and commissioning',
  'Safety upgrades and process improvements',
  'Retrofits and troubleshooting support',
  'Startup and ongoing technical support',
];

const caseStudies = [
  ['Robot Cell Throughput Upgrade', 'Improved line throughput and reduced operator intervention by redesigning the robotic work envelope and controls flow.'],
  ['Assembly Process Integration', 'Delivered a custom integrated station that improved consistency, traceability, and production visibility.'],
  ['Legacy Equipment Modernization', 'Retrofitted outdated equipment with updated controls and safety systems for better uptime and maintainability.'],
];

function Icon({ name, size = 40, color = 'currentColor', strokeWidth = 2.2 }) {
  const common = { fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round' };
  const paths = {
    target: <><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1.5" /></>,
    trend: <><path d="M3 17l6-6 4 4 8-8" /><path d="M14 7h7v7" /></>,
    shield: <><path d="M12 3l8 4v5c0 5-3.3 8.4-8 9-4.7-.6-8-4-8-9V7l8-4z" /><path d="M8.5 12.5l2.5 2.5 5-5" /></>,
    support: <><path d="M4 13v-1a8 8 0 0 1 16 0v1" /><path d="M4 13h3v5H4z" /><path d="M17 13h3v5h-3z" /><path d="M17 18c0 2-2 3-5 3" /></>,
    wrench: <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.6 2.6-2-2 2.6-2.6z" />,
    robot: <><rect x="6" y="8" width="12" height="10" rx="2" /><path d="M12 8V4" /><circle cx="9.5" cy="13" r="1" /><circle cx="14.5" cy="13" r="1" /></>,
    factory: <><path d="M3 21h18" /><path d="M5 21V9l5 3V9l5 3V7h4v14" /><path d="M8 17h2M13 17h2M18 17h1" /></>,
    check: <><rect x="5" y="4" width="14" height="17" rx="2" /><path d="M9 12l2 2 4-5" /></>,
    building: <><rect x="5" y="4" width="14" height="17" rx="1" /><path d="M9 8h1M14 8h1M9 12h1M14 12h1M9 16h1M14 16h1" /></>,
    badge: <><path d="M12 3l2.5 2 3.2-.3.7 3.1 2.6 1.9-1.3 3 1.3 3-2.6 1.9-.7 3.1-3.2-.3-2.5 2-2.5-2-3.2.3-.7-3.1L3 15.7l1.3-3L3 9.7l2.6-1.9.7-3.1 3.2.3L12 3z" /><path d="M8.5 12.5l2.3 2.3 4.7-5" /></>,
    gear: <><circle cx="12" cy="12" r="3" /><path d="M19 12h2M3 12h2M12 3v2M12 19v2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M18.4 5.6L17 7M7 17l-1.4 1.4" /></>,
    globe: <><circle cx="12" cy="12" r="9" /><path d="M3 12h18" /><path d="M12 3c2.5 2.6 3.7 5.6 3.7 9S14.5 18.4 12 21" /><path d="M12 3c-2.5 2.6-3.7 5.6-3.7 9S9.5 18.4 12 21" /></>,
    cpu: <><rect x="7" y="7" width="10" height="10" rx="2" /><path d="M9 1v4M15 1v4M9 19v4M15 19v4M1 9h4M1 15h4M19 9h4M19 15h4" /></>,
    menu: <><path d="M4 7h16" /><path d="M4 12h16" /><path d="M4 17h16" /></>,
    close: <><path d="M6 6l12 12" /><path d="M18 6L6 18" /></>,
    arrow: <><path d="M5 12h14" /><path d="M13 5l7 7-7 7" /></>,
  };
  return <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" {...common}>{paths[name] || paths.gear}</svg>;
}

export default function App() {
  const [page, setPage] = useState('home');
  const [mobileOpen, setMobileOpen] = useState(false);

  const navTo = (next) => {
    setPage(next);
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div style={{ minHeight: '100vh', background: COLORS.page, color: COLORS.text, fontFamily: 'Arial, Helvetica, sans-serif' }}>
      <style>{css}</style>
      <header className="header">
        <button className="brand" onClick={() => navTo('home')}>
          <span>RCB AUTOMATION</span>
          <small>Automated Solutions</small>
        </button>

        <nav className="desktopNav">
          {pages.map(([key, label]) => (
            <button key={key} onClick={() => navTo(key)} className={page === key ? 'active' : ''}>{label}</button>
          ))}
        </nav>

        <div className="headerActions">
          <button className="yellowBtn" onClick={() => navTo('contact')}>Contact Us</button>
          <button className="hamburger" onClick={() => setMobileOpen(!mobileOpen)}>
            <Icon name={mobileOpen ? 'close' : 'menu'} size={22} color="#fff" />
          </button>
        </div>
      </header>

      {mobileOpen && (
        <div className="mobileNav">
          {pages.map(([key, label]) => <button key={key} onClick={() => navTo(key)}>{label}</button>)}
          <button onClick={() => navTo('contact')}>Contact Us</button>
        </div>
      )}

      {page === 'home' ? <Home navTo={navTo} /> : <Page page={page} navTo={navTo} />}
    </div>
  );
}

function Home({ navTo }) {
  return (
    <>
      <section className="hero">
        <img src={HERO_SRC} alt="Industrial robotic arms" />
        <div className="heroOverlay" />
        <div className="heroContent">
          <div className="pill">Premium Industrial Automation</div>
          <h1>Automation<br />That Drives<br /><span>Performance</span></h1>
          <p>RCB Automation designs and integrates high-performance automation systems that improve throughput, productivity, and long-term manufacturing reliability.</p>
          <div className="heroBtns">
            <button className="primary" onClick={() => navTo('contact')}>Request a Quote <Icon name="arrow" size={20} color="#111827" /></button>
            <button className="secondary" onClick={() => navTo('solutions')}>Explore Solutions</button>
          </div>
          <div className="stats">
            {['Turn-Key', 'Industrial', 'Worldwide'].map((v, i) => <div key={v}><strong>{v}</strong><small>{['Delivery Model','Production Focus','Support Reach'][i]}</small></div>)}
          </div>
        </div>
      </section>

      <section className="darkGrid">
        {featureCards.map(([icon, title, text]) => <DarkFeature key={title} icon={icon} title={title} text={text} />)}
      </section>

      <section className="proof">
        {[
          ['badge', 'Automation You Can Trust', 'Engineered for reliability, maintainability, and long-term plant performance.'],
          ['globe', 'Texas Based, Worldwide Support', 'Responsive support for industrial clients, upgrades, and ongoing production needs.'],
          ['cpu', 'Controls + Robotics Expertise', 'Technical positioning for PLCs, robotic systems, retrofits, and line integration.'],
        ].map(([icon, title, text]) => <ProofCard key={title} icon={icon} title={title} text={text} />)}
      </section>

      <section className="welcome">
        <div className="eyebrow">Welcome to RCB Automation</div>
        <h2>Your Partner in Automation Success</h2>
        <p>From concept to implementation and beyond, we provide end-to-end automation solutions that help manufacturers stay competitive in today’s demanding market.</p>
        <div className="lightGrid">
          {lowerFeatures.map(({ icon, title, text }) => <LightFeature key={title} icon={icon} title={title} text={text} />)}
        </div>
      </section>

      <section className="ctaBand">
        <div>
          <div className="eyebrow yellow">Ready to Build</div>
          <h2>Let’s talk about your next automation project</h2>
          <p>Talk with RCB Automation about robotic integration, PLC upgrades, controls troubleshooting, retrofits, or full turn-key systems.</p>
        </div>
        <button className="yellowBtn big" onClick={() => navTo('contact')}>Contact Us</button>
      </section>
    </>
  );
}

function Page({ page, navTo }) {
  if (page === 'solutions') return <CardsPage title="Solutions" intro="Explore custom automation systems, robotic integration, controls, and production-ready solutions built for modern manufacturing." cards={solutionCards} />;
  if (page === 'services') return <ServicesPage />;
  if (page === 'industries') return <IndustriesPage />;
  if (page === 'about') return <AboutPage />;
  if (page === 'caseStudies') return <CaseStudiesPage />;
  return <ContactPage />;
}

function PageHero({ title, intro }) {
  return (
    <section className="pageHero">
      <div className="eyebrow yellow">RCB Automation</div>
      <h1>{title}</h1>
      <p>{intro}</p>
    </section>
  );
}

function CardsPage({ title, intro, cards }) {
  return (
    <>
      <PageHero title={title} intro={intro} />
      <section className="cardsGrid">
        {cards.map(([icon, title, text]) => <InfoCard key={title} icon={icon} title={title} text={text} />)}
      </section>
    </>
  );
}

function ServicesPage() {
  return (
    <>
      <PageHero title="Services" intro="From design and programming to commissioning and support, RCB Automation delivers services that move projects from concept to production." />
      <section className="panel">
        <div>
          <div className="eyebrow">Services</div>
          <h2>Built for real industrial projects</h2>
          <p>Our service model covers the engineering, controls, robotics, integration, and support required to bring complex automation systems online successfully.</p>
        </div>
        <div className="chips">{services.map((s) => <div key={s}>{s}</div>)}</div>
      </section>
    </>
  );
}

function IndustriesPage() {
  return (
    <>
      <PageHero title="Industries" intro="We support a wide range of industrial sectors with practical automation solutions tailored to workflow, reliability, and output goals." />
      <section className="industryGrid">
        {industries.map((item) => (
          <article className="card industryCard" key={item}>
            <div className="industryIcon"><Icon name="building" size={34} color="#2563eb" /></div>
            <h3>{item}</h3>
            <p>Automation strategies tailored for performance, reliability, operator usability, and measurable production improvement.</p>
          </article>
        ))}
      </section>
    </>
  );
}

function AboutPage() {
  return (
    <>
      <PageHero title="About" intro="RCB Automation focuses on engineering-driven automation projects that improve performance, reliability, and long-term client success." />
      <section className="panel single">
        <div className="eyebrow">About RCB Automation</div>
        <h2>Engineering-first automation partnership</h2>
        <p>RCB Automation helps manufacturers improve efficiency, controls visibility, safety, and long-term performance through custom industrial automation solutions. Our work is centered on dependable delivery, clear communication, and results that support growth.</p>
        <p>We partner with clients from concept through commissioning and continue supporting them as systems evolve, expand, and scale.</p>
      </section>
    </>
  );
}

function CaseStudiesPage() {
  return (
    <>
      <PageHero title="Case Studies" intro="See examples of how our automation work improves throughput, consistency, controls visibility, and operational results." />
      <section className="cardsGrid">
        {caseStudies.map(([title, text]) => <article className="card" key={title}><div className="eyebrow">Project Highlight</div><h3>{title}</h3><p>{text}</p></article>)}
      </section>
    </>
  );
}

function ContactPage() {
  const [form, setForm] = useState({ name: '', company: '', email: '', phone: '', projectType: '', message: '' });
  const update = (k, v) => setForm((p) => ({ ...p, [k]: v }));
  const submit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`RCB Automation Inquiry${form.projectType ? ` - ${form.projectType}` : ''}`);
    const body = encodeURIComponent(`Name: ${form.name}\nCompany: ${form.company}\nEmail: ${form.email}\nPhone: ${form.phone}\nProject Type: ${form.projectType}\n\nProject Details:\n${form.message}`);
    window.location.href = `mailto:rbath@rcbautomation.com?subject=${subject}&body=${body}`;
  };

  return (
    <>
      <PageHero title="Contact Us" intro="Tell us about your automation project, retrofit, controls issue, or robotic integration needs." />
      <section className="contactWrap">
        <div>
          <div className="pill">Contact Us</div>
          <h2>Let’s plan your next automation project</h2>
          <p>Tell us about your process, production goals, and constraints.</p>
          {['+1 281 627 9833', 'rbath@rcbautomation.com', '565 S Mason Rd Ste 372, Katy, TX 77450', 'Worldwide support'].map((x) => <div className="contactItem" key={x}>• <span>{x}</span></div>)}
        </div>
        <form onSubmit={submit}>
          <input placeholder="Name" value={form.name} onChange={(e) => update('name', e.target.value)} />
          <input placeholder="Company" value={form.company} onChange={(e) => update('company', e.target.value)} />
          <div className="two">
            <input placeholder="Email" value={form.email} onChange={(e) => update('email', e.target.value)} />
            <input placeholder="Phone" value={form.phone} onChange={(e) => update('phone', e.target.value)} />
          </div>
          <input placeholder="Project Type" value={form.projectType} onChange={(e) => update('projectType', e.target.value)} />
          <textarea placeholder="Tell us about your automation goals" value={form.message} onChange={(e) => update('message', e.target.value)} />
          <button>Send Inquiry</button>
        </form>
      </section>
    </>
  );
}

function DarkFeature({ icon, title, text }) {
  return <article><Icon name={icon} color={COLORS.yellow} size={42} /><div><h3>{title}</h3><p>{text}</p></div></article>;
}

function LightFeature({ icon, title, text }) {
  return <article><Icon name={icon} color="#2563eb" size={54} /><div><h3>{title}</h3><p>{text}</p></div></article>;
}

function ProofCard({ icon, title, text }) {
  return <article><span><Icon name={icon} color={COLORS.yellow} size={36} /></span><h3>{title}</h3><p>{text}</p></article>;
}

function InfoCard({ icon, title, text }) {
  return <article className="card"><div className="iconBox"><Icon name={icon} color="#2563eb" size={40} /></div><h3>{title}</h3><p>{text}</p></article>;
}

const css = `
* { box-sizing: border-box; }
html, body, #root { margin: 0; min-height: 100%; }
body { margin: 0; background: ${COLORS.page}; }
button, input, textarea { font: inherit; }
button { cursor: pointer; }
a { text-decoration: none; }

.header {
  position: sticky; top: 0; z-index: 50;
  display: flex; align-items: center; justify-content: space-between; gap: 20px;
  padding: 16px 28px; background: ${COLORS.navy}; color: #fff;
  border-bottom: 1px solid rgba(255,255,255,.1);
}
.brand { background: transparent; border: 0; color: #fff; text-align: left; }
.brand span { display: block; font-size: clamp(30px, 4vw, 56px); font-weight: 300; letter-spacing: -.03em; }
.brand small { display: block; color: ${COLORS.blue}; text-transform: uppercase; letter-spacing: .22em; font-weight: 700; margin-top: 6px; }
.desktopNav { display: flex; gap: 26px; flex-wrap: wrap; align-items: center; }
.desktopNav button { background: transparent; border: 0; color: #fff; padding: 0 0 8px; font-size: 15px; font-weight: 800; letter-spacing: .04em; text-transform: uppercase; border-bottom: 4px solid transparent; }
.desktopNav button.active { color: #fde68a; border-bottom-color: ${COLORS.yellow}; }
.headerActions { display: flex; align-items: center; gap: 12px; }
.yellowBtn { background: ${COLORS.yellow}; color: #111827; border: 0; border-radius: 18px; padding: 16px 28px; font-weight: 900; text-transform: uppercase; letter-spacing: .04em; box-shadow: 0 12px 30px rgba(0,0,0,.15); }
.yellowBtn.big { font-size: 18px; padding: 18px 32px; }
.hamburger { display: none; background: transparent; border: 1px solid rgba(255,255,255,.12); width: 48px; height: 48px; border-radius: 14px; align-items: center; justify-content: center; }
.mobileNav { display: none; background: ${COLORS.navy}; padding: 0 24px 20px; gap: 8px; }
.mobileNav button { display: block; width: 100%; text-align: left; background: transparent; border: 1px solid rgba(255,255,255,.12); color: #fff; border-radius: 14px; padding: 14px 16px; font-weight: 800; text-transform: uppercase; letter-spacing: .04em; margin-top: 8px; }

.hero { position: relative; min-height: 760px; overflow: hidden; background: ${COLORS.deep}; color: #fff; }
.hero img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; }
.heroOverlay { position: absolute; inset: 0; background: linear-gradient(90deg,rgba(1,6,16,.96),rgba(1,6,16,.82) 35%,rgba(1,6,16,.2)); }
.heroContent { position: relative; z-index: 2; max-width: 1536px; margin: 0 auto; padding: 80px 28px; }
.pill { display: inline-flex; border-radius: 999px; border: 1px solid rgba(147,197,253,.2); background: rgba(96,165,250,.1); color: #bfdbfe; padding: 10px 16px; font-size: 12px; font-weight: 900; text-transform: uppercase; letter-spacing: .28em; }
.hero h1 { margin: 24px 0 0; font-size: clamp(58px, 9vw, 100px); line-height: .92; text-transform: uppercase; font-weight: 900; letter-spacing: -.05em; }
.hero h1 span { color: ${COLORS.yellow}; }
.hero p { max-width: 680px; font-size: clamp(22px, 2.2vw, 26px); line-height: 1.65; color: rgba(255,255,255,.9); }
.heroBtns { display: flex; gap: 20px; flex-wrap: wrap; margin-top: 36px; }
.primary, .secondary { display: inline-flex; align-items: center; gap: 12px; border-radius: 18px; padding: 20px 30px; font-size: 20px; font-weight: 900; text-transform: uppercase; letter-spacing: .04em; }
.primary { border: 0; background: ${COLORS.yellow}; color: #111827; }
.secondary { border: 2px solid rgba(255,255,255,.75); background: rgba(0,0,0,.12); color: #fff; }
.stats { display: grid; gap: 16px; grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); max-width: 640px; margin-top: 36px; }
.stats div { border-radius: 22px; border: 1px solid rgba(255,255,255,.12); background: rgba(255,255,255,.1); padding: 20px 18px; }
.stats strong { display:block; font-size: 26px; }
.stats small { display:block; margin-top: 6px; font-size: 12px; color: rgba(255,255,255,.65); text-transform: uppercase; letter-spacing: .22em; }

.darkGrid { display:grid; grid-template-columns: repeat(auto-fit, minmax(260px,1fr)); max-width:1536px; margin:0 auto; background: rgba(3,19,38,.98); color:#fff; }
.darkGrid article, .lightGrid article { display:flex; gap:20px; padding:30px 28px; border-right:1px solid rgba(255,255,255,.14); }
.darkGrid h3, .lightGrid h3 { margin:0; font-size:18px; text-transform:uppercase; letter-spacing:.04em; }
.darkGrid p { font-size:18px; line-height:1.75; color:rgba(255,255,255,.85); }
.proof { background:#07111f; color:#fff; padding:72px 24px; display:grid; grid-template-columns:repeat(auto-fit,minmax(260px,1fr)); gap:24px; }
.proof article { border-radius:30px; border:1px solid rgba(255,255,255,.1); background:rgba(255,255,255,.05); padding:32px; }
.proof span { display:inline-flex; padding:16px; border-radius:18px; background:rgba(250,204,21,.1); }
.proof h3 { font-size:28px; margin:24px 0 0; }
.proof p { font-size:19px; line-height:1.85; color:rgba(255,255,255,.75); }
.welcome { padding:84px 24px; text-align:center; background:${COLORS.page}; }
.eyebrow { color:#eab308; text-transform:uppercase; letter-spacing:.22em; font-weight:800; font-size:18px; }
.eyebrow.yellow { color:${COLORS.yellow}; }
.welcome h2, .ctaBand h2, .panel h2 { font-size:clamp(44px,5vw,64px); text-transform:uppercase; line-height:1.08; margin:18px 0 0; letter-spacing:-.04em; }
.welcome > p { max-width:980px; margin:30px auto 0; font-size:26px; line-height:1.7; color:${COLORS.muted}; }
.lightGrid { margin-top:80px; display:grid; grid-template-columns:repeat(auto-fit,minmax(260px,1fr)); border-top:1px solid rgba(148,163,184,.35); text-align:left; }
.lightGrid h3 { color:#111827; }
.lightGrid p { color:${COLORS.muted}; font-size:22px; line-height:1.65; }
.ctaBand { background: linear-gradient(135deg,#081224,#0c1a30 55%,#0a1730); color:#fff; margin:0; padding:64px 28px 84px; display:flex; justify-content:space-between; align-items:center; gap:28px; flex-wrap:wrap; }
.ctaBand p { font-size:24px; line-height:1.7; color:rgba(255,255,255,.78); max-width:900px; }

.pageHero { background:${COLORS.soft}; color:#fff; padding:72px 28px; }
.pageHero h1 { margin:18px 0 0; font-size:clamp(46px,6vw,64px); text-transform:uppercase; font-weight:900; letter-spacing:-.03em; }
.pageHero p { max-width:950px; font-size:24px; line-height:1.7; color:rgba(255,255,255,.8); }

.cardsGrid, .industryGrid { padding:80px 28px; display:grid; grid-template-columns:repeat(auto-fit,minmax(280px,1fr)); gap:28px; background:${COLORS.page}; }
.card { border-radius:28px; border:1px solid rgba(15,23,42,.12); background:#fff; padding:32px; box-shadow:0 8px 24px rgba(15,23,42,.06); }
.card h3 { margin:24px 0 0; font-size:28px; line-height:1.15; font-weight:900; color:${COLORS.text}; }
.card p { margin:16px 0 0; font-size:22px; line-height:1.75; color:${COLORS.muted}; }
.iconBox { width:72px; height:72px; display:inline-flex; align-items:center; justify-content:center; border-radius:18px; background:#eff6ff; }
.industryCard { min-height:360px; display:flex; flex-direction:column; align-items:flex-start; }
.industryIcon { width:48px; height:48px; flex:0 0 48px; display:inline-flex; align-items:center; justify-content:center; }
.panel { margin:80px 28px; padding:40px; border-radius:32px; background:#fff; box-shadow:0 8px 24px rgba(15,23,42,.06); }
.panel.single { max-width:1200px; }
.panel p { max-width:850px; font-size:24px; line-height:1.75; color:${COLORS.muted}; }
.chips { margin-top:28px; display:grid; gap:18px; grid-template-columns:repeat(auto-fit,minmax(260px,1fr)); }
.chips div { border-radius:18px; border:1px solid rgba(15,23,42,.12); background:#f8fafc; padding:18px 20px; font-size:22px; font-weight:700; }

.contactWrap { background:${COLORS.deep}; padding:64px 28px 84px; display:grid; grid-template-columns:repeat(auto-fit,minmax(320px,1fr)); gap:32px; }
.contactWrap > div, .contactWrap form { border-radius:28px; }
.contactWrap h2 { color:#fff; font-size:clamp(48px,6vw,76px); line-height:.96; letter-spacing:-.05em; }
.contactWrap p { color:rgba(255,255,255,.85); font-size:22px; line-height:1.7; }
.contactItem { display:flex; gap:14px; color:#93c5fd; background:rgba(255,255,255,.06); border:1px solid rgba(255,255,255,.1); border-radius:20px; padding:18px; margin-top:14px; font-size:20px; }
.contactItem span { color:#fff; }
.contactWrap form { display:grid; gap:18px; }
.contactWrap input, .contactWrap textarea { width:100%; border-radius:24px; border:1px solid rgba(255,255,255,.1); background:#020b1f; color:#fff; padding:24px; font-size:20px; outline:none; }
.contactWrap input { height:78px; }
.contactWrap textarea { min-height:220px; resize:vertical; }
.contactWrap form button { height:84px; border-radius:24px; border:0; background:#68a4f2; color:#041120; font-size:22px; font-weight:900; }
.two { display:grid; grid-template-columns:repeat(auto-fit,minmax(220px,1fr)); gap:18px; }

@media (max-width:1080px) {
  .desktopNav { display:none; }
  .hamburger { display:inline-flex; }
  .mobileNav { display:grid; }
}
`;
