import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'; // ✅ Added for routing
import { useTheme } from './hooks/useTheme';
import { ThemeToggle } from './components/ThemeToggle';
import { MobileNav } from './components/MobileNav';
import { LoadingScreen } from './components/LoadingScreen';
import { ScrollProgress } from './components/ScrollProgress';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { initGA, trackPageView } from './utils/analytics';
import JustPy from './pages/justpy'; // ✅ Default import


function App() {
  const { theme, toggleTheme } = useTheme();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Initialize Google Analytics
    initGA();
    trackPageView(window.location.pathname); // ✅ Tracks correct route
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return <LoadingScreen onLoadingComplete={handleLoadingComplete} />;
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">

      {/* ✅ Add routes */}
      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <ScrollProgress />
              <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
              <MobileNav theme={theme} />
              <Hero theme={theme} />
              <About />
              <Projects />
              <Skills />
              <Contact />
              <Footer />
            </>
          }
        />

        {/* ✅ New Gallery Page */}
        <Route path="/justpy" element={<JustPy />} />
        {/* ✅ Fallback Route */}
        <Route
          path="*"
          element={
            <div className="flex items-center justify-center min-h-screen">
              <h1 className="text-3xl text-gray-800 dark:text-gray-200">404 - Page Not Found</h1>
              <a href="/" className="ml-4 text-blue-500 hover:underline">Go to Home</a>
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
