<script>
  import { onMount } from 'svelte';
  import { fade, fly } from 'svelte/transition';
  import { cubicOut } from 'svelte/easing';
  
  export let data;
  let mounted = false;
  
  onMount(() => {
    mounted = true;
  });
  
  function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  }
</script>

<div class="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
  <div class="max-w-7xl mx-auto px-4 py-16">
    <!-- Header Section -->
    {#if mounted}
      <div class="text-center mb-12" in:fly={{ y: -30, duration: 800, easing: cubicOut }}>
        <h1 class="text-5xl md:text-6xl font-bold text-[#001b47] mb-4 tracking-tight">
          Latest News & Events
        </h1>
        <div class="w-24 h-1 bg-gradient-to-r from-[#ffcd5a] to-orange-400 mx-auto rounded-full"></div>
        <p class="text-lg text-gray-600 mt-6 max-w-2xl mx-auto leading-relaxed">
          Stay updated with the latest happenings, announcements, and activities at our Dhamma School
        </p>
      </div>
    {/if}

    <!-- News Grid -->
    <div class="mt-8">
      {#if data.articles.length === 0}
        <!-- Empty State -->
        <div class="text-center py-16 bg-white rounded-xl shadow-md">
          <div class="w-20 h-20 bg-amber-100 rounded-full mx-auto flex items-center justify-center mb-4">
            <svg class="w-10 h-10 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-gray-700 mb-2">No news items available</h3>
          <p class="text-gray-500">Check back soon for updates and announcements</p>
        </div>
      {:else}
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {#each data.articles as article, i}
            {#if mounted}
              <div 
                class="h-full" 
                in:fly={{ y: 50, duration: 600, delay: i * 150, easing: cubicOut }}
              >
                <article class="bg-white rounded-2xl shadow-lg overflow-hidden h-full flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                  <!-- Image with overlay -->
                  <div class="relative overflow-hidden">
                    <img 
                      src={article.mainImage} 
                      alt={article.title} 
                      class="w-full h-56 object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#ffcd5a] to-orange-400"></div>
                    
                    <!-- Date badge -->
                    <div class="absolute bottom-0 right-0 bg-[#001b47] text-white px-3 py-1 text-sm font-medium rounded-tl-lg">
                      {formatDate(article.publishedAt)}
                    </div>
                  </div>
                  
                  <div class="p-6 flex-grow flex flex-col">
                    <!-- Categories/Tags if available -->
                    {#if article.categories && article.categories.length}
                      <div class="flex flex-wrap gap-2 mb-3">
                        {#each article.categories as category}
                          <span class="bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded-full">
                            {category}
                          </span>
                        {/each}
                      </div>
                    {/if}
                    
                    <!-- Title -->
                    <h2 class="text-xl font-bold text-[#001b47] mb-3 line-clamp-2">{article.title}</h2>
                    
                    <!-- Excerpt if available -->
                    {#if article.excerpt}
                      <p class="text-gray-600 mb-4 line-clamp-3 text-sm flex-grow">{article.excerpt}</p>
                    {:else}
                      <div class="flex-grow"></div>
                    {/if}
                    
                    <!-- Action buttons -->
                    <div class="flex gap-3 mt-4">
                      <a 
                        href={`/news/${article.slug.current}`} 
                        class="flex-1 inline-flex justify-center items-center py-2.5 px-4 rounded-lg bg-[#001b47] text-white font-medium transition-all duration-200 hover:bg-[#002c71] focus:ring-2 focus:ring-offset-2 focus:ring-[#001b47] focus:outline-none"
                      >
                        <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        Read More
                      </a>
                      
                      {#if article.hasGallery}
                        <a 
                          href="/gallery#avurudu" 
                          class="inline-flex justify-center items-center py-2.5 px-4 rounded-lg border-2 border-[#001b47] text-[#001b47] font-medium transition-all duration-200 hover:bg-[#001b47] hover:text-white focus:ring-2 focus:ring-offset-2 focus:ring-[#001b47] focus:outline-none"
                        >
                          <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          Gallery
                        </a>
                      {/if}
                    </div>
                  </div>
                </article>
              </div>
            {/if}
          {/each}
        </div>
      {/if}
    </div>

    <!-- Bottom decoration -->
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
  
  .line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  
  .line-clamp-3 {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
</style>