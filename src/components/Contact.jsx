import { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", msg: "" });

  const onSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", phone: "", msg: "" });
    setTimeout(() => setSent(false), 4000);
  };

  const field = (k) => ({
    value: form[k],
    onChange: (e) => setForm({ ...form, [k]: e.target.value }),
  });

  return (
    <section id="contact" className="contact">
      <div className="container contact-inner">
        <div className="contact-info reveal">
          <p className="eyebrow">Bog'lanish</p>
          <h2 className="section-title">
            Biz bilan <em>murojaat qiling</em>
          </h2>
          <p className="section-lead">
            Savollaringiz bormi? Maslahat kerakmi? Jamoamiz sizga yordam berishdan
            xursand bo'ladi. Ish vaqti 09:00 dan 22:00 gacha.
          </p>

          <ul className="info-list">
            <li>
              <span className="ico">⌖</span>
              <div>
                <strong>Manzil</strong>
                <p>Toshkent sh., Amir Temur ko'chasi 24, "Sarvar" binosi</p>
              </div>
            </li>
            <li>
              <span className="ico">☎</span>
              <div>
                <strong>Telefon</strong>
                <a href="tel:+998901234567">+998 90 123 45 67</a>
              </div>
            </li>
            <li>
              <span className="ico">✉</span>
              <div>
                <strong>Email</strong>
                <a href="mailto:sarvarparfume@gmail.com">sarvarparfume@gmail.com</a>
              </div>
            </li>
            <li>
              <span className="ico">◷</span>
              <div>
                <strong>Ish vaqti</strong>
                <p>Dush–Shan, 09:00 – 22:00</p>
              </div>
            </li>
          </ul>

          <div className="socials">
            {["Instagram", "Telegram", "Facebook"].map((s) => (
              <a key={s} href="#contact" className="social">
                {s}
              </a>
            ))}
          </div>
        </div>

        <form className="form reveal" onSubmit={onSubmit}>
          <h3>Xabar yuboring</h3>
          <label>
            Ismingiz
            <input required placeholder="Ismingizni kiriting" {...field("name")} />
          </label>
          <label>
            Telefon raqami
            <input required placeholder="+998 __ ___ __ __" {...field("phone")} />
          </label>
          <label>
            Xabaringiz
            <textarea
              rows="4"
              placeholder="Qanday atir qidiryapsiz?"
              {...field("msg")}
            />
          </label>
          <button type="submit" className="btn btn-solid">
            Yubish
          </button>
          {sent && <p className="success">Xabaringiz qabul qilindi. Tez orada aloqa qilamiz.</p>}
        </form>
      </div>
    </section>
  );
}
