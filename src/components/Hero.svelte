<script>
  import { fade, fly, scale } from 'svelte/transition';
  import { cubicOut, elasticOut } from 'svelte/easing';
  import heroImage from '../images/hero.jpg';
  import { onMount } from 'svelte';
  
  let mounted = false;
  
  onMount(() => {
    mounted = true;
  });
</script>

<div class="relative h-screen overflow-hidden">
  <!-- Background image with improved styling -->
  <div class="absolute inset-0 z-0">
    <img 
      src={heroImage} 
      alt="Children meditating" 
      class="w-full h-full object-cover transform scale-105 filter blur-[2px]"
    >
    <div class="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60"></div>
    
    <!-- Decorative elements -->
    <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#ffcd5a] to-orange-400"></div>
    <div class="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#ffcd5a] to-orange-400"></div>
  </div>
  
  <!-- Content -->
  {#if mounted}
    <div class="absolute inset-0 z-10 flex flex-col items-center justify-center px-4">
      <div class="text-center text-white max-w-5xl">
        <!-- Decorative element -->
        <div 
          in:scale={{ duration: 600, easing: elasticOut, delay: 200 }}
          class="w-24 h-24 mx-auto mb-6 rounded-full border-4 border-[#ffcd5a]/70 flex items-center justify-center"
        >
          <div class="w-16 h-16 rounded-full bg-gradient-to-r from-[#ffcd5a] to-orange-400 animate-pulse"></div>
        </div>
        
        <!-- Main heading -->
        <h1 
          in:fly={{ y: 50, duration: 1000, easing: cubicOut }} 
          class="text-5xl md:text-7xl font-bold mb-4 text-white drop-shadow-lg tracking-tight"
        >
          Sri Rathanapala<br class="hidden sm:inline"> Dhamma School
        </h1>
        
        <!-- Divider -->
        <div 
          in:scale={{ duration: 600, easing: cubicOut, delay: 600 }}
          class="w-32 h-1 bg-gradient-to-r from-[#ffcd5a] to-orange-400 mx-auto my-6 rounded-full"
        ></div>
        
        <!-- Subtitle -->
        <p 
          in:fly={{ y: 50, duration: 800, delay: 500, easing: cubicOut }} 
          class="text-xl md:text-2xl mb-10 text-white/90 max-w-2xl mx-auto"
        >
          Nurturing young minds through Buddhist education and values for children ages 5-17
        </p>
        
        <!-- CTA buttons -->
        <div 
          in:fade={{ duration: 1000, delay: 1200 }}
          class="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a 
            href="/contact" 
            class="bg-gradient-to-r from-[#ffcd5a] to-orange-400 text-[#001b47] font-bold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 min-w-[180px]"
          >
            Contact Us
          </a>
          <a 
            href="/about" 
            class="bg-transparent border-2 border-white text-white px-8 py-3.5 rounded-lg hover:bg-white/10 transition-all duration-300 transform hover:scale-105 min-w-[180px]"
          >
            Learn More
          </a>
        </div>
      </div>
      
      <!-- Scroll indicator -->
      <div 
        in:fade={{ duration: 1000, delay: 1800 }}
        class="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
      >
        <span class="text-white/80 text-sm mb-2">Scroll to explore</span>
        <div class="animate-bounce">
          <svg class="w-6 h-6 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </div>
  {/if}
</div>

<style>
  @keyframes pulse {
    0%, 100% {
      opacity: 1;
      transform: scale(1);
    }
    50% {
      opacity: 0.8;
      transform: scale(0.95);
    }
  }
  
  .animate-pulse {
    animation: pulse 3s infinite;
  }
</style>
