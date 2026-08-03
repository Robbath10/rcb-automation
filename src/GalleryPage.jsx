import { useEffect, useState } from 'react';

const galleryItems = [
  {
    title: 'PLC & HMI Programming',
    category: 'Controls',
    description:
      'Allen-Bradley PanelView Plus HMI development for an automated robotic production cell.',
    image: '/plc-hmi-robot-cell-overview.jpg',
  },
  {
    title: 'Robotic Integration',
    category: 'Robotics',
    description: 'Industrial robot integration for reliable, repeatable production.',
    image: 'https://images.unsplash.com/photo-1567789884554-0b844b597180?auto=format&fit=crop&w=1400&q=85',
  },
  {
    title: 'Automated Production',
    category: 'Automation',
    description: 'Purpose-built automated equipment designed around the production process.',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1400&q=85',
  },
  {
    title: 'Controls Engineering',
    category: 'Controls',
    description: 'PLC, HMI, safety, and control-panel engineering for industrial systems.',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1400&q=85',
  },
  {
    title: 'System Commissioning',
    category: 'Startup',
    description: 'Factory acceptance testing, installation support, and on-site startup.',
    image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1400&q=85',
  },
  {
    title: 'Industrial Manufacturing',
    category: 'Manufacturing',
    description: 'Integrated solutions that improve uptime, quality, and throughput.',
    image: 'https://images.unsplash.com/photo-1565514020179-026b92b84bb6?auto=format&fit=crop&w=1400&q=85',
  },
  {
    title: 'Machine Modernization',
    category: 'Upgrades',
    description: 'Controls and safety upgrades that extend the life of existing equipment.',
    image: 'https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?auto=format&fit=crop&w=1400&q=85',
  },
];

export default function GalleryPage() {
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setSelected(null);
    };
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, []);

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <div style={styles.headingBlock}>
          <div style={styles.eyebrow}>RCB Automation Projects</div>
          <h2 style={styles.heading}>Automation in action</h2>
          <p style={styles.intro}>
            Explore examples of industrial automation, robotic integration, controls engineering,
            commissioning, and production-system modernization.
          </p>
        </div>

        <div style={styles.grid}>
          {galleryItems.map((item) => (
            <button
              key={item.title}
              type="button"
              onClick={() => setSelected(item)}
              style={styles.card}
              aria-label={`View ${item.title}`}
            >
              <img src={item.image} alt={item.title} style={styles.image} loading="lazy" />
              <div style={styles.overlay} />
              <div style={styles.cardContent}>
                <span style={styles.category}>{item.category}</span>
                <h3 style={styles.cardTitle}>{item.title}</h3>
                <p style={styles.cardText}>{item.description}</p>
                <span style={styles.viewText}>View image →</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {selected && (
        <div
          style={styles.lightbox}
          role="dialog"
          aria-modal="true"
          aria-label={selected.title}
          onClick={() => setSelected(null)}
        >
          <button
            type="button"
            style={styles.closeButton}
            onClick={() => setSelected(null)}
            aria-label="Close image"
          >
            ×
          </button>
          <div style={styles.lightboxPanel} onClick={(event) => event.stopPropagation()}>
            <img src={selected.image} alt={selected.title} style={styles.lightboxImage} />
            <div style={styles.lightboxCaption}>
              <span style={styles.category}>{selected.category}</span>
              <h3 style={styles.lightboxTitle}>{selected.title}</h3>
              <p style={styles.lightboxText}>{selected.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

const styles = {
  section: {
    background: 'linear-gradient(180deg, #020814 0%, #071426 100%)',
    padding: '72px 24px 96px',
    color: '#ffffff',
  },
  container: {
    width: 'min(1180px, 100%)',
    margin: '0 auto',
  },
  headingBlock: {
    maxWidth: 820,
    margin: '0 auto 42px',
    textAlign: 'center',
  },
  eyebrow: {
    color: '#60a5fa',
    fontSize: 14,
    fontWeight: 900,
    letterSpacing: '0.13em',
    textTransform: 'uppercase',
  },
  heading: {
    margin: '12px 0 16px',
    fontSize: 'clamp(38px, 6vw, 68px)',
    lineHeight: 1.02,
    letterSpacing: '-0.04em',
  },
  intro: {
    margin: 0,
    color: '#cbd5e1',
    fontSize: 'clamp(17px, 2vw, 20px)',
    lineHeight: 1.75,
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(285px, 1fr))',
    gap: 22,
  },
  card: {
    position: 'relative',
    minHeight: 410,
    padding: 0,
    overflow: 'hidden',
    border: '1px solid rgba(255,255,255,0.12)',
    borderRadius: 18,
    background: '#081224',
    color: '#ffffff',
    textAlign: 'left',
    cursor: 'pointer',
    boxShadow: '0 24px 50px rgba(0,0,0,0.28)',
  },
  image: {
    position: 'absolute',
    inset: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 250ms ease',
  },
  overlay: {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(180deg, rgba(2,8,20,0.08) 15%, rgba(2,8,20,0.94) 92%)',
  },
  cardContent: {
    position: 'absolute',
    inset: 'auto 0 0',
    padding: 28,
    zIndex: 2,
  },
  category: {
    display: 'inline-block',
    color: '#fde68a',
    fontSize: 12,
    fontWeight: 900,
    letterSpacing: '0.12em',
    textTransform: 'uppercase',
  },
  cardTitle: {
    margin: '10px 0 8px',
    fontSize: 27,
    lineHeight: 1.1,
  },
  cardText: {
    margin: 0,
    color: '#dbeafe',
    fontSize: 15,
    lineHeight: 1.55,
  },
  viewText: {
    display: 'inline-block',
    marginTop: 17,
    color: '#ffffff',
    fontSize: 13,
    fontWeight: 900,
    letterSpacing: '0.06em',
    textTransform: 'uppercase',
  },
  lightbox: {
    position: 'fixed',
    inset: 0,
    zIndex: 1000,
    display: 'grid',
    placeItems: 'center',
    padding: 24,
    background: 'rgba(0,0,0,0.88)',
    backdropFilter: 'blur(8px)',
  },
  lightboxPanel: {
    width: 'min(1050px, 100%)',
    maxHeight: '90vh',
    overflow: 'auto',
    borderRadius: 18,
    background: '#071426',
    boxShadow: '0 32px 90px rgba(0,0,0,0.6)',
  },
  lightboxImage: {
    display: 'block',
    width: '100%',
    maxHeight: '68vh',
    objectFit: 'cover',
  },
  lightboxCaption: {
    padding: '24px 28px 30px',
  },
  lightboxTitle: {
    margin: '8px 0',
    fontSize: 30,
  },
  lightboxText: {
    margin: 0,
    color: '#cbd5e1',
    fontSize: 17,
    lineHeight: 1.6,
  },
  closeButton: {
    position: 'fixed',
    top: 18,
    right: 22,
    zIndex: 1001,
    width: 46,
    height: 46,
    border: '1px solid rgba(255,255,255,0.25)',
    borderRadius: '50%',
    background: 'rgba(3,11,24,0.85)',
    color: '#ffffff',
    fontSize: 30,
    lineHeight: 1,
    cursor: 'pointer',
  },
};
