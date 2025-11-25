<script lang="ts">
  import { heroImage } from '$lib/data';
  import { currentLang, translations } from '$lib/stores';
  const videoSrc = 'https://assets.mixkit.co/videos/preview/mixkit-hands-of-a-chef-preparing-a-dish-42602-large.mp4';
  $: t = translations[$currentLang].hero;
</script>

<section class="relative h-screen w-full overflow-hidden">
  <video autoplay muted loop playsinline class="absolute top-0 left-0 w-full h-full object-cover">
    <source src={videoSrc} type="video/mp4" />
  </video>

  <div class="absolute top-0 left-0 w-full h-full bg-black/40"></div>

  <div class="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
    <img
      src={heroImage}
      alt="Chef Zelal Onurcan"
      class="w-32 h-32 rounded-full border-4 border-white/20 mb-8 object-cover shadow-xl"
    />
    <p class="font-sans text-sage-50/80 text-xs uppercase tracking-[0.32em] mb-3">{t.pretitle}</p>
    <h1 class="font-serif text-5xl md:text-7xl text-white mb-6 tracking-wide">{t.title}</h1>
    <p class="font-sans text-sage-50 text-lg md:text-xl max-w-2xl mb-10">
      {t.subtitle}
    </p>
    <a
      href="/contact"
      class="bg-terracotta-600 text-white px-8 py-3 rounded-full font-serif text-lg hover:bg-terracotta-500 transition-transform hover:scale-105"
    >
      {t.cta}
    </a>
  </div>
</section>
