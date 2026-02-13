import React from 'react';
import Navbar from './components/Navbar';
import InteractiveBackground from './components/InteractiveBackground';
import ModernHero from './components/ModernHero';
import CategorySection from './components/CategorySection';
import AboutSection from './components/About';
import Footer from './components/Footer';
import { categories, getVisualizersByCategory } from './data/visualizers';

function App() {
  // Update document title
  React.useEffect(() => {
    document.title = 'AlgoViz - Algorithm Visualizer Collection';

    // Update the favicon (optional)
    const favicon = document.querySelector('link[rel="icon"]') as HTMLLinkElement;
    if (favicon) {
      favicon.href = '/favicon.ico';
    }
  }, []);

  return (
    <div className="min-h-screen bg-transparent overflow-x-hidden">
      <Navbar />
      <InteractiveBackground />
      <ModernHero />

      <main id="visualizers-section" className="relative z-10 container mx-auto px-4 py-20">
        {categories.map((category, index) => (
          <CategorySection
            key={category.id}
            id={category.id}
            title={category.name}
            visualizers={getVisualizersByCategory(category.id as any)}
            index={index}
          />
        ))}

        <AboutSection />
      </main>

      <Footer />
    </div>
  );
}

export default App;