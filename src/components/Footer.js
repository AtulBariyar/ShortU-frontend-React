export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer" id="about">
      <div className="footer-content">
        <div className="footer-section">
          <h3>About Us</h3>
          <p className="footer-about">
           shortU quickly converts long URLs into short, shareable links. Enjoy customizable links, real-time analytics, and a user-friendly interface. Simplify your sharing and track your link performance effortlessly.
          </p>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <nav className="footer-links">
            <a href="#navbar">Back to Top</a>
            <a href="#shortner">Services</a>
            <a href="#features">Analyse</a>
          </nav>
        </div>
        <div className="footer-section">
          <h3>Connect</h3>
          <div className="social-links">
            <a rel="noreferrer" href="https://github.com/AtulBariyar" target="_blank">
              <i className="fas fa-globe"></i>
                </a>
            <a rel="noreferrer" href="https://github.com/AtulBariyar" target="_blank">
              <i className="fab fa-github"></i>
            </a>
            
            <a rel="noreferrer" href="https://www.linkedin.com/in/atulbariyar/" target="_blank">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
          <div className="contact-links">
            <a
              href="mailto:atulbariyar@gmail.com"
              style={{ color: "#2d3748", textDecoration: "none" }}
            >
              <i className="fas fa-envelope"></i> atulbariyar@gmail.com
            </a>
            {/* <a
              href="tel:+1234567890"
              style={{ color: "#2d3748", textDecoration: "none" }}
            >
              <i className="fas fa-phone"></i> +1 (234) 567-890
            </a> */}
          </div>
        </div>
      </div>
      <div className="copyright">© {year} ShortU. All rights reserved.</div>
    </footer>
  );
  
}
