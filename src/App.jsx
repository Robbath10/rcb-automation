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

const HERO_SRC =
  'https://images.unsplash.com/photo-1567789884554-0b844b597180?auto=format&fit=crop&w=1800&q=80';

export default function App() {
  const [page, setPage] = useState('home');
  const [mobileOpen, setMobileOpen] = useState(false);

  const shell = useMemo(
    () => ({
      minHeight: '100vh',
      background: '#efefef',
      color: '#081224',
      fontFamily: 'Arial, Helvetica, sans-serif',
    }),
    []
  );

  return (
    <div style={shell}>
      <style>{`
        *{box-sizing:border-box}
        html,body,#root{margin:0;min-height:100%}
        body{margin:0;background:#efefef}
        a{text-decoration:none}
      `}</style>

      <header
        style={{
          background: '#030b18',
          color: '#fff',
          padding: '18px 28px',
          borderBottom: '1px solid rgba(255,255,255,.08)',
        }}
      >
        <div
          style={{
            maxWidth: 1500,
            margin: '0 auto',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 20,
            flexWrap: 'wrap',
          }}
        >
          <div>
            <div style={{ fontSize: 42, fontWeight: 300 }}>
              RCB AUTOMATION
            </div>
            <div
              style={{
                fontSize: 13,
                letterSpacing: '.22em',
                color: '#60a5fa',
                fontWeight: 700,
              }}
            >
              AUTOMATED SOLUTIONS
            </div>
          </div>

          <button
            onClick={() => setPage('contact')}
            style={{
              background: '#facc15',
              border: 0,
              borderRadius: 16,
              padding: '14px 24px',
              fontWeight: 900,
              cursor: 'pointer',
            }}
          >
            CONTACT US
          </button>
        </div>
      </header>

      {page === 'home' && (
        <>
          <section
            style={{
              position: 'relative',
              minHeight: 760,
              overflow: 'hidden',
              color: '#fff',
              background: '#020814',
            }}
          >
            <img
              src={HERO_SRC}
              alt="Industrial robotics"
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />

            <div
              style={{
                position: 'absolute',
                inset: 0,
                background:
                  'linear-gradient(90deg,rgba(1,6,16,.94) 0%,rgba(1,6,16,.84) 38%,rgba(1,6,16,.35) 100%)',
              }}
            />

            <div
              style={{
                position: 'relative',
                zIndex: 2,
                maxWidth: 1500,
                margin: '0 auto',
                padding: '80px 28px',
              }}
            >
              <div
                style={{
                  display: 'inline-block',
                  padding: '10px 16px',
                  borderRadius: 999,
                  background: 'rgba(96,165,250,.12)',
                  color: '#bfdbfe',
                  fontWeight: 800,
                  fontSize: 12,
                  letterSpacing: '.22em',
                }}
              >
                PREMIUM INDUSTRIAL AUTOMATION
              </div>

              <h1
                style={{
                  marginTop: 26,
                  fontSize: 'clamp(60px,9vw,110px)',
                  lineHeight: '.92',
                  fontWeight: 900,
                  textTransform: 'uppercase',
                }}
              >
                Automation
                <br />
                That Drives
                <br />
                <span style={{ color: '#facc15' }}>Performance</span>
              </h1>

              <p
                style={{
                  maxWidth: 760,
                  fontSize: 24,
                  lineHeight: 1.6,
                  color: 'rgba(255,255,255,.88)',
                }}
              >
                RCB Automation designs and integrates high-performance
                automation systems that improve throughput, productivity,
                and long-term manufacturing reliability.
              </p>

              <div
                style={{
                  display: 'flex',
                  gap: 18,
                  flexWrap: 'wrap',
                  marginTop: 34,
                }}
              >
                <button
                  onClick={() => setPage('contact')}
                  style={{
                    background: '#facc15',
                    border: 0,
                    borderRadius: 18,
                    padding: '18px 28px',
                    fontWeight: 900,
                    fontSize: 18,
                    cursor: 'pointer',
                  }}
                >
                  REQUEST A QUOTE
                </button>

                <button
                  style={{
                    background: 'transparent',
                    border: '2px solid rgba(255,255,255,.65)',
                    color: '#fff',
                    borderRadius: 18,
                    padding: '18px 28px',
                    fontWeight: 900,
                    fontSize: 18,
                  }}
                >
                  EXPLORE SOLUTIONS
                </button>
              </div>
            </div>
          </section>

          <section
            style={{
              background: '#f3f4f6',
              padding: '80px 24px',
            }}
          >
            <div
              style={{
                maxWidth: 1500,
                margin: '0 auto',
                textAlign: 'center',
              }}
            >
              <div
                style={{
                  color: '#eab308',
                  letterSpacing: '.22em',
                  fontWeight: 800,
                  fontSize: 14,
                }}
              >
                WELCOME TO RCB AUTOMATION
              </div>

              <h2
                style={{
                  fontSize: 'clamp(42px,5vw,64px)',
                  marginTop: 18,
                  fontWeight: 900,
                  textTransform: 'uppercase',
                }}
              >
                Your Partner in Automation Success
              </h2>

              <p
                style={{
                  maxWidth: 980,
                  margin: '26px auto 0',
                  fontSize: 24,
                  lineHeight: 1.7,
                  color: '#64748b',
                }}
              >
                From concept to implementation and beyond, we provide
                end-to-end automation solutions that help manufacturers
                stay competitive in today’s demanding market.
              </p>
            </div>
          </section>

          <section
            style={{
              background: '#081224',
              padding: '64px 24px 84px',
              color: '#fff',
            }}
          >
            <div
              style={{
                maxWidth: 1500,
                margin: '0 auto',
                borderRadius: 32,
                padding: 32,
                background:
                  'linear-gradient(135deg,#081224 0%,#0c1a30 55%,#0a1730 100%)',
                border: '1px solid rgba(255,255,255,.08)',
              }}
            >
              <div
                style={{
                  color: '#facc15',
                  letterSpacing: '.22em',
                  fontWeight: 800,
                  fontSize: 14,
                }}
              >
                READY TO BUILD
              </div>

              <h2
                style={{
                  marginTop: 14,
                  fontSize: 'clamp(38px,5vw,58px)',
                  fontWeight: 900,
                  textTransform: 'uppercase',
                }}
              >
                Let’s talk about your next automation project
              </h2>

              <button
                onClick={() => setPage('contact')}
                style={{
                  marginTop: 24,
                  background: '#facc15',
                  border: 0,
                  borderRadius: 18,
                  padding: '18px 28px',
                  fontWeight: 900,
                  cursor: 'pointer',
                }}
              >
                CONTACT US
              </button>
            </div>
          </section>
        </>
      )}

      {page === 'contact' && (
        <section
          style={{
            background: '#020814',
            padding: '64px 24px 90px',
          }}
        >
          <div
            style={{
              maxWidth: 1200,
              margin: '0 auto',
              background:
                'linear-gradient(90deg,#07142c 0%,#0b1831 45%,#0b1730 100%)',
              borderRadius: 34,
              padding: 34,
            }}
          >
            <h2
              style={{
                color: '#fff',
                fontSize: 52,
                fontWeight: 900,
                margin: 0,
              }}
            >
              Contact RCB Automation
            </h2>

            <p
              style={{
                color: 'rgba(255,255,255,.8)',
                fontSize: 22,
                marginTop: 18,
              }}
            >
              Email: rbath@rcbautomation.com
              <br />
              Phone: +1 281 627 9833
            </p>

            <a
              href="mailto:rbath@rcbautomation.com"
              style={{
                display: 'inline-block',
                marginTop: 24,
                background: '#68a4f2',
                color: '#041120',
                padding: '18px 28px',
                borderRadius: 18,
                fontWeight: 900,
              }}
            >
              SEND INQUIRY
            </a>
          </div>
        </section>
      )}
    </div>
  );
}
