// src/components/Navbar.jsx
import React, { useState } from 'react';

const navLinks = [
  { name: 'الرئيسية', href: '#home' },
  { name: 'من نحن', href: '#about' },
  { name: 'خدماتنا', href: '#services' },
  { name: 'مميزاتنا', href: '#features' },
  { name: 'أعمالنا', href: '#portfolio' },
  { name: 'تواصل', href: '#contact' },
];

const Logo = () => (
  <a href="#home" className="logo-text">
    {/* SVG Placeholder */}
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7 21h2V7h4v14h2V7h4V5H7v16z" style={{ fill: 'var(--color-primary)' }}/> 
      <circle cx="21" cy="5" r="2" style={{ fill: 'var(--color-secondary)' }}/> 
    </svg>
    <span>Nadiya Labs</span>
  </a>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // حالة القائمة: مغلقة افتراضياً

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  // وظيفة لإغلاق القائمة بعد النقر على رابط (مهمة للموبايل)
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="container navbar-content">
        <Logo />
        
        {/* Desktop Links (يبقى كما هو) */}
        <div className="desktop-links">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="nav-link"
              aria-label={`الانتقال إلى قسم ${link.name}`}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className="cta-button"
            style={{ marginLeft: '1rem' }}
            aria-label="اطلب استشارة"
          >
            اطلب استشارة
          </a>
        </div>

        {/* --------------------------- */}
        {/* 👈 عنصر قائمة الموبايل الجديد */}
        {/* --------------------------- */}
        
        {/* زر التبديل (Hamburguer Icon) */}
        <button 
          className="menu-toggle"
          onClick={toggleMenu}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          {/* أيقونة X أو ☰ - نستخدم رموز ASCII للسرعة */}
          {isOpen ? '✕' : '☰'} 
        </button>
        
        {/* قائمة الموبايل الفعلية */}
        <div id="mobile-menu" className={`mobile-menu ${isOpen ? 'is-open' : ''}`}>
            {navLinks.map((link) => (
                <a 
                    key={link.name} 
                    href={link.href} 
                    className="mobile-nav-link"
                    onClick={closeMenu} // إغلاق المنيو عند النقر
                >
                    {link.name}
                </a>
            ))}
            {/* CTA داخل القائمة */}
            <a 
                href="#contact" 
                className="cta-button mobile-cta"
                onClick={closeMenu}
            >
                اطلب استشارة
            </a>
        </div>
        
      </div>
    </nav>
  );
};

export default Navbar;