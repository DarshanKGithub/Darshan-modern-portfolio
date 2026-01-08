import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Experience from "../components/Experience"
import ScrollProgress from "../components/ScrollProgress";
import PageTransition from "../components/PageTransition";

export default function Home() {
  return (
    <>
    <PageTransition>

    <ScrollProgress/>
      <Navbar />
      <Hero />
      <About />
      <Experience/>
      <Projects />
      <Contact />
      <Footer/>
    </PageTransition>
    </>
  );
}
