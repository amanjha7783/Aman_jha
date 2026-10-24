import type { Project } from "../data/projects";

const A = "var(--c-accent)", S = "var(--c-signal)", L = "var(--c-line)", M = "var(--c-muted)";

export function ProjectVisual({ kind }: { kind: Project["visual"] }) {
  const common = { viewBox: "0 0 320 180", className: "h-full w-full", role: "img" as const };
  const bars = (n: number, seed: number) => Array.from({ length: n }).map((_, i) => 20 + ((i * seed) % 70));
  switch (kind) {
    case "nutri":
      return (<svg {...common} aria-label="Illustration of a nutrition dashboard with a ring chart and bars">
        <circle cx="80" cy="90" r="42" fill="none" stroke={L} strokeWidth="14" />
        <circle cx="80" cy="90" r="42" fill="none" stroke={A} strokeWidth="14" strokeDasharray="150 264" transform="rotate(-90 80 90)" />
        <circle cx="80" cy="90" r="42" fill="none" stroke={S} strokeWidth="14" strokeDasharray="50 264" strokeDashoffset="-150" transform="rotate(-90 80 90)" />
        {bars(7, 23).map((h, i) => <rect key={i} x={160 + i * 22} y={150 - h} width="14" height={h} rx="3" fill={A} opacity={0.4 + i * 0.08} />)}
        <line x1="150" x2="310" y1="150" y2="150" stroke={L} />
      </svg>);
    case "crime":
      return (<svg {...common} aria-label="Illustration of a map with hotspot clusters and network links">
        <g stroke={L}>{[30, 70, 110, 150].map((y) => <line key={y} x1="0" x2="320" y1={y} y2={y} />)}{[60, 130, 200, 270].map((x) => <line key={x} y1="0" y2="180" x1={x} x2={x} />)}</g>
        <circle cx="110" cy="80" r="38" fill={S} opacity=".25" /><circle cx="110" cy="80" r="18" fill={S} opacity=".45" />
        <circle cx="230" cy="110" r="28" fill={A} opacity=".3" /><circle cx="230" cy="110" r="12" fill={A} opacity=".55" />
        <path d="M110 80 L190 40 L230 110 M190 40 L270 60" stroke={M} fill="none" />
        {[[190, 40], [270, 60]].map(([x, y]) => <circle key={x} cx={x} cy={y} r="5" fill={A} />)}
      </svg>);
    case "dtmf":
      return (<svg {...common} aria-label="Illustration of a keypad and oscilloscope waveform">
        {Array.from({ length: 9 }).map((_, i) => <rect key={i} x={20 + (i % 3) * 30} y={30 + Math.floor(i / 3) * 30} width="24" height="24" rx="6" fill="none" stroke={i === 4 ? A : L} strokeWidth="2" />)}
        <rect x="125" y="25" width="180" height="120" rx="8" fill="none" stroke={L} />
        <path d="M130 85 Q145 25 160 85 T190 85 T220 85 T250 85 T280 85 T300 85" stroke={A} strokeWidth="2.5" fill="none" />
        <path d="M130 85 Q137 55 145 85 T160 85 T175 85 T190 85 T205 85 T220 85 T235 85 T250 85 T265 85 T280 85" stroke={S} strokeWidth="1.5" fill="none" opacity=".8" />
      </svg>);
    case "face":
      return (<svg {...common} aria-label="Illustration of a face detection frame and lock">
        <rect x="95" y="25" width="100" height="120" rx="10" fill="none" stroke={A} strokeWidth="2" strokeDasharray="16 8" />
        <circle cx="145" cy="75" r="24" fill="none" stroke={M} strokeWidth="2" /><path d="M105 140 Q145 90 185 140" fill="none" stroke={M} strokeWidth="2" />
        <circle cx="136" cy="72" r="3" fill={A} /><circle cx="154" cy="72" r="3" fill={A} />
        <rect x="225" y="80" width="44" height="38" rx="6" fill="none" stroke={S} strokeWidth="2.5" /><path d="M233 80 v-12 a14 14 0 0 1 28 0 v12" fill="none" stroke={S} strokeWidth="2.5" />
      </svg>);
    case "tower":
      return (<svg {...common} aria-label="Illustration of a speed gauge and location pin">
        <path d="M40 140 A70 70 0 0 1 180 140" fill="none" stroke={L} strokeWidth="14" strokeLinecap="round" />
        <path d="M40 140 A70 70 0 0 1 135 76" fill="none" stroke={A} strokeWidth="14" strokeLinecap="round" />
        <line x1="110" y1="140" x2="145" y2="95" stroke={ S } strokeWidth="3" />
        <path d="M250 130 q-26 -34 -26 -52 a26 26 0 0 1 52 0 q0 18 -26 52z" fill="none" stroke={A} strokeWidth="2.5" /><circle cx="250" cy="78" r="8" fill={S} />
      </svg>);
    case "sky":
      return (<svg {...common} aria-label="Illustration of a sensor time series with highlighted anomalies">
        <path d="M10 100 L50 95 L90 105 L120 98 L140 30 L150 100 L190 102 L230 100 L270 101 L310 99" fill="none" stroke={A} strokeWidth="2.5" />
        <line x1="190" x2="270" y1="100" y2="100" stroke={S} strokeWidth="5" opacity=".6" />
        <circle cx="140" cy="30" r="8" fill="none" stroke={S} strokeWidth="2.5" />
        <line x1="10" x2="310" y1="150" y2="150" stroke={L} />
      </svg>);
    case "traffic":
      return (<svg {...common} aria-label="Illustration of an intersection with vehicle trajectories and heat">
        <rect x="0" y="70" width="320" height="40" fill={L} opacity=".5" /><rect x="140" y="0" width="40" height="180" fill={L} opacity=".5" />
        <ellipse cx="160" cy="90" rx="46" ry="30" fill={S} opacity=".3" />
        <path d="M0 85 C100 85 130 85 170 40 S 250 0 320 5" fill="none" stroke={A} strokeWidth="2" strokeDasharray="4 4" />
        <path d="M150 180 C150 140 160 110 200 95 S 290 95 320 95" fill="none" stroke={A} strokeWidth="2" strokeDasharray="4 4" />
        {[[100, 85], [165, 120], [230, 93]].map(([x, y]) => <rect key={x} x={x - 7} y={y - 5} width="14" height="10" rx="2" fill="none" stroke={M} strokeWidth="1.5" />)}
      </svg>);
    default:
      return (<svg {...common} aria-label="Illustration of records being matched across sources">
        {[40, 90, 140].map((y) => <rect key={y} x="30" y={y - 12} width="80" height="24" rx="5" fill="none" stroke={L} strokeWidth="2" />)}
        {[60, 120].map((y) => <rect key={y} x="210" y={y - 12} width="80" height="24" rx="5" fill="none" stroke={L} strokeWidth="2" />)}
        <path d="M110 40 L210 60 M110 90 L210 60 M110 140 L210 120" stroke={A} strokeWidth="2" />
        <path d="M110 90 L210 120" stroke={M} strokeDasharray="4 4" />
      </svg>);
  }
}
