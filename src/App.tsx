import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Education } from "./components/Education";
import { Certificates } from "./components/Certificates";
import { Services } from "./components/Services";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Toaster } from "sonner";

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground bg-gradient">
      <Toaster position="bottom-right" theme="dark" richColors />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Certificates />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
