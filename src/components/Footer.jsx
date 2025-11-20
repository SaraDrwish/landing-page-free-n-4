import React from 'react';

const TwitterIcon = () => (
  <svg fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" width="24" height="24">
    <path d="M18.244 2.25h3.308l-7.227 8.261 8.529 11.455h-6.84l-5.461-7.075-6.666 7.075h-3.308l7.636-8.71L.905 2.25h7.323l4.376 5.869 5.64-5.869zM19.49 19.535l-1.929-2.094-4.874-5.234-5.694-6.118H2.934L11.562 14.7H13.62L19.49 19.535z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" width="24" height="24">
    <path d="M20.447 20.452h-3.538v-5.594c0-1.339-.335-2.528-1.879-2.528-1.428 0-2.035 1.054-2.035 2.528v5.594h-3.537V9.77H13.91v1.543h.05c.582-.934 1.76-2.28 3.967-2.28 2.584 0 4.542 1.638 4.542 5.105v6.234zM5.531 8.232c-1.127 0-1.896-.777-1.896-1.776 0-.994.75-1.77 1.873-1.77.108 0 .216.01.32.028V3.5h.053c.594-.954 1.83-2.03 3.498-2.03 2.552 0 4.5 1.577 4.5 4.966v6.234h-3.537V9.77h.05c-.582-.934-1.76-2.28-3.967-2.28z" />
  </svg>
);

const InstagramIcon = () => (
  <svg fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" width="24" height="24">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.84 2.87c.9 0 1.63.73 1.63 1.63v8.8c0 .9-.73 1.63-1.63 1.63H8.16c-.9 0-1.63-.73-1.63-1.63v-8.8c0-.9.73-1.63 1.63-1.63h7.68zm-3.84 1.34c-2.31 0-4.18 1.87-4.18 4.18s1.87 4.18 4.18 4.18 4.18-1.87 4.18-4.18-1.87-4.18-4.18-4.18zm0 7.37c-1.76 0-3.19-1.43-3.19-3.19s1.43-3.19 3.19-3.19 3.19 1.43 3.19 3.19-1.43 3.19-3.19 3.19zm4.27-7.79c-.58 0-1.05-.47-1.05-1.05s.47-1.05 1.05-1.05 1.05.47 1.05 1.05-.47 1.05-1.05 1.05z" />
  </svg>
);

const Footer = () => (
  <>

   
    <footer className="footer">
      <div className="container footer-content">
        
        <div className="social-links">
          {/* تم استبدال النص بالأيقونات */}
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter / X">
            <TwitterIcon />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <LinkedInIcon />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <InstagramIcon />
          </a>
        </div>
        <div className="hidden-filler"></div>
        <div className="footer-links">
          <a href="/privacy" aria-label="سياسة الخصوصية">سياسة الخصوصية</a>
        </div>
        
      </div>
    </footer>

     <div className="pre-footer section-white">
      <div className="container pre-footer-content">
        <p>&copy; {new Date().getFullYear()} Nadiya Labs. جميع الحقوق محفوظة.</p>
      </div>
    </div>
    {/* =================================================== */}


  </>
);

export default Footer;