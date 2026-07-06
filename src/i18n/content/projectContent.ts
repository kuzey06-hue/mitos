// Localized display content for projects, keyed by language then project id.
// The English source lives in src/mocks/projects.ts and is used as the
// fallback for any field/language not provided here.

export interface ProjectContentItem {
  tagline?: string;
  description?: string;
  // Aligned by index to a project's text sections (hero/fullbleed/split/quote).
  sections?: (string | null)[];
  // Aligned by index to the specs section's specs[] values.
  specs?: (string | null)[];
}

export interface ProjectContentPack {
  categories?: Record<string, string>;
  specLabels?: Record<string, string>;
  items?: Record<string, ProjectContentItem>;
}

const categoriesTR = {
  Museum: 'Müze',
  Exhibition: 'Sergi',
  Interior: 'İç Mekan',
  Cultural: 'Kültürel',
  Competition: 'Yarışma',
  Research: 'Araştırma',
  International: 'Uluslararası',
};

const specLabelsTR = {
  Area: 'Alan',
  Year: 'Yıl',
  Location: 'Konum',
  Status: 'Durum',
  Role: 'Rol',
  Built: 'Yapım',
  Visitors: 'Ziyaretçi',
  Duration: 'Süre',
  Rooms: 'Oda',
  Period: 'Dönem',
  Founded: 'Kuruluş',
  Award: 'Ödül',
  Collection: 'Koleksiyon',
  UNESCO: 'UNESCO',
  Dating: 'Tarihleme',
  Floors: 'Kat',
  Artwork: 'Eserler',
  Building: 'Yapı',
  Complex: 'Külliye',
  Mosaic: 'Mozaik',
};

const tr: ProjectContentPack = {
  categories: categoriesTR,
  specLabels: specLabelsTR,
  items: {
    'erzurum-museum-karaz': {
      tagline:
        'Dağlık Doğu Anadolu’nun kadim kültürü, sürükleyici bir sergi tasarımıyla hayat buluyor.',
      description:
        'Erzurum Müzesi’nde, dağlık Doğu Anadolu’nun en eski uygarlıklarından biri olan KARAZ kültürüne adanmış kalıcı bir sergi. Sergi, arkeolojik araştırmayı çarpıcı mekânsal anlatılara dönüştürerek ziyaretçileri kadim bir halkın gömü gelenekleri, yerleşim mimarisi, inanç sistemleri ve seramik sanatı boyunca gezdiriyor.',
      sections: [
        'Arkeolojinin atmosfere dönüştüğü yer.',
        'Müzenin girişi ziyaretçileri geniş bir panoramik duvarla karşılıyor — KARAZ kimliği Doğu Anadolu’nun dağlarından yükseliyor ve binyıllar süren bir yolculuğun tonunu belirliyor.',
        'Tam ölçekli bir grafik duvar, KARAZ uygarlığının coğrafi sınırlarını çiziyor — Anadolu’daki kazı alanlarından geniş bölgesel bağlama uzanarak yerel mirası derin tarihsel önemine bağlıyor. Panel, bu kültürü ilk gün yüzüne çıkaran öncü kazıları ve Hamit Zübeyir Koşay’ı anıyor.',
        'Her eser bir hikâye anlatır. Her duvar bir sayfaya dönüşür.',
        'KARAZ halklarının inanç ve ocak sistemleri, gerçek boyutlu dioramalar ve özgün rekonstrüksiyonlarla canlandırılıyor — taş bir ocağın önünde diz çökmüş bir figür, kadim inançları ve gündelik manevi pratiği aydınlatan ritüel nesneler ve idol heykellerle çevrili.',
        'Gömü gelenekleri paneli; iskelet kalıntılarını, tören kaplarını ve maden süs eşyalarını kazılmış toprak zemin üzerine yerleştiriyor — KARAZ halklarının manevi dünyasına açılan en derin pencerelerden biri olan efsanevi Arslantepe Kral Mezarı’na göndermelerle birlikte.',
        'Havadan çekilmiş bir kazı fotoğrafının üzerine bindirilen mimari plan, KARAZ uygarlığının gelişmiş yerleşim düzenini ortaya koyuyor — dairesel yapılar, savunma düzenleri ve yaylalardaki en erken bölgesel kentleşme örnekleri.',
        'Seramik geleneği paneli kadim zanaatı hayata döndürüyor — yeniden kurulmuş bir atölye sahnesinde bir zanaatkâr kadın, hem işlevsel hem simgesel anlam taşıyan kaplar biçimlendiriyor; yanında geometrik motiflerle bezenmiş görkemli bir pişmiş küp yer alıyor.',
        'Sergi; iskelet kalıntılarını, gömü eserlerini ve yeniden kurgulanmış anlatıları bir araya getirerek KARAZ halklarının gömü geleneklerini sunuyor — manevi dünya görüşlerine açılan en derin pencerelerden biri.',
        'Kazı dokularıyla sarılmış galeri sütunları ve teşhir vitrinleri bir keşif ritmi yaratıyor — her dönüş KARAZ mirasının bir başka katmanını açığa çıkarıyor.',
      ],
      specs: ['850 m²', '2024', 'Erzurum, Türkiye', 'Tamamlandı', 'Sergi Tasarımı ve Uygulama'],
    },
    'erzincan-altintepe-oren-yeri': {
      tagline:
        'Altıntepe’nin dünü ve bugünü — Erzincan ovasından yükselen bir Urartu kalesi.',
      description:
        'Doğu Anadolu’nun en önemli Urartu yerleşimlerinden biri olan Erzincan Altıntepe arkeolojik alanında kalıcı bir sergi ve alan deneyimi. Proje, alan içindeki müzenin sergi tasarımını; kadim kale, tapınak ve saray kompleksi boyunca yönlendirme ve yorumlamayı kapsıyor — ziyaretçileri bu 3.000 yıllık uygarlığın katmanlı tarihine bağlıyor.',
      sections: [
        'Kalenin ovayla buluştuğu yerde, tarih taşla konuşur.',
        'Altıntepe kalesi Erzincan ovasından çarpıcı biçimde yükseliyor — bir zamanlar yaylalarla Mezopotamya arasındaki ticaret yollarına hükmeden 3.000 yıllık bir Urartu kalesi. Havadan bakış bu arkeolojik hazinenin ölçeğini ortaya koyuyor: savunma duvarları, tapınak temelleri ve Anadolu’nun en güçlü kadim krallıklarından birinin hikâyesini anlatan bir saray kalıntısı.',
        'Yorumlayıcı tabelalar ve yönlendirme öğeleri doğrudan peyzaja işleniyor; ziyaretçiler kale kalıntıları ile alan müzesi arasında anlatı akışını bozmadan gezebiliyor. Malzeme seçimleri — yıpranmış korten çelik, ham taş — alanla yarışmak yerine onun kendi jeolojisini yankılıyor.',
        'Her taş bir tanıktır. Her katman bir bölümdür.',
        'Müzenin içinde, kazıdan çıkarılan eserler — bronz aksamlar, tören kapları, mimari parçalar — alanın kendisinin büyük ölçekli fotoğraflarıyla diyalog içinde sergileniyor; böylece nesne ve peyzaj asla birbirinden kopuk görülmüyor.',
      ],
      specs: ['Alan + Müze', '2024', 'Erzincan, Türkiye', 'Devam Ediyor', 'Sergi ve Alan Tasarımı'],
    },
    'cumhurbaskanligi-15-temmuz-demokrasi-muzesi': {
      tagline:
        '15 Temmuz 2016 gecesi bir milletin direniş ruhunu onurlandıran anıtsal bir müze.',
      description:
        'Cumhurbaşkanlığı 15 Temmuz Demokrasi Müzesi, 2016 darbe girişimi sırasında sergilenen cesaret ve fedakârlığın kalıcı bir tanıklığı olarak duruyor. Sergi tasarımı, derin ve kişisel bir ulusal hafızayı ağırbaşlı ve sürükleyici bir anlatı deneyimine dönüştürüyor — ziyaretçileri o gecenin olayları boyunca onur, tarihsel doğruluk ve duygusal yoğunlukla gezdiriyor.',
      sections: [
        'Demokrasi, iktidar salonlarında değil, halkın yüreğinde savunulur.',
        'Müzenin anıtsal girişi, düşünceye davet eden yer altı bir mekâna iniyor — gün ışığından o kader gecesinin karanlığına, oradan da direniş ve birliğin aydınlığına uzanan simgesel bir yolculuk.',
        'Kişisel tanıklıklar — hayatta kalanların ve görgü tanıklarının kayıtlı sesleri — güzergâh boyunca gizli dinleme istasyonlarıyla anlatıya işleniyor; böylece müze, tarihsel üçüncü şahıs kadar sık biçimde birinci ağızdan da konuşuyor.',
        'Hafıza, bir milletin vicdanıdır.',
        'Son galeri, aydınlık bir anma salonuna açılıyor; hayatını kaybedenlerin adları ve görselleri sessiz bir vakarla sunuluyor ve ziyaretçinin yolculuğu bölünme değil birlik notasıyla kapanıyor.',
      ],
      specs: ['12.000 m²', '2024', 'Ankara, Türkiye', 'Tamamlandı', 'Sergi Tasarımı ve Uygulama'],
    },
    'istanbul-biennial-pavilion': {
      tagline: 'Geçiciliğe adanmış geçici bir anıt.',
      description:
        '17. İstanbul Bienali için tasarlanan bu geçici pavyon, hafıza ile unutuş arasındaki ilişkiyi araştırdı. Yalnızca 90 gün var olacak şekilde inşa edilen yapı, gözle görülür biçimde yaşlanan malzemeler kullandı — paslanan çelik, hava koşullarıyla değişen ahşap, solan tekstiller — entropiyi başlıca ifade aracına dönüştürdü.',
      sections: [
        'Kaybolmak için inşa edildi. Hatırlanmak için tasarlandı.',
        'Pavyon, bilinçli olarak işlemsiz bırakılan COR-TEN çelik panellerden inşa edildi. 90 günlük sergi süresince ziyaretçiler yapının fiziksel dönüşümüne tanık oldu — hafızanın kendisini de etkileyen o yaşlanma sürecine.',
        'Yerel zanaatkârların doğal pigmentlerle boyanmış liflerle el dokuması tekstil enstalasyonları, kontrollü UV etkisi altında giderek soldu. Pavyona her ziyaret, kelimenin tam anlamıyla kendini unutan bir mekânla eşsiz bir karşılaşmaydı.',
        'Geçicilik, tasarımın bir kusuru değil — tasarımın kendisidir.',
        'Belgeleme, enstalasyonun kendisi kadar önemli hale geldi: fotografik bir arşiv pavyonun çürüyüşünü hafta hafta kaydetti ve sergiyi kendi fiziksel yapısını aşan süreli bir sanat eserine dönüştürdü.',
      ],
      specs: ['2.800 m²', '2023', 'İstanbul, Türkiye', '90 gün', 'Kaldırıldı', 'Konsept ve Tasarım'],
    },
    'istanbul-ayasofya-muzesi': {
      tagline:
        'Dünya mimarlık tarihinin en önemli anıtlarından biri; 1.500 yılı aşkındır ayakta.',
      description:
        'Aslen 537 yılında İmparator Justinianus tarafından katedral olarak inşa edilen Ayasofya, dünya tarihinin en önemli dini ve kültürel simgelerinden biri oldu. Devasa kubbesi, ayrıntılı mozaikleri ve Bizans, Osmanlı ve Cumhuriyet dönemlerine yayılan katmanlı tarihiyle Ayasofya, sergi tasarımı için eşsiz bir zorluk ve fırsat sunuyor — başlı başına en önemli eserin kendisi olan bir mekânı yorumlamak.',
      sections: [
        'Mimarinin teolojiye, taşın duaya dönüştüğü yer.',
        'Ayasofya için benimsenen sergi tasarımı yaklaşımı, anıtın yaşayan bir kültürel mekân olarak öncelikli rolüne saygı gösteriyor. Yorumlayıcı öğeler mimariye ince bir biçimde işleniyor — projeksiyonla ışık haritalama, Osmanlı sıvasının altında gizli kalan kadim mozaiklerin izini sürerken, gizli ses bölgeleri ziyaretçileri yapının üç kimliği boyunca yönlendiriyor: kilise, cami ve müze.',
        'Yönlendirilmiş aydınlatma ve düşük profilli ses düğümlerinden oluşan gizli bir ağ, tek bir yüzeyi bile değiştirmeden ana nefi kat ediyor — her müdahale geri alınabilir olacak şekilde tasarlanıyor; halihazırda üç ayrı dini kimlikten geçmiş bir anıta duyulan saygıyla.',
        'On beş yüzyıl boyunca insanlığın özlemlerine tanıklık etmiş bir yapı.',
        'Üst galerilerde sessiz bir yorumlama güzergâhı, yapının Bizans mozaiklerini Osmanlı hat madalyonlarıyla yan yana izliyor; böylece ziyaretçiler aynı duvarları tek bir mekâna katlanmış iki tarih olarak okuyabiliyor.',
      ],
      specs: ['7.500 m²', '2023', 'İstanbul, Türkiye', 'MS 537', 'Yıllık 3,5M+', 'Yorumlama Tasarımı ve Yönlendirme'],
    },
    'istanbul-topkapi-sarayi-muzesi': {
      tagline:
        'Dört yüzyıl boyunca Osmanlı iktidarının kalbi; bugün dünyanın en büyük saray-müzelerinden biri.',
      description:
        'Sarayburnu’ndaki Bizans akropolünün yerinde 1460–1478 yılları arasında inşa edilen Topkapı Sarayı, Fatih Sultan Mehmed’den Sultan Abdülmecid’e Osmanlı İmparatorluğu’nun idari, eğitsel ve sanatsal merkezi olarak hizmet etti. Bugün, yaklaşık 400.000 metrekarelik bir alanda saray koleksiyonlarını, kutsal emanetleri ve 300.000’i aşkın arşiv belgesini barındıran, dünyanın en büyük saray-müzelerinden biri olarak duruyor.',
      sections: [
        'Taşta, hazinede ve hafızada korunan dört yüzyıllık imparatorluk.',
        'Sergi tasarımı, sarayın dört avlusunu saray yaşamının bölümleri olarak dolaşıyor — Birinci Avlu’nun kamusal ihtişamından Dördüncü Avlu’nun özel kutsallığına. Her avlu ayrı bir mekânsal dille yorumlanıyor: silah avlusu malzemeyle, hazine ışıkla, harem sessizlikle konuşuyor.',
        'Dört avlu boyunca yönlendirme, ölçülü bir görsel dil kullanıyor — taş döşemeye yerleştirilmiş, altı dile çevrilmiş pirinç işaretler — böylece dolaşım hiçbir zaman sarayın kendi mimarisiyle dikkat için yarışmıyor.',
        'Her avlu farklı bir dünya barındırır. Her köşk farklı bir hikâye anlatır.',
        'Hazine Dairesi, mücevherleri ve el yazmalarını UV etkisinden koruyabilecek, aynı zamanda dünyanın en zengin saray koleksiyonlarından birinden beklenen teatral parıltıyı sunabilecek bir aydınlatma yeniden tasarımı gerektirdi.',
      ],
      specs: ['400.000 m²', '2023', 'İstanbul, Türkiye', '1460-1478', 'Yıllık 3,5M+', 'Sergi Tasarımı ve Ziyaretçi Deneyimi'],
    },
    'istanbul-topkapi-harem': {
      tagline:
        'Osmanlı hanedanının yasak ve özel dünyası — 300 oda, 9 hamam, 2 mescit ve sayısız sır.',
      description:
        'Topkapı Sarayı’ndaki Harem Dairesi, Osmanlı hanedanının özel yaşam alanıydı — padişah, valide sultan, cariyeler, çocuklar ve onları koruyan Harem Ağaları. 16. yüzyıldan 19. yüzyıla dört asır boyunca genişletilen kompleks, Osmanlı tarihinin mimari açıdan en önemli yapı topluluklarından birini temsil ediyor. Bugün müze içinde bir müze olarak duruyor; tarihsel doğrulukla, bir zamanlar duvarları arasında yaşanan hayatların vakarını dengeleyen hassas bir yorumlama yaklaşımı gerektiriyor.',
      sections: [
        'Bu duvarların ardında, bir imparatorluk en mahrem saatlerini geçirdi.',
        'Yorumlama tasarımı yaklaşımı Harem’i egzotizmin gösterisi olarak değil, evsel bir biyografi olarak ele alıyor — bir hanedan ailesinin özel yaşamı. Sergi öğeleri mevcut mimariye entegre ediliyor: Valide Sultan’ın odaları fısıltılı sesli anılarla; Veliaht’ın odaları projeksiyonla yansıtılan yazışmalarla; hamamlar suyun ve ritüelin sesleriyle anlatılıyor.',
        'Ses tasarımı merkezi bir rol oynuyor: akan suyun, uzaktan gelen müziğin ve alçak sesli konuşmaların soluk kayıtları belirli odalara katmanlanıyor; bir zamanlar yüzlerce kişiyi barındıran bir hanenin günlük ritimlerini çağrıştırıyor.',
        'Her oda bir dünyaydı. Her koridor, yaşamlar arasında bir sınırdı.',
        'Kırılgan İznik çini panolarını ve boyalı tavanları korumak için koruma sınıfı aydınlatma oda oda kalibre edildi; tarihsel özgünlük ile ziyaretçi erişilebilirliğinin birbirini dışlamadığını kanıtladı.',
      ],
      specs: ['~300', '2023', 'İstanbul, Türkiye', '16.-19. yüzyıl', 'Yıllık 1M+', 'Yorumlama Tasarımı ve Sesli Anlatı'],
    },
    'konya-mevlana-muzesi': {
      tagline:
        'Semazenlerin manevi merkezi; Mevlânâ’nın mirasının ışıkta, sesde ve taşta yaşadığı yer.',
      description:
        'Özgün Mevlevi dergâhında yer alan Konya Mevlânâ Müzesi, Türkiye’nin manevi açıdan en önemli kültürel mekânlarından biri. Mevlânâ Celâleddin-i Rûmî’nin türbesi çevresinde kurulu 13. yüzyıl kompleksi; ikonik Yeşil Kubbe’yi (Kubbe-i Hadra), semahâneyi, kütüphaneyi ve çok sayıda Mevlevi büyüğünün türbesini içeriyor. 1926’dan bu yana müze olan mekân, Mevlânâ’nın sevgi, hoşgörü ve birlik mesajıyla bağ kurmak isteyen iki milyondan fazla ziyaretçiyi her yıl ağırlıyor.',
      sections: [
        'Burada beden bir kaptır. Ruh ise varış noktası.',
        'Mevlânâ Müzesi için benimsenen sergi tasarımı atmosfere odaklanıyor — sema töreninin manevi yükselişini yansıtan, düşünceye davet eden bir yolculuk yaratıyor. Güzergâh dış avluda, ney müziğinden esinlenen ortam ses tasarımıyla başlıyor; türbe odasında giderek yoğunlaşan yumuşak aydınlatmayla Yeşil Kubbe’ye doğru ilerliyor; Mevlânâ süzülmüş altın bir ışık örtüsünün altında burada uyuyor.',
        'Özenle sıralanmış bir aydınlatma düzeni, ziyaretçiler kompleksin derinlerine ilerledikçe kararıyor ve ısınıyor; bedeni, sema töreninin kendisinin uyandırmayı amaçladığı o düşünceli dinginliğe doğru yönlendiriyor.',
        'Gel, gel, ne olursan ol yine gel — kapı açıktır.',
        'Kütüphane ve hat odalarında el yazması reprodüksiyonları, yakından ve acele etmeden okumaya davet eden bir yükseklik ve açıyla sergileniyor — müzenin geri kalanının tören havasına bilinçli bir karşı nota.',
      ],
      specs: ['Dergâh Külliyesi', '2023', 'Konya, Türkiye', '13. yüzyıl', 'Yıllık 2M+', 'Atmosfer Tasarımı ve Ses Ortamı'],
    },
    'antalya-demre-muzesi': {
      tagline:
        'Aziz Nikolaos’un kadim kilisesi — tarihin, inancın ve Noel Baba efsanesinin buluştuğu yer.',
      description:
        'MS 3. yüzyılda inşa edilen Demre’deki (antik Myra) Aziz Nikolaos Kilisesi, Orta Bizans mimarisinin en önemli anıtlarından biri. 4. yüzyılda Myra piskoposu olan Aziz Nikolaos, Hristiyanlığın en saygın azizlerinden biri oldu — efsanesi Avrupa ve Amerika kültürlerinde Noel Baba figürüne evrildi. Müze ve kilise kompleksi eşsiz bir anlatı zorluğu sunuyor: aynı anda hem bir arkeolojik anıt, hem bir hac yeri, hem de sevilen küresel bir folklor geleneğinin başlangıç noktası olan bir mekânı yorumlamak.',
      sections: [
        'Bir azizin hikâyeye, bir hikâyenin küresel bir geleneğe dönüştüğü yer.',
        'Sergi tasarımı aynı anda üç anlatı ipliğini izliyor: kilisenin inşası ve restorasyonunun arkeolojik hikâyesi, tarihi bir piskopos olarak Aziz Nikolaos’un dini biyografisi ve efsanesinin Noel Baba’ya folklorik evrimi. Ziyaretçiler özgün 11. yüzyıl fresk parçalarıyla çağdaş yorumları bir arada görüyor; kadim adanmışlığı modern çocukluk hayretine bağlıyor.',
        'Kırılgan 11. yüzyıl freskleri sıkı biçimde kontrol edilen düşük lüks aydınlatma altında sergilenirken, yakındaki etkileşimli paneller ziyaretçilerin solmuş ayrıntıları dijital olarak “açığa çıkarmasına” izin veriyor — özgünleri korurken merakı da gideriyor.',
        'Tek bir yaşam, bin yıllık efsane ve vermeye devam eden bir armağan.',
        'Girişin yakınındaki kısa film enstalasyonu, Aziz Nikolaos’un tarihi bir piskopostan küresel bir armağan verene dönüşümünü izliyor; genç ziyaretçilere derin katmanlı bir alana erişilebilir bir giriş noktası sunuyor.',
      ],
      specs: ['3.-11. yüzyıl', '2023', 'Demre, Antalya, Türkiye', 'Yıllık 500B+', 'Geçici Liste', 'Sergi Tasarımı ve Anlatı Stratejisi'],
    },
    'istanbul-kariye-muzesi': {
      tagline:
        'Eski sur içinde saklı, Bizans mozaik ve fresk sanatının en güzel örneklerinden biri.',
      description:
        'İstanbul’un eski surları içinde yer alan Kariye Müzesi (Khora Kilisesi), geç Bizans sanatının hayatta kalan en muhteşem örneklerinden bazılarını barındırıyor. Aslen 5. yüzyılda inşa edilen ve 14. yüzyılda Theodoros Metokhites tarafından yeniden yaptırılan yapının duvarları, İsa ve Meryem Ana’nın yaşamını betimleyen altın mozaikler ve canlı frisklerle kaplı. Fetihten sonra camiye çevrilen yapı, 1945’te müze oldu. Sergi zorluğu, bu hazineleri aydınlatırken onları ışık hasarından korumakta yatıyor — açığa çıkarma ile koruma arasında hassas bir denge.',
      sections: [
        'Her mozaik taşı bin yıllık bir adanmışlığı barındırır.',
        'Sergi tasarımı katmanlı bir aydınlatma stratejisi kullanıyor: ortam dolaylı ışık güvenli genel aydınlatma sağlarken, odaklı ve kısılabilir spotlar tek tek mozaik panellerinin en ince ayrıntılarını talep üzerine açığa çıkarıyor. Paraklesion (mezar şapeli) düşünceli bir doruk noktası olarak ele alınıyor — Anastasis freski, dirilişin teolojik simgeciliğini yansıtan, özenle kontrol edilen tek bir ışık huzmesiyle yıkanıyor.',
        'Ziyaretçiler, en kırılgan tavan mozaiklerinin altında grup yoğunluğunu düşük tutacak şekilde ayarlanmış tek yönlü bir güzergâhta yönlendiriliyor; yüzyıllık altın varağı hem ışık hem de nem dalgalanmalarından koruyor.',
        'İmparatorlukları aşan sanat, kırılganlığına saygı gösteren bir ışıkta korunuyor.',
        'Paraklesion’a bitişik küçük bir çalışma odası, yakından incelenebilecek yüksek çözünürlüklü reprodüksiyonlar sunuyor — şapeldeki koruyucu aydınlatmanın bilinçli olarak erişilmez kıldığı ayrıntılar.',
      ],
      specs: ['5.-14. yüzyıl', '2023', 'İstanbul, Türkiye', 'Bizans mozaikleri ve freskleri', 'Yıllık 300B+', 'Koruma Aydınlatması ve Sergi Tasarımı'],
    },
    'istanbul-arkeoloji-muzeleri': {
      tagline:
        'Neoklasik bir başyapıtta barınan, dünyanın en büyük arkeoloji koleksiyonlarından biri.',
      description:
        '1891’de Osman Hamdi Bey tarafından İmparatorluk Müzesi (Müze-i Hümayun) olarak kurulan İstanbul Arkeoloji Müzeleri üç binadan oluşuyor — ana Arkeoloji Müzesi, Eski Şark Eserleri Müzesi ve Çinili Köşk. Tarih öncesi çağdan Osmanlı dönemine uzanan bir milyonu aşkın esere sahip müze; İskender Lahdi, Ağlayan Kadınlar Lahdi ve dünyanın bilinen en eski barış antlaşması olan Kadeş Antlaşması dahil dünyaca ünlü başyapıtları barındırıyor.',
      sections: [
        'Üç binaya ve bir milyon esere yayılan bir imparatorluğun kültürel vizyonu.',
        'Alexandre Vallaury tarafından tasarlanan ana müze binası, İskender Lahdi ve Ağlayan Kadınlar Lahdi’nden esinlenen neoklasik bir cepheye sahip. İç mekân salonları kronolojik olarak düzenlenmiş; ziyaretçileri tarih öncesi Anadolu’dan Hitit, Asur, Babil ve klasik uygarlıklara götürüyor — tek bir mimari mekân içinde on bin yıllık insanlık tarihini kat eden bir yolculuk.',
        'Yeni vitrin sistemleri, İskender Lahdi’nin onlarca yıl sonra ilk kez her açıdan görülebilmesini sağlayacak şekilde tasarlandı; düşük yansımalı cam ve zemine gömülü aydınlatma hiçbir parlama noktası bırakmıyor.',
        'Bu duvarlar arasında uygarlıklar binyıllar boyunca birbirine fısıldar.',
        'Eski Şark Eserleri Müzesi de paralel bir yeniden yorumlama gördü; çivi yazılı tabletleri büyük formatlı çevirilerle eşleştirdi; böylece Kadeş Antlaşması yalnızca hayranlıkla bakılan değil, okunabilen bir metin oldu.',
      ],
      specs: ['35.000 m²', '2023', 'İstanbul, Türkiye', '1.000.000+ eser', 'Yıllık 450B+', 'Sergi Tasarımı ve Uygulama'],
    },
    'anadolu-medeniyetleri-muzesi': {
      tagline:
        'Avrupa’da Yılın Müzesi; Paleolitik’ten Osmanlı dönemine uzanan olağanüstü bir koleksiyon.',
      description:
        'Ankara’nın tarihi Atpazarı semtinde, 15. yüzyıldan kalma iki Osmanlı yapısında — Mahmut Paşa Bedesteni ve Kurşunlu Han — yer alan Anadolu Medeniyetleri Müzesi, dünyanın en önemli arkeoloji koleksiyonlarından birini sunuyor. Paleolitik taş aletlerden Hitit kabartmalarına, Frig ahşap işçiliğinden Urartu takılarına uzanan müze, 1997’de Avrupa’da Yılın Müzesi ödülüne layık görüldü. Osmanlı ticaret mimarisi içindeki eşsiz konumu, müzenin kendi tarihsel katmanları ile barındırdığı eserler arasında bir diyalog yaratıyor.',
      sections: [
        'Anadolu burada nefes alıyor — taşta ve altında, on beş bin yıllık insan çabası.',
        'Sergi tasarımı kronolojik bir sarmalı izliyor; Paleolitik’in derin gölgelerinde başlayıp Osmanlı döneminin aydınlık karmaşıklığına ulaşıyor. Hitit galerileri imparatorluğun anıtsal ölçeğini çağrıştırmak için çarpıcı chiaroscuro aydınlatma kullanıyor; Frig odaları evsel bir yakınlığı ima etmek için sıcak amber tonları benimsiyor; Urartu hazinesi, altının parıltısıyla noktalanan neredeyse karanlık bir mekâna sarılıyor. Her uygarlık kendi atmosferik yorumunu alıyor.',
        'İklim kontrollü vitrinler, müzenin çevresel açıdan en hassas eserleri için özel olarak üretildi; organik ve maden eserlerin koruma standartlarından ödün vermeden sürekli sergilenmesini sağladı.',
        'Bir müzeden fazlası — Anadolu bu duvarların arasında yaşıyor ve nefes alıyor.',
        'Girişin yakınına eklenen dokunsal bir güzergâh — önemli Hitit kabartmalarının döküm reprodüksiyonları — görme engelli ziyaretçiler için tasarlandı; müzenin ödüllü itibarını gerçek bir erişilebilirliğe taşıdı.',
      ],
      specs: ['15.000 m²', '2023', 'Ankara, Türkiye', '200.000+ eser', '1997 Avrupa Yılın Müzesi', 'Sergi Tasarımı ve Uygulama'],
    },
    'ankara-cumhuriyet-muzesi': {
      tagline:
        'Cumhuriyet’in şekillendiği bina; bugün modern Türkiye’nin kuruluş ruhunu koruyan bir müze.',
      description:
        'Cumhuriyet Müzesi, mimar Vedat Tek tarafından 1923’te tasarlanan İkinci Türkiye Büyük Millet Meclisi binasında yer alıyor. 1924’ten 1960’a kadar meclis olarak hizmet veren bu iki katlı taş bina, Mustafa Kemal Atatürk önderliğinde Türkiye Cumhuriyeti’nin kurucu kararlarına tanıklık etti. Mimari ayrıntılar — kemerli pencereler, çini panolar, geniş saçaklar ve Osmanlı ile Selçuklu motifli el boyaması ahşap tavanlar — erken Cumhuriyet döneminin geçiş estetiğini yansıtıyor. Bugün hem bir demokrasi müzesi hem de dönüştürücü bir çağın mimari anıtı olarak duruyor.',
      sections: [
        'Bir milletin kuruluş sözlerini duyan duvarlar hâlâ o gücü yankılıyor.',
        'Sergi tasarımı binanın kendisini başlıca eser olarak ele alıyor. Eski meclis salonu özgün haliyle korunuyor — kürsü, oturma düzeni ve aydınlatma olduğu gibi — yorumlayıcı öğeler ise ince bir biçimde her yere işleniyor. Tarihi konuşmaların ses kayıtları özgün konuşmacı konumundan çalıyor; arşiv fotoğrafları sıralar arasında saydam panellerde süzülüyor; koridorlar Cumhuriyet mevzuatının evrimini belgeler ve eserlerden oluşan bir zaman çizelgesiyle sergiliyor.',
        'Özgün meclis mobilyaları depoya kaldırılmak yerine yerinde korundu; gizli bir cam bariyer artık salonu koruyor, aynı zamanda galerideki her koltuktan engelsiz görüş açısını sürdürüyor.',
        'Tarihe tanıklık eden bir bina, artık tarihin kendisidir.',
        'Bodrum katındaki bir arşiv odası, akademisyenlerin ve ziyaretçi öğrencilerin sayısallaştırılmış meclis kayıtlarına başvurabileceği bir araştırma mekânına dönüştürüldü — müzenin rolünü sergiden aktif yurttaşlık eğitimine taşıdı.',
      ],
      specs: ['2 kat + bodrum', '2023', 'Ankara, Türkiye', 'Meclis: 1924-1960', 'Yıllık 250B+', 'Sergi Tasarımı ve Koruma'],
    },
    'zeugma-mozaik-muzesi': {
      tagline:
        'Dünyanın en büyük mozaik müzesi; efsanevi Çingene Kızı’nın iki bin yıla baktığı yer.',
      description:
        'Gaziantep’teki Zeugma Mozaik Müzesi, dünyanın en büyük antik mozaik koleksiyonunu tek bir çatı altında barındırıyor. 30.000 metrekarelik bir kompleks içinde 2.500 metrekarelik mozaik teşhir alanını kaplayan müze; Birecik Barajı’nın suları altında kalmadan önce antik Zeugma kentinden kurtarılan olağanüstü Roma dönemi taban mozaiklerini, heykelleri ve friskleri sergiliyor. Müzenin en ünlü eseri — Çingene Kızı mozaiği — Türk kültürel mirasının bir simgesi haline geldi.',
      sections: [
        'İki bin yıllık bir sessizlik, taş tesseralarda hayata döndü.',
        'Sergi tasarımı karanlık ile açığa çıkarma arasında çarpıcı bir karşıtlık kullanıyor. Her mozaik paneli mat siyah duvarlar önünde ışıldayan bir resim gibi sunuluyor; hassas biçimde kalibre edilmiş LED spotlar, kadim taşın ince renk geçişlerini fotokimyasal hasar riski olmadan açığa çıkarıyor. Çingene Kızı kendi düşünce odasına kavuşuyor — ziyaretçilerin bakışıyla yalnız kaldığı karanlık bir oda; bu tek parçanın neden tüm dünyanın hayal gücünü yakaladığını anlatan bir mekân.',
        'Kurtarma arkeolojisi müzenin kendi anlatısını besliyor: özel bir galeri, Birecik Barajı’nın yükselen sularına karşı verilen yarışı belgeliyor; ziyaretçilere bu mozaiklerin neden burada var olduğunun bağlamını sunuyor.',
        'Her tessera, zamana kaybolmuş bir hikâyenin parçasıdır — ta ki şimdiye dek.',
        'Cam duvarların ardından görülebilen bir koruma atölyesi, ziyaretçilerin süregelen restorasyon çalışmalarını gerçek zamanlı izlemesine olanak tanıyor; korumanın görünmez emeğini serginin bir parçası hâline getiriyor.',
      ],
      specs: ['30.000 m²', '2023', 'Gaziantep, Türkiye', '2.500 m² mozaik', 'Yıllık 200B+', 'Sergi Tasarımı ve Uygulama'],
    },
    'troya-muzesi': {
      tagline:
        '3.000 yıllık bir destanı çerçeveleyen, ödüllü çağdaş müze mimarisi.',
      description:
        'Antik Troya’nın UNESCO Dünya Mirası Alanı’nın girişinde yer alan Troya Müzesi, 2018’de uluslararası beğeniyle açıldı. Pas rengi taş ve camdan oluşan kübik, çok katlı yapısı; MÖ 3.000’den Roma dönemine uzanan Troya’nın dokuz arkeolojik katmanından eserleri barındırıyor. Yalın Mimarlık tarafından tasarlanan yapı, Avrupa Müze Akademisi’nin Özel Övgü ödülünü kazandı; Homeros efsanesi ile çağdaş müzecilik arasında güçlü bir diyalog kurdu.',
      sections: [
        'Efsanenin arkeolojiye, arkeolojinin mimariye dönüştüğü yer.',
        'Müzenin dört katı Troya’nın dokuz katmanına karşılık geliyor — ziyaretçiler mekânda yükselirken zamanda aşağı iniyor. Etkileşimli ekranlar, üç boyutlu rekonstrüksiyonlar ve sürükleyici ses ortamları arkeolojik veriyi çarpıcı bir anlatıya dönüştürüyor: Tunç Çağı salonunda çarpışan bronzun sesi, Hitit galerisinde diplomatik yazışmaların fısıltısı, Roma odalarında evsel yaşamın sıcaklığı.',
        'Her katın malzeme paleti kendi tarihsel dönemine göre ince ince değişiyor — Tunç Çağı’nı yansıtan ham korten, Helenistik dönem için cilalı taş — müzenin “mimarinin kendisi zamanı anlatır” fikrini pekiştiriyor.',
        'Troya bir taş şiirdir — her katman yeni bir dize.',
        'Bir çatı terası, arkeolojik alana doğrudan bir görüş hattı sunuyor; müzenin özenle kurgulanmış iç mekânı ile ona amacını veren kazı arasındaki döngüyü tamamlıyor.',
      ],
      specs: ['12.000 m²', '2024', 'Çanakkale, Türkiye', '4', 'Avrupa Müze Akademisi 2020', 'Sergi Tasarımı ve Uygulama'],
    },
    'gobeklitepe-oren-yeri': {
      tagline:
        'Tarihin sıfır noktası: 12.000 yıllık tapınaklar, insanlığın ilk anıtsal mimarisi.',
      description:
        'Bir UNESCO Dünya Mirası Alanı olan Göbeklitepe, insanlık tarihinde bilinen en eski anıtsal tapınak kompleksi. MÖ 10.000’e tarihlenen, hayvan kabartmalarıyla bezenmiş T biçimli megalitik dikili taşları ve dairesel yapıları, Neolitik Devrim’e dair anlayışımızı kökten değiştirdi. Alan, son on yılların en iddialı arkeolojik koruma ve ziyaretçi deneyimi projelerinden birine sahip — koruyucu bir örtü, dünya standartlarında bir ziyaretçi merkezi ve ziyaretçilerin piramitlerden altı bin yıl önce inşa edilmiş yapıların huzurunda durmasını sağlayan özenle tasarlanmış güzergâhlar.',
      sections: [
        'Burası tarihin başladığı yer değil — tarihin yeniden yazıldığı yer.',
        'Ziyaretçi deneyimi tasarımı, Göbeklitepe’nin bilimsel önemini sürükleyici medyayla anlatan modern yorumlama merkezinden arkeolojik alanın kendisine uzanan bir yolculuğu kurguluyor. Koruyucu örtünün altında ziyaretçiler dört ana kazı alanını yakından deneyimliyor: tilki, yılan, yaban domuzu, turna ve akrep kabartmalarıyla işlenmiş, Neolitik insanların zengin simgesel dünyasını ortaya koyan T biçimli dikili taşlar. Güzergâh tasarımı, ziyaretçilerin taşlardan asla daha kalabalık olmamasını sağlıyor — böylesine kadim bir alanın gerektirdiği düşünceli atmosferi koruyor.',
        'Yükseltilmiş yürüme yolları ziyaretçileri megalitlerden sabit ve saygılı bir mesafede tutuyor; yönlü ses ise arkeolojik alanı tek bir tabela ya da panel rahatsız etmeden yorumlama sağlıyor.',
        'Önce tapınaklar, sonra şehirler geldi — insanlığın en büyük sırrı burada.',
        'Üstteki iklim kontrollü örtü, dikili taşları erozyondan korurken görsel olarak gözden uzak kalıyor — ziyaretçinin görüş hattından tamamen silinecek şekilde tasarlandı.',
      ],
      specs: ['22 dönüm', '2024', 'Şanlıurfa, Türkiye', 'MÖ 10.000', 'Dünya Mirası 2018', 'Ziyaretçi Deneyimi ve Sergi Tasarımı'],
    },
    'nevsehir-hacibektas-muzesi': {
      tagline:
        'Hacı Bektaş Veli’nin 13. yüzyıl dergâhı; Anadolu Aleviliğinin manevi ve kültürel mirasını koruyor.',
      description:
        'Türk mutasavvıf Hacı Bektaş Veli tarafından 13. yüzyılda kurulan Hacı Bektaş Veli Külliyesi, Anadolu’nun manevi ve kültürel açıdan en önemli mekânlarından biri. Yüzyıllar boyunca eklemeler ve restorasyonlarla genişleyen külliye; türbeyi, semahâneyi, aşevini, avluyu ve çok sayıda tarihi yapıyı içeriyor. Dergâhların kapatılmasının ardından 1964’te müzeye çevrilen mekân, bugün hem bir etnografya müzesi hem de yaşayan bir hac yeri olarak her yıl 200.000’den fazla ziyaretçi ağırlıyor.',
      sections: [
        '700 yıllık bir hoşgörü mesajı, taşta ve ruhta korunuyor.',
        'Sergi tasarımı külliyeyi bir dizi oda olarak değil, manevi bir yolculuk olarak ele alıyor. Ziyaretçiler anıtsal kapıdan girip avludan, ünlü “nimetin niyazın hakkı” felsefesinin uygulandığı aşevinden, kutsal dönme töreninin yapıldığı semahâneden ve son olarak Hacı Bektaş Veli’nin yattığı türbe odasından geçiyor. Her mekân özgün işleviyle yorumlanıyor — aşevi ekmek kokuyor, semahâne ney sesiyle yankılanıyor, türbe sessizliğe gömülüyor.',
        '700 yıllık özgün ahşap tavanlar yüzeyleri değiştirilmeden yapısal olarak güçlendirildi; böylece aşevi ve semahâne müze işlevlerinin yanında tören amaçlı aktif kullanımda kalabildi.',
        'Gelin canlar bir olalım, dost olalım — mesaj yedi yüzyıl sonra da duruyor.',
        'Mevsimsel hac hareketlerine göre ayarlanan ney müziği ve sessiz sohbetten oluşan bir avlu ses ortamı, mekânın yaşayan manevi pratiğini ziyaretçi deneyiminin içine taşıyor.',
      ],
      specs: ['Dergâh Külliyesi', '2023', 'Nevşehir, Türkiye', '13. yüzyıl', 'Yıllık 200B+', 'Sergi Tasarımı ve Manevi Atmosfer'],
    },
  },
};

const de: ProjectContentPack = {
  categories: {
    Museum: 'Museum',
    Exhibition: 'Ausstellung',
    Interior: 'Innenraum',
    Cultural: 'Kultur',
    Competition: 'Wettbewerb',
    Research: 'Forschung',
    International: 'International',
  },
  specLabels: {
    Area: 'Fläche',
    Year: 'Jahr',
    Location: 'Ort',
    Status: 'Status',
    Role: 'Rolle',
    Built: 'Erbaut',
    Visitors: 'Besucher',
    Duration: 'Dauer',
    Rooms: 'Räume',
    Period: 'Epoche',
    Founded: 'Gegründet',
    Award: 'Auszeichnung',
    Collection: 'Sammlung',
    UNESCO: 'UNESCO',
    Dating: 'Datierung',
    Floors: 'Etagen',
    Artwork: 'Kunstwerke',
    Building: 'Gebäude',
    Complex: 'Komplex',
    Mosaic: 'Mosaik',
  },
};

const it: ProjectContentPack = {
  categories: {
    Museum: 'Museo',
    Exhibition: 'Mostra',
    Interior: 'Interni',
    Cultural: 'Culturale',
    Competition: 'Concorso',
    Research: 'Ricerca',
    International: 'Internazionale',
  },
  specLabels: {
    Area: 'Superficie',
    Year: 'Anno',
    Location: 'Luogo',
    Status: 'Stato',
    Role: 'Ruolo',
    Built: 'Costruito',
    Visitors: 'Visitatori',
    Duration: 'Durata',
    Rooms: 'Stanze',
    Period: 'Periodo',
    Founded: 'Fondato',
    Award: 'Premio',
    Collection: 'Collezione',
    UNESCO: 'UNESCO',
    Dating: 'Datazione',
    Floors: 'Piani',
    Artwork: 'Opere',
    Building: 'Edificio',
    Complex: 'Complesso',
    Mosaic: 'Mosaico',
  },
};

const ar: ProjectContentPack = {
  categories: {
    Museum: 'متحف',
    Exhibition: 'معرض',
    Interior: 'تصميم داخلي',
    Cultural: 'ثقافي',
    Competition: 'مسابقة',
    Research: 'أبحاث',
    International: 'دولي',
  },
  specLabels: {
    Area: 'المساحة',
    Year: 'السنة',
    Location: 'الموقع',
    Status: 'الحالة',
    Role: 'الدور',
    Built: 'بُني',
    Visitors: 'الزوار',
    Duration: 'المدة',
    Rooms: 'الغرف',
    Period: 'الفترة',
    Founded: 'التأسيس',
    Award: 'الجائزة',
    Collection: 'المجموعة',
    UNESCO: 'اليونسكو',
    Dating: 'التأريخ',
    Floors: 'الطوابق',
    Artwork: 'الأعمال الفنية',
    Building: 'المبنى',
    Complex: 'المجمع',
    Mosaic: 'الفسيفساء',
  },
};

export const projectContent: Record<string, ProjectContentPack> = { tr, de, it, ar };
