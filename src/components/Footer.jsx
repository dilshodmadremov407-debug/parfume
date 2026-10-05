const YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <span className="logo-text">
            SARVAR <em>PARFUME</em>
          </span>
          <p className="muted">Premium atir va xushbo'y mahsulotlar do'koni.</p>
        </div>
        <nav className="footer-links">
          <a href="#home">Bosh sahifa</a>
          <a href="#products">Mahsulotlar</a>
          <a href="#about">Biz haqimizda</a>
          <a href="#contact">Bog'lanish</a>
        </nav>
        <p className="muted copy">© {YEAR} Sarvar Parfume. Barcha huquqlar himoyalangan.</p>
      </div>
    </footer>
  );
}
