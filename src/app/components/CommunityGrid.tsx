import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Link } from 'react-router';

interface CommunityImage {
  id: number;
  image: string;
  productName: string;
  price: string;
  location: string;
}

export const CommunityGrid = () => {
  const communityImages: CommunityImage[] = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1703299713428-e558633e929d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBsaW5lbiUyMHNoaXJ0JTIwY2FzdWFsJTIwYnJvb2tseW58ZW58MXx8fHwxNzcwMzQxNjMwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      productName: 'Linen Overshirt',
      price: '$385',
      location: 'Williamsburg',
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1722929606881-a5110ebd871a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHdvbWFuJTIwY2FzaG1lcmUlMjBzd2VhdGVyJTIwY2FuZGlkfGVufDF8fHx8MTc3MDMzMzU4NHww&ixlib=rb-4.1.0&q=80&w=1080',
      productName: 'Cashmere Sweater',
      price: '$595',
      location: 'Park Slope',
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1712112187907-638d4ca339fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHNuZWFrZXJzJTIwY29tbXV0aW5nJTIwdXJiYW4lMjBjYW5kaWR8ZW58MXx8fHwxNzcwMzMzNTg0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      productName: 'Canvas Sneakers',
      price: '$195',
      location: 'Union Square',
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1760135434340-aed6b49c8ee1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFpbnklMjBmaWxtJTIwcGhvdG9ncmFwaHklMjBsaWZlc3R5bGUlMjBjYW5kaWR8ZW58MXx8fHwxNzcwMzIyNzM4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      productName: 'Wool Coat',
      price: '$895',
      location: 'Dumbo',
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1763550347178-8df49f8356c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBjYXN1YWwlMjBwYW50cyUyMHN0cmVldCUyMGNhbmRpZHxlbnwxfHx8fDE3NzAzMzM1ODV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      productName: 'Silk Trousers',
      price: '$465',
      location: 'Greenpoint',
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1760135434386-55bfc1576cbb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1cmJhbiUyMGxpZmVzdHlsZSUyMGNhbmRpZCUyMG1vbWVudCUyMGF1dGhlbnRpY3xlbnwxfHx8fDE3NzAzMjk1ODN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      productName: 'Linen Blazer',
      price: '$725',
      location: 'Red Hook',
    },
    {
      id: 7,
      image: 'https://images.pexels.com/photos/9522890/pexels-photo-9522890.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      productName: 'Cotton Tee',
      price: '$125',
      location: 'Bushwick',
    },
    {
      id: 8,
      image: 'https://images.unsplash.com/photo-1760624294504-211e763ee0fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGhvbGRpbmclMjBsZWF0aGVyJTIwdG90ZSUyMGJhZ3xlbnwxfHx8fDE3NzAzMzkzMjh8MA&ixlib=rb-4.1.0&q=80&w=1080',
      productName: 'Leather Tote',
      price: '$425',
      location: 'Brooklyn Heights',
    },
  ];

  return (
    <section className="w-full bg-white py-20 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 500,
              color: '#2B2B2B',
              marginBottom: '1rem',
            }}
          >
            In the Wild
          </h2>
          <p 
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '13px',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              color: '#4A5568',
            }}
          >
            Spotted around Brooklyn
          </p>
        </div>

        {/* 4-Column Square Grid with Zero Gutters */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
          {communityImages.map((item) => (
            <Link
              key={item.id}
              to={`/stories/${item.id}`}
              className="relative aspect-square overflow-hidden cursor-pointer group block"
            >
              <ImageWithFallback
                src={item.image}
                alt={item.productName}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                style={{
                  filter: 'saturate(0.85) contrast(1.05)',
                }}
              />

              {/* Grain overlay */}
              <div 
                className="absolute inset-0 pointer-events-none opacity-30"
                style={{
                  backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
                }}
              />

              {/* Location Pin Overlay */}
              <div className="absolute bottom-2 left-2">
                <span 
                  className="text-white text-[10px] px-2 py-1 bg-black/50 backdrop-blur-sm"
                  style={{
                    fontFamily: 'var(--font-mono)',
                  }}
                >
                  {item.location}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};