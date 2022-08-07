import { NavbarMain } from "./components/ui/Navbar";
import { ContactUs } from "./page/ContactUs";
import { Logo } from "./page/Logo";


function App() {
  return (
    <div className="App">
      <NavbarMain />
      <section className="section">
        <Logo />
      </section>
      <section className="section">
        <ContactUs />
      </section>
    </div>
  );
}

export default App;
