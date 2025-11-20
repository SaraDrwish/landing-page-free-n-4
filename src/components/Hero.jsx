import React from 'react';

const Hero = () => {
  const testimonials = ["تصميم مُلهم", "تحويل مُمتاز", "دعم احترافي"];
  
  return (
    <header className="hero-section-with-bg" id="home">
      <div className="container hero-content-centered">
        
        <h1 className="hero-title">
          نحو تجربة رقمية أبسط — مع <span style={{ color: 'var(--color-primary)' }}>Nadiya Labs</span>
        </h1>
        <p className="hero-subtitle">
          نصمّم صفحات هبوط تُحوّل الزوار إلى عملاء. سريع، جذاب، ومتوافق مع جميع الأجهزة.
        </p>
        
        <a 
          href="#contact" 
          className="cta-button"
          style={{ fontSize: '1.125rem', padding: '14px 32px' }}
          aria-label="اطلب استشارة مجانية"
        >
          اطلب استشارة مجانية
        </a>

        <div style={{ marginTop: '2rem', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
          {testimonials.map((test, index) => (
            <span key={index} className="testimonial-tag">
              {test}
            </span>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Hero;