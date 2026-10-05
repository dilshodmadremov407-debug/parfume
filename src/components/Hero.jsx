import Bottle from "./Bottle.jsx";

const stats = [
  { value: "12+", label: "Yillik tajriba" },
  { value: "5 000+", label: "Xursand mijoz", labelId: "stat-clients" },
  { value: "100%", label: "Original mahsulot" },
];

const features = [
  {
    title: "100% Original",
    text: "Har bir shisha zavod sertifikati bilan tekshiriladi. Soxta mahsulot bizga tegmaydi.",
  },
  {
    title: "Frantsuz Parfumografiyasi",
    text: "Ishonchli tabiiy ingredientlar va yillik tajribaga asoslangan retseptlar.",
  },
  {
    title: "Tez Yetkazib Berish",
    text: "Toshkent bo'ylab 1 kunda, O'zbekiston bo'ylab 2–3 kunda yetkazib beramiz.",
  },
];

export default function Hero() {
  return (
    <>
      <section id="home" className="hero">
        <div className="container hero-inner">
          <div className="hero-copy">
            <p className="eyebrow">Est. 2012 &nbsp;•&nbsp; Toshkent</p>
            <h1 className="hero-title">
              Sarvar <span className="gold-text">Parfume</span>
              <br />
              <em>Ishq hidi</em>
            </h1>
            <p className="hero-lead">
              Dunyodagi mashhur brendlar va o'ziga xos eksklyuziv aralashmalar.
              Har bir shisha — sizga maxsus tanlangan, uzoq muddatli hid.
            </p>
            <div className="hero-actions">
              <a href="#products" className="btn btn-solid">
                Mahsulotlarni ko'rish
              </a>
              <a href="#contact" className="btn">
                Bog'lanish
              </a>
            </div>
            <div className="hero-stats">
              {stats.map((s) => (
                <div key={s.label} className="stat">
                  <strong id={s.labelId}>{s.value}</strong>
                  <span>{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-visual" aria-hidden="true">
            <div className="glow" />
            <div className="bottle-main">
              <Bottle tone="gold" name="Royal" />
            </div>
            <div className="bottle-side left">
              <Bottle tone="black" name="Black" />
            </div>
            <div className="bottle-side right">
              <Bottle tone="rose" name="Rose" />
            </div>
            <div className="ring r1" />
            <div className="ring r2" />
          </div>
        </div>
      </section>

      <section id="about" className="features">
        <div className="container">
          <p className="eyebrow reveal">Nima bizni ajratib turadi</p>
          <h2 className="section-title reveal">
            Premium sifat — <em>oddiy qatlamda emas</em>
          </h2>
          <div className="feature-grid">
            {features.map((f, i) => (
              <article
                key={f.title}
                className="feature reveal"
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <span className="feature-num">0{i + 1}</span>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
