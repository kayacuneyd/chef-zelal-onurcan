import { writable } from 'svelte/store';

export type Locale = 'en' | 'tr' | 'fr';

export const locales: { code: Locale; flag: string; label: string }[] = [
  { code: 'tr', flag: '🇹🇷', label: 'Türkçe' },
  { code: 'en', flag: '🇬🇧', label: 'English' },
  { code: 'fr', flag: '🇫🇷', label: 'Français' }
];

export const currentLang = writable<Locale>('en');

export const translations: Record<
  Locale,
  {
    nav: { home: string; about: string; services: string; menu: string; journal: string; contact: string };
    hero: { pretitle: string; title: string; subtitle: string; cta: string };
    footer: { rights: string; developed: string; explore: string; contact: string; brand: string; desc: string };
    contact: {
      heading: string;
      subheading: string;
      name: string;
      email: string;
      guests: string;
      date: string;
      message: string;
      submit: string;
      successTitle: string;
      successBody: string;
      successRetry: string;
      error: string;
    };
    menu: { heading: string; subheading: string; categories: { Starters: string; Mains: string; Desserts: string }; empty: string };
    journal: { heading: string; subheading: string; empty: string; read: string };
    services: { heading: string; subheading: string; cta: string };
    about: { heading: string; subheading: string; philosophy: string };
  }
> = {
  en: {
    nav: { home: 'Home', about: 'About', services: 'Services', menu: 'Menu', journal: 'Journal', contact: 'Contact' },
    hero: {
      pretitle: 'Quiet Healing • Modern Mosaic',
      title: 'Anatolian Soul, Parisian Touch',
      subtitle: 'Experience the quiet healing of artisanal cuisine.',
      cta: 'Reserve Your Table'
    },
    footer: {
      rights: 'All rights reserved.',
      developed: 'Developed by',
      explore: 'Explore',
      contact: 'Contact',
      brand: 'Chef Zelal',
      desc: 'Private Chef & Culinary Consultant based in Paris. Bringing the warmth of Anatolia to your table.'
    },
    contact: {
      heading: 'Start Your Journey',
      subheading: "Whether it's an intimate dinner, a consulting project, or a simple question, Chef Zelal is ready to listen.",
      name: 'Name',
      email: 'Email',
      guests: 'Guests (Optional)',
      date: 'Preferred Date (Optional)',
      message: 'Message',
      submit: 'Send Message',
      successTitle: 'Message Sent',
      successBody: 'Thank you for reaching out. We will get back to you shortly.',
      successRetry: 'Send another message',
      error: 'Something went wrong. Please try again.'
    },
    menu: {
      heading: 'Seasonal Creations',
      subheading: 'Ingredients at their peak—quietly plated for slow, healing dining.',
      categories: { Starters: 'Starters', Mains: 'Mains', Desserts: 'Desserts' },
      empty: 'No dishes for this season yet. Please check back soon.'
    },
    journal: {
      heading: 'The Journal',
      subheading: 'Recipes, stories, and notes from the kitchen.',
      empty: 'No journal entries yet. New stories are simmering—check back soon.',
      read: 'Read Story →'
    },
    services: {
      heading: 'Culinary Services',
      subheading: 'Tailored experiences that bridge Anatolian soul with Parisian elegance.',
      cta: 'Book This Service'
    },
    about: {
      heading: 'My Journey: From Kasaba to Paris',
      subheading: 'A path shaped by family kitchens, academic rigor, and calm, intentional hospitality.',
      philosophy: 'Quiet healing is the patience to let ingredients breathe, stories simmer, and guests feel held.'
    }
  },
  tr: {
    nav: { home: 'Ana Sayfa', about: 'Hakkımda', services: 'Hizmetler', menu: 'Menü', journal: 'Günce', contact: 'İletişim' },
    hero: {
      pretitle: 'Sessiz İyileşme • Modern Mozaik',
      title: 'Anadolu Ruhu, Paris Dokunuşu',
      subtitle: 'Artizan mutfağın sessiz iyileştirici gücünü keşfedin.',
      cta: 'Masa Ayırt'
    },
    footer: {
      rights: 'Tüm hakları saklıdır.',
      developed: 'Geliştirici',
      explore: 'Keşfet',
      contact: 'İletişim',
      brand: 'Şef Zelal',
      desc: 'Paris merkezli Özel Şef & Mutfak Danışmanı. Anadolu’nun sıcaklığını masanıza getiriyor.'
    },
    contact: {
      heading: 'Yolculuğunu Başlat',
      subheading: 'İster samimi bir akşam yemeği, ister danışmanlık projesi, ister bir soru olsun; Şef Zelal seni dinlemeye hazır.',
      name: 'İsim',
      email: 'E-posta',
      guests: 'Kişi Sayısı (Opsiyonel)',
      date: 'Tercih Edilen Tarih (Opsiyonel)',
      message: 'Mesaj',
      submit: 'Mesaj Gönder',
      successTitle: 'Mesaj Gönderildi',
      successBody: 'Bizimle iletişime geçtiğin için teşekkürler. En kısa sürede döneceğiz.',
      successRetry: 'Yeni bir mesaj gönder',
      error: 'Bir şeyler ters gitti. Lütfen tekrar dene.'
    },
    menu: {
      heading: 'Mevsimlik Dokunuşlar',
      subheading: 'Zirvedeki malzemeler—yavaş ve iyileştirici tabaklar.',
      categories: { Starters: 'Başlangıçlar', Mains: 'Ana Yemekler', Desserts: 'Tatlılar' },
      empty: 'Bu mevsime ait tabak yok. Lütfen tekrar kontrol et.'
    },
    journal: {
      heading: 'Günce',
      subheading: 'Mutfaktan tarifler, hikayeler ve notlar.',
      empty: 'Henüz içerik yok. Yeni hikayeler yolda—yakında tekrar bak.',
      read: 'Hikayeyi Oku →'
    },
    services: {
      heading: 'Aşçılık Hizmetleri',
      subheading: 'Anadolu ruhunu Paris zarafetiyle buluşturan özel deneyimler.',
      cta: 'Rezervasyon Yap'
    },
    about: {
      heading: 'Yolculuğum: Kasaba’dan Paris’e',
      subheading: 'Aile mutfakları, akademik disiplin ve sakin, niyetli misafirperverlik.',
      philosophy: 'Sessiz iyileşme, malzemelere nefes aldırmak, hikayeleri demlendirmek ve misafirleri güvende hissettirmektir.'
    }
  },
  fr: {
    nav: { home: 'Accueil', about: 'À Propos', services: 'Services', menu: 'Menu', journal: 'Journal', contact: 'Contact' },
    hero: {
      pretitle: 'Guérison Silencieuse • Mosaïque Moderne',
      title: 'Âme Anatolienne, Touche Parisienne',
      subtitle: 'Découvrez le pouvoir apaisant de la cuisine artisanale.',
      cta: 'Réserver une Table'
    },
    footer: {
      rights: 'Tous droits réservés.',
      developed: 'Développé par',
      explore: 'Explorer',
      contact: 'Contact',
      brand: 'Chef Zelal',
      desc: 'Chef privée et consultante culinaire à Paris. La chaleur anatolienne à votre table.'
    },
    contact: {
      heading: 'Commencez Votre Voyage',
      subheading: 'Dîner intime, projet de conseil ou simple question : Chef Zelal est à votre écoute.',
      name: 'Nom',
      email: 'E-mail',
      guests: 'Convives (Optionnel)',
      date: 'Date souhaitée (Optionnel)',
      message: 'Message',
      submit: 'Envoyer',
      successTitle: 'Message Envoyé',
      successBody: 'Merci pour votre message. Nous reviendrons vers vous rapidement.',
      successRetry: 'Envoyer un autre message',
      error: 'Une erreur est survenue. Veuillez réessayer.'
    },
    menu: {
      heading: 'Créations de Saison',
      subheading: 'Des produits à leur apogée—dressés avec douceur pour une table apaisante.',
      categories: { Starters: 'Entrées', Mains: 'Plats', Desserts: 'Desserts' },
      empty: "Pas de plats pour cette saison. Revenez bientôt."
    },
    journal: {
      heading: 'Le Journal',
      subheading: 'Recettes, histoires et notes de la cuisine.',
      empty: 'Aucun article pour le moment. De nouvelles histoires mijotent—revenez vite.',
      read: 'Lire l’histoire →'
    },
    services: {
      heading: 'Services Culinaires',
      subheading: 'Des expériences sur-mesure qui relient âme anatolienne et élégance parisienne.',
      cta: 'Réserver ce service'
    },
    about: {
      heading: 'Mon Parcours : De Kasaba à Paris',
      subheading: 'Entre cuisines familiales, rigueur académique et hospitalité sereine.',
      philosophy: 'La guérison silencieuse, c’est laisser respirer les ingrédients, mijoter les histoires et rassurer les convives.'
    }
  }
};
