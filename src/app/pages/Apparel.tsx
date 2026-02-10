import { ProductCard } from '../components/ProductCard';

export const Apparel = () => {
  const apparelItems = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1762539747176-5d8f166346de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib2hlbWlhbiUyMGxpbmVuJTIwZHJlc3MlMjBuYXR1cmFsJTIwYmVpZ2V8ZW58MXx8fHwxNzcwMzQxMDA2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Natural Linen Dress',
      price: '325',
    },
    {
      id: 2,
      image: 'https://images.pexels.com/photos/23105762/pexels-photo-23105762.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Organic Cotton Sweater',
      price: '185',
    },
    {
      id: 3,
      image: 'https://images.pexels.com/photos/4663319/pexels-photo-4663319.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Flowing Maxi Skirt',
      price: '265',
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1545318596-1677d56933dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvdmVyc2l6ZWQlMjBsaW5lbiUyMHNoaXJ0JTIwcmVsYXhlZCUyMG1pbmltYWx8ZW58MXx8fHwxNzcwMzQxMDA3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Oversized Linen Shirt',
      price: '245',
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1721917113650-4dd5ffbc7dc2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib2hlbWlhbiUyMHdpZGUlMjBsZWclMjBwYW50cyUyMG5hdHVyYWwlMjBmYWJyaWN8ZW58MXx8fHwxNzcwMzQxMDA4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Wide-Leg Linen Pants',
      price: '295',
    },
    {
      id: 6,
      image: 'https://images.pexels.com/photos/6275954/pexels-photo-6275954.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Textured Knit Cardigan',
      price: '385',
    },
    {
      id: 7,
      image: 'https://images.unsplash.com/photo-1605131545304-096aeaeee5d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmdhbmljJTIwY290dG9uJTIwd3JhcCUyMGRyZXNzJTIwbWluaW1hbHxlbnwxfHx8fDE3NzAzNDEwMDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Cotton Wrap Pants',
      price: '345',
    },
    {
      id: 8,
      image: 'https://images.pexels.com/photos/35064637/pexels-photo-35064637.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Two-Piece Linen Set',
      price: '425',
    },
    {
      id: 9,
      image: 'https://images.unsplash.com/photo-1661198979635-1563c2d19196?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib2hlbWlhbiUyMGtpbW9ubyUyMHJvYmUlMjBuYXR1cmFsJTIwZmliZXJ8ZW58MXx8fHwxNzcwMzQxMDA5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Kimono Robe',
      price: '365',
    },
    {
      id: 10,
      image: 'https://images.unsplash.com/photo-1623854156816-4c4fc355ffc7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kd292ZW4lMjBjcm9zc2JvZHklMjBiYWclMjBsZWF0aGVyfGVufDF8fHx8MTc3MDM0MjM2M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Vintage Leather Jacket',
      price: '225',
    },
    {
      id: 11,
      image: 'https://images.unsplash.com/photo-1761484879483-0d3678e82b54?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmFsJTIwc3RyYXclMjB0b3RlJTIwYmFnfGVufDF8fHx8MTc3MDM0MjM2NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Natural Straw Tote',
      price: '185',
    },
    {
      id: 12,
      image: 'https://images.unsplash.com/photo-1715881634020-82b54253cc64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib2hlbWlhbiUyMHNpbGslMjBzY2FyZiUyMGVhcnRoJTIwdG9uZXN8ZW58MXx8fHwxNzcwMzQxMDEwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Hand-dyed Silk Scarf',
      price: '165',
    },
  ];

  return (
    <div className="w-full">
      {/* Header Section */}
      <section className="w-full bg-[#F7F5F2] py-20 px-8 border-b border-[#2B2B2B]/10">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
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
              Apparel & Accessories
            </h1>
            <p 
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '15px',
                fontWeight: 300,
                color: '#4A5568',
                lineHeight: 1.8,
                letterSpacing: '0.3px',
                maxWidth: '600px',
              }}
            >
              Thoughtfully designed clothing and accessories crafted from natural 
              materials. Each garment celebrates the beauty of sustainable textiles 
              and timeless silhouettes.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="w-full bg-white py-16 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {apparelItems.map((item) => (
              <ProductCard
                key={item.id}
                image={item.image}
                title={item.title}
                price={item.price}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};