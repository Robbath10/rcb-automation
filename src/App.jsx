
import './styles.css';

const solutions = [
  { title: 'Robotic Welding Cells', text: 'Production-ready welding systems engineered for repeatability, fixture accuracy, and dependable output.' },
  { title: 'Assembly Automation', text: 'Semi and fully automated assembly stations that improve consistency and reduce manual process strain.' },
  { title: 'Machine Tending', text: 'Reliable tending systems for CNC, molding, stamping, and other high-repeatability operations.' },
  { title: 'Inspection & Vision', text: 'Integrated inspection systems for defect detection, traceability, and process verification.' },
];

const pillars = [
  'Worldwide support for manufacturers and facilities',
  'Turn-key integration from discovery to commissioning',
  'Controls, robotics, and upgrade expertise',
  'Production-focused design built for maintainability',
];

const industries = ['Automotive','Food & Beverage','Industrial Manufacturing','Energy Equipment','Building Products','Agriculture'];

const process = [
  { step: '01', title: 'Discovery', text: 'We review throughput goals, process constraints, safety requirements, and line realities.' },
  { step: '02', title: 'Engineering', text: 'We define the system architecture, controls strategy, and integration scope around your facility.' },
  { step: '03', title: 'Commissioning', text: 'We launch, validate, and fine-tune for production-ready performance.' },
  { step: '04', title: 'Support', text: 'We stay available for optimization, troubleshooting, and long-term operational support.' },
];

const caseStudies = [
  { title: 'Welding Cell Modernization', result: 'Reduced cycle time by 23% while improving weld consistency on an aging production line.' },
  { title: 'Vision-Guided Pick & Place', result: 'Improved uptime and reduced part handling errors with a custom inspection-driven workflow.' },
  { title: 'End-of-Line Palletizing', result: 'Created a more scalable packaging operation with lower labor strain and better line flow.' },
];

export default function App() {
  return (
    <div className="site-shell">
      <header className="header">
        <div className="container header-inner">
          <div>
            <div className="brand-title">RCB Automation LLC</div>
            <div className="brand-subtitle">Industrial Automation & Robotics</div>
          </div>
          <nav className="nav">
            <a href="#solutions">Solutions</a>
            <a href="#industries">Industries</a>
            <a href="#process">Process</a>
            <a href="#case-studies">Case Studies</a>
            <a href="#contact">Contact</a>
          </nav>
          <a href="#contact" className="button primary-button small-button">Request a Quote</a>
        </div>
      </header>

      <section className="hero">
        <div className="hero-glow hero-glow-top" />
        <div className="hero-glow hero-glow-bottom" />
        <div className="hero-grid" />
        <div className="container hero-inner">
          <div>
            <div className="pill">Worldwide Support</div>
            <h1 className="hero-title">Premium automation integration for facilities that need precision, uptime, and long-term performance.</h1>
            <p className="hero-text">RCB Automation LLC helps manufacturers worldwide deploy robotics, controls, machine tending, and material handling systems engineered for measurable production gains.</p>
            <div className="button-row">
              <a href="#contact" className="button primary-button">Start Your Project</a>
              <a href="#solutions" className="button secondary-button">Explore Solutions</a>
            </div>
            <div className="hero-badges">
              {['Worldwide Support', 'Turn-Key Integration', 'Production-Focused Design'].map((item) => (
                <div key={item} className="badge-card">{item}</div>
              ))}
            </div>
          </div>

          <div className="hero-side">
            <div className="feature-panel">
              <div className="eyebrow">Why RCB</div>
              <div className="panel-title">Systems engineered for measurable production gains</div>
              <div className="panel-list">
                {pillars.map((item) => <div key={item} className="panel-item">{item}</div>)}
              </div>
            </div>
            <div className="contact-panel">
              <div className="eyebrow light">Talk to RCB Automation</div>
              <div className="phone-number">+1 281 627 9833</div>
              <p>Robotics integration, controls programming, retrofits, and production support from Katy, Texas.</p>
            </div>
          </div>
        </div>
      </section>

      <main>
        <section className="container section-shell">
          <SectionHeading eyebrow="Positioning" title="A more credible, premium front door for your automation business" text="This version is designed to feel closer to a modern agency-built industrial site, with stronger visual hierarchy, cleaner CTAs, and a more confident market position." />
          <div className="stats-grid">
            {[
              { value: 'Worldwide', label: 'Support Coverage' },
              { value: 'Turn-Key', label: 'Integration Delivery' },
              { value: '24/7 Ready', label: 'Production Mindset' },
            ].map((stat) => (
              <div key={stat.label} className="stat-card">
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        <section id="solutions" className="container section-shell">
          <SectionHeading eyebrow="Solutions" title="Core automation capabilities built for demanding production environments" text="Use these as the lead offer blocks on your Vercel site, then expand later into individual pages for SEO and deeper service detail." />
          <div className="card-grid four-col">
            {solutions.map((item) => (
              <div key={item.title} className="content-card">
                <div className="icon-box">◆</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <div className="learn-more">Learn more</div>
              </div>
            ))}
          </div>
        </section>

        <section id="industries" className="container section-shell">
          <SectionHeading eyebrow="Industries" title="Built for manufacturers with complex workflows and real production pressure" text="Position these as your target sectors and expand into dedicated regional pages later if you want more SEO reach." />
          <div className="industry-grid">
            {industries.map((industry) => <div key={industry} className="industry-card">{industry}</div>)}
          </div>
        </section>

        <section id="process" className="container section-shell">
          <SectionHeading eyebrow="Process" title="From discovery to commissioning, built around your facility" text="A premium site should make your delivery model feel clear, disciplined, and low-risk for the buyer." />
          <div className="card-grid four-col">
            {process.map((item) => (
              <div key={item.step} className="content-card">
                <div className="step-number">{item.step}</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="case-studies" className="container section-shell">
          <SectionHeading eyebrow="Case Studies" title="Project stories that signal capability and measurable results" text="Even as placeholder case studies, this section makes the site feel more established and conversion-ready." />
          <div className="card-grid three-col">
            {caseStudies.map((item) => (
              <div key={item.title} className="content-card">
                <div className="eyebrow">Project Highlight</div>
                <h3 className="case-title">{item.title}</h3>
                <p>{item.result}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="container section-shell">
          <div className="contact-section">
            <div>
              <div className="pill subtle">Contact RCB</div>
              <h2 className="contact-title">Let’s plan your next automation project</h2>
              <p className="section-text">Tell us about your process, production goals, and constraints. This section is ready to connect to a real form handler when you deploy on Vercel.</p>
              <div className="info-list">
                {['+1 281 627 9833','rbath@rcbautomation.com','565 S Mason Rd Ste 372, Katy, TX 77450','Worldwide support'].map((t) => (
                  <div key={t} className="info-row"><div className="info-icon">•</div><span>{t}</span></div>
                ))}
              </div>
            </div>
            <form className="form-grid">
              <input placeholder="Name" />
              <input placeholder="Company" />
              <div className="two-col-form">
                <input placeholder="Email" />
                <input placeholder="Phone" />
              </div>
              <input placeholder="Project Type" />
              <textarea placeholder="Tell us about your automation goals" />
              <button type="button" className="button primary-button">Send Inquiry</button>
            </form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <div>
            <div className="footer-title">RCB Automation LLC</div>
            <div>565 S Mason Rd Ste 372, Katy, TX 77450</div>
          </div>
          <div className="footer-links">
            <a href="#solutions">Solutions</a>
            <a href="#industries">Industries</a>
            <a href="#process">Process</a>
            <a href="#case-studies">Case Studies</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function SectionHeading({ eyebrow, title, text }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      <p className="section-text">{text}</p>
    </div>
  );
}
