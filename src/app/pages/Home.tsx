import { GhostButton } from '../components/GhostButton';
import { ProductCard } from '../components/ProductCard';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { ArtisanSpotlight } from '../components/ArtisanSpotlight';
import { CommunityGrid } from '../components/CommunityGrid';
import { TheDropCounter } from '../components/TheDropCounter';
import { NeighborhoodMap } from '../components/NeighborhoodMap';
import { Link } from 'react-router';
import { useEffect, useState } from 'react';

export const Home = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  // Handle scrolling to hash anchor on page load
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      // Small delay to ensure the DOM is fully rendered
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, []);

  const featuredProducts = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1721134619759-223b27177bb5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaW5lbiUyMG92ZXJzaXplZCUyMHNoaXJ0JTIwbWluaW1hbCUyMGJlaWdlfGVufDF8fHx8MTc3MDMyMjAyM3ww&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Linen Overshirt',
      price: '385',
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1574201635302-388dd92a4c3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXNobWVyZSUyMHN3ZWF0ZXIlMjByaWJiZWQlMjBtaW5pbWFsfGVufDF8fHx8MTc3MDMyMjAyNHww&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Ribbed Cashmere Sweater',
      price: '595',
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1637759292654-a12cb2be085e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWF0aGVyJTIwdG90ZSUyMGJhZyUyMHZhY2hldHRhJTIwbWluaW1hbHxlbnwxfHx8fDE3NzAzMjIwMjV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Vachetta Leather Tote',
      price: '425',
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1614001247947-17f562d6801b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwY2VyYW1pYyUyMHZhc2UlMjB3aGl0ZSUyMGJhY2tncm91bmR8ZW58MXx8fHwxNzcwMzIxMzQ5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Sculptural Vase',
      price: '205',
    },
  ];

  return (
    <div className="w-full">
      {/* The Drop Counter */}
      <TheDropCounter 
        batchNumber="04"
        totalProduced={50}
        remaining={12}
      />

      {/* Hero Section - Sunny Loft Studio */}
      <section className="relative w-full h-screen bg-[#2B2B2B] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 opacity-70">
          <img
            src="https://www.dropbox.com/scl/fi/4f8xqkzkm8zla66xa4m2p/aurelia-sstore.jpeg?rlkey=db1fz70ioiw0w5z0vaw6qay4u&st=k4a2ei6g&dl=1"
            alt="Aurelia Brooklyn Studio"
            className="w-full h-full object-cover transition-opacity duration-1000"
            style={{ opacity: imageLoaded ? 1 : 0 }}
            onLoad={() => setImageLoaded(true)}
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/30" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-8 text-center">
          <h1 
            style={{ 
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(3.5rem, 9vw, 7rem)',
              fontWeight: 500,
              lineHeight: 1.1,
              color: '#FFFFFF',
              letterSpacing: '-0.02em',
              marginBottom: '2rem',
            }}
          >
            Crafted in Brooklyn,
            <br />
            Made for Living
          </h1>
          
          <p 
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '14px',
              fontWeight: 400,
              letterSpacing: '2.5px',
              color: '#F7F5F2',
              lineHeight: 1.8,
              textTransform: 'uppercase',
              marginBottom: '3rem',
            }}
          >
            Artisanal apparel & curated objects from independent makers
          </p>

          <Link to="/apparel">
            <GhostButton variant="primary">
              Explore The Collection
            </GhostButton>
          </Link>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="w-full bg-white py-24 px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 500,
                color: '#2B2B2B',
                marginBottom: '1rem',
              }}
            >
              New Arrivals
            </h2>
            <p 
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '11px',
                letterSpacing: '3px',
                color: '#4A5568',
                textTransform: 'uppercase',
              }}
            >
              Batch 04 — Limited Edition
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                image={product.image}
                title={product.title}
                price={product.price}
              />
            ))}
          </div>

          {/* View All Link */}
          <div className="text-center">
            <Link to="/apparel">
              <GhostButton variant="secondary">
                View All Products
              </GhostButton>
            </Link>
          </div>
        </div>
      </section>

      {/* Artisan Spotlight */}
      <ArtisanSpotlight
        artisanName="Elena Martinez"
        artisanTitle="Founder & Creative Director"
        image="https://images.pexels.com/photos/7679723/pexels-photo-7679723.jpeg"
        story="Peruvian-born Elena founded Aurelia from her Williamsburg studio as a haven for intentional craft. Specializing in organic linen and hand-finished accessories, she unites a global network of makers to create collections where sustainable practices meet collaborative artistry. Her work bridges heritage textile traditions with Brooklyn's independent spirit."
        location="Williamsburg, Brooklyn"
      />

      {/* Community Grid - "In the Wild" */}
      <section id="community-grid" className="w-full bg-white py-20 px-8">
        <CommunityGrid />
      </section>

      {/* Editorial Section */}
      <section className="w-full bg-[#F7F5F2] py-24 px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="aspect-[4/5] bg-gray-200 overflow-hidden">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1745282845903-b45b18979d9e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc2FuYWwlMjBjcmFmdHMlMjBtaW5pbWFsaXN0JTIwYWVzdGhldGljfGVufDF8fHx8MTc3MDMyMTM1MXww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Artisan Crafts"
              className="w-full h-full object-cover"
            />
          </div>
          
          <div>
            <h3 
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                fontWeight: 500,
                color: '#2B2B2B',
                letterSpacing: '-0.01em',
                lineHeight: 1.3,
                marginBottom: '1.5rem',
              }}
            >
              Made by Hand, Made to Last
            </h3>
            <p 
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '15px',
                fontWeight: 300,
                color: '#4A5568',
                lineHeight: 1.8,
                letterSpacing: '0.3px',
                marginBottom: '2rem',
              }}
            >
              Every piece in our collection comes from the hands of independent artisans 
              who see their work not as production, but as craft. These are the makers 
              who choose quality over quantity, who honor traditional techniques while 
              embracing modern sensibilities.
            </p>
            <Link to="/makers">
              <GhostButton variant="secondary">
                Meet Our Makers →
              </GhostButton>
            </Link>
          </div>
        </div>
      </section>

      {/* Neighborhood Map */}
      <NeighborhoodMap />
    </div>
  );
};