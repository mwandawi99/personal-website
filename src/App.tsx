import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { WelcomeScreen } from './components/WelcomeScreen';
import { FloatingShapes } from './components/FloatingShapes';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { Experience } from './components/sections/Experience';
import { Projects } from './components/sections/Projects';
import { GitHubRepos } from './components/sections/GitHubRepos';
import { Contact } from './components/sections/Contact';

function App() {
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    if (showWelcome) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showWelcome]);

  return (
    <>
      <FloatingShapes />
      <AnimatePresence mode="wait">
        {showWelcome ? (
          <WelcomeScreen key="welcome" onComplete={() => setShowWelcome(false)} />
        ) : (
          <div key="content">
            <Navbar />
            <main>
              <Hero />
              <About />
              <Skills />
              <Experience />
              <Projects />
              <GitHubRepos />
              <Contact />
            </main>
            <Footer />
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
