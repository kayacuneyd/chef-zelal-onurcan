<script lang="ts">
  export let title: string;
  export let description: string;
  export let price: number;
  export let imageUrl: string;
</script>

<div class="group relative overflow-hidden rounded-lg shadow-lg bg-white h-80 cursor-pointer">
  <!-- Image (Hidden initially, revealed on hover) -->
  <img
    src={imageUrl}
    alt={title}
    class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
  />
  
  <!-- Overlay (Always visible but changes opacity) -->
  <div class="absolute inset-0 bg-black/20 group-hover:bg-black/60 transition-colors duration-300"></div>

  <!-- Content -->
  <div class="absolute bottom-0 left-0 w-full p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
    <h3 class="font-serif text-2xl mb-1">{title}</h3>
    <p class="font-sans text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 mb-3">
      {description}
    </p>
    <span class="font-serif text-lg text-terracotta-600 bg-white/90 px-3 py-1 rounded-full">
      €{price}
    </span>
  </div>
</div>
