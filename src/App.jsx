
import { useMemo, useState } from 'react';
import {
  ArrowRight,
  Target,
  TrendingUp,
  ShieldCheck,
  Headphones,
  Cog,
  Bot,
  ClipboardCheck,
  Users,
  Wrench,
  Factory,
  Building2,
  Briefcase,
  BadgeCheck,
  Globe2,
  Cpu,
  ChevronRight,
  Menu,
  X,
} from 'lucide-react';

const HERO_SRC = 'https://images.unsplash.com/photo-1567789884554-0b844b597180?auto=format&fit=crop&w=1800&q=80';

const pages = {
  home: 'Home',
  solutions: 'Solutions',
  services: 'Services',
  industries: 'Industries',
  about: 'About',
  caseStudies: 'Case Studies',
  contact: 'Contact Us',
};

const topFeatures = [
  { icon: Target, title: 'Custom Solutions', text: 'Built for your unique manufacturing needs.' },
  { icon: TrendingUp, title: 'Increase Efficiency', text: 'Streamline operations and maximize output.' },
  { icon: ShieldCheck, title: 'Reliable Performance', text: 'Engineered for reliability and long-term success.' },
  { icon: Headphones, title: 'Worldwide Support', text: 'Supporting clients across Texas and beyond.' },
];

const lowerFeatures = [
  { icon: Cog, title: 'Engineering Excellence', text: 'Advanced design and engineering expertise.' },
  { icon: Bot, title: 'Custom Integration', text: 'Seamless integration with your existing systems.' },
  { icon: ClipboardCheck, title: 'Proven Results', text: 'Delivering measurable ROI and operational improvement.' },
  { icon: Users, title: 'Client Focused', text: 'We are committed to your long-term success.' },
];

const eliteHighlights = [
  { icon: BadgeCheck, title: 'Automation You Can Trust', text: 'Engineered for reliability, maintainability, and long-term plant performance.' },
  { icon: Globe2, title: 'Texas Based, Worldwide Support', text: 'Responsive support for industrial clients, upgrades, and ongoing production needs.' },
  { icon: Cpu, title: 'Controls + Robotics Expertise', text: 'A stronger technical positioning for PLCs, robotic systems, retrofits, and line integration.' },
];

const eliteStats = [
  { value: 'Turn-Key', label: 'Delivery Model' },
  { value: 'Industrial', label: 'Production Focus' },
  { value: 'Worldwide', label: 'Support Reach' },
];

const solutions = [
  { icon: Wrench, title: 'Custom Automation Cells', text: 'Purpose-built systems designed around your workflow, throughput targets, and production environment.' },
  { icon: Bot, title: 'Robotic Integration', text: 'Industrial robot cells for handling, tending, assembly, inspection, and end-of-line operations.' },
  { icon: Factory, title: 'Production Line Upgrades', text: 'Modernization services that improve reliability, safety, and long-term maintainability.' },
  { icon: ClipboardCheck, title: 'Controls & Validation', text: 'Controls programming, testing, and commissioning to ensure your system performs in the real world.' },
];

const services = [
  'System design and engineering',
  'PLC and HMI programming',
  'Robotics integration and commissioning',
  'Safety upgrades and process improvements',
  'Retrofits and troubleshooting support',
  'Startup and ongoing technical support',
];

const industries = [
  'Automotive',
  'Industrial Manufacturing',
  'Food & Beverage',
  'Building Products',
  'Energy Equipment',
  'General Industrial Automation',
];

const caseStudies = [
  { title: 'Robot Cell Throughput Upgrade', text: 'Improved line throughput and reduced operator intervention by redesigning the robotic work envelope and controls flow.' },
  { title: 'Assembly Process Integration', text: 'Delivered a custom integrated station that improved consistency, traceability, and production visibility.' },
  { title: 'Legacy Equipment Modernization', text: 'Retrofitted outdated equipment with updated controls and safety systems for better uptime and maintainability.' },
];

const colors = {
  page: '#efefef',
  navy: '#030b18',
  navyDeep: '#020814',
  navySoft: '#081224',
  navyCard: '#07142c',
  navyCard2: '#0b1831',
  blue: '#60a5fa',
  blueSoft: 'rgba(96,165,250,0.12)',
  yellow: '#facc15',
  white: '#ffffff',
  textDark: '#081224',
  textMuted: '#64748b',
  borderLight: 'rgba(255,255,255,0.1)',
  borderDark: 'rgba(15,23,42,0.12)',
};

export default function RcbAutomationPremium() {
  const [page, setPage] = useState('home');
  const [mobileOpen, setMobileOpen] = useState(false);

  const shell = useMemo(
    () => ({
      minHeight: '100vh',
      background: colors.page,
      color: colors.textDark,
      fontFamily: 'Arial, Helvetica, sans-serif',
    }),
    []
  );

  return (
    <div style={shell}>
      <style>{globalCss}</style>
      <Header
        page={page}
        setPage={(next) => {
          setPage(next);
          setMobileOpen(false);
        }}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
      />
      {page === 'home' ? <Hero setPage={setPage} /> : <PageIntro page={page} />}
      <main>
        {page === 'home' && (
          <>
            <EliteProofSection />
            <WelcomeSection />
            <ContactBand setPage={setPage} />
          </>
        )}
        {page === 'solutions' && <SolutionsPage />}
        {page === 'services' && <ServicesPage />}
        {page === 'industries' && <IndustriesPage />}
        {page === 'about' && <AboutPage />}
        {page === 'caseStudies' && <CaseStudiesPage />}
        {page === 'contact' && <ContactPage />}
      </main>
    </div>
  );
}

function Header({ page, setPage, mobileOpen, setMobileOpen }) {
  const navItems = [
    ['home', 'Home'],
    ['solutions', 'Solutions'],
    ['services', 'Services'],
    ['industries', 'Industries'],
    ['about', 'About'],
    ['caseStudies', 'Case Studies'],
  ];

  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 50, borderBottom: `1px solid ${colors.borderLight}`, background: colors.navy, color: colors.white }}>
      <div style={containerRow}>
        <button onClick={() => setPage('home')} style={brandButton}>
          <div>
            <div style={brandTitle}>RCB AUTOMATION</div>
            <div style={brandSub}>Automated Solutions</div>
          </div>
        </button>

        <nav className="desktop-nav" style={{ display: 'flex', gap: 28, alignItems: 'center', flexWrap: 'wrap' }}>
          {navItems.map(([key, label]) => (
            <button
              key={key}
              onClick={() => setPage(key)}
              style={{
                background: 'transparent',
                border: 0,
                color: page === key ? '#fde68a' : colors.white,
                borderBottom: page === key ? `4px solid ${colors.yellow}` : '4px solid transparent',
                padding: '0 0 8px',
                fontSize: 15,
                fontWeight: 800,
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                cursor: 'pointer',
              }}
            >
              {label}
            </button>
          ))}
        </nav>

        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <button onClick={() => setPage('contact')} style={ctaHeader}>Contact Us</button>
          <button className="mobile-nav-toggle" onClick={() => setMobileOpen((s) => !s)} style={iconButton} aria-label="Toggle navigation">
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="mobile-nav" style={mobilePanel}>
          {navItems.map(([key, label]) => (
            <button key={key} onClick={() => setPage(key)} style={mobileNavItem}>
              {label}
            </button>
          ))}
          <button onClick={() => setPage('contact')} style={{ ...mobileNavItem, color: colors.yellow }}>Contact Us</button>
        </div>
      )}
    </header>
  );
}

function Hero({ setPage }) {
  return (
    <section style={{ overflow: 'hidden', background: colors.navyDeep, color: colors.white }}>
      <div style={{ position: 'relative', borderTop: `1px solid ${colors.borderLight}` }}>
        <img src={HERO_SRC} alt="Industrial robotic arms in a manufacturing facility" style={heroImage} />
        <div style={heroOverlay} />
        <div style={heroOverlay2} />

        <div style={heroInner}>
          <div style={{ maxWidth: 700, paddingTop: 24, position: 'relative', zIndex: 2 }}>
            <div style={pill}>Premium Industrial Automation</div>
            <h1 style={heroTitle}>
              Automation
              <br />
              That Drives
              <br />
              <span style={{ color: colors.yellow }}>Performance</span>
            </h1>
            <p style={heroText}>
              RCB Automation designs and integrates high-performance automation systems that improve throughput, productivity, and long-term manufacturing reliability.
            </p>
            <div style={heroButtons}>
              <button onClick={() => setPage('contact')} style={primaryButton}>
                Request a Quote <ArrowRight size={20} />
              </button>
              <button onClick={() => setPage('solutions')} style={secondaryButton}>
                Explore Solutions <ChevronRight size={20} />
              </button>
            </div>
            <div style={statsGrid}>
              {eliteStats.map((item) => (
                <div key={item.label} style={statCard}>
                  <div style={statValue}>{item.value}</div>
                  <div style={statLabel}>{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div style={featureStrip}>
        {topFeatures.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.title} style={featureCardDark}>
              <div style={{ color: colors.yellow, paddingTop: 4 }}><Icon size={42} strokeWidth={2.3} /></div>
              <div>
                <div style={featureTitleDark}>{item.title}</div>
                <p style={featureTextDark}>{item.text}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function PageIntro({ page }) {
  return (
    <section style={{ background: colors.navySoft, color: colors.white, padding: '72px 24px' }}>
      <div style={contentWrap}>
        <div style={sectionEyebrowDark}>RCB Automation</div>
        <h1 style={{ fontSize: 'clamp(46px, 6vw, 64px)', margin: '18px 0 0', textTransform: 'uppercase', fontWeight: 900, letterSpacing: '-0.03em' }}>{pages[page]}</h1>
        <p style={{ maxWidth: 950, marginTop: 24, fontSize: 24, lineHeight: 1.7, color: 'rgba(255,255,255,0.8)' }}>
          {page === 'solutions' && 'Explore custom automation systems, robotic integration, controls, and production-ready solutions built for modern manufacturing.'}
          {page === 'services' && 'From design and programming to commissioning and support, RCB Automation delivers services that move projects from concept to production.'}
          {page === 'industries' && 'We support a wide range of industrial sectors with practical automation solutions tailored to workflow, reliability, and output goals.'}
          {page === 'about' && 'RCB Automation focuses on engineering-driven automation projects that improve performance, reliability, and long-term client success.'}
          {page === 'caseStudies' && 'See examples of how our automation work improves throughput, consistency, controls visibility, and operational results.'}
          {page === 'contact' && 'Tell us about your automation project, retrofit, controls issue, or robotic integration needs.'}
        </p>
      </div>
    </section>
  );
}

function EliteProofSection() {
  return (
    <section style={{ background: '#07111f', color: colors.white, padding: '72px 24px' }}>
      <div style={{ ...contentWrap, display: 'grid', gap: 24, gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}>
        {eliteHighlights.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.title} style={darkHighlightCard}>
              <div style={darkIconWrap}><Icon size={36} strokeWidth={2.1} /></div>
              <h3 style={darkHighlightTitle}>{item.title}</h3>
              <p style={darkHighlightText}>{item.text}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function WelcomeSection() {
  return (
    <section style={{ background: colors.page, padding: '84px 24px' }}>
      <div style={contentWrap}>
        <div style={{ maxWidth: 980, margin: '0 auto', textAlign: 'center' }}>
          <div style={sectionEyebrowLight}>Welcome to RCB Automation</div>
          <h2 style={sectionTitleLight}>Your Partner in Automation Success</h2>
          <div style={{ width: 96, height: 4, borderRadius: 99, background: colors.yellow, margin: '18px auto 0' }} />
          <p style={sectionTextLight}>
            From concept to implementation and beyond, we provide end-to-end automation solutions that help manufacturers stay competitive in today’s demanding market.
          </p>
        </div>

        <div style={lightFeatureGrid}>
          {lowerFeatures.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} style={lightFeatureCard}>
                <div style={{ color: '#2563eb', paddingTop: 2 }}><Icon size={54} strokeWidth={2} /></div>
                <div>
                  <div style={lightFeatureTitle}>{item.title}</div>
                  <p style={lightFeatureText}>{item.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function SolutionsPage() {
  return (
    <section style={lightSection}>
      <div style={cardsGrid}>
        {solutions.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.title} style={whiteCard}>
              <div style={blueBadge}><Icon size={40} /></div>
              <h3 style={cardTitle}>{item.title}</h3>
              <p style={cardText}>{item.text}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function ServicesPage() {
  return (
    <section style={lightSection}>
      <div style={splitPanel}>
        <div>
          <div style={sectionEyebrowLight}>Services</div>
          <h2 style={{ ...sectionTitleLeft, maxWidth: 620 }}>Built for real industrial projects</h2>
          <p style={leftLead}>
            Our service model covers the engineering, controls, robotics, integration, and support required to bring complex automation systems online successfully.
          </p>
        </div>
        <div style={chipsGrid}>
          {services.map((item) => (
            <div key={item} style={chipCard}>{item}</div>
          ))}
        </div>
      </div>
    </section>
  );
}

function IndustriesPage() {
  return (
    <section style={lightSection}>
      <div style={{ ...contentWrap, display: 'grid', gap: 24, gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
        {industries.map((item) => (
          <div key={item} style={whiteCard}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, color: '#2563eb' }}>
              <Building2 size={38} />
              <div style={{ fontSize: 30, fontWeight: 900, color: colors.textDark }}>{item}</div>
            </div>
            <p style={cardText}>
              Automation strategies tailored for performance, reliability, operator usability, and measurable production improvement.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function AboutPage() {
  return (
    <section style={lightSection}>
      <div style={{ ...splitPanel, maxWidth: 1200 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, color: '#2563eb' }}>
          <Briefcase size={42} />
          <div style={sectionEyebrowLight}>About RCB Automation</div>
        </div>
        <h2 style={{ ...sectionTitleLeft, marginTop: 20 }}>Engineering-first automation partnership</h2>
        <p style={leftLead}>
          RCB Automation helps manufacturers improve efficiency, controls visibility, safety, and long-term performance through custom industrial automation solutions. Our work is centered on dependable delivery, clear communication, and results that support growth.
        </p>
        <p style={{ ...leftLead, marginTop: 18 }}>
          We partner with clients from concept through commissioning and continue supporting them as systems evolve, expand, and scale.
        </p>
      </div>
    </section>
  );
}

function CaseStudiesPage() {
  return (
    <section style={lightSection}>
      <div style={{ ...contentWrap, display: 'grid', gap: 24, gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
        {caseStudies.map((item) => (
          <div key={item.title} style={whiteCard}>
            <div style={sectionEyebrowLight}>Project Highlight</div>
            <h3 style={{ ...cardTitle, textTransform: 'uppercase' }}>{item.title}</h3>
            <p style={cardText}>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    projectType: '',
    message: '',
  });

  const updateField = (key, value) => setForm((prev) => ({ ...prev, [key]: value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`RCB Automation Inquiry${form.projectType ? ` - ${form.projectType}` : ''}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nCompany: ${form.company}\nEmail: ${form.email}\nPhone: ${form.phone}\nProject Type: ${form.projectType}\n\nProject Details:\n${form.message}`
    );
    window.location.href = `mailto:rbath@rcbautomation.com?subject=${subject}&body=${body}`;
  };

  return (
    <section style={{ background: colors.navyDeep, padding: '64px 24px 84px' }}>
      <div style={contactShell}>
        <div style={{ padding: 10 }}>
          <div style={contactPill}>Contact Us</div>
          <h2 style={contactTitle}>Let’s plan your next automation project</h2>
          <p style={contactLead}>
            Tell us about your process, production goals, and constraints. This section is ready to connect to a real form handler when you deploy on Vercel.
          </p>
          <div style={{ display: 'grid', gap: 18, marginTop: 42 }}>
            {['+1 281 627 9833', 'rbath@rcbautomation.com', '565 S Mason Rd Ste 372, Katy, TX 77450', 'Worldwide support'].map((item) => (
              <div key={item} style={contactInfoCard}>
                <div style={contactDot}>•</div>
                <div style={{ fontSize: 20, lineHeight: 1.6, color: colors.white }}>{item}</div>
              </div>
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmit} style={contactForm}>
          <input placeholder="Name" value={form.name} onChange={(e) => updateField('name', e.target.value)} style={inputStyle} />
          <input placeholder="Company" value={form.company} onChange={(e) => updateField('company', e.target.value)} style={inputStyle} />
          <div style={{ display: 'grid', gap: 18, gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
            <input placeholder="Email" value={form.email} onChange={(e) => updateField('email', e.target.value)} style={inputStyle} />
            <input placeholder="Phone" value={form.phone} onChange={(e) => updateField('phone', e.target.value)} style={inputStyle} />
          </div>
          <input placeholder="Project Type" value={form.projectType} onChange={(e) => updateField('projectType', e.target.value)} style={inputStyle} />
          <textarea placeholder="Tell us about your automation goals" value={form.message} onChange={(e) => updateField('message', e.target.value)} style={textareaStyle} />
          <button type="submit" style={submitButton}>Send Inquiry</button>
        </form>
      </div>
    </section>
  );
}

function ContactBand({ setPage }) {
  return (
    <section style={{ background: colors.navySoft, padding: '64px 24px 84px', color: colors.white }}>
      <div style={contactBandShell}>
        <div style={{ maxWidth: 900 }}>
          <div style={{ fontSize: 16, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.24em', color: colors.yellow }}>Ready to Build</div>
          <div style={{ marginTop: 14, fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 900, textTransform: 'uppercase', lineHeight: 1.02 }}>Let’s talk about your next automation project</div>
          <p style={{ marginTop: 16, fontSize: 24, lineHeight: 1.7, color: 'rgba(255,255,255,0.78)' }}>
            Talk with RCB Automation about robotic integration, PLC upgrades, controls troubleshooting, retrofits, or full turn-key systems.
          </p>
        </div>
        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
          <button onClick={() => setPage('contact')} style={ctaHeader}>Contact Us</button>
          <a href="tel:+12816279833" style={callButton}>Call Now</a>
        </div>
      </div>
    </section>
  );
}

const globalCss = `
  * { box-sizing: border-box; }
  html, body, #root { margin: 0; min-height: 100%; }
  body { margin: 0; background: ${colors.page}; }
  button, input, textarea { font: inherit; }
  a { text-decoration: none; }
  @media (max-width: 1080px) {
    .desktop-nav { display: none !important; }
    .mobile-nav-toggle { display: inline-flex !important; }
  }
  @media (min-width: 1081px) {
    .mobile-nav-toggle { display: none !important; }
    .mobile-nav { display: none !important; }
  }
`;

const containerRow = {
  width: '100%',
  maxWidth: 1536,
  margin: '0 auto',
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: 20,
  padding: '16px 24px',
};

const contentWrap = {
  width: '100%',
  maxWidth: 1536,
  margin: '0 auto',
};

const brandButton = { background: 'transparent', border: 0, cursor: 'pointer', padding: 0, textAlign: 'left' };
const brandTitle = { fontSize: 'clamp(30px, 4.5vw, 56px)', fontWeight: 300, letterSpacing: '-0.03em', color: colors.white };
const brandSub = { fontSize: 'clamp(14px, 1.8vw, 22px)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.22em', color: colors.blue, marginTop: 8 };
const ctaHeader = { background: colors.yellow, color: '#111827', border: 0, borderRadius: 18, padding: '16px 28px', fontSize: 18, fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.04em', cursor: 'pointer', boxShadow: '0 12px 30px rgba(0,0,0,0.15)' };
const iconButton = { display: 'none', alignItems: 'center', justifyContent: 'center', background: 'transparent', border: `1px solid ${colors.borderLight}`, color: colors.white, width: 48, height: 48, borderRadius: 14, cursor: 'pointer' };
const mobilePanel = { display: 'grid', gap: 8, padding: '0 24px 20px', background: colors.navy };
const mobileNavItem = { background: 'transparent', border: `1px solid ${colors.borderLight}`, color: colors.white, borderRadius: 14, padding: '14px 16px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.04em', textAlign: 'left', cursor: 'pointer' };

const heroImage = { position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.95 };
const heroOverlay = { position: 'absolute', inset: 0, background: 'linear-gradient(90deg,rgba(1,6,16,0.96) 0%,rgba(1,6,16,0.88) 28%,rgba(1,6,16,0.42) 58%,rgba(1,6,16,0.18) 100%)' };
const heroOverlay2 = { position: 'absolute', inset: 0, background: 'radial-gradient(circle at 18% 30%, rgba(7,41,93,0.50), transparent 34%)' };
const heroInner = { width: '100%', maxWidth: 1536, margin: '0 auto', minHeight: 760, display: 'grid', alignItems: 'center', padding: '48px 24px' };
const pill = { display: 'inline-flex', alignItems: 'center', gap: 8, borderRadius: 999, border: '1px solid rgba(147,197,253,0.2)', background: 'rgba(96,165,250,0.1)', color: '#bfdbfe', padding: '10px 16px', fontSize: 12, fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.28em' };
const heroTitle = { margin: '22px 0 0', fontSize: 'clamp(58px, 9vw, 100px)', lineHeight: 0.92, textTransform: 'uppercase', fontWeight: 900, letterSpacing: '-0.05em' };
const heroText = { marginTop: 28, maxWidth: 640, fontSize: 'clamp(22px, 2.2vw, 26px)', lineHeight: 1.65, color: 'rgba(255,255,255,0.9)' };
const heroButtons = { display: 'flex', flexWrap: 'wrap', gap: 20, marginTop: 36 };
const primaryButton = { display: 'inline-flex', alignItems: 'center', gap: 12, borderRadius: 18, border: 0, background: colors.yellow, color: '#111827', padding: '20px 30px', fontSize: 20, fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.04em', cursor: 'pointer' };
const secondaryButton = { display: 'inline-flex', alignItems: 'center', gap: 12, borderRadius: 18, border: '2px solid rgba(255,255,255,0.75)', background: 'rgba(0,0,0,0.12)', color: colors.white, padding: '20px 30px', fontSize: 20, fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.04em', cursor: 'pointer' };
const statsGrid = { display: 'grid', gap: 16, gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', marginTop: 36, maxWidth: 640 };
const statCard = { borderRadius: 22, border: `1px solid ${colors.borderLight}`, background: 'rgba(255,255,255,0.1)', padding: '20px 18px', backdropFilter: 'blur(10px)' };
const statValue = { fontSize: 26, fontWeight: 900, color: colors.white };
const statLabel = { marginTop: 6, fontSize: 12, fontWeight: 800, color: 'rgba(255,255,255,0.62)', textTransform: 'uppercase', letterSpacing: '0.22em' };
const featureStrip = { width: '100%', maxWidth: 1536, margin: '-1px auto 0', display: 'grid', gap: 0, gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', borderTop: `1px solid ${colors.borderLight}`, background: 'rgba(3,19,38,0.95)' };
const featureCardDark = { display: 'flex', gap: 20, padding: '30px 28px', borderRight: `1px solid rgba(255,255,255,0.16)` };
const featureTitleDark = { fontSize: 18, fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.04em', color: colors.white };
const featureTextDark = { margin: '10px 0 0', fontSize: 18, lineHeight: 1.8, color: 'rgba(255,255,255,0.85)' };

const sectionEyebrowDark = { fontSize: 20, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.18em', color: colors.yellow };
const sectionEyebrowLight = { fontSize: 18, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.22em', color: '#eab308' };
const sectionTitleLight = { margin: '18px 0 0', fontSize: 'clamp(44px, 5vw, 64px)', fontWeight: 900, textTransform: 'uppercase', lineHeight: 1.08, letterSpacing: '-0.04em', color: colors.textDark };
const sectionTitleLeft = { fontSize: 'clamp(42px, 5vw, 58px)', fontWeight: 900, textTransform: 'uppercase', lineHeight: 1.05, letterSpacing: '-0.04em', color: colors.textDark, margin: 0 };
const sectionTextLight = { margin: '30px auto 0', maxWidth: 980, fontSize: 26, lineHeight: 1.7, color: colors.textMuted };

const darkHighlightCard = { borderRadius: 30, border: `1px solid ${colors.borderLight}`, background: 'rgba(255,255,255,0.05)', padding: 32, boxShadow: '0 20px 40px rgba(0,0,0,0.10)' };
const darkIconWrap = { display: 'inline-flex', padding: 16, borderRadius: 18, border: '1px solid rgba(250,204,21,0.2)', background: 'rgba(250,204,21,0.1)', color: colors.yellow };
const darkHighlightTitle = { margin: '24px 0 0', fontSize: 28, fontWeight: 900, color: colors.white };
const darkHighlightText = { margin: '16px 0 0', fontSize: 19, lineHeight: 1.9, color: 'rgba(255,255,255,0.75)' };

const lightFeatureGrid = { marginTop: 80, display: 'grid', gap: 0, gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', borderTop: `1px solid rgba(148,163,184,0.35)` };
const lightFeatureCard = { display: 'flex', gap: 20, padding: '28px 24px', borderRight: `1px solid rgba(148,163,184,0.35)` };
const lightFeatureTitle = { fontSize: 22, fontWeight: 800, color: '#111827' };
const lightFeatureText = { margin: '12px 0 0', fontSize: 22, lineHeight: 1.65, color: colors.textMuted };

const lightSection = { background: '#f3f4f6', padding: '80px 24px' };
const cardsGrid = { width: '100%', maxWidth: 1500, margin: '0 auto', display: 'grid', gap: 24, gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' };
const whiteCard = { borderRadius: 28, border: `1px solid ${colors.borderDark}`, background: colors.white, padding: 32, boxShadow: '0 8px 24px rgba(15,23,42,0.06)' };
const blueBadge = { display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 72, height: 72, borderRadius: 18, background: '#eff6ff', color: '#2563eb' };
const cardTitle = { margin: '24px 0 0', fontSize: 28, fontWeight: 900, color: colors.textDark };
const cardText = { margin: '16px 0 0', fontSize: 22, lineHeight: 1.75, color: colors.textMuted };
const splitPanel = { width: '100%', maxWidth: 1500, margin: '0 auto', background: colors.white, borderRadius: 32, padding: 40, boxShadow: '0 8px 24px rgba(15,23,42,0.06)' };
const leftLead = { marginTop: 26, fontSize: 24, lineHeight: 1.75, color: colors.textMuted, maxWidth: 800 };
const chipsGrid = { marginTop: 28, display: 'grid', gap: 18, gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' };
const chipCard = { borderRadius: 18, border: `1px solid ${colors.borderDark}`, background: '#f8fafc', padding: '18px 20px', fontSize: 22, fontWeight: 700, color: '#111827' };

const contactShell = { width: '100%', maxWidth: 1500, margin: '0 auto', borderRadius: 36, border: `1px solid ${colors.borderLight}`, background: 'linear-gradient(90deg,#07142c 0%,#0b1831 45%,#0b1730 100%)', padding: 24, boxShadow: '0 24px 60px rgba(0,0,0,0.3)', display: 'grid', gap: 32, gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' };
const contactPill = { display: 'inline-flex', borderRadius: 999, border: `1px solid ${colors.borderLight}`, background: 'rgba(255,255,255,0.05)', padding: '12px 20px', fontSize: 14, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.22em', color: '#bfdbfe' };
const contactTitle = { margin: '26px 0 0', maxWidth: 560, fontSize: 'clamp(48px, 6vw, 76px)', fontWeight: 900, lineHeight: 0.96, letterSpacing: '-0.05em', color: colors.white };
const contactLead = { marginTop: 28, maxWidth: 620, fontSize: 22, lineHeight: 1.7, color: 'rgba(255,255,255,0.85)' };
const contactInfoCard = { display: 'flex', alignItems: 'center', gap: 18, borderRadius: 24, border: `1px solid ${colors.borderLight}`, background: 'rgba(255,255,255,0.06)', padding: '20px 18px' };
const contactDot = { display: 'flex', alignItems: 'center', justifyContent: 'center', width: 48, height: 48, borderRadius: 16, border: '1px solid rgba(96,165,250,0.2)', background: 'rgba(59,130,246,0.10)', color: '#93c5fd', fontSize: 26 };
const contactForm = { display: 'grid', gap: 18, padding: 8 };
const inputStyle = { height: 94, borderRadius: 26, border: `1px solid ${colors.borderLight}`, background: '#020b1f', padding: '0 24px', fontSize: 20, color: colors.white, outline: 'none' };
const textareaStyle = { minHeight: 220, borderRadius: 26, border: `1px solid ${colors.borderLight}`, background: '#020b1f', padding: 24, fontSize: 20, color: colors.white, outline: 'none', resize: 'vertical' };
const submitButton = { marginTop: 4, height: 92, borderRadius: 26, border: 0, background: '#68a4f2', color: '#041120', fontSize: 22, fontWeight: 900, cursor: 'pointer', boxShadow: '0 18px 40px rgba(0,0,0,0.2)' };

const contactBandShell = { width: '100%', maxWidth: 1536, margin: '0 auto', borderRadius: 34, border: `1px solid ${colors.borderLight}`, background: 'linear-gradient(135deg,#081224 0%,#0c1a30 55%,#0a1730 100%)', padding: 32, boxShadow: '0 24px 60px rgba(0,0,0,0.2)', display: 'flex', gap: 28, justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' };
const callButton = { borderRadius: 18, border: `1px solid rgba(255,255,255,0.15)`, background: 'rgba(255,255,255,0.05)', color: colors.white, padding: '18px 28px', fontSize: 18, fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.04em' };
