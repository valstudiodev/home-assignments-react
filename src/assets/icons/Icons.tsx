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


// =============== IconFavorite =================
export const IconFavorite = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    {/* Серце */}
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);

// ================ IconCart ================
export const IconCart = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    {/* Колеса кошика */}
    <circle cx="9" cy="21" r="1" />
    <circle cx="20" cy="21" r="1" />
    {/* Основа та корпус кошика */}
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
  </svg>
);

// ============= IconViewProduct ==============
export const IconViewProduct = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    {/* Контур ока */}
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    {/* Зіниця */}
    <circle cx="12" cy="12" r="3" />
  </svg>
);

// ================== IconAvatar =================
export const IconAvatar = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-none stroke-[#333333]" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    {/* Голова */}
    <circle cx="12" cy="7" r="4" />
    {/* Плечі та силует */}
    <path d="M4 21v-2a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v2" />
  </svg>
);

// ================== IconSearch =================
export const IconSearch = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-none stroke-[#333333]" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    {/* Лінза лупи */}
    <circle cx="11" cy="11" r="7" />
    {/* Ручка лупи */}
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

// ================== IconPlus =================
export const IconPlus = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-none stroke-[#333333]" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    {/* Вертикальна лінія */}
    <line x1="12" y1="5" x2="12" y2="19" />
    {/* Горизонтальна лінія */}
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);