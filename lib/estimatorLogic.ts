export interface EstimatorInputs {
  roomSize: number;
  service: string;
  materialGrade: string;
  rooms: number;
}

const pricePerSqm = {
  Kitchen: { Essential: 800, Premium: 1200, 'Ultra-Luxury': 2000 },
  Interior: { Essential: 600, Premium: 1000, 'Ultra-Luxury': 1800 },
  Villa: { Essential: 500, Premium: 900, 'Ultra-Luxury': 1500 },
  'Smart Home': { Essential: 400, Premium: 700, 'Ultra-Luxury': 1200 },
};

export const calculateEstimate = (
  inputs: EstimatorInputs
): { min: number; max: number } => {
  const { roomSize, service, materialGrade, rooms } = inputs;

  const baseRate =
    pricePerSqm[service as keyof typeof pricePerSqm]?.[
      materialGrade as 'Essential' | 'Premium' | 'Ultra-Luxury'
    ] || 800;

  const basePrice = roomSize * baseRate * rooms;

  const min = Math.round(basePrice * 0.9);
  const max = Math.round(basePrice * 1.1);

  return { min, max };
};
