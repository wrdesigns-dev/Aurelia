import { useEffect, useState } from 'react';

interface TheDropCounterProps {
  batchNumber: string;
  totalProduced: number;
  remaining: number;
}

export const TheDropCounter = ({
  batchNumber,
  totalProduced,
  remaining,
}: TheDropCounterProps) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Auto-hide after 10 seconds, then show again after 30 seconds
    const hideTimer = setTimeout(() => setIsVisible(false), 10000);
    return () => clearTimeout(hideTimer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed top-24 right-0 z-40 animate-slide-in">
      <div 
        className="bg-[#2B2B2B] text-white px-6 py-3 shadow-lg border-l-4 border-[#C75B3A]"
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '11px',
          letterSpacing: '1px',
        }}
      >
        <div className="flex items-center gap-6">
          <span className="text-[#C75B3A] font-bold">BATCH NO. {batchNumber}</span>
          <span className="opacity-60">—</span>
          <span>{totalProduced} PIECES PRODUCED</span>
          <span className="opacity-60">—</span>
          <span className="text-[#C75B3A] font-bold">{remaining} REMAINING</span>
        </div>
      </div>
      
      <button
        onClick={() => setIsVisible(false)}
        className="absolute -top-2 -right-2 w-5 h-5 bg-white text-[#2B2B2B] rounded-full flex items-center justify-center text-xs hover:bg-gray-200 transition-colors"
        aria-label="Close"
      >
        ×
      </button>
    </div>
  );
};
