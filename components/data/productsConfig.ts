export const productsConfig = [
  {
    id: 'bricks',
    name: 'Common Bricks',
    unit: 'bricks',
    transport: { base: 6, per: 3000, radiusKm: 10 } // $6 per 3000 bricks within 10km
  },
  {
    id: 'pavers',
    name: 'Pavers',
    unit: 'sqm',
    transport: { base: 8, per: 20, radiusKm: 10 } // $8 per 20sqm
  },
  {
    id: 'window-sills',
    name: 'Window Sills',
    unit: 'pieces',
    transport: { base: 10, per: 50, radiusKm: 10 } // $10 per 50 pieces
  },
  {
    id: 'air-vents',
    name: 'Air Vents',
    unit: 'pieces',
    transport: { base: 10, per: 50, radiusKm: 10 }
  },
  {
    id: 'quarry-stone',
    name: 'Quarry Stones',
    unit: 'ton',
    transport: { base: 25, per: 1, radiusKm: 10 } // $25 per ton
  },
  {
    id: 'river-sand',
    name: 'River Sand',
    unit: 'ton',
    transport: { base: 25, per: 1, radiusKm: 10 }
  },
  {
    id: 'pit-sand',
    name: 'Pit Sand',
    unit: 'ton',
    transport: { base: 20, per: 1, radiusKm: 10 }
  },
]