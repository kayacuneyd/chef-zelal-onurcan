<script lang="ts">
  import { fade } from 'svelte/transition';
  export let data;
  const { post } = data;
</script>

<svelte:head>
  <title>{post.title} | Chef Zelal Onurcan</title>
</svelte:head>

<div in:fade={{ duration: 500 }} class="min-h-screen bg-sage-50 pt-24 pb-20">
  <!-- Hero Image -->
  <div class="w-full h-[40vh] relative overflow-hidden">
    <img 
      src={post.imageUrl} 
      alt={post.title} 
      class="w-full h-full object-cover"
    />
    <div class="absolute inset-0 bg-gunmetal-900/30"></div>
  </div>

  <!-- Content Container -->
  <article class="container mx-auto px-6 max-w-3xl -mt-20 relative z-10">
    <div class="bg-white p-8 md:p-12 shadow-xl rounded-sm">
      <!-- Header -->
      <div class="text-center mb-10 border-b border-sage-100 pb-8">
        <span class="font-sans text-terracotta-600 text-sm tracking-widest uppercase block mb-3">
          {post.date}
        </span>
        <h1 class="font-serif text-4xl md:text-5xl text-gunmetal-900 leading-tight mb-6">
          {post.title}
        </h1>
        <div class="w-16 h-1 bg-emerald-600 mx-auto"></div>
      </div>

      <!-- Body Content -->
      <div class="prose prose-lg prose-headings:font-serif prose-p:font-sans prose-p:text-gunmetal-700 max-w-none">
        {@html post.content}
      </div>

      <!-- Back Link -->
      <div class="mt-12 pt-8 border-t border-sage-100 text-center">
        <a 
          href="/journal" 
          class="inline-flex items-center font-sans text-emerald-700 hover:text-emerald-900 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Journal
        </a>
      </div>
    </div>
  </article>
</div>