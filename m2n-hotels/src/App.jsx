import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Discover from './components/Discover';
import Welcome from './components/Welcome';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

function App() {
  const handleExploreClick = () => {
    const discoverSection = document.getElementById('discover');
    if (discoverSection) {
      discoverSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <CustomCursor />
      <Navbar />
      <main className="bg-background min-h-screen cursor-crosshair">
        <Hero />
        <div id="discover">
          <Discover />
        </div>
        <Welcome onExplore={handleExploreClick} />
        <Footer />
      </main>
    </>
  );
}

export default App;
