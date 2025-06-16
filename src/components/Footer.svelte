<script>
    import { fade, fly } from 'svelte/transition';
    import { cubicOut } from 'svelte/easing';
    import { onMount } from 'svelte';
    
    let mounted = false;
    
    onMount(() => {
        mounted = true;
    });
    
    const currentYear = new Date().getFullYear();
    
    // Quick links for navigation
    const quickLinks = [
        { name: 'Home', url: '/' },
        { name: 'About Us', url: '/about' },
        { name: 'News', url: '/news' },
        { name: 'Events', url: '/events' },
        { name: 'Resources', url: '/resources' },
        { name: 'Contact', url: '/contact' },
    ];
    
    // Resources links
    const resourceLinks = [
        { name: 'Dhamma School Books', url: '/resources' },
        { name: 'Practice Guides', url: '/resources/guides' },
        { name: 'Photo Gallery', url: '/gallery' },
        { name: 'School Calendar', url: '/calendar' },
    ];
</script>

<footer class="bg-gradient-to-r from-[#001b47] to-[#002b70] text-white pt-16 pb-8">
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
        <!-- Main footer content -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <!-- Column 1: About -->
            {#if mounted}
                <div in:fly={{ y: 20, duration: 600, delay: 100, easing: cubicOut }}>
                    <h3 class="text-xl font-bold mb-4 text-white flex items-center">
                        <div class="w-1.5 h-6 bg-[#ffcd5a] rounded-full mr-3"></div>
                        About Our School
                    </h3>
                    <p class="text-blue-100 text-sm leading-relaxed mb-6">
                        Sri Rathanapala Dhamma School provides Buddhist education for children ages 5-17, 
                        nurturing young minds through traditional teachings and values in a modern context.
                    </p>
                    <div class="flex space-x-4 mt-6">
                        <a href="https://www.facebook.com/YOUR_FACEBOOK_PAGE" 
                           target="_blank" 
                           rel="noopener noreferrer" 
                           aria-label="Facebook"
                           class="bg-white/10 hover:bg-white/20 p-2.5 rounded-full transition-colors duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24h11.495v-9.294H9.691v-3.622h3.129V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.464.099 2.795.143v3.24h-1.918c-1.504 0-1.796.715-1.796 1.763v2.31h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.324-.593 1.324-1.324V1.325C24 .593 23.407 0 22.675 0z"/>
                            </svg>
                        </a>
                        <a href="https://youtube.com/@ranpalmedia?si=xE1uKWr-Z04Ywold" 
                           target="_blank" 
                           rel="noopener noreferrer" 
                           aria-label="YouTube"
                           class="bg-white/10 hover:bg-white/20 p-2.5 rounded-full transition-colors duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                            </svg>
                        </a>
                    </div>
                </div>
            {/if}
            
            <!-- Column 2: Quick Links -->
            {#if mounted}
                <div in:fly={{ y: 20, duration: 600, delay: 200, easing: cubicOut }}>
                    <h3 class="text-xl font-bold mb-4 text-white flex items-center">
                        <div class="w-1.5 h-6 bg-[#ffcd5a] rounded-full mr-3"></div>
                        Quick Links
                    </h3>
                    <ul class="space-y-2">
                        {#each quickLinks as link}
                            <li>
                                <a href={link.url} class="text-blue-100 hover:text-[#ffcd5a] transition-colors duration-300 flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                                    </svg>
                                    {link.name}
                                </a>
                            </li>
                        {/each}
                    </ul>
                </div>
            {/if}
            
            <!-- Column 3: Resources -->
            
            
            <!-- Column 4: Contact -->
            {#if mounted}
                <div in:fly={{ y: 20, duration: 600, delay: 400, easing: cubicOut }}>
                    <h3 class="text-xl font-bold mb-4 text-white flex items-center">
                        <div class="w-1.5 h-6 bg-[#ffcd5a] rounded-full mr-3"></div>
                        Contact Us
                    </h3>
                    <address class="not-italic text-blue-100">
                        <div class="flex items-start mb-3">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3 text-[#ffcd5a] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <div>
                                <p>Sri Rathnaramaya Temple</p>
                                <p>Dehiwala-Mount Lavinia</p>
                                <p>Sri Lanka</p>
                            </div>
                        </div>
                        
                        <div class="flex items-center mb-3">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3 text-[#ffcd5a] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            <span>+94 71 234 5678</span>
                        </div>
                        
                        <div class="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3 text-[#ffcd5a] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            <a href="mailto:srirathanapaladhammaschool@gmail.com" class="text-blue-100 hover:text-[#ffcd5a] transition-colors duration-300">
                                srirathanapaladhammaschool@gmail.com
                            </a>
                        </div>
                    </address>
                </div>
            {/if}
        </div>
        
        <!-- Bottom bar with copyright -->
        <div class="mt-16 pt-8 border-t border-white/10">
            {#if mounted}
                <div class="flex justify-center items-center" in:fade={{ duration: 800, delay: 500 }}>
                    <p class="text-sm text-blue-100">
                        &copy; {currentYear} Sri Rathanapala Dhamma School. All rights reserved.
                    </p>
                </div>
            {/if}
        </div>
    </div>
</footer>