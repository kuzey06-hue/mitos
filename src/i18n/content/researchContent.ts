// Localized display content for the Research page, keyed by language then id.
// English source lives in src/mocks/research.ts and is the fallback.

interface ArticleT { title?: string; subtitle?: string; excerpt?: string; category?: string }
interface EssayT { title?: string; subtitle?: string; body?: string }
interface MaterialT {
  name?: string;
  category?: string;
  origin?: string;
  characteristics?: string;
  applications?: string;
}
interface HeritageT {
  title?: string;
  subtitle?: string;
  abstract?: string;
  region?: string;
  period?: string;
  status?: string;
}
interface PublicationT { title?: string; description?: string; language?: string; publisher?: string }

export interface ResearchPack {
  articles?: Record<string, ArticleT>;
  essays?: Record<string, EssayT>;
  materials?: Record<string, MaterialT>;
  heritage?: Record<string, HeritageT>;
  publications?: Record<string, PublicationT>;
}

const tr: ResearchPack = {
  articles: {
    'article-1': {
      title: 'Müze Mekânının Şiirselliği',
      subtitle: 'Mekânsal Koreografi Ziyaretçi Deneyimini Nasıl Şekillendirir',
      category: 'Müze Kuramı',
      excerpt:
        'Müzeler yalnızca eserlerin kaplarından ibaret değildir — birer anlatı makinesidir. Her eşik, her bakış hattı, galeriler arasındaki her duraklama, edilgen gözlemi etkin anlam üretimine dönüştüren bir koreografiye katkıda bulunur. Bu yazı; çağdaş müze tasarımında mimari, sahne tasarımı ve bilişsel psikolojinin kesişimini ele alıyor.',
    },
    'article-2': {
      title: 'Malzeme Hafızası: Taş, Işık ve Zaman',
      subtitle: 'Miras Bağlamlarında Yapı Malzemelerinin Anlatı Kapasitesi',
      category: 'Malzeme Çalışmaları',
      excerpt:
        'Taş hafıza taşır. Mirasa duyarlı projelerde malzeme seçimi estetiği aşar — geçmiş ile bugün arasında bir diyaloğa dönüşür. Restorasyon ve yeniden işlevlendirme projelerindeki malzeme seçimlerinin, çağdaş müdahaleyi kucaklarken tarihsel sürekliliği nasıl ilettiğini inceliyoruz.',
    },
    'article-3': {
      title: 'Dijital Miras ve Özgünlük Paradoksu',
      subtitle: 'Dijital Rekonstrüksiyon Ne Zaman Yoruma Dönüşür?',
      category: 'Dijital Miras',
      excerpt:
        'Dijital araçlar, kaybolmuş mirasın giderek daha sadık rekonstrüksiyonlarını mümkün kılarken kritik bir soru ortaya çıkıyor: belgeleme ile yorum arasındaki sınır nerede? Bu yazı, müze ve sergi bağlamlarında dijital miras pratiklerinin etik ve felsefi boyutlarını ele alıyor.',
    },
  },
  essays: {
    'essay-1': {
      title: 'Harabeler ve Yeniden İnşa Üzerine',
      subtitle: 'Mimari Hafıza Üzerine Bir Tefekkür',
      body:
        'Harabeler birer başarısızlık değildir. Onlar birer palimpsesttir — zaman, hava koşulları ve insan müdahalesiyle yazılıp yeniden yazılan yüzeyler. Miras alanlarındaki çalışmalarımızda harabelere çözülmesi gereken sorunlar olarak değil, okunması gereken metinler olarak yaklaşırız. Yeniden inşa, gerekli olduğunda, bir monolog değil bir sohbet olmalıdır. Yeni olan, eskiyi taklit etmeden ona saygı göstermelidir. Geçmiş ile bugün arasındaki ek yeri görünür olmalı — iyileşen ama kaybolmayan bir iz. Bu, mimari bir alçakgönüllülük değil; mimari bir dürüstlüktür. En güçlü miras müdahaleleri, zamanın kendisini bir malzemeye dönüştürenlerdir.',
    },
    'essay-2': {
      title: 'Bir Ritüel Olarak Sergi',
      subtitle: 'Seküler Müzelerde Kutsal Mekân',
      body:
        'Müzeler seküler çağın katedralleridir. Ziyaretçiler yalnızca görmek için değil, deneyimlemek için girer — bakma, öğrenme ve hatırlama ritüeline katılmak için. İyi tasarlanmış bir serginin mekânsal dizilimi ritüel mimarisini yansıtır: eşik, yolculuk, keşif, dönüş. Bu tesadüf değildir. Ritüel, kültürler ve yüzyıllar boyunca insan deneyimini yapılandırır. Sergileri tasarlarken aslında ritüeller tasarlarız. Aydınlatma, ritim, akustik ortam, dokunsal yüzeyler — hepsi, bilgiyi dönüşüme çeviren yükseltilmiş bir dikkat hali yaratmak için el birliği eder. Seküler müze, en iyi haliyle, kutsal mekânların her zaman sunduğunu sunar: gündelik benliğin kendinden büyük bir şeyle karşılaştığı bir yer.',
    },
    'essay-3': {
      title: 'Tarafsızlığa Karşı',
      subtitle: 'Sergi Tasarımı Neden Bir Konum Almalıdır',
      body:
        'Tarafsız sergi miti ısrarcı ve tehlikelidir. Her küratöryel karar — neyin dahil edileceği, neyin dışlanacağı, nasıl çerçeveleneceği, nasıl sıralanacağı — bir konumdur. Teşhirin mimarisi asla masum değildir. Duvarlar, vitrinler, aydınlatma açıları, etiket tipografisi: hepsi bir ideoloji taşır. Pratiğimizde nesnellik iddiasını reddederiz. Bunun yerine yorumlayıcı seçimlerimiz konusunda şeffaflığı benimser, ziyaretçi anlayışını biçimlendiren görünmez yapıları görünür kılarız. Bu bir savunuculuk değil — bir hesap verebilirliktir. Etik sergi tasarımcısı yok olmuş gibi yapmaz; aksine varlığını okunur kılar ve ziyaretçilerin hem içerikle hem de onun aracılığıyla eleştirel bir biçimde ilişki kurmasına olanak tanır.',
    },
  },
  materials: {
    'mat-1': {
      name: 'Anadolu Kireç Taşı',
      category: 'Doğal Taş',
      origin: 'İç Anadolu, Türkiye',
      characteristics:
        'Sıcak krem tonları, orta gözeneklilik, mükemmel oyma özellikleri. İnce bir patina geliştirerek zarifçe yaşlanır.',
      applications:
        'Cephe kaplaması, iç mekân duvar panelleri, heykelsi öğeler, düşük trafikli miras mekânlarında döşeme',
    },
    'mat-2': {
      name: 'Karartılmış Çelik',
      category: 'İşlenmiş Metal',
      origin: 'Endüstriyel sınıf, Türkiye',
      characteristics:
        'Derin kömür patinası, kontrollü oksidasyon, ince doku farklılıkları olan mat yüzey. Dayanıklı ve bakımı kolay.',
      applications:
        'Vitrin çerçeveleri, yapısal vurgular, sergi mobilyası, yönlendirme öğeleri, taşa karşı kontrast malzeme',
    },
    'mat-3': {
      name: 'El Malası Kil Sıva',
      category: 'Geleneksel Yüzey',
      origin: 'Ege Bölgesi, Türkiye',
      characteristics:
        'Toprağımsı terracotta tonları, nefes alan yüzey, doğal farklılıklarla elle uygulanmış doku. Düşük gömülü karbon.',
      applications:
        'İç mekân duvar yüzeyleri, galeri arka planları, sergi bölme yüzeyleri, akustik olarak emici ortamlar',
    },
    'mat-4': {
      name: 'Müze Sınıfı Cam',
      category: 'Teknik Cam',
      origin: 'Uzman tedarikçi, Almanya',
      characteristics:
        'Ultra düşük demir içeriği, yansıma önleyici kaplama, UV filtreleme, maksimum ışık geçirgenliği. Monte edildiğinde neredeyse görünmez.',
      applications:
        'Teşhir vitrinleri, eser koruma, çerçevesiz bölmeler, köprü öğeleri, ışığa duyarlı nesne muhafazaları',
    },
  },
  heritage: {
    'heritage-1': {
      title: 'Osmanlı Kervansaray Tipolojisi',
      subtitle: 'Mekânsal Analiz ve Yeniden İşlevlendirme Potansiyelleri',
      abstract:
        'Anadolu genelinde 16.-18. yüzyıl Osmanlı kervansaraylarının kapsamlı bir morfolojik incelemesi; yinelenen mekânsal örüntüleri ve bunların kültürel mekânlar için çağdaş yeniden işlevlendirme stratejilerindeki önemini belirliyor.',
      region: 'Anadolu',
      period: '16.–18. Yüzyıl',
      status: 'Sürüyor',
    },
    'heritage-2': {
      title: 'Bizans Mekânsal Işık Modülasyonu',
      subtitle: 'Kutsal Mimarinin Fotometrik Analizi',
      abstract:
        'Bizans mimarlarının, hiyeratik mekânsal hiyerarşiler yaratmak için doğal ışığı hassas pencere düzeni ve kubbe geometrisiyle nasıl yönlendirdiğini araştıran; çağdaş sergi aydınlatması tasarımına uygulamalar sunan bir çalışma.',
      region: 'İstanbul ve Kapadokya',
      period: '6.–14. Yüzyıl',
      status: '2025’te Yayımlandı',
    },
    'heritage-3': {
      title: 'Endüstriyel Miras ve Müze Dönüşümü',
      subtitle: 'Kültürel Altyapı Olarak Post-Endüstriyel Mekânlar',
      abstract:
        'Eski endüstriyel tesislerin — fabrikalar, depolar, enerji santralleri — müze ve kültür merkezlerine başarıyla dönüştürüldüğü 20 uluslararası vakanın karşılaştırmalı incelemesi; mimari stratejileri ve ziyaretçi katılımı ölçütlerini analiz ediyor.',
      region: 'Avrupa ve Orta Doğu',
      period: '20.–21. Yüzyıl',
      status: '2025’te Yayımlandı',
    },
  },
  publications: {
    'pub-1': {
      title: 'Mekânsal Anlatılar: Bir Hikâye Anlatımı Olarak Müze Tasarımı',
      language: 'İngilizce',
      description:
        'Mitos’un yirmi yıllık müze ve sergi projelerini belgeleyen kapsamlı bir monografi; mekânsal anlatı kuramı, ziyaretçi deneyimi tasarımı ve müzelerin kültürel manzaradaki değişen rolü üzerine eleştirel yazılar içeriyor.',
    },
    'pub-2': {
      title: 'Hafızanın Maddiliği',
      language: 'İngilizce ve Türkçe',
      description:
        'Mirasa duyarlı mimari müdahalelerde malzeme seçiminin bir incelemesi; Anadolu, Levant ve Balkanlar’dan örnek çalışmalar içeriyor.',
    },
    'pub-3': {
      title: 'Sergi Aydınlatması: Bir Tasarım El Kitabı',
      language: 'İngilizce',
      description:
        'Sergi aydınlatması tasarımına yönelik pratik ve kuramsal bir rehber; koruma gereksinimlerini, dramaturjik yaklaşımları ve gelişen LED ile dinamik aydınlatma teknolojilerini kapsıyor.',
    },
    'pub-4': {
      title: 'Anadolu Kervansarayları: Bir Mekânsal Atlas',
      language: 'İngilizce',
      description:
        'Ayakta kalan 47 Osmanlı dönemi kervansarayının ayrıntılı bir mekânsal atlası; rölöve çizimleri, fotografik belgeleme ve mekânsal tipoloji analizleri içeriyor.',
    },
    'pub-5': {
      title: 'Miras Pratiğinde Dijital Rekonstrüksiyon Etiği',
      language: 'İngilizce',
      description:
        'Müze ve miras bağlamlarında dijital rekonstrüksiyon pratikleri için özgünlük, yazarlık ve kamusal yorumu ele alan bir etik çerçeve öneren hakemli bir makale.',
    },
    'pub-6': {
      title: 'Kültürel Mekânlarda Ziyaretçi Deneyimi Haritalaması',
      language: 'İngilizce',
      description:
        'Karmaşık kültürel mekânlarda ziyaretçi deneyimi yolculuklarını haritalamak ve analiz etmek için bir yöntem sunan; altı uluslararası müzede üç yıllık bir çalışmanın bulgularını içeren bir makale.',
    },
  },
};

const de: ResearchPack = {
  articles: {
    'article-1': {
      title: 'Die Poetik des Museumsraums',
      subtitle: 'Wie räumliche Choreografie das Besuchererlebnis prägt',
      category: 'Museumstheorie',
    },
    'article-2': {
      title: 'Materialgedächtnis: Stein, Licht & Zeit',
      subtitle: 'Die narrative Kraft von Baumaterialien im Kontext des Erbes',
      category: 'Materialstudien',
    },
    'article-3': {
      title: 'Digitales Erbe & das Authentizitätsparadox',
      subtitle: 'Wann wird digitale Rekonstruktion zur Interpretation?',
      category: 'Digitales Erbe',
    },
  },
  essays: {
    'essay-1': { title: 'Über Ruinen & Rekonstruktion', subtitle: 'Eine Meditation über architektonisches Gedächtnis' },
    'essay-2': { title: 'Die Ausstellung als Ritual', subtitle: 'Sakraler Raum in säkularen Museen' },
    'essay-3': { title: 'Gegen die Neutralität', subtitle: 'Warum Ausstellungsdesign Position beziehen muss' },
  },
  materials: {
    'mat-1': { name: 'Anatolischer Kalkstein', category: 'Naturstein', origin: 'Zentralanatolien, Türkei' },
    'mat-2': { name: 'Geschwärzter Stahl', category: 'Bearbeitetes Metall', origin: 'Industriequalität, Türkei' },
    'mat-3': { name: 'Handgeglätteter Lehmputz', category: 'Traditionelle Oberfläche', origin: 'Ägäisregion, Türkei' },
    'mat-4': { name: 'Museumsglas', category: 'Technisches Glas', origin: 'Spezialhersteller, Deutschland' },
  },
  heritage: {
    'heritage-1': {
      title: 'Typologie osmanischer Karawansereien',
      subtitle: 'Räumliche Analyse & Potenziale der Umnutzung',
      region: 'Anatolien',
      period: '16.–18. Jahrhundert',
      status: 'Laufend',
    },
    'heritage-2': {
      title: 'Byzantinische räumliche Lichtmodulation',
      subtitle: 'Photometrische Analyse sakraler Architektur',
      region: 'Istanbul & Kappadokien',
      period: '6.–14. Jahrhundert',
      status: 'Veröffentlicht 2025',
    },
    'heritage-3': {
      title: 'Industrieerbe & Museumsumbau',
      subtitle: 'Postindustrielle Räume als kulturelle Infrastruktur',
      region: 'Europa & Naher Osten',
      period: '20.–21. Jahrhundert',
      status: 'Veröffentlicht 2025',
    },
  },
  publications: {
    'pub-1': { title: 'Räumliche Narrative: Museumsdesign als Erzählung', language: 'Englisch' },
    'pub-2': { title: 'Die Materialität der Erinnerung', language: 'Englisch & Türkisch' },
    'pub-3': { title: 'Ausstellungsbeleuchtung: Ein Design-Handbuch', language: 'Englisch' },
    'pub-4': { title: 'Anatolische Karawansereien: Ein räumlicher Atlas', language: 'Englisch' },
    'pub-5': { title: 'Ethik der digitalen Rekonstruktion in der Denkmalpraxis', language: 'Englisch' },
    'pub-6': { title: 'Besuchererlebnis-Mapping in Kulturstätten', language: 'Englisch' },
  },
};

const it: ResearchPack = {
  articles: {
    'article-1': {
      title: 'La poetica dello spazio museale',
      subtitle: 'Come la coreografia spaziale plasma l’esperienza del visitatore',
      category: 'Teoria museale',
    },
    'article-2': {
      title: 'Memoria materiale: pietra, luce e tempo',
      subtitle: 'La capacità narrativa dei materiali da costruzione nei contesti del patrimonio',
      category: 'Studi sui materiali',
    },
    'article-3': {
      title: 'Patrimonio digitale e il paradosso dell’autenticità',
      subtitle: 'Quando la ricostruzione digitale diventa interpretazione?',
      category: 'Patrimonio digitale',
    },
  },
  essays: {
    'essay-1': { title: 'Su rovine e ricostruzione', subtitle: 'Una meditazione sulla memoria architettonica' },
    'essay-2': { title: 'La mostra come rito', subtitle: 'Spazio sacro nei musei laici' },
    'essay-3': { title: 'Contro la neutralità', subtitle: 'Perché il design espositivo deve prendere posizione' },
  },
  materials: {
    'mat-1': { name: 'Calcare anatolico', category: 'Pietra naturale', origin: 'Anatolia centrale, Türkiye' },
    'mat-2': { name: 'Acciaio brunito', category: 'Metallo lavorato', origin: 'Grado industriale, Türkiye' },
    'mat-3': { name: 'Intonaco di argilla steso a mano', category: 'Finitura tradizionale', origin: 'Regione egea, Türkiye' },
    'mat-4': { name: 'Vetro da museo', category: 'Vetro tecnico', origin: 'Fornitore specializzato, Germania' },
  },
  heritage: {
    'heritage-1': {
      title: 'Tipologia dei caravanserragli ottomani',
      subtitle: 'Analisi spaziale e potenzialità di riuso',
      region: 'Anatolia',
      period: 'XVI–XVIII secolo',
      status: 'In corso',
    },
    'heritage-2': {
      title: 'Modulazione spaziale della luce bizantina',
      subtitle: 'Analisi fotometrica dell’architettura sacra',
      region: 'Istanbul e Cappadocia',
      period: 'VI–XIV secolo',
      status: 'Pubblicato 2025',
    },
    'heritage-3': {
      title: 'Patrimonio industriale e conversione museale',
      subtitle: 'Spazi post-industriali come infrastruttura culturale',
      region: 'Europa e Medio Oriente',
      period: 'XX–XXI secolo',
      status: 'Pubblicato 2025',
    },
  },
  publications: {
    'pub-1': { title: 'Narrazioni spaziali: il design museale come racconto', language: 'Inglese' },
    'pub-2': { title: 'La materialità della memoria', language: 'Inglese e turco' },
    'pub-3': { title: 'Illuminazione espositiva: un manuale di progettazione', language: 'Inglese' },
    'pub-4': { title: 'Caravanserragli anatolici: un atlante spaziale', language: 'Inglese' },
    'pub-5': { title: 'Etica della ricostruzione digitale nella pratica del patrimonio', language: 'Inglese' },
    'pub-6': { title: 'Mappatura dell’esperienza del visitatore nei luoghi culturali', language: 'Inglese' },
  },
};

const ar: ResearchPack = {
  articles: {
    'article-1': {
      title: 'شعرية فضاء المتحف',
      subtitle: 'كيف تشكّل الكوريغرافيا المكانية تجربة الزائر',
      category: 'نظرية المتاحف',
    },
    'article-2': {
      title: 'ذاكرة المادة: الحجر والضوء والزمن',
      subtitle: 'القدرة السردية لمواد البناء في سياقات التراث',
      category: 'دراسات المواد',
    },
    'article-3': {
      title: 'التراث الرقمي ومفارقة الأصالة',
      subtitle: 'متى تصبح إعادة البناء الرقمية تأويلاً؟',
      category: 'التراث الرقمي',
    },
  },
  essays: {
    'essay-1': { title: 'في الأطلال وإعادة البناء', subtitle: 'تأمل في الذاكرة المعمارية' },
    'essay-2': { title: 'المعرض بوصفه طقساً', subtitle: 'الفضاء المقدس في المتاحف العلمانية' },
    'essay-3': { title: 'ضد الحياد', subtitle: 'لماذا يجب أن يتخذ تصميم المعارض موقفاً' },
  },
  materials: {
    'mat-1': { name: 'حجر الكلس الأناضولي', category: 'حجر طبيعي', origin: 'وسط الأناضول، تركيا' },
    'mat-2': { name: 'الفولاذ المسوّد', category: 'معدن مُعالج', origin: 'درجة صناعية، تركيا' },
    'mat-3': { name: 'جص الطين المُملّس يدوياً', category: 'تشطيب تقليدي', origin: 'منطقة بحر إيجه، تركيا' },
    'mat-4': { name: 'زجاج بمواصفات المتاحف', category: 'زجاج تقني', origin: 'مورّد متخصص، ألمانيا' },
  },
  heritage: {
    'heritage-1': {
      title: 'تصنيف الخانات العثمانية',
      subtitle: 'تحليل مكاني وإمكانات إعادة التوظيف',
      region: 'الأناضول',
      period: 'القرن 16–18',
      status: 'جارٍ',
    },
    'heritage-2': {
      title: 'تعديل الضوء المكاني البيزنطي',
      subtitle: 'تحليل ضوئي للعمارة المقدسة',
      region: 'إسطنبول وكابادوكيا',
      period: 'القرن 6–14',
      status: 'نُشر 2025',
    },
    'heritage-3': {
      title: 'التراث الصناعي وتحويل المتاحف',
      subtitle: 'الفضاءات ما بعد الصناعية كبنية تحتية ثقافية',
      region: 'أوروبا والشرق الأوسط',
      period: 'القرن 20–21',
      status: 'نُشر 2025',
    },
  },
  publications: {
    'pub-1': { title: 'سرديات مكانية: تصميم المتاحف بوصفه حكاية', language: 'الإنجليزية' },
    'pub-2': { title: 'مادية الذاكرة', language: 'الإنجليزية والتركية' },
    'pub-3': { title: 'إضاءة المعارض: دليل تصميم', language: 'الإنجليزية' },
    'pub-4': { title: 'خانات الأناضول: أطلس مكاني', language: 'الإنجليزية' },
    'pub-5': { title: 'أخلاقيات إعادة البناء الرقمية في ممارسة التراث', language: 'الإنجليزية' },
    'pub-6': { title: 'رسم خرائط تجربة الزائر في الأماكن الثقافية', language: 'الإنجليزية' },
  },
};

export const researchContent: Record<string, ResearchPack> = { tr, de, it, ar };
