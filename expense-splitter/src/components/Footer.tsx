import "./Footer.css";

function Footer() {
  return (
    <div className="Footer">
    <footer className="app-footer">
      <p>Built by Raideep Singh</p>

      <div className="footer-links">
        <a
          href="https://github.com/raideepsinghpy"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        <span>•</span>
        <a
          href="https://www.linkedin.com/in/raideep-singh-60b99a271/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
      </div>
    </footer>
    </div>
  );
}

export default Footer;
