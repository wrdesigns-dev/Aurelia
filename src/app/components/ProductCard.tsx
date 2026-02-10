import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState } from 'react';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  image: string;
  title: string;
  price: string;
  aspectRatio?: string;
}

export const ProductCard = ({ image, title, price, aspectRatio = '3/4' }: ProductCardProps) => {
  const [isAdded, setIsAdded] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    
    // Generate a unique ID based on title
    const id = title.toLowerCase().replace(/\s+/g, '-');
    
    // Add to cart
    addToCart({
      id,
      title,
      price,
      image,
    });
    
    // Show local feedback
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <div className="w-full group cursor-pointer relative">
      <div 
        className="w-full bg-gray-100 overflow-hidden mb-4 relative"
        style={{ aspectRatio }}
      >
        <ImageWithFallback
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Add to Cart Button Overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/20 transition-all duration-300">
          <button
            onClick={handleAddToCart}
            className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-6 py-3 bg-white text-[#2B2B2B] border-2 border-[#2B2B2B] hover:bg-[#2B2B2B] hover:text-white transition-colors duration-200"
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '10px',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              fontWeight: 600,
              borderRadius: '4px',
            }}
          >
            {isAdded ? 'Added!' : 'Add to Cart'}
          </button>
        </div>
      </div>

      {/* Added to Cart Notification */}
      {isAdded && (
        <div 
          className="absolute top-4 right-4 px-4 py-2 bg-[#C75B3A] text-white shadow-lg z-10 animate-fade-in"
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '10px',
            letterSpacing: '1.5px',
            textTransform: 'uppercase',
            fontWeight: 600,
            borderRadius: '4px',
            animation: 'fadeIn 0.3s ease-in-out',
          }}
        >
          Added to Cart ✓
        </div>
      )}

      <div className="text-center">
        <h3 
          className="mb-2"
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '11px',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            color: '#2B2B2B',
            fontWeight: 500,
          }}
        >
          {title}
        </h3>
        <p 
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '13px',
            letterSpacing: '0.5px',
            color: '#4A5568',
          }}
        >
          ${price}
        </p>
      </div>
    </div>
  );
};