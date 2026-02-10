import { ImageWithFallback } from '../components/figma/ImageWithFallback';

interface Maker {
  id: number;
  name: string;
  craft: string;
  location: string;
  image: string;
  story: string;
  specialty: string;
  signature: string;
}

const makers: Maker[] = [
  {
    id: 1,
    name: 'Elena Martinez',
    craft: 'Founder & Creative Director',
    location: 'Williamsburg, Brooklyn',
    image: 'https://images.pexels.com/photos/7679464/pexels-photo-7679464.jpeg',
    story: 'Originally from Peru, Elena Martinez founded Aurelia in Williamsburg as a sanctuary for intentional design. With fifteen years of textile expertise, she develops signature organic linen apparel and hand-finished accessories using sustainable practices. Elena\'s mission centers on connection, uniting a global collective of artists to ensure every piece tells a story of collaborative craft. From her vintage loom, she curates collections that bridge her Peruvian heritage with Brooklyn\'s independent maker spirit.',
    specialty: 'Organic Linen Apparel, Hand-finished Accessories',
    signature: 'Elena Martinez',
  },
  {
    id: 2,
    name: 'Marcus Chen',
    craft: 'Leather Artisan',
    location: 'Greenpoint, Brooklyn',
    image: 'https://images.pexels.com/photos/9775687/pexels-photo-9775687.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    story: 'Marcus discovered leatherworking during a trip to Florence and never looked back. His Greenpoint workshop smells of aged leather and beeswax, where he handcrafts every bag, belt, and accessory using vegetable-tanned leather from ethical tanneries. A former architect, he brings precision and geometry to organic materials. He believes in creating pieces that improve with age, developing a rich patina that tells the story of their owner\'s journey.',
    specialty: 'Leather Totes, Crossbody Bags, Belts',
    signature: 'M. Chen',
  },
  {
    id: 3,
    name: 'Yuki Tanaka',
    craft: 'Ceramic Artist',
    location: 'Bushwick, Brooklyn',
    image: 'https://images.unsplash.com/photo-1753164726518-8103a0d4c7f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWlsaW5nJTIwZmVtYWxlJTIwY2VyYW1pY3MlMjBwb3R0ZXIlMjBzdHVkaW98ZW58MXx8fHwxNzcwMzQ2NDIxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    story: 'Yuki\'s ceramics studio occupies a converted industrial space where she throws, glazes, and fires all of our homeware pieces. Trained in traditional Japanese pottery before moving to Brooklyn, she merges wabi-sabi philosophy with contemporary minimalism. Her work celebrates imperfection - slight asymmetries and organic glazes that make each bowl, vase, and dinnerware piece truly one-of-a-kind. She fires her kiln every full moon, a ritual she\'s maintained for over a decade.',
    specialty: 'Artisan Bowls, Sculptural Vases, Dinnerware Sets',
    signature: 'Yuki T.',
  },
  {
    id: 4,
    name: 'James Patterson',
    craft: 'Master Tailor',
    location: 'Williamsburg, Brooklyn',
    image: 'https://images.pexels.com/photos/6322362/pexels-photo-6322362.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    story: 'A third-generation tailor, James learned his craft at his grandfather\'s side in South Carolina before bringing his skills to Brooklyn. His atelier in Williamsburg hums with vintage Singer machines, where he constructs our tailored blazers, coats, and structured pieces. He sources deadstock and organic fabrics, giving new life to forgotten materials. Every garment receives hand-finished details - bound buttonholes, pick-stitched lapels - techniques rarely seen in modern production. For James, tailoring is about honoring the body and the cloth equally.',
    specialty: 'Tailored Blazers, Wool Coats, Structured Jackets',
    signature: 'J. Patterson',
  },
  {
    id: 5,
    name: 'Priya Sharma',
    craft: 'Textile Weaver',
    location: 'Park Slope, Brooklyn',
    image: 'https://images.pexels.com/photos/12993944/pexels-photo-12993944.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    story: 'Priya\'s Park Slope studio houses three floor looms where she handweaves our most special textiles - scarves, wraps, and home fabrics. Growing up in India surrounded by master weavers, she learned traditional techniques before studying textile design in London. Now she blends heritage knowledge with contemporary sensibility, creating pieces that feel both timeless and modern. The rhythmic clacking of her loom can be heard from the street, a meditative soundtrack to her days. She works exclusively with natural fibers and employs zero-waste techniques.',
    specialty: 'Hand-rolled Silk Scarves, Woven Textiles, Throws',
    signature: 'Priya S.',
  },
  {
    id: 6,
    name: 'Daniel Osei',
    craft: 'Woodworker',
    location: 'Dumbo, Brooklyn',
    image: 'https://images.pexels.com/photos/17170916/pexels-photo-17170916.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    story: 'Daniel\'s woodworking shop sits beneath the Manhattan Bridge, where he handcrafts our wooden homeware pieces and furniture. A former carpenter who specialized in historic restoration, he now creates contemporary pieces using reclaimed wood from demolished Brooklyn buildings. Each cutting board, stool, and shelf tells a story of the borough\'s industrial past reimagined for modern life. He uses traditional joinery methods - no nails or screws - and finishes everything with food-safe oils. His hands tell the story of decades spent shaping wood into objects of beauty and utility.',
    specialty: 'Handcrafted Wood Stools, Shelving, Kitchen Objects',
    signature: 'D. Osei',
  },
  {
    id: 7,
    name: 'Sofia Moreno',
    craft: 'Jewelry Designer',
    location: 'Cobble Hill, Brooklyn',
    image: 'https://images.unsplash.com/photo-1631273553464-7595e1a5b68d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWlsaW5nJTIwZmVtYWxlJTIwamV3ZWxyeSUyMG1ha2VyJTIwYXJ0aXNhbnxlbnwxfHx8fDE3NzAzNDY0MjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    story: 'Sofia creates all of our jewelry pieces in her intimate Cobble Hill studio, where she works primarily in recycled metals and ethically sourced stones. A former gallery owner, she transitioned to making jewelry as a way to create wearable art accessible to more people. Her designs celebrate simplicity - delicate chains, minimal rings, sculptural earrings that complement rather than compete. She hand-forges each piece using ancient metalsmithing techniques, and no two items are exactly alike. Her workspace overlooks a community garden, and she often brings wildflowers to her bench for inspiration.',
    specialty: 'Handmade Jewelry Sets, Minimalist Accessories',
    signature: 'Sofia M.',
  },
];

export const Makers = () => {
  return (
    <div className="w-full">
      {/* Header Section */}
      <section className="w-full bg-[#F7F5F2] py-20 px-8 border-b border-[#2B2B2B]/10">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <p 
              className="mb-4"
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '11px',
                letterSpacing: '3px',
                textTransform: 'uppercase',
                color: '#C75B3A',
                fontWeight: 500,
              }}
            >
              Behind the Craft
            </p>
            <h1 
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                fontWeight: 500,
                lineHeight: 1.15,
                color: '#2B2B2B',
                letterSpacing: '-0.02em',
                marginBottom: '1.5rem',
              }}
            >
              Meet Our Makers
            </h1>
            <p 
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '17px',
                fontWeight: 300,
                color: '#4A5568',
                lineHeight: 1.8,
                letterSpacing: '0.3px',
                maxWidth: '600px',
              }}
            >
              Every piece in our collection is crafted by skilled artisans working in studios 
              across Brooklyn. These are the hands, hearts, and minds behind the objects you bring 
              into your life. Each maker brings decades of experience, a commitment to sustainable 
              practices, and an unwavering dedication to their craft.
            </p>
          </div>
        </div>
      </section>

      {/* Makers Grid */}
      <section className="w-full bg-[#F7F5F2] py-16 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-20">
            {makers.map((maker, index) => (
              <div 
                key={maker.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Image */}
                <div 
                  className={`relative ${index % 2 === 1 ? 'lg:order-2' : ''}`}
                  style={{ aspectRatio: '4/5' }}
                >
                  <ImageWithFallback
                    src={maker.image}
                    alt={maker.name}
                    className="w-full h-full object-cover"
                    style={{
                      filter: 'saturate(0.9) contrast(1.05)',
                    }}
                  />
                  {/* Grain overlay */}
                  <div 
                    className="absolute inset-0 pointer-events-none opacity-20"
                    style={{
                      backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
                    }}
                  />
                </div>

                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <p 
                    className="mb-2"
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '11px',
                      letterSpacing: '2.5px',
                      textTransform: 'uppercase',
                      color: '#C75B3A',
                      fontWeight: 500,
                    }}
                  >
                    {maker.craft}
                  </p>
                  <h2 
                    className="mb-2"
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: 'clamp(2rem, 4vw, 2.5rem)',
                      fontWeight: 500,
                      lineHeight: 1.2,
                      color: '#2B2B2B',
                      letterSpacing: '-0.02em',
                    }}
                  >
                    {maker.name}
                  </h2>
                  <p 
                    className="mb-6"
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '13px',
                      letterSpacing: '1.5px',
                      textTransform: 'uppercase',
                      color: '#4A5568',
                      fontWeight: 400,
                    }}
                  >
                    {maker.location}
                  </p>
                  <p 
                    className="mb-6"
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '15px',
                      fontWeight: 300,
                      lineHeight: 1.9,
                      color: '#4A5568',
                      letterSpacing: '0.3px',
                    }}
                  >
                    {maker.story}
                  </p>
                  
                  {/* Specialty */}
                  <div className="border-t border-[#2B2B2B]/10 pt-6">
                    <p 
                      className="mb-2"
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '10px',
                        letterSpacing: '2px',
                        textTransform: 'uppercase',
                        color: '#4A5568',
                        fontWeight: 500,
                      }}
                    >
                      Specializes In
                    </p>
                    <p 
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '14px',
                        fontWeight: 400,
                        color: '#2B2B2B',
                        letterSpacing: '0.3px',
                      }}
                    >
                      {maker.specialty}
                    </p>
                    
                    {/* Signature */}
                    <div className="mt-6">
                      <p 
                        style={{
                          fontFamily: 'var(--font-script)',
                          fontSize: '28px',
                          color: '#C75B3A',
                        }}
                      >
                        {maker.signature}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="w-full bg-white py-20 px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h3 
            className="mb-6"
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(1.75rem, 3vw, 2.25rem)',
              fontWeight: 500,
              lineHeight: 1.3,
              color: '#2B2B2B',
              letterSpacing: '-0.01em',
            }}
          >
            When you choose Aurelia, you're choosing people
          </h3>
          <p 
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '15px',
              fontWeight: 300,
              lineHeight: 1.9,
              color: '#4A5568',
              letterSpacing: '0.3px',
            }}
          >
            Every purchase directly supports independent artisans and their families. You're not 
            just buying a product - you're investing in craft traditions, sustainable practices, 
            and the creative economy of Brooklyn. Thank you for valuing the hands that make.
          </p>
        </div>
      </section>
    </div>
  );
};