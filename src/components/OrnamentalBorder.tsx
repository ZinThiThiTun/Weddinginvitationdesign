export function OrnamentalBorder() {
  return (
    <svg width="40" height="200" viewBox="0 0 40 200" className="text-emerald-400">
      {/* Vertical vine */}
      <path 
        d="M20,10 Q15,40 20,70 Q25,100 20,130 Q15,160 20,190" 
        stroke="currentColor" 
        strokeWidth="1.5" 
        fill="none" 
        opacity="0.6"
      />
      
      {/* Leaves along the vine */}
      <ellipse cx="12" cy="30" rx="5" ry="8" fill="currentColor" opacity="0.3" transform="rotate(-20 12 30)" />
      <ellipse cx="28" cy="50" rx="5" ry="8" fill="currentColor" opacity="0.3" transform="rotate(20 28 50)" />
      <ellipse cx="12" cy="80" rx="4" ry="7" fill="currentColor" opacity="0.3" transform="rotate(-25 12 80)" />
      <ellipse cx="28" cy="100" rx="5" ry="8" fill="currentColor" opacity="0.3" transform="rotate(15 28 100)" />
      <ellipse cx="12" cy="130" rx="4" ry="7" fill="currentColor" opacity="0.3" transform="rotate(-20 12 130)" />
      <ellipse cx="28" cy="150" rx="5" ry="8" fill="currentColor" opacity="0.3" transform="rotate(20 28 150)" />
      <ellipse cx="15" cy="170" rx="4" ry="6" fill="currentColor" opacity="0.3" transform="rotate(-15 15 170)" />
      
      {/* Small flowers */}
      <g opacity="0.5">
        <circle cx="10" cy="25" r="3" fill="currentColor" />
        <circle cx="9" cy="24" r="1" fill="white" opacity="0.7" />
      </g>
      
      <g opacity="0.5">
        <circle cx="30" cy="55" r="3" fill="currentColor" />
        <circle cx="29" cy="54" r="1" fill="white" opacity="0.7" />
      </g>
      
      <g opacity="0.5">
        <circle cx="10" cy="90" r="2.5" fill="currentColor" />
        <circle cx="9" cy="89" r="0.8" fill="white" opacity="0.7" />
      </g>
      
      <g opacity="0.5">
        <circle cx="30" cy="110" r="3" fill="currentColor" />
        <circle cx="29" cy="109" r="1" fill="white" opacity="0.7" />
      </g>
      
      <g opacity="0.5">
        <circle cx="10" cy="140" r="2.5" fill="currentColor" />
        <circle cx="9" cy="139" r="0.8" fill="white" opacity="0.7" />
      </g>
      
      <g opacity="0.5">
        <circle cx="30" cy="160" r="3" fill="currentColor" />
        <circle cx="29" cy="159" r="1" fill="white" opacity="0.7" />
      </g>
    </svg>
  );
}
