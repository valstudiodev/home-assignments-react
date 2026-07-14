export const IconFolder = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current">
    <path
      d="M3 6a2 2 0 0 1 2-2h5l2 2h7a2 2 0 0 1 2 2v2H3V6z"
      strokeWidth="2"
    />
    <path
      d="M3 10h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-8z"
      strokeWidth="2"
    />
  </svg>
)

export const IconTask = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current">
    <path d="M9 11l3 3L22 4" strokeWidth="2" />
    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" strokeWidth="2" />
  </svg>
)

export const IconPractice = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current">
    <path d="M12 2v4" strokeWidth="2" />
    <path d="M12 18v4" strokeWidth="2" />
    <path d="M4.93 4.93l2.83 2.83" strokeWidth="2" />
    <path d="M16.24 16.24l2.83 2.83" strokeWidth="2" />
    <path d="M2 12h4" strokeWidth="2" />
    <path d="M18 12h4" strokeWidth="2" />
  </svg>
)

export const IconBank = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current">
    <path d="M3 10h18" strokeWidth="2" />
    <path d="M5 10v10m4-10v10m4-10v10m4-10v10" strokeWidth="2" />
    <path d="M2 20h20" strokeWidth="2" />
    <path d="M12 3l9 7H3l9-7z" strokeWidth="2" />
  </svg>
)

export const IconSmile = () => (
  <svg viewBox="0 0 24 24" className="w-25 h-25 fill-[#FFD700] stroke-[#333333]" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    {/* Обличчя */}
    <circle cx="12" cy="12" r="10" />
    {/* Ліве око */}
    <path d="M9 9h.01" strokeWidth="3" />
    {/* Праве око */}
    <path d="M15 9h.01" strokeWidth="3" />
    {/* Посмішка */}
    <path d="M8 13a4 4 0 0 0 8 0" fill="none" />
  </svg>
);

// ============= Icon cross =============
export const IconCross = () => (
  <svg viewBox="0 0 24 24" className="w-25 h-25 fill-none stroke-[#FF4A4A]" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    {/* Перша діагональ хрестика */}
    <path d="M18 6L6 18" />
    {/* Друга діагональ хрестика */}
    <path d="M6 6l12 12" />
  </svg>
);

export const IconZero = () => (
  <svg viewBox="0 0 24 24" className="w-25 h-25 fill-none stroke-[#007BFF]" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    {/* Нулик (ігрове коло) */}
    <circle cx="12" cy="12" r="7" />
  </svg>
);

// ============== // Іконка відкритого ока (показати пароль) ==============
export const IconEyeVisible = () => (
  <svg viewBox="0 0 24 24" className="w-10 h-10 fill-none stroke-[#333333]" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    {/* Контур ока */}
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    {/* Зіниця */}
    <circle cx="12" cy="12" r="3" />
  </svg>
);

// Іконка закресленого ока (сховати пароль)
export const IconEyeHidden = () => (
  <svg viewBox="0 0 24 24" className="w-10 h-10 fill-none stroke-[#333333]" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    {/* Контур ока */}
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    {/* Зіниця */}
    <circle cx="12" cy="12" r="3" />
    {/* Лінія закреслення */}
    <line x1="3" y1="3" x2="21" y2="21" />
  </svg>
);

// Іконка Лайк (Like)
export const IconLike = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-none stroke-[#333333]" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
  </svg>
);
export const IconDislike = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-none stroke-[#333333]" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-3" />
  </svg>
);