import About from "./componets/About";
import Benefits from "./componets/Benefits";
import CommunityStats from "./componets/CommunityStats";
import CompanyLogos from "./componets/CompanyLogos";
import ContactCTA from "./componets/ContactCAT";
import Footer from "./componets/Footer";
import Hero from "./componets/Hero";
import Navbar from "./componets/Navbar";
import NewsletterBox from "./componets/NewsletterBox";
import Process from "./componets/Process";
import Reviews from "./componets/Reviews";
import ScrollProgress from "./componets/ScrollProgress";
import Testimonials from "./componets/Testimonials";

export default function App() {
  return (
    <div className="bg-black text-white font-sans">
      <ScrollProgress />
      <Navbar />
      <Hero />
      <Process />
      <Benefits />
      <CompanyLogos />
      <Reviews />
      <CommunityStats />
      <Testimonials />
      <About />
      <ContactCTA />
      <NewsletterBox />
      <Footer />
    </div>
  );
}
