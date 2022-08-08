import { Footer } from "./components/ui/Footer";
import { NavbarMain } from "./components/ui/Navbar";
import { AboutUs } from "./page/AboutUs";
import { ContactUs } from "./page/ContactUs";
import { Logo } from "./page/Logo";
import { SocialMedia } from "./page/SocialMedia";

function App() {
  return (
    <div className="App">
      <section id="section0">
        <NavbarMain />
      </section>
      <section id="section1" className="section">
        <Logo />
      </section>
      <section id="section3" className="section">
        <AboutUs />
      </section>
      <section id="section6" className="section">
        <SocialMedia />
      </section>

      <section id="section7" className="section">
        <ContactUs />
      </section>
      <Footer />
    </div>
  );
}

export default App;
