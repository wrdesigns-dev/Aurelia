import { ImageWithFallback } from './figma/ImageWithFallback';
import { Link } from 'react-router';

interface ArtisanSpotlightProps {
  artisanName: string;
  artisanTitle: string;
  image: string;
  story: string;
  location: string;
}

export const ArtisanSpotlight = ({
  artisanName,
  artisanTitle,
  image,
  story,
  location,
}: ArtisanSpotlightProps) => {
  return (
    <section className="w-full bg-[#F7F5F2] py-20 px-8">
      <div className="max-w-7xl mx-auto">
        {/* 60/40 Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          {/* Left: Large Grainy Photo (60%) */}
          <div className="lg:col-span-3">
            <div className="relative aspect-[4/5] bg-gray-200 overflow-hidden">
              <ImageWithFallback
                src={image}
                alt={`${artisanName} at work`}
                className="w-full h-full object-cover grayscale opacity-90"
                style={{
                  filter: 'contrast(1.1) brightness(0.95)',
                  transform: 'scaleX(-1)',
                }}
              />
              {/* Grain overlay effect */}
              <div 
                className="absolute inset-0 pointer-events-none opacity-20"
                style={{
                  backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
                }}
              />
            </div>
          </div>

          {/* Right: Tight Vertical Column (40%) */}
          <div className="lg:col-span-2 flex flex-col justify-center space-y-8">
            {/* Label */}
            <div>
              <p 
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '11px',
                  letterSpacing: '3px',
                  textTransform: 'uppercase',
                  color: '#C75B3A',
                  fontWeight: 500,
                }}
              >
                Artisan Spotlight
              </p>
            </div>

            {/* Handwritten Signature Name */}
            <div>
              <h2 
                style={{
                  fontFamily: 'var(--font-script)',
                  fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
                  color: '#2B2B2B',
                  lineHeight: 1.2,
                  marginBottom: '0.5rem',
                }}
              >
                {artisanName}
              </h2>
              <p 
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '13px',
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  color: '#4A5568',
                  fontWeight: 500,
                }}
              >
                {artisanTitle}
              </p>
            </div>

            {/* Story */}
            <div>
              <p 
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '15px',
                  fontWeight: 300,
                  lineHeight: 1.8,
                  color: '#2B2B2B',
                  letterSpacing: '0.3px',
                }}
              >
                {story}
              </p>
            </div>

            {/* Location Tag */}
            <div>
              <span 
                className="inline-block px-4 py-2 bg-white/60 backdrop-blur-sm"
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '11px',
                  letterSpacing: '1px',
                  color: '#4A5568',
                  border: '1px solid rgba(0,0,0,0.1)',
                }}
              >
                📍 {location}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};