export const themes = {
  midnightGold: {
    id: 'midnightGold',
    name: 'Midnight Gold',
    bg: '#0A0A0A',
    bgMid: '#141414',
    bgSoft: '#1E1E1E',
    accent: '#D4AF37',
    accentLight: '#F5D97A',
    accentDark: '#9C7E1A',
  },
  silverPlatinum: {
    id: 'silverPlatinum',
    name: 'Silver Platinum',
    bg: '#1a1a1a',
    bgMid: '#242424',
    bgSoft: '#2e2e2e',
    accent: '#C0C0C0',
    accentLight: '#E8E8E8',
    accentDark: '#909090',
  },
  royalPearl: {
    id: 'royalPearl',
    name: 'Royal Pearl',
    bg: '#F5F0E8',
    bgMid: '#EBE5DD',
    bgSoft: '#E1DBD3',
    accent: '#C9A84C',
    accentLight: '#E5C76D',
    accentDark: '#A88A3D',
  },
};

export type Theme = keyof typeof themes;

export const applyTheme = (themeId: Theme) => {
  const theme = themes[themeId];
  if (!theme) return;

  const root = document.documentElement;
  root.style.setProperty('--bg', theme.bg);
  root.style.setProperty('--bg-mid', theme.bgMid);
  root.style.setProperty('--bg-soft', theme.bgSoft);
  root.style.setProperty('--accent', theme.accent);
  root.style.setProperty('--gold', theme.accent);
  root.style.setProperty('--gold-light', theme.accentLight);
  root.style.setProperty('--gold-dark', theme.accentDark);

  if (typeof window !== 'undefined') {
    localStorage.setItem('rorix-theme', themeId);
  }
};

export const getStoredTheme = (): Theme => {
  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem('rorix-theme');
    if (stored && stored in themes) {
      return stored as Theme;
    }
  }
  return 'midnightGold';
};
