import { motion } from 'framer-motion';
import { ArrowRight, Globe, ShieldCheck, Cpu, Phone, Mail, MapPin, ChevronRight, Factory, Gauge, Workflow } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

const solutions = [
  {
    icon: Cpu,
    title: 'Robotic Welding Cells',
    text: 'Production-ready welding systems engineered for repeatability, fixture accuracy, and dependable output.',
  },
  {
    icon: Workflow,
    title: 'Assembly Automation',
    text: 'Semi and fully automated assembly stations that improve consistency and reduce manual process strain.',
  },
  {
    icon: Factory,
    title: 'Machine Tending',
    text: 'Reliable tending systems for CNC, molding, stamping, and other high-repeatability operations.',
  },
  {
    icon: Gauge,
    title: 'Inspection & Vision',
    text: 'Integrated inspection systems for defect detection, traceability, and process verification.',
  },
];

const pillars = [
  'Worldwide support for manufacturers and facilities',
  'Turn-key integration from discovery to commissioning',
  'Controls, robotics, and upgrade expertise',
  'Production-focused design built for maintainability',
];

const industries = [
  'Automotive',
  'Food & Beverage',
  'Industrial Manufacturing',
  'Energy Equipment',
  'Building Products',
  'Agriculture',
];

const process = [
  {
    step: '01',
    title: 'Discovery',
    text: 'We review throughput goals, process constraints, safety requirements, and line realities.',
  },
  {
    step: '02',
    title: 'Engineering',
    text: 'We define the system architecture, controls strategy, and integration scope around your facility.',
  },
  {
    step: '03',
    title: 'Commissioning',
    text: 'We launch, validate, and fine-tune for production-ready performance.',
  },
  {
    step: '04',
    title: 'Support',
    text: 'We stay available for optimization, troubleshooting, and long-term operational support.',
  },
];

const caseStudies = [
  {
    title: 'Welding Cell Modernization',
    result: 'Reduced cycle time by 23% while improving weld consistency on an aging production line.',
  },
  {
    title: 'Vision-Guided Pick & Place',
    result: 'Improved uptime and reduced part handling errors with a custom inspection-driven workflow.',
  },
  {
    title: 'End-of-Line Palletizing',
    result: 'Created a more scalable packaging operation with lower labor strain and better line flow.',
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Header />
      <Hero />
      <main>
        <SectionShell>
          <WhyRcb />
        </SectionShell>

        <SectionShell>
          <Solutions />
        </SectionShell>

        <SectionShell>
          <Industries />
        </SectionShell>

        <SectionShell>
          <ProcessSection />
        </SectionShell>

        <SectionShell>
          <CaseStudies />
        </SectionShell>

        <SectionShell>
          <ContactSection />
        </SectionShell>
      </main>
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <div>
          <div className="text-xl font-black tracking-wide">RCB Automation LLC</div>
          <div className="text-sm text-slate-400">Industrial Automation & Robotics</div>
        </div>
        <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
          <a href="#solutions" className="transition hover:text-white">Solutions</a>
          <a href="#industries" className="transition hover:text-white">Industries</a>
          <a href="#process" className="transition hover:text-white">Process</a>
          <a href="#case-studies" className="transition hover:text-white">Case Studies</a>
          <a href="#contact" className="transition hover:text-white">Contact</a>
        </nav>
        <a
          href="#contact"
          className="rounded-2xl bg-blue-400 px-4 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-blue-950/30 transition hover:scale-[1.02]"
        >
          Request a Quote
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-white/10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(59,130,246,0.22),_transparent_28%),radial-gradient(circle_at_bottom_left,_rgba(148,163,184,0.16),_transparent_34%)]" />
      <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(255,255,255,0.7)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.7)_1px,transparent_1px)] [background-size:48px_48px]" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:py-28">
        <motion.div initial="hidden" animate="show" variants={fadeUp}>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-blue-200">
            <Globe className="h-3.5 w-3.5" /> Worldwide Support
          </div>
          <h1 className="max-w-4xl text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
            Premium automation integration for facilities that need precision, uptime, and long-term performance.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            RCB Automation LLC helps manufacturers worldwide deploy robotics, controls, machine tending, and material handling systems engineered for measurable production gains.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-2xl bg-blue-400 px-5 py-3 font-semibold text-slate-950 shadow-xl shadow-blue-950/30 transition hover:scale-[1.02]"
            >
              Start Your Project <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#solutions"
              className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              Explore Solutions
            </a>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {['Worldwide Support', 'Turn-Key Integration', 'Production-Focused Design'].map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm font-medium text-slate-200 shadow-lg backdrop-blur-sm">
                {item}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div initial="hidden" animate="show" variants={fadeUp} className="grid gap-4">
          <div className="rounded-[32px] border border-white/10 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 p-7 shadow-2xl shadow-black/30">
            <div className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-300">Why RCB</div>
            <div className="mt-4 text-2xl font-black">Systems engineered for measurable production gains</div>
            <div className="mt-6 grid gap-3">
              {pillars.map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-slate-200">
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[28px] border border-blue-400/20 bg-blue-400/10 p-6 shadow-xl shadow-blue-950/20">
            <div className="text-sm uppercase tracking-[0.18em] text-blue-200">Talk to RCB Automation</div>
            <div className="mt-2 text-3xl font-black">+1 281 627 9833</div>
            <p className="mt-2 text-slate-200">Robotics integration, controls programming, retrofits, and production support from Katy, Texas.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function WhyRcb() {
  const stats = [
    { value: 'Worldwide', label: 'Support Coverage' },
    { value: 'Turn-Key', label: 'Integration Delivery' },
    { value: '24/7 Ready', label: 'Production Mindset' },
  ];

  return (
    <motion.section initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={fadeUp}>
      <SectionHeading
        eyebrow="Positioning"
        title="A more credible, premium front door for your automation business"
        text="This version is designed to feel closer to a modern agency-built industrial site, with stronger visual hierarchy, cleaner CTAs, and a more confident market position."
      />
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {stats.map((stat) => (
          <div key={stat.label} className="rounded-[28px] border border-white/10 bg-white/5 p-7 shadow-lg">
            <div className="text-3xl font-black text-white">{stat.value}</div>
            <div className="mt-2 text-sm uppercase tracking-[0.16em] text-slate-400">{stat.label}</div>
          </div>
        ))}
      </div>
    </motion.section>
  );
}

function Solutions() {
  return (
    <motion.section id="solutions" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={fadeUp}>
      <SectionHeading
        eyebrow="Solutions"
        title="Core automation capabilities built for demanding production environments"
        text="Use these as the lead offer blocks on your Vercel site, then expand later into individual pages for SEO and deeper service detail."
      />
      <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {solutions.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.title} className="rounded-[28px] border border-white/10 bg-gradient-to-b from-white/8 to-white/4 p-6 shadow-lg">
              <div className="inline-flex rounded-2xl border border-blue-400/20 bg-blue-400/10 p-3 text-blue-300">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-xl font-bold">{item.title}</h3>
              <p className="mt-3 text-slate-300">{item.text}</p>
              <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue-300">
                Learn more <ChevronRight className="h-4 w-4" />
              </div>
            </div>
          );
        })}
      </div>
    </motion.section>
  );
}

function Industries() {
  return (
    <motion.section id="industries" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={fadeUp}>
      <SectionHeading
        eyebrow="Industries"
        title="Built for manufacturers with complex workflows and real production pressure"
        text="Position these as your target sectors and expand into dedicated regional pages later if you want more SEO reach."
      />
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {industries.map((industry) => (
          <div key={industry} className="rounded-2xl border border-white/10 bg-white/5 p-5 text-lg font-medium text-slate-100 shadow-lg">
            {industry}
          </div>
        ))}
      </div>
    </motion.section>
  );
}

function ProcessSection() {
  return (
    <motion.section id="process" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={fadeUp}>
      <SectionHeading
        eyebrow="Process"
        title="From discovery to commissioning, built around your facility"
        text="A premium site should make your delivery model feel clear, disciplined, and low-risk for the buyer."
      />
      <div className="mt-10 grid gap-5 lg:grid-cols-4">
        {process.map((item) => (
          <div key={item.step} className="rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-lg">
            <div className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-300">{item.step}</div>
            <h3 className="mt-3 text-xl font-bold">{item.title}</h3>
            <p className="mt-3 text-slate-300">{item.text}</p>
          </div>
        ))}
      </div>
    </motion.section>
  );
}

function CaseStudies() {
  return (
    <motion.section id="case-studies" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={fadeUp}>
      <SectionHeading
        eyebrow="Case Studies"
        title="Project stories that signal capability and measurable results"
        text="Even as placeholder case studies, this section makes the site feel more established and conversion-ready."
      />
      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {caseStudies.map((item) => (
          <div key={item.title} className="rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-lg">
            <div className="text-sm uppercase tracking-[0.18em] text-blue-300">Project Highlight</div>
            <h3 className="mt-3 text-2xl font-black">{item.title}</h3>
            <p className="mt-4 text-slate-300">{item.result}</p>
          </div>
        ))}
      </div>
    </motion.section>
  );
}

function ContactSection() {
  return (
    <motion.section id="contact" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={fadeUp}>
      <div className="grid gap-8 rounded-[32px] border border-white/10 bg-gradient-to-br from-blue-400/10 via-slate-900 to-slate-900 p-8 shadow-2xl shadow-black/30 lg:grid-cols-[0.9fr_1.1fr] lg:p-10">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-blue-200">
            <ShieldCheck className="h-3.5 w-3.5" /> Contact RCB
          </div>
          <h2 className="mt-4 text-3xl font-black sm:text-4xl">Let’s plan your next automation project</h2>
          <p className="mt-5 max-w-xl text-slate-300">
            Tell us about your process, production goals, and constraints. This section is ready to connect to a real form handler when you deploy on Vercel.
          </p>
          <div className="mt-8 space-y-4 text-slate-200">
            <InfoRow icon={Phone} text="+1 281 627 9833" />
            <InfoRow icon={Mail} text="rbath@rcbautomation.com" />
            <InfoRow icon={MapPin} text="565 S Mason Rd Ste 372, Katy, TX 77450" />
            <InfoRow icon={Globe} text="Worldwide support" />
          </div>
        </div>

        <form className="grid gap-4">
          <input className="rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none placeholder:text-slate-500" placeholder="Name" />
          <input className="rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none placeholder:text-slate-500" placeholder="Company" />
          <div className="grid gap-4 md:grid-cols-2">
            <input className="rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none placeholder:text-slate-500" placeholder="Email" />
            <input className="rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none placeholder:text-slate-500" placeholder="Phone" />
          </div>
          <input className="rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none placeholder:text-slate-500" placeholder="Project Type" />
          <textarea className="min-h-[150px] rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none placeholder:text-slate-500" placeholder="Tell us about your automation goals" />
          <button type="button" className="rounded-2xl bg-blue-400 px-5 py-3 font-semibold text-slate-950 shadow-lg shadow-blue-950/30 transition hover:scale-[1.01]">
            Send Inquiry
          </button>
        </form>
      </div>
    </motion.section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 py-8 text-sm text-slate-400 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div>
          <div className="font-semibold text-slate-300">RCB Automation LLC</div>
          <div className="mt-1">565 S Mason Rd Ste 372, Katy, TX 77450</div>
        </div>
        <div className="flex flex-wrap gap-4">
          <a href="#solutions" className="hover:text-white">Solutions</a>
          <a href="#industries" className="hover:text-white">Industries</a>
          <a href="#process" className="hover:text-white">Process</a>
          <a href="#case-studies" className="hover:text-white">Case Studies</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </div>
      </div>
    </footer>
  );
}

function SectionShell({ children }) {
  return <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">{children}</section>;
}

function SectionHeading({ eyebrow, title, text }) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-black leading-tight sm:text-4xl">{title}</h2>
      <p className="mt-5 text-lg text-slate-300">{text}</p>
    </div>
  );
}

function InfoRow({ icon: Icon, text }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-3">
      <div className="rounded-xl border border-blue-400/20 bg-blue-400/10 p-2 text-blue-300">
        <Icon className="h-4 w-4" />
      </div>
      <span>{text}</span>
    </div>
  );
}
