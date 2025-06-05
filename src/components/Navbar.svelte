<script>
  import { slide, fade } from "svelte/transition";
  import { onMount } from "svelte";
  import { page } from "$app/stores"; // Import page store to track active route
  import logo from "../images/logo.png";
  
  let isMenuOpen = false;
  let scrollY = 0;
  let innerHeight = 0;
  let mounted = false;
  
  // Close mobile menu when clicking outside or navigating
  function closeMenu() {
    isMenuOpen = false;
  }
  
  // Toggle mobile menu
  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
  }
  
  // Handle keyboard accessibility
  function handleKeydown(event) {
    if (event.key === 'Escape' && isMenuOpen) {
      closeMenu();
    }
  }
  
  onMount(() => {
    mounted = true;
  });
</script>

<svelte:window bind:scrollY bind:innerHeight on:keydown={handleKeydown} />

<nav
  class={`fixed w-full z-50 transition-all duration-300 ${scrollY > 50 ? 'bg-gradient-to-r from-[#001b47] to-[#002b70] shadow-lg' : 'bg-gradient-to-r from-[#001b47]/90 to-[#002b70]/90 backdrop-blur-sm'}`}
  aria-label="Main navigation"
>
  <div class="max-w-6xl mx-auto px-4">
    <div class="flex justify-between items-center py-3">
      <a 
        href="/" 
        class="flex items-center group"
        aria-label="Sri Rathanapala Dhamma School - Home"
      >
        <div class="relative">
          <div class="h-14 w-14 rounded-full bg-white/10 p-1 transition-all duration-300 group-hover:bg-white/20">
            <img
              src={logo}
              alt="Logo"
              class="h-full w-full object-contain"
            />
          </div>
          <div class="absolute inset-0 h-14 w-14 rounded-full border-2 border-[#ffcd5a]/40 animate-pulse"></div>
        </div>
        <div class="ml-3">
          <span class="font-bold text-white text-lg md:text-xl block leading-tight">
            Sri Rathanapala
          </span>
          <span class="text-[#ffcd5a] text-sm block">
            Dhamma School
          </span>
        </div>
      </a>

      <!-- Desktop Menu -->
      <div class="hidden md:flex items-center space-x-6">
        {#each [
          { path: '/news', label: 'News' },
          { path: '/about', label: 'About' },
          { path: '/gallery', label: 'Gallery' },
          { path: '/resources', label: 'Resources' }
        ] as item}
          <a
            href={item.path}
            class="relative text-white/80 hover:text-white transition-colors duration-300 py-2 group"
            aria-current={$page?.url?.pathname === item.path ? 'page' : undefined}
          >
            {item.label}
            <span class={`absolute bottom-0 left-0 w-0 h-0.5 bg-[#ffcd5a] transition-all duration-300 group-hover:w-full 
              ${$page?.url?.pathname === item.path ? 'w-full' : 'w-0'}`}></span>
          </a>
        {/each}
        <a
          href="/contact"
          class="bg-gradient-to-r from-[#ffcd5a] to-amber-500 text-[#001b47] font-medium px-5 py-2 rounded-lg hover:shadow-lg hover:from-amber-400 hover:to-amber-500 transition-all duration-300 transform hover:scale-105"
        >
          Contact
        </a>
        <a
          href="/"
          class="text-white/80 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10"
          aria-label="Home"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
        </a>
      </div>

      <!-- Mobile Menu Button -->
      <button 
        class="md:hidden inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#ffcd5a]" 
        on:click={toggleMenu}
        aria-expanded={isMenuOpen}
        aria-controls="mobile-menu"
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
      >
        <span class="sr-only">{isMenuOpen ? "Close menu" : "Open menu"}</span>
        {#if isMenuOpen}
          <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        {:else}
          <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        {/if}
      </button>
    </div>

    <!-- Mobile Menu -->
    {#if isMenuOpen}
      <div 
        id="mobile-menu"
        transition:slide={{ duration: 300 }} 
        class="md:hidden"
      >
        <div class="px-2 pt-2 pb-4 space-y-1 border-t border-white/10">
          {#each [
            { path: '/', label: 'Home', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
            { path: '/news', label: 'News', icon: 'M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z' },
            { path: '/about', label: 'About', icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' },
            { path: '/gallery', label: 'Gallery', icon: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z' },
            { path: '/resources', label: 'Resources', icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253' }
          ] as item}
            <a 
              href={item.path} 
              class={`flex items-center px-3 py-3 rounded-lg transition-colors duration-300 ${$page?.url?.pathname === item.path ? 'bg-white/10 text-[#ffcd5a]' : 'text-white/80 hover:bg-white/5 hover:text-white'}`}
              on:click={closeMenu}
              aria-current={$page?.url?.pathname === item.path ? 'page' : undefined}
            >
              <svg class="w-5 h-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d={item.icon} />
              </svg>
              {item.label}
            </a>
          {/each}
          
          <a
            href="/contact"
            class="flex items-center mt-2 bg-gradient-to-r from-[#ffcd5a] to-amber-500 text-[#001b47] font-medium px-4 py-3 rounded-lg"
            on:click={closeMenu}
          >
            <svg class="w-5 h-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Contact Us
          </a>
        </div>
      </div>
    {/if}
  </div>
</nav>

<!-- Spacer to prevent content from going under the navbar -->
<div class="h-20"></div>

<style>
  .animate-pulse {
    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  }
  
  @keyframes pulse {
    0%, 100% {
      opacity: 0.6;
    }
    50% {
      opacity: 0.3;
    }
  }
</style>
