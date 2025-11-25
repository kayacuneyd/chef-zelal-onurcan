<script lang="ts">
  import { page } from '$app/stores';
  import { currentLang, translations } from '$lib/stores';
  import { fade } from 'svelte/transition';
  
  let scrollY = 0;
  let showLangMenu = false;
  let isMobileMenuOpen = false;

  $: isScrolled = scrollY > 50;
  $: isHomePage = $page.url.pathname === '/';
  // If mobile menu is open, we force the theme to be NOT transparent (so we can see the close button)
  // unless we handle the close button color dynamically. 
  // Let's keep the logic simple: transparent only on home top, but if menu opens, the overlay covers everything.
  $: useTransparentTheme = isHomePage && !isScrolled && !isMobileMenuOpen;
  
  $: t = translations[$currentLang].nav;

  const languages = [
    { code: 'tr', flag: '🇹🇷', label: 'Turkish' },
    { code: 'en', flag: '🇬🇧', label: 'English' },
    { code: 'fr', flag: '🇫🇷', label: 'French' }
  ];

  function setLang(lang: string) {
    currentLang.set(lang);
    showLangMenu = false;
    isMobileMenuOpen = false;
  }

  function toggleMobileMenu() {
    isMobileMenuOpen = !isMobileMenuOpen;
  }

  // Close mobile menu on navigation
  $: $page.url.pathname, (isMobileMenuOpen = false);
</script>

<svelte:window bind:scrollY />

<nav
  class="fixed w-full z-50 transition-all duration-300 {useTransparentTheme ? 'bg-transparent py-6' : 'bg-sage-50 shadow-md py-4'}"
>
  <div class="container mx-auto px-6 flex justify-between items-center">
    <a href="/" class="text-4xl font-script z-50 relative {useTransparentTheme ? 'text-sage-50 drop-shadow' : 'text-emerald-900'}">
      Chef Zelal
    </a>

    <!-- Desktop Menu -->
    <div class="hidden md:flex items-center space-x-8">
      <a href="/about" class="font-serif text-lg hover:text-terracotta-600 transition-colors {useTransparentTheme ? 'text-sage-50 drop-shadow' : 'text-emerald-900'}">{t.about}</a>
      <a href="/services" class="font-serif text-lg hover:text-terracotta-600 transition-colors {useTransparentTheme ? 'text-sage-50 drop-shadow' : 'text-emerald-900'}">{t.services}</a>
      <a href="/menu" class="font-serif text-lg hover:text-terracotta-600 transition-colors {useTransparentTheme ? 'text-sage-50 drop-shadow' : 'text-emerald-900'}">{t.menu}</a>
      <a href="/journal" class="font-serif text-lg hover:text-terracotta-600 transition-colors {useTransparentTheme ? 'text-sage-50 drop-shadow' : 'text-emerald-900'}">{t.journal}</a>
      <a href="/contact" class="font-serif text-lg hover:text-terracotta-600 transition-colors {useTransparentTheme ? 'text-sage-50 drop-shadow' : 'text-emerald-900'}">{t.contact}</a>
      
      <div class="relative ml-4">
        <button
          type="button"
          class="flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm transition {useTransparentTheme ? 'border-sage-50/70 text-sage-50 drop-shadow' : 'border-emerald-900 text-emerald-900'}"
          on:click={() => (showLangMenu = !showLangMenu)}
        >
          <span>{languages.find((l) => l.code === $currentLang)?.flag ?? '🌐'}</span>
          <span class="text-xs">▼</span>
        </button>

        {#if showLangMenu}
          <div class="absolute right-0 mt-2 w-32 rounded-lg border border-sage-500/40 bg-white shadow-lg">
            {#each languages as lang}
              <button
                class="flex w-full items-center gap-2 px-3 py-2 text-sm hover:bg-sage-50 text-emerald-900"
                on:click={() => setLang(lang.code)}
              >
                <span>{lang.flag}</span>
                <span>{lang.label}</span>
              </button>
            {/each}
          </div>
        {/if}
      </div>
    </div>

    <!-- Mobile Hamburger Button -->
    <button 
      class="md:hidden z-50 relative focus:outline-none p-2" 
      on:click={toggleMobileMenu}
      aria-label="Toggle Menu"
    >
      <div class="w-6 h-5 flex flex-col justify-between">
        <span class="block w-full h-0.5 transition-all duration-300 {useTransparentTheme ? 'bg-white' : 'bg-emerald-900'} {isMobileMenuOpen ? 'rotate-45 translate-y-2 bg-emerald-900' : ''}"></span>
        <span class="block w-full h-0.5 transition-all duration-300 {useTransparentTheme ? 'bg-white' : 'bg-emerald-900'} {isMobileMenuOpen ? 'opacity-0' : ''}"></span>
        <span class="block w-full h-0.5 transition-all duration-300 {useTransparentTheme ? 'bg-white' : 'bg-emerald-900'} {isMobileMenuOpen ? '-rotate-45 -translate-y-2.5 bg-emerald-900' : ''}"></span>
      </div>
    </button>
  </div>

  <!-- Mobile Menu Overlay -->
  {#if isMobileMenuOpen}
    <div 
      transition:fade={{ duration: 200 }}
      class="fixed inset-0 bg-sage-50 z-40 flex flex-col items-center justify-center md:hidden"
    >
      <div class="flex flex-col items-center space-y-8 text-center">
        <a href="/about" class="font-serif text-2xl text-emerald-900 hover:text-terracotta-600" on:click={toggleMobileMenu}>{t.about}</a>
        <a href="/services" class="font-serif text-2xl text-emerald-900 hover:text-terracotta-600" on:click={toggleMobileMenu}>{t.services}</a>
        <a href="/menu" class="font-serif text-2xl text-emerald-900 hover:text-terracotta-600" on:click={toggleMobileMenu}>{t.menu}</a>
        <a href="/journal" class="font-serif text-2xl text-emerald-900 hover:text-terracotta-600" on:click={toggleMobileMenu}>{t.journal}</a>
        <a href="/contact" class="font-serif text-2xl text-emerald-900 hover:text-terracotta-600" on:click={toggleMobileMenu}>{t.contact}</a>
        
        <!-- Mobile Language Selector -->
        <div class="flex space-x-6 mt-8 pt-8 border-t border-emerald-900/10 w-48 justify-center">
          {#each languages as lang}
            <button 
              on:click={() => setLang(lang.code)}
              class="text-3xl grayscale hover:grayscale-0 transition-all {$currentLang === lang.code ? 'grayscale-0 scale-110' : 'opacity-50'}"
            >
              {lang.flag}
            </button>
          {/each}
        </div>
      </div>
    </div>
  {/if}
</nav>