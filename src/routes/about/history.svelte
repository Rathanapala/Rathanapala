<script>
    import { slide, fade, fly } from 'svelte/transition';
    import { onMount } from 'svelte';
    import { quintOut, elasticOut } from 'svelte/easing';

    const history = [
        {
            year: 1958,
            event: "Construction of the Temple",
            details: "Ven.Olaboduwe Rathanapala Head Thero founded the Sri Rathanarama Temple in Rathmalana on March, laying the foundation for our community.",
        },
        {
            year: 1979,
            event: "Establishment of the Dhamma School",
            details: "Present Head Ven.Sooriyagoda Siri Dhamm Thero takes in-charge and start developing the dhamma school."
        },
        {
            year: 1980,
            event: "First Dhamma School Awarding Ceremony",
            details: "Awarding prizes to the first batch of students who excelled in their Dhamma education.",
        },
        {
            year: 1984,
            event: "Won first place in all island Dhamma School Bakthi Geetha competition",
            details: "A significant achievement that showcased the talent and dedication of our students.",
        },
        {
            year: 2004,
            event: "Awarded the title of 'Best Dhamma School'",
            details: "Recognized for excellence in Dhamma education and community service by the Colombo Young Men’s Buddhist Association.",
        },
    ];

    let selectedEvent = null;
    let mounted = false;

    onMount(() => {
        mounted = true;
    });

    function toggleEvent(item) {
        selectedEvent = selectedEvent === item ? null : item;
    }
</script>

<div class="py-16 bg-gradient-to-b from-amber-50 to-orange-50">
    <div class="max-w-6xl mx-auto px-4">
        <!-- Section Header -->
        {#if mounted}
            <div class="text-center mb-16" in:fly={{ y: -30, duration: 800, easing: quintOut }}>
                <h2 class="text-4xl md:text-5xl font-bold text-[#001b47] mb-4 tracking-tight">
                    History of Our Dhamma School
                </h2>
                <div class="w-24 h-1 bg-gradient-to-r from-[#ffcd5a] to-orange-400 mx-auto rounded-full"></div>
                <p class="text-lg text-gray-600 mt-6 max-w-2xl mx-auto leading-relaxed">
                    Explore the key milestones that have shaped our Dhamma School's legacy
                </p>
            </div>
        {/if}

        <!-- Timeline -->
        <div class="relative">
            <!-- Vertical timeline line -->
            <div class="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#ffcd5a] to-orange-400 rounded-full"></div>
            
            <div class="space-y-12">
                {#each history as item, index}
                    {#if mounted}
                        <div 
                            class="relative"
                            in:fly={{ 
                                y: 50, 
                                x: index % 2 === 0 ? -20 : 20, 
                                duration: 800, 
                                delay: index * 150,
                                easing: quintOut 
                            }}
                        >
                            <!-- Timeline dot -->
                            <div 
                                class="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-white rounded-full border-4 border-[#ffcd5a] z-10 shadow-md"
                                style="top: 1.5rem;"
                            ></div>
                            
                            <!-- Content box -->
                            <div 
                                class={`md:w-5/12 ml-12 md:ml-0 ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'} relative`}
                            >
                                <!-- Year badge -->
                                <div 
                                    class="absolute z-40 -top-3 left-0 md:left-auto ${index % 2 === 0 ? 'md:right-0' : 'md:left-0'} bg-gradient-to-r from-[#001b47] to-[#002b70] text-white px-4 py-1 rounded-full font-bold shadow-md"
                                >
                                    {item.year}
                                </div>
                                
                                <!-- Event card -->
                                <div 
                                    class="bg-white p-6 mt-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
                                    on:click={() => toggleEvent(item)}
                                    on:keydown={(e) => e.key === 'Enter' && toggleEvent(item)}
                                    role="button"
                                    tabindex="0"
                                    aria-expanded={selectedEvent === item}
                                >
                                    <h3 class="text-xl font-bold text-[#001b47] mb-3 pr-8">{item.event}</h3>
                                    
                                    {#if selectedEvent === item}
                                        <div 
                                            class="mt-4 pt-4 border-t border-gray-100" 
                                            in:slide={{ duration: 300 }}
                                        >
                                            <p class="text-gray-600 leading-relaxed">{item.details}</p>
                                        </div>
                                    {/if}
                                    
                                    <!-- Toggle icon -->
                                    <div class="absolute top-6 right-6 text-[#ffcd5a]">
                                        <svg 
                                            class={`w-5 h-5 transition-transform duration-300 ${selectedEvent === item ? 'rotate-180' : ''}`}
                                            fill="none" 
                                            stroke="currentColor" 
                                            viewBox="0 0 24 24"
                                        >
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    {/if}
                {/each}
            </div>
        </div>
        
    </div>
</div>
