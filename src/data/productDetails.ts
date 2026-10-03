export interface ProductVariant {
  id: string;
  label: string;
  hint?: string;
}

export interface ProductDetail {
  slug: string;
  title: string;
  short: string;
  icon: string;
  desc: string;
  types: string;
  uses: string;
  availability: string;
  related?: string[];
  image?: string;
  gallery?: string[];
  variants?: ProductVariant[];
  variantLabel?: string; // e.g. "Choose diameter", "Choose grade"
  bagSizes?: ProductVariant[]; // reused generically for "size/pack" options
  bagSizeLabel?: string; // e.g. "Bag size", "Bundle size"
}

export const productDetails: ProductDetail[] = [
  {
    slug: 'tmt-steel',
    title: 'TMT Steel & Rebar',
    short:
      'Tata Tiscon, Jindal Steel and SAIL options for structural work.',
    icon: '01',
    desc:
      'TMT steel and rebar for structural and RCC work, sourced from Tata Tiscon, Jindal Steel, SAIL and other brands depending on current stock.',
    types: 'Tata Tiscon, Jindal Steel, SAIL and other options depending on stock',
    uses: 'Columns, beams, slabs, foundations and other RCC structural work',
    availability: 'Contact for current stock, sizes and pricing',
    related: ['cement', 'binding-wire'],
    image: 'ramprasad/rod4',
    gallery: [
      'ramprasad/rod1',
      'ramprasad/rod2',
      'ramprasad/rod3',
    ],
    variantLabel: 'Choose diameter',
    variants: [
      { id: '8mm', label: '8 mm', hint: 'Light structural work' },
      { id: '10mm', label: '10 mm', hint: 'Slabs & light beams' },
      { id: '12mm', label: '12 mm', hint: 'Columns & beams' },
      { id: '16mm', label: '16 mm', hint: 'Heavy structural work' },
      { id: '20mm', label: '20 mm', hint: 'Foundations' },
      { id: '25mm', label: '25 mm', hint: 'Heavy-duty RCC' },
    ],
    bagSizeLabel: 'Bundle weight',
    bagSizes: [
      { id: '1bundle', label: 'Per bundle' },
      { id: 'per-ton', label: 'Per tonne' },
    ],
  },
  {
    slug: 'cement',
    title: 'Cement',
    short:
      'Cement brands and types according to requirement and availability.',
    icon: '02',
    desc:
      'Cement for foundation work, masonry, plastering and RCC construction, in the brands and grades currently in stock.',
    types: 'Multiple cement brands and grades based on current stock',
    uses: 'Foundation work, plastering, masonry and RCC construction',
    availability: 'Contact for current stock and pricing',
    related: ['tmt-steel', 'sand'],
    image: 'ramprasad/cement',
    gallery: [
      'ramprasad/cement1',
      'ramprasad/cement2',
      'ramprasad/cement3',
    ],
    variantLabel: 'Choose type',
    variants: [
      { id: 'opc-43', label: 'OPC 43 Grade', hint: 'General construction' },
      { id: 'opc-53', label: 'OPC 53 Grade', hint: 'High-strength RCC work' },
      { id: 'ppc', label: 'PPC', hint: 'Plastering & durability' },
    ],
    bagSizeLabel: 'Bag size',
    bagSizes: [
      { id: '25kg', label: '25 kg' },
      { id: '50kg', label: '50 kg' },
    ],
  },
  {
    slug: 'sand',
    title: 'Construction Sand',
    short:
      'Sand for residential and other construction requirements.',
    icon: '03',
    desc:
      'Construction sand for plastering, masonry and concrete mixing, for residential and other building work.',
    types: 'Sand types as available for your requirement',
    uses: 'Plastering, masonry work and concrete mixing',
    availability: 'Contact for current stock',
    related: ['cement', 'stone-chips-aggregates'],
    image: 'ramprasad/sand',
    gallery: [
      'ramprasad/sand1',
      'ramprasad/sand2',
      'ramprasad/sand3'
    ],
    variantLabel: 'Choose type',
    variants: [
      { id: 'river-sand', label: 'River Sand', hint: 'Plastering & masonry' },
      { id: 'm-sand', label: 'M-Sand', hint: 'Concrete & construction' },
      { id: 'plastering-sand', label: 'Plastering Sand', hint: 'Fine finish work' },
    ],
    bagSizeLabel: 'Quantity unit',
    bagSizes: [
      { id: 'per-truck', label: 'Per truckload' },
      { id: 'per-unit', label: 'Per unit' },
    ],
  },
  {
    slug: 'stone-chips-aggregates',
    title: 'Stone Chips & Aggregates',
    short:
      'Stone chips, stone dust and aggregate varieties.',
    icon: '04',
    desc:
      'Stone chips, stone dust and aggregates for concrete mixing, road base and general construction fill.',
    types: 'Stone chips, stone dust and aggregate sizes as available',
    uses: 'Concrete mixing, road base and construction fill',
    availability: 'Contact for current stock',
    related: ['sand', 'boulders'],
    image: 'ramprasad/stone',
    gallery: [
      'ramprasad/stone1',
      'ramprasad/stone2',
      'ramprasad/stone3',
    ],
    variantLabel: 'Choose size',
    variants: [
      { id: '10mm', label: '10 mm Chips', hint: 'Fine concrete mix' },
      { id: '20mm', label: '20 mm Chips', hint: 'General concrete mix' },
      { id: '40mm', label: '40 mm Aggregate', hint: 'Road base & fill' },
      { id: 'stone-dust', label: 'Stone Dust', hint: 'Filling & leveling' },
    ],
    bagSizeLabel: 'Quantity unit',
    bagSizes: [
      { id: 'per-truck', label: 'Per truckload' },
      { id: 'per-unit', label: 'Per unit' },
    ],
  },
  {
    slug: 'boulders',
    title: 'Boulders',
    short:
      'Construction boulders for suitable site requirements.',
    icon: '05',
    desc:
      'Construction boulders for foundation work, retaining structures and site filling, sized for your site.',
    types: 'Sizes as available for suitable site requirements',
    uses: 'Foundation work, retaining structures and site filling',
    availability: 'Contact for current stock',
    related: ['stone-chips-aggregates', 'sand'],
    image: 'ramprasad/bolders',
    gallery: [
      'ramprasad/bolders1',
      'ramprasad/bolders2',
      'ramprasad/bolders3',
    ],
    variantLabel: 'Choose size',
    variants: [
      { id: 'small', label: 'Small', hint: 'Site filling' },
      { id: 'medium', label: 'Medium', hint: 'Foundation work' },
      { id: 'large', label: 'Large', hint: 'Retaining structures' },
    ],
    bagSizeLabel: 'Quantity unit',
    bagSizes: [
      { id: 'per-truck', label: 'Per truckload' },
      { id: 'per-unit', label: 'Per unit' },
    ],
  },
  {
    slug: 'bricks',
    title: 'Bricks',
    short:
      'Residential construction bricks in available types.',
    icon: '06',
    desc:
      'Bricks for wall construction on residential and other building projects, in the types currently available.',
    types: 'Construction bricks in available types',
    uses: 'Wall construction for residential and other builds',
    availability: 'Contact for current stock',
    related: ['cement', 'sand'],
    image: 'ramprasad/bricks',
    gallery: [
      'ramprasad/bricks1',
      'ramprasad/bricks2',
      'ramprasad/bricks3',
    ],
    variantLabel: 'Choose type',
    variants: [
      { id: 'red-clay', label: 'Red Clay Brick', hint: 'Traditional walls' },
      { id: 'fly-ash', label: 'Fly Ash Brick', hint: 'Lightweight & eco-friendly' },
      { id: 'aac-block', label: 'AAC Block', hint: 'Fast, lightweight construction' },
    ],
    bagSizeLabel: 'Quantity unit',
    bagSizes: [
      { id: 'per-1000', label: 'Per 1000 pcs' },
      { id: 'per-unit', label: 'Per piece' },
    ],
  },
  {
    slug: 'binding-wire',
    title: 'Binding Wire',
    short:
      'Tata Tiscon binding wire and other binding materials.',
    icon: '07',
    desc:
      'Binding wire for tying rebar in RCC structural work, including Tata Tiscon and other options.',
    types: 'Tata Tiscon and other binding wire options',
    uses: 'Tying rebar in RCC structural work',
    availability: 'Contact for current stock',
    related: ['tmt-steel'],
    image: 'ramprasad/wire',
    gallery: [
      'ramprasad/wire1',
      'ramprasad/wire2',
      'ramprasad/wire3'

    ],
    variantLabel: 'Choose gauge',
    variants: [
      { id: '18g', label: '18 Gauge', hint: 'Standard binding' },
      { id: '20g', label: '20 Gauge', hint: 'Finer rebar work' },
    ],
    bagSizeLabel: 'Pack size',
    bagSizes: [
      { id: 'per-coil', label: 'Per coil' },
      { id: 'per-kg', label: 'Per kg' },
    ],
  },
  {
    slug: 'roofing-construction-accessories',
    title: 'Roofing & Accessories',
    short:
      'Rod supporters, bent rods, skylights and molded items.',
    icon: '08',
    desc:
      'Roofing and RCC accessories including rod supporters, bent rods, skylights and molded items for finishing work.',
    types: 'Rod supporters, bent rods, skylights and molded items',
    uses: 'Roofing support, RCC accessories and finishing work',
    availability: 'Contact for current stock',
    related: ['tmt-steel', 'cement'],
    image: 'ramprasad/cover2',
    gallery: [
      'ramprasad/cover',
      'ramprasad/cover1',
      'ramprasad/cover3',
    ],
    variantLabel: 'Choose item',
    variants: [
      { id: 'rod-supporter', label: 'Rod Supporter', hint: 'RCC support work' },
      { id: 'bent-rod', label: 'Bent Rod', hint: 'Structural bends' },
      { id: 'skylight', label: 'Skylight', hint: 'Roofing finish' },
      { id: 'molded-item', label: 'Molded Item', hint: 'Finishing accessories' },
    ],
    bagSizeLabel: 'Quantity unit',
    bagSizes: [
      { id: 'per-unit', label: 'Per unit' },
      { id: 'per-set', label: 'Per set' },
    ],
  },
];

export const productDetailsBySlug: Record<string, ProductDetail> =
  productDetails.reduce<Record<string, ProductDetail>>((acc, item) => {
    acc[item.slug] = item;
    return acc;
  }, {});