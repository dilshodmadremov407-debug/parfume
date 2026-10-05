import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Products from "./components/Products.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import { useReveal, useScrolled } from "./hooks.js";
import "./App.css";

export default function App() {
  useReveal();
  useScrolled();

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Products />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
