import { writable } from 'svelte/store';

export const currentLang = writable('en');

export const translations = {
  en: {
    nav: { home: 'Home', about: 'About', services: 'Services', menu: 'Menu', journal: 'Journal', contact: 'Contact' },
    hero: { title: 'Anatolian Soul, Parisian Touch', subtitle: 'Experience the quiet healing of artisanal cuisine.' },
    footer: { rights: 'All rights reserved.', developed: 'Developed by' }
  },
  tr: {
    nav: { home: 'Ana Sayfa', about: 'Hakkımda', services: 'Hizmetler', menu: 'Menü', journal: 'Günce', contact: 'İletişim' },
    hero: { title: 'Anadolu Ruhu, Paris Dokunuşu', subtitle: 'Artizan mutfağın sessiz iyileştirici gücünü keşfedin.' },
    footer: { rights: 'Tüm hakları saklıdır.', developed: 'Geliştirici:' }
  },
  fr: {
    nav: { home: 'Accueil', about: 'À Propos', services: 'Services', menu: 'Menu', journal: 'Journal', contact: 'Contact' },
    hero: { title: 'Âme Anatolienne, Touche Parisienne', subtitle: 'Découvrez la guérison silencieuse de la cuisine artisanale.' },
    footer: { rights: 'Tous droits réservés.', developed: 'Développé par' }
  }
};
