<script lang="ts">
  import { enhance } from '$app/forms';
  import { fade, fly } from 'svelte/transition';
  import type { ActionData } from './$types';

  export let form: ActionData;
</script>

<div class="min-h-screen pt-24 pb-12 px-6 container mx-auto max-w-4xl">
  <div in:fly={{ y: 20, duration: 800, delay: 200 }}>
    <h1 class="font-serif text-4xl md:text-5xl text-emerald-900 mb-6 text-center">
      Start Your Journey
    </h1>
    <p class="text-center text-anthracite-800 mb-12 max-w-2xl mx-auto font-sans">
      Whether it's an intimate dinner, a consulting project, or a simple question, 
      Chef Zelal is ready to listen.
    </p>

    {#if form?.success}
      <div 
        in:fade 
        class="bg-emerald-50 border border-emerald-200 text-emerald-900 p-8 rounded-lg text-center shadow-sm"
      >
        <h3 class="font-serif text-2xl mb-2">Message Sent</h3>
        <p>Thank you for reaching out. We will get back to you shortly.</p>
        <button 
          class="mt-6 text-terracotta-600 hover:underline" 
          on:click={() => window.location.reload()}
        >
          Send another message
        </button>
      </div>
    {:else}
      <form 
        method="POST" 
        use:enhance
        class="bg-white p-8 md:p-12 rounded-xl shadow-lg border border-sage-200"
      >
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <!-- Name -->
          <div>
            <label for="name" class="block font-serif text-emerald-900 mb-2">Name</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              class="w-full border-sage-200 rounded-md focus:ring-emerald-900 focus:border-emerald-900 bg-sage-50/50"
              placeholder="Your Name"
              required
            />
          </div>

          <!-- Email -->
          <div>
            <label for="email" class="block font-serif text-emerald-900 mb-2">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              class="w-full border-sage-200 rounded-md focus:ring-emerald-900 focus:border-emerald-900 bg-sage-50/50"
              placeholder="hello@example.com"
              required
            />
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <!-- Guests (Optional) -->
          <div>
            <label for="guests" class="block font-serif text-emerald-900 mb-2">Guests (Optional)</label>
            <input 
              type="number" 
              id="guests" 
              name="guests" 
              min="1"
              class="w-full border-sage-200 rounded-md focus:ring-emerald-900 focus:border-emerald-900 bg-sage-50/50"
              placeholder="Number of guests"
            />
          </div>

          <!-- Date (Optional) -->
          <div>
            <label for="date" class="block font-serif text-emerald-900 mb-2">Preferred Date (Optional)</label>
            <input 
              type="date" 
              id="date" 
              name="date" 
              class="w-full border-sage-200 rounded-md focus:ring-emerald-900 focus:border-emerald-900 bg-sage-50/50"
            />
          </div>
        </div>

        <!-- Message -->
        <div class="mb-8">
          <label for="message" class="block font-serif text-emerald-900 mb-2">Message</label>
          <textarea 
            id="message" 
            name="message" 
            rows="5" 
            class="w-full border-sage-200 rounded-md focus:ring-emerald-900 focus:border-emerald-900 bg-sage-50/50"
            placeholder="Tell us about your event or inquiry..."
            required
          ></textarea>
        </div>

        <!-- Submit Button -->
        <div class="text-center">
          <button 
            type="submit" 
            class="bg-terracotta-600 text-white px-10 py-3 rounded-full font-serif text-lg hover:bg-terracotta-500 transition-transform hover:scale-105 shadow-md"
          >
            Send Message
          </button>
        </div>
        
        {#if form?.error}
          <p class="text-red-600 text-center mt-4">{form.error}</p>
        {/if}
      </form>
    {/if}
  </div>
</div>
