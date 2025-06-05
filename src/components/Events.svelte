<script>
  import { fade, fly, scale } from 'svelte/transition';
  import { cubicOut } from 'svelte/easing';
  import { onMount } from 'svelte';
  import getEvents from '../data/events.js';

  let mounted = false;

onMount(async () => {
    mounted = true;
    try {
      events = await getEvents(); // Fetch dynamic events
    } catch (error) {
      console.error("Error loading events:", error);
      // Keep using static events if fetch fails
    }
  });

  const fixedevents = events
    .filter((event) => {
      const eventDate = new Date(event.date);
      const today = new Date();
      eventDate.setHours(0,0,0,0);
      today.setHours(0,0,0,0);
      return eventDate >= today;
    })
    .sort((a, b) => new Date(a.date) - new Date(b.date))
    .slice(0, 3)
    .map((event) => {
      const eventDate = new Date(event.date);
      const today = new Date();
      eventDate.setHours(0,0,0,0);
      today.setHours(0,0,0,0);
      const remainingDays = Math.ceil(
        (eventDate - today) / (1000 * 60 * 60 * 24),
      );
      return {
        ...event,
        date: eventDate.toLocaleDateString("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric",
        }),
        description: event.content,
        category: event.category,
        remaining_days: remainingDays,
        remaining_percent: Math.min(100, Math.max(5, (1 - remainingDays / 30) * 100)),
      };
    });

  let selectedEvent = null;
  let showEventModal = false;

  function handleEventClick(event) {
    selectedEvent = event;
    showEventModal = true;
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    showEventModal = false;
    document.body.style.overflow = 'auto';
  }

  function handleKeydown(event) {
    if (event.key === 'Escape' && showEventModal) {
      closeModal();
    }
  }

  // Function to determine category badge color
  function getCategoryColor(category) {
    switch(category.toLowerCase()) {
      case 'ceremony':
        return 'bg-purple-100 text-purple-800';
      case 'dhamma talk':
        return 'bg-blue-100 text-blue-800';
      case 'retreat':
        return 'bg-green-100 text-green-800';
      case 'festival':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  }
</script>

<svelte:window on:keydown={handleKeydown} />

<div class="bg-gradient-to-b from-amber-50 to-orange-50 py-16">
  <div class="max-w-6xl mx-auto px-4">
    {#if mounted}
      <div class="text-center mb-12" in:fly={{ y: -20, duration: 600, easing: cubicOut }}>
        <h2 class="text-4xl font-bold text-[#001b47] mb-3">Upcoming Events</h2>
        <div class="w-24 h-1 bg-gradient-to-r from-[#ffcd5a] to-orange-400 mx-auto rounded-full"></div>
        <p class="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
          Join us for these special occasions at the Sri Rathanapala Dhamma School
        </p>
      </div>
    {/if}

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      {#each fixedevents as event, i}
        {#if mounted}
          <div
            in:fly={{ y: 40, duration: 600, delay: i * 150, easing: cubicOut }}
            class="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer group"
            on:click={() => handleEventClick(event)}
            on:keydown={(e) => e.key === 'Enter' && handleEventClick(event)}
            tabindex="0"
            role="button"
            aria-label={`View details for ${event.title}`}
          >
            <!-- Top gradient bar -->
            <div class="h-2 bg-gradient-to-r from-[#ffcd5a] to-orange-400"></div>
            
            <div class="p-6">
              <!-- Date badge -->
              <div class="flex justify-between items-start mb-4">
                <div class="bg-[#001b47] text-white px-3 py-1.5 rounded-lg text-sm font-medium">
                  {new Date(event.date).toLocaleDateString("en-US", { month: "short", day: "numeric" })}
                </div>
                <span class={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(event.category)}`}>
                  {event.category}
                </span>
              </div>
              
              <!-- Title and description -->
              <h3 class="font-bold text-xl text-[#001b47] mb-3 group-hover:text-[#ffcd5a] transition-colors duration-300">
                {event.title}
              </h3>
              
              <p class="text-gray-600 mb-6 line-clamp-3">{event.description}</p>
              
              <!-- Progress bar -->
              <div class="mt-4">
                <div class="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
                  <div
                    class="bg-gradient-to-r from-[#ffcd5a] to-orange-400 rounded-full h-2 transition-all duration-500"
                    style={`width: ${event.remaining_percent}%`}
                  ></div>
                </div>
                <div class="flex justify-between items-center mt-2">
                  <p class="text-sm text-gray-500">
                    <span class="font-medium text-[#001b47]">{event.remaining_days}</span> {event.remaining_days === 1 ? 'day' : 'days'} remaining
                  </p>
                  
                  <div class="text-[#ffcd5a] group-hover:translate-x-1 transition-transform duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        {/if}
      {/each}
    </div>

    {#if mounted}
      <div class="text-center mt-10" in:fade={{ duration: 600, delay: 600 }}>
        <a href="/news" class="inline-flex items-center text-[#001b47] hover:text-[#ffcd5a] font-medium">
          View past events
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </a>
      </div>
    {/if}
  </div>

  {#if showEventModal && selectedEvent}
    <div
      class="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      on:click={closeModal}
      in:fade={{ duration: 300 }}
      out:fade={{ duration: 200 }}
      role="dialog"
      aria-labelledby="event-details-title"
    >
      <div
        class="bg-white rounded-xl max-w-lg w-full shadow-2xl overflow-hidden"
        on:click|stopPropagation
        in:scale={{ duration: 400, easing: cubicOut }}
        out:scale={{ duration: 200, easing: cubicOut }}
      >
        <!-- Modal header with gradient -->
        <div class="relative">
          <div class="bg-gradient-to-r from-[#001b47] to-[#002b70] p-6 text-white">
            <span class={`absolute top-6 right-6 px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(selectedEvent.category)}`}>
              {selectedEvent.category}
            </span>
            <h3 id="event-details-title" class="text-2xl font-bold mb-2">{selectedEvent.title}</h3>
            <div class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-[#ffcd5a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <p>{selectedEvent.date}</p>
            </div>
          </div>
        </div>
        
        <!-- Modal content -->
        <div class="p-6">
          <p class="text-gray-700 mb-6 leading-relaxed">{selectedEvent.description}</p>
          
          <!-- Countdown info -->
          <div class="bg-amber-50 p-4 rounded-lg mb-6">
            <div class="flex items-center">
              <div class="bg-[#ffcd5a] p-2 rounded-full mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-[#001b47]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p class="font-medium text-[#001b47]">
                  {selectedEvent.remaining_days === 0 ? "Today!" : 
                   selectedEvent.remaining_days === 1 ? "Tomorrow!" : 
                   `${selectedEvent.remaining_days} days remaining`}
                </p>
                <div class="w-full bg-gray-200 rounded-full h-2 mt-2 overflow-hidden">
                  <div
                    class="bg-gradient-to-r from-[#ffcd5a] to-orange-400 rounded-full h-2"
                    style={`width: ${selectedEvent.remaining_percent}%`}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Modal footer -->
        <div class="border-t border-gray-100 p-4 bg-gray-50 flex justify-between items-center">
          <button
            class="text-gray-600 hover:text-gray-800 flex items-center transition-colors duration-200"
            on:click={closeModal}
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
            Close
          </button>
          
          {#if selectedEvent.article_link}
            <a 
              href={selectedEvent.article_link}
              class="inline-flex items-center justify-center bg-gradient-to-r from-[#001b47] to-[#002b70] text-white px-5 py-2 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              Read More
            </a>
          {/if}
        </div>
      </div>
    </div>
  {/if}
</div>

<style>
  .line-clamp-3 {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
</style>
