import About from "./section/About";
import Contacts from "./section/Contacts";
import Footer from "./section/Footer";
import Header from "./section/Header";
import Hero from "./section/Hero";
import Services from "./section/Services";
import Portfolio from "./section/Portfolio";
import Working from "./section/Working";
import Testimonials from "./section/Testimonials";

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Working />
      <Testimonials />
      <Contacts />
      <Footer />
    </>
  );
};

export default App;
