import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";

function Gallery() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [showLightbox, setShowLightbox] = useState(false);
  const [lightboxImage, setLightboxImage] = useState({ src: "", alt: "" });
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  // Gallery items data
  const galleryItems = [
    {
      id: 1,
      category: "wedding",
      src: "https://images.unsplash.com/photo-1529565214304-a882ebc5a8e7?auto=format&fit=crop&w=800&q=80",
      alt: "Wedding catering setup",
      title: "Wedding Reception",
      size: "large"
    },
    {
      id: 2,
      category: "wedding",
      src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=600&q=80",
      alt: "Wedding celebration",
      title: "Garden Wedding"
    },
    {
      id: 3,
      category: "wedding",
      src: "https://images.unsplash.com/photo-1519741347686-c1e0aadf4611?auto=format&fit=crop&w=600&q=80",
      alt: "Wedding food display",
      title: "Wedding Buffet"
    },
    {
      id: 4,
      category: "corporate",
      src: "https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?auto=format&fit=crop&w=600&q=80",
      alt: "Corporate event",
      title: "Corporate Event"
    },
    {
      id: 5,
      category: "corporate",
      src: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=800&q=80",
      alt: "Corporate team building",
      title: "Team Building",
      size: "large"
    },
    {
      id: 6,
      category: "corporate",
      src: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=600&q=80",
      alt: "Corporate lunch",
      title: "Corporate Lunch"
    },
    {
      id: 7,
      category: "private",
      src: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=600&q=80",
      alt: "Family gathering",
      title: "Family Gathering"
    },
    {
      id: 8,
      category: "private",
      src: "https://images.unsplash.com/photo-1530062845289-9109b2c9c868?auto=format&fit=crop&w=600&q=80",
      alt: "Birthday party",
      title: "Birthday Party"
    },
    {
      id: 9,
      category: "private",
      src: "https://images.unsplash.com/photo-1604881988758-f76ad2f7aac1?auto=format&fit=crop&w=800&q=80",
      alt: "Garden party",
      title: "Garden Party",
      size: "large"
    },
    {
      id: 10,
      category: "food",
      src: "https://images.unsplash.com/photo-1529694157872-4e0c0f3b238b?auto=format&fit=crop&w=600&q=80",
      alt: "Spit roast",
      title: "Spit Braai Setup"
    },
    {
      id: 11,
      category: "food",
      src: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=80",
      alt: "Food preparation",
      title: "Chef in Action"
    },
    {
      id: 12,
      category: "food",
      src: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80",
      alt: "BBQ ribs",
      title: "Braai Ribs"
    },
    {
      id: 13,
      category: "food",
      src: "https://images.unsplash.com/photo-1515443961218-a51367888e4b?auto=format&fit=crop&w=800&q=80",
      alt: "Gourmet platter",
      title: "Gourmet Platter",
      size: "large"
    }
  ];

  const filterGallery = (category) => {
    setActiveCategory(category);
  };

  // Get filtered items
  const filteredItems = activeCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  const openLightbox = (image, index) => {
    setLightboxImage(image);
    setCurrentImageIndex(index);
    setShowLightbox(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setShowLightbox(false);
    document.body.style.overflow = 'auto';
  };

  const goToPreviousImage = () => {
    const newIndex = (currentImageIndex - 1 + filteredItems.length) % filteredItems.length;
    setCurrentImageIndex(newIndex);
    setLightboxImage(filteredItems[newIndex]);
  };

  const goToNextImage = () => {
    const newIndex = (currentImageIndex + 1) % filteredItems.length;
    setCurrentImageIndex(newIndex);
    setLightboxImage(filteredItems[newIndex]);
  };

  const handleKeyDown = useCallback((e) => {
    if (!showLightbox) return;
    
    switch (e.key) {
      case 'Escape':
        closeLightbox();
        break;
      case 'ArrowLeft':
        goToPreviousImage();
        break;
      case 'ArrowRight':
        goToNextImage();
        break;
      default:
        break;
    }
  }, [showLightbox, currentImageIndex, filteredItems]);

  useEffect(() => {
    // Simulate loading effect
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <div className="gallery-page">
      <div className="page-header">
        <div className="page-header-content">
          <h1>Our Gallery</h1>
          <p>Browse through the memories we've helped create through authentic South African cuisine</p>
        </div>
      </div>

      <div className="gallery-categories">
        <button 
          className={`gallery-category-btn ${activeCategory === 'all' ? 'active' : ''}`}
          onClick={() => filterGallery('all')}
        >
          All
        </button>
        <button 
          className={`gallery-category-btn ${activeCategory === 'wedding' ? 'active' : ''}`}
          onClick={() => filterGallery('wedding')}
        >
          Weddings
        </button>
        <button 
          className={`gallery-category-btn ${activeCategory === 'corporate' ? 'active' : ''}`}
          onClick={() => filterGallery('corporate')}
        >
          Corporate Events
        </button>
        <button 
          className={`gallery-category-btn ${activeCategory === 'private' ? 'active' : ''}`}
          onClick={() => filterGallery('private')}
        >
          Private Parties
        </button>
        <button 
          className={`gallery-category-btn ${activeCategory === 'food' ? 'active' : ''}`}
          onClick={() => filterGallery('food')}
        >
          Food Showcase
        </button>
      </div>

      <section className="gallery-section">
        <div className="gallery-grid">
          {filteredItems.map((item, index) => (
            <div 
              key={item.id}
              className={`gallery-item ${item.size || ''} ${isLoaded ? 'revealed' : ''}`} 
              style={{transitionDelay: `${index * 100}ms`}}
              onClick={() => openLightbox(item, index)}
            >
              <img src={item.src} alt={item.alt} loading="lazy" />
              <div className="gallery-overlay">
                <span>{item.title}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {showLightbox && (
        <div className="gallery-lightbox" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox}>×</button>
          
          <button 
            className="lightbox-nav lightbox-prev" 
            onClick={(e) => { 
              e.stopPropagation(); 
              goToPreviousImage(); 
            }}
            aria-label="Previous image"
          >
            ‹
          </button>
          
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src={lightboxImage.src} alt={lightboxImage.alt} />
            <div className="lightbox-caption">
              <span>{lightboxImage.title}</span>
              <small>{currentImageIndex + 1} / {filteredItems.length}</small>
            </div>
          </div>
          
          <button 
            className="lightbox-nav lightbox-next" 
            onClick={(e) => { 
              e.stopPropagation(); 
              goToNextImage(); 
            }}
            aria-label="Next image"
          >
            ›
          </button>
        </div>
      )}

      <section className="cta-section">
        <div className="cta-center">
          <h2>Ready to create your own memories?</h2>
          <p>Book us for your next event and experience authentic South African cuisine</p>
          <div className="cta-buttons">
            <Link to="/contact" className="cta-btn cta-primary">Book Now</Link>
            <a href="tel:+27721234567" className="cta-btn">Call Us</a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Gallery; 