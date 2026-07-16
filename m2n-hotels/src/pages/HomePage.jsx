import Hero from '../components/Hero';
import Discover from '../components/Discover';
import Welcome from '../components/Welcome';

export default function HomePage() {
  const handleExplore = () => {
    const el = document.getElementById('discover');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="bg-background min-h-screen">
      <Hero />
      <div id="discover">
        <Discover />
      </div>
      <Welcome onExplore={handleExplore} />
    </main>
  );
}
