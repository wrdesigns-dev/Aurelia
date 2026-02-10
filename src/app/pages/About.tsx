import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { InstagramIcon, PinterestIcon } from '../components/MonolineIcons';

export const About = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="w-full bg-[#F7F5F2] py-32 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(3rem, 6vw, 5rem)',
              fontWeight: 500,
              lineHeight: 1.15,
              color: '#2B2B2B',
              letterSpacing: '-0.02em',
              marginBottom: '4rem',
            }}
          >
            AN ARCHIVE
            <br />
            OF INTENTION.
          </h1>
        </div>
      </section>

      {/* Main Editorial Content */}
      <section className="w-full bg-white pb-24 px-8">
        <div className="max-w-3xl mx-auto">
          <div 
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '17px',
              fontWeight: 300,
              lineHeight: 2,
              color: '#4A5568',
              letterSpacing: '0.3px',
            }}
          >
            <p className="mb-8">
              Founded in the heart of Brooklyn, Aurelia is a quiet response to the noise 
              of the modern world. We believe that the objects we surround ourselves with 
              should be more than just possessions—they should be narratives of craftsmanship 
              and conduits of calm.
            </p>
            
            <p className="mb-8">
              Our collection is a living archive, curated with a rigorous eye for texture 
              and silhouette. From the drape of a hand-woven linen shirt to the weight of 
              a hand-thrown ceramic bowl, every piece in the Aurelia Collective is selected 
              to endure, designed to become a part of your home's history.
            </p>
            
            <p className="mb-0">
              Welcome to the archive. Welcome to Aurelia Brooklyn.
            </p>
          </div>
        </div>
      </section>

      {/* Image Grid Section */}
      <section className="w-full bg-white py-16 px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="aspect-[3/4] bg-gray-100 overflow-hidden">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1739134472568-f34f088eb7f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicm9va2x5biUyMGFydGlzYW4lMjB3b3Jrc2hvcCUyMGNyYWZ0c3xlbnwxfHx8fDE3NzAzMjEzODV8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Brooklyn Artisan Workshop"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-[3/4] bg-gray-100 overflow-hidden">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1719852255246-898f965e04e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJsZSUyMGNyYWZ0c21hbnNoaXAlMjBoYW5kcyUyMHBvdHRlcnl8ZW58MXx8fHwxNzcwMzIxMzg2fDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Sustainable Craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="w-full bg-[#F7F5F2] py-24 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {/* Value 1 */}
            <div className="text-center">
              <h3 
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.5rem',
                  fontWeight: 500,
                  color: '#2B2B2B',
                  letterSpacing: '-0.01em',
                  marginBottom: '1rem',
                }}
              >
                Craftsmanship
              </h3>
              <p 
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '14px',
                  fontWeight: 300,
                  color: '#4A5568',
                  lineHeight: 1.8,
                  letterSpacing: '0.3px',
                }}
              >
                Every piece is made by skilled artisans using time-honored techniques 
                passed down through generations.
              </p>
            </div>

            {/* Value 2 */}
            <div className="text-center">
              <h3 
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.5rem',
                  fontWeight: 500,
                  color: '#2B2B2B',
                  letterSpacing: '-0.01em',
                  marginBottom: '1rem',
                }}
              >
                Sustainability
              </h3>
              <p 
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '14px',
                  fontWeight: 300,
                  color: '#4A5568',
                  lineHeight: 1.8,
                  letterSpacing: '0.3px',
                }}
              >
                We source responsibly, prioritizing natural materials and ethical 
                production methods.
              </p>
            </div>

            {/* Value 3 */}
            <div className="text-center">
              <h3 
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.5rem',
                  fontWeight: 500,
                  color: '#2B2B2B',
                  letterSpacing: '-0.01em',
                  marginBottom: '1rem',
                }}
              >
                Timelessness
              </h3>
              <p 
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '14px',
                  fontWeight: 300,
                  color: '#4A5568',
                  lineHeight: 1.8,
                  letterSpacing: '0.3px',
                }}
              >
                Our aesthetic transcends trends, offering pieces designed to be 
                cherished for decades.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="w-full bg-white py-24 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 500,
              color: '#2B2B2B',
              letterSpacing: '-0.01em',
              lineHeight: 1.3,
              marginBottom: '2rem',
            }}
          >
            Join the Community
          </h2>
          <p 
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '15px',
              fontWeight: 300,
              color: '#4A5568',
              lineHeight: 1.8,
              letterSpacing: '0.3px',
              marginBottom: '3rem',
            }}
          >
            Follow along for behind-the-scenes stories, artisan features, and seasonal inspiration.
          </p>
          
          {/* Social Icons */}
          <div className="flex items-center justify-center gap-8">
            <a 
              href="#" 
              className="text-[#2B2B2B] hover:text-[#C75B3A] transition-colors duration-200"
              aria-label="Instagram"
            >
              <InstagramIcon size={24} />
            </a>
            <a 
              href="#" 
              className="text-[#2B2B2B] hover:text-[#C75B3A] transition-colors duration-200"
              aria-label="Pinterest"
            >
              <PinterestIcon size={24} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};