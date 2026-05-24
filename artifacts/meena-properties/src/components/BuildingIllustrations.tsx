
export function ObsidianTower({ isHovered }: { isHovered?: boolean }) {
  return (
    <svg viewBox="0 0 260 480" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <linearGradient id="obs-glass" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#0d0d0f" />
          <stop offset="40%" stopColor="#1a1a2e" />
          <stop offset="70%" stopColor="#232340" />
          <stop offset="100%" stopColor="#0d0d0f" />
        </linearGradient>
        <linearGradient id="obs-reflect" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#c9a84c" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#c9a84c" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="obs-podium" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1a1a2e" />
          <stop offset="100%" stopColor="#0a0a0b" />
        </linearGradient>
        <linearGradient id="obs-glow" x1="0.5" y1="0" x2="0.5" y2="1">
          <stop offset="0%" stopColor="#c9a84c" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#c9a84c" stopOpacity="0" />
        </linearGradient>
        <filter id="obs-soft">
          <feGaussianBlur stdDeviation="2" />
        </filter>
      </defs>

      {/* Ambient glow base */}
      <ellipse cx="130" cy="460" rx="90" ry="12" fill="#c9a84c" fillOpacity={isHovered ? 0.15 : 0.06} filter="url(#obs-soft)" />

      {/* Podium */}
      <rect x="30" y="410" width="200" height="60" fill="url(#obs-podium)" />
      <rect x="30" y="410" width="200" height="1" fill="#c9a84c" fillOpacity="0.4" />
      {/* Podium windows */}
      {[0,1,2,3,4].map(i => (
        <rect key={i} x={42 + i * 36} y="422" width="24" height="30" fill="#c9a84c" fillOpacity={isHovered ? 0.18 : 0.08} rx="1" />
      ))}
      {/* Podium horizontal bands */}
      <rect x="30" y="435" width="200" height="1" fill="#ffffff" fillOpacity="0.06" />
      <rect x="30" y="450" width="200" height="1" fill="#ffffff" fillOpacity="0.06" />

      {/* Main Tower Body */}
      <rect x="60" y="120" width="140" height="292" fill="url(#obs-glass)" />

      {/* Vertical division lines */}
      <line x1="95" y1="120" x2="95" y2="412" stroke="#ffffff" strokeOpacity="0.07" strokeWidth="1" />
      <line x1="130" y1="120" x2="130" y2="412" stroke="#ffffff" strokeOpacity="0.05" strokeWidth="1" />
      <line x1="165" y1="120" x2="165" y2="412" stroke="#ffffff" strokeOpacity="0.07" strokeWidth="1" />

      {/* Glass reflection diagonal */}
      <polygon points="60,120 110,120 60,200" fill="url(#obs-reflect)" />
      <polygon points="165,200 200,120 200,280" fill="#c9a84c" fillOpacity="0.04" />

      {/* Window grid - main tower */}
      {Array.from({ length: 18 }).map((_, row) =>
        [0, 1, 2].map(col => (
          <rect
            key={`${row}-${col}`}
            x={68 + col * 44}
            y={128 + row * 16}
            width={32}
            height={10}
            fill="#c9a84c"
            fillOpacity={isHovered ? (row % 3 === 0 ? 0.22 : 0.1) : (row % 5 === 0 ? 0.15 : 0.06)}
            rx="0.5"
          />
        ))
      )}

      {/* Horizontal floor lines */}
      {Array.from({ length: 18 }).map((_, i) => (
        <rect key={i} x="60" y={138 + i * 16} width="140" height="1" fill="#ffffff" fillOpacity="0.04" />
      ))}

      {/* Setback 1 — mid tower */}
      <rect x="70" y="80" width="120" height="44" fill="url(#obs-glass)" />
      <rect x="70" y="80" width="120" height="1" fill="#c9a84c" fillOpacity="0.5" />
      {/* setback windows */}
      {[0,1,2].map(i => (
        <rect key={i} x={78 + i * 38} y={88} width={26} height={28} fill="#c9a84c" fillOpacity={isHovered ? 0.2 : 0.09} rx="0.5" />
      ))}

      {/* Setback 2 — upper tower */}
      <rect x="85" y="44" width="90" height="40" fill="url(#obs-glass)" />
      <rect x="85" y="44" width="90" height="1" fill="#c9a84c" fillOpacity="0.6" />
      {[0,1].map(i => (
        <rect key={i} x={93 + i * 40} y={52} width={26} height={24} fill="#c9a84c" fillOpacity={isHovered ? 0.25 : 0.1} rx="0.5" />
      ))}

      {/* Crown */}
      <rect x="103" y="20" width="54" height="28" fill="#1a1a2e" />
      <rect x="103" y="20" width="54" height="1" fill="#c9a84c" fillOpacity="0.8" />
      <rect x="118" y="24" width="24" height="14" fill="#c9a84c" fillOpacity={isHovered ? 0.4 : 0.15} />

      {/* Antenna */}
      <line x1="130" y1="2" x2="130" y2="22" stroke="#c9a84c" strokeOpacity="0.7" strokeWidth="1.5" />
      <circle cx="130" cy="2" r="2" fill="#c9a84c" fillOpacity={isHovered ? 1 : 0.5} />

      {/* Edge glow on hover */}
      {isHovered && (
        <>
          <rect x="60" y="120" width="1" height="292" fill="url(#obs-glow)" />
          <rect x="199" y="120" width="1" height="292" fill="url(#obs-glow)" />
        </>
      )}
    </svg>
  );
}

export function AzurePavilionTower({ isHovered }: { isHovered?: boolean }) {
  return (
    <svg viewBox="0 0 260 480" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <linearGradient id="az-glass" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0d1526" />
          <stop offset="50%" stopColor="#162040" />
          <stop offset="100%" stopColor="#0a1020" />
        </linearGradient>
        <linearGradient id="az-reflect" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#4a8fe8" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#4a8fe8" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="az-podium" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#162040" />
          <stop offset="100%" stopColor="#0a0a0b" />
        </linearGradient>
        <filter id="az-blur"><feGaussianBlur stdDeviation="3" /></filter>
      </defs>

      {/* Ground glow */}
      <ellipse cx="130" cy="462" rx="80" ry="10" fill="#4a8fe8" fillOpacity={isHovered ? 0.12 : 0.05} filter="url(#az-blur)" />

      {/* Podium */}
      <rect x="35" y="415" width="190" height="55" fill="url(#az-podium)" />
      <rect x="35" y="415" width="190" height="1" fill="#4a8fe8" fillOpacity="0.4" />
      {[0,1,2,3].map(i => (
        <rect key={i} x={50 + i * 44} y="426" width="30" height="32" fill="#4a8fe8" fillOpacity={isHovered ? 0.2 : 0.08} rx="1" />
      ))}

      {/* Curved tower — approximated with a slightly tapered rect */}
      {/* Tower body */}
      <path d="M75 415 L75 100 Q130 80 185 100 L185 415 Z" fill="url(#az-glass)" />

      {/* Horizontal banding — signature of curved glass towers */}
      {Array.from({ length: 20 }).map((_, i) => (
        <line key={i} x1="75" y1={105 + i * 16} x2="185" y2={105 + i * 16} stroke="#4a8fe8" strokeOpacity="0.1" strokeWidth="1" />
      ))}

      {/* Vertical fins */}
      {[0,1,2].map(i => (
        <line key={i} x1={94 + i * 32} y1="100" x2={94 + i * 32} y2="415" stroke="#4a8fe8" strokeOpacity="0.12" strokeWidth="1" />
      ))}

      {/* Window grid */}
      {Array.from({ length: 19 }).map((_, row) =>
        [0,1,2].map(col => (
          <rect
            key={`${row}-${col}`}
            x={82 + col * 32}
            y={108 + row * 16}
            width={22}
            height={10}
            fill="#4a8fe8"
            fillOpacity={isHovered ? (col === 1 ? 0.25 : 0.12) : 0.07}
            rx="0.5"
          />
        ))
      )}

      {/* Diagonal glass reflection */}
      <path d="M75 100 L120 100 L75 200 Z" fill="url(#az-reflect)" />

      {/* Crown — curved top */}
      <path d="M95 60 Q130 40 165 60 L165 100 Q130 80 95 100 Z" fill="#162040" />
      <path d="M95 60 Q130 40 165 60" stroke="#4a8fe8" strokeOpacity="0.7" strokeWidth="1.5" fill="none" />

      {/* Spire */}
      <line x1="130" y1="10" x2="130" y2="62" stroke="#4a8fe8" strokeOpacity="0.8" strokeWidth="1.5" />
      <circle cx="130" cy="10" r="2.5" fill="#4a8fe8" fillOpacity={isHovered ? 1 : 0.5} />

      {/* Edge glow */}
      {isHovered && (
        <>
          <path d="M75 100 L75 415" stroke="#4a8fe8" strokeOpacity="0.4" strokeWidth="1.5" />
          <path d="M185 100 L185 415" stroke="#4a8fe8" strokeOpacity="0.4" strokeWidth="1.5" />
        </>
      )}
    </svg>
  );
}

export function VertexGardensTower({ isHovered }: { isHovered?: boolean }) {
  return (
    <svg viewBox="0 0 260 480" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <linearGradient id="vg-glass" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#0d150d" />
          <stop offset="50%" stopColor="#12201a" />
          <stop offset="100%" stopColor="#0a0f0a" />
        </linearGradient>
        <linearGradient id="vg-podium" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#141f14" />
          <stop offset="100%" stopColor="#0a0a0b" />
        </linearGradient>
        <filter id="vg-blur"><feGaussianBlur stdDeviation="2" /></filter>
      </defs>

      <ellipse cx="130" cy="462" rx="80" ry="10" fill="#3d8b3d" fillOpacity={isHovered ? 0.12 : 0.05} filter="url(#vg-blur)" />

      {/* Wide base / podium */}
      <rect x="25" y="410" width="210" height="60" fill="url(#vg-podium)" />
      <rect x="25" y="410" width="210" height="1" fill="#c9a84c" fillOpacity="0.3" />

      {/* Main tower — stepped setbacks with terraces */}
      {/* Floor 1-8 (widest) */}
      <rect x="55" y="310" width="150" height="100" fill="url(#vg-glass)" />
      {/* Terrace 1 */}
      <rect x="55" y="308" width="150" height="5" fill="#2d5a2d" />
      {/* Terrace vegetation lines */}
      <line x1="60" y1="310" x2="200" y2="310" stroke="#4caf50" strokeOpacity="0.4" strokeWidth="2" />

      {/* Floor 9-16 */}
      <rect x="70" y="210" width="120" height="103" fill="url(#vg-glass)" />
      {/* Terrace 2 */}
      <rect x="70" y="208" width="120" height="5" fill="#2d5a2d" />
      <line x1="74" y1="210" x2="186" y2="210" stroke="#4caf50" strokeOpacity="0.4" strokeWidth="2" />

      {/* Floor 17-24 */}
      <rect x="85" y="120" width="90" height="93" fill="url(#vg-glass)" />
      {/* Terrace 3 */}
      <rect x="85" y="118" width="90" height="5" fill="#2d5a2d" />
      <line x1="88" y1="120" x2="172" y2="120" stroke="#4caf50" strokeOpacity="0.4" strokeWidth="2" />

      {/* Penthouse */}
      <rect x="100" y="70" width="60" height="53" fill="url(#vg-glass)" />
      <rect x="100" y="70" width="60" height="1.5" fill="#c9a84c" fillOpacity="0.7" />

      {/* Window grids — each section */}
      {Array.from({ length: 6 }).map((_, row) =>
        [0,1,2,3].map(col => (
          <rect key={`b1-${row}-${col}`} x={62 + col * 34} y={316 + row * 15} width={22} height={9} fill="#c9a84c" fillOpacity={isHovered ? 0.14 : 0.06} rx="0.5" />
        ))
      )}
      {Array.from({ length: 6 }).map((_, row) =>
        [0,1,2].map(col => (
          <rect key={`b2-${row}-${col}`} x={77 + col * 36} y={215 + row * 15} width={22} height={9} fill="#c9a84c" fillOpacity={isHovered ? 0.14 : 0.06} rx="0.5" />
        ))
      )}
      {Array.from({ length: 5 }).map((_, row) =>
        [0,1].map(col => (
          <rect key={`b3-${row}-${col}`} x={92 + col * 40} y={127 + row * 16} width={26} height={10} fill="#c9a84c" fillOpacity={isHovered ? 0.18 : 0.08} rx="0.5" />
        ))
      )}
      {[0,1].map(col => (
        <rect key={col} x={107 + col * 28} y={78} width={18} height={30} fill="#c9a84c" fillOpacity={isHovered ? 0.25 : 0.1} rx="0.5" />
      ))}

      {/* Crown */}
      <rect x="115" y="40" width="30" height="33" fill="#0d150d" />
      <rect x="115" y="40" width="30" height="1.5" fill="#c9a84c" fillOpacity="0.8" />
      <line x1="130" y1="8" x2="130" y2="42" stroke="#c9a84c" strokeOpacity="0.7" strokeWidth="1.5" />
      <circle cx="130" cy="8" r="2" fill="#4caf50" fillOpacity={isHovered ? 1 : 0.6} />
    </svg>
  );
}

export function HorizonOneTower({ isHovered }: { isHovered?: boolean }) {
  return (
    <svg viewBox="0 0 260 480" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <linearGradient id="hz-glass" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#0a1520" />
          <stop offset="40%" stopColor="#142030" />
          <stop offset="100%" stopColor="#0a1520" />
        </linearGradient>
        <linearGradient id="hz-water" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1a3a5c" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#0a1520" stopOpacity="0.1" />
        </linearGradient>
        <filter id="hz-blur"><feGaussianBlur stdDeviation="3" /></filter>
      </defs>

      {/* Water reflection */}
      <rect x="20" y="430" width="220" height="50" fill="url(#hz-water)" />
      {[0,1,2].map(i => (
        <line key={i} x1="20" y1={436 + i * 8} x2="240" y2={436 + i * 8} stroke="#1a6fa0" strokeOpacity="0.15" strokeWidth="1" />
      ))}

      {/* Podium — wide coastal base */}
      <rect x="30" y="408" width="200" height="24" fill="#142030" />
      <rect x="30" y="408" width="200" height="1" fill="#1a8fe8" fillOpacity="0.4" />

      {/* Slender tower — characteristic of waterfront towers */}
      <rect x="95" y="80" width="70" height="330" fill="url(#hz-glass)" />

      {/* Horizontal banding — strong architectural feature */}
      {Array.from({ length: 22 }).map((_, i) => (
        <rect key={i} x="95" y={82 + i * 15} width="70" height="2" fill="#1a8fe8" fillOpacity={i % 4 === 0 ? 0.2 : 0.06} />
      ))}

      {/* Glass reflection */}
      <polygon points="95,80 130,80 95,160" fill="#1a8fe8" fillOpacity="0.12" />

      {/* Window columns — slender building */}
      {Array.from({ length: 20 }).map((_, row) =>
        [0,1].map(col => (
          <rect key={`${row}-${col}`} x={101 + col * 30} y={88 + row * 15} width={18} height={9} fill="#1a8fe8" fillOpacity={isHovered ? (row % 2 === 0 ? 0.3 : 0.12) : 0.08} rx="0.5" />
        ))
      )}

      {/* Wing extensions at mid-level */}
      <rect x="65" y="240" width="30" height="100" fill="#0a1520" />
      <rect x="165" y="240" width="30" height="100" fill="#0a1520" />
      {/* wing windows */}
      {Array.from({ length: 6 }).map((_, i) => (
        <rect key={`wl-${i}`} x="70" y={248 + i * 14} width="16" height="8" fill="#1a8fe8" fillOpacity={isHovered ? 0.2 : 0.07} rx="0.5" />
      ))}
      {Array.from({ length: 6 }).map((_, i) => (
        <rect key={`wr-${i}`} x="174" y={248 + i * 14} width="16" height="8" fill="#1a8fe8" fillOpacity={isHovered ? 0.2 : 0.07} rx="0.5" />
      ))}

      {/* Crown observation deck */}
      <rect x="82" y="58" width="96" height="25" fill="#142030" />
      <rect x="82" y="58" width="96" height="1.5" fill="#1a8fe8" fillOpacity="0.7" />
      <rect x="88" y="62" width="84" height="15" fill="#1a8fe8" fillOpacity={isHovered ? 0.25 : 0.1} rx="1" />

      {/* Antenna */}
      <line x1="130" y1="10" x2="130" y2="60" stroke="#1a8fe8" strokeOpacity="0.7" strokeWidth="1.5" />
      <circle cx="130" cy="10" r="2.5" fill="#1a8fe8" fillOpacity={isHovered ? 1 : 0.5} />

      {/* Edge glow */}
      {isHovered && (
        <>
          <rect x="95" y="80" width="1" height="330" fill="#1a8fe8" fillOpacity="0.5" />
          <rect x="164" y="80" width="1" height="330" fill="#1a8fe8" fillOpacity="0.5" />
        </>
      )}
    </svg>
  );
}

export function CelestiaDoubleTower({ isHovered }: { isHovered?: boolean }) {
  return (
    <svg viewBox="0 0 260 480" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <linearGradient id="cel-glass-l" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#100d1a" />
          <stop offset="60%" stopColor="#1c1830" />
          <stop offset="100%" stopColor="#0d0a18" />
        </linearGradient>
        <linearGradient id="cel-glass-r" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#0d0a18" />
          <stop offset="40%" stopColor="#1c1830" />
          <stop offset="100%" stopColor="#100d1a" />
        </linearGradient>
        <linearGradient id="cel-gold" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#e8c96a" />
          <stop offset="100%" stopColor="#c9a84c" />
        </linearGradient>
        <filter id="cel-blur"><feGaussianBlur stdDeviation="3" /></filter>
      </defs>

      <ellipse cx="130" cy="464" rx="100" ry="12" fill="#c9a84c" fillOpacity={isHovered ? 0.12 : 0.05} filter="url(#cel-blur)" />

      {/* Shared podium */}
      <rect x="20" y="406" width="220" height="64" fill="#100d1a" />
      <rect x="20" y="406" width="220" height="1.5" fill="#c9a84c" fillOpacity="0.5" />
      {[0,1,2,3,4,5].map(i => (
        <rect key={i} x={28 + i * 35} y="416" width="22" height="40" fill="#c9a84c" fillOpacity={isHovered ? 0.18 : 0.07} rx="1" />
      ))}

      {/* LEFT TOWER */}
      <rect x="30" y="60" width="85" height="348" fill="url(#cel-glass-l)" />
      {/* left tower vertical fins */}
      <line x1="62" y1="60" x2="62" y2="408" stroke="#c9a84c" strokeOpacity="0.08" strokeWidth="1" />
      <line x1="93" y1="60" x2="93" y2="408" stroke="#c9a84c" strokeOpacity="0.08" strokeWidth="1" />
      {/* left tower horizontal bands */}
      {Array.from({ length: 22 }).map((_, i) => (
        <rect key={i} x="30" y={62 + i * 16} width="85" height="1" fill="#ffffff" fillOpacity="0.04" />
      ))}
      {/* left tower windows */}
      {Array.from({ length: 20 }).map((_, row) =>
        [0,1].map(col => (
          <rect key={`l-${row}-${col}`} x={36 + col * 34} y={68 + row * 16} width={22} height={10} fill="#c9a84c" fillOpacity={isHovered ? (row % 3 === 0 ? 0.22 : 0.1) : 0.07} rx="0.5" />
        ))
      )}
      {/* Left crown */}
      <rect x="30" y="40" width="85" height="24" fill="#1c1830" />
      <rect x="30" y="40" width="85" height="1.5" fill="url(#cel-gold)" />
      <line x1="72" y1="6" x2="72" y2="42" stroke="#c9a84c" strokeOpacity="0.8" strokeWidth="1.5" />
      <circle cx="72" cy="6" r="2.5" fill="#c9a84c" fillOpacity={isHovered ? 1 : 0.5} />

      {/* RIGHT TOWER */}
      <rect x="145" y="80" width="85" height="328" fill="url(#cel-glass-r)" />
      {/* right tower vertical fins */}
      <line x1="177" y1="80" x2="177" y2="408" stroke="#c9a84c" strokeOpacity="0.08" strokeWidth="1" />
      <line x1="208" y1="80" x2="208" y2="408" stroke="#c9a84c" strokeOpacity="0.08" strokeWidth="1" />
      {/* right tower horizontal bands */}
      {Array.from({ length: 20 }).map((_, i) => (
        <rect key={i} x="145" y={82 + i * 16} width="85" height="1" fill="#ffffff" fillOpacity="0.04" />
      ))}
      {/* right tower windows */}
      {Array.from({ length: 18 }).map((_, row) =>
        [0,1].map(col => (
          <rect key={`r-${row}-${col}`} x={151 + col * 34} y={88 + row * 16} width={22} height={10} fill="#c9a84c" fillOpacity={isHovered ? (row % 4 === 0 ? 0.22 : 0.1) : 0.07} rx="0.5" />
        ))
      )}
      {/* Right crown */}
      <rect x="145" y="58" width="85" height="26" fill="#1c1830" />
      <rect x="145" y="58" width="85" height="1.5" fill="url(#cel-gold)" />
      <line x1="187" y1="14" x2="187" y2="60" stroke="#c9a84c" strokeOpacity="0.8" strokeWidth="1.5" />
      <circle cx="187" cy="14" r="2.5" fill="#c9a84c" fillOpacity={isHovered ? 1 : 0.5} />

      {/* Sky bridge */}
      <rect x="115" y="210" width="30" height="10" fill="#1c1830" />
      <rect x="115" y="210" width="30" height="1" fill="#c9a84c" fillOpacity="0.6" />
      <rect x="115" y="219" width="30" height="1" fill="#c9a84c" fillOpacity="0.3" />
      {[0,1,2,3].map(i => (
        <line key={i} x1={117 + i * 7} y1="210" x2={117 + i * 7} y2="220" stroke="#c9a84c" strokeOpacity="0.3" strokeWidth="1" />
      ))}

      {/* Edge glow */}
      {isHovered && (
        <>
          <rect x="30" y="60" width="1" height="348" fill="#c9a84c" fillOpacity="0.4" />
          <rect x="229" y="80" width="1" height="328" fill="#c9a84c" fillOpacity="0.4" />
        </>
      )}
    </svg>
  );
}

export function AureonBlock({ isHovered }: { isHovered?: boolean }) {
  return (
    <svg viewBox="0 0 260 480" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <linearGradient id="au-glass" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#120f0a" />
          <stop offset="50%" stopColor="#1e1a14" />
          <stop offset="100%" stopColor="#120f0a" />
        </linearGradient>
        <linearGradient id="au-podium" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1e1a14" />
          <stop offset="100%" stopColor="#0a0a0b" />
        </linearGradient>
        <filter id="au-blur"><feGaussianBlur stdDeviation="2" /></filter>
      </defs>

      <ellipse cx="130" cy="462" rx="90" ry="10" fill="#e8a040" fillOpacity={isHovered ? 0.1 : 0.04} filter="url(#au-blur)" />

      {/* Podium */}
      <rect x="20" y="408" width="220" height="62" fill="url(#au-podium)" />
      <rect x="20" y="408" width="220" height="1.5" fill="#e8a040" fillOpacity="0.4" />
      {/* Lobby entrance */}
      <rect x="95" y="420" width="70" height="50" fill="#e8a040" fillOpacity={isHovered ? 0.15 : 0.06} rx="1" />
      <line x1="130" y1="420" x2="130" y2="470" stroke="#e8a040" strokeOpacity="0.2" strokeWidth="1" />
      {/* Podium wings */}
      {[0,1].map(i => (
        <rect key={i} x={24 + i * 166} y="416" width="60" height="32" fill="#e8a040" fillOpacity={isHovered ? 0.1 : 0.04} />
      ))}

      {/* Left wing tower */}
      <rect x="22" y="200" width="60" height="210" fill="url(#au-glass)" />
      {Array.from({ length: 13 }).map((_, row) =>
        [0,1].map(col => (
          <rect key={`lw-${row}-${col}`} x={28 + col * 26} y={206 + row * 16} width={18} height={10} fill="#e8a040" fillOpacity={isHovered ? 0.2 : 0.08} rx="0.5" />
        ))
      )}
      {Array.from({ length: 13 }).map((_, i) => (
        <rect key={i} x="22" y={206 + i * 16} width="60" height="1" fill="#ffffff" fillOpacity="0.04" />
      ))}

      {/* Right wing tower */}
      <rect x="178" y="200" width="60" height="210" fill="url(#au-glass)" />
      {Array.from({ length: 13 }).map((_, row) =>
        [0,1].map(col => (
          <rect key={`rw-${row}-${col}`} x={184 + col * 26} y={206 + row * 16} width={18} height={10} fill="#e8a040" fillOpacity={isHovered ? 0.2 : 0.08} rx="0.5" />
        ))
      )}

      {/* Central main tower */}
      <rect x="68" y="80" width="124" height="330" fill="url(#au-glass)" />
      {/* Center vertical lines */}
      <line x1="100" y1="80" x2="100" y2="410" stroke="#e8a040" strokeOpacity="0.07" strokeWidth="1" />
      <line x1="130" y1="80" x2="130" y2="410" stroke="#e8a040" strokeOpacity="0.05" strokeWidth="1" />
      <line x1="160" y1="80" x2="160" y2="410" stroke="#e8a040" strokeOpacity="0.07" strokeWidth="1" />
      {/* Center windows */}
      {Array.from({ length: 21 }).map((_, row) =>
        [0,1,2].map(col => (
          <rect key={`c-${row}-${col}`} x={74 + col * 38} y={86 + row * 15} width={26} height={9} fill="#e8a040" fillOpacity={isHovered ? (row % 3 === 0 ? 0.25 : 0.12) : 0.07} rx="0.5" />
        ))
      )}
      {Array.from({ length: 21 }).map((_, i) => (
        <rect key={i} x="68" y={86 + i * 15} width="124" height="1" fill="#ffffff" fillOpacity="0.04" />
      ))}

      {/* Crown */}
      <rect x="68" y="58" width="124" height="26" fill="#1e1a14" />
      <rect x="68" y="58" width="124" height="1.5" fill="#e8a040" fillOpacity="0.7" />
      <rect x="80" y="62" width="100" height="16" fill="#e8a040" fillOpacity={isHovered ? 0.18 : 0.07} />
      <line x1="130" y1="12" x2="130" y2="60" stroke="#e8a040" strokeOpacity="0.7" strokeWidth="1.5" />
      <circle cx="130" cy="12" r="2.5" fill="#e8a040" fillOpacity={isHovered ? 1 : 0.5} />

      {/* Edge glow */}
      {isHovered && (
        <>
          <rect x="68" y="80" width="1" height="330" fill="#e8a040" fillOpacity="0.5" />
          <rect x="191" y="80" width="1" height="330" fill="#e8a040" fillOpacity="0.5" />
        </>
      )}
    </svg>
  );
}

export function HeroSkyscraper({ mouseX, mouseY }: { mouseX: number; mouseY: number }) {
  return (
    <svg viewBox="0 0 320 600" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full"
      style={{ transform: `rotateY(${mouseX}deg) rotateX(${-mouseY}deg)`, transition: "transform 0.08s ease-out" }}>
      <defs>
        <linearGradient id="hero-glass" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#0d0d14" />
          <stop offset="35%" stopColor="#1a1a30" />
          <stop offset="65%" stopColor="#232345" />
          <stop offset="100%" stopColor="#0d0d14" />
        </linearGradient>
        <linearGradient id="hero-glass2" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#0d0d14" />
          <stop offset="45%" stopColor="#1e1e3a" />
          <stop offset="100%" stopColor="#0d0d14" />
        </linearGradient>
        <linearGradient id="hero-gold" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f0d080" />
          <stop offset="100%" stopColor="#c9a84c" />
        </linearGradient>
        <linearGradient id="hero-podium" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1a1a30" />
          <stop offset="100%" stopColor="#0a0a0b" />
        </linearGradient>
        <linearGradient id="hero-reflect" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#c9a84c" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#c9a84c" stopOpacity="0" />
        </linearGradient>
        <filter id="hero-glow"><feGaussianBlur stdDeviation="4" /></filter>
        <filter id="hero-soft"><feGaussianBlur stdDeviation="6" /></filter>
      </defs>

      {/* Ambient ground glow */}
      <ellipse cx="160" cy="590" rx="130" ry="16" fill="#c9a84c" fillOpacity="0.2" filter="url(#hero-soft)" />

      {/* Wide podium */}
      <rect x="20" y="510" width="280" height="80" fill="url(#hero-podium)" />
      <rect x="20" y="510" width="280" height="1.5" fill="url(#hero-gold)" fillOpacity="0.6" />
      {/* Podium windows */}
      {[0,1,2,3,4,5,6].map(i => (
        <rect key={i} x={30 + i * 38} y="522" width="26" height="44" fill="#c9a84c" fillOpacity="0.08" rx="1" />
      ))}
      <rect x="20" y="545" width="280" height="1" fill="#ffffff" fillOpacity="0.05" />

      {/* Tower base (widest) */}
      <rect x="55" y="240" width="210" height="272" fill="url(#hero-glass)" />
      {/* Base glass reflection */}
      <polygon points="55,240 130,240 55,360" fill="url(#hero-reflect)" />
      {/* Base vertical fins */}
      {[0,1,2,3,4].map(i => (
        <line key={i} x1={97 + i * 38} y1="240" x2={97 + i * 38} y2="512" stroke="#c9a84c" strokeOpacity="0.08" strokeWidth="1" />
      ))}
      {/* Base windows */}
      {Array.from({ length: 17 }).map((_, row) =>
        [0,1,2,3,4].map(col => (
          <rect key={`base-${row}-${col}`} x={62 + col * 38} y={246 + row * 15} width={24} height={9} fill="#c9a84c" fillOpacity={row % 4 === 0 ? 0.14 : 0.07} rx="0.5" />
        ))
      )}
      {Array.from({ length: 17 }).map((_, i) => (
        <rect key={i} x="55" y={255 + i * 15} width="210" height="1" fill="#ffffff" fillOpacity="0.04" />
      ))}

      {/* Setback 1 */}
      <rect x="75" y="160" width="170" height="84" fill="url(#hero-glass2)" />
      <rect x="75" y="160" width="170" height="2" fill="url(#hero-gold)" fillOpacity="0.5" />
      {/* setback 1 reflection */}
      <polygon points="75,160 130,160 75,220" fill="#c9a84c" fillOpacity="0.08" />
      {[0,1,2,3].map(i => (
        <line key={i} x1={110 + i * 34} y1="160" x2={110 + i * 34} y2="244" stroke="#c9a84c" strokeOpacity="0.07" strokeWidth="1" />
      ))}
      {Array.from({ length: 5 }).map((_, row) =>
        [0,1,2,3].map(col => (
          <rect key={`s1-${row}-${col}`} x={82 + col * 38} y={166 + row * 16} width={26} height={10} fill="#c9a84c" fillOpacity={row % 2 === 0 ? 0.15 : 0.08} rx="0.5" />
        ))
      )}

      {/* Setback 2 */}
      <rect x="98" y="100" width="124" height="64" fill="url(#hero-glass2)" />
      <rect x="98" y="100" width="124" height="2" fill="url(#hero-gold)" fillOpacity="0.7" />
      {Array.from({ length: 4 }).map((_, row) =>
        [0,1,2].map(col => (
          <rect key={`s2-${row}-${col}`} x={106 + col * 36} y={108 + row * 14} width={24} height={8} fill="#c9a84c" fillOpacity={0.12} rx="0.5" />
        ))
      )}

      {/* Setback 3 — crown base */}
      <rect x="118" y="60" width="84" height="44" fill="url(#hero-glass)" />
      <rect x="118" y="60" width="84" height="2" fill="url(#hero-gold)" fillOpacity="0.9" />
      {[0,1].map(col => (
        <rect key={col} x={126 + col * 36} y={68} width={28} height={28} fill="#c9a84c" fillOpacity="0.2" rx="0.5" />
      ))}

      {/* Antenna mast */}
      <rect x="156" y="10" width="8" height="52" fill="url(#hero-gold)" fillOpacity="0.6" />
      <line x1="160" y1="2" x2="160" y2="14" stroke="#f0d080" strokeWidth="2" />
      <circle cx="160" cy="2" r="3" fill="#f0d080" />
      {/* Antenna glow */}
      <circle cx="160" cy="2" r="8" fill="#c9a84c" fillOpacity="0.3" filter="url(#hero-glow)" />

      {/* Luminous edge lines — left */}
      <line x1="55" y1="240" x2="55" y2="512" stroke="#c9a84c" strokeOpacity="0.3" strokeWidth="1.5" />
      <line x1="75" y1="160" x2="75" y2="240" stroke="#c9a84c" strokeOpacity="0.25" strokeWidth="1" />
      <line x1="98" y1="100" x2="98" y2="160" stroke="#c9a84c" strokeOpacity="0.2" strokeWidth="1" />
      {/* Right edges */}
      <line x1="265" y1="240" x2="265" y2="512" stroke="#c9a84c" strokeOpacity="0.3" strokeWidth="1.5" />
      <line x1="245" y1="160" x2="245" y2="240" stroke="#c9a84c" strokeOpacity="0.25" strokeWidth="1" />
      <line x1="222" y1="100" x2="222" y2="160" stroke="#c9a84c" strokeOpacity="0.2" strokeWidth="1" />
    </svg>
  );
}

export function IsometricBuildingCutaway({ activeLayer }: { activeLayer: number | null }) {
  // Each floor is drawn as a 3/4-perspective box so it reads as a real building section.
  // Coordinates use a simple cabinet-projection: front face is upright, depth goes up-right.
  // Building is centred in the 480×540 viewBox — nothing is clipped.

  const DEPTH_X = 52;   // how far the depth face goes to the right
  const DEPTH_Y = -26;  // how far the depth face goes upward (negative = up)

  // floor definitions — from top to bottom of the building
  const floors = [
    {
      id: 3,
      label: "PENTHOUSE",
      // A set-back narrower floor at the very top — smaller footprint, glass roof
      x: 148, y: 28, w: 184, h: 82,
      accentColor: "#f0d080",
      content: "penthouse",
    },
    {
      id: 2,
      label: "RESIDENCES",
      // Standard residential floors — full-width, repeating windows
      x: 110, y: 110, w: 260, h: 130,
      accentColor: "#c9a84c",
      content: "residences",
    },
    {
      id: 1,
      label: "PODIUM",
      // Amenity floor — pool, lounge; slightly wider, taller ceiling
      x: 90, y: 240, w: 300, h: 120,
      accentColor: "#d4a855",
      content: "podium",
    },
    {
      id: 0,
      label: "LOBBY",
      // Grand entrance — double height, large glazed doors
      x: 80, y: 360, w: 320, h: 110,
      accentColor: "#e8c96a",
      content: "lobby",
    },
  ];

  const isHighlighted = (id: number) => activeLayer === id;

  return (
    <svg viewBox="0 0 480 510" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <linearGradient id="cut-front-dark" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1a1a30" />
          <stop offset="100%" stopColor="#0f0f1e" />
        </linearGradient>
        <linearGradient id="cut-front-ph" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#22203a" />
          <stop offset="100%" stopColor="#181830" />
        </linearGradient>
        <linearGradient id="cut-side" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#0d0d1e" />
          <stop offset="100%" stopColor="#181828" />
        </linearGradient>
        <linearGradient id="cut-top" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#252540" />
          <stop offset="100%" stopColor="#18182e" />
        </linearGradient>
        <filter id="cut-glow"><feGaussianBlur stdDeviation="4" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
        <filter id="cut-shadow"><feGaussianBlur stdDeviation="6" /></filter>
      </defs>

      {/* Ground shadow */}
      <ellipse cx="265" cy="492" rx="180" ry="12" fill="#c9a84c" fillOpacity="0.08" filter="url(#cut-shadow)" />

      {floors.map((floor) => {
        const { id, x, y, w, h, accentColor, content } = floor;
        const active = isHighlighted(id);
        const lift = active ? -14 : 0;
        const Y = y + lift;

        // Cabinet projection points
        // Front face corners
        const fl = { x: x,     y: Y };          // front top-left
        const fr = { x: x + w, y: Y };          // front top-right
        const bl = { x: x + DEPTH_X, y: Y + DEPTH_Y };           // back top-left
        const br = { x: x + w + DEPTH_X, y: Y + DEPTH_Y };       // back top-right

        const frontBL = { x: x,     y: Y + h };
        const frontBR = { x: x + w, y: Y + h };

        return (
          <g key={id} style={{ transition: "transform 0.45s cubic-bezier(0.34,1.4,0.64,1)", transform: `translateY(${lift}px)` }}>

            {/* ── TOP FACE (roof/slab) ── */}
            <polygon
              points={`${fl.x},${fl.y} ${fr.x},${fr.y} ${br.x},${br.y} ${bl.x},${bl.y}`}
              fill={active ? "#2a2848" : "url(#cut-top)"}
              stroke={accentColor}
              strokeOpacity={active ? 0.9 : 0.3}
              strokeWidth={active ? 1.5 : 1}
            />
            {/* Roof grid lines */}
            {[0.33, 0.66].map((t) => (
              <line key={t}
                x1={fl.x + (fr.x - fl.x) * t} y1={fl.y}
                x2={bl.x + (br.x - bl.x) * t} y2={bl.y}
                stroke={accentColor} strokeOpacity={active ? 0.25 : 0.07} strokeWidth="1"
              />
            ))}
            {[0.5].map((t) => (
              <line key={t}
                x1={fl.x + (bl.x - fl.x) * t} y1={fl.y + (bl.y - fl.y) * t}
                x2={fr.x + (br.x - fr.x) * t} y2={fr.y + (br.y - fr.y) * t}
                stroke={accentColor} strokeOpacity={active ? 0.2 : 0.05} strokeWidth="1"
              />
            ))}
            {/* Active top face glow */}
            {active && (
              <polygon
                points={`${fl.x},${fl.y} ${fr.x},${fr.y} ${br.x},${br.y} ${bl.x},${bl.y}`}
                fill={accentColor} fillOpacity="0.06"
              />
            )}

            {/* ── RIGHT/DEPTH FACE ── */}
            <polygon
              points={`${fr.x},${fr.y} ${br.x},${br.y} ${br.x},${br.y + h} ${frontBR.x},${frontBR.y}`}
              fill="url(#cut-side)"
              stroke={accentColor}
              strokeOpacity={active ? 0.4 : 0.12}
              strokeWidth="1"
            />
            {/* Depth face windows (1-2 small ones) */}
            {content === "lobby" && (
              <rect x={fr.x + 6} y={Y + 20} width={DEPTH_X - 12} height={h - 40} fill={accentColor} fillOpacity={active ? 0.2 : 0.07} rx="1" />
            )}
            {content !== "lobby" && [0.25, 0.65].map((t) => (
              <rect key={t}
                x={fr.x + 5}
                y={Y + h * t + 5}
                width={DEPTH_X - 12}
                height={content === "podium" ? 20 : 14}
                fill={accentColor} fillOpacity={active ? 0.22 : 0.08} rx="1"
              />
            ))}

            {/* ── FRONT FACE ── */}
            <rect
              x={x} y={Y}
              width={w} height={h}
              fill={active ? "url(#cut-front-ph)" : "url(#cut-front-dark)"}
              stroke={accentColor}
              strokeOpacity={active ? 0.8 : 0.22}
              strokeWidth={active ? 1.5 : 1}
            />

            {/* ── INTERIOR CONTENT by floor type ── */}

            {/* PENTHOUSE: glass roof panels + lounge silhouette */}
            {content === "penthouse" && (
              <g>
                {/* Glazed panels */}
                {[0,1,2,3,4].map((i) => (
                  <rect key={i}
                    x={x + 12 + i * 32} y={Y + 10}
                    width={24} height={h - 20}
                    fill={accentColor} fillOpacity={active ? 0.22 : 0.09} rx="1"
                  />
                ))}
                {/* Terrace railing line at top of floor */}
                <line x1={x + 8} y1={Y + 8} x2={x + w - 8} y2={Y + 8} stroke={accentColor} strokeOpacity="0.5" strokeWidth="1" />
                {/* Furniture silhouette */}
                <rect x={x + 60} y={Y + h - 24} width={60} height={10} fill={accentColor} fillOpacity={active ? 0.3 : 0.1} rx="2" />
                <rect x={x + 128} y={Y + h - 28} width={30} height={14} fill={accentColor} fillOpacity={active ? 0.25 : 0.08} rx="1" />
              </g>
            )}

            {/* RESIDENCES: rows of apartment windows */}
            {content === "residences" && (
              <g>
                {/* Row 1 — upper apartments */}
                {[0,1,2,3,4,5].map((i) => (
                  <rect key={`r1-${i}`}
                    x={x + 16 + i * 40} y={Y + 16}
                    width={26} height={38}
                    fill={accentColor} fillOpacity={active ? (i % 2 === 0 ? 0.28 : 0.14) : (i % 2 === 0 ? 0.12 : 0.06)} rx="1"
                  />
                ))}
                {/* Floor slab divider */}
                <line x1={x} y1={Y + 66} x2={x + w} y2={Y + 66} stroke={accentColor} strokeOpacity="0.2" strokeWidth="1.5" />
                {/* Row 2 — lower apartments */}
                {[0,1,2,3,4,5].map((i) => (
                  <rect key={`r2-${i}`}
                    x={x + 16 + i * 40} y={Y + 76}
                    width={26} height={38}
                    fill={accentColor} fillOpacity={active ? (i % 2 === 1 ? 0.28 : 0.14) : (i % 2 === 1 ? 0.12 : 0.06)} rx="1"
                  />
                ))}
                {/* Vertical divisions between units */}
                {[1,2,3,4,5].map((i) => (
                  <line key={i}
                    x1={x + i * (w / 6)} y1={Y}
                    x2={x + i * (w / 6)} y2={Y + h}
                    stroke={accentColor} strokeOpacity="0.08" strokeWidth="1"
                  />
                ))}
              </g>
            )}

            {/* PODIUM: pool + lounge area */}
            {content === "podium" && (
              <g>
                {/* Pool rectangle */}
                <rect x={x + 20} y={Y + 20} width={140} height={80} rx="4"
                  fill="#1a3a5c" stroke="#4a9fd4" strokeOpacity={active ? 0.6 : 0.25} strokeWidth="1.5"
                />
                {/* Pool water shimmer lines */}
                {[0,1,2,3].map((i) => (
                  <line key={i}
                    x1={x + 28} y1={Y + 32 + i * 18}
                    x2={x + 152} y2={Y + 32 + i * 18}
                    stroke="#4a9fd4" strokeOpacity={active ? 0.3 : 0.1} strokeWidth="1"
                  />
                ))}
                {/* Lounge chairs */}
                {[0,1,2].map((i) => (
                  <rect key={i}
                    x={x + 176 + i * 36} y={Y + 40}
                    width={28} height={14}
                    fill={accentColor} fillOpacity={active ? 0.3 : 0.1} rx="3"
                  />
                ))}
                {/* Gym equipment silhouette */}
                <rect x={x + 176} y={Y + 66} width={100} height={32} rx="2"
                  fill={accentColor} fillOpacity={active ? 0.1 : 0.04}
                />
              </g>
            )}

            {/* LOBBY: grand entrance with double-height glazing */}
            {content === "lobby" && (
              <g>
                {/* Central revolving door / entrance */}
                <rect x={x + w / 2 - 36} y={Y + 20} width={72} height={h - 24} rx="2"
                  fill={accentColor} fillOpacity={active ? 0.18 : 0.07}
                />
                <line x1={x + w / 2} y1={Y + 20} x2={x + w / 2} y2={Y + h - 4}
                  stroke={accentColor} strokeOpacity={active ? 0.4 : 0.15} strokeWidth="1"
                />
                {/* Side glazing panels */}
                {[0,1].map((side) => {
                  const px = side === 0 ? x + 20 : x + w / 2 + 44;
                  return (
                    <g key={side}>
                      {[0,1,2].map((i) => (
                        <rect key={i}
                          x={px + i * 26} y={Y + 20}
                          width={20} height={h - 26}
                          fill={accentColor} fillOpacity={active ? 0.14 : 0.06} rx="1"
                        />
                      ))}
                    </g>
                  );
                })}
                {/* Reception desk */}
                <rect x={x + w / 2 - 50} y={Y + h - 32} width={100} height={18} rx="2"
                  fill={accentColor} fillOpacity={active ? 0.35 : 0.12}
                />
                {/* Ceiling height marker */}
                <line x1={x + 12} y1={Y + 4} x2={x + 12} y2={Y + h - 4}
                  stroke={accentColor} strokeOpacity={active ? 0.4 : 0.12} strokeWidth="1" strokeDasharray="4 4"
                />
              </g>
            )}

            {/* Active edge glow */}
            {active && (
              <>
                <rect x={x} y={Y} width={w} height={1.5} fill={accentColor} fillOpacity="0.95" filter="url(#cut-glow)" />
                <rect x={x} y={Y} width={1.5} height={h} fill={accentColor} fillOpacity="0.5" />
                <rect x={x + w - 1.5} y={Y} width={1.5} height={h} fill={accentColor} fillOpacity="0.5" />
              </>
            )}
          </g>
        );
      })}

      {/* Vertical structure lines — full-height column guides */}
      <line x1="104" y1="360" x2="104" y2="470" stroke="#c9a84c" strokeOpacity="0.08" strokeWidth="1" />
      <line x1="380" y1="360" x2="380" y2="470" stroke="#c9a84c" strokeOpacity="0.08" strokeWidth="1" />
    </svg>
  );
}
