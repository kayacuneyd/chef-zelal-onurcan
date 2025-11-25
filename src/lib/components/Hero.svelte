<script lang="ts">
  import { heroImage } from '$lib/data';
  // Placeholder for video source
  const videoSrc = "https://assets.mixkit.co/videos/preview/mixkit-hands-of-a-chef-preparing-a-dish-42602-large.mp4"; 
</script>

<section class="relative h-screen w-full overflow-hidden">
  <!-- Video Background -->
  <video
    autoplay
    muted
    loop
    playsinline
    class="absolute top-0 left-0 w-full h-full object-cover"
  >
    <source src={videoSrc} type="video/mp4" />
  </video>

  <!-- Overlay -->
  <div class="absolute top-0 left-0 w-full h-full bg-black/40"></div>

  <!-- Content -->
  <div class="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
    <img
      src={heroImage}
      alt="Chef Zelal Onurcan"
      class="w-32 h-32 rounded-full border-4 border-white/20 mb-8 object-cover shadow-xl"
    />
    <h1 class="font-serif text-5xl md:text-7xl text-white mb-6 tracking-wide">
      Anatolian Soul, <br /> Parisian Touch
    </h1>
    <p class="font-sans text-sage-50 text-lg md:text-xl max-w-2xl mb-10">
      Experience the quiet healing of artisanal cuisine with Chef Zelal Onurcan.
    </p>
    <a
      href="/contact"
      class="bg-terracotta-600 text-white px-8 py-3 rounded-full font-serif text-lg hover:bg-terracotta-500 transition-transform hover:scale-105"
    >
      Reserve Your Table
    </a>
  </div>
</section>
