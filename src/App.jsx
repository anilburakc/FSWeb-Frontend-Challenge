import { ThemeProvider } from './context/ThemeProvider';
import { LanguageProvider } from './context/LanguageProvider';
import Header from './components/Header';
import Switch from './components/Switch';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Profile from './components/Profile';

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen bg-white dark:bg-[#252128]">
          {/* Navigation Elements */}
          <div className="max-w-7xl mx-auto w-full">
            <Switch />
            <Header />
          </div>

          {/* Main Content */}
          <main className="pt-8 max-w-7xl mx-auto w-full">
            <Hero />
            <Skills />
            <Profile />
            <Projects />
          </main>

          <footer>
            <Contact />
          </footer>
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
