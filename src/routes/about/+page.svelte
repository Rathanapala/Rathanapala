<script>
  import { fade, fly } from 'svelte/transition';
  import { onMount } from 'svelte';
  import { cubicOut } from 'svelte/easing';
  import History from './history.svelte';
  import Staff from './staff.svelte';

  // Add state to track which section is active
  let activeSection = 'history'; // Default to history
  let mounted = false;

  onMount(() => {
    mounted = true;
  });
</script>

<div class="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
  <div class="max-w-7xl mx-auto px-4 py-16">
    <!-- Header Section -->
    {#if mounted}
      <div class="text-center mb-12" in:fly={{ y: -30, duration: 800, easing: cubicOut }}>
        <h1 class="text-5xl md:text-6xl font-bold text-[#001b47] mb-4 tracking-tight">
          About Us
        </h1>
        <div class="w-24 h-1 bg-gradient-to-r from-[#ffcd5a] to-orange-400 mx-auto rounded-full"></div>
        <p class="text-lg text-gray-600 mt-6 max-w-2xl mx-auto leading-relaxed">
          Discover our rich heritage and meet the dedicated team behind our Dhamma School
        </p>
      </div>
    {/if}

    <!-- Enhanced Navigation Tabs -->
    {#if mounted}
      <div class="flex justify-center mb-12" in:fly={{ y: 30, duration: 800, delay: 200, easing: cubicOut }}>
        <div class="bg-white rounded-xl p-2 shadow-lg border border-gray-200">
          <button
            class="relative px-8 py-3 mx-1 rounded-lg font-semibold text-sm uppercase tracking-wide
            transition-all duration-300 ease-in-out transform hover:scale-105
            {activeSection === 'history' 
              ? 'bg-gradient-to-r from-[#001b47] to-blue-800 text-white shadow-lg' 
              : 'bg-transparent text-[#001b47] hover:bg-gray-50'}
            focus:outline-none focus:ring-2 focus:ring-[#001b47] focus:ring-opacity-50"
            on:click={() => activeSection = 'history'}
          >
            <span class="relative z-10">Our History</span>
            {#if activeSection === 'history'}
              <div class="absolute inset-0 bg-gradient-to-r from-[#001b47] to-blue-800 rounded-lg"
                   transition:fly={{ duration: 300 }}></div>
            {/if}
          </button>
          <button
            class="relative px-8 py-3 mx-1 rounded-lg font-semibold text-sm uppercase tracking-wide
            transition-all duration-300 ease-in-out transform hover:scale-105
            {activeSection === 'staff' 
              ? 'bg-gradient-to-r from-[#001b47] to-blue-800 text-white shadow-lg' 
              : 'bg-transparent text-[#001b47] hover:bg-gray-50'}
            focus:outline-none focus:ring-2 focus:ring-[#001b47] focus:ring-opacity-50"
            on:click={() => activeSection = 'staff'}
          >
            <span class="relative z-10">Our Team</span>
            {#if activeSection === 'staff'}
              <div class="absolute inset-0 bg-gradient-to-r from-[#001b47] to-blue-800 rounded-lg"
                   transition:fly={{ duration: 300 }}></div>
            {/if}
          </button>
        </div>
      </div>
    {/if}

    <!-- Enhanced Content Section -->
    <div class="w-full">
      {#if activeSection === 'history'}
        <section class="relative bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden" 
                 in:fly={{ x: -50, duration: 500, easing: cubicOut }}
                 out:fly={{ x: 50, duration: 300, easing: cubicOut }}>
          <!-- Decorative elements -->
          <div class="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#ffcd5a] via-orange-400 to-yellow-400"></div>
          <div class="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-[#ffcd5a] to-orange-300 rounded-full opacity-10"></div>
          <div class="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-br from-blue-200 to-[#001b47] rounded-full opacity-10"></div>
          
          <div class="relative p-8 md:p-12">
            <div class="flex items-center justify-center mb-8">
              <div class="bg-gradient-to-r from-[#ffcd5a] to-orange-400 p-3 rounded-full mr-4">
                <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd" />
                </svg>
              </div>
              <h2 class="text-4xl font-bold text-[#001b47]">Our Journey Through Time</h2>
            </div>
            <History />
          </div>
        </section>
      {:else}
        <section class="relative bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden"
                 in:fly={{ x: 50, duration: 500, easing: cubicOut }}
                 out:fly={{ x: -50, duration: 300, easing: cubicOut }}>
          <!-- Decorative elements -->
          <div class="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#ffcd5a] via-orange-400 to-yellow-400"></div>
          <div class="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-[#ffcd5a] to-orange-300 rounded-full opacity-10"></div>
          <div class="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-br from-blue-200 to-[#001b47] rounded-full opacity-10"></div>
          
          <div class="relative p-8 md:p-12">
            <div class="flex items-center justify-center mb-8">
              <div class="bg-gradient-to-r from-[#ffcd5a] to-orange-400 p-3 rounded-full mr-4">
                <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 class="text-4xl font-bold text-[#001b47]">Meet Our Dedicated Team</h2>
            </div>
            <Staff />
          </div>
        </section>
      {/if}
    </div>

    <!-- Bottom decorative element -->
    {#if mounted}
      <div class="mt-16 text-center" in:fade={{ duration: 800, delay: 600 }}>
        <div class="inline-flex items-center space-x-2 text-gray-500">
          <div class="w-8 h-px bg-gray-300"></div>
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
          </svg>
          <div class="w-8 h-px bg-gray-300"></div>
        </div>
      </div>
    {/if}
  </div>
</div>

<style>
  :global(body) {
    font-family: 'Inter', 'system-ui', sans-serif;
  }
</style>