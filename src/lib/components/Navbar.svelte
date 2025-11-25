<script lang="ts">
  import { page } from '$app/stores';
  import { currentLang, translations } from '$lib/stores';
  
  let scrollY = 0;
  let showLangMenu = false;
  $: isScrolled = scrollY > 50;
  $: isHomePage = $page.url.pathname === '/';
  $: useTransparentTheme = isHomePage && !isScrolled;
  
  $: t = translations[$currentLang].nav;

  const languages = [
    { code: 'tr', flag: '🇹🇷', label: 'Turkish' },
    { code: 'en', flag: '🇬🇧', label: 'English' },
    { code: 'fr', flag: '🇫🇷', label: 'French' }
  ];

  function setLang(lang: string) {
    currentLang.set(lang);
    showLangMenu = false;
  }
</script>

<svelte:window bind:scrollY />

<nav
  class="fixed w-full z-50 transition-all duration-300 {useTransparentTheme ? 'bg-transparent py-6' : 'bg-sage-50 shadow-md py-4'}"
>
  <div class="container mx-auto px-6 flex justify-between items-center">
    <a href="/" class="text-4xl font-script {useTransparentTheme ? 'text-sage-50 drop-shadow' : 'text-emerald-900'}">
      Chef Zelal
    </a>

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
                class="flex w-full items-center gap-2 px-3 py-2 text-sm hover:bg-sage-50"
                on:click={() => setLang(lang.code)}
              >
                <span>{lang.flag}</span>
              </button>
            {/each}
          </div>
        {/if}
      </div>
    </div>
  </div>
</nav>
