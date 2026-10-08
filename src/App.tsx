import { useTheme } from './hooks/useTheme';
import { useScrollSpy } from './hooks/useScrollSpy';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/hero/Hero';
import { About } from './components/about/About';
import { Skills } from './components/skills/Skills';
import { Projects } from './components/projects/Projects';
import { Experience } from './components/experience/Experience';
import { Education } from './components/education/Education';
import { Approach } from './components/approach/Approach';
import { Contact } from './components/contact/Contact';
import { Footer } from './components/layout/Footer';

export function App() {
  const { theme, toggleTheme } = useTheme();

  const sectionIds = [
    'hero',
    'about',
    'skills',
    'projects',
    'experience',
    'education',
    'approach',
    'contact'
  ];

  const activeSection = useScrollSpy(sectionIds, 120);

  return (
    <div className="min-h-screen bg-[#080a0f] text-slate-100 flex flex-col font-sans transition-colors duration-200">
      {/* Top Navbar */}
      <Navbar
        theme={theme}
        onToggleTheme={toggleTheme}
        activeSection={activeSection}
      />

      {/* Main Content Flow */}
      <main id="main-content" className="flex-1 w-full overflow-x-hidden">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Approach />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
