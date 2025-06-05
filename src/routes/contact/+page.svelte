<script>
  import { onMount } from 'svelte';
  import { fade, fly } from 'svelte/transition';
  import { cubicOut } from 'svelte/easing';
  
  let mounted = false;
  
  onMount(() => {
    mounted = true;
  });
</script>

<svelte:head>
  <title>Contact Us - Dhamma School</title>
</svelte:head>

<div class="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
  <div class="max-w-7xl mx-auto px-4 py-16">
    <!-- Header Section -->
    {#if mounted}
      <div class="text-center mb-12" in:fly={{ y: -30, duration: 800, easing: cubicOut }}>
        <h1 class="text-5xl md:text-6xl font-bold text-[#001b47] mb-4 tracking-tight">
          Contact Us
        </h1>
        <div class="w-24 h-1 bg-gradient-to-r from-[#ffcd5a] to-orange-400 mx-auto rounded-full"></div>
        <p class="text-lg text-gray-600 mt-6 max-w-2xl mx-auto leading-relaxed">
          Reach out to us with questions about our Dhamma school and Buddhist education programs
        </p>
      </div>
    {/if}

    <!-- Main Content -->
    <div class="max-w-6xl mx-auto">
      <div class="grid md:grid-cols-12 gap-8">
        <!-- Contact Information Column -->
        {#if mounted}
          <div class="md:col-span-5" in:fly={{ x: -30, duration: 600, delay: 200, easing: cubicOut }}>
            <div class="bg-white rounded-2xl shadow-xl overflow-hidden h-full">
              <div class="bg-gradient-to-r from-[#001b47] to-[#002b70] p-6 text-white">
                <h2 class="text-2xl font-bold mb-2">Get In Touch</h2>
                <p class="text-blue-100">We'd love to hear from you</p>
              </div>
              
              <div class="p-6">
                <div class="space-y-6">
                  <!-- Phone -->
                  <div class="flex items-start">
                    <div class="bg-amber-100 p-3 rounded-full mr-4">
                      <svg class="w-6 h-6 text-amber-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 class="text-gray-900 font-medium text-lg mb-1">Phone</h3>
                      <p class="text-gray-600">+94 71 234 5678</p>
                    </div>
                  </div>
                  
                  <!-- Email -->
                  <div class="flex items-start">
                    <div class="bg-amber-100 p-3 rounded-full mr-4">
                      <svg class="w-6 h-6 text-amber-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 class="text-gray-900 font-medium text-lg mb-1">Email</h3>
                      <a href="mailto:srirathanapaladhammaschool@gmail.com" class="text-[#001b47] hover:text-[#ffcd5a] font-medium transition-colors">
                        srirathanapaladhammaschool@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <!-- Address -->
                  <div class="flex items-start">
                    <div class="bg-amber-100 p-3 rounded-full mr-4">
                      <svg class="w-6 h-6 text-amber-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 class="text-gray-900 font-medium text-lg mb-1">Location</h3>
                      <address class="not-italic text-gray-600">
                        <p>RVCG+47V</p>
                        <p>Dehiwala-Mount Lavinia</p>
                        <p>Sri Lanka</p>
                      </address>
                    </div>
                  </div>
                  
                  <!-- Hours -->
                  <div class="flex items-start">
                    <div class="bg-amber-100 p-3 rounded-full mr-4">
                      <svg class="w-6 h-6 text-amber-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 class="text-gray-900 font-medium text-lg mb-1">Hours</h3>
                      <ul class="text-gray-600">
                        <li>Sunday: 8:00 AM - 12:00 PM</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <!-- Social Media Links -->
                <div class="mt-8 pt-6 border-t border-gray-200">
                  <h3 class="text-gray-900 font-medium text-lg mb-3">Connect With Us</h3>
                  <div class="flex space-x-4">
                    <a href="https://youtube.com/@ranpalmedia?si=xE1uKWr-Z04Ywold" target="_blank" rel="noopener noreferrer" 
                      class="bg-red-600 text-white p-3 rounded-full hover:bg-red-700 transition-all duration-300 transform hover:scale-110">
                      <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                      </svg>
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer" 
                      class="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-all duration-300 transform hover:scale-110">
                      <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        {/if}
        
        <!-- Map Column -->
        {#if mounted}
          <div class="md:col-span-7" in:fly={{ x: 30, duration: 600, delay: 200, easing: cubicOut }}>
            <div class="bg-white rounded-2xl shadow-xl overflow-hidden h-full flex flex-col">
              <div class="bg-gradient-to-r from-[#ffcd5a] to-orange-400 p-6">
                <h2 class="text-2xl font-bold text-[#001b47] mb-2">Our Location</h2>
                <p class="text-amber-800">Visit us at the Sri Rathnaramaya Temple</p>
              </div>
              
              <div class="relative flex-grow">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.5838707448497!2d79.8756822!3d6.8203581!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25ad61305553f%3A0x2462737a3debd526!2sSri%20Rathnaramaya%20-%20Ratmalana!5e0!3m2!1sen!2slk!4v1746290571170!5m2!1sen!2slk"
                  width="100%"
                  height="100%"
                  style="border:0; position: absolute; top: 0; left: 0; height: 100%;"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                  title="Google Maps location of Sri Rathnaramaya Temple"
                ></iframe>
              </div>
              
              <div class="p-6 bg-gray-50">
                <div class="flex items-center text-gray-600">
                  <svg class="w-5 h-5 mr-2 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                  <span>Sri Rathnaramaya Temple, Ratmalana</span>
                </div>
              </div>
            </div>
          </div>
        {/if}
      </div>
      
      <!-- YouTube CTA Section -->
      {#if mounted}
        <div class="mt-12" in:fade={{ duration: 800, delay: 400 }}>
          <div class="bg-gradient-to-br from-[#001b47] to-[#002b70] rounded-2xl shadow-xl overflow-hidden">
            <div class="p-8 md:p-10 md:flex items-center">
              <div class="md:w-3/5 mb-8 md:mb-0 md:pr-10">
                <h2 class="text-3xl font-bold text-white mb-4">Join Our YouTube Community</h2>
                <p class="text-blue-100 mb-6">
                  Subscribe to receive updates about our latest Dhamma teachings, events, and educational content.
                  Our channel features recordings of our special ceremonies and Buddhist education materials.
                </p>
                <a 
                  href="https://youtube.com/@ranpalmedia?si=xE1uKWr-Z04Ywold" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  class="inline-flex items-center justify-center space-x-3 bg-red-600 text-white px-6 py-4 rounded-lg hover:bg-red-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                  <span class="font-medium">Visit Our YouTube Channel</span>
                </a>
              </div>
              <div class="md:w-2/5 relative">
                <div class="aspect-w-16 aspect-h-9 md:aspect-none md:h-64 bg-red-700 rounded-lg shadow-2xl overflow-hidden transform rotate-1 hover:rotate-0 transition-all duration-500">
                  <div class="absolute inset-0 flex items-center justify-center">
                    <svg class="w-24 h-24 text-white opacity-90" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      {/if}
    </div>
  </div>
</div>

<style>
  :global(body) {
    font-family: 'Inter', 'system-ui', sans-serif;
  }
  
  /* Make sure the iframe takes up full height in its container */
  iframe {
    height: 400px;
  }
  
  @media (min-width: 768px) {
    iframe {
      height: 100%;
      min-height: 400px;
    }
  }
</style>