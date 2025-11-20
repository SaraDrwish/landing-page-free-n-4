// src/components/Services.jsx
import React from 'react';

const services = [
  { title: "تصميم واجهات UX/UI", description: "تصميم تفاعلي مبني على أبحاث المستخدم، ونماذج أولية سريعة قابلة للاختبار." },
  { title: "تطوير صفحات هبوط", description: "بناء صفحات هبوط سريعة وقابلة للتوسعة باستخدام React / Vite أو HTML/CSS." },
  { title: "تحسين التحويل (CRO)", description: "تحليل تجربة المستخدم وإجراء اختبارات A/B لتحسين نسخ CTA ورفع معدلات التحويل." },
];

const Services = () => (
  <div className="container" id="services">
    <h2 className="section-title">خدماتنا</h2>
    <div className="services-grid">
      {services.map((service) => (
        <div key={service.title} className="service-card">
          <h3 style={{ marginTop: 0 }}>{service.title}</h3>
          <p>{service.description}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Services;