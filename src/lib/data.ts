import type { Locale } from '$lib/stores';

export const heroImage =
  'https://d1hdnpfpyy58x9.cloudfront.net/uploads/images/cache/big/10/06/42/1006423.jpg,w_350,h_350,c_1,q_100,fd_1,e_.webp';

type MenuItem = {
  id: string;
  title: string;
  description: string;
  price: number;
  category: 'Starters' | 'Mains' | 'Desserts';
  imageUrl?: string;
};

type BlogPost = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  imageUrl: string;
};

type Service = {
  id: string;
  title: string;
  description: string;
  image?: string;
};

type Milestone = {
  year: string;
  title: string;
  description: string;
  image: string;
};

export const menuItems: Record<Locale, MenuItem[]> = {
  en: [
    { id: 'starter-1', title: 'Imam Bayildi à la Provençale', description: 'Smoked eggplant, confit tomato, basil oil, toasted pine nuts.', price: 18, category: 'Starters' },
    { id: 'starter-2', title: 'Çerkez Chicken Mille-Feuille', description: 'Walnut velouté, crisp feuille de brick, pomegranate molasses.', price: 19, category: 'Starters' },
    { id: 'starter-3', title: 'Aegean Sea Tartare', description: 'Amberjack, sumac shallot, citrus pearls, dill emulsion.', price: 22, category: 'Starters' },
    { id: 'starter-4', title: 'Anatolian Onion Soup Gratinée', description: 'Caramelized onions, kaşar gratin, thyme brioche crouton.', price: 16, category: 'Starters' },
    { id: 'main-1', title: 'Duck Confit with Pomegranate Glaze', description: 'Charred leek, cracked bulgur, anisette jus.', price: 34, category: 'Mains' },
    { id: 'main-2', title: 'Raki-Poached Turbot', description: 'Saffron fennel, mussel velouté, bronze fennel fronds.', price: 38, category: 'Mains' },
    { id: 'main-3', title: 'Lamb Saddle “Cappadocia”', description: 'Smoked yogurt, roasted apricot, mint pistou, lavash crumble.', price: 36, category: 'Mains' },
    { id: 'main-4', title: 'Charcoal Manti Agnolotti', description: 'Brown butter sumac, strained yogurt, Aleppo pepper oil.', price: 28, category: 'Mains' },
    { id: 'dessert-1', title: 'Baklava Paris-Brest', description: 'Pistachio praline crémeux, orange blossom chantilly.', price: 14, category: 'Desserts' },
    { id: 'dessert-2', title: 'Mastic Panna Cotta', description: 'Rosehip gel, sesame sable, honeyed figs.', price: 13, category: 'Desserts' },
    { id: 'dessert-3', title: 'Çay & Chocolate Marquise', description: 'Black tea ganache, sour cherry compote, tahini crumble.', price: 15, category: 'Desserts' },
    { id: 'dessert-4', title: 'Sütlaç Brûlée', description: 'Vanilla rice pudding, burnt sugar crust, saffron poached pear.', price: 12, category: 'Desserts' }
  ],
  tr: [
    { id: 'starter-1', title: 'İmam Bayıldı à la Provençale', description: 'Füme patlıcan, konfi domates, fesleğen yağı, çam fıstığı.', price: 18, category: 'Starters' },
    { id: 'starter-2', title: 'Çerkez Tavuk Mille-Feuille', description: 'Cevizli velüte, çıtır yufka, nar ekşisi.', price: 19, category: 'Starters' },
    { id: 'starter-3', title: 'Ege Deniz Tartarı', description: 'Lagos, sumaklı arpacık, narenciye incileri, dereotu emülsiyon.', price: 22, category: 'Starters' },
    { id: 'starter-4', title: 'Anadolu Soğan Çorbası Gratin', description: 'Karamelize soğan, kaşar gratin, kekikli briyoş kruton.', price: 16, category: 'Starters' },
    { id: 'main-1', title: 'Nar Soslu Konfi Ördek', description: 'Köz pırasa, kırık bulgur, anasonlu jus.', price: 34, category: 'Mains' },
    { id: 'main-2', title: 'Rakılı Kalkan', description: 'Safranlı rezene, midye velüte, rezene yaprağı.', price: 38, category: 'Mains' },
    { id: 'main-3', title: 'Kapadokya Kuzu Sırtı', description: 'Tütsülenmiş yoğurt, fırın kayısı, naneli pistou, lavaş kırığı.', price: 36, category: 'Mains' },
    { id: 'main-4', title: 'Kömür Manti Agnolotti', description: 'Tereyağlı sumak, süzme yoğurt, Urfa biber yağı.', price: 28, category: 'Mains' },
    { id: 'dessert-1', title: 'Baklava Paris-Brest', description: 'Antep fıstığı pralin krem, portakal çiçeği kreması.', price: 14, category: 'Desserts' },
    { id: 'dessert-2', title: 'Sakızlı Panna Cotta', description: 'Kuşburnu jöle, susam sable, ballı incir.', price: 13, category: 'Desserts' },
    { id: 'dessert-3', title: 'Çay & Çikolata Marquise', description: 'Siyah çay ganaj, vişne kompostosu, tahin kıtır.', price: 15, category: 'Desserts' },
    { id: 'dessert-4', title: 'Sütlaç Brûlée', description: 'Vanilyalı sütlaç, yanık şeker kabuğu, safranlı armut.', price: 12, category: 'Desserts' }
  ],
  fr: [
    { id: 'starter-1', title: 'Imam Bayildi à la Provençale', description: 'Aubergine fumée, tomate confite, huile de basilic, pignons.', price: 18, category: 'Starters' },
    { id: 'starter-2', title: 'Poulet Circassien Mille-Feuille', description: 'Velouté de noix, brick croustillante, mélasse de grenade.', price: 19, category: 'Starters' },
    { id: 'starter-3', title: 'Tartare Mer Égée', description: 'Sériole, échalote au sumac, perles d’agrumes, émulsion d’aneth.', price: 22, category: 'Starters' },
    { id: 'starter-4', title: 'Soupe d’Oignon Anatolienne Gratinée', description: 'Oignons caramélisés, gratin de kaşar, croûton brioché au thym.', price: 16, category: 'Starters' },
    { id: 'main-1', title: 'Confit de Canard, Glaçage à la Grenade', description: 'Poireau brûlé, boulgour concassé, jus à l’anisette.', price: 34, category: 'Mains' },
    { id: 'main-2', title: 'Turbot au Rakı', description: 'Fenouil au safran, velouté de moules, sommités de fenouil.', price: 38, category: 'Mains' },
    { id: 'main-3', title: 'Selle d’Agneau “Cappadoce”', description: 'Yaourt fumé, abricot rôti, pistou de menthe, crumble de lavash.', price: 36, category: 'Mains' },
    { id: 'main-4', title: 'Agnolotti Manti au Charbon', description: 'Beurre noisette au sumac, yaourt égoutté, huile de piment d’Alep.', price: 28, category: 'Mains' },
    { id: 'dessert-1', title: 'Baklava Paris-Brest', description: 'Praliné pistache, chantilly à la fleur d’oranger.', price: 14, category: 'Desserts' },
    { id: 'dessert-2', title: 'Panna Cotta au Mastiha', description: 'Gelée d’églantier, sablé au sésame, figues au miel.', price: 13, category: 'Desserts' },
    { id: 'dessert-3', title: 'Marquise Thé Noir & Chocolat', description: 'Ganache au thé noir, compotée de griottes, crumble au tahini.', price: 15, category: 'Desserts' },
    { id: 'dessert-4', title: 'Sütlaç Brûlée', description: 'Riz au lait vanille, croûte caramélisée, poire au safran.', price: 12, category: 'Desserts' }
  ]
};

export const blogPosts: Record<Locale, BlogPost[]> = {
  en: [
    {
      id: 'post-1',
      title: 'Stone Fruits & Sumac: A Summer Study',
      slug: 'stone-fruits-sumac',
      excerpt: 'Balancing sweet nectarines with tart sumac and anise for a refreshing mezze.',
      date: '2024-07-18',
      imageUrl: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 'post-2',
      title: 'Slow Fire, Quiet Healing',
      slug: 'slow-fire-quiet-healing',
      excerpt: 'How low-and-slow cooking mirrors mindful hospitality in Anatolia and Paris.',
      date: '2024-05-02',
      imageUrl: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 'post-3',
      title: 'From Raki to Pastis: A Bridge of Aromatics',
      slug: 'raki-to-pastis',
      excerpt: 'Exploring anise spirits in sauces, desserts, and seafood pairings.',
      date: '2024-02-11',
      imageUrl: 'https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=1200&q=80'
    }
  ],
  tr: [
    {
      id: 'post-1',
      title: 'Yazın Taş Meyveleri & Sumak',
      slug: 'yazin-tas-meyveleri-sumak',
      excerpt: 'Nektarin tatlılığı, sumak ekşisi ve anasonu dengeleyen ferah bir meze.',
      date: '2024-07-18',
      imageUrl: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 'post-2',
      title: 'Kısık Ateş, Sessiz İyileşme',
      slug: 'kisik-ates-sessiz-iyilesme',
      excerpt: 'Düşük ısıda pişirmenin, Anadolu ve Paris misafirperverliğiyle buluşması.',
      date: '2024-05-02',
      imageUrl: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 'post-3',
      title: 'Rakıdan Pastis’e: Aroma Köprüsü',
      slug: 'rakidan-pastise',
      excerpt: 'Anasonlu içkilerin sos, tatlı ve deniz ürünü eşleşmelerinde kullanımı.',
      date: '2024-02-11',
      imageUrl: 'https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=1200&q=80'
    }
  ],
  fr: [
    {
      id: 'post-1',
      title: 'Fruits à Noyau & Sumac: Étude d’Été',
      slug: 'fruits-sumac-ete',
      excerpt: 'Nectarines sucrées, sumac acidulé et anis pour un mezze rafraîchissant.',
      date: '2024-07-18',
      imageUrl: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 'post-2',
      title: 'Feu Doux, Guérison Silencieuse',
      slug: 'feu-doux-guerison',
      excerpt: 'La cuisson lente comme miroir d’une hospitalité attentive entre Anatolie et Paris.',
      date: '2024-05-02',
      imageUrl: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 'post-3',
      title: 'Du Rakı au Pastis : Pont Aromatique',
      slug: 'raki-au-pastis',
      excerpt: 'Spiritueux anisés dans sauces, desserts et accords fruits de mer.',
      date: '2024-02-11',
      imageUrl: 'https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=1200&q=80'
    }
  ]
};

export const services: Record<Locale, Service[]> = {
  en: [
    { id: 'service-1', title: 'Private Chef', description: 'Tailored in-home dining with seasonal menus and tableside storytelling.' },
    { id: 'service-2', title: 'Catering', description: 'Boutique catering for gatherings, brand launches, and cultural events.' },
    { id: 'service-3', title: 'Workshops', description: 'Hands-on sessions on Modern Turkish cuisine, plating, and flavor balance.' }
  ],
  tr: [
    { id: 'service-1', title: 'Özel Şef', description: 'Mevsimlik menülerle evde özel yemek ve masabaşı hikaye anlatımı.' },
    { id: 'service-2', title: 'Catering', description: 'Butik davetler, marka lansmanları ve kültürel etkinlikler için catering.' },
    { id: 'service-3', title: 'Atölyeler', description: 'Modern Türk mutfağı, tabaklama ve lezzet dengesi üzerine uygulamalı seanslar.' }
  ],
  fr: [
    { id: 'service-1', title: 'Chef Privée', description: 'Dîners sur-mesure à domicile avec menus de saison et histoires à table.' },
    { id: 'service-2', title: 'Traiteur', description: 'Catering boutique pour réceptions, lancements de marque et événements culturels.' },
    { id: 'service-3', title: 'Ateliers', description: 'Sessions pratiques sur la cuisine turque moderne, dressage et équilibre des saveurs.' }
  ]
};

export const aboutMilestones: Record<Locale, Milestone[]> = {
  en: [
    { year: '1996', title: 'Roots & Beginnings', description: 'Born in London to a family from Tunceli. The culinary heritage was already in my DNA.', image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=800' },
    { year: '2010s', title: 'The Kasaba Legacy', description: 'Grew up in the heat of "Kasaba Steakhouse", learning discipline, operations, and the art of meat.', image: 'https://images.unsplash.com/photo-1544025162-d76690b67f61?auto=format&fit=crop&q=80&w=800' },
    { year: '2019', title: 'Academic Foundation', description: 'Graduated from Istanbul Bilgi University, combining practical skills with academic theory.', image: 'https://images.unsplash.com/photo-1556910103-1c02745a30bf?auto=format&fit=crop&q=80&w=800' },
    { year: '2021-2023', title: 'High Performance', description: 'Private Chef for Nando De Colo—performance nutrition, privacy, and adaptability.', image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=800' },
    { year: 'Present', title: 'Parisian Chapter', description: 'Sous Chef at Griffon, Consultant at Republic of Coffee. Anatolian soul meets Parisian culture.', image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=800' }
  ],
  tr: [
    { year: '1996', title: 'Kökler & Başlangıçlar', description: 'Londra’da, Tuncelili bir ailede doğdu. Mutfak mirası DNA’mdaydı.', image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=800' },
    { year: '2010s', title: 'Kasaba Mirası', description: '"Kasaba Steakhouse" sıcaklığında büyüdü; disiplin, operasyon ve eti öğrendi.', image: 'https://images.unsplash.com/photo-1544025162-d76690b67f61?auto=format&fit=crop&q=80&w=800' },
    { year: '2019', title: 'Akademik Temel', description: 'İstanbul Bilgi Üniversitesi Gastronomi mezunu; pratiği teoriyle birleştirdi.', image: 'https://images.unsplash.com/photo-1556910103-1c02745a30bf?auto=format&fit=crop&q=80&w=800' },
    { year: '2021-2023', title: 'Yüksek Performans', description: 'Nando De Colo’ya Özel Şef; performans beslenmesi, mahremiyet ve adaptasyon.', image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=800' },
    { year: 'Günümüz', title: 'Paris Bölümü', description: 'Griffon’da Sous Chef, Republic of Coffee’de danışman. Anadolu ruhu Paris kültürüyle buluşuyor.', image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=800' }
  ],
  fr: [
    { year: '1996', title: 'Racines & Débuts', description: 'Né à Londres, famille de Tunceli. L’héritage culinaire était déjà là.', image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=800' },
    { year: '2010s', title: 'L’Héritage Kasaba', description: 'Grandie dans la chaleur du "Kasaba Steakhouse" : discipline, opérations, art de la viande.', image: 'https://images.unsplash.com/photo-1544025162-d76690b67f61?auto=format&fit=crop&q=80&w=800' },
    { year: '2019', title: 'Fondation Académique', description: 'Diplômée de l’Université Bilgi : pratique et théorie réunies.', image: 'https://images.unsplash.com/photo-1556910103-1c02745a30bf?auto=format&fit=crop&q=80&w=800' },
    { year: '2021-2023', title: 'Haute Performance', description: 'Chef privée pour Nando De Colo : nutrition, discrétion, adaptabilité.', image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=800' },
    { year: 'Présent', title: 'Chapitre Parisien', description: 'Sous-chef chez Griffon, consultante chez Republic of Coffee. Âme anatolienne, culture parisienne.', image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=800' }
  ]
};
