<script>
  import { PortableText } from '@portabletext/svelte';
  import { onMount } from 'svelte';
  import { fade, fly } from 'svelte/transition';
  import { cubicOut } from 'svelte/easing';
  
  export let data;
  let mounted = false;
  
  onMount(() => {
    mounted = true;
    // Smooth scroll to top when article loads
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  
  function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  }
</script>

<main class="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 py-16">
  {#if mounted}
    <div class="max-w-4xl mx-auto px-4 sm:px-6">
      <!-- Back Button -->
      <div class="mb-8" in:fly={{ x: -20, duration: 400, easing: cubicOut }}>
        <a href="/news" class="inline-flex items-center text-[#001b47] hover:text-[#ffcd5a] transition-colors duration-200">
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to News
        </a>
      </div>
      
      <!-- Article Card -->
      <article class="bg-white rounded-2xl shadow-xl overflow-hidden" in:fly={{ y: 30, duration: 600, easing: cubicOut }}>
        <!-- Featured Image with Overlay -->
        {#if data.article.mainImage}
          <div class="relative">
            <img
              src={data.article.mainImage}
              alt={data.article.title}
              class="w-full h-64 md:h-96 object-cover"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent">
              <!-- Article metadata overlay -->
              <div class="absolute bottom-0 left-0 w-full p-6 md:p-8">
                {#if data.article.categories?.length}
                  <div class="flex flex-wrap gap-2 mb-4">
                    {#each data.article.categories as category}
                      <span class="bg-white/20 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full">
                        {category}
                      </span>
                    {/each}
                  </div>
                {/if}
                <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold text-white drop-shadow-lg mb-2">
                  {data.article.title}
                </h1>
                <div class="flex items-center text-white/80 text-sm">
                  <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {formatDate(data.article.publishedAt)}
                </div>
              </div>
            </div>
            <!-- Top decorative line -->
            <div class="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#ffcd5a] to-orange-400"></div>
          </div>
        {:else}
          <!-- If no image, show title in header -->
          <div class="bg-gradient-to-br from-[#001b47] to-[#002c71] p-8">
            {#if data.article.categories?.length}
              <div class="flex flex-wrap gap-2 mb-4">
                {#each data.article.categories as category}
                  <span class="bg-white/20 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full">
                    {category}
                  </span>
                {/each}
              </div>
            {/if}
            <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3">
              {data.article.title}
            </h1>
            <div class="flex items-center text-white/80 text-sm">
              <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {formatDate(data.article.publishedAt)}
            </div>
          </div>
        {/if}
        
        <!-- Article Content -->
        <div class="p-6 md:p-10">
          {#if data.article.excerpt}
            <div class="mb-8 border-l-4 border-[#ffcd5a] pl-4 italic text-gray-600" in:fade={{ duration: 800, delay: 300 }}>
              {data.article.excerpt}
            </div>
          {/if}
          
          {#if data.article.body?.length}
            <div class="prose prose-lg max-w-none" in:fade={{ duration: 800, delay: 400 }}>
              <PortableText value={data.article.body} />
            </div>
          {:else}
            <p class="italic text-gray-500 text-center py-10">No article content found.</p>
          {/if}
        </div>
        
        <!-- Footer with sharing options and related content -->
        <div class="border-t border-gray-100 p-6 md:p-8 bg-gray-50 rounded-b-2xl">
          <div class="flex flex-wrap justify-between items-center">
            <!-- Sharing Buttons -->
            <div class="flex items-center space-x-3">
              <span class="text-sm text-gray-500">Share:</span>
              <button class="w-8 h-8 flex items-center justify-center rounded-full bg-[#001b47] text-white hover:bg-[#002c71] transition-colors">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/>
                </svg>
              </button>
              <button class="w-8 h-8 flex items-center justify-center rounded-full bg-[#001b47] text-white hover:bg-[#002c71] transition-colors">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.44 4.83c-.8.37-1.5.38-2.22.02.93-.56.98-.96 1.32-2.02-.88.52-1.86.9-2.9 1.1-.82-.88-2-1.43-3.3-1.43-2.5 0-4.55 2.04-4.55 4.54 0 .36.03.7.1 1.04-3.77-.2-7.12-2-9.36-4.75-.4.67-.6 1.45-.6 2.3 0 1.56.8 2.95 2 3.77-.74-.03-1.44-.23-2.05-.57v.06c0 2.2 1.56 4.03 3.64 4.44-.67.2-1.37.2-2.06.08.58 1.8 2.26 3.12 4.25 3.16C5.78 18.1 3.37 18.74 1 18.46c2 1.3 4.4 2.04 6.97 2.04 8.35 0 12.92-6.92 12.92-12.93 0-.2 0-.4-.02-.6.9-.63 1.96-1.22 2.56-2.14z"/>
                </svg>
              </button>
              <button class="w-8 h-8 flex items-center justify-center rounded-full bg-[#001b47] text-white hover:bg-[#002c71] transition-colors">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                </svg>
              </button>
            </div>
            
            <!-- Back to Top Button -->
            <a href="#top" class="mt-4 sm:mt-0 inline-flex items-center bg-[#ffcd5a] text-[#001b47] px-4 py-2 rounded-full font-medium hover:bg-amber-400 transition-colors">
              <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 11l7-7 7 7M5 19l7-7 7 7" />
              </svg>
              Back to Top
            </a>
          </div>
        </div>
      </article>
      
      <!-- Suggested Articles -->
      {#if data.related && data.related.length > 0}
        <div class="mt-12" in:fade={{ duration: 600, delay: 600 }}>
          <h2 class="text-2xl font-bold text-[#001b47] mb-6">Related Articles</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            {#each data.related.slice(0, 2) as article}
              <a href={`/news/${article.slug.current}`} class="group block bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div class="relative h-40 overflow-hidden">
                  <img src={article.mainImage} alt={article.title} class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <h3 class="absolute bottom-0 left-0 text-white font-bold p-4">{article.title}</h3>
                </div>
              </a>
            {/each}
          </div>
        </div>
      {/if}
    </div>
  {/if}
</main>

<style>
  /* Enhance typography */
  :global(body) {
    font-family: 'Inter', 'system-ui', sans-serif;
  }
  
  /* Portable Text Content Styling */
  :global(.prose) {
    font-family: 'Georgia', serif;
    line-height: 1.8;
  }

  :global(.prose h1, .prose h2, .prose h3) {
    color: #001b47;
    font-family: 'Inter', 'system-ui', sans-serif;
    margin-top: 1.5em;
    margin-bottom: 0.75em;
  }
  
  :global(.prose h2) {
    font-size: 1.75rem;
    border-bottom: 2px solid rgba(255, 205, 90, 0.3);
    padding-bottom: 0.5rem;
  }

  :global(.prose h3) {
    font-size: 1.5rem;
  }

  :global(.prose p) {
    margin-bottom: 1.5em;
  }

  :global(.prose a) {
    color: #1d4ed8;
    text-decoration: underline;
    text-decoration-color: rgba(29, 78, 216, 0.4);
    transition: all 0.2s ease;
  }

  :global(.prose a:hover) {
    color: #2563eb;
    text-decoration-color: rgba(37, 99, 235, 0.8);
  }
  
  :global(.prose strong) {
    color: #001b47;
  }
  
  :global(.prose ul li), :global(.prose ol li) {
    margin-bottom: 0.5em;
  }
  
  :global(.prose blockquote) {
    border-left: 4px solid #ffcd5a;
    padding-left: 1rem;
    font-style: italic;
    color: #4b5563;
  }
  
  :global(.prose img) {
    border-radius: 0.5rem;
    margin: 2rem auto;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  }
  
  :global(.prose figure) {
    margin: 2rem 0;
  }
  
  :global(.prose figcaption) {
    text-align: center;
    font-size: 0.875rem;
    color: #6b7280;
    margin-top: 0.5rem;
  }
</style>