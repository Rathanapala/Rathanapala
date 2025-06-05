<script>
  import { onMount } from 'svelte';
  import { fade, fly } from 'svelte/transition';
  import { cubicOut } from 'svelte/easing';
  
  let assistantVicePrincipalMessage = {
    name: "Mrs. Maduri Priyadeshani",
    title: "Assistant Vice Principal",
    message: "We strive to create an environment where students can learn and practice Buddhist values while developing their character and wisdom.",
    image: "/images/assistant_vice_principal.jpg",
    experience: "15+ years in Buddhist education",
    expertise: "Buddhist Philosophy & Meditation"
  };

  let mounted = false;
  
  onMount(() => {
    mounted = true;
  });
</script>

<svelte:head>
  <title>Assistant Vice Principal's Message - Sri Rathanapala Dhamma School</title>
</svelte:head>

<main class="min-h-screen bg-gradient-to-b from-amber-50 via-orange-50 to-amber-100 py-16">
  <div class="max-w-6xl mx-auto px-4">
    {#if mounted}
      <!-- Page Header -->
      <div class="text-center mb-12" in:fly={{ y: -30, duration: 800, easing: cubicOut }}>
        <h1 class="text-4xl md:text-5xl font-bold text-[#001b47] mb-4 tracking-tight">
          Message from the Assistant Vice Principal
        </h1>
        <div class="w-24 h-1 bg-gradient-to-r from-[#ffcd5a] to-orange-400 mx-auto rounded-full"></div>
      </div>

      <!-- Assistant Vice Principal Card -->
      <article class="bg-white rounded-2xl shadow-xl overflow-hidden mb-12" in:fade={{ duration: 800, delay: 200 }}>
        <div class="md:flex flex-row-reverse">
          <!-- Image Column -->
          <div class="md:w-2/5 relative">
            <!-- Assistant Vice Principal's Image -->
            <div class="h-80 md:h-full relative overflow-hidden">
              <img 
                src={assistantVicePrincipalMessage.image}
                alt={assistantVicePrincipalMessage.name} 
                class="w-full h-full object-cover object-center"
              >
              <div class="absolute inset-0 bg-gradient-to-t from-[#001b47]/70 via-transparent to-transparent"></div>
            </div>
            
            <!-- Assistant Vice Principal Info Overlay -->
            <div class="absolute bottom-0 right-0 w-full p-6 text-white text-right">
              <div class="flex items-center justify-end">
                <div>
                  <h2 class="text-2xl font-bold">{assistantVicePrincipalMessage.name}</h2>
                  <p class="text-white/80">{assistantVicePrincipalMessage.title}</p>
                </div>
                <div class="w-1 h-12 bg-[#ffcd5a] rounded-full ml-4"></div>
              </div>
            </div>

            <!-- Decorative Elements -->
            <div class="absolute top-0 right-0 w-full h-2 bg-gradient-to-r from-orange-400 to-[#ffcd5a]"></div>
          </div>
          
          <!-- Content Column -->
          <div class="md:w-3/5 p-8 md:p-10">
            <!-- Credentials -->
            <div class="flex flex-wrap gap-3 mb-6">
              <div class="bg-amber-50 text-amber-800 px-3 py-1 rounded-full text-sm font-medium inline-flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                {assistantVicePrincipalMessage.expertise}
              </div>
              
              <div class="bg-blue-50 text-[#001b47] px-3 py-1 rounded-full text-sm font-medium inline-flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {assistantVicePrincipalMessage.experience}
              </div>
            </div>
            
            <!-- Message Content -->
            <div class="space-y-6 text-gray-700 leading-relaxed">
              <!-- Quote -->
              <div class="relative pl-6 border-l-4 border-[#ffcd5a]/30 italic">
                <svg class="absolute -top-2 -left-2 w-8 h-8 text-[#ffcd5a]/20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p class="text-lg font-medium text-gray-800">
                  {assistantVicePrincipalMessage.message}
                </p>
              </div>
              
              <p>
                As the Assistant Vice Principal, I am deeply committed to upholding the values and traditions of Buddhist education while adapting to the needs of our modern students. Our approach combines traditional teachings with contemporary educational methods to ensure our students receive a well-rounded spiritual education.
              </p>
              
              <p>
                We emphasize the importance of meditation, mindfulness, and ethical conduct in daily life. These practices help our students develop inner peace, clarity of mind, and compassion for others, preparing them to be positive contributors to society.
              </p>
              
              <div class="pt-4">
                <div class="inline-block border-t-2 border-[#ffcd5a] pt-2 px-8">
                  <p class="font-bold text-[#001b47]">{assistantVicePrincipalMessage.name}</p>
                  <p class="text-sm text-gray-600">{assistantVicePrincipalMessage.title}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      <!-- Back Button -->
      <div class="mt-8 text-center" in:fade={{ duration: 600, delay: 600 }}>
        <a 
          href="/" 
          class="group relative inline-flex items-center overflow-hidden rounded-full bg-[#001b47] px-8 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#ffcd5a] focus:ring-offset-2 hover:shadow-lg transition-all duration-300"
        >
          <span class="absolute right-0 translate-x-full transition-transform group-hover:-translate-x-4">
            <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
          </span>
          
          <span class="text-sm font-medium transition-all group-hover:mr-4">Back to Home</span>
        </a>
      </div>
    {/if}
  </div>
</main>