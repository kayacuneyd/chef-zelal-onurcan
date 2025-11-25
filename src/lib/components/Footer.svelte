<script lang="ts">
  import { currentLang, translations } from '$lib/stores';
  $: t = translations[$currentLang].footer;
</script>

<footer class="bg-gunmetal-900 text-sage-50 py-12">
  <div class="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
    <div>
      <h3 class="font-script text-3xl mb-4 text-brass-400">{t.brand}</h3>
      <p class="font-sans text-sm opacity-80">{t.desc}</p>
    </div>

    <div>
      <h4 class="font-serif text-lg mb-4">{t.explore}</h4>
      <ul class="space-y-2 font-sans text-sm">
        <li><a href="/services" class="hover:text-terracotta-600">{translations[$currentLang].nav.services}</a></li>
        <li><a href="/menu" class="hover:text-terracotta-600">{translations[$currentLang].nav.menu}</a></li>
        <li><a href="/journal" class="hover:text-terracotta-600">{translations[$currentLang].nav.journal}</a></li>
      </ul>
    </div>

    <div>
      <h4 class="font-serif text-lg mb-4">{t.contact}</h4>
      <p class="font-sans text-sm opacity-80 mb-2">Le Marais, Paris</p>
      <a href="mailto:hello@zelalonurcan.com" class="font-sans text-sm hover:text-terracotta-600">
        hello@zelalonurcan.com
      </a>
    </div>
  </div>
  <div class="container mx-auto px-6 mt-12 pt-8 border-t border-sage-50/10 text-center font-sans text-xs opacity-60">
    <p>&copy; {new Date().getFullYear()} Chef Zelal Onurcan. {t.rights}</p>
    <p class="mt-2">
      {t.developed} <a href="https://kayacuneyt.com" target="_blank" class="hover:text-terracotta-600 transition-colors">Cüneyt Kaya</a>
    </p>
  </div>
</footer>
