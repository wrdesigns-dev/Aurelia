export const Footer = () => {
  return (
    <footer className="w-full bg-[#2B2B2B] py-8 px-8 border-t border-[#F7F5F2]/10">
      <div className="max-w-7xl mx-auto text-center">
        <p 
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '11px',
            letterSpacing: '1px',
            color: '#F7F5F2',
            fontWeight: 300,
          }}
        >
          © 2026 Aurelia Collective. All rights reserved. Powered by wrdesigns
        </p>
      </div>
    </footer>
  );
};
