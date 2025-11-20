// src/components/Testimonials.jsx
import React from 'react';

const testimonials = [
  { quote: "تعاون احترافي ونتائج فاقت التوقعات، ساعدونا في تحقيق معدل تحويل ممتاز.", client: "أحمد الفهد" },
  { quote: "تصميم بسيط وجذاب وسرعة في الإطلاق، تجربة رائعة مع Nadiya Labs.", client: "ليلى محمود" },
  { quote: "دعم فني ممتاز واستشارات فعّالة لتحسين تجربة المستخدم على صفحتنا.", client: "سارة خالد" },
];

const Testimonials = () => (
  <div className="container" id="testimonials">
    <h2 className="section-title">آراء العملاء</h2>
    <div className="testimonials-grid">
      {testimonials.map((test, index) => (
        <div key={index} className="testimonial-card">
          <blockquote>"{test.quote}"</blockquote>
          <footer>— {test.client}</footer>
        </div>
      ))}
    </div>
  </div>
);

export default Testimonials;