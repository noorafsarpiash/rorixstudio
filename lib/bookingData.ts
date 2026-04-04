export const services = [
  'Modular Kitchen Consultation',
  'Luxury Interior Design',
  'Smart Home Integration',
  'Bespoke Furniture',
  'Full Villa Makeover',
  '3D Visualization Session (Free first session)',
];

export const propertyLocations = [
  'Palm Jumeirah',
  'Downtown Dubai',
  'Dubai Marina',
  'Business Bay',
  'Emirates Hills',
  'Jumeirah Beach Residence (JBR)',
  'Arabian Ranches',
  'Dubai Hills Estate',
  'City Walk',
  'Other',
];

export const propertyTypes = [
  'Apartment',
  'Villa',
  'Penthouse',
  'Townhouse',
  'Office',
  'Commercial Space',
];

export const budgetRanges = [
  'AED 50K - 100K',
  'AED 100K - 250K',
  'AED 250K - 500K',
  'AED 500K+',
];

export const hearAboutUs = [
  'Google Search',
  'Instagram',
  'Referral',
  'Gulf News',
  'Khaleej Times',
  'Architectural Digest ME',
  'Other',
];

export const timeSlots = [
  '10:00 AM',
  '11:00 AM',
  '12:00 PM',
  '2:00 PM',
  '3:00 PM',
  '4:00 PM',
  '5:00 PM',
  '6:00 PM',
  '7:00 PM',
];

export const bookedSlots: { [key: string]: string[] } = {
  '2025-04-15': ['10:00 AM', '2:00 PM'],
  '2025-04-16': ['11:00 AM', '3:00 PM', '5:00 PM'],
};

export const isSlotBooked = (date: string, time: string): boolean => {
  return bookedSlots[date]?.includes(time) || false;
};
