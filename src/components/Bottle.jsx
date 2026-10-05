const tones = {
  gold: { from: "#e8d5a8", to: "#8f7434", label: "#0a0a0c" },
  black: { from: "#4a4a55", to: "#0e0e13", label: "#e8d5a8" },
  amber: { from: "#d9a441", to: "#6d3f10", label: "#0a0a0c" },
  rose: { from: "#e0b7b0", to: "#7a3f45", label: "#0a0a0c" },
  sand: { from: "#dcc79a", to: "#7a6440", label: "#0a0a0c" },
};

export default function Bottle({ tone = "gold", name = "" }) {
  const c = tones[tone] ?? tones.gold;
  const gid = `g-${tone}-${name.replace(/\s/g, "")}`;

  return (
    <svg
      viewBox="0 0 200 260"
      role="img"
      aria-label={`${name} shishasi`}
      className="bottle"
    >
      <defs>
        <linearGradient id={gid} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={c.from} stopOpacity="0.95" />
          <stop offset="55%" stopColor={c.to} stopOpacity="0.9" />
          <stop offset="100%" stopColor={c.from} stopOpacity="0.55" />
        </linearGradient>
        <linearGradient id={`${gid}-cap`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#2a2a31" />
          <stop offset="35%" stopColor="#c9a96e" />
          <stop offset="60%" stopColor="#6d5a2f" />
          <stop offset="100%" stopColor="#1c1c21" />
        </linearGradient>
      </defs>

      <ellipse cx="100" cy="243" rx="62" ry="9" fill="#000" opacity="0.5" />

      <rect x="90" y="18" width="20" height="26" fill={`url(#${gid}-cap)`} />
      <rect x="82" y="8" width="36" height="16" rx="3" fill={`url(#${gid}-cap)`} />
      <rect x="86" y="44" width="28" height="8" rx="2" fill={`url(#${gid}-cap)`} opacity="0.85" />

      <path
        d="M78 52h44c6 0 10 4 11 10l6 30c3 14 5 28 5 42v86c0 12-9 21-21 21H77c-12 0-21-9-21-21v-86c0-14 2-28 5-42l6-30c1-6 5-10 11-10z"
        fill={`url(#${gid})`}
      />
      <path
        d="M78 52h16v168c0 10-4 19-10 21h-7c-12 0-21-9-21-21v-86c0-14 2-28 5-42l6-30c1-6 5-10 11-10z"
        fill="#fff"
        opacity="0.1"
      />
      <rect x="70" y="118" width="60" height="52" rx="3" fill="#0c0c10" opacity="0.86" />
      <rect x="70" y="118" width="60" height="52" rx="3" fill="none" stroke={c.from} strokeOpacity="0.5" />
      <text
        x="100"
        y="140"
        textAnchor="middle"
        fill={c.label}
        fontSize="10"
        letterSpacing="2"
        fontFamily="Cormorant Garamond, serif"
      >
        SARVAR
      </text>
      <text
        x="100"
        y="156"
        textAnchor="middle"
        fill={c.label}
        fontSize="7"
        letterSpacing="1"
        fontFamily="Jost, sans-serif"
        opacity="0.8"
      >
        PARFUME
      </text>
    </svg>
  );
}
