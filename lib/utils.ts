import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const rates = { AED: 1, USD: 0.272, EUR: 0.252, GBP: 0.215 };
const currencySymbols = { AED: 'AED ', USD: '$', EUR: '€', GBP: '£' };

export function formatPrice(baseAEDAmount: number, currency: string) {
  const rate = rates[currency as keyof typeof rates] || 1;
  const sym = currencySymbols[currency as keyof typeof currencySymbols] || currency + ' ';
  
  if (baseAEDAmount >= 1000000000) {
    const converted = (baseAEDAmount * rate) / 1000000000;
    return `${sym}${converted.toFixed(1).replace('.0', '')}B+`;
  }
  
  const converted = Math.round((baseAEDAmount * rate) / 1000) * 1000;
  return `${sym}${converted.toLocaleString()}`;
}

export function getEstimate(size: number, service: keyof typeof baseRates, grade: keyof typeof baseRates['kitchen'], rooms: number, currency: 'AED' | 'USD' | 'EUR' | 'GBP') {
  const rate = baseRates[service][grade];
  const baseAED = size * rate * rooms * 0.4;
  const low = baseAED;
  const high = baseAED * 1.25;
  return `${formatPrice(low, currency)} – ${formatPrice(high, currency)}`;
}

export const baseRates = {
  kitchen: { essential: 450, premium: 750, luxury: 1200 },
  interior: { essential: 350, premium: 600, luxury: 950 },
  villa: { essential: 280, premium: 500, luxury: 850 },
  smart: { essential: 200, premium: 400, luxury: 700 }
};
