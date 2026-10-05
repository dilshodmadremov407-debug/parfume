import { useMemo, useState } from "react";
import { products, categories, formatPrice } from "../data.js";
import Bottle from "./Bottle.jsx";

export default function Products() {
  const [cat, setCat] = useState("Barchasi");
  const [query, setQuery] = useState("");

  const list = useMemo(() => {
    const q = query.trim().toLowerCase();
    return products.filter((p) => {
      const matchCat = cat === "Barchasi" || p.category === cat;
      const matchQ =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.brand.toLowerCase().includes(q) ||
        p.notes.join(" ").toLowerCase().includes(q);
      return matchCat && matchQ;
    });
  }, [cat, query]);

  return (
    <section id="products" className="products">
      <div className="container">
        <header className="section-head reveal">
          <div>
            <p className="eyebrow">Kolleksiya</p>
            <h2 className="section-title">
              Atir <em>kolleksiyasi</em>
            </h2>
          </div>
          <div className="tools">
            <div className="filters">
              {categories.map((c) => (
                <button
                  key={c}
                  className={`chip ${cat === c ? "active" : ""}`}
                  onClick={() => setCat(c)}
                >
                  {c}
                </button>
              ))}
            </div>
            <input
              className="search"
              type="search"
              value={query}
              placeholder="Atir izlash..."
              aria-label="Atir izlash"
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </header>

        {list.length === 0 ? (
          <p className="empty">Hech narsa topilmadi. Boshqa kalit so'z bilan urinib ko'ring.</p>
        ) : (
          <div className="grid">
            {list.map((p, i) => (
              <article
                key={p.id}
                className="card reveal"
                style={{ transitionDelay: `${(i % 4) * 90}ms` }}
              >
                <div className="card-media">
                  {p.badge && <span className="badge">{p.badge}</span>}
                  <Bottle tone={p.tone} name={p.name} />
                  <button className="quick" aria-label={`${p.name} mahsulotini savatga qo'shish`}>
                    +
                  </button>
                </div>
                <div className="card-body">
                  <span className="brand">{p.brand}</span>
                  <h3>{p.name}</h3>
                  <p className="desc">{p.desc}</p>
                  <div className="notes">
                    {p.notes.map((n) => (
                      <span key={n}>{n}</span>
                    ))}
                  </div>
                  <div className="card-foot">
                    <div className="price">
                      <strong>{formatPrice(p.price)}</strong>
                      {p.oldPrice && <del>{formatPrice(p.oldPrice)}</del>}
                    </div>
                    <span className={`stock ${p.stock === "Kam qoldi" ? "low" : ""}`}>
                      {p.stock} • {p.size}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
