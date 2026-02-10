import { useParams, Link } from 'react-router';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { GhostButton } from '../components/GhostButton';
import { useNavigate } from 'react-router';
import { useCart } from '../context/CartContext';
import { useState } from 'react';

interface Story {
  id: number;
  name: string;
  neighborhood: string;
  image: string;
  story: string;
  favoriteProduct: string;
  productPrice: string;
  quote: string;
}

const customerStories: Story[] = [
  {
    id: 1,
    name: 'Chris Chen',
    neighborhood: 'Williamsburg',
    image: 'https://images.unsplash.com/photo-1703299713428-e558633e929d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBsaW5lbiUyMHNoaXJ0JTIwY2FzdWFsJTIwYnJvb2tseW58ZW58MXx8fHwxNzcwMzQxNjMwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    story: `Chris has called Williamsburg home for the past seven years, sharing a sunlit third-floor apartment with his wife Maya and their two young daughters. A software engineer at a growing fintech startup, he begins each morning before the neighborhood stirs - lacing up his running shoes and heading out for a meditative 5k loop along the waterfront. His Aurelia linen overshirt has become his go-to layering piece, equally at home over a simple tee for morning runs or dressed up for client meetings in his home office. "There's something about the weight of the fabric," Chris explains. "It feels intentional, like someone actually made this with their hands." On weekends, you'll find him at McCarren Park with his family, the overshirt casually draped over his shoulders, embodying the effortless elegance that defines his approach to both work and life.`,
    favoriteProduct: 'Linen Overshirt',
    productPrice: '385',
    quote: 'It feels intentional, like someone actually made this with their hands.',
  },
  {
    id: 2,
    name: 'Sophia Rodriguez',
    neighborhood: 'Park Slope',
    image: 'https://images.unsplash.com/photo-1722929606881-a5110ebd871a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHdvbWFuJTIwY2FzaG1lcmUlMjBzd2VhdGVyJTIwY2FuZGlkfGVufDF8fHx8MTc3MDMzMzU4NHww&ixlib=rb-4.1.0&q=80&w=1080',
    story: `A former art historian turned freelance curator, Sophia has lived in the same Park Slope brownstone for over a decade. Her days oscillate between gallery visits in Chelsea and quiet mornings on her building's iconic stoop, where neighbors gather for impromptu coffee and conversation. She discovered Aurelia through a friend's recommendation and immediately fell for the ribbed cashmere sweater - a piece that transitions seamlessly from gallery openings to cozy evenings at home. "I've always been drawn to things that feel timeless," Sophia shares, adjusting the collar of her sweater as autumn leaves scatter across Prospect Park. "This sweater reminds me of pieces my grandmother wore - quality that doesn't shout, it whispers." For Sophia, Aurelia represents a return to conscious consumption, investing in fewer, better things.`,
    favoriteProduct: 'Ribbed Cashmere Sweater',
    productPrice: '595',
    quote: 'Quality that doesn\'t shout, it whispers.',
  },
  {
    id: 3,
    name: 'Tasha Williams',
    neighborhood: 'Union Square',
    image: 'https://images.unsplash.com/photo-1712112187907-638d4ca339fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHNuZWFrZXJzJTIwY29tbXV0aW5nJTIwdXJiYW4lMjBjYW5kaWR8ZW58MXx8fHwxNzcwMzMzNTg0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    story: `Tasha makes the daily commute from her brownstone in Brooklyn to Manhattan's Union Square, a journey that involves a brisk fifteen-minute walk to the subway station each morning. As a social worker at a community health center, she's constantly on her feet, navigating the city's sidewalks and subway platforms. The canvas sneakers from Aurelia have transformed her commute entirely. "I used to dread the walk to the train," Tasha explains, adjusting her backpack as she hurries down the platform. "But these sneakers - they feel like walking on clouds. I actually look forward to my morning walk now." The minimal design pairs perfectly with everything from her work slacks to weekend jeans, and after six months of daily wear, they've barely shown any signs of fatigue. For Tasha, they represent the rare find: style and substance in perfect harmony.`,
    favoriteProduct: 'Canvas Sneakers',
    productPrice: '195',
    quote: 'They feel like walking on clouds.',
  },
  {
    id: 4,
    name: 'Nadia Osman',
    neighborhood: 'Dumbo',
    image: 'https://images.unsplash.com/photo-1760135434340-aed6b49c8ee1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFpbnklMjBmaWxtJTIwcGhvdG9ncmFwaHklMjBsaWZlc3R5bGUlMjBjYW5kaWR8ZW58MXx8fHwxNzcwMzIyNzM4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    story: `A photographer specializing in architectural documentation, Nadia chose Dumbo for its perfect collision of industrial history and modern design. Her loft overlooks the Manhattan Bridge, and her mornings begin with strong coffee and the gentle hum of the neighborhood waking up. The structured wool coat from Aurelia has become her signature piece - spotted at job sites, gallery openings, and weekend walks along the Brooklyn Bridge Park. "I photograph buildings all day, so I appreciate construction," Nadia says, examining the coat's precise tailoring. "This coat is architecture you can wear." The heavyweight wool protects against harsh winter winds off the East River while maintaining clean lines that complement her minimalist aesthetic. It's become an extension of her creative practice - functional, beautiful, built to last.`,
    favoriteProduct: 'Structured Wool Coat',
    productPrice: '895',
    quote: 'This coat is architecture you can wear.',
  },
  {
    id: 5,
    name: 'Isaiah Williams',
    neighborhood: 'Greenpoint',
    image: 'https://images.unsplash.com/photo-1763550347178-8df49f8356c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBjYXN1YWwlMjBwYW50cyUyMHN0cmVldCUyMGNhbmRpZHxlbnwxfHx8fDE3NzAzMzM1ODV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    story: `Isaiah runs a small vinyl record shop on Manhattan Avenue, a passion project that grew from weekend DJ gigs into a full-fledged business. His style mirrors his musical taste - eclectic yet refined, with an appreciation for the classics. The organic cotton trousers from Aurelia caught his eye during a rare shopping excursion, and they've since become a wardrobe cornerstone. "I spend all day on my feet, digging through crates, talking to customers," Isaiah explains while organizing new arrivals. "These trousers move with me - they're comfortable enough for a 12-hour shift but elevated enough that I feel put together." He pairs them with vintage band tees and worn-in sneakers, creating a look that's uniquely his. For Isaiah, Aurelia represents quality that transcends trends, much like the timeless records he curates.`,
    favoriteProduct: 'Organic Cotton Trousers',
    productPrice: '465',
    quote: 'Comfortable enough for a 12-hour shift but elevated enough that I feel put together.',
  },
  {
    id: 6,
    name: 'Amara Patel',
    neighborhood: 'Red Hook',
    image: 'https://images.unsplash.com/photo-1760135434386-55bfc1576cbb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1cmJhbiUyMGxpZmVzdHlsZSUyMGNhbmRpZCUyMG1vbWVudCUyMGF1dGhlbnRpY3xlbnwxfHx8fDE3NzAzMjk1ODN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    story: `Amara relocated to Red Hook three years ago to escape Manhattan's relentless pace, trading her corporate law career for a small practice focused on immigrant rights. Her converted warehouse space sits steps from the waterfront, where she walks each evening to decompress. The tailored linen blazer was her first Aurelia purchase, bought to mark her professional transition. "I wanted something that felt powerful but not stiff," Amara reflects, preparing for a community legal clinic. "This blazer commands respect without trying too hard." She appreciates that it's made from natural fibers, aligning with her values around sustainability. On weekends, she throws it over jeans for farmers market runs or neighborhood potlucks, proof that professional doesn't have to mean separate from personal.`,
    favoriteProduct: 'Tailored Linen Blazer',
    productPrice: '725',
    quote: 'Commands respect without trying too hard.',
  },
  {
    id: 7,
    name: 'Kai Anderson',
    neighborhood: 'Bushwick',
    image: 'https://images.pexels.com/photos/9522890/pexels-photo-9522890.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    story: `A graphic designer and illustrator, Kai has called Bushwick home for the past four years, drawn to the neighborhood's creative energy and authentic artistic community. Her converted loft space doubles as both living quarters and studio, with one wall dedicated entirely to her wardrobe - a curated collection where Aurelia pieces take center stage. "I discovered Aurelia two years ago and honestly, I haven't looked back," Kai shares, adjusting her organic cotton tee before heading to a client meeting. "My closet has become this beautiful archive of their collections - each piece feels like it was designed specifically for how I want to move through the world." From morning coffee runs to gallery openings, Kai layers Aurelia staples with vintage finds and her own hand-painted accessories, creating looks that are uniquely hers yet unmistakably rooted in the brand's ethos of intentional, timeless design.`,
    favoriteProduct: 'Organic Cotton Tee',
    productPrice: '125',
    quote: 'Each piece feels like it was designed specifically for how I want to move through the world.',
  },
  {
    id: 8,
    name: 'Leila Hassan',
    neighborhood: 'Brooklyn Heights',
    image: 'https://images.unsplash.com/photo-1760624294504-211e763ee0fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGhvbGRpbmclMjBsZWF0aGVyJTIwdG90ZSUyMGJhZ3xlbnwxfHx8fDE3NzAzMzkzMjh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    story: `Leila owns a beloved independent bookstore and café on Montague Street, a space that's become a neighborhood living room where locals gather over espresso and literature. Her leather tote is constantly filled - advance reading copies, café receipts, a well-worn notebook of ideas. She found it at Aurelia's studio during a rare afternoon off and was drawn to its honest simplicity. "I needed a bag that could keep up with me," Leila says, preparing the morning's first pour-over. "Something beautiful but not precious." The tote sits beside the register, a quiet ambassador for thoughtful design as customers browse shelves and sip lattes. After two years of daily use, it's softened and shaped to her life, proving that the best possessions are those we actually use. For Leila, it represents the intersection of utility and beauty - exactly what her bookstore aims to be.`,
    favoriteProduct: 'Leather Tote',
    productPrice: '425',
    quote: 'Something beautiful but not precious.',
  },
];

export const CustomerStory = () => {
  const { id } = useParams();
  const story = customerStories.find((s) => s.id === Number(id));
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [isAdded, setIsAdded] = useState(false);

  if (!story) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center">
        <p style={{ fontFamily: 'var(--font-sans)' }}>Story not found</p>
      </div>
    );
  }

  const handleAddToCart = () => {
    // Generate a unique ID based on product title
    const productId = story.favoriteProduct.toLowerCase().replace(/\s+/g, '-');
    
    addToCart({
      id: productId,
      title: story.favoriteProduct,
      price: story.productPrice,
      image: story.image,
    });
    
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <div className="w-full">
      {/* Hero Image */}
      <section className="relative w-full h-[70vh] bg-gray-200 overflow-hidden">
        <ImageWithFallback
          src={story.image}
          alt={story.name}
          className="w-full h-full object-cover"
          style={{
            filter: 'saturate(0.85) contrast(1.05)',
          }}
        />
        {/* Grain overlay */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-30"
          style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
          }}
        />
      </section>

      {/* Story Content */}
      <section className="w-full bg-[#F7F5F2] py-20 px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <p 
              className="mb-2"
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '11px',
                letterSpacing: '3px',
                textTransform: 'uppercase',
                color: '#C75B3A',
                fontWeight: 500,
              }}
            >
              Community Story
            </p>
            <h1 
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                fontWeight: 500,
                lineHeight: 1.15,
                color: '#2B2B2B',
                letterSpacing: '-0.02em',
                marginBottom: '1rem',
              }}
            >
              {story.name}
            </h1>
            <p 
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '14px',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                color: '#4A5568',
                fontWeight: 500,
              }}
            >
              {story.neighborhood}, Brooklyn
            </p>
          </div>

          {/* Quote */}
          <blockquote 
            className="mb-12 pb-12 border-b border-[#2B2B2B]/10"
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(1.5rem, 3vw, 2rem)',
              fontWeight: 400,
              fontStyle: 'italic',
              lineHeight: 1.5,
              color: '#2B2B2B',
              letterSpacing: '-0.01em',
            }}
          >
            "{story.quote}"
          </blockquote>

          {/* Story Text */}
          <div 
            className="mb-12"
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '17px',
              fontWeight: 300,
              lineHeight: 2,
              color: '#4A5568',
              letterSpacing: '0.3px',
            }}
          >
            <p>{story.story}</p>
          </div>

          {/* Product Info */}
          <div className="bg-white p-8 mb-12">
            <p 
              className="mb-4"
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '11px',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                color: '#4A5568',
              }}
            >
              Featured Product
            </p>
            <div className="flex items-baseline gap-4 mb-6">
              <h3 
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.75rem',
                  fontWeight: 500,
                  color: '#2B2B2B',
                }}
              >
                {story.favoriteProduct}
              </h3>
              <p 
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '15px',
                  color: '#4A5568',
                }}
              >
                ${story.productPrice}
              </p>
            </div>
            <GhostButton variant="primary" onClick={handleAddToCart}>
              {isAdded ? 'Added to Cart' : 'Shop This Product'}
            </GhostButton>
          </div>

          {/* Back Link */}
          <div className="text-center">
            <Link to="/#community-grid">
              <GhostButton variant="secondary">
                ← Back to Stories
              </GhostButton>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};