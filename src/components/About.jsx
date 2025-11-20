// src/components/About.jsx
import React from 'react';

const values = [
  { title: "السرعة", description: "إطلاق المنتجات الرقمية بسرعة قياسية لسبق المنافسين." },
  { title: "الجودة", description: "تصميم واجهات مستخدم متفوقة وتجربة استخدام سلسة." },
  { title: "الدعم", description: "دعم فني مستمر واستشارات مجانية لتحسين الأداء." },
];

const About = () => (
  <div className="container" id="about">
    <h2 className="section-title">من نحن</h2>
    <p style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 3rem' }}>
      ناديّا لابز هي شريكك الرقمي لبناء واجهات حديثة وتجارب مستخدم مُصمّمة بدقّة ترفع من معدل التحويل. نركز على تمكين المشاريع الصغيرة والمتوسطة.
    </p>

    <div className="about-values">
      {values.map((value) => (
        <div key={value.title} className="value-item">
          <h3 style={{ margin: '0 0 0.5rem 0', color: 'var(--color-primary)' }}>{value.title}</h3>
          <p style={{ margin: 0, color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>{value.description}</p>
        </div>
      ))}
    </div>
  </div>
);

export default About;