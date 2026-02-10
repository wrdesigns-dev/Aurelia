export const NeighborhoodMap = () => {
  return (
    <section className="w-full bg-[#F7F5F2] py-16 px-8 border-t border-[#2B2B2B]/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h3 
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '1.75rem',
              fontWeight: 500,
              color: '#2B2B2B',
              marginBottom: '0.5rem',
            }}
          >
            Visit Our Studio
          </h3>
          <p 
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '12px',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              color: '#4A5568',
            }}
          >
            Williamsburg, Brooklyn
          </p>
        </div>

        {/* Stylized Blueprint Map */}
        <div className="max-w-4xl mx-auto">
          <svg
            viewBox="0 0 800 400"
            className="w-full h-auto"
            style={{
              filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.1))',
            }}
          >
            {/* Blueprint Background */}
            <rect width="800" height="400" fill="#4A5568" />
            
            {/* Grid Pattern */}
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#627D98" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="800" height="400" fill="url(#grid)" />

            {/* Streets */}
            <line x1="0" y1="150" x2="800" y2="150" stroke="#F7F5F2" strokeWidth="3" />
            <line x1="0" y1="250" x2="800" y2="250" stroke="#F7F5F2" strokeWidth="3" />
            <line x1="300" y1="0" x2="300" y2="400" stroke="#F7F5F2" strokeWidth="2" />
            <line x1="500" y1="0" x2="500" y2="400" stroke="#F7F5F2" strokeWidth="2" />

            {/* Street Labels */}
            <text x="20" y="145" fill="#F7F5F2" fontSize="12" fontFamily="var(--font-mono)">
              BEDFORD AVE
            </text>
            <text x="20" y="245" fill="#F7F5F2" fontSize="12" fontFamily="var(--font-mono)">
              NORTH 7TH ST
            </text>

            {/* Blocks */}
            <rect x="320" y="170" width="160" height="60" fill="none" stroke="#F7F5F2" strokeWidth="1" strokeDasharray="4,4" />
            <rect x="120" y="170" width="160" height="60" fill="none" stroke="#F7F5F2" strokeWidth="1" strokeDasharray="4,4" />
            <rect x="520" y="170" width="160" height="60" fill="none" stroke="#F7F5F2" strokeWidth="1" strokeDasharray="4,4" />

            {/* Studio Location Pin */}
            <g transform="translate(400, 200)">
              {/* Pin Circle */}
              <circle cx="0" cy="0" r="30" fill="#C75B3A" stroke="#F7F5F2" strokeWidth="3" />
              <circle cx="0" cy="0" r="8" fill="#F7F5F2" />
              {/* Pulsing Ring */}
              <circle cx="0" cy="0" r="35" fill="none" stroke="#C75B3A" strokeWidth="2" opacity="0.4">
                <animate attributeName="r" from="35" to="50" dur="2s" repeatCount="indefinite" />
                <animate attributeName="opacity" from="0.4" to="0" dur="2s" repeatCount="indefinite" />
              </circle>
            </g>

            {/* Studio Label */}
            <text x="400" y="260" fill="#F7F5F2" fontSize="14" fontFamily="var(--font-sans)" fontWeight="600" textAnchor="middle">
              AURELIA STUDIO
            </text>
            <text x="400" y="278" fill="#F7F5F2" fontSize="11" fontFamily="var(--font-mono)" textAnchor="middle">
              215 BEDFORD AVE
            </text>

            {/* Landmarks */}
            <text x="200" y="205" fill="#F7F5F2" fontSize="10" fontFamily="var(--font-mono)" opacity="0.6">
              COFFEE SHOP
            </text>
            <text x="600" y="205" fill="#F7F5F2" fontSize="10" fontFamily="var(--font-mono)" opacity="0.6">
              METRO STATION
            </text>
          </svg>

          {/* Address Info */}
          <div className="mt-8 text-center">
            <p 
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '14px',
                color: '#2B2B2B',
                lineHeight: 1.8,
              }}
            >
              Open by appointment Tuesday–Saturday, 11am–6pm
            </p>
            <p 
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '12px',
                color: '#4A5568',
                marginTop: '0.5rem',
              }}
            >
              studio@aureliabk.com
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
