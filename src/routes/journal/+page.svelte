<script lang="ts">
  import { fade, fly } from 'svelte/transition';
  import { blogPosts } from '$lib/data';

  const formatDate = (value: string) =>
    new Intl.DateTimeFormat('en-US', { month: 'long', day: 'numeric', year: 'numeric' }).format(new Date(value));
</script>

<div class="min-h-screen pt-24 pb-20 bg-sage-50">
  <!-- Header -->
  <div in:fly={{ y: -20, duration: 800 }} class="text-center mb-20 px-6">
    <h1 class="font-serif text-4xl md:text-6xl text-emerald-900 mb-6">
      The Journal
    </h1>
    <p class="text-anthracite-800 text-lg max-w-2xl mx-auto font-sans italic">
      Recipes, stories, and notes from the kitchen.
    </p>
  </div>

  <!-- Grid -->
  <div class="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
    {#each blogPosts as post, i}
      <article 
        class="group cursor-pointer flex flex-col h-full"
        in:fade={{ duration: 800, delay: i * 150 }}
      >
        <!-- Image -->
        <div class="relative overflow-hidden rounded-lg aspect-[3/2] mb-6 shadow-md">
          <img 
            src={post.imageUrl} 
            alt={post.title} 
            class="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700"
          />
          <div class="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
        </div>

        <!-- Content -->
        <div class="flex-grow flex flex-col">
          <span class="font-sans text-xs text-terracotta-600 uppercase tracking-widest mb-3">
            {formatDate(post.date)}
          </span>
          <h2 class="font-serif text-2xl text-emerald-900 mb-3 group-hover:text-terracotta-600 transition-colors">
            {post.title}
          </h2>
          <p class="font-sans text-anthracite-800 text-sm leading-relaxed mb-6 flex-grow opacity-80">
            {post.excerpt}
          </p>
          <a 
            href={`/journal/${post.slug}`} 
            class="inline-flex items-center font-serif text-emerald-900 hover:text-terracotta-600 transition-colors mt-auto"
          >
            Read Story
            <svg class="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </article>
    {/each}
  </div>
</div>
