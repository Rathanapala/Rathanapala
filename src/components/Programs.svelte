<script>
  import { fade, scale, fly } from 'svelte/transition';
  import { cubicOut, elasticOut } from 'svelte/easing';
  import { onMount } from 'svelte';
  
  const statements = [
    {
      title: 'Our Vision',
      description: 'To nurture mindful, compassionate, and enlightened young individuals who embody Buddhist values in their daily lives.',
      icon: '👁️',
      color: 'from-[#ffcd5a] to-amber-400',
      symbol: `<svg class="w-12 h-12 text-[#001b47]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd" />
              </svg>`
    },
    {
      title: 'Our Mission',
      description: 'To provide high-quality Buddhist education through innovative teaching methods while preserving traditional Buddhist values and practices.',
      icon: '🎯',
      color: 'from-orange-400 to-orange-500',
      symbol: `<svg class="w-12 h-12 text-[#001b47]" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clip-rule="evenodd" />
              </svg>`
    },
    {
      title: 'Our Values',
      description: 'We are committed to fostering wisdom, compassion, mindfulness, and ethical conduct in every aspect of our educational approach.',
      icon: '💫',
      color: 'from-[#001b47] to-[#002b70]',
      symbol: `<svg class="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>`
    }
  ];
  
  let hoveredItem = null;
  let isVisible = false;
  let mounted = false;

  onMount(() => {
    mounted = true;
  });
</script>

<div class="py-16 bg-gradient-to-b from-amber-50 to-orange-50" id="programs">
  <div class="max-w-6xl mx-auto px-4">
    <!-- Section Header -->
    {#if mounted}
      <div class="text-center mb-12" in:fly={{ y: -30, duration: 800, easing: cubicOut }}>
        <h2 class="text-4xl md:text-5xl font-bold text-[#001b47] mb-4 tracking-tight">
          Vision & Mission
        </h2>
        <div class="w-24 h-1 bg-gradient-to-r from-[#ffcd5a] to-orange-400 mx-auto rounded-full"></div>
        <p class="text-lg text-gray-600 mt-6 max-w-2xl mx-auto leading-relaxed">
          Guiding principles that shape our approach to Buddhist education
        </p>
      </div>
    {/if}

    <!-- Cards Grid -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
      {#each statements as statement, i}
        {#if mounted}
          <div 
            in:fly={{ y: 40, duration: 800, delay: 300 * i, easing: cubicOut }}
            class="relative bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-2xl group"
            role="region"
            aria-label={statement.title}
          >
            <!-- Top decorative bar -->
            <div class={`h-2 bg-gradient-to-r ${statement.color}`}></div>
            
            <div class="p-8">
              <!-- Icon Circle -->
              <div class="relative mb-6">
                <div class={`w-24 h-24 rounded-full bg-gradient-to-br ${statement.color} mx-auto flex items-center justify-center shadow-md transition-all duration-500 transform group-hover:scale-110`}>
                  {@html statement.symbol}
                </div>
                
                <!-- Decorative ring -->
                <div class="absolute inset-0 w-24 h-24 mx-auto rounded-full border-4 border-dashed border-gray-200 opacity-0 group-hover:opacity-100 group-hover:animate-spin-slow transition-opacity duration-300"></div>
              </div>
              
              <!-- Title -->
              <h3 class="text-2xl font-bold text-center mb-4 text-[#001b47]">
                {statement.title}
              </h3>
              
              <!-- Divider -->
              <div class={`w-12 h-1 mx-auto rounded-full bg-gradient-to-r ${statement.color} mb-4 transition-all duration-500 group-hover:w-24`}></div>
              
              <!-- Description -->
              <p class="text-gray-600 text-center leading-relaxed">
                {statement.description}
              </p>
            </div>
            
            <!-- Decorative element -->
            <div class="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-gray-100 opacity-20 transition-all duration-500 group-hover:scale-150 group-hover:opacity-10"></div>
          </div>
        {/if}
      {/each}
    </div>
  </div>
</div>

<style>
  @keyframes spin-slow {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  
  .animate-spin-slow {
    animation: spin-slow 20s linear infinite;
  }
</style>
