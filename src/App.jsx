import { useState } from 'react';
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
} from 'lucide-react';

const topFeatures = [
  {
    icon: Target,
    title: 'Custom Solutions',
    text: 'Built for your unique manufacturing needs.',
  },
  {
    icon: TrendingUp,
    title: 'Increase Efficiency',
    text: 'Streamline operations and maximize output.',
  },
  {
    icon: ShieldCheck,
    title: 'Reliable Performance',
    text: 'Engineered for reliability and long-term success.',
  },
  {
    icon: Headphones,
    title: 'Worldwide Support',
    text: 'Supporting clients across Texas and beyond.',
  },
];

const lowerFeatures = [
  {
    icon: Cog,
    title: 'Engineering Excellence',
    text: 'Advanced design and engineering expertise.',
  },
  {
    icon: Bot,
    title: 'Custom Integration',
    text: 'Seamless integration with your existing systems.',
  },
  {
    icon: ClipboardCheck,
    title: 'Proven Results',
    text: 'Delivering measurable ROI and operational improvement.',
  },
  {
    icon: Users,
    title: 'Client Focused',
    text: 'We are committed to your long-term success.',
  },
];

const eliteStats = [
  { value: 'Turn-Key', label: 'Delivery Model' },
  { value: 'Industrial', label: 'Production Focus' },
  { value: 'Worldwide', label: 'Support Reach' },
];

const eliteHighlights = [
  {
    icon: BadgeCheck,
    title: 'Automation You Can Trust',
    text: 'Engineered for reliability, maintainability, and long-term plant performance.',
  },
  {
    icon: Globe2,
    title: 'Texas Based, Worldwide Support',
    text: 'Responsive support for industrial clients, upgrades, and ongoing production needs.',
  },
  {
    icon: Cpu,
    title: 'Controls + Robotics Expertise',
    text: 'A stronger technical positioning for PLCs, robotic systems, retrofits, and line integration.',
  },
];

const solutions = [
  {
    icon: Wrench,
    title: 'Custom Automation Cells',
    text: 'Purpose-built systems designed around your workflow, throughput targets, and production environment.',
  },
  {
    icon: Bot,
    title: 'Robotic Integration',
    text: 'Industrial robot cells for handling, tending, assembly, inspection, and end-of-line operations.',
  },
  {
    icon: Factory,
    title: 'Production Line Upgrades',
    text: 'Modernization services that improve reliability, safety, and long-term maintainability.',
  },
  {
    icon: ClipboardCheck,
    title: 'Controls & Validation',
    text: 'Controls programming, testing, and commissioning to ensure your system performs in the real world.',
  },
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
  {
    title: 'Robot Cell Throughput Upgrade',
    text: 'Improved line throughput and reduced operator intervention by redesigning the robotic work envelope and controls flow.',
  },
  {
    title: 'Assembly Process Integration',
    text: 'Delivered a custom integrated station that improved consistency, traceability, and production visibility.',
  },
  {
    title: 'Legacy Equipment Modernization',
    text: 'Retrofitted outdated equipment with updated controls and safety systems for better uptime and maintainability.',
  },
];

const pages = {
  home: 'Home',
  solutions: 'Solutions',
  services: 'Services',
  industries: 'Industries',
  about: 'About',
  caseStudies: 'Case Studies',
  contact: 'Contact Us',
};

const HERO_SRC =
  'https://images.unsplash.com/photo-1567789884554-0b844b597180?auto=format&fit=crop&w=1800&q=80';

export default function App() {
  const [page, setPage] = useState('home');

  return (
    <div className="min-h-screen bg-[#efefef] text-slate-950">
      <Header page={page} setPage={setPage} />
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

function Header({ page, setPage }) {
  const navItems = [
    ['home', 'Home'],
    ['solutions', 'Solutions'],
    ['services', 'Services'],
    ['industries', 'Industries'],
    ['about', 'About'],
    ['caseStudies', 'Case Studies'],
    ['contact', 'Contact Us'],
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#030b18] text-white">
      <div className="mx-auto flex max-w-[1536px] flex-wrap items-center justify-between gap-5 px-6 py-4 lg:px-8 xl:px-10">
        <button onClick={() => setPage('home')} className="flex items-center gap-4 text-left">
          <div>
            <div className="text-3xl font-light tracking-wide text-white md:text-5xl">RCB AUTOMATION</div>
            <div className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-400 md:text-xl">
              Automated Solutions
            </div>
          </div>
        </button>

        <nav className="hidden flex-wrap items-center gap-8 text-[15px] font-bold uppercase tracking-wide text-white lg:flex xl:gap-12">
          {navItems.map(([key, label]) => (
            <button
              key={key}
              onClick={() => setPage(key)}
              className={`pb-2 transition ${
                page === key ? 'border-b-4 border-yellow-400 text-yellow-300' : 'hover:text-yellow-200'
              }`}
            >
              {label}
            </button>
          ))}
        </nav>

        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            setPage('contact');
          }}
          className="rounded-2xl bg-yellow-400 px-7 py-4 text-base font-black uppercase tracking-wide text-slate-950 shadow-lg transition hover:brightness-105 lg:px-8 lg:text-lg"
        >
          Contact Us
        </a>
      </div>
    </header>
  );
}

function Hero({ setPage }) {
  return (
    <section className="overflow-hidden bg-[#020814] text-white">
      <div className="relative border-t border-white/10">
        <img
          src={HERO_SRC}
          alt="Industrial robotic arms in a manufacturing facility"
          className="absolute inset-0 h-full w-full object-cover opacity-95"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(1,6,16,0.96)_0%,rgba(1,6,16,0.88)_28%,rgba(1,6,16,0.42)_58%,rgba(1,6,16,0.18)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_30%,rgba(7,41,93,0.50),transparent_34%)]" />

        <div className="relative mx-auto grid min-h-[760px] max-w-[1536px] items-center px-6 py-12 lg:grid-cols-[0.76fr_1.24fr] lg:px-8 xl:px-10">
          <div className="max-w-[700px] pt-8 md:pt-12">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-300/20 bg-blue-400/10 px-4 py-2 text-xs font-black uppercase tracking-[0.28em] text-blue-200">
              Premium Industrial Automation
            </div>
            <h1 className="text-[58px] font-black uppercase leading-[0.9] tracking-tight text-white sm:text-[76px] xl:text-[92px]">
              Automation
              <br />
              That Drives
              <br />
              <span className="text-yellow-400">Performance</span>
            </h1>
            <p className="mt-7 max-w-[640px] text-[22px] leading-[1.65] text-white/90 sm:text-[25px]">
              RCB Automation designs and integrates high-performance automation systems that
              improve throughput, productivity, and long-term manufacturing reliability.
            </p>
            <div className="mt-10 flex flex-wrap gap-5">
              <button
                onClick={() => setPage('contact')}
                className="inline-flex items-center gap-3 rounded-2xl bg-yellow-400 px-8 py-5 text-xl font-black uppercase tracking-wide text-slate-950 shadow-2xl shadow-yellow-500/10 transition hover:translate-y-[-1px] hover:brightness-105"
              >
                Request a Quote <ArrowRight className="h-5 w-5" />
              </button>
              <button
                onClick={() => setPage('solutions')}
                className="inline-flex items-center gap-3 rounded-2xl border-2 border-white/75 bg-black/10 px-8 py-5 text-xl font-black uppercase tracking-wide text-white transition hover:bg-white/10"
              >
                Explore Solutions <ChevronRight className="h-5 w-5" />
              </button>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {eliteStats.map((item) => (
                <div
                  key={item.label}
                  className="rounded-[22px] border border-white/10 bg-white/10 px-5 py-5 backdrop-blur-sm"
                >
                  <div className="text-[26px] font-black text-white">{item.value}</div>
                  <div className="mt-1 text-[12px] font-bold uppercase tracking-[0.22em] text-white/60">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 mx-auto -mt-1 grid max-w-[1536px] border-t border-white/10 bg-[#031326]/95 md:grid-cols-2 xl:grid-cols-4">
        {topFeatures.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={item.title}
              className={`flex gap-5 px-7 py-8 ${
                index < topFeatures.length - 1 ? 'xl:border-r xl:border-white/20' : ''
              } ${index < 2 ? 'md:border-r md:border-white/20 xl:border-r' : ''}`}
            >
              <div className="pt-1 text-yellow-400">
                <Icon className="h-12 w-12" strokeWidth={2.3} />
              </div>
              <div>
                <div className="text-[18px] font-black uppercase tracking-wide text-white">
                  {item.title}
                </div>
                <p className="mt-2 text-[18px] leading-8 text-white/85">{item.text}</p>
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
    <section className="bg-[#081224] px-6 py-20 text-white lg:px-10 lg:py-24">
      <div className="mx-auto max-w-[1500px]">
        <div className="text-xl font-semibold uppercase tracking-[0.18em] text-yellow-400">
          RCB Automation
        </div>
        <h1 className="mt-5 text-[46px] font-black uppercase tracking-tight md:text-[64px]">
          {pages[page]}
        </h1>
        <p className="mt-6 max-w-[950px] text-2xl leading-10 text-white/80">
          {page === 'solutions' &&
            'Explore custom automation systems, robotic integration, controls, and production-ready solutions built for modern manufacturing.'}
          {page === 'services' &&
            'From design and programming to commissioning and support, RCB Automation delivers services that move projects from concept to production.'}
          {page === 'industries' &&
            'We support a wide range of industrial sectors with practical automation solutions tailored to workflow, reliability, and output goals.'}
          {page === 'about' &&
            'RCB Automation focuses on engineering-driven automation projects that improve performance, reliability, and long-term client success.'}
          {page === 'caseStudies' &&
            'See examples of how our automation work improves throughput, consistency, controls visibility, and operational results.'}
          {page === 'contact' &&
            'Tell us about your automation project, retrofit, controls issue, or robotic integration needs.'}
        </p>
      </div>
    </section>
  );
}

function EliteProofSection() {
  return (
    <section className="bg-[#07111f] px-6 py-16 text-white lg:px-10 lg:py-20">
      <div className="mx-auto max-w-[1536px]">
        <div className="grid gap-6 lg:grid-cols-3">
          {eliteHighlights.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="rounded-[30px] border border-white/10 bg-white/5 p-8 shadow-xl shadow-black/10 backdrop-blur-sm"
              >
                <div className="inline-flex rounded-2xl border border-yellow-400/20 bg-yellow-400/10 p-4 text-yellow-400">
                  <Icon className="h-9 w-9" strokeWidth={2.1} />
                </div>
                <h3 className="mt-6 text-[28px] font-black text-white">{item.title}</h3>
                <p className="mt-4 text-[19px] leading-9 text-white/75">{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function WelcomeSection() {
  return (
    <section id="welcome" className="bg-[#efefef] px-6 py-20 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-[1536px]">
        <div className="mx-auto max-w-[980px] text-center">
          <div className="text-[18px] font-bold uppercase tracking-[0.22em] text-yellow-500">
            Welcome to RCB Automation
          </div>
          <h2 className="mt-4 text-[44px] font-black uppercase leading-tight tracking-tight text-[#081224] md:text-[62px]">
            Your Partner in Automation Success
          </h2>
          <div className="mx-auto mt-4 h-1 w-24 rounded bg-yellow-400" />
          <p className="mx-auto mt-8 max-w-[980px] text-[22px] leading-[1.7] text-slate-600 md:text-[26px]">
            From concept to implementation and beyond, we provide end-to-end automation
            solutions that help manufacturers stay competitive in today’s demanding market.
          </p>
        </div>

        <div className="mt-20 grid gap-y-12 border-t border-slate-300 pt-14 md:grid-cols-2 xl:grid-cols-4">
          {lowerFeatures.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className={`px-6 ${
                  index < lowerFeatures.length - 1 ? 'xl:border-r xl:border-slate-300' : ''
                } ${index < 2 ? 'md:border-r md:border-slate-300 xl:border-r' : ''}`}
              >
                <div className="flex items-start gap-5">
                  <div className="pt-1 text-blue-600">
                    <Icon className="h-16 w-16" strokeWidth={2} />
                  </div>
                  <div>
                    <div className="text-[22px] font-bold text-[#111827]">{item.title}</div>
                    <p className="mt-3 text-xl leading-8 text-slate-500">{item.text}</p>
                  </div>
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
    <section className="bg-[#f3f4f6] px-6 py-20 lg:px-10 lg:py-24">
      <div className="mx-auto grid max-w-[1500px] gap-8 md:grid-cols-2 xl:grid-cols-4">
        {solutions.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.title} className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm">
              <div className="w-fit rounded-2xl bg-blue-50 p-4 text-blue-600">
                <Icon className="h-10 w-10" />
              </div>
              <h3 className="mt-6 text-[28px] font-black text-[#081224]">{item.title}</h3>
              <p className="mt-4 text-xl leading-9 text-slate-600">{item.text}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function ServicesPage() {
  return (
    <section className="bg-[#f3f4f6] px-6 py-20 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-[1500px] rounded-[32px] bg-white p-10 shadow-sm lg:p-14">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <div className="text-xl font-semibold uppercase tracking-[0.18em] text-yellow-500">Services</div>
            <h2 className="mt-4 text-[52px] font-black uppercase leading-tight text-[#081224]">
              Built for real industrial projects
            </h2>
            <p className="mt-6 text-2xl leading-10 text-slate-600">
              Our service model covers the engineering, controls, robotics, integration, and
              support required to bring complex automation systems online successfully.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {services.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-slate-200 bg-slate-50 px-6 py-5 text-xl font-semibold text-[#111827]"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function IndustriesPage() {
  return (
    <section className="bg-[#f3f4f6] px-6 py-20 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-[1500px]">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {industries.map((item) => (
            <div key={item} className="rounded-[28px] bg-white p-10 shadow-sm">
              <div className="flex items-center gap-4 text-blue-600">
                <Building2 className="h-10 w-10" />
                <div className="text-[30px] font-black text-[#081224]">{item}</div>
              </div>
              <p className="mt-5 text-xl leading-9 text-slate-600">
                Automation strategies tailored for performance, reliability, operator usability,
                and measurable production improvement.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutPage() {
  return (
    <section className="bg-[#f3f4f6] px-6 py-20 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-[1200px] rounded-[32px] bg-white p-10 shadow-sm lg:p-16">
        <div className="flex items-center gap-4 text-blue-600">
          <Briefcase className="h-12 w-12" />
          <div className="text-xl font-semibold uppercase tracking-[0.18em] text-yellow-500">
            About RCB Automation
          </div>
        </div>
        <h2 className="mt-6 text-[58px] font-black uppercase leading-tight text-[#081224]">
          Engineering-first automation partnership
        </h2>
        <p className="mt-8 text-2xl leading-10 text-slate-600">
          RCB Automation helps manufacturers improve efficiency, controls visibility, safety,
          and long-term performance through custom industrial automation solutions. Our work is
          centered on dependable delivery, clear communication, and results that support growth.
        </p>
        <p className="mt-6 text-2xl leading-10 text-slate-600">
          We partner with clients from concept through commissioning and continue supporting them
          as systems evolve, expand, and scale.
        </p>
      </div>
    </section>
  );
}

function CaseStudiesPage() {
  return (
    <section className="bg-[#f3f4f6] px-6 py-20 lg:px-10 lg:py-24">
      <div className="mx-auto grid max-w-[1500px] gap-8 lg:grid-cols-3">
        {caseStudies.map((item) => (
          <div key={item.title} className="rounded-[30px] bg-white p-10 shadow-sm">
            <div className="text-xl font-semibold uppercase tracking-[0.18em] text-yellow-500">
              Project Highlight
            </div>
            <h3 className="mt-5 text-[34px] font-black uppercase leading-tight text-[#081224]">
              {item.title}
            </h3>
            <p className="mt-6 text-xl leading-9 text-slate-600">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function ContactPage() {
  return (
    <section className="bg-[#020814] px-6 py-16 lg:px-10 lg:py-20">
      <div className="mx-auto max-w-[1500px] rounded-[36px] border border-white/10 bg-[linear-gradient(90deg,#07142c_0%,#0b1831_45%,#0b1730_100%)] p-6 shadow-2xl shadow-black/30 lg:p-10">
        <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="rounded-[28px] p-4 lg:p-6">
            <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-bold uppercase tracking-[0.22em] text-blue-200">
              Contact Us
            </div>
            <h2 className="mt-8 max-w-[520px] text-[48px] font-black leading-[0.95] tracking-tight text-white md:text-[64px] xl:text-[74px]">
              Let’s plan your next automation project
            </h2>
            <p className="mt-8 max-w-[620px] text-[22px] leading-[1.7] text-white/85">
              Tell us about your process, production goals, and constraints. This section is
              ready to connect to a real form handler when you deploy on Vercel.
            </p>

            <div className="mt-12 space-y-5">
              {[
                '+1 281 627 9833',
                'rbath@rcbautomation.com',
                '565 S Mason Rd Ste 372, Katy, TX 77450',
                'Worldwide support',
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-5 rounded-[24px] border border-white/10 bg-white/10 px-5 py-5 shadow-lg shadow-black/10"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-500/10 text-2xl text-blue-300">
                    •
                  </div>
                  <div className="text-[18px] font-medium leading-8 text-white md:text-[20px]">
                    {item}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[28px] p-2">
            <form className="grid gap-5">
              <input
                placeholder="Name"
                className="h-[94px] rounded-[26px] border border-white/10 bg-[#020b1f] px-6 text-[20px] text-white outline-none placeholder:text-white/45"
              />
              <input
                placeholder="Company"
                className="h-[94px] rounded-[26px] border border-white/10 bg-[#020b1f] px-6 text-[20px] text-white outline-none placeholder:text-white/45"
              />
              <div className="grid gap-5 md:grid-cols-2">
                <input
                  placeholder="Email"
                  className="h-[94px] rounded-[26px] border border-white/10 bg-[#020b1f] px-6 text-[20px] text-white outline-none placeholder:text-white/45"
                />
                <input
                  placeholder="Phone"
                  className="h-[94px] rounded-[26px] border border-white/10 bg-[#020b1f] px-6 text-[20px] text-white outline-none placeholder:text-white/45"
                />
              </div>
              <input
                placeholder="Project Type"
                className="h-[94px] rounded-[26px] border border-white/10 bg-[#020b1f] px-6 text-[20px] text-white outline-none placeholder:text-white/45"
              />
              <textarea
                placeholder="Tell us about your automation goals"
                className="min-h-[220px] rounded-[26px] border border-white/10 bg-[#020b1f] px-6 py-6 text-[20px] text-white outline-none placeholder:text-white/45"
              />
              <button
                type="button"
                className="mt-1 h-[92px] rounded-[26px] bg-[#68a4f2] text-[22px] font-black text-[#041120] shadow-xl transition hover:brightness-105"
              >
                Send Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactBand({ setPage }) {
  return (
    <section id="contact" className="bg-[#081224] px-6 py-16 text-white lg:px-10 lg:py-20">
      <div className="mx-auto max-w-[1536px] rounded-[34px] border border-white/10 bg-[linear-gradient(135deg,#081224_0%,#0c1a30_55%,#0a1730_100%)] px-8 py-10 shadow-2xl shadow-black/20 lg:px-12 lg:py-12">
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <div className="max-w-[900px]">
            <div className="text-[16px] font-bold uppercase tracking-[0.24em] text-yellow-400">
              Ready to Build
            </div>
            <div className="mt-3 text-4xl font-black uppercase tracking-tight text-white md:text-5xl">
              Let’s talk about your next automation project
            </div>
            <p className="mt-4 text-xl leading-9 text-white/75 md:text-2xl">
              Talk with RCB Automation about robotic integration, PLC upgrades, controls
              troubleshooting, retrofits, or full turn-key systems.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => setPage('contact')}
              className="rounded-2xl bg-yellow-400 px-7 py-4 text-base font-black uppercase tracking-wide text-slate-950 shadow-lg transition hover:brightness-105 lg:px-8 lg:text-lg"
            >
              Contact Us
            </button>
            <a
              href="tel:+12816279833"
              aria-label="Call RCB Automation now"
              className="rounded-2xl border border-white/15 bg-white/5 px-8 py-5 text-lg font-black uppercase tracking-wide text-white transition hover:bg-white/10"
            >
              Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
