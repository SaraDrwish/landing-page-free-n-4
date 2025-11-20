import React, { useState } from 'react';

const ContactForm = () => {
  const [statusMessage, setStatusMessage] = useState({ type: '', message: '' });

  const handleSubmit = (e) => {
    // نوقف الإرسال الافتراضي إذا كنا نريد التحكم في الحالة قبل التحويل
    // e.preventDefault(); 
    
    // بما أننا نستخدم mailto:، يكفي ترك النموذج يرسل مباشرة.
    // نضيف رسالة بسيطة للمستخدم قبل التحويل
    setStatusMessage({ 
      type: 'success', 
      message: 'جارٍ فتح تطبيق البريد الإلكتروني الخاص بك... يرجى إرسال رسالتك.' 
    });
    
    // ملاحظة: لإرسال النموذج فعلياً، يجب عدم استخدام e.preventDefault() 
    // إذا كنتِ تريدين استخدام mailto:
    
    // إذا كنتِ تفضلين طريقة تنظيف النموذج يدوياً بعد الإرسال:
    // const form = e.target;
    // form.reset();
  };

  return (
    <section className="section-padding" id="contact">
      <div className="container">
        <h2 className="section-title">تواصل معنا</h2>
        
        <div className="contact-form-wrapper">
          <p style={{ textAlign: 'center', marginBottom: '1.5rem', color: 'var(--color-text-muted)' }}>
            نحن متحمسون للعمل على مشروعك القادم. يرجى ملء النموذج، وسيتم تحويلك إلى بريدك الإلكتروني.
          </p>

          {/* رسالة الحالة (نجاح/خطأ) */}
          {statusMessage.message && (
            <div className={statusMessage.type === 'success' ? 'status-success' : 'status-error'}>
              {statusMessage.message}
            </div>
          )}

          {/* === 💡 ملاحظة مهمة جداً: استخدام mailto: ===
            
            1. action="mailto:contact@nadiyalabs.com": سيفتح عميل البريد الإلكتروني.
            2. method="post" & encType="text/plain": ضروريان لجعل mailto: يقرأ حقول النموذج.
            3. لا يتم استخدام JavaScript هنا لمنع الإرسال.
          */}
          <form 
            action="mailto:contact@nadiyalabs.com" 
            method="post" 
            encType="text/plain" 
            onSubmit={handleSubmit}
          >
            <div className="form-field">
              <label htmlFor="name">الاسم الكريم</label>
              <input type="text" id="name" name="الاسم" required />
            </div>

            <div className="form-field">
              <label htmlFor="email">البريد الإلكتروني</label>
              <input type="email" id="email" name="البريد الإلكتروني" required />
            </div>
            
            <div className="form-field">
              <label htmlFor="subject">الموضوع</label>
              <input type="text" id="subject" name="الموضوع" required />
            </div>

            <div className="form-field">
              <label htmlFor="message">الرسالة</label>
              <textarea id="message" name="الرسالة" rows="5" required></textarea>
            </div>

            <button type="submit" className="cta-button" style={{ width: '100%', marginTop: '1rem' }}>
              إرسال الرسالة
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;