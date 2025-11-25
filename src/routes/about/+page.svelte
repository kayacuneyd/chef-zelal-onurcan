<script lang="ts">
  import { fade, fly } from 'svelte/transition';
  import { aboutMilestones } from '$lib/data';
  import { currentLang, translations } from '$lib/stores';

  $: t = translations[$currentLang].about;
  $: milestones = aboutMilestones[$currentLang];
</script>

<div class="min-h-screen pt-24 pb-20 bg-sage-50 overflow-hidden">
  <div in:fly={{ y: -20, duration: 800 }} class="text-center mb-20 px-6">
    <h1 class="font-serif text-4xl md:text-6xl text-emerald-900 mb-6">
      {t.heading}
    </h1>
    <p class="text-anthracite-800 text-lg max-w-2xl mx-auto font-sans italic">
      {t.subheading}
    </p>
  </div>

  <div class="container mx-auto px-6 relative">
    <div class="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-terracotta-600/30 hidden md:block"></div>

    {#each milestones as item, i}
      <div 
        class="flex flex-col md:flex-row items-center justify-between mb-24 relative group"
        in:fly={{ y: 50, duration: 800, delay: i * 200 }}
      >
        <div class="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-terracotta-600 rounded-full border-4 border-sage-50 hidden md:block z-10"></div>

        <div class="w-full md:w-5/12 {i % 2 === 0 ? 'md:text-right md:pr-12' : 'md:order-2 md:text-left md:pl-12'} mb-8 md:mb-0">
          <span class="font-serif text-terracotta-600 text-xl block mb-2">{item.year}</span>
          <h3 class="font-serif text-3xl text-emerald-900 mb-4">{item.title}</h3>
          <p class="font-sans text-anthracite-800 leading-relaxed">
            {item.description}
          </p>
        </div>

        <div class="w-full md:w-5/12 {i % 2 === 0 ? 'md:pl-12' : 'md:order-1 md:pr-12'}">
          <div class="relative overflow-hidden rounded-lg shadow-xl aspect-[4/3] group-hover:shadow-2xl transition-shadow duration-500">
            <img 
              src={item.image} 
              alt={item.title} 
              class="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700"
            />
            <div class="absolute inset-0 bg-emerald-900/10 group-hover:bg-transparent transition-colors duration-500"></div>
          </div>
        </div>
      </div>
    {/each}
  </div>

  <div class="container mx-auto px-6 mt-20 text-center" in:fade={{ delay: 1000, duration: 1000 }}>
    <blockquote class="font-serif text-2xl md:text-4xl text-emerald-900 leading-relaxed max-w-4xl mx-auto relative">
      <span class="text-6xl text-terracotta-600 absolute -top-8 -left-8 opacity-20">"</span>
      {t.philosophy}
      <span class="text-6xl text-terracotta-600 absolute -bottom-12 -right-8 opacity-20">"</span>
    </blockquote>
  </div>
</div>
