<script lang="ts">
  import { fade, fly } from 'svelte/transition';
  import { services } from '$lib/data';
  import { currentLang, translations } from '$lib/stores';

  $: t = translations[$currentLang].services;
  $: localizedServices = services[$currentLang];
</script>

<div class="min-h-screen pt-24 pb-20 bg-white">
  <!-- Header -->
  <div in:fly={{ y: -20, duration: 800 }} class="text-center mb-20 px-6">
    <h1 class="font-serif text-4xl md:text-6xl text-emerald-900 mb-6">{t.heading}</h1>
    <p class="text-anthracite-800 text-lg max-w-2xl mx-auto font-sans">
      {t.subheading}
    </p>
  </div>

  <!-- Services List -->
  <div class="container mx-auto px-6">
    {#each localizedServices as service, i}
      <div 
        class="flex flex-col lg:flex-row items-center gap-12 mb-32" 
        in:fade={{ duration: 800, delay: i * 100 }}
      >
        <!-- Image -->
        <div class="w-full lg:w-1/2 {i % 2 === 1 ? 'lg:order-2' : ''}">
          <div class="relative rounded-xl overflow-hidden shadow-2xl aspect-[16/9] group">
            <img
              src={service.image ?? `https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80&sat=-15&sig=${i}`}
              alt={service.title}
              class="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700"
            />
            <div class="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
          </div>
        </div>

        <!-- Content -->
        <div class="w-full lg:w-1/2 {i % 2 === 1 ? 'lg:order-1 lg:pr-12' : 'lg:pl-12'}">
          <h2 class="font-serif text-3xl md:text-4xl text-emerald-900 mb-6">
            {service.title}
          </h2>
          <p class="font-sans text-anthracite-800 text-lg leading-relaxed mb-8">
            {service.description}
          </p>

          <a 
            href="/contact" 
            class="inline-block bg-emerald-900 text-white px-8 py-3 rounded-full font-serif hover:bg-emerald-800 transition-colors shadow-lg"
          >
            {t.cta}
          </a>
        </div>
      </div>
    {/each}
  </div>
</div>
