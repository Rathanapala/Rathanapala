<script>
  import { onMount } from "svelte";
  import { fade, fly, scale } from 'svelte/transition';
  import { cubicOut } from 'svelte/easing';
  import firebaseApp from "$lib/firebaseProject";
  import { collection, getDocs, getFirestore } from "firebase/firestore";
  const db = getFirestore(firebaseApp);

  let galleries = [];
  let selectedGallery = null;
  let showModal = false;
  let selectedImageIndex = 0;
  let mounted = false;
  let loading = true;

  onMount(async () => {
    mounted = true;
    try {
      const snapshot = await getDocs(collection(db, "gallery"));
      let loadedGalleries = [];
      snapshot.forEach((doc, index) => {
        const data = doc.data();
        loadedGalleries.push({
          id: doc.id,
          title: data.title || `Gallery ${index + 1}`,
          description: data.description || "Event gallery",
          images: JSON.parse(data.images || "[]"),
          alts: JSON.parse(data.alts || "[]"),
        });
      });
      galleries = loadedGalleries;
    } catch (error) {
      console.error("Error loading galleries:", error);
    } finally {
      loading = false;
    }
  });

  function openGallery(gallery) {
    selectedGallery = gallery;
    selectedImageIndex = 0;
    showModal = true;
    document.body.style.overflow = 'hidden';
  }

  function closeGallery() {
    showModal = false;
    selectedGallery = null;
    document.body.style.overflow = 'auto';
  }

  function nextImage() {
    if (selectedImageIndex < selectedGallery.images.length - 1) {
      selectedImageIndex++;
    }
  }

  function prevImage() {
    if (selectedImageIndex > 0) {
      selectedImageIndex--;
    }
  }

  function handleKeydown(event) {
    if (!showModal) return;
    if (event.key === 'Escape') closeGallery();
    if (event.key === 'ArrowLeft') prevImage();
    if (event.key === 'ArrowRight') nextImage();
  }
</script>

<svelte:window on:keydown={handleKeydown} />

<div class="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
  <div class="max-w-7xl mx-auto px-4 py-16">
    <!-- Header Section -->
    {#if mounted}
      <div class="text-center mb-12" in:fly={{ y: -30, duration: 800, easing: cubicOut }}>
        <h1 class="text-5xl md:text-6xl font-bold text-[#001b47] mb-4 tracking-tight">
          Photo Gallery
        </h1>
        <div class="w-24 h-1 bg-gradient-to-r from-[#ffcd5a] to-orange-400 mx-auto rounded-full"></div>
        <p class="text-lg text-gray-600 mt-6 max-w-2xl mx-auto leading-relaxed">
          Explore precious moments from our Dhamma school's activities and events
        </p>
      </div>
    {/if}

    <!-- Loading State -->
    {#if loading}
      <div class="text-center py-20" in:fade={{ duration: 300 }}>
        <div class="inline-block animate-spin rounded-full h-12 w-12 border-4 border-[#ffcd5a] border-t-transparent"></div>
        <p class="mt-4 text-gray-600">Loading galleries...</p>
      </div>
    {:else if galleries.length === 0}
      <!-- Empty State -->
      <div class="text-center py-20" in:fade={{ duration: 500 }}>
        <div class="bg-gradient-to-r from-[#ffcd5a] to-orange-400 p-4 rounded-full w-20 h-20 mx-auto mb-6">
          <svg class="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
        <h3 class="text-2xl font-semibold text-gray-700 mb-2">No galleries yet</h3>
        <p class="text-gray-500">Check back soon for new photo collections!</p>
      </div>
    {:else}
      <!-- Gallery Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {#each galleries as gallery, index}
          <div
            class="group cursor-pointer"
            in:fly={{ y: 50, duration: 600, delay: index * 100, easing: cubicOut }}
            on:click={() => openGallery(gallery)}
            role="button"
            tabindex="0"
            on:keydown={(e) => e.key === 'Enter' && openGallery(gallery)}
          >
            <div class="relative bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-2">
              <!-- Image Container -->
              <div class="relative overflow-hidden">
                <img
                  src={gallery.images[0] || "/fallback.jpg"}
                  alt={gallery.title}
                  class="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <!-- Overlay -->
                <div class="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <!-- Image Count Badge -->
                <div class="absolute top-4 right-4 bg-[#001b47] text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {gallery.images.length} photos
                </div>
                <!-- View Gallery Button -->
                <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button class="bg-white text-[#001b47] px-6 py-2 rounded-full font-semibold shadow-lg transform scale-90 group-hover:scale-100 transition-transform duration-300">
                    View Gallery
                  </button>
                </div>
              </div>
              
              <!-- Content -->
              <div class="p-6">
                <h2 class="text-xl font-bold text-[#001b47] mb-2 group-hover:text-[#ffcd5a] transition-colors duration-300">
                  {gallery.title}
                </h2>
                <p class="text-gray-600 line-clamp-2">{gallery.description}</p>
              </div>
            </div>
          </div>
        {/each}
      </div>
    {/if}
  </div>
</div>

<!-- Enhanced Modal -->
{#if showModal && selectedGallery}
  <div 
    class="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
    in:fade={{ duration: 300 }}
    out:fade={{ duration: 200 }}
    on:click={closeGallery}
    role="dialog"
    aria-modal="true"
  >
    <div 
      class="bg-white rounded-2xl w-full max-w-6xl max-h-[90vh] overflow-hidden shadow-2xl"
      in:scale={{ duration: 300, easing: cubicOut }}
      out:scale={{ duration: 200, easing: cubicOut }}
      on:click|stopPropagation
    >
      <!-- Modal Header -->
      <div class="flex items-center justify-between p-6 border-b border-gray-200">
        <div>
          <h2 class="text-2xl font-bold text-[#001b47]">{selectedGallery.title}</h2>
          <p class="text-gray-600 mt-1">{selectedGallery.description}</p>
        </div>
        <button
          class="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
          on:click={closeGallery}
          aria-label="Close gallery"
        >
          <svg class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <!-- Main Image Display -->
      <div class="relative bg-gray-900">
        <img
          src={selectedGallery.images[selectedImageIndex]}
          alt={selectedGallery.alts[selectedImageIndex] || `Image ${selectedImageIndex + 1}`}
          class="w-full h-96 object-contain"
        />
        
        <!-- Navigation Arrows -->
        {#if selectedGallery.images.length > 1}
          <button
            class="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-2 rounded-full transition-all duration-200 disabled:opacity-50"
            on:click={prevImage}
            disabled={selectedImageIndex === 0}
            aria-label="Previous image"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            class="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-2 rounded-full transition-all duration-200 disabled:opacity-50"
            on:click={nextImage}
            disabled={selectedImageIndex === selectedGallery.images.length - 1}
            aria-label="Next image"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        {/if}

        <!-- Image Counter -->
        <div class="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
          {selectedImageIndex + 1} / {selectedGallery.images.length}
        </div>
      </div>

      <!-- Thumbnail Strip -->
      <div class="p-6">
        <div class="flex space-x-3 overflow-x-auto pb-2">
          {#each selectedGallery.images as src, i}
            <button
              class="flex-shrink-0 relative overflow-hidden rounded-lg transition-all duration-200 {selectedImageIndex === i ? 'ring-2 ring-[#ffcd5a] scale-105' : 'hover:scale-105'}"
              on:click={() => selectedImageIndex = i}
            >
              <img
                {src}
                alt={selectedGallery.alts[i] || `Thumbnail ${i + 1}`}
                class="w-20 h-20 object-cover"
              />
              {#if selectedImageIndex !== i}
                <div class="absolute inset-0 bg-black/20"></div>
              {/if}
            </button>
          {/each}
        </div>
        
        <!-- Image Description -->
        {#if selectedGallery.alts[selectedImageIndex]}
          <p class="text-gray-600 mt-4 text-center">{selectedGallery.alts[selectedImageIndex]}</p>
        {/if}
      </div>
    </div>
  </div>
{/if}

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
