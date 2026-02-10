import { Link, useLocation } from 'react-router';
import { SearchIcon, ShoppingBagIcon } from './MonolineIcons';
import { useCart } from '../context/CartContext';
import { useState } from 'react';

export const Navigation = () => {
  const location = useLocation();
  const { cartCount, justAdded } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 w-full h-[60px] bg-[#F7F5F2] border-b border-[#2B2B2B]/10 flex items-center justify-between px-8">
      {/* Logo */}
      <Link 
        to="/" 
        className="tracking-[1px] lowercase text-[#2B2B2B] transition-colors hover:text-[#C75B3A]"
        style={{ 
          fontFamily: 'var(--font-serif)',
          fontSize: '20px',
          fontWeight: 500,
        }}
      >
        aurelia
      </Link>

      {/* Desktop Navigation Links */}
      <div className="hidden lg:flex items-center gap-8">
        <Link
          to="/"
          className={`
            text-[11px] font-medium tracking-[2.5px] uppercase
            transition-colors duration-200
            ${isActive('/') ? 'text-[#2B2B2B]' : 'text-[#4A5568] hover:text-[#2B2B2B]'}
          `}
          style={{ fontFamily: 'var(--font-sans)' }}
        >
          Home
        </Link>
        <Link
          to="/apparel"
          className={`
            text-[11px] font-medium tracking-[2.5px] uppercase
            transition-colors duration-200
            ${isActive('/apparel') ? 'text-[#2B2B2B]' : 'text-[#4A5568] hover:text-[#2B2B2B]'}
          `}
          style={{ fontFamily: 'var(--font-sans)' }}
        >
          Apparel
        </Link>
        <Link
          to="/objects"
          className={`
            text-[11px] font-medium tracking-[2.5px] uppercase
            transition-colors duration-200
            ${isActive('/objects') ? 'text-[#2B2B2B]' : 'text-[#4A5568] hover:text-[#2B2B2B]'}
          `}
          style={{ fontFamily: 'var(--font-sans)' }}
        >
          Objects
        </Link>
        <Link
          to="/archive"
          className={`
            text-[11px] font-medium tracking-[2.5px] uppercase
            transition-colors duration-200
            ${isActive('/archive') ? 'text-[#2B2B2B]' : 'text-[#4A5568] hover:text-[#2B2B2B]'}
          `}
          style={{ fontFamily: 'var(--font-sans)' }}
        >
          The Archive
        </Link>
        <Link
          to="/makers"
          className={`
            text-[11px] font-medium tracking-[2.5px] uppercase
            transition-colors duration-200
            ${isActive('/makers') ? 'text-[#2B2B2B]' : 'text-[#4A5568] hover:text-[#2B2B2B]'}
          `}
          style={{ fontFamily: 'var(--font-sans)' }}
        >
          Our Makers
        </Link>
      </div>

      {/* Mobile & Desktop Icons */}
      <div className="flex items-center gap-6">
        <button className="hidden lg:block text-[#2B2B2B] hover:text-[#C75B3A] transition-colors">
          <SearchIcon size={18} />
        </button>
        <button className="relative text-[#2B2B2B] hover:text-[#C75B3A] transition-colors">
          <ShoppingBagIcon size={18} />
          {cartCount > 0 && (
            <span
              className={`
                absolute -top-2 -right-2 
                min-w-[18px] h-[18px] 
                flex items-center justify-center 
                bg-[#C75B3A] text-white 
                rounded-full px-1
                transition-all duration-300
                ${justAdded ? 'scale-125' : 'scale-100'}
              `}
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '10px',
                fontWeight: 600,
              }}
            >
              {cartCount}
            </span>
          )}
        </button>
        
        {/* Hamburger Menu Button */}
        <button 
          className="lg:hidden text-[#2B2B2B] hover:text-[#C75B3A] transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {isMenuOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-[60px] left-0 w-full bg-[#F7F5F2] border-b border-[#2B2B2B]/10 shadow-lg">
          <div className="flex flex-col py-4 px-8 gap-4">
            <Link
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className={`
                text-[11px] font-medium tracking-[2.5px] uppercase
                transition-colors duration-200 py-2
                ${isActive('/') ? 'text-[#2B2B2B]' : 'text-[#4A5568] hover:text-[#2B2B2B]'}
              `}
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Home
            </Link>
            <Link
              to="/apparel"
              onClick={() => setIsMenuOpen(false)}
              className={`
                text-[11px] font-medium tracking-[2.5px] uppercase
                transition-colors duration-200 py-2
                ${isActive('/apparel') ? 'text-[#2B2B2B]' : 'text-[#4A5568] hover:text-[#2B2B2B]'}
              `}
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Apparel
            </Link>
            <Link
              to="/objects"
              onClick={() => setIsMenuOpen(false)}
              className={`
                text-[11px] font-medium tracking-[2.5px] uppercase
                transition-colors duration-200 py-2
                ${isActive('/objects') ? 'text-[#2B2B2B]' : 'text-[#4A5568] hover:text-[#2B2B2B]'}
              `}
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Objects
            </Link>
            <Link
              to="/archive"
              onClick={() => setIsMenuOpen(false)}
              className={`
                text-[11px] font-medium tracking-[2.5px] uppercase
                transition-colors duration-200 py-2
                ${isActive('/archive') ? 'text-[#2B2B2B]' : 'text-[#4A5568] hover:text-[#2B2B2B]'}
              `}
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              The Archive
            </Link>
            <Link
              to="/makers"
              onClick={() => setIsMenuOpen(false)}
              className={`
                text-[11px] font-medium tracking-[2.5px] uppercase
                transition-colors duration-200 py-2
                ${isActive('/makers') ? 'text-[#2B2B2B]' : 'text-[#4A5568] hover:text-[#2B2B2B]'}
              `}
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Our Makers
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};