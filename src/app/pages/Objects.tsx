import { ProductCard } from '../components/ProductCard';

export const Objects = () => {
  const objectItems = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1760124056943-eb64936d3d2a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwYm93bCUyMGFydGlzYW4lMjB3aGl0ZXxlbnwxfHx8fDE3NzAzMjE0MTd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Artisan Bowl',
      price: '165',
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1729087176894-778570ba2bf8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFzcyUyMGNhbmRsZXN0aWNrJTIwbWluaW1hbHxlbnwxfHx8fDE3NzAzMjE0MTh8MA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Brass Candlestick',
      price: '195',
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1614001247947-17f562d6801b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwY2VyYW1pYyUyMHZhc2UlMjB3aGl0ZSUyMGJhY2tncm91bmR8ZW58MXx8fHwxNzcwMzIxMzQ5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Sculptural Vase',
      price: '205',
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1770198322018-8f508a6c11b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kbWFkZSUyMGNlcmFtaWMlMjBwbGF0ZSUyMGFydGlzYW58ZW58MXx8fHwxNzcwMzQxMDc3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Handmade Ceramic Plate',
      price: '145',
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1667964395256-0a0fd2d833bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kZW4lMjBzZXJ2aW5nJTIwYm9hcmQlMjBtaW5pbWFsaXN0fGVufDF8fHx8MTc3MDM0MTA3N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Wooden Serving Board',
      price: '185',
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1770069676297-3fb0bcc11099?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZXJyYWNvdHRhJTIwcGxhbnRlciUyMHBvdHRlcnklMjBoYW5kbWFkZXxlbnwxfHx8fDE3NzAzNDEwNzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Terracotta Planter',
      price: '125',
    },
    {
      id: 7,
      image: 'https://images.unsplash.com/photo-1762539747176-5d8f166346de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaW5lbiUyMG5hcGtpbnMlMjBuYXR1cmFsJTIwdGV4dHVyZXxlbnwxfHx8fDE3NzAzNDEwNzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Linen Napkin Set',
      price: '95',
    },
    {
      id: 8,
      image: 'https://images.unsplash.com/photo-1680092628759-31e4fd47d024?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnbGFzcyUyMGNhcmFmZSUyMG1pbmltYWwlMjBkZXNpZ258ZW58MXx8fHwxNzcwMzM5OTIxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Glass Carafe',
      price: '155',
    },
    {
      id: 9,
      image: 'https://images.unsplash.com/photo-1762711753035-f1625c972cef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3ZlbiUyMGJhc2tldCUyMG5hdHVyYWwlMjBmaWJlcnxlbnwxfHx8fDE3NzAzMjE0MTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Woven Storage Basket',
      price: '135',
    },
    {
      id: 10,
      image: 'https://images.unsplash.com/photo-1742887218431-60f1735abb26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdG9uZSUyMG1vcnRhciUyMHBlc3RsZSUyMGtpdGNoZW58ZW58MXx8fHwxNzcwMzQxMDc5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Stone Mortar & Pestle',
      price: '175',
    },
    {
      id: 11,
      image: 'https://images.unsplash.com/photo-1657395348189-a19abe13fb1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kbWFkZSUyMHBvdHRlcnklMjBtdWclMjBjZXJhbWljfGVufDF8fHx8MTc3MDM0MTA4MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Pottery Mug Set',
      price: '105',
    },
    {
      id: 12,
      image: 'https://images.unsplash.com/photo-1767331290389-97d2ae0f1890?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFzcyUyMG1pcnJvciUyMHJvdW5kJTIwd2FsbHxlbnwxfHx8fDE3NzAzNDEwODB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Brass Wall Mirror',
      price: '285',
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
              Objects
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
              A curated selection of artisanal home goods. Handcrafted ceramics, 
              sculptural vessels, and functional objects designed to bring quiet 
              beauty to everyday rituals.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="w-full bg-white py-16 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {objectItems.map((item) => (
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