import { useId } from 'react';

export function LadiesGroup({ className = '' }: { className?: string }) {
  const uid = useId();
  const gownA = `gownA-${uid}`;
  const gownB = `gownB-${uid}`;
  const gownC = `gownC-${uid}`;
  return (
    <svg viewBox="0 0 300 350" className={className || 'w-full h-auto'} role="img" aria-label="Illustration of three ladies in dusty blue gowns">
      <defs>
        <linearGradient id={gownA} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#C3D8EC" />
          <stop offset="1" stopColor="#9FBEDE" />
        </linearGradient>
        <linearGradient id={gownB} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#A9C4E2" />
          <stop offset="1" stopColor="#7E9CC4" />
        </linearGradient>
        <linearGradient id={gownC} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#CBDFF0" />
          <stop offset="1" stopColor="#A6C3E0" />
        </linearGradient>
      </defs>

      <ellipse cx="150" cy="336" rx="140" ry="7" fill="rgba(30,51,85,0.12)" />

      {/* ── Lady 1 · blonde · V-neck chiffon ── */}
      <g>
        <path d="M56,8 C40,8 33,20 34,36 C34,48 39,56 44,60 L68,60 C73,56 78,48 78,36 C79,20 72,8 56,8 Z" fill="#E9CD96" />
        <path d="M35,36 C34,50 37,60 41,66 L46,62 C43,54 41,45 42,36 Z" fill="#E9CD96" />
        <path d="M77,36 C78,50 75,60 71,66 L66,62 C69,54 71,45 70,36 Z" fill="#E9CD96" />
        <ellipse cx="56" cy="32" rx="12" ry="14" fill="#F5D9C3" />
        <path d="M44,24 C47,16 65,16 68,24 C61,19 51,19 44,24 Z" fill="#E9CD96" />
        <path d="M52,45 L60,45 L60,54 L52,54 Z" fill="#EBCBB0" />
        <path d="M48,56 L56,70 L64,56 C60,53 52,53 48,56 Z" fill="#F5D9C3" />
        <path d="M40,56 L48,56 L56,72 L64,56 L72,56 C75,64 76,74 75,84 L72,108 L40,108 L37,84 C36,74 37,64 40,56 Z" fill={`url(#${gownA})`} />
        <path d="M40,58 C34,72 33,92 37,106 C39,114 44,120 50,124 L53,119 C47,113 44,105 42,95 C40,84 42,70 45,60 Z" fill="#F5D9C3" />
        <path d="M72,58 C78,72 79,92 75,106 C73,114 68,120 62,124 L59,119 C65,113 68,105 70,95 C72,84 70,70 67,60 Z" fill="#F5D9C3" />
        <ellipse cx="56" cy="127" rx="5" ry="3.5" fill="#F5D9C3" />
        <path d="M39,106 L73,106 L74,115 L38,115 Z" fill="#8FB3D9" />
        <path d="M38,115 C32,160 27,230 23,318 C34,326 46,328 56,328 C66,328 78,326 89,318 C85,230 80,160 74,115 Z" fill={`url(#${gownA})`} />
        <g stroke="#8FB3D9" strokeWidth="1.4" fill="none" opacity="0.5">
          <path d="M48,120 C45,180 42,250 40,314" />
          <path d="M56,120 C55,180 55,250 54,322" />
          <path d="M64,120 C67,180 70,250 72,314" />
        </g>
        <path d="M23,318 C34,326 46,328 56,328 C66,328 78,326 89,318 C78,323 66,325 56,325 C46,325 34,323 23,318 Z" fill="#8FB3D9" opacity="0.4" />
      </g>

      {/* ── Lady 2 · brown skin · black curls · sleeveless ── */}
      <g>
        <path d="M150,6 C130,6 121,22 122,42 C122,56 128,66 135,71 L165,71 C172,66 178,56 178,42 C179,22 170,6 150,6 Z" fill="#2E2620" />
        <g fill="#2E2620">
          <circle cx="128" cy="22" r="5" />
          <circle cx="172" cy="22" r="5" />
          <circle cx="124" cy="38" r="4" />
          <circle cx="176" cy="38" r="4" />
          <circle cx="129" cy="58" r="4" />
          <circle cx="171" cy="58" r="4" />
        </g>
        <ellipse cx="150" cy="32" rx="12" ry="14" fill="#8D5A3B" />
        <path d="M138,24 C141,16 159,16 162,24 C155,19 145,19 138,24 Z" fill="#2E2620" />
        <path d="M146,45 L154,45 L154,54 L146,54 Z" fill="#7A4B30" />
        <path d="M138,56 L142,48 L146,51 L143,56 Z" fill="#6E8FB8" />
        <path d="M162,56 L158,48 L154,51 L157,56 Z" fill="#6E8FB8" />
        <path d="M134,56 L166,56 C169,66 170,76 169,86 L166,110 L134,110 L131,86 C130,76 131,66 134,56 Z" fill={`url(#${gownB})`} />
        <path d="M134,58 C128,72 127,92 131,106 C133,114 138,120 144,124 L147,119 C141,113 138,105 136,95 C134,84 136,70 139,60 Z" fill="#8D5A3B" />
        <path d="M166,58 C172,72 173,92 169,106 C167,114 162,120 156,124 L153,119 C159,113 162,105 164,95 C166,84 164,70 161,60 Z" fill="#8D5A3B" />
        <ellipse cx="150" cy="127" rx="5" ry="3.5" fill="#8D5A3B" />
        <path d="M133,108 L167,108 L168,117 L132,117 Z" fill="#6E8FB8" />
        <path d="M133,117 C127,162 122,232 118,320 C129,328 141,330 150,330 C159,330 171,328 182,320 C178,232 173,162 167,117 Z" fill={`url(#${gownB})`} />
        <g stroke="#6E8FB8" strokeWidth="1.4" fill="none" opacity="0.5">
          <path d="M142,122 C139,182 136,252 134,316" />
          <path d="M150,122 C149,182 149,252 148,320" />
          <path d="M158,122 C161,182 164,252 166,316" />
        </g>
        <path d="M118,320 C129,328 141,330 150,330 C159,330 171,328 182,320 C171,325 159,327 150,327 C141,327 129,325 118,320 Z" fill="#6E8FB8" opacity="0.4" />
      </g>

      {/* ── Lady 3 · long black hair · illusion neckline ── */}
      <g>
        <path d="M244,8 C229,8 222,20 223,38 C223,60 221,84 219,104 L226,106 C228,86 229,66 229,50 L259,50 C259,66 260,86 262,106 L269,104 C267,84 265,60 265,38 C266,20 259,8 244,8 Z" fill="#241C16" />
        <ellipse cx="244" cy="32" rx="12" ry="14" fill="#EAC3A6" />
        <path d="M232,24 C235,16 253,16 256,24 C249,19 239,19 232,24 Z" fill="#241C16" />
        <path d="M240,45 L248,45 L248,54 L240,54 Z" fill="#D9AF8E" />
        <path d="M236,54 L252,54 L252,62 L236,62 Z" fill="#F5D9C3" opacity="0.75" />
        <path d="M232,60 L256,60 C259,70 260,80 259,90 L256,112 L232,112 L229,90 C228,80 229,70 232,60 Z" fill={`url(#${gownC})`} />
        <path d="M232,62 C226,76 225,96 229,110 C231,118 236,124 242,128 L245,123 C239,117 236,109 234,99 C232,88 234,72 237,64 Z" fill="#EAC3A6" />
        <path d="M256,62 C262,76 263,96 259,110 C257,118 252,124 246,128 L243,123 C249,117 252,109 254,99 C256,88 254,72 251,64 Z" fill="#EAC3A6" />
        <ellipse cx="244" cy="131" rx="5" ry="3.5" fill="#EAC3A6" />
        <path d="M231,110 L257,110 L258,119 L230,119 Z" fill="#9DBBDC" />
        <path d="M230,119 C224,164 219,234 215,322 C226,330 238,332 244,332 C250,332 262,330 273,322 C269,234 264,164 258,119 Z" fill={`url(#${gownC})`} />
        <g stroke="#9DBBDC" strokeWidth="1.4" fill="none" opacity="0.5">
          <path d="M236,124 C233,184 230,254 228,318" />
          <path d="M244,124 C243,184 243,254 242,322" />
          <path d="M252,124 C255,184 258,254 260,318" />
        </g>
        <path d="M215,322 C226,330 238,332 244,332 C250,332 262,330 273,322 C262,327 250,329 244,329 C238,329 226,327 215,322 Z" fill="#9DBBDC" opacity="0.4" />
      </g>
    </svg>
  );
}

function NinongArt() {
  return (
    <g>
      <path d="M60,10 C49,10 44,17 44,27 C44,34 46,38 49,41 L71,41 C74,38 76,34 76,27 C76,17 71,10 60,10 Z" fill="#241C16" />
      <ellipse cx="60" cy="30" rx="11" ry="12" fill="#EDC4A0" />
      <circle cx="49" cy="31" r="2" fill="#EDC4A0" />
      <circle cx="71" cy="31" r="2" fill="#EDC4A0" />
      <path d="M56,41 L64,41 L64,48 L56,48 Z" fill="#DBAF8B" />

      {/* Barong body */}
      <path d="M40,52 C44,48 52,46 60,46 C68,46 76,48 80,52 L82,110 L80,152 L40,152 L38,110 Z" fill="#FAF6EC" />

      {/* Structured open collar, pointed lapels typical of a barong */}
      <path d="M54,46 L60,53 L66,46 L60,44 Z" fill="#FFFFFF" />
      <path d="M54,46 L60,53 L66,46 L62,50 L58,50 Z" fill="#F1E9D8" />
      <path d="M53,46 L60,54.5 L67,46" stroke="#D9C7AC" strokeWidth="1" fill="none" opacity="0.8" />

      {/* Front placket with buttons, running the full length of the shirt */}
      <path d="M60,55 L60,148" stroke="#D9C7AC" strokeWidth="1.2" opacity="0.85" />
      <g fill="#C9B992">
        <circle cx="60" cy="60" r="1.3" />
        <circle cx="60" cy="73" r="1.3" />
        <circle cx="60" cy="86" r="1.3" />
        <circle cx="60" cy="99" r="1.3" />
        <circle cx="60" cy="112" r="1.3" />
        <circle cx="60" cy="125" r="1.3" />
        <circle cx="60" cy="138" r="1.3" />
      </g>

      {/* Calado embroidery panels, denser and framing the placket */}
      <g stroke="#D9C7AC" strokeWidth="1.1" fill="none" opacity="0.85">
        <path d="M50,60 C49,80 49,100 50,120" />
        <path d="M70,60 C71,80 71,100 70,120" />
        <path d="M44,64 C43,82 43,100 44,118" />
        <path d="M76,64 C77,82 77,100 76,118" />
      </g>
      <g fill="#C9B992" opacity="0.9">
        <circle cx="50" cy="68" r="0.9" />
        <circle cx="50" cy="90" r="0.9" />
        <circle cx="50" cy="112" r="0.9" />
        <circle cx="70" cy="68" r="0.9" />
        <circle cx="70" cy="90" r="0.9" />
        <circle cx="70" cy="112" r="0.9" />
      </g>

      {/* Yoke seam across the chest for shirt structure */}
      <path d="M44,58 C50,55 70,55 76,58" stroke="#D9C7AC" strokeWidth="1" fill="none" opacity="0.6" />

      {/* Sleeves */}
      <path d="M40,52 C32,60 29,76 30,94 L31,128 L34,140 L42,138 C39,128 38,116 38,104 L38,80 Z" fill="#FAF6EC" />
      <path d="M31,126 L35,138 L41,136" stroke="#E4D9C2" strokeWidth="1.2" fill="none" />
      <ellipse cx="40" cy="148" rx="3.5" ry="2.5" fill="#EDC4A0" />
      <path d="M80,52 C88,60 91,76 90,94 L89,128 L86,140 L78,138 C81,128 82,116 82,104 L82,80 Z" fill="#FAF6EC" />
      <path d="M89,126 L85,138 L79,136" stroke="#E4D9C2" strokeWidth="1.2" fill="none" />
      <ellipse cx="80" cy="148" rx="3.5" ry="2.5" fill="#EDC4A0" />

      {/* Hem, worn untucked with small side vents */}
      <path d="M40,150 C46,152 74,152 80,150 L80,152 L40,152 Z" fill="#F1E9D8" />
      <path d="M44,150 L47,157" stroke="#D9C7AC" strokeWidth="1" fill="none" opacity="0.7" />
      <path d="M76,150 L73,157" stroke="#D9C7AC" strokeWidth="1" fill="none" opacity="0.7" />

      {/* Slacks — one continuous waistband so there's no gap at the hip, with the leg
          split occurring right below it instead of far down the thigh */}
      <path d="M40,153 L80,153 L78,244 L75,318 L67,318 L65,172 L55,172 L53,318 L45,318 L42,244 Z" fill="#23272E" />
      <g stroke="#3A4048" strokeWidth="1.2" fill="none" opacity="0.7">
        <path d="M50,180 L51,244" />
        <path d="M70,180 L69,244" />
      </g>

      {/* Shoes — right foot mirrored exactly from the left so both align under the ankles */}
      <path d="M45,318 L53,318 L54,328 C54,331 52,332 49,332 L43,332 C41,332 40,330 41,327 Z" fill="#1A1D23" />
      <path d="M75,318 L67,318 L66,328 C66,331 68,332 71,332 L77,332 C79,332 80,330 79,327 Z" fill="#1A1D23" />
    </g>
  );
}

function NinangArt({ gownId }: { gownId: string }) {
  return (
    <g>
      <path d="M140,8 C126,8 119,20 120,36 C120,46 124,54 129,58 L151,58 C156,54 160,46 160,36 C161,20 154,8 140,8 Z" fill="#3A2A1E" />
      <circle cx="140" cy="8" r="7" fill="#3A2A1E" />
      <ellipse cx="140" cy="30" rx="12" ry="13" fill="#EAC3A6" />
      <path d="M128,23 C132,15 150,15 153,23 C146,18 134,18 128,23 Z" fill="#3A2A1E" />
      <circle cx="128" cy="34" r="1.5" fill="#C9A96A" />
      <circle cx="152" cy="34" r="1.5" fill="#C9A96A" />
      <path d="M136,43 L144,43 L144,51 L136,51 Z" fill="#D9AF8E" />
      <path d="M124,54 L156,54 C159,64 160,74 159,84 L156,108 L124,108 L121,84 C120,74 121,64 124,54 Z" fill={`url(#${gownId})`} />
      <path d="M124,54 L118,60 L123,64 Z" fill="#EADCC9" />
      <path d="M156,54 L162,60 L157,64 Z" fill="#EADCC9" />
      <path d="M133,54 C137,58 143,58 147,54" stroke="#C9A96A" strokeWidth="1.4" fill="none" />
      <path d="M124,56 C118,70 117,90 121,104 C123,112 128,118 134,122 L137,117 C131,111 128,103 126,93 C124,82 126,66 129,58 Z" fill="#EAC3A6" />
      <path d="M156,56 C162,70 163,90 159,104 C157,112 152,118 146,122 L143,117 C149,111 152,103 154,93 C156,82 154,66 151,58 Z" fill="#EAC3A6" />
      <ellipse cx="140" cy="125" rx="5" ry="3.5" fill="#EAC3A6" />
      <path d="M123,106 L157,106 L158,115 L122,115 Z" fill="#C9A96A" opacity="0.75" />
      <path d="M122,115 C116,160 111,230 107,318 C118,326 130,328 140,328 C150,328 162,326 173,318 C169,230 164,160 158,115 Z" fill={`url(#${gownId})`} />
      <g stroke="#C9B18E" strokeWidth="1.4" fill="none" opacity="0.6">
        <path d="M132,120 C129,180 126,250 124,314" />
        <path d="M140,120 C139,180 139,250 139,322" />
        <path d="M148,120 C151,180 154,250 156,314" />
      </g>
      <path d="M107,318 C118,326 130,328 140,328 C150,328 162,326 173,318 C162,323 150,325 140,325 C130,325 118,323 107,318 Z" fill="#C9B18E" opacity="0.45" />
    </g>
  );
}

export function NinongFigure({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 350" className={className || 'w-full h-auto'} role="img" aria-label="Illustration of Ninong in barong tagalog and black slacks">
      <ellipse cx="60" cy="332" rx="55" ry="6" fill="rgba(30,51,85,0.12)" />
      <NinongArt />
    </svg>
  );
}

export function NinangFigure({ className = '' }: { className?: string }) {
  const uid = useId();
  const gownId = `gownBeige-${uid}`;
  return (
    <svg viewBox="0 0 120 350" className={className || 'w-full h-auto'} role="img" aria-label="Illustration of Ninang in beige formal long gown">
      <defs>
        <linearGradient id={gownId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#EADCC9" />
          <stop offset="1" stopColor="#D4C3A3" />
        </linearGradient>
      </defs>
      <g transform="translate(-80 0)">
        <ellipse cx="140" cy="332" rx="55" ry="6" fill="rgba(30,51,85,0.12)" />
        <NinangArt gownId={gownId} />
      </g>
    </svg>
  );
}

export function GentlemenGroup({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 300 350" className={className || 'w-full h-auto'} role="img" aria-label="Illustration of three gentlemen in blue shirts and khaki trousers">
      <ellipse cx="150" cy="336" rx="140" ry="7" fill="rgba(30,51,85,0.12)" />

      {/* ── Man 1 · blond · blue button-down ── */}
      <g>
        <path d="M56,10 C45,10 40,17 40,27 C40,33 42,37 45,40 L67,40 C70,37 72,33 72,27 C72,17 67,10 56,10 Z" fill="#DDB871" />
        <ellipse cx="56" cy="30" rx="11" ry="12" fill="#F5D9C3" />
        <circle cx="45" cy="31" r="2" fill="#F5D9C3" />
        <circle cx="67" cy="31" r="2" fill="#F5D9C3" />
        <path d="M52,41 L60,41 L60,48 L52,48 Z" fill="#E3BFA2" />
        <path d="M38,52 C42,48 49,46 56,46 C63,46 70,48 74,52 L76,108 L74,138 L38,138 L36,108 Z" fill="#6C8CB4" />
        <path d="M49,46 L56,55 L63,46 L60,44 L52,44 Z" fill="#5F7FA8" />
        <path d="M49,46 L46,52 L53,54 Z" fill="#5F7FA8" />
        <path d="M63,46 L66,52 L59,54 Z" fill="#5F7FA8" />
        <rect x="54.5" y="55" width="3" height="45" fill="#5F7FA8" opacity="0.6" />
        <g fill="#3E5C82">
          <circle cx="56" cy="62" r="1.3" />
          <circle cx="56" cy="74" r="1.3" />
          <circle cx="56" cy="86" r="1.3" />
          <circle cx="56" cy="98" r="1.3" />
        </g>
        <path d="M38,52 C31,58 28,70 29,82 L30,92 L38,93 Z" fill="#6C8CB4" />
        <path d="M30,91 L38,92 L38,99 L30,98 Z" fill="#5F7FA8" />
        <path d="M31,98 C30,108 32,118 36,125 L39,130 L43,125 C39,118 37,108 38,100 Z" fill="#F5D9C3" />
        <ellipse cx="41" cy="132" rx="3.5" ry="2.5" fill="#F5D9C3" />
        <path d="M74,52 C81,58 84,70 83,82 L82,92 L74,93 Z" fill="#6C8CB4" />
        <path d="M82,91 L74,92 L74,99 L82,98 Z" fill="#5F7FA8" />
        <path d="M81,98 C82,108 80,118 76,125 L73,130 L69,125 C73,118 75,108 74,100 Z" fill="#F5D9C3" />
        <ellipse cx="71" cy="132" rx="3.5" ry="2.5" fill="#F5D9C3" />
        <path d="M38,136 L74,136 L75,144 L37,144 Z" fill="#5A3E28" />
        <rect x="53" y="138" width="6" height="4.5" fill="#C9A96A" />
        <path d="M38,144 L74,144 L72,240 L69,318 L61,318 L59,162 L53,162 L51,318 L43,318 L40,240 Z" fill="#DCC9A9" />
        <g stroke="#C4AE8B" strokeWidth="1.2" fill="none" opacity="0.7">
          <path d="M46,168 L47,240" />
          <path d="M66,168 L65,240" />
        </g>
        <path d="M43,318 L51,318 L52,328 C52,331 50,332 47,332 L41,332 C39,332 38,330 39,327 Z" fill="#6E4526" />
        <path d="M61,318 L69,318 L73,327 C74,330 73,332 71,332 L65,332 C62,332 60,331 60,328 Z" fill="#6E4526" />
      </g>

      {/* ── Man 2 · dark hair · blue polo ── */}
      <g>
        <path d="M150,10 C139,10 134,17 134,27 C134,34 136,38 139,41 L161,41 C164,38 166,34 166,27 C166,17 161,10 150,10 Z" fill="#2B211A" />
        <ellipse cx="150" cy="30" rx="11" ry="12" fill="#EDC4A0" />
        <circle cx="139" cy="31" r="2" fill="#EDC4A0" />
        <circle cx="161" cy="31" r="2" fill="#EDC4A0" />
        <path d="M146,41 L154,41 L154,48 L146,48 Z" fill="#DBAF8B" />
        <path d="M132,52 C136,48 143,46 150,46 C157,46 164,48 168,52 L170,110 L168,140 L132,140 L130,110 Z" fill="#5F7FA8" />
        <path d="M143,46 L150,55 L157,46 L154,44 L146,44 Z" fill="#4E6E96" />
        <path d="M143,46 L140,52 L147,54 Z" fill="#4E6E96" />
        <path d="M157,46 L160,52 L153,54 Z" fill="#4E6E96" />
        <rect x="148" y="55" width="4" height="13" fill="#4E6E96" opacity="0.7" />
        <circle cx="150" cy="60" r="1.2" fill="#3A5678" />
        <circle cx="150" cy="66" r="1.2" fill="#3A5678" />
        <path d="M132,52 C125,57 122,66 122,76 L124,85 L132,86 Z" fill="#5F7FA8" />
        <path d="M124,84 C123,98 125,112 129,122 L132,130 L137,125 C133,116 131,102 132,86 Z" fill="#EDC4A0" />
        <ellipse cx="134" cy="134" rx="3.5" ry="2.5" fill="#EDC4A0" />
        <path d="M168,52 C175,57 178,66 178,76 L176,85 L168,86 Z" fill="#5F7FA8" />
        <path d="M176,84 C177,98 175,112 171,122 L168,130 L163,125 C167,116 169,102 168,86 Z" fill="#EDC4A0" />
        <ellipse cx="166" cy="134" rx="3.5" ry="2.5" fill="#EDC4A0" />
        <path d="M132,138 L168,138 L169,146 L131,146 Z" fill="#4A3320" />
        <rect x="147" y="140" width="6" height="4.5" fill="#C9A96A" />
        <path d="M132,146 L168,146 L166,242 L163,320 L155,320 L153,164 L147,164 L145,320 L137,320 L134,242 Z" fill="#DCC9A9" />
        <g stroke="#C4AE8B" strokeWidth="1.2" fill="none" opacity="0.7">
          <path d="M140,170 L141,242" />
          <path d="M160,170 L159,242" />
        </g>
        <path d="M137,320 L145,320 L146,330 C146,333 144,334 141,334 L135,334 C133,334 132,332 133,329 Z" fill="#5E3B22" />
        <path d="M155,320 L163,320 L167,329 C168,332 167,334 165,334 L159,334 C156,334 154,333 154,330 Z" fill="#5E3B22" />
      </g>

      {/* ── Man 3 · wavy hair · light blazer over white tee ── */}
      <g>
        <path d="M244,10 C232,10 227,17 227,27 C227,34 230,38 233,41 L255,41 C258,38 261,34 261,27 C262,17 256,10 244,10 Z" fill="#33241A" />
        <g fill="#33241A">
          <circle cx="233" cy="17" r="3" />
          <circle cx="255" cy="17" r="3" />
        </g>
        <ellipse cx="244" cy="30" rx="11" ry="12" fill="#EAC3A6" />
        <circle cx="233" cy="31" r="2" fill="#EAC3A6" />
        <circle cx="255" cy="31" r="2" fill="#EAC3A6" />
        <path d="M240,41 L248,41 L248,48 L240,48 Z" fill="#D9AF8E" />
        <path d="M228,52 C232,48 238,46 244,46 C250,46 256,48 260,52 L261,100 L259,140 L229,140 L227,100 Z" fill="#FAF8F4" />
        <path d="M236,50 C240,54 248,54 252,50" stroke="#E4DFD4" strokeWidth="1.4" fill="none" />
        <path d="M229,138 L259,138 L260,146 L228,146 Z" fill="#5A3E28" />
        <path d="M229,146 L259,146 L257,240 L253,318 L246,318 L245,164 L243,164 L242,318 L235,318 L231,240 Z" fill="#DCC9A9" />
        <g stroke="#C4AE8B" strokeWidth="1.2" fill="none" opacity="0.7">
          <path d="M236,170 L237,242" />
          <path d="M251,170 L250,242" />
        </g>
        <path d="M235,318 L243,318 L244,328 C244,331 242,332 239,332 L233,332 C231,332 230,330 231,327 Z" fill="#6E4526" />
        <path d="M245,318 L253,318 L257,327 C258,330 257,332 255,332 L249,332 C246,332 244,331 244,328 Z" fill="#6E4526" />
        <path d="M226,50 C219,57 215,70 215,86 L216,124 L218,162 L230,162 L231,120 L229,84 C229,70 228,58 229,52 Z" fill="#9DB8D4" />
        <path d="M262,50 C269,57 273,70 273,86 L272,124 L270,162 L258,162 L257,120 L259,84 C259,70 260,58 259,52 Z" fill="#9DB8D4" />
        <path d="M229,52 L236,58 L231,70 L227,60 Z" fill="#8AA6C6" />
        <path d="M259,52 L252,58 L257,70 L261,60 Z" fill="#8AA6C6" />
        <path d="M215,86 C214,100 215,114 218,124 L221,132 L227,126 C224,116 222,102 223,90 Z" fill="#9DB8D4" />
        <ellipse cx="224" cy="134" rx="3.5" ry="2.5" fill="#EAC3A6" />
        <path d="M273,86 C274,100 273,114 270,124 L267,132 L261,126 C264,116 266,102 265,90 Z" fill="#9DB8D4" />
        <ellipse cx="264" cy="134" rx="3.5" ry="2.5" fill="#EAC3A6" />
      </g>
    </svg>
  );
}
