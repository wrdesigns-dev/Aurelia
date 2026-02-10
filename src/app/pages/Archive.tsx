import Masonry from 'react-responsive-masonry';
import { ProductCard } from '../components/ProductCard';

export const Archive = () => {
  // Archive items with varying aspect ratios for masonry effect
  // 70% Apparel & Accessories, 30% Home Objects
  const archiveItems = [
    // APPAREL
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1721134619759-223b27177bb5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaW5lbiUyMG92ZXJzaXplZCUyMHNoaXJ0JTIwbWluaW1hbCUyMGJlaWdlfGVufDF8fHx8MTc3MDMyMjAyM3ww&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Linen Overshirt',
      price: '385',
      aspectRatio: '3/4',
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1743273275142-c4fdbd1ccba4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYXclMjBzaWxrJTIwdHJvdXNlcnMlMjBsdXh1cnklMjBmYXNoaW9ufGVufDF8fHx8MTc3MDMyMjAyM3ww&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Raw Silk Trousers',
      price: '465',
      aspectRatio: '16/9',
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1680690395101-1b2a56c0ac21?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJ1Y3R1cmVkJTIwd29vbCUyMGNvYXQlMjBtaW5pbWFsJTIwZWRpdG9yaWFsfGVufDF8fHx8MTc3MDMyMjAyM3ww&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Structured Wool Coat',
      price: '895',
      aspectRatio: '4/5',
    },
    // OBJECTS
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1760124056943-eb64936d3d2a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwYm93bCUyMGFydGlzYW4lMjB3aGl0ZXxlbnwxfHx8fDE3NzAzMjE0MTd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Artisan Bowl',
      price: '165',
      aspectRatio: '3/4',
    },
    // APPAREL
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1574201635302-388dd92a4c3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXNobWVyZSUyMHN3ZWF0ZXIlMjByaWJiZWQlMjBtaW5pbWFsfGVufDF8fHx8MTc3MDMyMjAyNHww&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Ribbed Cashmere Sweater',
      price: '595',
      aspectRatio: '16/9',
    },
    // ACCESSORIES
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1637759292654-a12cb2be085e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWF0aGVyJTIwdG90ZSUyMGJhZyUyMHZhY2hldHRhJTIwbWluaW1hbHxlbnwxfHx8fDE3NzAzMjIwMjV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Vachetta Leather Tote',
      price: '425',
      aspectRatio: '3/4',
    },
    {
      id: 7,
      image: 'https://images.unsplash.com/photo-1760532467609-45ed8016f795?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwd2F0Y2glMjB0aW1lcGllY2UlMjBsdXh1cnl8ZW58MXx8fHwxNzcwMzIyMDI1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Minimalist Timepiece',
      price: '685',
      aspectRatio: '4/5',
    },
    // OBJECTS
    {
      id: 8,
      image: 'https://images.unsplash.com/photo-1729087176894-778570ba2bf8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFzcyUyMGNhbmRsZXN0aWNrJTIwbWluaW1hbHxlbnwxfHx8fDE3NzAzMjE0MTh8MA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Brass Candlestick',
      price: '195',
      aspectRatio: '3/4',
    },
    // ACCESSORIES
    {
      id: 9,
      image: 'https://images.unsplash.com/photo-1645654731316-a350fdcf3bae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaWxrJTIwc2NhcmYlMjBoYW5kJTIwcm9sbGVkJTIwbHV4dXJ5fGVufDF8fHx8MTc3MDMyMjAyNXww&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Hand-rolled Silk Scarf',
      price: '245',
      aspectRatio: '16/9',
    },
    // OBJECTS
    {
      id: 10,
      image: 'https://images.unsplash.com/photo-1614001247947-17f562d6801b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwY2VyYW1pYyUyMHZhc2UlMjB3aGl0ZSUyMGJhY2tncm91bmR8ZW58MXx8fHwxNzcwMzIxMzQ5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Sculptural Vase',
      price: '205',
      aspectRatio: '4/5',
    },
    // APPAREL
    {
      id: 11,
      image: 'https://images.unsplash.com/photo-1654806389957-f8ca19bb7b1a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwZmFzaGlvbiUyMGZsYXRsYXklMjBsaW5lbnxlbnwxfHx8fDE3NzAzMjIwMjZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Organic Cotton Shirt',
      price: '125',
      aspectRatio: '3/4',
    },
    {
      id: 12,
      image: 'https://images.unsplash.com/photo-1749476700241-a3bd5ac6e881?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZGl0b3JpYWwlMjBmYXNoaW9uJTIwbW9kZWwlMjBtaW5pbWFsJTIwYWVzdGhldGljfGVufDF8fHx8MTc3MDMyMjAyNnww&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Tailored Linen Blazer',
      price: '725',
      aspectRatio: '16/9',
    },
    // NEW ADDITIONS - APPAREL
    {
      id: 13,
      image: 'https://images.unsplash.com/photo-1674664845579-b8519eb45cd2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldGhpY2FsJTIwZmFzaGlvbiUyMHN1c3RhaW5hYmxlJTIwY2xvdGhpbmd8ZW58MXx8fHwxNzcwMzQxMTM0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Sustainable Tote',
      price: '195',
      aspectRatio: '3/4',
    },
    {
      id: 14,
      image: 'https://images.unsplash.com/photo-1675877879221-871aa9f7c314?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwbGVhdGhlciUyMGphY2tldCUyMG5hdHVyYWx8ZW58MXx8fHwxNzcwMzQxMTM1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Leather Jacket',
      price: '1285',
      aspectRatio: '4/5',
    },
    // OBJECTS
    {
      id: 15,
      image: 'https://images.unsplash.com/photo-1770198322018-8f508a6c11b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc2FuJTIwY2VyYW1pYyUyMHRhYmxld2FyZXxlbnwxfHx8fDE3NzAzNDExMzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Ceramic Tableware Set',
      price: '385',
      aspectRatio: '3/4',
    },
    // APPAREL
    {
      id: 16,
      image: 'https://images.unsplash.com/photo-1760067538169-8fdc2d711b84?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kd292ZW4lMjB0ZXh0aWxlJTIwbmF0dXJhbCUyMGZpYmVyfGVufDF8fHx8MTc3MDM0MTEzNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Handwoven Textile',
      price: '325',
      aspectRatio: '16/9',
    },
    {
      id: 17,
      image: 'https://images.unsplash.com/photo-1597296570161-439a36847d41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwc3VzdGFpbmFibGUlMjBmb290d2VhcnxlbnwxfHx8fDE3NzAzNDExMzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Sustainable Footwear',
      price: '445',
      aspectRatio: '3/4',
    },
    // OBJECTS
    {
      id: 18,
      image: 'https://images.unsplash.com/photo-1718703357717-eb7c03f1a77f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmFsJTIwZmliZXIlMjBydWclMjB3b3ZlbnxlbnwxfHx8fDE3NzAzNDExMzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Natural Fiber Rug',
      price: '685',
      aspectRatio: '16/9',
    },
    // APPAREL
    {
      id: 19,
      image: 'https://images.pexels.com/photos/18084887/pexels-photo-18084887.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Organic Cotton Bedding',
      price: '545',
      aspectRatio: '4/5',
    },
    {
      id: 20,
      image: 'https://images.unsplash.com/photo-1756792339487-d044709b27f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib2hlbWlhbiUyMGFjY2Vzc29yaWVzJTIwamV3ZWxyeSUyMGhhbmRtYWRlfGVufDF8fHx8MTc3MDM0MTEzN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Handmade Jewelry Set',
      price: '235',
      aspectRatio: '3/4',
    },
    {
      id: 21,
      image: 'https://images.unsplash.com/photo-1766159806781-297956eccd31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwa25pdCUyMHN3ZWF0ZXIlMjBuYXR1cmFsfGVufDF8fHx8MTc3MDM0MTEzN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Knit Sweater',
      price: '425',
      aspectRatio: '16/9',
    },
    // OBJECTS
    {
      id: 22,
      image: 'https://images.pexels.com/photos/7668391/pexels-photo-7668391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Pottery Dinnerware Set',
      price: '495',
      aspectRatio: '3/4',
    },
    // APPAREL
    {
      id: 23,
      image: 'https://images.pexels.com/photos/8325261/pexels-photo-8325261.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Linen Home Decor',
      price: '165',
      aspectRatio: '4/5',
    },
    {
      id: 24,
      image: 'https://images.unsplash.com/photo-1713261749235-901031087be6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJsZSUyMGZhc2hpb24lMjBjb2F0JTIwbWluaW1hbHxlbnwxfHx8fDE3NzAzNDExMzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Sustainable Coat',
      price: '945',
      aspectRatio: '3/4',
    },
    // OBJECTS
    {
      id: 25,
      image: 'https://images.unsplash.com/photo-1655149588581-49191c89e470?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kY3JhZnRlZCUyMHdvb2QlMjBmdXJuaXR1cmUlMjBtaW5pbWFsfGVufDF8fHx8MTc3MDM0MTEzOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Handcrafted Wood Stool',
      price: '425',
      aspectRatio: '16/9',
    },
    // APPAREL
    {
      id: 26,
      image: 'https://images.unsplash.com/photo-1713007009692-c055a4a5e2df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib2hlbWlhbiUyMGRyZXNzJTIwZmxvd2luZyUyMG5hdHVyYWx8ZW58MXx8fHwxNzcwMzQxMTQwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Flowing Bohemian Dress',
      price: '365',
      aspectRatio: '4/5',
    },
    // OBJECTS
    {
      id: 27,
      image: 'https://images.unsplash.com/photo-1680092628759-31e4fd47d024?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc2FuJTIwZ2xhc3N3YXJlJTIwbWluaW1hbCUyMGRlc2lnbnxlbnwxfHx8fDE3NzAzNDExNDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Artisan Glassware',
      price: '125',
      aspectRatio: '3/4',
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
              The Archive
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
              A carefully curated collection of elevated apparel, refined accessories, 
              and timeless objects for the home. Each piece has been selected for its 
              integrity of craft, sustainable provenance, and enduring aesthetic value.
            </p>
          </div>
        </div>
      </section>

      {/* Masonry Gallery Section */}
      <section className="w-full bg-white py-16 px-8">
        <div className="max-w-7xl mx-auto">
          <Masonry columnsCount={3} gutter="1.5rem">
            {archiveItems.map((item) => (
              <div key={item.id}>
                <ProductCard
                  image={item.image}
                  title={item.title}
                  price={item.price}
                  aspectRatio={item.aspectRatio}
                />
              </div>
            ))}
          </Masonry>
        </div>
      </section>

      {/* Footer Note */}
      <section className="w-full bg-[#F7F5F2] py-16 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <p 
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              fontWeight: 400,
              color: '#4A5568',
              lineHeight: 1.8,
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
            }}
          >
            New pieces are added monthly as we discover them
          </p>
        </div>
      </section>
    </div>
  );
};