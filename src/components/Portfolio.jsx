import React from 'react';
 
const portfolioItems = [
  { id: 1, title: "واجهة تطبيق موبايل (افتراضي)", image: "../../assets/images/N.png" },
  { id: 2, title: "صفحة هبوط تسويقية (افتراضي)", image: "assets/images/bgrndDots.png" },
  { id: 3, title: "لوحة تحكم (افتراضي)", image: "../assets/images/NoiseTexture.png" },
];

const Portfolio = () => (
  <div className="container" id="portfolio">
    <h2 className="section-title">أعمالنا</h2>
    <div className="portfolio-grid">
      {portfolioItems.map((item) => (
        <div key={item.id} className="portfolio-item">
          <img 
            src={item.image} 
            alt={item.title} 
            className="portfolio-img" 
            loading="lazy" 
          />
          <div style={{ padding: '1rem' }}>
            <h4 style={{ margin: 0 }}>{item.title}</h4>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Portfolio;