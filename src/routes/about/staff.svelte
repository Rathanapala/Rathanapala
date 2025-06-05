<script>
  import { fade, fly, scale } from "svelte/transition";
  import { cubicOut } from "svelte/easing";
  import { onMount } from "svelte";
  import staff from "../../data/people/staff";
  import prefects from "../../data/people/prefects";
  import alumni from "../../data/people/alumni";

  // Staff, prefects, and alumni data
  const data = {
    staff,
    prefects,
    alumni,
  };

  let activeTab = "staff";
  let mounted = false;
  
  onMount(() => {
    mounted = true;
  });

  // Tab definitions with icons
  const tabs = [
    { id: "staff", label: "Teaching Staff", icon: "M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z M12 14l-6.16-3.422a12.083 12.083 0 00-.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 016.824-2.998 12.078 12.078 0 00-.665-6.479L12 14z" },
    { id: "prefects", label: "Student Prefects", icon: "M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" },
    { id: "alumni", label: "Student Council", icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 114 0v2M7 7h10" }
  ];
</script>

<div class="bg-gradient-to-b from-amber-50 to-orange-50 py-12">
  <div class="max-w-6xl mx-auto px-4">
    {#if mounted}
      <!-- Section Header -->
      <div class="text-center mb-12" in:fly={{ y: -30, duration: 800, easing: cubicOut }}>
        <h2 class="text-4xl md:text-5xl font-bold text-[#001b47] mb-4 tracking-tight">
          Our Community
        </h2>
        <div class="w-24 h-1 bg-gradient-to-r from-[#ffcd5a] to-orange-400 mx-auto rounded-full"></div>
        <p class="text-lg text-gray-600 mt-6 max-w-2xl mx-auto leading-relaxed">
          Meet the dedicated individuals who make our Dhamma School a vibrant place of learning
        </p>
      </div>
    {/if}

    <!-- Tab Navigation -->
    <div class="flex justify-center mb-10">
      <div class="bg-white rounded-xl shadow-md p-2 inline-flex relative">
        {#each tabs as tab, i}
          {#if mounted}
            <button
              class="relative px-5 py-3 rounded-lg transition-all duration-300 font-medium text-base whitespace-nowrap flex items-center z-10"
              class:text-white={activeTab === tab.id}
              class:text-[#001b47]={activeTab !== tab.id}
              on:click={() => (activeTab = tab.id)}
              in:fade={{ delay: 100 + i * 100, duration: 300 }}
            >
              <!-- Tab Icon -->
              <svg class="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d={tab.icon} />
              </svg>
              {tab.label}
            </button>
          {/if}
        {/each}
        
        <!-- Active Tab Background - Animated -->
        <div
          class="absolute top-2 bottom-2 rounded-lg bg-gradient-to-r from-[#001b47] to-[#002b70] shadow-md transition-all duration-300 ease-in-out"
          style={`left: ${tabs.findIndex(t => t.id === activeTab) * 33.33}%; width: 33.33%;`}
        ></div>
      </div>
    </div>

    <!-- Staff Cards -->
    <div class="space-y-8">
      {#if activeTab === "staff"}
        {#each staff as member, i}
          {#if mounted}
            <div
              class="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              in:fly={{ y: 30, delay: 200 + i * 100, duration: 500, easing: cubicOut }}
            >
              <div class="grid grid-cols-1 md:grid-cols-4">
                <!-- Profile Section with Picture -->
                <div class="bg-gradient-to-br from-[#001b47] to-[#002b70] p-6 flex flex-col items-center justify-center text-center">
                  <div class="w-32 h-32 rounded-full bg-white/10 mb-4 overflow-hidden border-4 border-[#ffcd5a]/60 shadow-lg">
                    <img
                      src={`/api/placeholder/128/128`}
                      alt={member.name}
                      class="w-full h-full object-cover"
                    />
                  </div>
                  <h3 class="text-xl font-bold text-white mb-1">{member.name}</h3>
                  <p class="text-[#ffcd5a] font-medium mb-3">{member.role}</p>
                  
                  <!-- Teaching Class Badge -->
                  <div class="bg-white/10 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm inline-flex items-center">
                    <svg class="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                    {member.class}
                  </div>
                </div>

                <!-- Info Section -->
                <div class="md:col-span-3 p-8">
                  <!-- Top decoration bar -->
                  <div class="w-20 h-1.5 bg-gradient-to-r from-[#ffcd5a] to-orange-400 rounded-full mb-6"></div>
                  
                  <p class="text-gray-700 mb-6 leading-relaxed">{member.description}</p>
                  
                  <!-- Additional Information -->
                  <div class="bg-amber-50 p-4 rounded-lg">
                    <h4 class="font-semibold text-lg text-[#001b47] mb-3">Expertise & Qualifications</h4>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div class="flex items-start">
                        <div class="bg-amber-100 p-1.5 rounded-md mr-3">
                          <svg class="w-4 h-4 text-amber-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                          </svg>
                        </div>
                        <span>Buddhist Philosophy</span>
                      </div>
                      <div class="flex items-start">
                        <div class="bg-amber-100 p-1.5 rounded-md mr-3">
                          <svg class="w-4 h-4 text-amber-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                          </svg>
                        </div>
                        <span>Dharma Education (10+ Years)</span>
                      </div>
                      <div class="flex items-start">
                        <div class="bg-amber-100 p-1.5 rounded-md mr-3">
                          <svg class="w-4 h-4 text-amber-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                          </svg>
                        </div>
                        <span>Meditation Instruction</span>
                      </div>
                      <div class="flex items-start">
                        <div class="bg-amber-100 p-1.5 rounded-md mr-3">
                          <svg class="w-4 h-4 text-amber-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                          </svg>
                        </div>
                        <span>Pali Language</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          {/if}
        {/each}
      {:else if activeTab === "prefects"}
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {#each prefects as prefect, i}
            {#if mounted}
              <div
                class="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                in:fly={{ y: 30, delay: 200 + i * 100, duration: 500, easing: cubicOut }}
              >
                <!-- Profile Image Section -->
                <div class="bg-gradient-to-br from-[#001b47] to-[#002b70] p-6 flex flex-col items-center justify-center text-center">
                  <div class="w-24 h-24 rounded-full bg-white/10 mb-4 overflow-hidden border-4 border-[#ffcd5a]/60 shadow-lg">
                    <img
                      src={`/api/placeholder/96/96`}
                      alt={prefect.name}
                      class="w-full h-full object-cover"
                    />
                  </div>
                  <h3 class="text-lg font-bold text-white mb-1">{prefect.name}</h3>
                  <p class="text-[#ffcd5a] text-sm font-medium mb-3">{prefect.role}</p>
                  
                  <!-- Year Badge -->
                  <div class="bg-white/10 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm">
                    {prefect.year}
                  </div>
                </div>
                
                <!-- Info Section -->
                <div class="p-6">
                  <div class="w-16 h-1 bg-gradient-to-r from-[#ffcd5a] to-orange-400 rounded-full mb-4"></div>
                  <p class="text-gray-600 text-sm leading-relaxed mb-4">{prefect.description || 'Dedicated student leader contributing to the growth and development of our Dhamma School community.'}</p>
                  
                  <!-- Prefect Badge -->
                  <div class="inline-flex items-center bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-xs font-medium">
                    <svg class="w-3 h-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                    Prefect
                  </div>
                </div>
              </div>
            {/if}
          {/each}
        </div>
      {:else if activeTab === "alumni"}
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {#each alumni as person, i}
            {#if mounted}
              <div
                class="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                in:fly={{ y: 30, delay: 200 + i * 100, duration: 500, easing: cubicOut }}
              >
                <!-- Profile Image Section -->
                <div class="bg-gradient-to-br from-[#001b47] to-[#002b70] p-6 flex flex-col items-center justify-center text-center">
                  <div class="w-24 h-24 rounded-full bg-white/10 mb-4 overflow-hidden border-4 border-[#ffcd5a]/60 shadow-lg">
                    <img
                      src={`/api/placeholder/96/96`}
                      alt={person.name}
                      class="w-full h-full object-cover"
                    />
                  </div>
                  <h3 class="text-lg font-bold text-white mb-1">{person.name}</h3>
                  <p class="text-[#ffcd5a] text-sm font-medium mb-3">{person.role}</p>
                  
                  <!-- Year Badge -->
                  <div class="bg-white/10 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm">
                    {person.year}
                  </div>
                </div>
                
                <!-- Info Section -->
                <div class="p-6">
                  <div class="w-16 h-1 bg-gradient-to-r from-[#ffcd5a] to-orange-400 rounded-full mb-4"></div>
                  
                  <!-- Achievements Section -->
                  <div class="mb-4">
                    <h4 class="text-sm font-semibold text-gray-700 mb-2">Key Achievements</h4>
                    <p class="text-gray-600 text-sm leading-relaxed">{person.achievements || 'Active member of the student council, contributing to school development and student welfare.'}</p>
                  </div>
                  
                  <!-- Council Member Badge -->
                  <div class="inline-flex items-center text-xs text-gray-500">
                    <svg class="w-4 h-4 mr-1 text-[#ffcd5a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                    </svg>
                    <span>Student Council Member</span>
                  </div>
                </div>
              </div>
            {/if}
          {/each}
        </div>
      {/if}
    </div>
  </div>
</div>