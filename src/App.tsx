import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import VisualizerGrid from './components/VisualizerGrid';
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
    <div className="min-h-screen bg-black overflow-x-hidden">
      <Navbar />
      <Hero />
      
      <main>
        {categories.map(category => (
          <VisualizerGrid 
            key={category.id}
            category={category.id}
            title={category.name}
            visualizers={getVisualizersByCategory(category.id as any)}
          />
        ))}
        
        <AboutSection />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;