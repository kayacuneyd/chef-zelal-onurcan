<script lang="ts">
  import { fade, fly } from 'svelte/transition';

  const milestones = [
    {
      year: '1996',
      title: 'Roots & Beginnings',
      description: 'Born in London to a family from Tunceli. The culinary heritage was already in my DNA.',
      image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=800' // Placeholder
    },
    {
      year: '2010s',
      title: 'The Kasaba Legacy',
      description: 'Grew up in the heat of "Kasaba Steakhouse", my father’s 120-seat restaurant in Istanbul. Learned discipline, operations, and the art of meat.',
      image: 'https://images.unsplash.com/photo-1544025162-d76690b67f61?auto=format&fit=crop&q=80&w=800' // Placeholder
    },
    {
      year: '2019',
      title: 'Academic Foundation',
      description: 'Graduated from Istanbul Bilgi University, Gastronomy & Culinary Arts. Combined practical skills with academic theory.',
      image: 'https://images.unsplash.com/photo-1556910103-1c02745a30bf?auto=format&fit=crop&q=80&w=800' // Placeholder
    },
    {
      year: '2021-2023',
      title: 'High Performance',
      description: 'Served as Private Chef for Nando De Colo and his family. Mastered performance nutrition, privacy, and adaptability.',
      image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=800' // Placeholder
    },
    {
      year: 'Present',
      title: 'Parisian Chapter',
      description: 'Currently Sous Chef at Griffon and Consultant at Republic of Coffee. Blending Anatolian soul with Parisian culture.',
      image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=800' // Placeholder
    }
  ];
</script>

<div class="min-h-screen pt-24 pb-20 bg-sage-50 overflow-hidden">
  <!-- Header -->
  <div in:fly={{ y: -20, duration: 800 }} class="text-center mb-20 px-6">
    <h1 class="font-serif text-4xl md:text-6xl text-emerald-900 mb-6">
      My Journey
    </h1>
    <p class="text-anthracite-800 text-lg max-w-2xl mx-auto font-sans italic">
      "From the fires of an Istanbul steakhouse to the refined kitchens of Paris."
    </p>
  </div>

  <!-- Timeline -->
  <div class="container mx-auto px-6 relative">
    <!-- Vertical Line -->
    <div class="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-terracotta-600/30 hidden md:block"></div>

    {#each milestones as item, i}
      <div 
        class="flex flex-col md:flex-row items-center justify-between mb-24 relative group"
        in:fly={{ y: 50, duration: 800, delay: i * 200 }}
      >
        <!-- Dot on Line -->
        <div class="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-terracotta-600 rounded-full border-4 border-sage-50 hidden md:block z-10"></div>

        <!-- Content Left (Even Index) / Right (Odd Index) -->
        <div class="w-full md:w-5/12 {i % 2 === 0 ? 'md:text-right md:pr-12' : 'md:order-2 md:text-left md:pl-12'} mb-8 md:mb-0">
          <span class="font-serif text-terracotta-600 text-xl block mb-2">{item.year}</span>
          <h3 class="font-serif text-3xl text-emerald-900 mb-4">{item.title}</h3>
          <p class="font-sans text-anthracite-800 leading-relaxed">
            {item.description}
          </p>
        </div>

        <!-- Image Right (Even Index) / Left (Odd Index) -->
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

  <!-- Philosophy Quote -->
  <div class="container mx-auto px-6 mt-20 text-center" in:fade={{ delay: 1000, duration: 1000 }}>
    <blockquote class="font-serif text-2xl md:text-4xl text-emerald-900 leading-relaxed max-w-4xl mx-auto relative">
      <span class="text-6xl text-terracotta-600 absolute -top-8 -left-8 opacity-20">"</span>
      Cooking started as therapy for myself, but I discovered it became 
      <span class="text-terracotta-600 italic">quiet healing</span> for those I fed.
      <span class="text-6xl text-terracotta-600 absolute -bottom-12 -right-8 opacity-20">"</span>
    </blockquote>
  </div>
</div>
