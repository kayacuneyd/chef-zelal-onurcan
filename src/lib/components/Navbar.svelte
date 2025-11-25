<script lang="ts">
  import { page } from '$app/stores';
  import { currentLang, translations, locales } from '$lib/stores';
  import { fade } from 'svelte/transition';

  let scrollY = 0;
  let showLangMenu = false;
  let isMobileMenuOpen = false;

  $: isScrolled = scrollY > 50;
  $: isHomePage = $page.url.pathname === '/';
  $: useTransparentTheme = isHomePage && !isScrolled && !isMobileMenuOpen;
  $: t = translations[$currentLang].nav;

  function setLang(lang: string) {
    currentLang.set(lang as any);
    showLangMenu = false;
    isMobileMenuOpen = false;
  }

  function toggleMobileMenu() {
    isMobileMenuOpen = !isMobileMenuOpen;
  }

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
          <span>{locales.find((l) => l.code === $currentLang)?.flag ?? '🌐'}</span>
          <span class="text-xs">▼</span>
        </button>

        {#if showLangMenu}
          <div class="absolute right-0 mt-2 w-32 rounded-lg border border-sage-500/40 bg-white shadow-lg">
            {#each locales as lang}
              <button
                class="flex w-full items-center gap-2 px-3 py-2 text-sm hover:bg-sage-50 text-emerald-900"
                on:click={() => setLang(lang.code)}
              >
                <span>{lang.flag}</span>
              </button>
            {/each}
          </div>
        {/if}
      </div>
    </div>

    <!-- Mobile trigger -->
    <button 
      class="md:hidden relative z-[60] focus:outline-none p-2 rounded-full border shadow-sm transition-colors {useTransparentTheme ? 'bg-emerald-900/80 border-sage-50/50 text-sage-50' : 'bg-sage-50 border-emerald-900/40 text-emerald-900'}" 
      on:click={toggleMobileMenu}
      aria-label="Toggle Menu"
    >
      <div class="w-6 h-5 flex flex-col justify-between">
        <span class="block w-full h-0.5 transition-all duration-300 bg-current {isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}"></span>
        <span class="block w-full h-0.5 transition-all duration-300 bg-current {isMobileMenuOpen ? 'opacity-0' : ''}"></span>
        <span class="block w-full h-0.5 transition-all duration-300 bg-current {isMobileMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}"></span>
      </div>
    </button>
  </div>
</nav>

<!-- Mobile Menu Panel -->
{#if isMobileMenuOpen}
  <div 
    transition:fade={{ duration: 200 }}
    class="fixed inset-0 z-40 md:hidden bg-sage-50/98 backdrop-blur-sm"
  >
    <div class="flex items-center justify-between px-6 py-4 border-b border-sage-500/30">
      <a href="/" class="text-3xl font-script text-emerald-900" on:click={toggleMobileMenu}>Chef Zelal</a>
      <button
        class="p-2 rounded-full border border-emerald-900/40 text-emerald-900"
        on:click={toggleMobileMenu}
        aria-label="Close Menu"
      >
        ✕
      </button>
    </div>
    <div class="flex flex-col items-center space-y-6 py-8 px-6 text-center">
      <a href="/about" class="font-serif text-2xl text-emerald-900 hover:text-terracotta-600" on:click={toggleMobileMenu}>{t.about}</a>
      <a href="/services" class="font-serif text-2xl text-emerald-900 hover:text-terracotta-600" on:click={toggleMobileMenu}>{t.services}</a>
      <a href="/menu" class="font-serif text-2xl text-emerald-900 hover:text-terracotta-600" on:click={toggleMobileMenu}>{t.menu}</a>
      <a href="/journal" class="font-serif text-2xl text-emerald-900 hover:text-terracotta-600" on:click={toggleMobileMenu}>{t.journal}</a>
      <a href="/contact" class="font-serif text-2xl text-emerald-900 hover:text-terracotta-600" on:click={toggleMobileMenu}>{t.contact}</a>
    </div>
    <div class="flex items-center justify-center gap-6 pb-10 border-t border-emerald-900/10 mx-10 pt-6">
      {#each locales as lang}
        <button 
          on:click={() => setLang(lang.code)}
          class="text-3xl grayscale hover:grayscale-0 transition-all {$currentLang === lang.code ? 'grayscale-0 scale-110' : 'opacity-50'}"
        >
          {lang.flag}
        </button>
      {/each}
    </div>
  </div>
{/if}
