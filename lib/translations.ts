export const translations = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      portfolio: 'Portfolio',
      book: 'Book',
      contact: 'Contact',
      getQuote: 'Get Quote',
    },
    hero: {
      eyebrow: "DUBAI'S FINEST INTERIOR STUDIO",
      headline: 'Where Luxury Meets Craftsmanship',
      subtext: 'Modular Kitchens · Luxury Interiors · Smart Homes',
      explore: 'Explore Our Work',
      bookConsultation: 'Book Consultation',
    },
    footer: {
      tagline: "Crafting Dubai's Most Prestigious Spaces",
      pages: 'Pages',
      services: 'Services',
      connect: 'Connect',
      legal: 'Legal',
      rights: '© 2025 Rorix Studio. All Rights Reserved.',
      designed: 'Designed & Developed by Rorix Studio',
      featuredIn: 'As Featured In',
      activeProjects: 'Currently working on 7 active projects',
    },
    chat: {
      title: 'ROX — Your Design Assistant',
      welcome: "Welcome to Rorix Studio 👋\nI'm Rox, your personal design assistant.\nHow can I help you today?",
      quickReplies: {
        services: 'View Services',
        quote: 'Get a Quote',
        book: 'Book Now',
        portfolio: 'View Portfolio',
      },
    },
    whatsapp: {
      tooltip: 'Chat on WhatsApp',
    },
  },
  ar: {
    nav: {
      home: 'الرئيسية',
      about: 'عن الاستديو',
      services: 'الخدمات',
      portfolio: 'معرض الأعمال',
      book: 'احجز',
      contact: 'اتصل بنا',
      getQuote: 'احصل على عرض سعر',
    },
    hero: {
      eyebrow: 'استديو التصميم الداخلي الأفضل في دبي',
      headline: 'حيث تلتقي الفخامة بالحرفية',
      subtext: 'مطابخ مودولار · تصميم داخلي فاخر · منازل ذكية',
      explore: 'استكشف أعمالنا',
      bookConsultation: 'احجز استشارة',
    },
    footer: {
      tagline: 'صناعة أرقى المساحات في دبي',
      pages: 'الصفحات',
      services: 'الخدمات',
      connect: 'تواصل معنا',
      legal: 'قانوني',
      rights: '© 2025 روريكس ستوديو. جميع الحقوق محفوظة.',
      designed: 'صمم وطور بواسطة روريكس ستوديو',
      featuredIn: 'تم التمييز في',
      activeProjects: 'نعمل حاليًا على 7 مشاريع نشطة',
    },
    chat: {
      title: 'روكس — مساعدك في التصميم',
      welcome: 'مرحبًا بك في روريكس ستوديو 👋\nأنا روكس، مساعدك الشخصي في التصميم.\nكيف يمكنني مساعدتك اليوم؟',
      quickReplies: {
        services: 'عرض الخدمات',
        quote: 'احصل على عرض سعر',
        book: 'احجز الآن',
        portfolio: 'عرض معرض الأعمال',
      },
    },
    whatsapp: {
      tooltip: 'تحدث على واتساب',
    },
  },
};

export type Language = keyof typeof translations;

export const getStoredLanguage = (): Language => {
  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem('rorix-language');
    if (stored && (stored === 'en' || stored === 'ar')) {
      return stored as Language;
    }
  }
  return 'en';
};

export const setLanguage = (lang: Language) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('rorix-language', lang);
    document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    document.documentElement.setAttribute('lang', lang);
  }
};
