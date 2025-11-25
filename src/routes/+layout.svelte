<script>
  import Navbar from '$lib/components/Navbar.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import '../app.css';
</script>

<div class="flex flex-col min-h-screen bg-sage-50 text-anthracite-800 font-sans">
  <Navbar />
  
  <main class="flex-grow">
    <slot />
  </main>

  <Footer />
</div>
