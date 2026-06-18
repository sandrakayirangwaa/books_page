import { items } from "./data";
import Hero from "./components/Hero";
import CardGrid from "./components/CardGrid";

export default function Home() {
  return (
    <div style={{ backgroundColor: '#1c241f', minHeight: '100vh', color: '#f8fafc' }}>
    <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '48px 24px' }}>
      <Hero
        title="The Boundless Page"
        tagline="Find your next book."
      />
      <CardGrid items={items} />
    </main>
     </div>
  );
}

      
