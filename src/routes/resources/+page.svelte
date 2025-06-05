<script>
  import { onMount } from 'svelte';
  import { fade, fly } from 'svelte/transition';
  import { cubicOut } from 'svelte/easing';

  let resources = [];
  let search = '';
  let selectedGrade = 'all';
  let selectedSection = 'textbooks'; // Add this line
  let mounted = false;
  let isSearchFocused = false;
  
  const textbooks = [
    { name: 'Grade 01 Dhamma School Text Book', url: 'https://files.catbox.moe/oy0bgu.pdf', grade: '1', type: 'textbook' },
    { name: 'Grade 02 Dhamma School Text Book', url: 'https://files.catbox.moe/u56coy.pdf', grade: '2', type: 'textbook' },
    { name: 'Grade 03 Dhamma School Text Book', url: 'https://files.catbox.moe/kditd0.pdf', grade: '3', type: 'textbook' },
    { name: 'Grade 04 Dhamma School Text Book', url: 'https://files.catbox.moe/01p4zj.pdf', grade: '4', type: 'textbook' },
    { name: 'Grade 05 Dhamma School Text Book', url: 'https://files.catbox.moe/vtpzca.pdf', grade: '5', type: 'textbook' },
    { name: 'Grade 06 Dhamma School Text Book', url: 'https://files.catbox.moe/56oxq8.pdf', grade: '6', type: 'textbook' },
    { name: 'Grade 07 Dhamma School Text Book', url: 'https://files.catbox.moe/ateh1r.pdf', grade: '7', type: 'textbook' },
    { name: 'Grade 08 Dhamma School Text Book', url: 'https://files.catbox.moe/71v6ss.pdf', grade: '8', type: 'textbook' },
    { name: 'Grade 09 Dhamma School Text Book', url: 'https://files.catbox.moe/fuuwot.pdf', grade: '9', type: 'textbook' },
    { name: 'Grade 10 Dhamma School Text Book', url: 'https://files.catbox.moe/kypctp.pdf', grade: '10', type: 'textbook' },
  ];

  const principalPublications = [
    { 
      name: 'Buddhist Philosophy in Modern Context',
      url: 'https://example.com/publication1.pdf',
      year: '2023',
      type: 'publication',
      description: 'A comprehensive analysis of Buddhist teachings in contemporary society'
    },
    { 
      name: 'Meditation Practices for Young Minds',
      url: 'https://example.com/publication2.pdf',
      year: '2022',
      type: 'publication',
      description: 'Guide to introducing meditation to children and young adults'
    },
    // Add more publications as needed
  ];

  $: filteredResources = selectedSection === 'textbooks' 
    ? textbooks.filter(r => {
        const matchesSearch = r.name.toLowerCase().includes(search.toLowerCase());
        const matchesGrade = selectedGrade === 'all' || r.grade === selectedGrade;
        return matchesSearch && matchesGrade;
      })
    : principalPublications.filter(r => 
        r.name.toLowerCase().includes(search.toLowerCase())
      );

  onMount(() => {
    const savedResources = localStorage.getItem('resources');
    if (savedResources) {
      resources = JSON.parse(savedResources);
    }
    mounted = true;
  });

  function getGradeColor(grade) {
    const colors = [
      'from-blue-500 to-blue-600',   // Grade 1
      'from-green-500 to-green-600', // Grade 2
      'from-purple-500 to-purple-600', // Grade 3
      'from-pink-500 to-pink-600',   // Grade 4
      'from-yellow-500 to-yellow-600', // Grade 5
      'from-indigo-500 to-indigo-600', // Grade 6
      'from-red-500 to-red-600',     // Grade 7
      'from-teal-500 to-teal-600',   // Grade 8
      'from-orange-500 to-orange-600', // Grade 9
      'from-cyan-500 to-cyan-600',   // Grade 10
    ];
    
    return colors[parseInt(grade) - 1] || 'from-gray-500 to-gray-600';
  }
</script>

<div class="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
  <div class="max-w-7xl mx-auto px-4 py-16">
    <!-- Header Section -->
    {#if mounted}
      <div class="text-center mb-12" in:fly={{ y: -30, duration: 800, easing: cubicOut }}>
        <h1 class="text-5xl md:text-6xl font-bold text-[#001b47] mb-4 tracking-tight">
          Learning Resources
        </h1>
        <div class="w-24 h-1 bg-gradient-to-r from-[#ffcd5a] to-orange-400 mx-auto rounded-full"></div>
        <p class="text-lg text-gray-600 mt-6 max-w-2xl mx-auto leading-relaxed">
          Browse through our collection of Dhamma School textbooks and educational materials
        </p>
      </div>
    {/if}

    <!-- Enhanced Search and Filter Section -->
    {#if mounted}
      <div class="max-w-4xl mx-auto mb-12" in:fly={{ y: 30, duration: 600, delay: 200, easing: cubicOut }}>
        <div class="bg-white rounded-xl shadow-lg p-6 md:p-8">
          <div class="md:flex items-center space-y-4 md:space-y-0 md:space-x-4">
            <!-- Search Input -->
            <div class="relative flex-1">
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg class={`w-5 h-5 ${isSearchFocused ? 'text-[#ffcd5a]' : 'text-gray-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input 
                type="text" 
                bind:value={search} 
                placeholder="Search resources..." 
                class="pl-10 w-full py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-[#ffcd5a] focus:border-[#ffcd5a] transition-all duration-200 outline-none"
                on:focus={() => isSearchFocused = true}
                on:blur={() => isSearchFocused = false}
              />
            </div>
            
            <!-- Grade Filter -->
            <div class="relative">
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4h13M3 8h9m-9 4h6m4 0l-4-4m0 0l-4 4m4-4v12" />
                </svg>
              </div>
              <select 
                bind:value={selectedGrade}
                class="pl-10 pr-8 py-3 border-2 border-gray-200 rounded-lg bg-white appearance-none cursor-pointer focus:ring-2 focus:ring-[#ffcd5a] focus:border-[#ffcd5a] transition-all duration-200 outline-none"
              >
                <option value="all">All Grades</option>
                {#each Array(10) as _, i}
                  <option value={`${i + 1}`}>Grade {i + 1}</option>
                {/each}
              </select>
              <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>

            <!-- Section Filter -->
            <div class="relative">
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4h18M3 10h18M3 16h18" />
                </svg>
              </div>
              <select 
                bind:value={selectedSection}
                class="pl-10 pr-8 py-3 border-2 border-gray-200 rounded-lg bg-white appearance-none cursor-pointer focus:ring-2 focus:ring-[#ffcd5a] focus:border-[#ffcd5a] transition-all duration-200 outline-none"
              >
                <option value="textbooks">Textbooks</option>
                <option value="publications">Principal Publications</option>
              </select>
              <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    {/if}

    <!-- Add this after the header section -->
    {#if mounted}
      <div class="max-w-4xl mx-auto mb-8" in:fly={{ y: 30, duration: 600, delay: 100, easing: cubicOut }}>
        <div class="flex justify-center space-x-4">
          <button
            class={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
              selectedSection === 'textbooks'
                ? 'bg-[#001b47] text-white'
                : 'bg-white text-gray-600 hover:bg-gray-50'
            }`}
            on:click={() => selectedSection = 'textbooks'}
          >
            <div class="flex items-center">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              Textbooks
            </div>
          </button>
          <button
            class={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
              selectedSection === 'publications'
                ? 'bg-[#001b47] text-white'
                : 'bg-white text-gray-600 hover:bg-gray-50'
            }`}
            on:click={() => selectedSection = 'publications'}
          >
            <div class="flex items-center">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2.5 2.5 0 00-2.5-2.5H14" />
              </svg>
              Principal's Publications
            </div>
          </button>
        </div>
      </div>
    {/if}

    <!-- Resources Section -->
    {#if mounted}
      <div class="mt-8" in:fade={{ duration: 500, delay: 300 }}>
        {#if filteredResources.length === 0}
          <div class="text-center py-16 bg-white rounded-xl shadow-md">
            <div class="w-20 h-20 bg-amber-100 rounded-full mx-auto flex items-center justify-center mb-4">
              <svg class="w-10 h-10 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-700 mb-2">No resources match your search</h3>
            <p class="text-gray-500">Try adjusting your search or filter settings</p>
          </div>
        {:else}
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {#each filteredResources as resource, i}
              <div 
                class="resource-card group"
                in:fly={{ y: 20, duration: 400, delay: i * 50, easing: cubicOut }}
              >
                <div class="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                  {#if selectedSection === 'textbooks'}
                    <!-- Existing textbook card content -->
                    <div class={`h-2 bg-gradient-to-r ${getGradeColor(resource.grade)}`}></div>
                    <div class="p-6">
                      <!-- Grade Badge -->
                      <div class="flex justify-between items-start mb-3">
                        <span class={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getGradeColor(resource.grade)} text-white`}>
                          Grade {resource.grade}
                        </span>
                        <span class="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-blue-50 text-blue-700">
                          PDF
                        </span>
                      </div>
                      
                      <!-- Title -->
                      <h3 class="text-lg font-semibold text-gray-800 mb-3 line-clamp-2">{resource.name}</h3>
                      
                      <!-- Action Buttons -->
                      <div class="grid grid-cols-2 gap-3 mt-3">
                        <!-- Preview Button -->
                        <a 
                          href={resource.url}
                          target="_blank" 
                          rel="noopener noreferrer"
                          class="flex items-center justify-center py-2 rounded-lg bg-white border-2 border-[#001b47] text-[#001b47] font-medium transition-all duration-200 hover:bg-gray-50 focus:ring-2 focus:ring-offset-2 focus:ring-[#001b47] focus:outline-none"
                        >
                          <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                          Preview
                        </a>
                        
                        <!-- Download Button -->
                        <a 
                          href={`${resource.url}?download=true`}
                          target="_blank" 
                          rel="noopener noreferrer"
                          class="flex items-center justify-center py-2 rounded-lg bg-[#001b47] text-white font-medium transition-all duration-200 hover:bg-[#002b70] focus:ring-2 focus:ring-offset-2 focus:ring-[#001b47] focus:outline-none"
                        >
                          <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                          </svg>
                          Download
                        </a>
                      </div>
                    </div>
                  {:else}
                    <!-- Publication card content -->
                    <div class="h-2 bg-gradient-to-r from-[#001b47] to-[#002b70]"></div>
                    <div class="p-6">
                      <div class="flex justify-between items-start mb-3">
                        <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
                          {resource.year}
                        </span>
                        <span class="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-blue-50 text-blue-700">
                          PDF
                        </span>
                      </div>
                      
                      <h3 class="text-lg font-semibold text-gray-800 mb-3 line-clamp-2">{resource.name}</h3>
                      <p class="text-sm text-gray-600 mb-4 line-clamp-2">{resource.description}</p>
                      
                      <!-- Action Buttons -->
                      <div class="grid grid-cols-2 gap-3 mt-3">
                        <!-- Preview Button -->
                        <a 
                          href={resource.url}
                          target="_blank" 
                          rel="noopener noreferrer"
                          class="flex items-center justify-center py-2 rounded-lg bg-white border-2 border-[#001b47] text-[#001b47] font-medium transition-all duration-200 hover:bg-gray-50 focus:ring-2 focus:ring-offset-2 focus:ring-[#001b47] focus:outline-none"
                        >
                          <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                          Preview
                        </a>
                        
                        <!-- Download Button -->
                        <a 
                          href={`${resource.url}?download=true`}
                          target="_blank" 
                          rel="noopener noreferrer"
                          class="flex items-center justify-center py-2 rounded-lg bg-[#001b47] text-white font-medium transition-all duration-200 hover:bg-[#002b70] focus:ring-2 focus:ring-offset-2 focus:ring-[#001b47] focus:outline-none"
                        >
                          <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                          </svg>
                          Download
                        </a>
                      </div>
                    </div>
                  {/if}
                </div>
              </div>
            {/each}
          </div>
        {/if}
      </div>
    {/if}

    <!-- Footer Section -->
    {#if mounted}
      <div class="text-center mt-16" in:fade={{ duration: 600, delay: 400 }}>
        <div class="w-16 h-1 bg-gray-200 mx-auto mb-6"></div>
        <p class="text-gray-500 text-sm">
          These resources are provided for educational purposes. 
          <br class="hidden md:inline">
          For more information, please contact the Dhamma School administration.
        </p>
      </div>
    {/if}
  </div>
</div>

<style>
  :global(body) {
    font-family: 'Inter', 'system-ui', sans-serif;
  }
  
  .line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
</style>