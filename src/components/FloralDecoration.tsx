export function FloralDecoration() {
  return (
    <div className="flex justify-center items-center gap-3">
      {/* Left vine */}
      <svg width="100" height="40" viewBox="0 0 100 40" className="text-emerald-500">
        <path 
          d="M90,20 Q70,10 50,20 Q40,25 30,22" 
          stroke="currentColor" 
          strokeWidth="1.5" 
          fill="none" 
          opacity="0.6"
        />
        {/* Leaves */}
        <ellipse cx="75" cy="15" rx="4" ry="6" fill="currentColor" opacity="0.4" transform="rotate(-30 75 15)" />
        <ellipse cx="60" cy="23" rx="4" ry="6" fill="currentColor" opacity="0.4" transform="rotate(20 60 23)" />
        <ellipse cx="45" cy="18" rx="3" ry="5" fill="currentColor" opacity="0.3" transform="rotate(-40 45 18)" />
        {/* Small flowers */}
        <circle cx="70" cy="12" r="2.5" fill="currentColor" opacity="0.5" />
        <circle cx="68" cy="11" r="1" fill="white" opacity="0.8" />
        <circle cx="55" cy="25" r="2" fill="currentColor" opacity="0.5" />
        <circle cx="54" cy="24" r="0.8" fill="white" opacity="0.8" />
      </svg>

      {/* Center heart */}
      <div className="relative">
        <svg width="50" height="50" viewBox="0 0 50 50" className="text-emerald-600">
          <circle cx="25" cy="25" r="20" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.2" />
          <circle cx="25" cy="25" r="15" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
          {/* Heart */}
          <path 
            d="M25,30 C20,26 15,23 15,19 C15,16 17,14 19,14 C21,14 23,15 25,17 C27,15 29,14 31,14 C33,14 35,16 35,19 C35,23 30,26 25,30 Z" 
            fill="currentColor" 
            opacity="0.8"
          />
          {/* Decorative dots around */}
          <circle cx="25" cy="9" r="1.5" fill="currentColor" opacity="0.4" />
          <circle cx="41" cy="25" r="1.5" fill="currentColor" opacity="0.4" />
          <circle cx="25" cy="41" r="1.5" fill="currentColor" opacity="0.4" />
          <circle cx="9" cy="25" r="1.5" fill="currentColor" opacity="0.4" />
        </svg>
      </div>

      {/* Right vine - mirrored */}
      <svg width="100" height="40" viewBox="0 0 100 40" className="text-emerald-500 transform scale-x-[-1]">
        <path 
          d="M90,20 Q70,10 50,20 Q40,25 30,22" 
          stroke="currentColor" 
          strokeWidth="1.5" 
          fill="none" 
          opacity="0.6"
        />
        {/* Leaves */}
        <ellipse cx="75" cy="15" rx="4" ry="6" fill="currentColor" opacity="0.4" transform="rotate(-30 75 15)" />
        <ellipse cx="60" cy="23" rx="4" ry="6" fill="currentColor" opacity="0.4" transform="rotate(20 60 23)" />
        <ellipse cx="45" cy="18" rx="3" ry="5" fill="currentColor" opacity="0.3" transform="rotate(-40 45 18)" />
        {/* Small flowers */}
        <circle cx="70" cy="12" r="2.5" fill="currentColor" opacity="0.5" />
        <circle cx="68" cy="11" r="1" fill="white" opacity="0.8" />
        <circle cx="55" cy="25" r="2" fill="currentColor" opacity="0.5" />
        <circle cx="54" cy="24" r="0.8" fill="white" opacity="0.8" />
      </svg>
    </div>
  );
}
