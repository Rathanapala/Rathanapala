<script>
    import { fade, fly, scale } from 'svelte/transition';
    import { cubicOut, elasticOut } from 'svelte/easing';
    import { onMount } from 'svelte';
    import principalImage from "../images/principal.jpg";
    import viceImage from "../images/vice_principal.jpg";
    import assistantViceImage from "../images/assistant_vice_principal.jpg";  // Add this import

    let mounted = false;
    
    onMount(() => {
      mounted = true;
    });

    export let principalMessage = {
      name: "Venerable Sooriyagoda Siri Dhamma Thero",
      title: "Principal",
      message: "Welcome to our Dhamma School. We are committed to nurturing young minds with the teachings of the Buddha and fostering a compassionate community.",
      image: principalImage,
      link: "",
    };
  
    export let vicePrincipalMessage = {
      name: "Mr. Ariyansena Weerathunga",
      title: "Vice Principal",
      message: "Our goal is to provide a holistic education that combines academic excellence with moral and spiritual growth.",
      image: viceImage,
      link: "",
    };

    export let assistantVicePrincipalMessage = {
      name: "Mrs. Maduri Priyadeshani",
      title: "Assistant Vice Principal",
      message: "We strive to create an environment where students can learn and practice Buddhist values while developing their character and wisdom.",
      image: assistantViceImage,
      link: "",
    };
</script>
  
<div class="py-16 bg-gradient-to-b from-amber-50 to-orange-50">
  <div class="max-w-6xl mx-auto px-4">
    <!-- Section Header -->
    {#if mounted}
      <div class="text-center mb-12" in:fly={{ y: -30, duration: 800, easing: cubicOut }}>
        <h2 class="text-4xl md:text-5xl font-bold text-[#001b47] mb-4 tracking-tight">
          Messages from Leadership
        </h2>
        <div class="w-24 h-1 bg-gradient-to-r from-[#ffcd5a] to-orange-400 mx-auto rounded-full"></div>
        <p class="text-lg text-gray-600 mt-6 max-w-2xl mx-auto leading-relaxed">
          Words of wisdom and guidance from our school's leadership
        </p>
      </div>
    {/if}

    <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
      <!-- Principal's Message -->
      {#if mounted}
        <div 
          class="bg-white rounded-2xl shadow-lg overflow-hidden group"
          in:fly={{ x: -30, duration: 800, delay: 200, easing: cubicOut }}
        >
          <div class="relative">
            <!-- Image with gradient overlay -->
            <div class="h-64 overflow-hidden">
              <img 
                src={principalMessage.image} 
                alt={principalMessage.name} 
                class="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              >
              <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
            </div>
            
            <!-- Top decorative bar -->
            <div class="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#ffcd5a] to-orange-400"></div>
            
            <!-- Name and title overlay -->
            <div class="absolute bottom-0 left-0 w-full p-6 text-white">
              <div class="flex items-center">
                <div class="w-1 h-12 bg-[#ffcd5a] rounded-full mr-4"></div>
                <div>
                  <h3 class="text-2xl font-bold">{principalMessage.name}</h3>
                  <p class="text-white/80">{principalMessage.title}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="p-6">
            <!-- Message quote -->
            <div class="relative">
              <svg class="absolute -top-2 -left-2 w-8 h-8 text-[#ffcd5a]/20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p class="text-gray-700 leading-relaxed mb-6 pl-6">"{principalMessage.message}"</p>
            </div>
            
            <!-- Read more button -->
            <div class="flex justify-end">
              <a 
                href={principalMessage.link} 
                class="group relative inline-flex items-center overflow-hidden rounded-full bg-[#001b47] px-8 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#ffcd5a] focus:ring-offset-2"
              >
                <span class="absolute right-0 translate-x-full transition-transform group-hover:-translate-x-4">
                  <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
                
                <span class="text-sm font-medium transition-all group-hover:mr-4">Read Full Message</span>
              </a>
            </div>
          </div>
        </div>
      {/if}

      <!-- Vice Principal's Message -->
      {#if mounted}
        <div 
          class="bg-white rounded-2xl shadow-lg overflow-hidden group"
          in:fly={{ x: 30, duration: 800, delay: 400, easing: cubicOut }}
        >
          <div class="relative">
            <!-- Image with gradient overlay -->
            <div class="h-64 overflow-hidden">
              <img 
                src={vicePrincipalMessage.image} 
                alt={vicePrincipalMessage.name} 
                class="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              >
              <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
            </div>
            
            <!-- Top decorative bar -->
            <div class="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#001b47] to-[#002b70]"></div>
            
            <!-- Name and title overlay -->
            <div class="absolute bottom-0 left-0 w-full p-6 text-white">
              <div class="flex items-center">
                <div class="w-1 h-12 bg-[#ffcd5a] rounded-full mr-4"></div>
                <div>
                  <h3 class="text-2xl font-bold">{vicePrincipalMessage.name}</h3>
                  <p class="text-white/80">{vicePrincipalMessage.title}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="p-6">
            <!-- Message quote -->
            <div class="relative">
              <svg class="absolute -top-2 -left-2 w-8 h-8 text-[#ffcd5a]/20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p class="text-gray-700 leading-relaxed mb-6 pl-6">"{vicePrincipalMessage.message}"</p>
            </div>
            
            <!-- Read more button -->
            <div class="flex justify-end">
              <a 
                href={vicePrincipalMessage.link} 
                class="group relative inline-flex items-center overflow-hidden rounded-full bg-[#001b47] px-8 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#ffcd5a] focus:ring-offset-2"
              >
                <span class="absolute right-0 translate-x-full transition-transform group-hover:-translate-x-4">
                  <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
                
                <span class="text-sm font-medium transition-all group-hover:mr-4">Read Full Message</span>
              </a>
            </div>
          </div>
        </div>
      {/if}

      <!-- Assistant Vice Principal's Message -->
      {#if mounted}
        <div 
          class="bg-white rounded-2xl shadow-lg overflow-hidden group"
          in:fly={{ x: -30, duration: 800, delay: 600, easing: cubicOut }}
        >
          <div class="relative">
            <!-- Image with gradient overlay -->
            <div class="h-64 overflow-hidden">
              <img 
                src={assistantVicePrincipalMessage.image} 
                alt={assistantVicePrincipalMessage.name} 
                class="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              >
              <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
            </div>
            
            <!-- Top decorative bar -->
            <div class="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#ffcd5a] to-orange-400"></div>
            
            <!-- Name and title overlay -->
            <div class="absolute bottom-0 left-0 w-full p-6 text-white">
              <div class="flex items-center">
                <div class="w-1 h-12 bg-[#ffcd5a] rounded-full mr-4"></div>
                <div>
                  <h3 class="text-2xl font-bold">{assistantVicePrincipalMessage.name}</h3>
                  <p class="text-white/80">{assistantVicePrincipalMessage.title}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="p-6">
            <!-- Message quote -->
            <div class="relative">
              <svg class="absolute -top-2 -left-2 w-8 h-8 text-[#ffcd5a]/20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p class="text-gray-700 leading-relaxed mb-6 pl-6">"{assistantVicePrincipalMessage.message}"</p>
            </div>
            
            <!-- Read more button -->
            <div class="flex justify-end">
              <a 
                href={assistantVicePrincipalMessage.link} 
                class="group relative inline-flex items-center overflow-hidden rounded-full bg-[#001b47] px-8 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#ffcd5a] focus:ring-offset-2"
              >
                <span class="absolute right-0 translate-x-full transition-transform group-hover:-translate-x-4">
                  <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
                
                <span class="text-sm font-medium transition-all group-hover:mr-4">Read Full Message</span>
              </a>
            </div>
          </div>
        </div>
      {/if}
    </div>
  </div>
</div>