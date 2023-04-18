const products = [
  {
    id: 'e2e03258-cab3-4644-80c5-a5e1d312c93d',
    brand: 'Nike',
    colorway: 'Baroque Brown/Baroque Brown-Baroque Brown',
    estimatedMarketValue: 118,
    gender: 'men',
    image: {
      360: [],
      original:
        'https://images.stockx.com/images/Nike-Air-Force-1-Low-Supreme-Baroque-Brown.jpg?fit=fill&bg=FFFFFF&w=500&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1677481787',
      small:
        'https://images.stockx.com/images/Nike-Air-Force-1-Low-Supreme-Baroque-Brown.jpg?fit=fill&bg=FFFFFF&w=375&h=375&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1677481787',
      thumbnail:
        'https://images.stockx.com/images/Nike-Air-Force-1-Low-Supreme-Baroque-Brown.jpg?fit=fill&bg=FFFFFF&w=200&h=200&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1677481787',
    },
    links: {
      stockX: 'https://stockx.com/nike-air-force-1-low-supreme-baroque-brown',
      goat: '',
      flightClub: '',
      stadiumGoods: '',
    },
    name: 'Nike Air Force 1 Low Supreme Baroque Brown',
    releaseDate: '2023-12-01',
    releaseYear: '2023',
    retailPrice: 118,
    silhouette: 'Nike Air Force 1 Low',
    sku: 'CU9225-200',
    story: '',
  },
  {
    id: '63fcf735-8421-4f29-9964-696ba0e6bc28',
    brand: 'Jordan',
    colorway: 'True Blue/Topaz Gold/Sail',
    estimatedMarketValue: 150,
    gender: 'men',
    image: {
      360: [],
      original: '',
      small: '',
      thumbnail: '',
    },
    links: {
      stockX: '',
      goat: 'https://goat.com/sneakers/air-jordan-1-ko-high-laney-do5047-407',
      flightClub:
        'https://flightclub.com/air-jordan-1-ko-high-laney-do5047-407',
      stadiumGoods: '',
    },
    name: "Air Jordan 1 KO High 'Laney'",
    releaseDate: '2023-09-30',
    releaseYear: '2023',
    retailPrice: 150,
    silhouette: 'AJKO',
    sku: 'DO5047-407',
    story: '',
  },
  {
    id: 'f0a9ce23-da3e-41c6-b837-7f3aca518d91',
    brand: 'Jordan',
    colorway: 'Black/Black/White',
    estimatedMarketValue: 185,
    gender: 'men',
    image: {
      360: [],
      original: '',
      small: '',
      thumbnail: '',
    },
    links: {
      stockX: '',
      goat: 'https://goat.com/sneakers/air-jordan-11-retro-low-ie-black-white-919712-001',
      flightClub:
        'https://flightclub.com/air-jordan-11-retro-low-ie-black-white-919712-001',
      stadiumGoods: '',
    },
    name: "Air Jordan 11 Retro Low IE 'Black White'",
    releaseDate: '2023-09-22',
    releaseYear: '2023',
    retailPrice: 185,
    silhouette: 'Air Jordan 11',
    sku: '919712-001',
    story: '',
  },
  {
    id: 'e8bc6a11-47a9-41e1-bcc3-baa58ca40a11',
    brand: 'Jordan',
    colorway: 'Chutney/Black',
    estimatedMarketValue: 180,
    gender: 'women',
    image: {
      360: [],
      original: '',
      small: '',
      thumbnail: '',
    },
    links: {
      stockX: '',
      goat: 'https://goat.com/sneakers/wmns-air-jordan-5-retro-low-chutney-da8016-700',
      flightClub:
        'https://flightclub.com/wmns-air-jordan-5-retro-low-chutney-da8016-700',
      stadiumGoods: '',
    },
    name: "Wmns Air Jordan 5 Retro Low 'Chutney'",
    releaseDate: '2023-09-21',
    releaseYear: '2023',
    retailPrice: 180,
    silhouette: 'Air Jordan 5',
    sku: 'DA8016-700',
    story: '',
  },
  {
    id: '5b43490c-469a-4aac-bb85-be25449b7da8',
    brand: 'Jordan',
    colorway: 'Black/Metallic Gold/Palomino/Sail',
    estimatedMarketValue: 180,
    gender: 'men',
    image: {
      360: [],
      original: '',
      small: '',
      thumbnail: '',
    },
    links: {
      stockX: '',
      goat: 'https://goat.com/sneakers/air-jordan-1-retro-high-og-palomino-dz5485-020',
      flightClub:
        'https://flightclub.com/air-jordan-1-retro-high-og-palomino-dz5485-020',
      stadiumGoods: '',
    },
    name: "Air Jordan 1 Retro High OG 'Palomino'",
    releaseDate: '2023-09-16',
    releaseYear: '2023',
    retailPrice: 180,
    silhouette: 'Air Jordan 1',
    sku: 'DZ5485-020',
    story: '',
  },
  {
    id: '1559d946-49ea-44ca-a466-9f7bb34c3534',
    brand: 'Jordan',
    colorway: 'Praline/White/Sail',
    estimatedMarketValue: 0,
    gender: 'preschool',
    image: {
      360: [],
      original: '',
      small: '',
      thumbnail: '',
    },
    links: {
      stockX: 'https://stockx.com/air-jordan-1-retro-high-og-praline-ps',
      goat: '',
      flightClub: '',
      stadiumGoods: '',
    },
    name: 'Jordan 1 Retro High OG Praline (PS)',
    releaseDate: '2023-09-13',
    releaseYear: '2023',
    retailPrice: 0,
    silhouette: 'Jordan 1 Retro High OG',
    sku: 'FN6621-201',
    story: '',
  },
  {
    id: 'c96e1db9-86d0-4793-ba10-22c869002e5b',
    brand: 'Jordan',
    colorway: 'Praline/White/Sail',
    estimatedMarketValue: 180,
    gender: 'women',
    image: {
      360: [],
      original: '',
      small: '',
      thumbnail: '',
    },
    links: {
      stockX: 'https://stockx.com/air-jordan-1-retro-high-og-praline-w',
      goat: 'https://goat.com/sneakers/wmns-air-jordan-1-retro-high-og-praline-fn6622-201',
      flightClub:
        'https://flightclub.com/wmns-air-jordan-1-retro-high-og-praline-fn6622-201',
      stadiumGoods: '',
    },
    name: "Jordan 1 Retro High OG Praline (Women's)",
    releaseDate: '2023-09-13',
    releaseYear: '2023',
    retailPrice: 180,
    silhouette: 'Air Jordan 1',
    sku: 'FN6622-201',
    story: '',
  },
  {
    id: 'e374beaf-e926-4c9a-a17b-d10d19754593',
    brand: 'Jordan',
    colorway: 'Praline/White/Sail',
    estimatedMarketValue: 0,
    gender: 'toddler',
    image: {
      360: [],
      original: '',
      small: '',
      thumbnail: '',
    },
    links: {
      stockX: 'https://stockx.com/air-jordan-1-retro-high-og-praline-td',
      goat: '',
      flightClub: '',
      stadiumGoods: '',
    },
    name: 'Jordan 1 Retro High OG Praline (TD)',
    releaseDate: '2023-09-13',
    releaseYear: '2023',
    retailPrice: 0,
    silhouette: 'Jordan 1 Retro High OG',
    sku: 'FN6623-201',
    story: '',
  },
  {
    id: '075a0375-7e05-4bdc-b547-de08aae2f73a',
    brand: 'Jordan',
    colorway: 'Sail/Black-Atmosphere Grey',
    estimatedMarketValue: 140,
    gender: 'men',
    image: {
      360: [],
      original: '',
      small: '',
      thumbnail: '',
    },
    links: {
      stockX: 'https://stockx.com/air-jordan-1-retro-low-og-ex-sail',
      goat: 'https://goat.com/sneakers/air-jordan-1-retro-low-og-atmosphere-grey-cz0790-101',
      flightClub:
        'https://flightclub.com/air-jordan-1-retro-low-og-atmosphere-grey-cz0790-101',
      stadiumGoods: '',
    },
    name: 'Jordan 1 Retro Low OG EX Sail',
    releaseDate: '2023-09-08',
    releaseYear: '2023',
    retailPrice: 140,
    silhouette: 'Air Jordan 1',
    sku: 'CZ0790-101',
    story: '',
  },
  {
    id: '4f705671-380f-4369-9acd-7fc36aad0f9d',
    brand: 'Jordan',
    colorway: 'Black/True Red',
    estimatedMarketValue: 200,
    gender: 'men',
    image: {
      360: [],
      original: '',
      small: '',
      thumbnail: '',
    },
    links: {
      stockX: '',
      goat: 'https://goat.com/sneakers/air-jordan-8-retro-playoff-2023-305381-062',
      flightClub:
        'https://flightclub.com/air-jordan-8-retro-playoff-2023-305381-062',
      stadiumGoods: '',
    },
    name: "Air Jordan 8 Retro 'Playoff' 2023",
    releaseDate: '2023-09-02',
    releaseYear: '2023',
    retailPrice: 200,
    silhouette: 'Air Jordan 8',
    sku: '305381-062',
    story:
      'The 2023 edition of the Air Jordan 8 Retro ‘Playoff’ celebrates the 30th anniversary of the shoe that Michael Jordan wore when he captured his third NBA championship. Previously released in 2013, the legacy silhouette carries a black nubuck upper with a unique cross-strap design for a secure, locked-in fit. A crimson Jumpman decorates a tongue patch made with fuzzy chenille, while an embroidered ‘23’ lands on the vamp. A red and black brushstroke graphic adorns synthetic overlays along the lateral and medial sides. The sneaker rests on a matching black foam midsole with glossy sidewalls and encapsulated Air-sole cushioning. A multicolor rubber outsole reveals a golden Jumpman logo under the forefoot.',
  },
  {
    id: 'c7c21750-2728-487d-ba19-f5d2ac9708fd',
    brand: 'Jordan',
    colorway: 'Summit White/Gym Red/Medium Soft Pink/Muslin',
    estimatedMarketValue: 175,
    gender: 'women',
    image: {
      360: [],
      original: '',
      small: '',
      thumbnail: '',
    },
    links: {
      stockX: '',
      goat: 'https://goat.com/sneakers/wmns-air-jordan-2-retro-soft-pink-fb2327-100',
      flightClub:
        'https://flightclub.com/wmns-air-jordan-2-retro-soft-pink-fb2327-100',
      stadiumGoods: '',
    },
    name: "Wmns Air Jordan 2 Retro 'Soft Pink'",
    releaseDate: '2023-08-31',
    releaseYear: '2023',
    retailPrice: 175,
    silhouette: 'Air Jordan 2',
    sku: 'FB2327-100',
    story: '',
  },
  {
    id: '6dac50da-b78e-468a-887e-65e9ff2e7865',
    brand: 'Jordan',
    colorway: 'Light Orewood Brown/Metallic Gold/Light British Tan/Palomino',
    estimatedMarketValue: 200,
    gender: 'men',
    image: {
      360: [],
      original: '',
      small: '',
      thumbnail: '',
    },
    links: {
      stockX: '',
      goat: 'https://goat.com/sneakers/air-jordan-3-retro-palomino-ct8532-102',
      flightClub:
        'https://flightclub.com/air-jordan-3-retro-palomino-ct8532-102',
      stadiumGoods: '',
    },
    name: "Air Jordan 3 Retro 'Palomino'",
    releaseDate: '2023-08-19',
    releaseYear: '2023',
    retailPrice: 200,
    silhouette: 'Air Jordan 3',
    sku: 'CT8532-102',
    story:
      'The Air Jordan 3 Retro ‘Palomino’ gives the heritage silhouette a rustic makeover highlighted by muted earth tones. The upper is crafted from off-white leather with brown elephant-print overlays at the forefoot and heel. The unique design is repeated on the eyestay, while tan perforated suede is utilized on the padded collar. Classic Jumpman branding embellishes the tongue and molded heel tab. An exposed Air-sole unit is nestled in the heel of the polyurethane midsole, treated to a vintage finish and supported by a durable grey rubber outsole.',
  },
  {
    id: 'f887bba9-d9fd-4682-881b-713d12cf140d',
    brand: 'Jordan',
    colorway: 'Black/Pale Vanilla',
    estimatedMarketValue: 150,
    gender: 'men',
    image: {
      360: [],
      original: '',
      small: '',
      thumbnail: '',
    },
    links: {
      stockX: '',
      goat: 'https://goat.com/sneakers/air-jordan-2-retro-low-craft-black-vanilla-fj0753-001',
      flightClub:
        'https://flightclub.com/air-jordan-2-retro-low-craft-black-vanilla-fj0753-001',
      stadiumGoods: '',
    },
    name: "Air Jordan 2 Retro Low 'Craft - Black Vanilla'",
    releaseDate: '2023-08-04',
    releaseYear: '2023',
    retailPrice: 150,
    silhouette: 'Air Jordan 2',
    sku: 'FJ0753-001',
    story: '',
  },
  {
    id: '435c5bc5-b77e-44f6-bc90-c8f4e1f3186c',
    brand: 'Jordan',
    colorway: 'Black/Field Purple/Metallic Gold/Taxi',
    estimatedMarketValue: 200,
    gender: 'men',
    image: {
      360: [],
      original: '',
      small: '',
      thumbnail: '',
    },
    links: {
      stockX: '',
      goat: 'https://goat.com/sneakers/air-jordan-12-retro-field-purple-ct8013-057',
      flightClub: '',
      stadiumGoods: '',
    },
    name: "Air Jordan 12 Retro 'Field Purple'",
    releaseDate: '2023-07-29',
    releaseYear: '2023',
    retailPrice: 200,
    silhouette: 'Air Jordan 12',
    sku: 'CT8013-057',
    story: '',
  },
  {
    id: '774f896b-bf2a-4941-af26-81ef352caa93',
    brand: 'Jordan',
    colorway: 'White/Black-Red',
    estimatedMarketValue: 140,
    gender: 'men',
    image: {
      360: [],
      original: '',
      small: '',
      thumbnail: '',
    },
    links: {
      stockX: 'https://stockx.com/air-jordan-1-retro-low-og-black-toe',
      goat: 'https://goat.com/sneakers/air-jordan-1-retro-low-og-black-toe-2023-cz0790-106',
      flightClub:
        'https://flightclub.com/air-jordan-1-retro-low-og-black-toe-2023-cz0790-106',
      stadiumGoods: '',
    },
    name: 'Jordan 1 Retro Low OG Black Toe',
    releaseDate: '2023-07-28',
    releaseYear: '2023',
    retailPrice: 140,
    silhouette: 'Air Jordan 1',
    sku: 'CZ0790-106',
    story:
      'The 2023 edition of the Air Jordan 1 Retro Low OG ‘Black Toe’ brings back a coveted original colorway initially released in 1985. The low-profile silhouette utilizes an all-leather upper, featuring a white base with forefoot and heel overlays in black and Varsity Red, respectively. Branding elements include a black signature Swoosh, a woven Nike tongue tag, and a black Wings logo stamped on the red leather heel tab. The shoe rests on a durable cupsole that pairs crisp white sidewalls with a grippy red rubber outsole.',
  },
  {
    id: 'ce119ae6-803e-46b1-b6aa-00df4feadc8a',
    brand: 'Jordan',
    colorway: 'Black/Dark Powder Blue/Gym Red',
    estimatedMarketValue: 140,
    gender: 'women',
    image: {
      360: [],
      original: '',
      small: '',
      thumbnail: '',
    },
    links: {
      stockX: '',
      goat: 'https://goat.com/sneakers/wmns-air-jordan-1-retro-low-og-unc-to-chicago-cz0775-046',
      flightClub:
        'https://flightclub.com/wmns-air-jordan-1-retro-low-og-unc-to-chicago-cz0775-046',
      stadiumGoods: '',
    },
    name: "Wmns Air Jordan 1 Retro Low OG 'UNC to Chicago'",
    releaseDate: '2023-07-26',
    releaseYear: '2023',
    retailPrice: 140,
    silhouette: 'Air Jordan 1',
    sku: 'CZ0775-046',
    story: '',
  },
  {
    id: 'ef9df43a-b393-42f3-b65c-1f695e74ff30',
    brand: 'Jordan',
    colorway: 'White/University Blue/Cement Grey',
    estimatedMarketValue: 150,
    gender: 'men',
    image: {
      360: [],
      original: '',
      small: '',
      thumbnail: '',
    },
    links: {
      stockX: '',
      goat: 'https://goat.com/sneakers/air-jordan-2-retro-low-unc-dv9956-104',
      flightClub:
        'https://flightclub.com/air-jordan-2-retro-low-unc-dv9956-104',
      stadiumGoods: '',
    },
    name: "Air Jordan 2 Retro Low 'UNC'",
    releaseDate: '2023-07-22',
    releaseYear: '2023',
    retailPrice: 150,
    silhouette: 'Air Jordan 2',
    sku: 'DV9956-104',
    story:
      'The Air Jordan 2 Retro Low ‘UNC’ outfits the heritage silhouette in a familiar color palette inspired by Michael Jordan’s alma mater. The low-top carries a white leather upper, accented with contrasting pops of University Blue on the interior lining, molded heel tab, and midfoot piping. A blue Wings logo decorates the tongue. The sneaker rests on a white polyurethane midsole, fitted with encapsulated Air-sole cushioning and supported by a two-tone rubber outsole.',
  },
  {
    id: 'f061d519-810a-4045-bbaa-0f74a1b89501',
    brand: 'Jordan',
    colorway: 'White/Celestial Gold',
    estimatedMarketValue: 200,
    gender: 'men',
    image: {
      360: [],
      original: '',
      small: '',
      thumbnail: '',
    },
    links: {
      stockX: '',
      goat: 'https://goat.com/sneakers/air-jordan-6-retro-craft-celestial-gold-dz4132-100',
      flightClub:
        'https://flightclub.com/air-jordan-6-retro-craft-celestial-gold-dz4132-100',
      stadiumGoods: '',
    },
    name: "Air Jordan 6 Retro 'Craft - Celestial Gold'",
    releaseDate: '2023-07-15',
    releaseYear: '2023',
    retailPrice: 200,
    silhouette: 'Air Jordan 6',
    sku: 'DZ4132-100',
    story: '',
  },
  {
    id: 'de6a8492-ed14-4105-8bac-0b2534444014',
    brand: 'Jordan',
    colorway: 'University Blue/Black/White',
    estimatedMarketValue: 300,
    gender: 'men',
    image: {
      360: [],
      original: '',
      small: '',
      thumbnail: '',
    },
    links: {
      stockX: '',
      goat: 'https://goat.com/sneakers/air-jordan-1-retro-high-og-unc-toe-dz5485-400',
      flightClub:
        'https://flightclub.com/air-jordan-1-retro-high-og-unc-toe-dz5485-400',
      stadiumGoods: '',
    },
    name: "Air Jordan 1 Retro High OG 'UNC Toe'",
    releaseDate: '2023-07-08',
    releaseYear: '2023',
    retailPrice: 180,
    silhouette: 'Air Jordan 1',
    sku: 'DZ5485-400',
    story:
      'Inspired by Michael Jordan’s alma mater, the Air Jordan 1 Retro High OG ‘UNC Toe’ brings back the distinctive color blocking originally featured on the ‘Bred Toe’ AJ1 from 2018. The high-top utilizes an all-leather upper with white quarter panels and contrasting hits of black on the signature Swoosh and forefoot overlay. University Blue accents make their way to the toe box, heel and collar flap, marked with a retro Wings logo on the lateral side. A woven Nike tag atop the breathable nylon tongue delivers an OG-inspired touch. Lightweight cushioning arrives via a white rubber midsole with an Air-sole heel unit encapsulated in a polyurethane wedge. Underfoot, a blue rubber outsole provides durable traction with every step.',
  },
  {
    id: '37c45c5a-3d69-4f49-9aba-ff876c5c192a',
    brand: 'Jordan',
    colorway: 'White/True Red/Wolf Grey',
    estimatedMarketValue: 330,
    gender: 'men',
    image: {
      360: [],
      original: '',
      small: '',
      thumbnail: '',
    },
    links: {
      stockX: '',
      goat: 'https://goat.com/sneakers/air-jordan-13-retro-wolf-grey-414571-160',
      flightClub:
        'https://flightclub.com/air-jordan-13-retro-wolf-grey-414571-160',
      stadiumGoods: '',
    },
    name: "Air Jordan 13 Retro 'Wolf Grey'",
    releaseDate: '2023-07-01',
    releaseYear: '2023',
    retailPrice: 210,
    silhouette: 'Air Jordan 13',
    sku: '414571-160',
    story:
      'The Air Jordan 13 Retro ‘Wolf Grey’ presents a refined colorway of the legacy model that draws inspiration from Michael Jordan’s ‘Black Cat’ persona. The upper combines a white leather base with grey synthetic suede paneling and dimpled overlays constructed from white tumbled leather. A scarlet Jumpman is embroidered on the tongue, while the 13’s holographic cat eye decorates the lateral collar. Grey synthetic suede wraps the Phylon midsole, reinforced underfoot by a carbon fiber shank plate and a red panther-paw outsole.',
  },
  {
    id: '4a9bc115-f4b1-4514-8147-d697f4e037bc',
    brand: 'Nike',
    colorway: 'Summit White/Gumsmoke-Tech Grey',
    estimatedMarketValue: 350,
    gender: 'men',
    image: {
      360: [],
      original:
        'https://images.stockx.com/images/Nike-Air-Jordan-Air-Ship-PE-SP-Tech-Grey.jpg?fit=fill&bg=FFFFFF&w=500&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1677222382',
      small:
        'https://images.stockx.com/images/Nike-Air-Jordan-Air-Ship-PE-SP-Tech-Grey.jpg?fit=fill&bg=FFFFFF&w=375&h=375&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1677222382',
      thumbnail:
        'https://images.stockx.com/images/Nike-Air-Jordan-Air-Ship-PE-SP-Tech-Grey.jpg?fit=fill&bg=FFFFFF&w=200&h=200&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1677222382',
    },
    links: {
      stockX: 'https://stockx.com/nike-air-jordan-air-ship-pe-sp-tech-grey',
      goat: '',
      flightClub: '',
      stadiumGoods: '',
    },
    name: 'Nike Jordan Air Ship PE SP Tech Grey',
    releaseDate: '2023-07-01',
    releaseYear: '2023',
    retailPrice: 140,
    silhouette: 'Nike Jordan Air Ship PE SP',
    sku: 'DZ3497-100',
    story: '',
  },
  {
    id: '04506a6a-00f5-4f97-b274-3159f581cd4a',
    brand: 'Jordan',
    colorway: 'Varsity Red/Black',
    estimatedMarketValue: 150,
    gender: 'child',
    image: {
      360: [],
      original: '',
      small: '',
      thumbnail: '',
    },
    links: {
      stockX: 'https://stockx.com/air-jordan-6-retro-toro-bravo-gs',
      goat: 'https://goat.com/sneakers/air-jordan-6-retro-gs-toro-bravo-384665-600',
      flightClub:
        'https://flightclub.com/air-jordan-6-retro-gs-toro-bravo-384665-600',
      stadiumGoods: '',
    },
    name: 'Jordan 6 Retro Toro Bravo (GS)',
    releaseDate: '2023-06-24',
    releaseYear: '2023',
    retailPrice: 150,
    silhouette: 'Air Jordan 6',
    sku: '384665-600',
    story: '',
  },
  {
    id: '4b15488c-986c-4f21-855f-d2b30fdd197d',
    brand: 'Jordan',
    colorway: 'Varsity Red/Black',
    estimatedMarketValue: 90,
    gender: 'preschool',
    image: {
      360: [],
      original: '',
      small: '',
      thumbnail: '',
    },
    links: {
      stockX: 'https://stockx.com/air-jordan-6-retro-toro-bravo-ps',
      goat: 'https://goat.com/sneakers/air-jordan-6-retro-ps-toro-bravo-dv3605-600',
      flightClub:
        'https://flightclub.com/air-jordan-6-retro-ps-toro-bravo-dv3605-600',
      stadiumGoods: '',
    },
    name: 'Jordan 6 Retro Toro Bravo (PS)',
    releaseDate: '2023-06-24',
    releaseYear: '2023',
    retailPrice: 90,
    silhouette: 'Air Jordan 6',
    sku: 'DV3605-600',
    story: '',
  },
  {
    id: '85aae727-1716-4af2-852d-5526c1c237cc',
    brand: 'Jordan',
    colorway: 'Varsity Red/Black',
    estimatedMarketValue: 290,
    gender: 'men',
    image: {
      360: [],
      original:
        'https://image.goat.com/attachments/product_template_pictures/images/086/575/552/original/1136233_00.png.png',
      small:
        'https://image.goat.com/750/attachments/product_template_pictures/images/086/575/552/original/1136233_00.png.png',
      thumbnail:
        'https://image.goat.com/375/attachments/product_template_pictures/images/086/575/552/original/1136233_00.png.png',
    },
    links: {
      stockX: 'https://stockx.com/air-jordan-6-retro-toro-bravo',
      goat: 'https://goat.com/sneakers/air-jordan-6-retro-toro-bravo-ct8529-600',
      flightClub:
        'https://flightclub.com/air-jordan-6-retro-toro-bravo-ct8529-600',
      stadiumGoods: '',
    },
    name: 'Jordan 6 Retro Toro Bravo',
    releaseDate: '2023-06-24',
    releaseYear: '2023',
    retailPrice: 200,
    silhouette: 'Air Jordan 6',
    sku: 'CT8529-600',
    story:
      'The Air Jordan 6 Retro ‘Toro Bravo’ features a bold one-note finish inspired by the Air Jordan 5 of the same name, which released in 2009 as one-half of the Raging Bull Pack. The championship silhouette makes use of a crimson suede upper, contrasted by black accents on the tongue, collar lining and spoiler-like heel tab. Perforated detailing offers improved breathability, while a snug inner sleeve delivers a secure, comfortable fit. Lightweight cushioning arrives via a two-tone polyurethane midsole, fitted with a visible Air-sole unit in the heel and undergirded by a translucent rubber outsole.',
  },
  {
    id: 'd01c2233-11f6-4cbb-b820-7d85ccf5842d',
    brand: 'Jordan',
    colorway: 'Varsity Red/Black',
    estimatedMarketValue: 70,
    gender: 'toddler',
    image: {
      360: [],
      original: '',
      small: '',
      thumbnail: '',
    },
    links: {
      stockX: 'https://stockx.com/air-jordan-6-retro-toro-bravo-td',
      goat: 'https://goat.com/sneakers/air-jordan-6-retro-td-toro-bravo-dv3606-600',
      flightClub:
        'https://flightclub.com/air-jordan-6-retro-td-toro-bravo-dv3606-600',
      stadiumGoods: '',
    },
    name: 'Jordan 6 Retro Toro Bravo (TD)',
    releaseDate: '2023-06-24',
    releaseYear: '2023',
    retailPrice: 70,
    silhouette: 'Air Jordan 6',
    sku: 'DV3606-600',
    story: '',
  },
  {
    id: '1ada9c26-5213-4951-a693-16877abddfac',
    brand: 'Jordan',
    colorway: 'White/Black/Crimson',
    estimatedMarketValue: 175,
    gender: 'child',
    image: {
      360: [],
      original:
        'https://image.goat.com/attachments/product_template_pictures/images/087/204/338/original/DQ6040_160.png.png',
      small:
        'https://image.goat.com/750/attachments/product_template_pictures/images/087/204/338/original/DQ6040_160.png.png',
      thumbnail:
        'https://image.goat.com/375/attachments/product_template_pictures/images/087/204/338/original/DQ6040_160.png.png',
    },
    links: {
      stockX: 'https://stockx.com/air-jordan-7-retro-white-infrared-gs',
      goat: 'https://goat.com/sneakers/air-jordan-7-retro-gs-white-infrared-dq6040-160',
      flightClub:
        'https://flightclub.com/air-jordan-7-retro-gs-white-infrared-dq6040-160',
      stadiumGoods: '',
    },
    name: 'Jordan 7 Retro White Infrared (GS)',
    releaseDate: '2023-06-23',
    releaseYear: '2023',
    retailPrice: 150,
    silhouette: 'Air Jordan 7',
    sku: 'DQ6040-160',
    story:
      'Scaled down for big kids, the Air Jordan 7 Retro GS ‘White Infrared’ features a distinctive palette that takes its cues from an OG colorway of the Air Jordan 6. The upper is constructed from white leather with perforated detailing and a neoprene interior bootie in black. A Jumpman icon adorns the lateral collar in Infrared embroidery. The vibrant hue makes a repeat appearance on the polyurethane midsole, fitted with encapsulated Air-sole cushioning and undergirded by a translucent rubber outsole.',
  },
  {
    id: '47be69f2-3c42-4df1-a9b4-f88552d9ac40',
    brand: 'Jordan',
    colorway: 'White/Black/Crimson',
    estimatedMarketValue: 315,
    gender: 'men',
    image: {
      360: [],
      original:
        'https://image.goat.com/attachments/product_template_pictures/images/083/466/550/original/CU9307_160.png.png',
      small:
        'https://image.goat.com/750/attachments/product_template_pictures/images/083/466/550/original/CU9307_160.png.png',
      thumbnail:
        'https://image.goat.com/375/attachments/product_template_pictures/images/083/466/550/original/CU9307_160.png.png',
    },
    links: {
      stockX: 'https://stockx.com/air-jordan-7-retro-white-infrared',
      goat: 'https://goat.com/sneakers/air-jordan-7-retro-white-infrared-cu9307-160',
      flightClub:
        'https://flightclub.com/air-jordan-7-retro-white-infrared-cu9307-160',
      stadiumGoods: '',
    },
    name: 'Jordan 7 Retro White Infrared',
    releaseDate: '2023-06-23',
    releaseYear: '2023',
    retailPrice: 210,
    silhouette: 'Air Jordan 7',
    sku: 'CU9307-160',
    story:
      'The Air Jordan 7 Retro ‘White Infrared’ showcases a familiar OG color scheme initially seen on the Air Jordan 6. The layered upper is crafted from white leather with perforated detailing throughout the midfoot and collar. The latter is marked with an Infrared Jumpman logo on the lateral side, matching the ‘Air Jordan’ lettering that embellishes the stretchy neoprene tongue. A molded ‘23’ patch decorates the heel, while classic Nike Air branding appears on the sockliner. Lightweight cushioning is provided by a white polyurethane midsole, accented with Infrared detailing and reinforced by a translucent rubber outsole.',
  },
  {
    id: '90c9b5b2-6bc8-40dd-922c-e093ec434f34',
    brand: 'Jordan',
    colorway: 'Black/Muslin/Tech Grey/White/Sail',
    estimatedMarketValue: 140,
    gender: 'men',
    image: {
      360: [],
      original:
        'https://image.goat.com/attachments/product_template_pictures/images/084/386/420/original/CZ0790_001.png.png',
      small:
        'https://image.goat.com/750/attachments/product_template_pictures/images/084/386/420/original/CZ0790_001.png.png',
      thumbnail:
        'https://image.goat.com/375/attachments/product_template_pictures/images/084/386/420/original/CZ0790_001.png.png',
    },
    links: {
      stockX: 'https://stockx.com/air-jordan-1-retro-low-og-black-cement',
      goat: 'https://goat.com/sneakers/air-jordan-1-retro-low-og-black-cement-cz0790-001',
      flightClub:
        'https://flightclub.com/air-jordan-1-retro-low-og-black-cement-cz0790-001',
      stadiumGoods: '',
    },
    name: 'Jordan 1 Retro Low OG Black Cement',
    releaseDate: '2023-06-23',
    releaseYear: '2023',
    retailPrice: 140,
    silhouette: 'Air Jordan 1',
    sku: 'CZ0790-001',
    story:
      'The Air Jordan 1 Retro Low OG ‘Black Cement’ borrows an instantly recognizable design motif from the iconic Air Jordan 3. Grey elephant print appears on the shoe’s forefoot and heel overlays, while the rest of the upper is constructed from smooth black nubuck. Branding elements include a white leather Swoosh, woven Nike Air tongue tags, and a retro Wings logo embroidered on the heel tab. The low-top is mounted on a vintage off-white midsole, supported underfoot by a durable grey rubber outsole.',
  },
  {
    id: '97431fa3-459b-4f8c-8c68-21c5cb100d96',
    brand: 'Jordan',
    colorway: 'Light Orewood Brown/Safety Orange/Flat Pewter/Sail',
    estimatedMarketValue: 215,
    gender: 'men',
    image: {
      360: [],
      original:
        'https://image.goat.com/attachments/product_template_pictures/images/086/339/739/original/1103113_00.png.png',
      small:
        'https://image.goat.com/750/attachments/product_template_pictures/images/086/339/739/original/1103113_00.png.png',
      thumbnail:
        'https://image.goat.com/375/attachments/product_template_pictures/images/086/339/739/original/1103113_00.png.png',
    },
    links: {
      stockX:
        'https://stockx.com/air-jordan-5-retro-se-craft-light-orewood-brown',
      goat: 'https://goat.com/sneakers/air-jordan-5-retro-se-craft-fd9222-180',
      flightClub:
        'https://flightclub.com/air-jordan-5-retro-se-craft-fd9222-180',
      stadiumGoods: '',
    },
    name: 'Jordan 5 Retro SE Craft Light Orewood Brown',
    releaseDate: '2023-06-17',
    releaseYear: '2023',
    retailPrice: 210,
    silhouette: 'Air Jordan 5',
    sku: 'FD9222-180',
    story:
      'The Air Jordan 5 Retro SE ‘Craft’ updates the legacy silhouette with a subtle color palette and a refreshed build. Crafted from taupe-colored suede and textile, the upper is secured with two-tone laces and accented with translucent quarter-panel netting. Orange textile lines the tongue, matching the signature Jumpman that decorates the exterior. A second Jumpman icon graces the heel overlay in grey embroidery. The mid-top rides on an off-white polyurethane midsole, featuring speckled shark-tooth detailing and a visible Air-sole unit in the heel. Underfoot, a translucent herringbone-pattern rubber outsole yields superior stop-and-go traction.',
  },
  {
    id: 'd75471a8-311c-4276-aff2-45b951ff939c',
    brand: 'Jordan',
    colorway: 'Light Orewood Brown/Safety Orange/Flat Pewter/Sail',
    estimatedMarketValue: 150,
    gender: 'child',
    image: {
      360: [],
      original: '',
      small: '',
      thumbnail: '',
    },
    links: {
      stockX:
        'https://stockx.com/air-jordan-5-retro-se-craft-light-orewood-brown-gs',
      goat: 'https://goat.com/sneakers/air-jordan-5-retro-se-gs-craft-fd9220-180',
      flightClub:
        'https://flightclub.com/air-jordan-5-retro-se-gs-craft-fd9220-180',
      stadiumGoods: '',
    },
    name: 'Jordan 5 Retro SE Craft Light Orewood Brown (GS)',
    releaseDate: '2023-06-17',
    releaseYear: '2023',
    retailPrice: 150,
    silhouette: 'Air Jordan 5',
    sku: 'FD9220-180',
    story:
      'Built for big kids, the Air Jordan 5 Retro SE GS ‘Craft’ utilizes a chalk-hued suede and textile upper with two-tone laces that feed through semi-translucent eyelets. A padded mid-cut collar provides a comfortable fit, while quarter-panel netting offers improved breathability. Orange textile lines the tongue, marked with a Jumpman logo in a matching citrus hue. Additional Jumpman branding embellishes the heel overlay in grey embroidery. The legacy silhouette rests on an off-white polyurethane midsole, accented with speckled shark-tooth detailing and supported by a translucent rubber outsole.',
  },
  {
    id: 'eda60aa2-6227-4871-aef4-f60c54b4bb48',
    brand: 'Jordan',
    colorway: 'Black/Fire Red/Light Smoke Grey/Sail',
    estimatedMarketValue: 580,
    gender: 'men',
    image: {
      360: [],
      original:
        'https://image.goat.com/attachments/product_template_pictures/images/084/941/046/original/1103104_00.png.png',
      small:
        'https://image.goat.com/750/attachments/product_template_pictures/images/084/941/046/original/1103104_00.png.png',
      thumbnail:
        'https://image.goat.com/375/attachments/product_template_pictures/images/084/941/046/original/1103104_00.png.png',
    },
    links: {
      stockX: 'https://stockx.com/air-jordan-1-retro-high-og-washed-black',
      goat: 'https://goat.com/sneakers/air-jordan-1-retro-high-og-washed-black-dz5485-051',
      flightClub:
        'https://flightclub.com/air-jordan-1-retro-high-og-washed-black-dz5485-051',
      stadiumGoods: '',
    },
    name: 'Jordan 1 Retro High OG Washed Black',
    releaseDate: '2023-06-10',
    releaseYear: '2023',
    retailPrice: 180,
    silhouette: 'Air Jordan 1',
    sku: 'DZ5485-051',
    story:
      'The Air Jordan 1 Retro High OG ‘Washed Black’ gives the heritage silhouette a refreshed build in neutral tones. The high-top dons a white leather upper with grey suede overlays and a color-matched Swoosh. A lighter shade of grey suede is utilized on the high-cut collar, which is overlaid with an ankle flap marked with the iconic Wings logo. Atop the breathable nylon tongue, a woven Nike tag in black and red delivers a solitary pop of color. Underpinning the sneaker is a vintage off-white midsole, supported underfoot by a grippy black rubber outsole.',
  },
  {
    id: 'ab20fe62-c3e3-4b28-b95d-65e2bc6d504c',
    brand: 'Jordan',
    colorway: 'Indigo Haze/Fire Red-Metallic Silver-Alabaster-Flint Grey',
    estimatedMarketValue: 270,
    gender: 'women',
    image: {
      360: [],
      original:
        'https://image.goat.com/attachments/product_template_pictures/images/084/466/420/original/FJ4563_500.png.png',
      small:
        'https://image.goat.com/750/attachments/product_template_pictures/images/084/466/420/original/FJ4563_500.png.png',
      thumbnail:
        'https://image.goat.com/375/attachments/product_template_pictures/images/084/466/420/original/FJ4563_500.png.png',
    },
    links: {
      stockX: 'https://stockx.com/air-jordan-5-retro-low-indigo-haze-w',
      goat: 'https://goat.com/sneakers/wmns-air-jordan-5-retro-low-indigo-haze-fj4563-500',
      flightClub: '',
      stadiumGoods: '',
    },
    name: "Jordan 5 Retro Low Indigo Haze (Women's)",
    releaseDate: '2023-06-08',
    releaseYear: '2023',
    retailPrice: 180,
    silhouette: 'Air Jordan 5',
    sku: 'FJ4563-500',
    story:
      'The Women’s Air Jordan 5 Retro Low ‘Festival Lights’ showcases a reflective upper in a pale violet hue. The low-top is equipped with customary AJ5 details, including molded eyelets, lace locks and translucent quarter-panel netting. A cream-colored Jumpman is embroidered on the silver reflective tongue, matching the plush textile that lines the low-cut collar. The sneaker is mounted on a Flint Grey polyurethane midsole, featuring visible Air-sole cushioning and signature shark-tooth detailing. Underfoot, a translucent rubber outsole provides durable traction.',
  },
  {
    id: '0f2d52f5-7c7e-4db9-b76b-924ca1b3689f',
    brand: 'New Balance',
    colorway: 'Rattan/Sea Salt',
    estimatedMarketValue: 120,
    gender: 'men',
    image: {
      360: [],
      original:
        'https://image.goat.com/attachments/product_template_pictures/images/086/376/888/original/BB550MDA.png.png',
      small:
        'https://image.goat.com/750/attachments/product_template_pictures/images/086/376/888/original/BB550MDA.png.png',
      thumbnail:
        'https://image.goat.com/375/attachments/product_template_pictures/images/086/376/888/original/BB550MDA.png.png',
    },
    links: {
      stockX: 'https://stockx.com/new-balance-550-rattan-sea-salt',
      goat: 'https://goat.com/sneakers/550-hemp-bb550mda',
      flightClub: 'https://flightclub.com/550-hemp-bb550mda',
      stadiumGoods: '',
    },
    name: 'New Balance 550 Rattan Sea Salt',
    releaseDate: '2023-06-01',
    releaseYear: '2023',
    retailPrice: 120,
    silhouette: '550',
    sku: 'BB550MDA',
    story: '',
  },
  {
    id: '7358c116-ad2e-48b5-b988-7e40852fa0ea',
    brand: 'Jordan',
    colorway: 'Varsity Royal/Black/Varsity Maize/White',
    estimatedMarketValue: 425,
    gender: 'men',
    image: {
      360: [],
      original:
        'https://image.goat.com/attachments/product_template_pictures/images/085/748/760/original/487471_407.png.png',
      small:
        'https://image.goat.com/750/attachments/product_template_pictures/images/085/748/760/original/487471_407.png.png',
      thumbnail:
        'https://image.goat.com/375/attachments/product_template_pictures/images/085/748/760/original/487471_407.png.png',
    },
    links: {
      stockX: '',
      goat: 'https://goat.com/sneakers/air-jordan-14-retro-laney-487471-407',
      flightClub: 'https://flightclub.com/air-jordan-14-retro-laney-487471-407',
      stadiumGoods: '',
    },
    name: "Air Jordan 14 Retro 'Laney'",
    releaseDate: '2023-05-27',
    releaseYear: '2023',
    retailPrice: 210,
    silhouette: 'Air Jordan 14',
    sku: '487471-407',
    story:
      'Featuring a vibrant color scheme inspired by Michael Jordan’s high school alma mater, the Air Jordan 14 Retro ‘Laney’ revives an OG 1999 release in mid-top form. A bold royal blue finish is executed on the smooth nubuck upper, bolstered by a forefoot overlay in black nubuck. A contrasting pop of Varsity Maize lands on the tongue, matching the Jumpman logo embroidered on the toe box. A second Jumpman icon decorates the Ferrari-inspired badge that decorates the lateral side. Lightweight cushioning is provided by a Phylon midsole, fitted with responsive Zoom Air units in the forefoot and heel.',
  },
  {
    id: 'fab6f73f-813b-4f59-b028-f734fb614d0a',
    brand: 'Jordan',
    colorway: 'Sail/Pale Vanilla-Black',
    estimatedMarketValue: 180,
    gender: 'men',
    image: {
      360: [],
      original:
        'https://image.goat.com/attachments/product_template_pictures/images/084/334/020/original/FD8631_100.png.png',
      small:
        'https://image.goat.com/750/attachments/product_template_pictures/images/084/334/020/original/FD8631_100.png.png',
      thumbnail:
        'https://image.goat.com/375/attachments/product_template_pictures/images/084/334/020/original/FD8631_100.png.png',
    },
    links: {
      stockX:
        'https://stockx.com/air-jordan-1-retro-high-og-craft-vibrations-of-naija',
      goat: 'https://goat.com/sneakers/air-jordan-1-retro-high-og-vibrations-of-naija-fd8631-100',
      flightClub:
        'https://flightclub.com/air-jordan-1-retro-high-og-vibrations-of-naija-fd8631-100',
      stadiumGoods: '',
    },
    name: 'Jordan 1 Retro High OG Craft Vibrations Of Naija',
    releaseDate: '2023-05-27',
    releaseYear: '2023',
    retailPrice: 180,
    silhouette: 'Air Jordan 1',
    sku: 'FD8631-100',
    story:
      'The Air Jordan 1 Retro High OG ‘Craft - Vibrations of Naija’ presents a subtle colorway of MJ&#39;s first signature shoe. Off-white tumbled leather is utilized on the upper, accented with a Pale Vanilla Swoosh covered in black speckling. The identical finish is applied to the high-cut collar, wrapped in ankle flaps branded with a Wings logo on the lateral side. A woven Nike Air tag embellishes the breathable nylon tongue. The high-top is mounted on a durable rubber cupsole, featuring off-white sidewalls and a cream-colored outsole.',
  },
  {
    id: '23e2aa11-0eaa-4e41-8df5-d466f3613f27',
    brand: 'Jordan',
    colorway: 'University Red/Black/White',
    estimatedMarketValue: 850,
    gender: 'men',
    image: {
      360: [],
      original:
        'https://image.goat.com/attachments/product_template_pictures/images/085/116/986/original/1103114_00.png.png',
      small:
        'https://image.goat.com/750/attachments/product_template_pictures/images/085/116/986/original/1103114_00.png.png',
      thumbnail:
        'https://image.goat.com/375/attachments/product_template_pictures/images/085/116/986/original/1103114_00.png.png',
    },
    links: {
      stockX:
        'https://stockx.com/air-jordan-1-high-og-spider-man-across-the-spider-verse',
      goat: 'https://goat.com/sneakers/marvel-x-air-jordan-1-retro-high-og-spider-man-across-the-spider-verse-dv1748-601',
      flightClub:
        'https://flightclub.com/marvel-x-air-jordan-1-retro-high-og-spider-man-across-the-spider-verse-dv1748-601',
      stadiumGoods: '',
    },
    name: 'Jordan 1 High OG Spider-Man Across the Spider-Verse',
    releaseDate: '2023-05-20',
    releaseYear: '2023',
    retailPrice: 200,
    silhouette: 'Air Jordan 1',
    sku: 'DV1748-601',
    story:
      'The Marvel x Air Jordan 1 Retro High OG ‘Spider-Man: Across the Spider-Verse’ delivers a collaborative colorway tied to the animated film of the same name. A play on the original ‘Chicago’ colorway, this reimagined take on the sneaker icon features a white leather upper with black patent leather on the collar and Swoosh. Scarlet overlays are composed of a patchwork mix of different textures and prints — a pieced-together design that nods to the multidimensional Spider-Verse. A retro Wings logo is stamped on the lateral collar flap, while a woven Nike tag decorates the nylon tongue. The high-top rides on a rubber cupsole that pairs aged sidewalls with a crimson semi-translucent rubber outsole.',
  },
  {
    id: 'c100ff52-2db2-4ca0-b818-3d923b902eb6',
    brand: 'Vans',
    colorway: 'Black/True White',
    estimatedMarketValue: 363,
    gender: 'men',
    image: {
      360: [],
      original:
        'https://images.stockx.com/images/Vans-Old-Skool-Gallery-Dept-Good-Luck-Product.jpg?fit=fill&bg=FFFFFF&w=500&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1676448954',
      small:
        'https://images.stockx.com/images/Vans-Old-Skool-Gallery-Dept-Good-Luck-Product.jpg?fit=fill&bg=FFFFFF&w=375&h=375&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1676448954',
      thumbnail:
        'https://images.stockx.com/images/Vans-Old-Skool-Gallery-Dept-Good-Luck-Product.jpg?fit=fill&bg=FFFFFF&w=200&h=200&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1676448954',
    },
    links: {
      stockX: 'https://stockx.com/vans-old-skool-gallery-dept-good-luck',
      goat: '',
      flightClub: '',
      stadiumGoods: '',
    },
    name: 'Vans Old Skool Gallery Dept. Good Luck',
    releaseDate: '2023-05-20',
    releaseYear: '2023',
    retailPrice: 0,
    silhouette: 'Vans Old Skool',
    sku: 'VNOA4P3XBMW1',
    story: '',
  },
  {
    id: '2073e0ae-9ac1-41f5-ba7a-ba7ca6598ccc',
    brand: 'Nike',
    colorway: 'Pale Vanilla/Sea Coral/Sail/Sesame',
    estimatedMarketValue: 210,
    gender: 'women',
    image: {
      360: [],
      original:
        'https://image.goat.com/attachments/product_template_pictures/images/086/718/642/original/DV6840_200.png.png',
      small:
        'https://image.goat.com/750/attachments/product_template_pictures/images/086/718/642/original/DV6840_200.png.png',
      thumbnail:
        'https://image.goat.com/375/attachments/product_template_pictures/images/086/718/642/original/DV6840_200.png.png',
    },
    links: {
      stockX:
        'https://stockx.com/nike-air-vapormax-2023-flyknit-pale-vanilla-sea-coral-womens',
      goat: 'https://goat.com/sneakers/wmns-air-vapormax-2023-flyknit-pale-vanilla-dv6840-200',
      flightClub:
        'https://flightclub.com/wmns-air-vapormax-2023-flyknit-pale-vanilla-dv6840-200',
      stadiumGoods: '',
    },
    name: "Nike Air VaporMax 2023 Flyknit Pale Vanilla Sea Coral (Women's)",
    releaseDate: '2023-05-18',
    releaseYear: '2023',
    retailPrice: 210,
    silhouette: 'Air VaporMax',
    sku: 'DV6840-200',
    story: '',
  },
  {
    id: '20a870e1-08ef-434a-a3ab-4f1e52473b5c',
    brand: 'Nike',
    colorway: 'Baltic Blue/Citron Tint/Green Abyss',
    estimatedMarketValue: 210,
    gender: 'men',
    image: {
      360: [],
      original:
        'https://image.goat.com/attachments/product_template_pictures/images/086/331/760/original/DV1678_400.png.png',
      small:
        'https://image.goat.com/750/attachments/product_template_pictures/images/086/331/760/original/DV1678_400.png.png',
      thumbnail:
        'https://image.goat.com/375/attachments/product_template_pictures/images/086/331/760/original/DV1678_400.png.png',
    },
    links: {
      stockX:
        'https://stockx.com/nike-air-vapormax-2023-flyknit-baltic-blue-citron-tint',
      goat: 'https://goat.com/sneakers/air-vapormax-2023-flyknit-baltic-blue-dv1678-400',
      flightClub:
        'https://flightclub.com/air-vapormax-2023-flyknit-baltic-blue-dv1678-400',
      stadiumGoods: '',
    },
    name: 'Nike Air VaporMax 2023 Flyknit Baltic Blue Citron Tint',
    releaseDate: '2023-05-18',
    releaseYear: '2023',
    retailPrice: 210,
    silhouette: 'Air VaporMax',
    sku: 'DV1678-400',
    story: '',
  },
  {
    id: '37a5fd29-5dda-4d14-b0c3-fdc5d3336cf5',
    brand: 'Nike',
    colorway: 'Oatmeal/Pearl Pink/Pink Oxford/Sail',
    estimatedMarketValue: 233,
    gender: 'women',
    image: {
      360: [],
      original:
        'https://image.goat.com/attachments/product_template_pictures/images/086/718/640/original/DV6840_101.png.png',
      small:
        'https://image.goat.com/750/attachments/product_template_pictures/images/086/718/640/original/DV6840_101.png.png',
      thumbnail:
        'https://image.goat.com/375/attachments/product_template_pictures/images/086/718/640/original/DV6840_101.png.png',
    },
    links: {
      stockX:
        'https://stockx.com/nike-air-vapormax-2023-flyknit-oatmeal-pearl-pink-womens',
      goat: 'https://goat.com/sneakers/wmns-air-vapormax-2023-flyknit-oatmeal-dv6840-101',
      flightClub:
        'https://flightclub.com/wmns-air-vapormax-2023-flyknit-oatmeal-dv6840-101',
      stadiumGoods: '',
    },
    name: "Nike Air VaporMax 2023 Flyknit Oatmeal Pearl Pink (Women's)",
    releaseDate: '2023-05-18',
    releaseYear: '2023',
    retailPrice: 210,
    silhouette: 'Air VaporMax',
    sku: 'DV6840-101',
    story: '',
  },
  {
    id: 'f508e2b8-1fc3-4a0a-9887-b57175ee4857',
    brand: 'Jordan',
    colorway: 'White/Lucky Green/Varsity Red/Cement Grey/Sail',
    estimatedMarketValue: 140,
    gender: 'women',
    image: {
      360: [],
      original:
        'https://image.goat.com/attachments/product_template_pictures/images/086/614/350/original/1057483_00.png.png',
      small:
        'https://image.goat.com/750/attachments/product_template_pictures/images/086/614/350/original/1057483_00.png.png',
      thumbnail:
        'https://image.goat.com/375/attachments/product_template_pictures/images/086/614/350/original/1057483_00.png.png',
    },
    links: {
      stockX: 'https://stockx.com/air-jordan-3-retro-lucky-green-w',
      goat: 'https://goat.com/sneakers/wmns-air-jordan-3-retro-lucky-green-ck9646-136',
      flightClub:
        'https://flightclub.com/wmns-air-jordan-3-retro-lucky-green-ck9646-136',
      stadiumGoods: '',
    },
    name: "Jordan 3 Retro Lucky Green (Women's)",
    releaseDate: '2023-05-18',
    releaseYear: '2023',
    retailPrice: 200,
    silhouette: 'Air Jordan 3',
    sku: 'CK9246-136',
    story:
      'The Women’s Air Jordan 3 Retro ‘Lucky Green’ adds lush accents to the classic silhouette that introduced Tinker Hatfield’s iconic elephant print to the Jordan line. The distinctive pattern appears on Cement Grey overlays at the forefoot and heel, contrasted by a tumbled leather upper in a crisp white finish. Vibrant hits of emerald land on the sneaker’s forefoot eyelets and polyurethane midsole, fitted with visible Air-sole cushioning in the heel. Jumpman branding graces the molded heel tab and tongue, the latter rendered in an unexpected pop of Varsity Red.',
  },
  {
    id: 'd0f2a58e-fe4b-4ecb-a534-3792b97f6d71',
    brand: 'Salomon',
    colorway: 'Rainy Day/Mocha Mousse/Vanilla Ice',
    estimatedMarketValue: 175,
    gender: 'men',
    image: {
      360: [],
      original:
        'https://images.stockx.com/images/Salomon-Pulsar-PRG-Rainy-Day-Mocha-Mousse-Vanilla-Ice.jpg?fit=fill&bg=FFFFFF&w=500&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1678963935',
      small:
        'https://images.stockx.com/images/Salomon-Pulsar-PRG-Rainy-Day-Mocha-Mousse-Vanilla-Ice.jpg?fit=fill&bg=FFFFFF&w=375&h=375&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1678963935',
      thumbnail:
        'https://images.stockx.com/images/Salomon-Pulsar-PRG-Rainy-Day-Mocha-Mousse-Vanilla-Ice.jpg?fit=fill&bg=FFFFFF&w=200&h=200&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1678963935',
    },
    links: {
      stockX:
        'https://stockx.com/salomon-pulsar-prg-rainy-day-mocha-mousse-vanilla-ice',
      goat: '',
      flightClub: '',
      stadiumGoods: '',
    },
    name: 'Salomon Pulsar PRG Rainy Day Mocha Mousse Vanilla Ice',
    releaseDate: '2023-05-14',
    releaseYear: '2023',
    retailPrice: 175,
    silhouette: 'Salomon Pulsar PRG',
    sku: 'L47131900',
    story: '',
  },
  {
    id: '094fd7dc-5aca-427f-9398-5adee55939e4',
    brand: 'Jordan',
    colorway: 'Black/Tour Yellow',
    estimatedMarketValue: 144,
    gender: 'preschool',
    image: {
      360: [],
      original: '',
      small: '',
      thumbnail: '',
    },
    links: {
      stockX: 'https://stockx.com/air-jordan-4-retro-thunder-2023-ps',
      goat: 'https://goat.com/sneakers/air-jordan-4-retro-ps-thunder-2023-bq7669-017',
      flightClub:
        'https://flightclub.com/air-jordan-4-retro-ps-thunder-2023-bq7669-017',
      stadiumGoods: '',
    },
    name: 'Jordan 4 Retro Thunder (2023) (PS)',
    releaseDate: '2023-05-13',
    releaseYear: '2023',
    retailPrice: 85,
    silhouette: 'Air Jordan 4',
    sku: 'BQ7669-017',
    story:
      'Crafted for little kids, the 2023 reissue of the Air Jordan 4 Retro GS ‘Thunder’ brings back a two-tone colorway that originally launched in 2006 and was previously released in 2012. Smooth black nubuck is utilized on the upper, accented with contrasting hits of Tour Yellow on the shoe’s molded eyelets, quarter panel and lower tongue. A raised Jumpman logo adorns the heel tab in white, matching a second Jumpman on the woven tongue tag. The mid-top is mounted on a yellow foam midsole, reinforced underfoot by a black herringbone-traction rubber outsole.',
  },
  {
    id: '17cd2a85-99ee-4132-89d1-b85ed050dfe3',
    brand: 'Jordan',
    colorway: 'Black/Orange',
    estimatedMarketValue: 110,
    gender: 'men',
    image: {
      360: [],
      original:
        'https://images.stockx.com/images/Air-Jordan-1-Mid-Fat-Tongue-Black-Orange.jpg?fit=fill&bg=FFFFFF&w=500&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1681237387',
      small:
        'https://images.stockx.com/images/Air-Jordan-1-Mid-Fat-Tongue-Black-Orange.jpg?fit=fill&bg=FFFFFF&w=375&h=375&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1681237387',
      thumbnail:
        'https://images.stockx.com/images/Air-Jordan-1-Mid-Fat-Tongue-Black-Orange.jpg?fit=fill&bg=FFFFFF&w=200&h=200&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1681237387',
    },
    links: {
      stockX: 'https://stockx.com/air-jordan-1-mid-fat-tongue-black-orange',
      goat: '',
      flightClub: '',
      stadiumGoods: '',
    },
    name: 'Jordan 1 Mid Fat Tongue Black Orange',
    releaseDate: '2023-05-13',
    releaseYear: '2023',
    retailPrice: 110,
    silhouette: 'Jordan 1 Mid',
    sku: 'FJ4923-008',
    story: '',
  },
  {
    id: 'e7de9955-ce49-4cbc-a85e-d51af7114fa0',
    brand: 'Jordan',
    colorway: 'Black/Tour Yellow',
    estimatedMarketValue: 179,
    gender: 'child',
    image: {
      360: [],
      original:
        'https://image.goat.com/attachments/product_template_pictures/images/086/847/769/original/1141860_00.png.png',
      small:
        'https://image.goat.com/750/attachments/product_template_pictures/images/086/847/769/original/1141860_00.png.png',
      thumbnail:
        'https://image.goat.com/375/attachments/product_template_pictures/images/086/847/769/original/1141860_00.png.png',
    },
    links: {
      stockX: 'https://stockx.com/air-jordan-4-retro-thunder-2023-gs',
      goat: 'https://goat.com/sneakers/air-jordan-4-retro-gs-thunder-2023-408452-017',
      flightClub:
        'https://flightclub.com/air-jordan-4-retro-gs-thunder-2023-408452-017',
      stadiumGoods: '',
    },
    name: 'Jordan 4 Retro Thunder (2023) (GS)',
    releaseDate: '2023-05-13',
    releaseYear: '2023',
    retailPrice: 150,
    silhouette: 'Air Jordan 4',
    sku: '408452-017',
    story:
      'Made for big kids, the 2023 edition of the Air Jordan 4 Retro GS ‘Thunder’ brings back the coveted two-tone colorway originally released in 2006. The mid-top features a black nubuck upper with contrasting yellow accents. They land on the shoe’s molded eyelets, quarter panel and lower tongue, with the latter two components covered in black netting that reflect the AJ4’s original ’89 specs. Traditional Jumpman branding decorates the molded back tab and woven tongue tag. The sneaker rests on a yellow polyurethane midsole, enhanced with visible Air-sole cushioning and supported by a herringbone-traction rubber outsole.',
  },
  {
    id: 'ed9ed3a9-64f8-442f-8aa1-2de424734c6b',
    brand: 'Jordan',
    colorway: 'Black/Tour Yellow',
    estimatedMarketValue: 385,
    gender: 'men',
    image: {
      360: [],
      original:
        'https://image.goat.com/attachments/product_template_pictures/images/086/042/594/original/1124754_00.png.png',
      small:
        'https://image.goat.com/750/attachments/product_template_pictures/images/086/042/594/original/1124754_00.png.png',
      thumbnail:
        'https://image.goat.com/375/attachments/product_template_pictures/images/086/042/594/original/1124754_00.png.png',
    },
    links: {
      stockX: 'https://stockx.com/air-jordan-4-retro-thunder-2023',
      goat: 'https://goat.com/sneakers/air-jordan-4-retro-thunder-2023-dh6927-017',
      flightClub:
        'https://flightclub.com/air-jordan-4-retro-thunder-2023-dh6927-017',
      stadiumGoods: '',
    },
    name: 'Jordan 4 Retro Thunder (2023)',
    releaseDate: '2023-05-13',
    releaseYear: '2023',
    retailPrice: 210,
    silhouette: 'Air Jordan 4',
    sku: 'DH6927-017',
    story:
      'The 2023 edition of the Air Jordan 4 Retro ‘Thunder’ brings back the coveted colorway originally released in 2006 (and previously reissued in 2012). The upper is draped in smooth black nubuck, contrasted by hits of yellow on the molded eyelets, quarter panel, and lower tongue, with the latter two components covered in black netting. Jumpman branding appears on the Flight tongue tag and molded heel tab. Lightweight cushioning comes courtesy of a yellow polyurethane midsole, enhanced with an exposed Air-sole unit in the heel.',
  },
  {
    id: 'ee27f892-f96d-4030-b408-b5a742ed0b86',
    brand: 'Jordan',
    colorway: 'Black/Tour Yellow',
    estimatedMarketValue: 95,
    gender: 'toddler',
    image: {
      360: [],
      original: '',
      small: '',
      thumbnail: '',
    },
    links: {
      stockX: 'https://stockx.com/air-jordan-4-retro-thunder-2023-td',
      goat: 'https://goat.com/sneakers/air-jordan-4-retro-td-thunder-2023-bq7670-017',
      flightClub:
        'https://flightclub.com/air-jordan-4-retro-td-thunder-2023-bq7670-017',
      stadiumGoods: '',
    },
    name: 'Jordan 4 Retro Thunder (2023) (TD)',
    releaseDate: '2023-05-13',
    releaseYear: '2023',
    retailPrice: 65,
    silhouette: 'Air Jordan 4',
    sku: 'BQ7670-017',
    story:
      'The 2023 edition of the Air Jordan 4 Retro TD ‘Thunder’ revives a coveted 2006 colorway for a new generation of Jordan fans. The upper is crafted from black nubuck with vibrant Tour Yellow accents on the eyelets, lower tongue and quarter panel. The latter two components are covered in black netting, maintaining the classic AJ4 aesthetic of the OG 1989 design. Traditional Jumpman branding adorns the tongue, sockliner and heel tab. A yellow foam midsole cushions hard landings, while a black herringbone traction outsole provides durable traction.',
  },
  {
    id: '38817300-a668-4d32-be9f-adeca51a118d',
    brand: 'Nike',
    colorway: 'Coconut Milk/Celestial Gold/Plum Eclipse/Vivid Orange',
    estimatedMarketValue: 103,
    gender: 'men',
    image: {
      360: [],
      original:
        'https://image.goat.com/attachments/product_template_pictures/images/086/376/947/original/DV0830_101.png.png',
      small:
        'https://image.goat.com/750/attachments/product_template_pictures/images/086/376/947/original/DV0830_101.png.png',
      thumbnail:
        'https://image.goat.com/375/attachments/product_template_pictures/images/086/376/947/original/DV0830_101.png.png',
    },
    links: {
      stockX: '',
      goat: 'https://goat.com/sneakers/dunk-mid-plum-coconut-milk-dv0830-101',
      flightClub:
        'https://flightclub.com/dunk-mid-plum-coconut-milk-dv0830-101',
      stadiumGoods: '',
    },
    name: "Dunk Mid 'Plum Coconut Milk'",
    releaseDate: '2023-05-12',
    releaseYear: '2023',
    retailPrice: 115,
    silhouette: 'Dunk',
    sku: 'DV0830-101',
    story:
      'The Nike Dunk Mid ‘Plum Coconut Milk’ makes over the heritage basketball shoe with subdued earth tones and an updated build. The upper is crafted from breathable canvas, featuring an off-white base with reinforced overlays in Plum Eclipse and Celestial Gold. The signature Swoosh is rendered in Vivid Orange, matching the Nike branding hits that appear on the woven tongue tag and leather heel tab. A durable cupsole anchors the mid-top, fitted with an interior foam wedge and undergirded by a pivot-point rubber outsole.',
  },
  {
    id: 'c330fe0c-5d40-4fb3-afd1-5d3b1d54363d',
    brand: 'Nike',
    colorway: 'Sail/Sail/Black/Black',
    estimatedMarketValue: 113,
    gender: 'men',
    image: {
      360: [],
      original:
        'https://image.goat.com/attachments/product_template_pictures/images/086/678/969/original/DV0830_102.png.png',
      small:
        'https://image.goat.com/750/attachments/product_template_pictures/images/086/678/969/original/DV0830_102.png.png',
      thumbnail:
        'https://image.goat.com/375/attachments/product_template_pictures/images/086/678/969/original/DV0830_102.png.png',
    },
    links: {
      stockX: '',
      goat: 'https://goat.com/sneakers/dunk-mid-panda-dv0830-102',
      flightClub: 'https://flightclub.com/dunk-mid-panda-dv0830-102',
      stadiumGoods: '',
    },
    name: "Dunk Mid 'Panda'",
    releaseDate: '2023-05-12',
    releaseYear: '2023',
    retailPrice: 115,
    silhouette: 'Dunk',
    sku: 'DV0830-102',
    story:
      'The Panda Dunk returns, this time in the form of a mid-top. The Nike Dunk Mid &#39;Black White&#39; is a staple basketball silhouette and this iteration features an all-canvas upper. The familiar two-tone color blocking is highlighted by black overlays and Nike Swoosh. The classic Dunk cupsole provides lightweight responsive cushioning while a rubber outsole rounds out the construction of this ubiquitous colorway.',
  },
  {
    id: 'c1f9835f-0ea2-4b81-96d9-a9e411b6700f',
    brand: 'Jordan',
    colorway: 'White/Tour Yellow/Sail',
    estimatedMarketValue: 248,
    gender: 'women',
    image: {
      360: [],
      original:
        'https://image.goat.com/attachments/product_template_pictures/images/086/339/649/original/1131711_00.png.png',
      small:
        'https://image.goat.com/750/attachments/product_template_pictures/images/086/339/649/original/1131711_00.png.png',
      thumbnail:
        'https://image.goat.com/375/attachments/product_template_pictures/images/086/339/649/original/1131711_00.png.png',
    },
    links: {
      stockX:
        'https://stockx.com/air-jordan-11-retro-low-tour-yellow-snakeskin-w',
      goat: 'https://goat.com/sneakers/wmns-air-jordan-11-low-yellow-snakeskin-ah7860-107',
      flightClub:
        'https://flightclub.com/wmns-air-jordan-11-low-yellow-snakeskin-ah7860-107',
      stadiumGoods: '',
    },
    name: "Jordan 11 Retro Low Tour Yellow Snakeskin (Women's)",
    releaseDate: '2023-05-11',
    releaseYear: '2023',
    retailPrice: 190,
    silhouette: 'Air Jordan 11',
    sku: 'AH7860-107',
    story:
      'The Women’s Air Jordan 11 Low ‘Yellow Snakeskin’ updates the legacy silhouette with vibrant tones and a reptilian flourish. Smooth white leather is deployed on the upper, equipped with tonal webbing eyelets and bolstered with a python print mudguard in a bright yellow finish. The sunny hue is repeated on Jumpman branding hits on the heel and sockliner. The low-top rides on a white Phylon midsole, enhanced with full-length Air cushioning and an exposed carbon fiber sprint plate. Underfoot, a yellow translucent rubber outsole features herringbone traction pods for superior grip.',
  },
  {
    id: 'e3cadfd0-6a2d-4f40-91e0-515b5ba3361f',
    brand: 'Nike',
    colorway: 'White/Sundial/Cobalt Bliss',
    estimatedMarketValue: 90,
    gender: 'youth',
    image: {
      360: [],
      original:
        'https://image.goat.com/attachments/product_template_pictures/images/087/164/589/original/DX2294_100.png.png',
      small:
        'https://image.goat.com/750/attachments/product_template_pictures/images/087/164/589/original/DX2294_100.png.png',
      thumbnail:
        'https://image.goat.com/375/attachments/product_template_pictures/images/087/164/589/original/DX2294_100.png.png',
    },
    links: {
      stockX: '',
      goat: 'https://goat.com/sneakers/ja-1-gs-sundial-dx2294-100',
      flightClub: 'https://flightclub.com/ja-1-gs-sundial-dx2294-100',
      stadiumGoods: '',
    },
    name: "Ja 1 GS 'Sundial'",
    releaseDate: '2023-05-08',
    releaseYear: '2023',
    retailPrice: 90,
    silhouette: 'Ja 1',
    sku: 'DX2294-100',
    story: '',
  },
  {
    id: '1918361a-a4c5-432a-97e2-197347ce5d19',
    brand: 'Jordan',
    colorway: 'White/Cement Grey/Sail/Black',
    estimatedMarketValue: 235,
    gender: 'men',
    image: {
      360: [],
      original:
        'https://image.goat.com/attachments/product_template_pictures/images/084/581/943/original/DR8884_100.png.png',
      small:
        'https://image.goat.com/750/attachments/product_template_pictures/images/084/581/943/original/DR8884_100.png.png',
      thumbnail:
        'https://image.goat.com/375/attachments/product_template_pictures/images/084/581/943/original/DR8884_100.png.png',
    },
    links: {
      stockX: 'https://stockx.com/air-jordan-2-retro-cement-grey',
      goat: 'https://goat.com/sneakers/air-jordan-2-retro-white-cement-dr8884-100',
      flightClub:
        'https://flightclub.com/air-jordan-2-retro-white-cement-dr8884-100',
      stadiumGoods: '',
    },
    name: 'Jordan 2 Retro Cement Grey',
    releaseDate: '2023-05-06',
    releaseYear: '2023',
    retailPrice: 175,
    silhouette: 'Air Jordan 2',
    sku: 'DR8884-100',
    story:
      'The Air Jordan 2 Retro ‘White Cement’ treats Michael Jordan’s sophomore signature shoe to a simple makeover. The white leather upper features a tonal lizard-textured overlay, framed in black and grey piping and accented with a grey molded heel tab. The latter is marked with an embossed Nike wordmark, while a grey Wings logo adorns the tongue. A polyurethane midsole packs encapsulated Air-sole cushioning for a smooth ride. Inside the shoe, the sockliner displays a skyline graphic and the phrase ‘Look, Up in the Air.’',
  },
  {
    id: 'b2f9aa78-4165-4644-84fc-380b2153a43b',
    brand: 'New Balance',
    colorway: 'Blue/Navy-Tan-Cream',
    estimatedMarketValue: 220,
    gender: 'men',
    image: {
      360: [],
      original:
        'https://image.goat.com/attachments/product_template_pictures/images/086/988/023/original/M990AC6.png.png',
      small:
        'https://image.goat.com/750/attachments/product_template_pictures/images/086/988/023/original/M990AC6.png.png',
      thumbnail:
        'https://image.goat.com/375/attachments/product_template_pictures/images/086/988/023/original/M990AC6.png.png',
    },
    links: {
      stockX:
        'https://stockx.com/new-balance-990v6-action-bronson-lapis-lazuli',
      goat: 'https://goat.com/sneakers/action-bronson-x-990v6-made-in-usa-lapis-lazuli-m990ac6',
      flightClub:
        'https://flightclub.com/action-bronson-x-990v6-made-in-usa-lapis-lazuli-m990ac6',
      stadiumGoods: '',
    },
    name: 'New Balance 990v6 Action Bronson Lapis Lazuli',
    releaseDate: '2023-05-06',
    releaseYear: '2023',
    retailPrice: 220,
    silhouette: '990v6',
    sku: 'M990AC6',
    story: '',
  },
  {
    id: '53bbabe9-d2ca-496e-a8e0-324be27b5fc8',
    brand: 'Nike',
    colorway: 'Phantom/Safety Orange-Malachite',
    estimatedMarketValue: 607,
    gender: 'unisex',
    image: {
      360: [],
      original: '',
      small: '',
      thumbnail: '',
    },
    links: {
      stockX: 'https://stockx.com/nike-sb-dunk-low-jarritos',
      goat: 'https://goat.com/sneakers/jarritos-x-dunk-low-sb-fd0860-001',
      flightClub: 'https://flightclub.com/jarritos-x-dunk-low-sb-fd0860-001',
      stadiumGoods: '',
    },
    name: 'Nike SB Dunk Low Jarritos',
    releaseDate: '2023-05-04',
    releaseYear: '2023',
    retailPrice: 130,
    silhouette: 'Dunk',
    sku: 'FD0860-001',
    story:
      'The Jarritos x Nike Dunk Low SB showcases a collaborative design inspired by the popular Mexican soda brand. The upper combines a white leather base with hemp canvas overlays and a green textile Swoosh. The Jarritos logo is embroidered in green and orange on the lateral heel, while dual branding embellishes the woven tongue tag. Mismatched heel tabs are emblazoned with ‘Nike’ and ‘Jarritos’ across the left and right shoe. Anchoring the sneaker is a durable rubber cupsole that pairs white sidewalls with a two-tone green and orange outsole.',
  },
  {
    id: '4504274c-932c-42f1-a3af-d730dcdf017d',
    brand: 'Jordan',
    colorway: 'Black/Black/Lucky Green/White',
    estimatedMarketValue: 94,
    gender: 'men',
    image: {
      360: [],
      original:
        'https://image.goat.com/attachments/product_template_pictures/images/086/045/042/original/1148063_00.png.png',
      small:
        'https://image.goat.com/750/attachments/product_template_pictures/images/086/045/042/original/1148063_00.png.png',
      thumbnail:
        'https://image.goat.com/375/attachments/product_template_pictures/images/086/045/042/original/1148063_00.png.png',
    },
    links: {
      stockX: 'https://stockx.com/air-jordan-1-low-lucky-green',
      goat: 'https://goat.com/sneakers/air-jordan-1-low-se-lucky-green-553558-065',
      flightClub:
        'https://flightclub.com/air-jordan-1-low-se-lucky-green-553558-065',
      stadiumGoods: '',
    },
    name: 'Jordan 1 Low Lucky Green',
    releaseDate: '2023-05-01',
    releaseYear: '2023',
    retailPrice: 110,
    silhouette: 'Air Jordan 1',
    sku: '553558-065',
    story:
      'The Air Jordan 1 Low ‘Black Lucky Green’ dresses the classic silhouette in a simplistic two-tone color scheme. The leather upper features a sleek black finish on the quarter panel and forefoot overlay, contrasted by lush green accents on the toe box, Swoosh, collar, and heel overlay. The latter is branded with a stitched Wings logo, while a Jumpman icon decorates the tongue. The streamlined sneaker rides on a durable cupsole, featuring white sidewalls and an emerald rubber outsole.',
  },
  {
    id: '59f1e38c-31d4-460a-8e05-a549c68c9b18',
    brand: 'Puma',
    colorway: 'Dusky Blue/Black',
    estimatedMarketValue: 130,
    gender: 'men',
    image: {
      360: [],
      original:
        'https://image.goat.com/attachments/product_template_pictures/images/079/507/712/original/390754_02.png.png',
      small:
        'https://image.goat.com/750/attachments/product_template_pictures/images/079/507/712/original/390754_02.png.png',
      thumbnail:
        'https://image.goat.com/375/attachments/product_template_pictures/images/079/507/712/original/390754_02.png.png',
    },
    links: {
      stockX: '',
      goat: 'https://goat.com/sneakers/velophasis-factory-dusky-blue-390754-02',
      flightClub:
        'https://flightclub.com/velophasis-factory-dusky-blue-390754-02',
      stadiumGoods: '',
    },
    name: "Velophasis 'Factory'",
    releaseDate: '2023-05-01',
    releaseYear: '2023',
    retailPrice: 130,
    silhouette: 'Velophasis',
    sku: '390754-02',
    story: '',
  },
  {
    id: 'e049f67e-d267-42bc-9f9c-29885da9ca11',
    brand: 'Jordan',
    colorway: 'Black/Black/Lucky Green/White',
    estimatedMarketValue: 68,
    gender: 'child',
    image: {
      360: [],
      original:
        'https://image.goat.com/attachments/product_template_pictures/images/086/427/949/original/1166067_00.png.png',
      small:
        'https://image.goat.com/750/attachments/product_template_pictures/images/086/427/949/original/1166067_00.png.png',
      thumbnail:
        'https://image.goat.com/375/attachments/product_template_pictures/images/086/427/949/original/1166067_00.png.png',
    },
    links: {
      stockX: 'https://stockx.com/air-jordan-1-low-lucky-green-gs',
      goat: 'https://goat.com/sneakers/air-jordan-1-low-gs-lucky-green-553560-065',
      flightClub:
        'https://flightclub.com/air-jordan-1-low-gs-lucky-green-553560-065',
      stadiumGoods: '',
    },
    name: 'Jordan 1 Low Lucky Green (GS)',
    releaseDate: '2023-05-01',
    releaseYear: '2023',
    retailPrice: 90,
    silhouette: 'Air Jordan 1',
    sku: '553560-065',
    story: '',
  },
  {
    id: '2e8d94b9-37ad-41e3-aca3-f3c1fe30d34a',
    brand: 'Nike',
    colorway: 'Phantom/Sail/Black',
    estimatedMarketValue: 129,
    gender: 'men',
    image: {
      360: [],
      original:
        'https://images.stockx.com/images/Nike-Air-Force-1-Low-07-LV8-Next-Nature-Cork.jpg?fit=fill&bg=FFFFFF&w=500&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1681150142',
      small:
        'https://images.stockx.com/images/Nike-Air-Force-1-Low-07-LV8-Next-Nature-Cork.jpg?fit=fill&bg=FFFFFF&w=375&h=375&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1681150142',
      thumbnail:
        'https://images.stockx.com/images/Nike-Air-Force-1-Low-07-LV8-Next-Nature-Cork.jpg?fit=fill&bg=FFFFFF&w=200&h=200&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1681150142',
    },
    links: {
      stockX: 'https://stockx.com/nike-air-force-1-low-07-lv8-next-nature-cork',
      goat: '',
      flightClub: '',
      stadiumGoods: '',
    },
    name: "Nike Air Force 1 Low '07 LV8 Next Nature Cork",
    releaseDate: '2023-04-29',
    releaseYear: '2023',
    retailPrice: 130,
    silhouette: "Nike Air Force 1 Low '07 LV8",
    sku: 'DV7184-001',
    story: '',
  },
  {
    id: '45b862a7-d095-4ce7-8854-3de5597b9054',
    brand: 'Nike',
    colorway: 'Neutral Olive/Sail/Black',
    estimatedMarketValue: 138,
    gender: 'men',
    image: {
      360: [],
      original:
        'https://images.stockx.com/images/Nike-Air-Force-1-Low-07-LV8-Next-Nature-Neutral-Olive-Sail.jpg?fit=fill&bg=FFFFFF&w=500&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1681150114',
      small:
        'https://images.stockx.com/images/Nike-Air-Force-1-Low-07-LV8-Next-Nature-Neutral-Olive-Sail.jpg?fit=fill&bg=FFFFFF&w=375&h=375&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1681150114',
      thumbnail:
        'https://images.stockx.com/images/Nike-Air-Force-1-Low-07-LV8-Next-Nature-Neutral-Olive-Sail.jpg?fit=fill&bg=FFFFFF&w=200&h=200&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1681150114',
    },
    links: {
      stockX:
        'https://stockx.com/nike-air-force-1-low-07-lv8-next-nature-neutral-olive-sail',
      goat: '',
      flightClub: '',
      stadiumGoods: '',
    },
    name: "Nike Air Force 1 Low '07 LV8 Next Nature Neutral Olive Sail",
    releaseDate: '2023-04-29',
    releaseYear: '2023',
    retailPrice: 130,
    silhouette: "Nike Air Force 1 Low '07 LV8",
    sku: 'FJ1954-200',
    story: '',
  },
  {
    id: '6517c6b1-429c-46b0-9680-c9c405ab7337',
    sku: 'CT8532-148',
    brand: 'Jordan',
    name: 'Jordan 3 Retro Wizards',
    colorway: 'White/True Blue/Metallic Copper/Cement Grey',
    gender: 'men',
    silhouette: 'Air Jordan 3',
    releaseYear: '2023',
    releaseDate: '2023-04-29',
    retailPrice: 210,
    estimatedMarketValue: 199,
    story:
      'The Air Jordan 3 Retro ‘Washington Wizards’ showcases a familiar design based on a PE colorway that Michael Jordan wore during his time in D.C. Featuring color blocking reminiscent of the OG ‘True Blue’ edition from 1988, the classic silhouette makes use of a white tumbled leather upper with grey elephant-print overlays at the toe and heel. Contrasting blue accents appear on the interior lining, molded eyelets, and the raised Jumpman logo that decorates the heel tab. A second Jumpman graces the tongue in copper-colored embroidery, matching the circular eyelets that dot the forefoot. The mid-top is mounted on a two-tone polyurethane midsole, equipped with a visible Air-sole heel unit and supported by a durable grey rubber outsole.',
    image: {
      360: [],
      original:
        'https://image.goat.com/attachments/product_template_pictures/images/085/551/715/original/1038216_00.png.png',
      small:
        'https://image.goat.com/750/attachments/product_template_pictures/images/085/551/715/original/1038216_00.png.png',
      thumbnail:
        'https://image.goat.com/375/attachments/product_template_pictures/images/085/551/715/original/1038216_00.png.png',
    },
    links: {
      stockX: 'https://stockx.com/air-jordan-3-retro-wizards',
      goat: 'https://goat.com/sneakers/air-jordan-3-retro-washington-wizards-ct8532-148',
      flightClub:
        'https://flightclub.com/air-jordan-3-retro-washington-wizards-ct8532-148',
      stadiumGoods: '',
    },
  },
  {
    id: '936945ce-1e5c-44ec-964e-944f9c26326b',
    brand: 'Nike',
    colorway: 'Phantom/Light Bone/Black/Phantom',
    estimatedMarketValue: 88,
    gender: 'men',
    image: {
      360: [],
      original:
        'https://image.goat.com/attachments/product_template_pictures/images/087/164/586/original/DV7231_001.png.png',
      small:
        'https://image.goat.com/750/attachments/product_template_pictures/images/087/164/586/original/DV7231_001.png.png',
      thumbnail:
        'https://image.goat.com/375/attachments/product_template_pictures/images/087/164/586/original/DV7231_001.png.png',
    },
    links: {
      stockX: 'https://stockx.com/nike-blazer-low-77-prm-next-nature-cork',
      goat: 'https://goat.com/sneakers/blazer-low-77-premium-cork-dv7231-001',
      flightClub:
        'https://flightclub.com/blazer-low-77-premium-cork-dv7231-001',
      stadiumGoods: '',
    },
    name: "Nike Blazer Low '77 PRM Next Nature Cork",
    releaseDate: '2023-04-29',
    releaseYear: '2023',
    retailPrice: 95,
    silhouette: 'Blazer',
    sku: 'DV7231-001',
    story: '',
  },
  {
    id: 'f6ec502f-8e19-4fec-85e7-489d4ae359d2',
    brand: 'Nike',
    colorway: 'Earth/Phantom/Black/Earth',
    estimatedMarketValue: 90,
    gender: 'men',
    image: {
      360: [],
      original:
        'https://images.stockx.com/images/Nike-Waffle-One-SE-Earth-Phantom.jpg?fit=fill&bg=FFFFFF&w=500&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1681150012',
      small:
        'https://images.stockx.com/images/Nike-Waffle-One-SE-Earth-Phantom.jpg?fit=fill&bg=FFFFFF&w=375&h=375&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1681150012',
      thumbnail:
        'https://images.stockx.com/images/Nike-Waffle-One-SE-Earth-Phantom.jpg?fit=fill&bg=FFFFFF&w=200&h=200&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1681150012',
    },
    links: {
      stockX: 'https://stockx.com/nike-waffle-one-se-earth-phantom',
      goat: '',
      flightClub: '',
      stadiumGoods: '',
    },
    name: 'Nike Waffle One SE Earth Phantom',
    releaseDate: '2023-04-29',
    releaseYear: '2023',
    retailPrice: 115,
    silhouette: 'Nike Waffle One SE',
    sku: 'DV7192-200',
    story: '',
  },
  {
    id: '0316b8c9-0f00-4261-a9d7-498eafdf3b72',
    brand: 'Nike',
    colorway: 'Court Purple/Action Grape/Space Purple/Summit White/Black',
    estimatedMarketValue: 297,
    gender: 'men',
    image: {
      360: [],
      original:
        'https://image.goat.com/attachments/product_template_pictures/images/084/957/856/original/CZ0931_500.png.png',
      small:
        'https://image.goat.com/750/attachments/product_template_pictures/images/084/957/856/original/CZ0931_500.png.png',
      thumbnail:
        'https://image.goat.com/375/attachments/product_template_pictures/images/084/957/856/original/CZ0931_500.png.png',
    },
    links: {
      stockX: '',
      goat: 'https://goat.com/sneakers/acg-watercat-court-purple-cz0931-500',
      flightClub: '',
      stadiumGoods: '',
    },
    name: "ACG Watercat+ 'Court Purple'",
    releaseDate: '2023-04-28',
    releaseYear: '2023',
    retailPrice: 125,
    silhouette: 'ACG Watercat',
    sku: 'CZ0931-500',
    story: '',
  },
  {
    id: '0e5bfb28-b8f2-469d-938d-e444b74c8ed6',
    brand: 'Salomon',
    colorway: 'Beige/Pink/Brown',
    estimatedMarketValue: 100,
    gender: 'men',
    image: {
      360: [],
      original:
        'https://images.stockx.com/images/Salomon-RX-SLIDE-30-Beams-Bespoke-RX.jpg?fit=fill&bg=FFFFFF&w=500&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1681356495',
      small:
        'https://images.stockx.com/images/Salomon-RX-SLIDE-30-Beams-Bespoke-RX.jpg?fit=fill&bg=FFFFFF&w=375&h=375&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1681356495',
      thumbnail:
        'https://images.stockx.com/images/Salomon-RX-SLIDE-30-Beams-Bespoke-RX.jpg?fit=fill&bg=FFFFFF&w=200&h=200&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1681356495',
    },
    links: {
      stockX: 'https://stockx.com/salomon-rx-slide-30-beams-bespoke-rx',
      goat: '',
      flightClub: '',
      stadiumGoods: '',
    },
    name: 'Salomon RX SLIDE 3.0 Beams Bespoke RX',
    releaseDate: '2023-04-28',
    releaseYear: '2023',
    retailPrice: 100,
    silhouette: 'Salomon RX SLIDE 3.0',
    sku: '11-33-0131-757',
    story: '',
  },
  {
    id: '3e0b9a09-1c4e-4242-bad9-aabe004ce38b',
    brand: 'Nike',
    colorway:
      'Medium Blue/White/University Gold/Picante Red/Metallic Gold/Desert Ochre',
    estimatedMarketValue: 131,
    gender: 'men',
    image: {
      360: [],
      original:
        'https://images.stockx.com/images/Nike-Air-Max-1-Premium-Denim-Leopard.jpg?fit=fill&bg=FFFFFF&w=500&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1681309805',
      small:
        'https://images.stockx.com/images/Nike-Air-Max-1-Premium-Denim-Leopard.jpg?fit=fill&bg=FFFFFF&w=375&h=375&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1681309805',
      thumbnail:
        'https://images.stockx.com/images/Nike-Air-Max-1-Premium-Denim-Leopard.jpg?fit=fill&bg=FFFFFF&w=200&h=200&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1681309805',
    },
    links: {
      stockX: 'https://stockx.com/nike-air-max-1-premium-denim-leopard',
      goat: '',
      flightClub: '',
      stadiumGoods: '',
    },
    name: 'Nike Air Max 1 Premium Denim Leopard',
    releaseDate: '2023-04-28',
    releaseYear: '2023',
    retailPrice: 160,
    silhouette: 'Nike Air Max 1 Premium',
    sku: 'FJ4452-432',
    story: '',
  },
  {
    id: 'cb4e48e5-71f6-444b-b6a0-211a9fdeaff9',
    brand: 'Nike',
    colorway: 'White/Metallic Silver/Summit White',
    estimatedMarketValue: 180,
    gender: 'men',
    image: {
      360: [],
      original:
        'https://images.stockx.com/images/Nike-Air-Max-95-Ultra-Jewel-Triple-White.jpg?fit=fill&bg=FFFFFF&w=500&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1681309728',
      small:
        'https://images.stockx.com/images/Nike-Air-Max-95-Ultra-Jewel-Triple-White.jpg?fit=fill&bg=FFFFFF&w=375&h=375&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1681309728',
      thumbnail:
        'https://images.stockx.com/images/Nike-Air-Max-95-Ultra-Jewel-Triple-White.jpg?fit=fill&bg=FFFFFF&w=200&h=200&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1681309728',
    },
    links: {
      stockX: 'https://stockx.com/nike-air-max-95-jewel-triple-white',
      goat: '',
      flightClub: '',
      stadiumGoods: '',
    },
    name: 'Nike Air Max 95 Jewel Triple White',
    releaseDate: '2023-04-28',
    releaseYear: '2023',
    retailPrice: 180,
    silhouette: 'Nike Air Max 95',
    sku: 'FN7273-100',
    story: '',
  },
  {
    id: '11d2932b-f04c-40d7-9299-fa8df39e80f4',
    brand: 'Nike',
    colorway:
      'Phantom/Action Green/Action Grape/White/Laser Orange/University Blue',
    estimatedMarketValue: 400,
    gender: 'child',
    image: {
      360: [],
      original: '',
      small: '',
      thumbnail: '',
    },
    links: {
      stockX: 'https://stockx.com/nike-ja-1-questions-gs',
      goat: 'https://goat.com/sneakers/ja-1-gs-questions-dx2294-001',
      flightClub: 'https://flightclub.com/ja-1-gs-questions-dx2294-001',
      stadiumGoods: '',
    },
    name: 'Nike Ja 1 Questions (GS)',
    releaseDate: '2023-04-27',
    releaseYear: '2023',
    retailPrice: 90,
    silhouette: 'Ja 1',
    sku: 'DX2294-001',
    story: '',
  },
  {
    id: '25661b6d-55cf-43ce-a86e-dff02f4fe765',
    brand: 'adidas',
    colorway: 'Core White/Core Black/Off White',
    estimatedMarketValue: 95,
    gender: 'women',
    image: {
      360: [],
      original:
        'https://image.goat.com/attachments/product_template_pictures/images/086/136/514/original/ID4205.png.png',
      small:
        'https://image.goat.com/750/attachments/product_template_pictures/images/086/136/514/original/ID4205.png.png',
      thumbnail:
        'https://image.goat.com/375/attachments/product_template_pictures/images/086/136/514/original/ID4205.png.png',
    },
    links: {
      stockX: '',
      goat: 'https://goat.com/sneakers/moomin-x-wmns-nizza-platform-mid-moominvalley-characters-id4205',
      flightClub:
        'https://flightclub.com/moomin-x-wmns-nizza-platform-mid-moominvalley-characters-id4205',
      stadiumGoods: '',
    },
    name: "Moomin x Wmns Nizza Platform Mid 'Moominvalley Characters'",
    releaseDate: '2023-04-27',
    releaseYear: '2023',
    retailPrice: 95,
    silhouette: 'Nizza',
    sku: 'ID4205',
    story: '',
  },
  {
    id: 'c3fa53b9-b63c-493f-b4ce-d8dff9c42ee3',
    brand: 'Nike',
    colorway:
      'Phantom/Action Green/Action Grape/White/Laser Orange/University Blue',
    estimatedMarketValue: 250,
    gender: 'men',
    image: {
      360: [],
      original:
        'https://image.goat.com/attachments/product_template_pictures/images/086/987/937/original/DR8785_001.png.png',
      small:
        'https://image.goat.com/750/attachments/product_template_pictures/images/086/987/937/original/DR8785_001.png.png',
      thumbnail:
        'https://image.goat.com/375/attachments/product_template_pictures/images/086/987/937/original/DR8785_001.png.png',
    },
    links: {
      stockX: 'https://stockx.com/nike-ja-1-questions',
      goat: 'https://goat.com/sneakers/ja-1-questions-dr8785-001',
      flightClub: 'https://flightclub.com/ja-1-questions-dr8785-001',
      stadiumGoods: '',
    },
    name: 'Nike Ja 1 Questions',
    releaseDate: '2023-04-27',
    releaseYear: '2023',
    retailPrice: 110,
    silhouette: 'Ja 1',
    sku: 'DR8785-001',
    story: '',
  },
  {
    id: '22f810ac-6096-4915-a501-d3a0b62f5347',
    brand: 'Jordan',
    colorway: 'Sail/University Red/Black/Medium Olive',
    estimatedMarketValue: 747,
    gender: 'women',
    image: {
      360: [],
      original:
        'https://image.goat.com/attachments/product_template_pictures/images/086/614/364/original/1049526_00.png.png',
      small:
        'https://image.goat.com/750/attachments/product_template_pictures/images/086/614/364/original/1049526_00.png.png',
      thumbnail:
        'https://image.goat.com/375/attachments/product_template_pictures/images/086/614/364/original/1049526_00.png.png',
    },
    links: {
      stockX:
        'https://stockx.com/air-jordan-1-retro-low-og-sp-travis-scott-olive-w',
      goat: 'https://goat.com/sneakers/travis-scott-x-wmns-air-jordan-1-low-og-olive-dz4137-106',
      flightClub:
        'https://flightclub.com/travis-scott-x-wmns-air-jordan-1-low-og-olive-dz4137-106',
      stadiumGoods: '',
    },
    name: "Jordan 1 Retro Low OG SP Travis Scott Olive (Women's)",
    releaseDate: '2023-04-26',
    releaseYear: '2023',
    retailPrice: 150,
    silhouette: 'Air Jordan 1',
    sku: 'DZ4137-106',
    story:
      'The Travis Scott x Women’s Air Jordan 1 Retro Low OG ‘Olive’ presents the chart-topping rapper’s first sneaker collaboration in female sizing. The upper combines a black suede base with off-white leather overlays and olive suede Swooshes, featuring a reverse check on the lateral side and a traditional design on the opposite side. The neutral earth tones are punctuated by bold crimson accents, highlighted by woven Nike Air tongue tags and mismatched Jordan and Cactus Jack branding on each heel tab. Anchoring the low-top is a rubber cupsole that pairs vintage off-white sidewalls with an olive green rubber outsole.',
  },
  {
    id: 'cc88ae64-4aca-4fb8-9088-6aa51a1e3bb6',
    brand: 'Jordan',
    colorway: 'Sail/University Red/Black/Medium Olive',
    estimatedMarketValue: 225,
    gender: 'preschool',
    image: {
      360: [],
      original:
        'https://image.goat.com/attachments/product_template_pictures/images/084/036/844/original/DZ5909_106.png.png',
      small:
        'https://image.goat.com/750/attachments/product_template_pictures/images/084/036/844/original/DZ5909_106.png.png',
      thumbnail:
        'https://image.goat.com/375/attachments/product_template_pictures/images/084/036/844/original/DZ5909_106.png.png',
    },
    links: {
      stockX:
        'https://stockx.com/air-jordan-1-retro-low-og-sp-travis-scott-olive-ps',
      goat: 'https://goat.com/sneakers/travis-scott-x-air-jordan-1-low-og-ps-olive-dz5909-106',
      flightClub:
        'https://flightclub.com/travis-scott-x-air-jordan-1-low-og-ps-olive-dz5909-106',
      stadiumGoods: '',
    },
    name: 'Jordan 1 Retro Low OG SP Travis Scott Olive (PS)',
    releaseDate: '2023-04-26',
    releaseYear: '2023',
    retailPrice: 60,
    silhouette: 'Air Jordan 1',
    sku: 'DZ5909-106',
    story:
      'Made for little kids, the Travis Scott x Air Jordan 1 Low OG PS ‘Olive’ pairs neutral tones with the Houston rapper’s signature flourishes. Chief among them is a cropped reverse Swoosh on the lateral side, rendered in olive green and designed to stand out against a two-tone backdrop in black suede and off-white leather. Scarlet accents land on woven Nike tongue tags, as well as back tabs marked with mismatched Cactus Jack and Jordan Wings branding. Underpinning the sneaker is a durable rubber cupsole built with aged sidewalls and an olive green outsole.',
  },
  {
    id: 'f10d080e-4780-4377-8856-6ac7dd928092',
    brand: 'Jordan',
    colorway: 'Sail/University Red/Black/Medium Olive',
    estimatedMarketValue: 237,
    gender: 'toddler',
    image: {
      360: [],
      original:
        'https://image.goat.com/attachments/product_template_pictures/images/084/369/070/original/1049529_00.png.png',
      small:
        'https://image.goat.com/750/attachments/product_template_pictures/images/084/369/070/original/1049529_00.png.png',
      thumbnail:
        'https://image.goat.com/375/attachments/product_template_pictures/images/084/369/070/original/1049529_00.png.png',
    },
    links: {
      stockX:
        'https://stockx.com/air-jordan-1-retro-low-og-sp-travis-scott-olive-td',
      goat: 'https://goat.com/sneakers/travis-scott-x-air-jordan-1-low-og-td-olive-dz5908-106',
      flightClub:
        'https://flightclub.com/travis-scott-x-air-jordan-1-low-og-td-olive-dz5908-106',
      stadiumGoods: '',
    },
    name: 'Jordan 1 Retro Low OG SP Travis Scott Olive (TD)',
    releaseDate: '2023-04-26',
    releaseYear: '2023',
    retailPrice: 50,
    silhouette: 'Air Jordan 1',
    sku: 'DZ5908-106',
    story:
      'The Travis Scott x Air Jordan 1 Low OG TD ‘Olive’ delivers a scaled-down version of the foundational silhouette, accented with custom branding elements that have become synonymous with the Houston rapper. The low-top makes use of a black suede upper with off-white leather overlays and a reverse olive green Swoosh on the lateral side. Contrasting hits of crimson appear on woven Nike tongue tags and mismatched heel tabs marked with Cactus Jack and Jordan Wings branding. A vintage cream-colored finish is applied to the midsole, supported underfoot by an olive rubber outsole.',
  },
  {
    id: '2e01e5a0-4fbc-4e5b-a652-22553899813a',
    brand: 'Reebok',
    colorway: 'Footwear White/Digital Blue/Core Black',
    estimatedMarketValue: 100,
    gender: 'men',
    image: {
      360: [],
      original:
        'https://image.goat.com/attachments/product_template_pictures/images/087/204/379/original/GZ9586.png.png',
      small:
        'https://image.goat.com/750/attachments/product_template_pictures/images/087/204/379/original/GZ9586.png.png',
      thumbnail:
        'https://image.goat.com/375/attachments/product_template_pictures/images/087/204/379/original/GZ9586.png.png',
    },
    links: {
      stockX: '',
      goat: 'https://goat.com/sneakers/anuel-aa-x-classic-leather-1983-vintage-caribbean-sky-gz9586',
      flightClub:
        'https://flightclub.com/anuel-aa-x-classic-leather-1983-vintage-caribbean-sky-gz9586',
      stadiumGoods: '',
    },
    name: "Anuel AA x Classic Leather 1983 Vintage 'Caribbean Sky'",
    releaseDate: '2023-04-25',
    releaseYear: '2023',
    retailPrice: 100,
    silhouette: 'Reebok Classic',
    sku: 'GZ9586',
    story: '',
  },
  {
    id: '87d39422-9937-42b0-aab1-b908aaa87bc9',
    brand: 'Reebok',
    colorway: 'Footwear White/Core Black/Digital Blue',
    estimatedMarketValue: 170,
    gender: 'men',
    image: {
      360: [],
      original:
        'https://image.goat.com/attachments/product_template_pictures/images/087/204/394/original/IF7394.png.png',
      small:
        'https://image.goat.com/750/attachments/product_template_pictures/images/087/204/394/original/IF7394.png.png',
      thumbnail:
        'https://image.goat.com/375/attachments/product_template_pictures/images/087/204/394/original/IF7394.png.png',
    },
    links: {
      stockX: '',
      goat: 'https://goat.com/sneakers/anuel-aa-x-question-mid-double-toe-caribbean-sky-if7394',
      flightClub:
        'https://flightclub.com/anuel-aa-x-question-mid-double-toe-caribbean-sky-if7394',
      stadiumGoods: '',
    },
    name: "Anuel AA x Question Mid Double Toe 'Caribbean Sky'",
    releaseDate: '2023-04-25',
    releaseYear: '2023',
    retailPrice: 170,
    silhouette: 'Question',
    sku: 'IF7394',
    story: '',
  },
  {
    id: '93151164-b79f-41ee-902f-2588d3abec7c',
    brand: 'Nike',
    colorway: 'Gridiron/Black/Summit White/Bright Mandarin',
    estimatedMarketValue: 170,
    gender: 'men',
    image: {
      360: [],
      original:
        'https://image.goat.com/attachments/product_template_pictures/images/086/958/050/original/DV7903_001.png.png',
      small:
        'https://image.goat.com/750/attachments/product_template_pictures/images/086/958/050/original/DV7903_001.png.png',
      thumbnail:
        'https://image.goat.com/375/attachments/product_template_pictures/images/086/958/050/original/DV7903_001.png.png',
    },
    links: {
      stockX:
        'https://stockx.com/nike-acg-mountain-fly-2-low-white-bright-mandarin',
      goat: 'https://goat.com/sneakers/acg-mountain-fly-2-low-white-bright-mandarin-dv7903-001',
      flightClub:
        'https://flightclub.com/acg-mountain-fly-2-low-white-bright-mandarin-dv7903-001',
      stadiumGoods: '',
    },
    name: 'Nike ACG Mountain Fly 2 Low White Bright Mandarin',
    releaseDate: '2023-04-25',
    releaseYear: '2023',
    retailPrice: 150,
    silhouette: 'ACG Mountain Fly 2',
    sku: 'DV7903-001',
    story: '',
  },
  {
    id: '13401e83-1c9c-46ee-9f90-78c8e3030cba',
    brand: 'Jordan',
    colorway: 'Black/University Red/Flint Grey/White',
    estimatedMarketValue: 209,
    gender: 'men',
    image: {
      360: [],
      original:
        'https://image.goat.com/attachments/product_template_pictures/images/086/097/180/original/1131712_00.png.png',
      small:
        'https://image.goat.com/750/attachments/product_template_pictures/images/086/097/180/original/1131712_00.png.png',
      thumbnail:
        'https://image.goat.com/375/attachments/product_template_pictures/images/086/097/180/original/1131712_00.png.png',
    },
    links: {
      stockX: 'https://stockx.com/air-jordan-13-retro-black-flint',
      goat: 'https://goat.com/sneakers/air-jordan-13-retro-black-flint-dj5982-060',
      flightClub:
        'https://flightclub.com/air-jordan-13-retro-black-flint-dj5982-060',
      stadiumGoods: '',
    },
    name: 'Jordan 13 Retro Black Flint',
    releaseDate: '2023-04-22',
    releaseYear: '2023',
    retailPrice: 200,
    silhouette: 'Air Jordan 13',
    sku: 'DJ5982-060',
    story:
      'The Air Jordan 13 Retro ‘Black Flint’ dresses the legacy model in OG-inspired color blocking reminiscent of the ‘Flint’ colorway from 1998. Black mesh overlays dominate the upper, featuring a white leather toe box with synthetic grey suede along the midfoot and collar. A crimson Jumpman decorates the white leather tongue, while the 13’s holographic ‘cat eye’ graces the lateral ankle. Anchoring the sneaker is a panther paw outsole, fitted with white herringbone traction pods and an exposed carbon fiber shank plate.',
  },
  {
    id: '1999e3e9-8da8-445e-a7eb-937fedd57e17',
    brand: 'Jordan',
    colorway: 'Atmosphere/White/Muslin/Sail',
    estimatedMarketValue: 194,
    gender: 'women',
    image: {
      360: [],
      original:
        'https://image.goat.com/attachments/product_template_pictures/images/086/133/898/original/1124738_00.png.png',
      small:
        'https://image.goat.com/750/attachments/product_template_pictures/images/086/133/898/original/1124738_00.png.png',
      thumbnail:
        'https://image.goat.com/375/attachments/product_template_pictures/images/086/133/898/original/1124738_00.png.png',
    },
    links: {
      stockX: 'https://stockx.com/air-jordan-1-retro-high-og-atmosphere-pink-w',
      goat: 'https://goat.com/sneakers/wmns-air-jordan-1-retro-high-og-washed-pink-fd2596-600',
      flightClub:
        'https://flightclub.com/wmns-air-jordan-1-retro-high-og-washed-pink-fd2596-600',
      stadiumGoods: '',
    },
    name: "Jordan 1 Retro High OG Washed Pink (Women's)",
    releaseDate: '2023-04-22',
    releaseYear: '2023',
    retailPrice: 180,
    silhouette: 'Air Jordan 1',
    sku: 'FD2596-600',
    story:
      'The Women’s Air Jordan 1 Retro High OG ‘Washed Pink’ delivers a pastel colorway of the foundational silhouette. The high-top dons a white leather upper with soft suede overlays in a muted pink hue. An aged pre-yellowed finish is applied to the midsole and breathable nylon tongue, the latter accented with a woven Nike tag. Additional branding elements include a pink suede Swoosh and an off-white Wings logo stamped on the lateral ankle. Underfoot, a pink rubber outsole features a traction pattern originally designed for pivoting on the hardwood.',
  },
  {
    id: '21ae9f5e-2f6f-46d7-ab99-cd1608fcfb5a',
    brand: 'Reebok',
    colorway: 'Core Black/Energy Blue/Solar Lime',
    estimatedMarketValue: 180,
    gender: 'men',
    image: {
      360: [],
      original:
        'https://image.goat.com/attachments/product_template_pictures/images/087/123/747/original/H06491.png.png',
      small:
        'https://image.goat.com/750/attachments/product_template_pictures/images/087/123/747/original/H06491.png.png',
      thumbnail:
        'https://image.goat.com/375/attachments/product_template_pictures/images/087/123/747/original/H06491.png.png',
    },
    links: {
      stockX: 'https://stockx.com/reebok-shaq-victory-pump-pump-universe',
      goat: 'https://goat.com/sneakers/shaq-victory-pump-pump-universe-h06491',
      flightClub:
        'https://flightclub.com/shaq-victory-pump-pump-universe-h06491',
      stadiumGoods: '',
    },
    name: 'Reebok Shaq Victory Pump Pump Universe',
    releaseDate: '2023-04-22',
    releaseYear: '2023',
    retailPrice: 180,
    silhouette: 'Shaq Victory Pump',
    sku: 'H06491',
    story:
      'The Reebok Shaq Victory Pump ‘Pump Universe’ delivers a sneaker mashup that merges elements from Shaquille O’Neal’s first signature model with the Court Victory Pump, the performance tennis shoe popularized by Michael Chang in the early ‘90s. Tumbled black leather is utilized on the upper, contrasted by green mesh inserts and molded eyestays in a vibrant blue finish. ‘SHAQ’ is emblazoned across the heel in block lettering, while ‘Tennis’ and ‘Reebok’ are embroidered on the tongue. The latter is equipped with a rubber button that activates the sneaker’s retro Pump technology. Green speckling enlivens the black foam midsole, supported underfoot by a herringbone-traction rubber outsole.',
  },
  {
    id: '293165aa-c5d8-481e-9f29-47301a70c5c9',
    brand: 'Jordan',
    colorway: 'Black/University Red/Flint Grey/White',
    estimatedMarketValue: 102,
    gender: 'infant',
    image: {
      360: [],
      original:
        'https://image.goat.com/attachments/product_template_pictures/images/087/164/554/original/414581_060.png.png',
      small:
        'https://image.goat.com/750/attachments/product_template_pictures/images/087/164/554/original/414581_060.png.png',
      thumbnail:
        'https://image.goat.com/375/attachments/product_template_pictures/images/087/164/554/original/414581_060.png.png',
    },
    links: {
      stockX: '',
      goat: 'https://goat.com/sneakers/air-jordan-13-retro-td-black-flint-414581-060',
      flightClub:
        'https://flightclub.com/air-jordan-13-retro-td-black-flint-414581-060',
      stadiumGoods: '',
    },
    name: "Air Jordan 13 Retro TD 'Black Flint'",
    releaseDate: '2023-04-22',
    releaseYear: '2023',
    retailPrice: 60,
    silhouette: 'Air Jordan 13',
    sku: '414581-060',
    story:
      'Celebrating the legacy silhouette’s 25th anniversary, the air Jordan 13 Retro TD ‘Black Flint’ delivers a neutral colorway scaled down for little feet. Black mesh overlays dominate the upper, featuring a white tumbled leather base with grey synthetic suede paneling throughout the midfoot and heel. A green-tinged hologram is embedded in the lateral collar, while crimson Jumpman branding decorates the tongue. The sneaker sits atop a cushy foam midsole, reinforced underfoot by a herringbone-traction rubber outsole.',
  },
  {
    id: '3e52def8-fea3-4424-9447-ade1b2158d85',
    brand: 'Jordan',
    colorway: 'Black/University Red/Flint Grey/White',
    estimatedMarketValue: 121,
    gender: 'youth',
    image: {
      360: [],
      original:
        'https://image.goat.com/attachments/product_template_pictures/images/087/164/553/original/414575_060.png.png',
      small:
        'https://image.goat.com/750/attachments/product_template_pictures/images/087/164/553/original/414575_060.png.png',
      thumbnail:
        'https://image.goat.com/375/attachments/product_template_pictures/images/087/164/553/original/414575_060.png.png',
    },
    links: {
      stockX: '',
      goat: 'https://goat.com/sneakers/air-jordan-13-retro-ps-black-flint-414575-060',
      flightClub:
        'https://flightclub.com/air-jordan-13-retro-ps-black-flint-414575-060',
      stadiumGoods: '',
    },
    name: "Air Jordan 13 Retro PS 'Black Flint'",
    releaseDate: '2023-04-22',
    releaseYear: '2023',
    retailPrice: 80,
    silhouette: 'Air Jordan 13',
    sku: '414575-060',
    story:
      'Built for little kids, the Air Jordan 13 Retro PS ‘Black Flint’ presents a neutral colorway of the legacy silhouette on the occasion of its 25th anniversary. White tumbled leather is utilized on the upper, contrasted by grey synthetic suede paneling and a pair of dimpled black mesh overlays. The 13’s holographic ‘cat eye’ decorates the lateral collar, while a crimson Jumpman on the tongue delivers a contrasting pop of color. Underpinning the sneaker is a unique panther paw outsole, featuring herringbone traction pods for exceptional grip.',
  },
  {
    id: '59634062-a33e-4649-9627-e02d106bc224',
    brand: 'Saucony',
    colorway: 'Burgundy',
    estimatedMarketValue: 237,
    gender: 'men',
    image: {
      360: [],
      original:
        'https://image.goat.com/attachments/product_template_pictures/images/084/833/189/original/S70747_2.png.png',
      small:
        'https://image.goat.com/750/attachments/product_template_pictures/images/084/833/189/original/S70747_2.png.png',
      thumbnail:
        'https://image.goat.com/375/attachments/product_template_pictures/images/084/833/189/original/S70747_2.png.png',
    },
    links: {
      stockX: '',
      goat: 'https://goat.com/sneakers/shadow-6000-mushroom-s70747-2',
      flightClub: 'https://flightclub.com/shadow-6000-mushroom-s70747-2',
      stadiumGoods: '',
    },
    name: "Shadow 6000 'Mushroom'",
    releaseDate: '2023-04-22',
    releaseYear: '2023',
    retailPrice: 130,
    silhouette: 'Shadow 6000',
    sku: 'S70747-2',
    story: '',
  },
  {
    id: '5cfcc6fc-380c-4a05-83d5-dd697905dd7c',
    brand: 'Nike',
    colorway: 'Neutral Olive/Neutral Olive/Sail',
    estimatedMarketValue: 106,
    gender: 'women',
    image: {
      360: [],
      original:
        'https://image.goat.com/attachments/product_template_pictures/images/087/219/916/original/1177815_00.png.png',
      small:
        'https://image.goat.com/750/attachments/product_template_pictures/images/087/219/916/original/1177815_00.png.png',
      thumbnail:
        'https://image.goat.com/375/attachments/product_template_pictures/images/087/219/916/original/1177815_00.png.png',
    },
    links: {
      stockX: '',
      goat: 'https://goat.com/sneakers/wmns-dunk-low-premium-neutral-olive-dv7415-200',
      flightClub:
        'https://flightclub.com/wmns-dunk-low-premium-neutral-olive-dv7415-200',
      stadiumGoods: '',
    },
    name: "Wmns Dunk Low Premium 'Neutral Olive'",
    releaseDate: '2023-04-22',
    releaseYear: '2023',
    retailPrice: 120,
    silhouette: 'Dunk',
    sku: 'DV7415-200',
    story:
      'The Nike Women’s Dunk Low Premium ‘Neutral Olive’ merges a subdued one-note finish with an elevated build. A pale green hue permeates the leather upper, equipped with a perforated toe box for improved breathability and a low-cut padded collar for a comfortable fit. Standard Nike branding lands on the leather tongue tag, sockliner and back tab. The low-profile silhouette rests on a stark white midsole, supported underfoot by a durable green rubber outsole.',
  },
  {
    id: '63203b8d-b1f4-495e-897d-0fd5ca4b83d9',
    brand: 'Jordan',
    colorway: 'Atmosphere/White/Muslin/Sail',
    estimatedMarketValue: 105,
    gender: 'youth',
    image: {
      360: [],
      original:
        'https://image.goat.com/attachments/product_template_pictures/images/086/870/529/original/FD2597_600.png.png',
      small:
        'https://image.goat.com/750/attachments/product_template_pictures/images/086/870/529/original/FD2597_600.png.png',
      thumbnail:
        'https://image.goat.com/375/attachments/product_template_pictures/images/086/870/529/original/FD2597_600.png.png',
    },
    links: {
      stockX: '',
      goat: 'https://goat.com/sneakers/air-jordan-1-retro-high-og-ps-washed-pink-fd2597-600',
      flightClub:
        'https://flightclub.com/air-jordan-1-retro-high-og-ps-washed-pink-fd2597-600',
      stadiumGoods: '',
    },
    name: "Air Jordan 1 Retro High OG PS 'Washed Pink'",
    releaseDate: '2023-04-22',
    releaseYear: '2023',
    retailPrice: 85,
    silhouette: 'Air Jordan 1',
    sku: 'FD2597-600',
    story:
      'Offered in little kid sizing, the Air Jordan 1 Retro High OG PS ‘Washed Pink’ brings together pastel accents and a worn aesthetic. The high-top sports a white leather upper with suede overlays in a faded pink finish. A woven Nike tag embellishes the breathable nylon tongue, while the lateral ankle is marked with the iconic Wings logo. The sneaker is mounted on traditional cupsole tooling, highlighted by pre-yellowed sidewalls and a durable pink rubber outsole.',
  },
  {
    id: '6c017e3d-1206-42cc-bb5c-34d84977981a',
    brand: 'Jordan',
    colorway: 'Black/University Red/Flint Grey/White',
    estimatedMarketValue: 182,
    gender: 'youth',
    image: {
      360: [],
      original:
        'https://image.goat.com/attachments/product_template_pictures/images/087/219/969/original/1159215_00.png.png',
      small:
        'https://image.goat.com/750/attachments/product_template_pictures/images/087/219/969/original/1159215_00.png.png',
      thumbnail:
        'https://image.goat.com/375/attachments/product_template_pictures/images/087/219/969/original/1159215_00.png.png',
    },
    links: {
      stockX: '',
      goat: 'https://goat.com/sneakers/air-jordan-13-retro-gs-black-flint-884129-060',
      flightClub:
        'https://flightclub.com/air-jordan-13-retro-gs-black-flint-884129-060',
      stadiumGoods: '',
    },
    name: "Air Jordan 13 Retro GS 'Black Flint'",
    releaseDate: '2023-04-22',
    releaseYear: '2023',
    retailPrice: 150,
    silhouette: 'Air Jordan 13',
    sku: '884129-060',
    story:
      'Made for big kids, the Air Jordan 13 Retro GS ‘Black Flint’ celebrates the 25th anniversary of the classic silhouette with a neutral color scheme inspired by the OG ‘Flint’ release from 1998. The upper features black 3M mesh overlays, contrasted by a white tumbled leather base and grey synthetic suede paneling throughout the midfoot and heel. A crimson Jumpman is embroidered on the tongue, while the signature holographic ‘cat eye’ adorns the lateral collar. Lightweight cushioning arrives via a Phylon midsole, wrapped in grey synthetic suede and supported by a panther paw outsole.',
  },
  {
    id: '74dc11ed-9e05-471b-9840-2fcccc8b3dd2',
    brand: 'Nike',
    colorway: 'Soft Pink/White',
    estimatedMarketValue: 133,
    gender: 'women',
    image: {
      360: [],
      original:
        'https://image.goat.com/attachments/product_template_pictures/images/086/958/049/original/DV7415_600.png.png',
      small:
        'https://image.goat.com/750/attachments/product_template_pictures/images/086/958/049/original/DV7415_600.png.png',
      thumbnail:
        'https://image.goat.com/375/attachments/product_template_pictures/images/086/958/049/original/DV7415_600.png.png',
    },
    links: {
      stockX: '',
      goat: 'https://goat.com/sneakers/wmns-dunk-low-premium-soft-pink-dv7415-600',
      flightClub:
        'https://flightclub.com/wmns-dunk-low-premium-soft-pink-dv7415-600',
      stadiumGoods: '',
    },
    name: "Wmns Dunk Low Premium 'Soft Pink'",
    releaseDate: '2023-04-22',
    releaseYear: '2023',
    retailPrice: 120,
    silhouette: 'Dunk',
    sku: 'DV7415-600',
    story:
      'The Nike Women’s Dunk Low Premium ‘Pink Oxford’ brings a subtle monochromatic finish to the performance basketball shoe turned street-ready silhouette. A diluted shade of pink is applied to the leather upper, featuring tonal stitch detailing and a perforated toe box. A leather Nike tag decorates the tongue, while a Nike wordmark is debossed on the heel tab. Underpinning the sneaker is a sturdy cupsole, built with crisp white sidewalls, an interior foam wedge and a pink rubber outsole.',
  },
  {
    id: 'de30f3bd-2a75-4808-b0ac-93696b47ecba',
    brand: 'Jordan',
    colorway: 'Atmosphere/White/Muslin/Sail',
    estimatedMarketValue: 109,
    gender: 'infant',
    image: {
      360: [],
      original:
        'https://image.goat.com/attachments/product_template_pictures/images/086/870/530/original/FD2598_600.png.png',
      small:
        'https://image.goat.com/750/attachments/product_template_pictures/images/086/870/530/original/FD2598_600.png.png',
      thumbnail:
        'https://image.goat.com/375/attachments/product_template_pictures/images/086/870/530/original/FD2598_600.png.png',
    },
    links: {
      stockX: '',
      goat: 'https://goat.com/sneakers/air-jordan-1-retro-high-og-td-washed-pink-fd2598-600',
      flightClub:
        'https://flightclub.com/air-jordan-1-retro-high-og-td-washed-pink-fd2598-600',
      stadiumGoods: '',
    },
    name: "Air Jordan 1 Retro High OG TD 'Washed Pink'",
    releaseDate: '2023-04-22',
    releaseYear: '2023',
    retailPrice: 70,
    silhouette: 'Air Jordan 1',
    sku: 'FD2598-600',
    story:
      'Scaled down for tiny feet, the Air Jordan 1 Retro High OG TD ‘Washed Pink’ brings an aged aesthetic to a pastel colorway of the timeless silhouette. The upper combines a white leather base with faded pink suede overlays and a color-matched Swoosh. Traditional branding elements include a woven Nike tongue tag and a Wings logo stamped on the lateral collar flap. Anchoring the sneaker is a pre-yellowed vintage midsole, supported underfoot by a soft pink rubber outsole.',
  },
  {
    id: 'edac1cd5-e5b5-4646-9279-1b70fc6ebe97',
    brand: 'Reebok',
    colorway: 'Chalk/Core Black/Pump Orange',
    estimatedMarketValue: 134,
    gender: 'men',
    image: {
      360: [],
      original:
        'https://image.goat.com/attachments/product_template_pictures/images/087/123/745/original/H06490.png.png',
      small:
        'https://image.goat.com/750/attachments/product_template_pictures/images/087/123/745/original/H06490.png.png',
      thumbnail:
        'https://image.goat.com/375/attachments/product_template_pictures/images/087/123/745/original/H06490.png.png',
    },
    links: {
      stockX: 'https://stockx.com/reebok-question-pump-pump-universe',
      goat: 'https://goat.com/sneakers/question-pump-pump-universe-h06490',
      flightClub: 'https://flightclub.com/question-pump-pump-universe-h06490',
      stadiumGoods: '',
    },
    name: 'Reebok Question Pump Pump Universe',
    releaseDate: '2023-04-22',
    releaseYear: '2023',
    retailPrice: 180,
    silhouette: 'Question',
    sku: 'H06490',
    story:
      'The Reebok Question Pump ‘Pump Universe’ presents a hybrid silhouette that blends elements from Allen Iverson’s debut signature shoe with the Pump Omni Zone 2. The upper features white leather construction with airy mesh quarter panels, a TPU cage in black and orange, and a suede mudguard in a pale grey finish. Reebok’s iconic Pump button can be found atop the exposed-foam tongue, while the heel tab displays a modified Question logo that incorporates the silhouette of Dee Brown executing his infamous no-look dunk from 1991. Lifted from the Reebok Question, the distinctive midsole features visible Hexalite cushioning within and a translucent rubber outsole underfoot.',
  },
  {
    id: '333d8e1a-5725-4747-bf9b-085f5f0f2a5b',
    brand: 'Nike',
    colorway: 'Dark Russet/Peach Cream/Pink Oxford/Gum Light Brown',
    estimatedMarketValue: 165,
    gender: 'men',
    image: {
      360: [],
      original:
        'https://image.goat.com/attachments/product_template_pictures/images/087/204/367/original/FQ1099_200.png.png',
      small:
        'https://image.goat.com/750/attachments/product_template_pictures/images/087/204/367/original/FQ1099_200.png.png',
      thumbnail:
        'https://image.goat.com/375/attachments/product_template_pictures/images/087/204/367/original/FQ1099_200.png.png',
    },
    links: {
      stockX: '',
      goat: 'https://goat.com/sneakers/air-humara-ripstop-fq1099-200',
      flightClub: 'https://flightclub.com/air-humara-ripstop-fq1099-200',
      stadiumGoods: '',
    },
    name: "Future Movement x Air Humara 'Dark Russet'",
    releaseDate: '2023-04-21',
    releaseYear: '2023',
    retailPrice: 165,
    silhouette: 'Air Humara',
    sku: 'FQ1099-200',
    story: '',
  },
  {
    id: '4e68dbaa-1ad6-4cb8-9935-931e86ff2592',
    brand: 'Nike',
    colorway: 'White/Team Red/Coconut Milk',
    estimatedMarketValue: 112,
    gender: 'women',
    image: {
      360: [],
      original:
        'https://image.goat.com/attachments/product_template_pictures/images/086/697/002/original/1124740_00.png.png',
      small:
        'https://image.goat.com/750/attachments/product_template_pictures/images/086/697/002/original/1124740_00.png.png',
      thumbnail:
        'https://image.goat.com/375/attachments/product_template_pictures/images/086/697/002/original/1124740_00.png.png',
    },
    links: {
      stockX: '',
      goat: 'https://goat.com/sneakers/wmns-dunk-low-premium-team-red-fj4555-100',
      flightClub:
        'https://flightclub.com/wmns-dunk-low-premium-team-red-fj4555-100',
      stadiumGoods: '',
    },
    name: "Wmns Dunk Low Premium 'Vintage Red'",
    releaseDate: '2023-04-21',
    releaseYear: '2023',
    retailPrice: 120,
    silhouette: 'Dunk',
    sku: 'FJ4555-100',
    story:
      'The Nike Women’s Dunk Low Premium ‘Vintage Red’ pairs classic two-tone color blocking with an aged aesthetic. The heritage hoops shoe makes use of a smooth leather upper, featuring a stark white base with contrasting overlays in a dark crimson finish. The latter hue is repeated on the signature Swoosh and woven Nike tongue tag. Rendered in Coconut Milk, the midsole is built with stitched sidewall construction and reinforced by a burgundy rubber outsole.',
  },
  {
    id: 'b8f78c7e-1ca6-4a6b-8723-0c72fa9939d1',
    brand: 'Nike',
    colorway: 'Black/Varsity Red/Stealth',
    estimatedMarketValue: 486,
    gender: 'men',
    image: {
      360: [],
      original:
        'https://image.goat.com/attachments/product_template_pictures/images/087/204/343/original/DR5752_016.png.png',
      small:
        'https://image.goat.com/750/attachments/product_template_pictures/images/087/204/343/original/DR5752_016.png.png',
      thumbnail:
        'https://image.goat.com/375/attachments/product_template_pictures/images/087/204/343/original/DR5752_016.png.png',
    },
    links: {
      stockX: '',
      goat: 'https://goat.com/sneakers/tiger-woods-2013-retro-black-2023-dr5752-016',
      flightClub:
        'https://flightclub.com/tiger-woods-2013-retro-black-2023-dr5752-016',
      stadiumGoods: '',
    },
    name: "Tiger Woods 2013 Retro 'Black' 2023",
    releaseDate: '2023-04-21',
    releaseYear: '2023',
    retailPrice: 240,
    silhouette: 'Tiger Woods 2013',
    sku: 'DR5752-016',
    story: '',
  },
  {
    id: '2e52e5ca-7e4e-4093-9805-0a2f8c0850e1',
    brand: 'New Balance',
    colorway: '',
    estimatedMarketValue: 550,
    gender: 'men',
    image: {
      360: [],
      original:
        'https://image.goat.com/attachments/product_template_pictures/images/087/245/253/original/OU576LDN.png.png',
      small:
        'https://image.goat.com/750/attachments/product_template_pictures/images/087/245/253/original/OU576LDN.png.png',
      thumbnail:
        'https://image.goat.com/375/attachments/product_template_pictures/images/087/245/253/original/OU576LDN.png.png',
    },
    links: {
      stockX: '',
      goat: 'https://goat.com/sneakers/run-the-boroughs-x-576-made-in-england-london-marathon-ou576ldn',
      flightClub:
        'https://flightclub.com/run-the-boroughs-x-576-made-in-england-london-marathon-ou576ldn',
      stadiumGoods: '',
    },
    name: "Run The Boroughs x 576 Made in England 'London Marathon'",
    releaseDate: '2023-04-20',
    releaseYear: '2023',
    retailPrice: 0,
    silhouette: '576',
    sku: 'OU576LDN',
    story: '',
  },
  {
    id: '34ccfb68-b61b-41ab-90b1-08234040d298',
    brand: 'New Balance',
    colorway: 'Pale Mauve/Coconut Milk/Whisper White',
    estimatedMarketValue: 230,
    gender: 'men',
    image: {
      360: [],
      original:
        'https://image.goat.com/attachments/product_template_pictures/images/087/164/640/original/OU576PNK.png.png',
      small:
        'https://image.goat.com/750/attachments/product_template_pictures/images/087/164/640/original/OU576PNK.png.png',
      thumbnail:
        'https://image.goat.com/375/attachments/product_template_pictures/images/087/164/640/original/OU576PNK.png.png',
    },
    links: {
      stockX: 'https://stockx.com/new-balance-576-miuk-pale-mauve',
      goat: 'https://goat.com/sneakers/576-made-in-england-pale-mauve-ou576pnk',
      flightClub:
        'https://flightclub.com/576-made-in-england-pale-mauve-ou576pnk',
      stadiumGoods: '',
    },
    name: 'New Balance 576 MiUK Pale Mauve',
    releaseDate: '2023-04-20',
    releaseYear: '2023',
    retailPrice: 230,
    silhouette: '576',
    sku: 'OU576PNK',
    story: '',
  },
  {
    id: '5b5ffa7d-651f-4a59-a368-c41a3267c6fb',
    brand: 'New Balance',
    colorway: 'Monks Robe/Coconut Milk/Whisper White',
    estimatedMarketValue: 230,
    gender: 'men',
    image: {
      360: [],
      original:
        'https://image.goat.com/attachments/product_template_pictures/images/087/164/639/original/OU576BRN.png.png',
      small:
        'https://image.goat.com/750/attachments/product_template_pictures/images/087/164/639/original/OU576BRN.png.png',
      thumbnail:
        'https://image.goat.com/375/attachments/product_template_pictures/images/087/164/639/original/OU576BRN.png.png',
    },
    links: {
      stockX: 'https://stockx.com/new-balance-576-miuk-monks-robe',
      goat: 'https://goat.com/sneakers/576-made-in-england-monks-robe-ou576brn',
      flightClub:
        'https://flightclub.com/576-made-in-england-monks-robe-ou576brn',
      stadiumGoods: '',
    },
    name: 'New Balance 576 MiUK Monks Robe',
    releaseDate: '2023-04-20',
    releaseYear: '2023',
    retailPrice: 230,
    silhouette: '576',
    sku: 'OU576BRN',
    story: '',
  },
  {
    id: 'af4ff7a1-e1bd-49a3-bcbf-19acc2abec49',
    brand: 'Nike',
    colorway: 'Phantom/Bright Cactus/Light Bone/Medium Soft Pink',
    estimatedMarketValue: 218,
    gender: 'men',
    image: {
      360: [],
      original:
        'https://image.goat.com/attachments/product_template_pictures/images/086/678/970/original/DV9087_001.png.png',
      small:
        'https://image.goat.com/750/attachments/product_template_pictures/images/086/678/970/original/DV9087_001.png.png',
      thumbnail:
        'https://image.goat.com/375/attachments/product_template_pictures/images/086/678/970/original/DV9087_001.png.png',
    },
    links: {
      stockX: 'https://stockx.com/nike-cosmic-unity-3-phantom-bright-cactus',
      goat: 'https://goat.com/sneakers/cosmic-unity-3-phantom-bright-cactus-dv9087-001',
      flightClub:
        'https://flightclub.com/cosmic-unity-3-phantom-bright-cactus-dv9087-001',
      stadiumGoods: '',
    },
    name: 'Nike Cosmic Unity 3 Phantom Bright Cactus',
    releaseDate: '2023-04-20',
    releaseYear: '2023',
    retailPrice: 170,
    silhouette: 'Cosmic Unity 3',
    sku: 'DV9087-001',
    story: '',
  },
  {
    id: 'd78c5a1e-811b-4071-84e5-490643e173ab',
    brand: 'Nike',
    colorway: 'Deep Royal Blue/Active Pink/Blue Chill',
    estimatedMarketValue: 235,
    gender: 'men',
    image: {
      360: [],
      original:
        'https://image.goat.com/attachments/product_template_pictures/images/086/427/806/original/1134937_00.png.png',
      small:
        'https://image.goat.com/750/attachments/product_template_pictures/images/086/427/806/original/1134937_00.png.png',
      thumbnail:
        'https://image.goat.com/375/attachments/product_template_pictures/images/086/427/806/original/1134937_00.png.png',
    },
    links: {
      stockX: 'https://stockx.com/nike-sb-dunk-low-run-the-jewels',
      goat: 'https://goat.com/sneakers/run-the-jewels-x-dunk-low-sb-4-20-do9404-400',
      flightClub:
        'https://flightclub.com/run-the-jewels-x-dunk-low-sb-4-20-do9404-400',
      stadiumGoods: '',
    },
    name: 'Nike SB Dunk Low Run The Jewels',
    releaseDate: '2023-04-20',
    releaseYear: '2023',
    retailPrice: 120,
    silhouette: 'Dunk SB',
    sku: 'DO9404-400',
    story:
      'The Run The Jewels x Nike Dunk Low SB ‘4/20’ presents a sneaker collaboration centered around the hip-hop duo composed of Killer Mike and El-P. The low-top sports a suede upper in varying shades of blue, contrasted by a textured nubuck Swoosh in hot pink. Embroidered on the back tab, a Nike wordmark in metallic gold matches the woven Nike SB that decorates the stuffed tongue. The sneaker rides on a semi-translucent rubber cupsole, featuring an all-over ‘Run The Jewels’ print underfoot.',
  },
  {
    id: 'e651d0b5-6000-4969-a89d-c5baf5fb481f',
    brand: 'adidas',
    colorway: '',
    estimatedMarketValue: 179,
    gender: 'men',
    image: {
      360: [],
      original:
        'https://image.goat.com/attachments/product_template_pictures/images/087/204/380/original/H03540.png.png',
      small:
        'https://image.goat.com/750/attachments/product_template_pictures/images/087/204/380/original/H03540.png.png',
      thumbnail:
        'https://image.goat.com/375/attachments/product_template_pictures/images/087/204/380/original/H03540.png.png',
    },
    links: {
      stockX: '',
      goat: 'https://goat.com/sneakers/campus-80s-croptober-h03540',
      flightClub: 'https://flightclub.com/campus-80s-croptober-h03540',
      stadiumGoods: '',
    },
    name: "Campus 80s 'Croptober'",
    releaseDate: '2023-04-20',
    releaseYear: '2023',
    retailPrice: 0,
    silhouette: 'Campus',
    sku: 'H03540',
    story: '',
  },
  {
    id: 'e82ff092-dd26-4a6a-affa-fcb402035e3c',
    brand: 'Nike',
    colorway: 'Active Pink/Black',
    estimatedMarketValue: 195,
    gender: 'men',
    image: {
      360: [],
      original:
        'https://image.goat.com/attachments/product_template_pictures/images/085/551/564/original/1133351_00.png.png',
      small:
        'https://image.goat.com/750/attachments/product_template_pictures/images/085/551/564/original/1133351_00.png.png',
      thumbnail:
        'https://image.goat.com/375/attachments/product_template_pictures/images/085/551/564/original/1133351_00.png.png',
    },
    links: {
      stockX:
        'https://stockx.com/nike-sb-dunk-high-qs-run-the-jewels-active-pink',
      goat: 'https://goat.com/sneakers/run-the-jewels-x-dunk-high-sb-active-pink-dx4356-600',
      flightClub:
        'https://flightclub.com/run-the-jewels-x-dunk-high-sb-active-pink-dx4356-600',
      stadiumGoods: '',
    },
    name: 'Nike SB Dunk High Run The Jewels',
    releaseDate: '2023-04-20',
    releaseYear: '2023',
    retailPrice: 140,
    silhouette: 'Dunk SB',
    sku: 'DX4356-600',
    story:
      'The Run The Jewels x Nike Dunk High SB ‘4/20’ pays tribute to the influential hip-hop duo formed by El-P and Killer Mike. Their dynamic sound is reflected in the shoe’s contrasting colors and textures, highlighted by a black tumbled leather upper with pony-hair overlays in a bold shade of fuchsia. The black signature Swoosh features a sculpted and polished exterior, while lace dubrae shine in metallic gold. Hidden details include a ‘Run The Jewels’ print inscribed on the inside of each collar flap and a stash pocket on the interior tongue. The high-top is mounted on a rubber cupsole that pairs black sidewalls with a fuchsia outsole.',
  },
  {
    id: '5a49aafb-62ef-45f5-934c-82bdf03ca36b',
    brand: 'Nike',
    colorway: 'Gorge Green/Gold Suede/Obsidian',
    estimatedMarketValue: 144,
    gender: 'women',
    image: {
      360: [],
      original:
        'https://images.stockx.com/images/Nike-Air-Force-1-Low-07-LX-Command-Force-Obsidian-Gorge-Green-Womens.jpg?fit=fill&bg=FFFFFF&w=500&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1681309760',
      small:
        'https://images.stockx.com/images/Nike-Air-Force-1-Low-07-LX-Command-Force-Obsidian-Gorge-Green-Womens.jpg?fit=fill&bg=FFFFFF&w=375&h=375&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1681309760',
      thumbnail:
        'https://images.stockx.com/images/Nike-Air-Force-1-Low-07-LX-Command-Force-Obsidian-Gorge-Green-Womens.jpg?fit=fill&bg=FFFFFF&w=200&h=200&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1681309760',
    },
    links: {
      stockX:
        'https://stockx.com/nike-air-force-1-low-07-lx-command-force-obsidian-gorge-green-womens',
      goat: '',
      flightClub: '',
      stadiumGoods: '',
    },
    name: "Nike Air Force 1 Low '07 LX Command Force Obsidian Gorge Green (Women's)",
    releaseDate: '2023-04-19',
    releaseYear: '2023',
    retailPrice: 130,
    silhouette: "Nike Air Force 1 Low '07 LX",
    sku: 'DR0148-300',
    story: '',
  },
  {
    id: '8a23f3fd-9595-4329-a6e6-30a66da02d3d',
    brand: 'Nike',
    colorway: 'Cobalt Bliss/Citron Tint/Hot Punch',
    estimatedMarketValue: 149,
    gender: 'men',
    image: {
      360: [],
      original:
        'https://image.goat.com/attachments/product_template_pictures/images/087/138/601/original/1119640_00.png.png',
      small:
        'https://image.goat.com/750/attachments/product_template_pictures/images/087/138/601/original/1119640_00.png.png',
      thumbnail:
        'https://image.goat.com/375/attachments/product_template_pictures/images/087/138/601/original/1119640_00.png.png',
    },
    links: {
      stockX: 'https://stockx.com/nike-ja-1-day-one',
      goat: 'https://goat.com/sneakers/ja-1-day-one-dr8785-400',
      flightClub: 'https://flightclub.com/ja-1-day-one-dr8785-400',
      stadiumGoods: '',
    },
    name: 'Nike Ja 1 Day One',
    releaseDate: '2023-04-19',
    releaseYear: '2023',
    retailPrice: 110,
    silhouette: 'Ja 1',
    sku: 'DR8785-400',
    story:
      'The Nike Ja 1 ‘Day One’ represents the debut colorway of Ja Morant’s signature shoe. The sleek silhouette sports a ballistic mesh upper in a pastel shade of blue, contrasted by a wraparound TPU Swoosh in a gradient blend of yellow and pink. The airy build is fortified with a tonal synthetic leather on the saddle and mudguard. Ja’s personal logo appears on the woven tongue tag, while an all-over ’12:AM’ print enlivens the back heel. The low-top rides on a yellow Phylon midsole with a raised lateral outrigger and Zoom Air cushioning in the forefoot.',
  },
  {
    id: 'e62c18d7-3e42-4e11-a55f-e811c1d1645c',
    brand: 'Nike',
    colorway: 'Cobalt Bliss/Citron Tint/Hot Punch',
    estimatedMarketValue: 135,
    gender: 'child',
    image: {
      360: [],
      original:
        'https://image.goat.com/attachments/product_template_pictures/images/086/592/259/original/DX2294_400.png.png',
      small:
        'https://image.goat.com/750/attachments/product_template_pictures/images/086/592/259/original/DX2294_400.png.png',
      thumbnail:
        'https://image.goat.com/375/attachments/product_template_pictures/images/086/592/259/original/DX2294_400.png.png',
    },
    links: {
      stockX: 'https://stockx.com/nike-ja-1-day-one-gs',
      goat: 'https://goat.com/sneakers/ja-1-gs-day-one-dx2294-400',
      flightClub: 'https://flightclub.com/ja-1-gs-day-one-dx2294-400',
      stadiumGoods: '',
    },
    name: 'Nike Ja 1 Day One (GS)',
    releaseDate: '2023-04-19',
    releaseYear: '2023',
    retailPrice: 90,
    silhouette: 'Ja 1',
    sku: 'DX2294-400',
    story: '',
  },
]

export const sneakers = products.filter((product) => product.image.small !== '')
