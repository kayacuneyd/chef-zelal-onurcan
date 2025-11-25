<script lang="ts">
  import { fade, fly } from 'svelte/transition';
  import { flip } from 'svelte/animate';
  import MenuCard from '$lib/components/MenuCard.svelte';
  import { menuItems } from '$lib/data';

  const categories = ['Starters', 'Mains', 'Desserts'];
</script>

<div class="min-h-screen pt-24 pb-12 px-6 container mx-auto">
  <!-- Header -->
  <div in:fly={{ y: -20, duration: 800 }} class="text-center mb-12">
    <h1 class="font-serif text-4xl md:text-5xl text-emerald-900 mb-4">
      Our Menu
    </h1>
    <p class="text-anthracite-800 max-w-2xl mx-auto font-sans">
      A culinary journey blending Anatolian heritage with French finesse.
    </p>
  </div>

  <!-- Categories -->
  {#each categories as category}
    <div class="mb-16">
      <h2 class="font-serif text-3xl text-emerald-900 mb-8 text-center border-b border-sage-200 pb-4 inline-block mx-auto px-12 block w-fit">
        {category}
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {#each menuItems.filter(item => item.category === category) as item (item.id)}
           <div in:fade={{ duration: 300 }}>
            <MenuCard
              title={item.title}
              description={item.description}
              price={item.price}
              imageUrl={'https://via.placeholder.com/400x300?text=' + encodeURIComponent(item.title)} 
            />
          </div>
        {/each}
      </div>
    </div>
  {/each}
</div>
