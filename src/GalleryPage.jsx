import { useEffect, useState } from 'react';
import './GalleryPage.css';

const galleryItems = [
  {
    title: 'PLC & HMI Programming',
    category: 'Controls',
    description:
      'Allen-Bradley PanelView Plus HMI development for an automated robotic production cell.',
    image: '/plc-hmi-robot-cell-overview.jpg',
  },
  {
    title: 'Control Panel Design',
    category: 'Engineering',
    description:
      'Custom industrial control panel design featuring Rockwell ControlLogix hardware, safety I/O, network infrastructure, VFD integration, and professionally routed field wiring.',
    image: '/control-panel-design.jpg',
  },
];

export default function GalleryPage() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const selectedItem =
    selectedIndex === null ? null : galleryItems[selectedIndex];

  const closeLightbox = () => setSelectedIndex(null);

  const showPrevious = () => {
    setSelectedIndex((currentIndex) =>
      currentIndex === null
        ? 0
        : (currentIndex - 1 + galleryItems.length) % galleryItems.length
    );
  };

  const showNext = () => {
    setSelectedIndex((currentIndex) =>
      currentIndex === null
        ? 0
        : (currentIndex + 1) % galleryItems.length
    );
  };

  useEffect(() => {
    if (selectedIndex === null) {
      document.body.style.overflow = '';
      return undefined;
    }

    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') closeLightbox();
      if (event.key === 'ArrowLeft') showPrevious();
      if (event.key === 'ArrowRight') showNext();
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedIndex]);

  return (
    <main className="gallery-page">
      <section className="gallery-hero">
        <p className="gallery-eyebrow">RCB Automation Projects</p>
        <h1>Project Gallery</h1>
        <p className="gallery-intro">
          Industrial automation, PLC and HMI programming, control panel
          engineering, robotics, system integration, and commissioning.
        </p>
      </section>

      <section className="gallery-grid" aria-label="Project gallery">
        {galleryItems.map((item, index) => (
          <article className="gallery-card" key={item.title}>
            <button
              className="gallery-image-button"
              type="button"
              onClick={() => setSelectedIndex(index)}
              aria-label={`View ${item.title} full size`}
            >
              <img
                className="gallery-image"
                src={item.image}
                alt={item.title}
                loading="lazy"
              />
            </button>

            <div className="gallery-card-content">
              <span className="gallery-category">{item.category}</span>
              <h2>{item.title}</h2>
              <p>{item.description}</p>

              <button
                className="gallery-view-button"
                type="button"
                onClick={() => setSelectedIndex(index)}
              >
                View full size
              </button>
            </div>
          </article>
        ))}
      </section>

      {selectedItem && (
        <div
          className="gallery-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`${selectedItem.title} full-size image`}
          onClick={closeLightbox}
        >
          <button
            className="lightbox-close"
            type="button"
            onClick={closeLightbox}
            aria-label="Close full-size image"
          >
            ×
          </button>

          {galleryItems.length > 1 && (
            <button
              className="lightbox-arrow lightbox-arrow-left"
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                showPrevious();
              }}
              aria-label="Previous image"
            >
              ‹
            </button>
          )}

          <figure
            className="lightbox-content"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              className="lightbox-image"
              src={selectedItem.image}
              alt={selectedItem.title}
            />

            <figcaption className="lightbox-caption">
              <span>{selectedItem.category}</span>
              <strong>{selectedItem.title}</strong>
            </figcaption>
          </figure>

          {galleryItems.length > 1 && (
            <button
              className="lightbox-arrow lightbox-arrow-right"
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                showNext();
              }}
              aria-label="Next image"
            >
              ›
            </button>
          )}
        </div>
      )}
    </main>
  );
}
