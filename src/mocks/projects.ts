export interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  location: string;
  tagline: string;
  description: string;
  coverImage: string;
  sections: ProjectSection[];
  nextProjectId?: string;
  prevProjectId?: string;
}

export interface ProjectSection {
  type: 'hero' | 'fullbleed' | 'split' | 'quote' | 'specs';
  text?: string;
  subtitle?: string;
  image?: string;
  imagePosition?: 'left' | 'right';
  specs?: { label: string; value: string }[];
}

export const categories = [
  'All',
  'Museum',
  'Exhibition',
  'Cultural',
  'Competition',
  'Research',
  'International',
];

export const projects: Project[] = [
  {
    id: 'erzurum-museum-karaz',
    title: 'Erzurum Museum — KARAZ',
    category: 'Museum',
    year: '2024',
    location: 'Erzurum, Türkiye',
    tagline:
      'The ancient culture of the mountainous Eastern Anatolia, brought to life through immersive exhibition design.',
    description:
      'A permanent exhibition at the Erzurum Museum dedicated to the KARAZ culture — one of the oldest civilizations of the mountainous Eastern Anatolia. The exhibition transforms archaeological research into visceral spatial narratives, guiding visitors through burial traditions, settlement architecture, religious systems, and ceramic artistry of an ancient people.',
    coverImage:
      'https://storage.readdy-site.link/project_files/abe43ce3-969e-47f2-8e3d-62258ef0febd/25af1ec5-3bf2-4516-b7ee-b3f81c73f911_compressed_karaz-1.webp',
    sections: [
      {
        type: 'hero',
        text: 'Where archaeology becomes atmosphere.',
      },
      {
        type: 'fullbleed',
        image:
          'https://storage.readdy-site.link/project_files/abe43ce3-969e-47f2-8e3d-62258ef0febd/9d847976-ff9d-4f3b-b12b-38fb61256bfc_compressed_karaz-5.webp',
        text: 'The museum entrance welcomes visitors with a sweeping panoramic wall — the KARAZ identity emerging from the mountains of Eastern Anatolia, establishing the tone for a journey through millennia.',
      },
      {
        type: 'split',
        imagePosition: 'left',
        image:
          'https://storage.readdy-site.link/project_files/abe43ce3-969e-47f2-8e3d-62258ef0febd/90ff7017-8cc9-42f5-b34b-304c2be2b40d_compressed_karaz-12.webp',
        text: 'A full-scale graphic wall charts the geographic boundaries of the KARAZ civilization — from excavation sites across Anatolia to the broader regional context, connecting local heritage to its deep historical significance. The panel pays tribute to Hamit Zübeyir Koşay and the pioneering excavations that first revealed this culture.',
      },
      {
        type: 'quote',
        text: 'Every artifact tells a story. Every wall becomes a page.',
      },
      {
        type: 'split',
        imagePosition: 'right',
        image:
          'https://storage.readdy-site.link/project_files/abe43ce3-969e-47f2-8e3d-62258ef0febd/7b91a748-61a7-495a-a665-40eff0c05726_compressed_karaz-14.webp',
        text: 'The religious and hearth systems of the KARAZ peoples are rendered through life-size dioramas and authentic reproductions — a kneeling figure before a stone hearth, surrounded by ritual objects and idol sculptures that illuminate ancient beliefs and domestic spiritual practice.',
      },
      {
        type: 'fullbleed',
        image:
          'https://storage.readdy-site.link/project_files/abe43ce3-969e-47f2-8e3d-62258ef0febd/d98df32c-f8d0-4533-a601-f8a58a14f817_compressed_karaz-11.webp',
        text: 'The burial traditions panel presents skeletal remains, ceremonial vessels, and metal adornments arranged against an excavated earth backdrop — including references to the legendary Arslantepe Royal Tomb, one of the most profound windows into the spiritual worldview of the KARAZ peoples.',
      },
      {
        type: 'fullbleed',
        image:
          'https://storage.readdy-site.link/project_files/abe43ce3-969e-47f2-8e3d-62258ef0febd/5824c721-5f9a-4031-9890-45ee757ba1a4_compressed_karaz-15.webp',
        text: 'An architectural plan overlaid on an aerial excavation photograph reveals the sophisticated settlement patterns of the KARAZ civilization — circular structures, defensive layouts, and the earliest known examples of regional urban planning in the highlands.',
      },
      {
        type: 'fullbleed',
        image:
          'https://storage.readdy-site.link/project_files/abe43ce3-969e-47f2-8e3d-62258ef0febd/b834f6c2-9aab-42e3-9a07-2d933d7769dc_compressed_karaz-13.webp',
        text: 'The ceramic tradition panel brings the ancient craft to life — a reconstructed workshop scene shows a craftswoman shaping clay into vessels that carried both function and symbolic meaning, alongside an imposing fired pot adorned with geometric motifs.',
      },
      {
        type: 'fullbleed',
        image:
          'https://storage.readdy-site.link/project_files/abe43ce3-969e-47f2-8e3d-62258ef0febd/4bc922db-2e95-4c92-92bb-d1236aca75dd_compressed_karaz-10.webp',
        text: 'The exhibition weaves together skeletal remains, burial artifacts, and reconstructed narratives to present the burial traditions of the KARAZ peoples — one of the most profound windows into their spiritual worldview.',
      },
      {
        type: 'fullbleed',
        image:
          'https://storage.readdy-site.link/project_files/abe43ce3-969e-47f2-8e3d-62258ef0febd/97628fca-1ef3-44f5-81df-a1887e8d9b0d_compressed_karaz-9.webp',
        text: 'Gallery columns wrapped in excavation textures and display vitrines create a rhythm of discovery — each turn revealing another layer of the KARAZ legacy.',
      },
      {
        type: 'specs',
        specs: [
          { label: 'Area', value: '850 sqm' },
          { label: 'Year', value: '2024' },
          { label: 'Location', value: 'Erzurum, Türkiye' },
          { label: 'Status', value: 'Completed' },
          { label: 'Role', value: 'Exhibition Design & Implementation' },
        ],
      },
    ],
    nextProjectId: 'erzincan-altintepe-oren-yeri',
    prevProjectId: 'nevsehir-hacibektas-muzesi',
  },
  {
    id: 'erzincan-altintepe-oren-yeri',
    title: 'Erzincan Altıntepe Ören Yeri',
    category: 'Museum',
    year: '2024',
    location: 'Erzincan, Türkiye',
    tagline:
      'Yesterday and today of Altıntepe — an Urartian fortress rising from the Erzincan plains.',
    description:
      'A permanent exhibition and site experience at the Altıntepe archaeological site in Erzincan, one of the most significant Urartian settlements in Eastern Anatolia. The project encompasses exhibition design within the on-site museum, alongside wayfinding and interpretation across the ancient fortress, temple, and royal complex — connecting visitors to the layered history of this 3,000-year-old civilization.',
    coverImage:
      'https://storage.readdy-site.link/project_files/abe43ce3-969e-47f2-8e3d-62258ef0febd/7b600b68-a9e1-41d8-acd3-9010a0848fa0_compressed_erzincan-altintepe-dunu-ve-bu-gunu.webp',
    sections: [
      {
        type: 'hero',
        text: 'Where the fortress meets the plain, history speaks in stone.',
      },
      {
        type: 'fullbleed',
        text: 'The Altıntepe fortress rises dramatically from the Erzincan plains — a 3,000-year-old Urartian stronghold that once commanded trade routes between the highlands and Mesopotamia. The aerial perspective reveals the scale of this archaeological treasure: defensive walls, temple foundations, and the remains of a royal palace that tell the story of one of Anatolia\'s most powerful ancient kingdoms.',
      },
      {
        type: 'split',
        imagePosition: 'left',
        text: 'Interpretive signage and wayfinding elements are woven directly into the landscape, allowing visitors to move between the fortress ruins and the on-site museum without breaking the narrative thread. Material choices — weathered corten steel, raw stone — echo the site\'s own geology rather than competing with it.',
      },
      {
        type: 'quote',
        text: 'Every stone is a witness. Every layer is a chapter.',
      },
      {
        type: 'fullbleed',
        text: 'Inside the museum, artifacts recovered from the excavation — bronze fittings, ceremonial vessels, architectural fragments — are displayed in dialogue with large-scale photography of the site itself, so that object and landscape are never seen in isolation.',
      },
      {
        type: 'specs',
        specs: [
          { label: 'Area', value: 'Site + Museum' },
          { label: 'Year', value: '2024' },
          { label: 'Location', value: 'Erzincan, Türkiye' },
          { label: 'Status', value: 'In Progress' },
          { label: 'Role', value: 'Exhibition & Site Design' },
        ],
      },
    ],
    nextProjectId: 'cumhurbaskanligi-15-temmuz-demokrasi-muzesi',
    prevProjectId: 'erzurum-museum-karaz',
  },
  {
    id: 'cumhurbaskanligi-15-temmuz-demokrasi-muzesi',
    title: 'Cumhurbaşkanlığı — 15 Temmuz Demokrasi Müzesi',
    category: 'Museum',
    year: '2024',
    location: 'Ankara, Türkiye',
    tagline:
      'A monumental museum honoring the spirit of a nation\'s resistance on the night of July 15, 2016.',
    description:
      'The Presidential 15 July Democracy Museum stands as a permanent testament to the courage and sacrifice displayed during the attempted coup of 2016. The exhibition design transforms a deeply personal national memory into a solemn, immersive narrative experience — guiding visitors through the events of that night with dignity, historical accuracy, and emotional resonance.',
    coverImage:
      'https://storage.readdy-site.link/project_files/abe43ce3-969e-47f2-8e3d-62258ef0febd/299f5aaf-f719-4c79-a350-cbdd8dc8a1a6_compressed_15-temmuz-milli-mucadele-muzesi.webp',
    sections: [
      {
        type: 'hero',
        text: 'Democracy is defended not in halls of power, but in the hearts of the people.',
      },
      {
        type: 'fullbleed',
        text: 'The museum\'s monumental entrance descends into a contemplative subterranean space — a symbolic journey from daylight into the darkness of that fateful night, and ultimately back into the light of resilience and unity.',
      },
      {
        type: 'split',
        imagePosition: 'right',
        text: 'Personal testimonies — recorded voices of survivors and witnesses — are woven into the route through discreet listening stations, ensuring the museum speaks in the first person as often as it speaks in the historical third.',
      },
      {
        type: 'quote',
        text: 'Memory is the conscience of a nation.',
      },
      {
        type: 'fullbleed',
        text: 'The final gallery opens into a luminous hall of remembrance, where names and images of those who lost their lives are presented with quiet dignity, closing the visitor\'s journey on a note of unity rather than division.',
      },
      {
        type: 'specs',
        specs: [
          { label: 'Area', value: '12,000 sqm' },
          { label: 'Year', value: '2024' },
          { label: 'Location', value: 'Ankara, Türkiye' },
          { label: 'Status', value: 'Completed' },
          { label: 'Role', value: 'Exhibition Design & Implementation' },
        ],
      },
    ],
    nextProjectId: 'istanbul-biennial-pavilion',
    prevProjectId: 'erzincan-altintepe-oren-yeri',
  },
  {
    id: 'istanbul-biennial-pavilion',
    title: 'İstanbul Biennial Pavilion',
    category: 'Exhibition',
    year: '2023',
    location: 'İstanbul, Türkiye',
    tagline: 'A temporary monument to impermanence.',
    description:
      'Designed for the 17th Istanbul Biennial, this temporary pavilion explored the relationship between memory and forgetting. Built to exist for only 90 days, it employed materials that visibly aged — rusting steel, weathering timber, fading textiles — making entropy the primary medium.',
    coverImage: '',
    sections: [
      {
        type: 'hero',
        text: 'Built to disappear. Designed to be remembered.',
      },
      {
        type: 'fullbleed',
        text: 'The pavilion was constructed from COR-TEN steel panels left intentionally untreated. Over the 90-day exhibition period, visitors witnessed the structure physically transform — the same process of aging that affects memory itself.',
      },
      {
        type: 'split',
        imagePosition: 'right',
        text: 'The textile installations — hand-woven by local artisans using fibers dyed with natural pigments — faded progressively under controlled UV exposure. Each visit to the pavilion was a unique encounter with a space that was literally forgetting itself.',
      },
      {
        type: 'quote',
        text: 'Impermanence is not a flaw in the design — it is the design.',
      },
      {
        type: 'fullbleed',
        text: 'Documentation became as important as the installation itself: a photographic archive captured the pavilion\'s decay week by week, transforming the exhibition into a durational artwork that outlived its own physical structure.',
      },
      {
        type: 'specs',
        specs: [
          { label: 'Area', value: '2,800 sqm' },
          { label: 'Year', value: '2023' },
          { label: 'Location', value: 'İstanbul, Türkiye' },
          { label: 'Duration', value: '90 days' },
          { label: 'Status', value: 'Decommissioned' },
          { label: 'Role', value: 'Concept & Design' },
        ],
      },
    ],
    nextProjectId: 'istanbul-ayasofya-muzesi',
    prevProjectId: 'cumhurbaskanligi-15-temmuz-demokrasi-muzesi',
  },
  {
    id: 'istanbul-ayasofya-muzesi',
    title: 'İstanbul Ayasofya Müzesi',
    category: 'Museum',
    year: '2023',
    location: 'İstanbul, Türkiye',
    tagline:
      'One of the most significant monuments in the history of world architecture, standing for over 1,500 years.',
    description:
      'Hagia Sophia, originally built as a cathedral by Emperor Justinian in 537 AD, has served as one of the most important religious and cultural landmarks in world history. With its massive dome, intricate mosaics, and layered history spanning Byzantine, Ottoman, and Republican eras, Ayasofya presents a unique challenge and opportunity for exhibition design — interpreting a space that is itself the primary exhibit.',
    coverImage: '',
    sections: [
      {
        type: 'hero',
        text: 'Where architecture becomes theology, and stone becomes prayer.',
      },
      {
        type: 'fullbleed',
        text: 'The exhibition design approach for Ayasofya respects the monument\'s primary role as a living cultural space. Interpretive elements are woven subtly into the architecture — projected light mapping traces ancient mosaics hidden beneath Ottoman plaster, while discreet audio zones guide visitors through the building\'s three identities: church, mosque, and museum.',
      },
      {
        type: 'split',
        imagePosition: 'left',
        text: 'A discreet network of directional lighting and low-profile audio nodes threads through the nave without altering a single surface — every intervention is designed to be reversible, respecting a monument that has already survived three distinct religious identities.',
      },
      {
        type: 'quote',
        text: 'A building that has witnessed fifteen centuries of human aspiration.',
      },
      {
        type: 'fullbleed',
        text: 'In the upper galleries, a quiet interpretive trail traces the building\'s Byzantine mosaics alongside its Ottoman calligraphic medallions, letting visitors read the same walls as two histories folded into one space.',
      },
      {
        type: 'specs',
        specs: [
          { label: 'Area', value: '7,500 sqm' },
          { label: 'Year', value: '2023' },
          { label: 'Location', value: 'İstanbul, Türkiye' },
          { label: 'Built', value: '537 AD' },
          { label: 'Visitors', value: '3.5M+ annually' },
          { label: 'Role', value: 'Interpretive Design & Wayfinding' },
        ],
      },
    ],
    nextProjectId: 'istanbul-topkapi-sarayi-muzesi',
    prevProjectId: 'istanbul-biennial-pavilion',
  },
  {
    id: 'istanbul-topkapi-sarayi-muzesi',
    title: 'İstanbul Topkapı Sarayı Müzesi',
    category: 'Museum',
    year: '2023',
    location: 'İstanbul, Türkiye',
    tagline:
      'The heart of Ottoman power for four centuries, now one of the world\'s greatest palace-museums.',
    description:
      'Constructed between 1460 and 1478 on the site of the Byzantine acropolis at Sarayburnu, Topkapı Palace served as the administrative, educational, and artistic center of the Ottoman Empire from Fatih Sultan Mehmed to Sultan Abdülmecid. Today it stands as one of the world\'s largest palace-museums, housing imperial collections, sacred relics, and over 300,000 archive documents across approximately 400,000 square meters.',
    coverImage: '',
    sections: [
      {
        type: 'hero',
        text: 'Four centuries of empire, preserved in stone, treasure, and memory.',
      },
      {
        type: 'fullbleed',
        text: 'The exhibition design navigates the palace\'s four courtyards as chapters of imperial life — from the public grandeur of the First Court to the private sanctity of the Fourth. Each courtyard is interpreted through a distinct spatial language: the armory courtyard speaks through materiality, the treasury through light, the harem through silence.',
      },
      {
        type: 'split',
        imagePosition: 'right',
        text: 'Wayfinding across the four courtyards uses a restrained visual language — brass markers set into stone paving, translated into six languages — so that circulation never competes with the palace\'s own architecture for attention.',
      },
      {
        type: 'quote',
        text: 'Every courtyard holds a different world. Every pavilion tells a different story.',
      },
      {
        type: 'fullbleed',
        text: 'The Imperial Treasury required a lighting redesign capable of protecting gemstones and manuscripts from UV exposure while still delivering the theatrical brilliance visitors expect from one of the world\'s richest royal collections.',
      },
      {
        type: 'specs',
        specs: [
          { label: 'Area', value: '400,000 sqm' },
          { label: 'Year', value: '2023' },
          { label: 'Location', value: 'İstanbul, Türkiye' },
          { label: 'Built', value: '1460-1478' },
          { label: 'Visitors', value: '3.5M+ annually' },
          { label: 'Role', value: 'Exhibition Design & Visitor Experience' },
        ],
      },
    ],
    nextProjectId: 'istanbul-topkapi-harem',
    prevProjectId: 'istanbul-ayasofya-muzesi',
  },
  {
    id: 'istanbul-topkapi-harem',
    title: 'İstanbul Topkapı Sarayı — Harem Dairesi',
    category: 'Museum',
    year: '2023',
    location: 'İstanbul, Türkiye',
    tagline:
      'The forbidden and private world of the Ottoman dynasty — 300 rooms, 9 baths, 2 mosques, and countless secrets.',
    description:
      'The Harem Dairesi at Topkapı Palace was the private living quarters of the Ottoman dynasty — the sultan, the valide sultan, concubines, children, and the Black Eunuchs who guarded them. Expanded over four centuries from the 16th to the 19th century, the complex represents one of the most architecturally significant ensembles in Ottoman history. Today it stands as a museum within a museum, requiring a sensitive interpretive approach that balances historical accuracy with the dignity of the lives once lived within its walls.',
    coverImage: '',
    sections: [
      {
        type: 'hero',
        text: 'Behind these walls, an empire kept its most private hours.',
      },
      {
        type: 'fullbleed',
        text: 'The interpretive design approach treats the Harem not as a spectacle of exoticism but as a domestic biography — the private life of an imperial family. Exhibition elements are integrated into the existing architecture: the Valide Sultan\'s chambers are narrated through whispered audio recollections; the Crown Prince\'s rooms through projected correspondence; the baths through the sounds of water and ritual.',
      },
      {
        type: 'split',
        imagePosition: 'left',
        text: 'Sound design plays a central role: faint recordings of running water, distant music, and hushed conversation are layered into specific rooms, evoking the daily rhythms of a household that once numbered in the hundreds.',
      },
      {
        type: 'quote',
        text: 'Every room was a world. Every corridor was a boundary between lives.',
      },
      {
        type: 'fullbleed',
        text: 'Conservation-grade lighting was calibrated room by room to protect fragile İznik tile panels and painted ceilings, proving that historical authenticity and visitor accessibility are not mutually exclusive.',
      },
      {
        type: 'specs',
        specs: [
          { label: 'Rooms', value: '~300' },
          { label: 'Year', value: '2023' },
          { label: 'Location', value: 'İstanbul, Türkiye' },
          { label: 'Period', value: '16th-19th century' },
          { label: 'Visitors', value: '1M+ annually' },
          { label: 'Role', value: 'Interpretive Design & Audio Narrative' },
        ],
      },
    ],
    nextProjectId: 'konya-mevlana-muzesi',
    prevProjectId: 'istanbul-topkapi-sarayi-muzesi',
  },
  {
    id: 'konya-mevlana-muzesi',
    title: 'Konya Mevlana Müzesi',
    category: 'Museum',
    year: '2023',
    location: 'Konya, Türkiye',
    tagline:
      'The spiritual center of the whirling dervishes, where Rumi\'s legacy lives in light, sound, and stone.',
    description:
      'The Mevlana Museum in Konya, housed in the original Mevlevi dervish lodge, is one of Turkey\'s most spiritually significant cultural sites. Built around the tomb of Jalaluddin Rumi (Mevlana), the 13th-century complex includes the iconic Green Dome (Kubbe-i Hadra), the semahane (ceremonial hall), the library, and numerous tombs of Mevlevi elders. As a museum since 1926, it attracts over two million visitors annually who seek connection with Rumi\'s message of love, tolerance, and unity.',
    coverImage: '',
    sections: [
      {
        type: 'hero',
        text: 'Here, the body is a vessel. The soul is the destination.',
      },
      {
        type: 'fullbleed',
        text: 'The exhibition design approach for the Mevlana Museum centers on atmosphere — creating a contemplative journey that mirrors the spiritual ascent of the sema ceremony. The route begins in the outer courtyard with ambient sound design inspired by ney music, progressing through the tombs chamber with diffused lighting that gradually intensifies toward the Green Dome, where Rumi rests beneath a canopy of filtered golden light.',
      },
      {
        type: 'split',
        imagePosition: 'right',
        text: 'A carefully sequenced lighting scheme dims and warms as visitors move deeper into the complex, guiding the body toward the same contemplative stillness the sema ceremony itself is meant to induce.',
      },
      {
        type: 'quote',
        text: 'Come, come, whoever you are — the door is open.',
      },
      {
        type: 'fullbleed',
        text: 'In the library and calligraphy rooms, manuscript reproductions are displayed at a height and angle that invites close, unhurried reading — a deliberate counterpoint to the museum\'s otherwise processional rhythm.',
      },
      {
        type: 'specs',
        specs: [
          { label: 'Area', value: 'Dergah Complex' },
          { label: 'Year', value: '2023' },
          { label: 'Location', value: 'Konya, Türkiye' },
          { label: 'Founded', value: '13th century' },
          { label: 'Visitors', value: '2M+ annually' },
          { label: 'Role', value: 'Atmospheric Design & Soundscape' },
        ],
      },
    ],
    nextProjectId: 'antalya-demre-muzesi',
    prevProjectId: 'istanbul-topkapi-harem',
  },
  {
    id: 'antalya-demre-muzesi',
    title: 'Antalya Demre Müzesi',
    category: 'Museum',
    year: '2023',
    location: 'Antalya, Türkiye',
    tagline:
      'The ancient church of Saint Nicholas — where history, faith, and the legend of Santa Claus converge.',
    description:
      'The Church of Saint Nicholas in Demre (ancient Myra), built in the 3rd century AD, is one of the most important monuments of Middle Byzantine architecture. Saint Nicholas, the 4th-century bishop of Myra, became one of Christianity\'s most venerated saints — his legend evolving into the figure of Santa Claus across European and American cultures. The museum and church complex presents a unique narrative challenge: interpreting a site that is simultaneously an archaeological monument, a place of pilgrimage, and the origin point of a beloved global folklore tradition.',
    coverImage: '',
    sections: [
      {
        type: 'hero',
        text: 'Where a saint became a story, and a story became a global tradition.',
      },
      {
        type: 'fullbleed',
        text: 'The exhibition design traces three narrative threads simultaneously: the archaeological story of the church\'s construction and restoration, the religious biography of Saint Nicholas as a historical bishop, and the folkloric evolution of his legend into Santa Claus. Visitors encounter original 11th-century fresco fragments alongside contemporary interpretations, connecting ancient devotion to modern childhood wonder.',
      },
      {
        type: 'split',
        imagePosition: 'left',
        text: 'Fragile 11th-century frescoes are shown under strictly controlled low-lux lighting, while nearby interactive panels let visitors "reveal" faded details digitally — protecting the originals while still satisfying curiosity.',
      },
      {
        type: 'quote',
        text: 'A single life, a thousand years of legend, and a gift that keeps giving.',
      },
      {
        type: 'fullbleed',
        text: 'A short film installation near the entrance traces Saint Nicholas\'s transformation from historical bishop to global gift-giver, giving younger visitors an accessible entry point into a deeply layered site.',
      },
      {
        type: 'specs',
        specs: [
          { label: 'Period', value: '3rd-11th century' },
          { label: 'Year', value: '2023' },
          { label: 'Location', value: 'Demre, Antalya, Türkiye' },
          { label: 'Visitors', value: '500K+ annually' },
          { label: 'UNESCO', value: 'Tentative List' },
          { label: 'Role', value: 'Exhibition Design & Narrative Strategy' },
        ],
      },
    ],
    nextProjectId: 'istanbul-kariye-muzesi',
    prevProjectId: 'konya-mevlana-muzesi',
  },
  {
    id: 'istanbul-kariye-muzesi',
    title: 'İstanbul Kariye Müzesi',
    category: 'Museum',
    year: '2023',
    location: 'İstanbul, Türkiye',
    tagline:
      'One of the finest surviving examples of Byzantine mosaic and fresco art, hidden in the old city walls.',
    description:
      'The Kariye Museum (Chora Church), located within the old city walls of Istanbul, houses some of the most spectacular surviving examples of late Byzantine art. Originally built in the 5th century and rebuilt by Theodore Metochites in the 14th century, its walls are covered with golden mosaics and vibrant frescoes depicting the life of Christ and the Virgin Mary. After serving as a mosque following the conquest, it was converted to a museum in 1945. The exhibition challenge lies in illuminating these treasures while protecting them from light damage — a delicate balance between revelation and preservation.',
    coverImage: '',
    sections: [
      {
        type: 'hero',
        text: 'Every mosaic tile holds a thousand years of devotion.',
      },
      {
        type: 'fullbleed',
        text: 'The exhibition design employs a tiered lighting strategy: ambient indirect light provides safe general illumination while focused, dimmable spotlights reveal the finest details of individual mosaic panels on demand. The paraklesion (funerary chapel) is treated as a contemplative climax — its Anastasis fresco bathed in a single shaft of carefully controlled light that mimics the theological symbolism of the resurrection itself.',
      },
      {
        type: 'split',
        imagePosition: 'right',
        text: 'Visitors are guided along a one-way route calibrated to keep group density low beneath the most fragile ceiling mosaics, protecting centuries-old gold leaf from both light and humidity fluctuations.',
      },
      {
        type: 'quote',
        text: 'Art that outlived empires, preserved in light that honors its fragility.',
      },
      {
        type: 'fullbleed',
        text: 'A small study room adjacent to the paraklesion offers high-resolution reproductions that can be examined at close range — detail that the protective lighting in the chapel itself deliberately keeps out of reach.',
      },
      {
        type: 'specs',
        specs: [
          { label: 'Period', value: '5th-14th century' },
          { label: 'Year', value: '2023' },
          { label: 'Location', value: 'İstanbul, Türkiye' },
          { label: 'Artwork', value: 'Byzantine mosaics & frescoes' },
          { label: 'Visitors', value: '300K+ annually' },
          { label: 'Role', value: 'Conservation Lighting & Exhibition Design' },
        ],
      },
    ],
    nextProjectId: 'istanbul-arkeoloji-muzeleri',
    prevProjectId: 'antalya-demre-muzesi',
  },
  {
    id: 'istanbul-arkeoloji-muzeleri',
    title: 'İstanbul Arkeoloji Müzeleri',
    category: 'Museum',
    year: '2023',
    location: 'İstanbul, Türkiye',
    tagline:
      'One of the world\'s greatest archaeological collections, housed in a neoclassical masterpiece.',
    description:
      'Established in 1891 as the Imperial Museum (Müze-i Hümayun) by Osman Hamdi Bey, the Istanbul Archaeological Museums comprise three buildings — the main Archaeological Museum, the Museum of the Ancient Orient, and the Tiled Kiosk (Çinili Köşk). With over one million artifacts spanning from the prehistoric era to the Ottoman period, the museum houses world-renowned masterpieces including the Alexander Sarcophagus, the Sarcophagus of the Mourning Women, and the Treaty of Kadesh — the world\'s earliest known peace treaty.',
    coverImage: '',
    sections: [
      {
        type: 'hero',
        text: 'An empire\'s cultural vision, preserved across three buildings and a million artifacts.',
      },
      {
        type: 'fullbleed',
        text: 'The main museum building, designed by Alexandre Vallaury, features a neoclassical facade inspired by the Alexander Sarcophagus and the Sarcophagus of the Mourning Women. The interior halls are organized chronologically, guiding visitors from prehistoric Anatolia through Hittite, Assyrian, Babylonian, and classical civilizations — a journey that spans ten thousand years of human history within a single architectural space.',
      },
      {
        type: 'split',
        imagePosition: 'left',
        text: 'New vitrine systems were engineered to let the Alexander Sarcophagus be viewed from all sides for the first time in decades, using low-reflection glass and floor-integrated lighting that avoids any point of glare.',
      },
      {
        type: 'quote',
        text: 'Between these walls, civilizations whisper to one another across millennia.',
      },
      {
        type: 'fullbleed',
        text: 'The Museum of the Ancient Orient received a parallel reinterpretation, pairing cuneiform tablets with large-format translations so that the Treaty of Kadesh can be read, not just admired.',
      },
      {
        type: 'specs',
        specs: [
          { label: 'Area', value: '35,000 sqm' },
          { label: 'Year', value: '2023' },
          { label: 'Location', value: 'İstanbul, Türkiye' },
          { label: 'Collection', value: '1,000,000+ artifacts' },
          { label: 'Visitors', value: '450K+ annually' },
          { label: 'Role', value: 'Exhibition Design & Implementation' },
        ],
      },
    ],
    nextProjectId: 'anadolu-medeniyetleri-muzesi',
    prevProjectId: 'istanbul-kariye-muzesi',
  },
  {
    id: 'anadolu-medeniyetleri-muzesi',
    title: 'Ankara Anadolu Medeniyetleri Müzesi',
    category: 'Museum',
    year: '2023',
    location: 'Ankara, Türkiye',
    tagline:
      'Museum of the Year in Europe, housing an extraordinary collection spanning from the Paleolithic to the Ottoman era.',
    description:
      'Located in the historic Atpazarı quarter of Ankara, within two 15th-century Ottoman buildings — the Mahmut Paşa Bedesten and the Kurşunlu Han — the Museum of Anatolian Civilizations presents one of the world\'s most significant archaeological collections. From Paleolithic stone tools to Hittite reliefs, Phrygian woodwork to Urartian jewelry, the museum was awarded European Museum of the Year in 1997. Its unique setting within Ottoman commercial architecture creates a dialogue between the museum\'s own historical layers and the artifacts it houses.',
    coverImage: '',
    sections: [
      {
        type: 'hero',
        text: 'Anatolia breathes here — fifteen thousand years of human endeavor, in stone and gold.',
      },
      {
        type: 'fullbleed',
        text: 'The exhibition design follows a chronological spiral, beginning in the deep shadows of the Paleolithic and emerging into the illuminated complexity of the Ottoman period. The Hittite galleries employ dramatic chiaroscuro lighting to evoke the monumental scale of empire; the Phrygian rooms use warm amber tones to suggest domestic intimacy; the Urartian treasury is wrapped in near-darkness punctuated by the glitter of gold. Each civilization receives its own atmospheric treatment.',
      },
      {
        type: 'split',
        imagePosition: 'right',
        text: 'Climate-controlled vitrines were custom-built for the museum\'s most environmentally sensitive holdings, allowing continuous display of organic and metal artifacts without compromising conservation standards.',
      },
      {
        type: 'quote',
        text: 'More than a museum — Anatolia lives and breathes within these walls.',
      },
      {
        type: 'fullbleed',
        text: 'A tactile trail near the entrance — cast reproductions of key Hittite reliefs — was added for visually impaired visitors, extending the museum\'s award-winning reputation into genuine accessibility.',
      },
      {
        type: 'specs',
        specs: [
          { label: 'Area', value: '15,000 sqm' },
          { label: 'Year', value: '2023' },
          { label: 'Location', value: 'Ankara, Türkiye' },
          { label: 'Collection', value: '200,000+ artifacts' },
          { label: 'Award', value: 'European Museum of the Year 1997' },
          { label: 'Role', value: 'Exhibition Design & Implementation' },
        ],
      },
    ],
    nextProjectId: 'ankara-cumhuriyet-muzesi',
    prevProjectId: 'istanbul-arkeoloji-muzeleri',
  },
  {
    id: 'ankara-cumhuriyet-muzesi',
    title: 'Ankara Cumhuriyet Müzesi',
    category: 'Museum',
    year: '2023',
    location: 'Ankara, Türkiye',
    tagline:
      'The building where the Republic was shaped, now a museum preserving the founding spirit of modern Turkey.',
    description:
      'The Republic Museum is housed in the Second Turkish Grand National Assembly building, designed by architect Vedat Tek in 1923. Serving as the parliament from 1924 to 1960, this two-story stone building witnessed the foundational decisions of the Turkish Republic under Mustafa Kemal Atatürk. The architectural details — arched windows, ceramic panels, wide eaves, and hand-painted wooden ceilings with Ottoman and Seljuk motifs — reflect the transitional aesthetics of the early Republican period. Today it stands as both a museum of democracy and an architectural monument to a transformative era.',
    coverImage: '',
    sections: [
      {
        type: 'hero',
        text: 'The walls that heard the founding words of a nation still echo with their power.',
      },
      {
        type: 'fullbleed',
        text: 'The exhibition design treats the building itself as the primary artifact. The former assembly hall is preserved in its original state — rostrum, seating, and lighting intact — while interpretive elements are woven discreetly throughout. Audio recordings of historic speeches play from the original speaker\'s position; archival photographs float on transparent panels between the benches; the corridors display the evolution of Republican legislation through a timeline of documents and artifacts.',
      },
      {
        type: 'split',
        imagePosition: 'left',
        text: 'Original parliamentary furniture was conserved in place rather than removed to storage, and a discreet glass barrier now protects the chamber while preserving unobstructed sightlines from every seat in the gallery.',
      },
      {
        type: 'quote',
        text: 'A building that witnessed history is now history itself.',
      },
      {
        type: 'fullbleed',
        text: 'A basement-level archive room was converted into a research space where scholars and visiting students can consult digitized parliamentary records — extending the museum\'s role beyond exhibition into active civic education.',
      },
      {
        type: 'specs',
        specs: [
          { label: 'Building', value: '2 stories + basement' },
          { label: 'Year', value: '2023' },
          { label: 'Location', value: 'Ankara, Türkiye' },
          { label: 'Period', value: '1924-1960 as parliament' },
          { label: 'Visitors', value: '250K+ annually' },
          { label: 'Role', value: 'Exhibition Design & Preservation' },
        ],
      },
    ],
    nextProjectId: 'zeugma-mozaik-muzesi',
    prevProjectId: 'anadolu-medeniyetleri-muzesi',
  },
  {
    id: 'zeugma-mozaik-muzesi',
    title: 'Gaziantep Zeugma Mozaik Müzesi',
    category: 'Museum',
    year: '2023',
    location: 'Gaziantep, Türkiye',
    tagline:
      'The world\'s largest mosaic museum, where the legendary Gypsy Girl gazes across two millennia.',
    description:
      'The Zeugma Mosaic Museum in Gaziantep houses the world\'s largest collection of ancient mosaics under a single roof. Covering 2,500 square meters of mosaic display area within a 30,000 square meter complex, the museum showcases extraordinary Roman-era floor mosaics, sculptures, and frescoes rescued from the ancient city of Zeugma before it was submerged by the Birecik Dam. The museum\'s most famous artifact — the Gypsy Girl mosaic — has become an icon of Turkish cultural heritage.',
    coverImage: '',
    sections: [
      {
        type: 'hero',
        text: 'Two thousand years of silence, brought to life in stone tesserae.',
      },
      {
        type: 'fullbleed',
        text: 'The exhibition design employs a dramatic contrast between darkness and revelation. Each mosaic panel is presented as a luminous painting against matte black walls, with precisely calibrated LED spotlights that reveal the subtle color gradations of ancient stone without risking photochemical damage. The Gypsy Girl receives her own contemplative chamber — a darkened room where visitors encounter her gaze in isolation, understanding why this fragment alone has captured the world\'s imagination.',
      },
      {
        type: 'split',
        imagePosition: 'right',
        text: 'Rescue archaeology informs the museum\'s own narrative: a dedicated gallery documents the race against the rising waters of the Birecik Dam, giving visitors context for why these mosaics exist here at all.',
      },
      {
        type: 'quote',
        text: 'Every tessera is a fragment of a story lost to time — until now.',
      },
      {
        type: 'fullbleed',
        text: 'A conservation studio visible through glass walls lets visitors watch ongoing restoration work in real time, turning the invisible labor of preservation into part of the exhibition itself.',
      },
      {
        type: 'specs',
        specs: [
          { label: 'Area', value: '30,000 sqm' },
          { label: 'Year', value: '2023' },
          { label: 'Location', value: 'Gaziantep, Türkiye' },
          { label: 'Mosaic', value: '2,500 sqm' },
          { label: 'Visitors', value: '200K+ annually' },
          { label: 'Role', value: 'Exhibition Design & Implementation' },
        ],
      },
    ],
    nextProjectId: 'troya-muzesi',
    prevProjectId: 'ankara-cumhuriyet-muzesi',
  },
  {
    id: 'troya-muzesi',
    title: 'Çanakkale Troya Müzesi',
    category: 'Museum',
    year: '2024',
    location: 'Çanakkale, Türkiye',
    tagline:
      'Award-winning contemporary museum architecture framing a 3,000-year-old epic.',
    description:
      'The Troy Museum, located at the entrance to the UNESCO World Heritage Site of Ancient Troy, opened in 2018 to international acclaim. Its cubic, multi-story structure of rust-colored stone and glass houses artifacts from Troy\'s nine archaeological layers, spanning from 3,000 BC to the Roman era. The museum\'s architectural design by Yalin Mimarlik won the European Museum Academy\'s Special Commendation, creating a powerful dialogue between Homeric legend and contemporary museology.',
    coverImage: '',
    sections: [
      {
        type: 'hero',
        text: 'Where legend becomes archaeology, and archaeology becomes architecture.',
      },
      {
        type: 'fullbleed',
        text: 'The museum\'s four floors correspond to the nine layers of Troy — visitors descend through time as they ascend through space. Interactive displays, three-dimensional reconstructions, and immersive audio environments transform archaeological data into visceral narrative: the sound of bronze clashing in the Bronze Age hall, the whisper of diplomatic correspondence in the Hittite gallery, the warmth of domestic life in the Roman rooms.',
      },
      {
        type: 'split',
        imagePosition: 'left',
        text: 'Each floor\'s material palette shifts subtly with its historical period — raw corten mirroring the Bronze Age, polished stone for the Hellenistic era — reinforcing the museum\'s core idea that architecture itself narrates time.',
      },
      {
        type: 'quote',
        text: 'Troy is a stone poem — each layer a new verse.',
      },
      {
        type: 'fullbleed',
        text: 'A rooftop terrace offers a direct sightline to the archaeological site itself, closing the loop between the museum\'s curated interior and the excavation that gave it purpose.',
      },
      {
        type: 'specs',
        specs: [
          { label: 'Area', value: '12,000 sqm' },
          { label: 'Year', value: '2024' },
          { label: 'Location', value: 'Çanakkale, Türkiye' },
          { label: 'Floors', value: '4' },
          { label: 'Award', value: 'European Museum Academy 2020' },
          { label: 'Role', value: 'Exhibition Design & Implementation' },
        ],
      },
    ],
    nextProjectId: 'gobeklitepe-oren-yeri',
    prevProjectId: 'zeugma-mozaik-muzesi',
  },
  {
    id: 'gobeklitepe-oren-yeri',
    title: 'Şanlıurfa Göbeklitepe Ören Yeri',
    category: 'Museum',
    year: '2024',
    location: 'Şanlıurfa, Türkiye',
    tagline:
      'The zero point of history: 12,000-year-old temples, humanity\'s first monumental architecture.',
    description:
      'A UNESCO World Heritage Site, Göbeklitepe is the oldest known monumental temple complex in human history. Dating to 10,000 BC, its T-shaped megalithic pillars and circular enclosures adorned with animal reliefs have revolutionized our understanding of the Neolithic Revolution. The site features one of the most ambitious archaeological preservation and visitor experience projects of recent decades — a protective canopy, a world-class visitor center, and carefully choreographed pathways that allow visitors to stand in the presence of structures built six thousand years before the pyramids.',
    coverImage: '',
    sections: [
      {
        type: 'hero',
        text: 'This is not where history began — it is where history was rewritten.',
      },
      {
        type: 'fullbleed',
        text: 'The visitor experience design choreographs a journey from the modern interpretation center — where the scientific significance of Göbeklitepe is explained through immersive media — to the archaeological site itself. Under the protective canopy, visitors encounter the four main excavation areas at close range: T-shaped pillars carved with fox, snake, wild boar, crane, and scorpion reliefs that reveal the rich symbolic world of Neolithic humans. The pathway design ensures that visitors never outnumber the stones — preserving the contemplative atmosphere that such an ancient site demands.',
      },
      {
        type: 'split',
        imagePosition: 'right',
        text: 'Elevated walkways keep visitors at a fixed, respectful distance from the megaliths, while directional audio delivers interpretation without a single sign or panel disturbing the archaeological field itself.',
      },
      {
        type: 'quote',
        text: 'First came the temples, then the cities — humanity\'s greatest secret is here.',
      },
      {
        type: 'fullbleed',
        text: 'A climate-controlled canopy overhead protects the pillars from erosion while remaining visually unobtrusive — engineered to disappear from the visitor\'s eye line entirely.',
      },
      {
        type: 'specs',
        specs: [
          { label: 'Area', value: '22 acres' },
          { label: 'Year', value: '2024' },
          { label: 'Location', value: 'Şanlıurfa, Türkiye' },
          { label: 'Dating', value: '10,000 BC' },
          { label: 'UNESCO', value: 'World Heritage 2018' },
          { label: 'Role', value: 'Visitor Experience & Exhibition Design' },
        ],
      },
    ],
    nextProjectId: 'nevsehir-hacibektas-muzesi',
    prevProjectId: 'troya-muzesi',
  },
  {
    id: 'nevsehir-hacibektas-muzesi',
    title: 'Nevşehir Hacıbektaş Müzesi',
    category: 'Museum',
    year: '2023',
    location: 'Nevşehir, Türkiye',
    tagline:
      'The 13th-century lodge of Hacı Bektaş Veli, preserving the spiritual and cultural heritage of Anatolian Alevism.',
    description:
      'The Hacı Bektaş Veli Complex, established in the 13th century by the Turkish mystic Hacı Bektaş Veli, is one of the most significant spiritual and cultural sites in Anatolia. Expanded through centuries of additions and restorations, the complex includes the tomb (türbe), the semahane, the kitchen (aşevi), the courtyard, and numerous historical buildings. Converted to a museum in 1964 after the closure of dervish lodges, it now serves as both an ethnography museum and a living pilgrimage site, attracting over 200,000 visitors annually.',
    coverImage: '',
    sections: [
      {
        type: 'hero',
        text: 'A 700-year-old message of tolerance, preserved in stone and spirit.',
      },
      {
        type: 'fullbleed',
        text: 'The exhibition design treats the complex not as a series of rooms but as a spiritual journey. Visitors enter through the monumental gateway (kapı) and progress through the courtyard, the kitchen where the famous "nimetin niyazın hakkı" philosophy was practiced, the semahane where the sacred turning ceremony was performed, and finally the tomb chamber where Hacı Bektaş Veli rests. Each space is interpreted through its original function — the kitchen smells of bread, the semahane echoes with ney music, the tomb is bathed in silence.',
      },
      {
        type: 'split',
        imagePosition: 'left',
        text: 'Original 700-year-old timber ceilings were structurally reinforced without altering their surface, allowing the aşevi and semahane to remain in active ceremonial use alongside their museum function.',
      },
      {
        type: 'quote',
        text: 'Come, let us be one, let us be friends — the message remains, seven centuries later.',
      },
      {
        type: 'fullbleed',
        text: 'A courtyard soundscape of ney music and quiet conversation, tuned to seasonal pilgrimage patterns, extends the site\'s living spiritual practice into the visitor experience itself.',
      },
      {
        type: 'specs',
        specs: [
          { label: 'Complex', value: 'Dergah Külliyesi' },
          { label: 'Year', value: '2023' },
          { label: 'Location', value: 'Nevşehir, Türkiye' },
          { label: 'Founded', value: '13th century' },
          { label: 'Visitors', value: '200K+ annually' },
          { label: 'Role', value: 'Exhibition Design & Spiritual Atmosphere' },
        ],
      },
    ],
    nextProjectId: 'erzurum-museum-karaz',
    prevProjectId: 'gobeklitepe-oren-yeri',
  },
];
