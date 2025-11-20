// src/components/Features.jsx
import React from 'react';

const features = [
  { name: "تصميم مخصّص", icon: "✨" },
  { name: "تحميل سريع", icon: "⚡" },
  { name: "متجاوب 100%", icon: "📱" },
  { name: "تحسين SEO أساسي", icon: "🔍" },
  { name: "نموذج تواصل مُباشر", icon: "📬" },
  { name: "تقارير أداء", icon: "📈" },
];

const Features = () => (
  <div className="container" id="features">
    <h2 className="section-title">مميزاتنا</h2>
    <div className="features-grid">
      {features.map((feature) => (
        <div key={feature.name} className="feature-item">
          <span style={{ fontSize: '3rem' }} role="img" aria-label={feature.name}>{feature.icon}</span>
          <p>{feature.name}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Features;