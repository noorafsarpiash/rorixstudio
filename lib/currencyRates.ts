export const currencies = {
  AED: { symbol: 'AED', rate: 1, label: 'AED' },
  USD: { symbol: '$', rate: 0.27, label: 'USD' },
  EUR: { symbol: '€', rate: 0.25, label: 'EUR' },
};

export type Currency = keyof typeof currencies;

export const convertPrice = (aedPrice: number, currency: Currency): string => {
  const converted = aedPrice * currencies[currency].rate;
  const formatted = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(converted);

  return `${currencies[currency].symbol} ${formatted}`;
};

export const getStoredCurrency = (): Currency => {
  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem('rorix-currency');
    if (stored && stored in currencies) {
      return stored as Currency;
    }
  }
  return 'AED';
};

export const setCurrency = (currency: Currency) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('rorix-currency', currency);
  }
};
