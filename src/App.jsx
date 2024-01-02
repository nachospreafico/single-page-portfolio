import Contact from "./components/Contact";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="relative">
      <NavBar />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
      <NavBar bg={"[#242424]"} />
    </div>
  );
}

export default App;
