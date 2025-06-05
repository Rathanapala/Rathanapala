<script>
  import { onMount } from 'svelte';
  import { fade, fly } from 'svelte/transition';
  import { cubicOut } from 'svelte/easing';
 
  let principalMessage = {
    name: "Venerable Sooriyagoda Siri Dhamma Thero",
    title: "Principal",
    message: "Welcome to our Dhamma School. We are committed to nurturing young minds with the teachings of the Buddha and fostering a compassionate community.",
    image: "/images/principal.jpg", 
    experience: "25+ years of teaching experience",
    education: "Doctorate in Buddhist Philosophy"
  };

  let mounted = false;
  
  onMount(() => {
    mounted = true;
  });
</script>

<svelte:head>
  <title>Principal's Message - Sri Rathanapala Dhamma School</title>
</svelte:head>

<main class="min-h-screen bg-gradient-to-b from-amber-50 via-orange-50 to-amber-100 py-16">
  <div class="max-w-6xl mx-auto px-4">
    {#if mounted}
      <!-- Page Header -->
      <div class="text-center mb-12" in:fly={{ y: -30, duration: 800, easing: cubicOut }}>
        <h1 class="text-4xl md:text-5xl font-bold text-[#001b47] mb-4 tracking-tight">
          Message from the Principal
        </h1>
        <div class="w-24 h-1 bg-gradient-to-r from-[#ffcd5a] to-orange-400 mx-auto rounded-full"></div>
      </div>

      <!-- Principal Card -->
      <article class="bg-white rounded-2xl shadow-xl overflow-hidden mb-12" in:fade={{ duration: 800, delay: 200 }}>
        <div class="md:flex">
          <!-- Image Column -->
          <div class="md:w-2/5 relative">
            <!-- Principal's Image -->
            <div class="h-80 md:h-full relative overflow-hidden">
              <img 
                src="/images/principal.jpg" 
                alt={principalMessage.name} 
                class="w-full h-full object-cover object-center"
              >
              <div class="absolute inset-0 bg-gradient-to-t from-[#001b47]/70 via-transparent to-transparent"></div>
            </div>
            
            <!-- Principal Info Overlay -->
            <div class="absolute bottom-0 left-0 w-full p-6 text-white">
              <div class="flex items-center">
                <div class="w-1 h-12 bg-[#ffcd5a] rounded-full mr-4"></div>
                <div>
                  <h2 class="text-2xl font-bold">{principalMessage.name}</h2>
                  <p class="text-white/80">{principalMessage.title}</p>
                </div>
              </div>
            </div>

            <!-- Decorative Elements -->
            <div class="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#ffcd5a] to-orange-400"></div>
          </div>
          
          <!-- Content Column -->
          <div class="md:w-3/5 p-8 md:p-10">
            <!-- Credentials -->
            <div class="flex flex-wrap gap-3 mb-6">
              <div class="bg-amber-50 text-amber-800 px-3 py-1 rounded-full text-sm font-medium inline-flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                {principalMessage.education}
              </div>
              
              <div class="bg-blue-50 text-[#001b47] px-3 py-1 rounded-full text-sm font-medium inline-flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {principalMessage.experience}
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
                  {principalMessage.message}
                </p>
              </div>
              
              <p>
               පණ්ඩිත ඔළබොඩුවේ රතනපාල නායක ස්වාමීන්ද්‍රයන් වහන්සේ විසින් රත්මලාන අත්තිඩිය පාර ශ්‍රී රත්නාරාම විහාරස්ථානය 1958 මාර්තු මස ආරම්භ කරන ලදී. අනතුරුව හැටේ දශකයේ දී ශ්‍රී රතනපාල දහම් පාසල ආරම්භ කරන්නට ඇතැයි අනුමාන කළ හැකිය. ඒ අනුව ප්‍රථම විහාරාධිපති සහ ප්‍රධානාචාර්ය වූයේ පණ්ඩිත ඔළබොඩුවේ රතනපාල නායක ස්වාමිත්‍රයෝය. උන්වහන්සේ 1979 මැයි මස 15 වන ඉරු දින පෙරවරුවේ අපවත් වූහ. ඉන් අනතුරුව විහාරාධිපති ධුරයට නැගෙනහිර පස්‍ යොදුන් කෝරළයේ ප්‍රධාන සංඝ නායක පූජ්‍යපාද කෙවිටියාගල ධම්මසිද්ධි නායක ස්වාමිත්‍රයෝ පත්වූහ. 1979 මැයි මස 22 දින සිට අද දක්වා ප්‍රධානාචාර්ය ධූරය හොබවනු ලබන්නේ පූජ්‍ය සූරියගොඩ සිරිධම්ම නායක ස්වාමිත්‍රයෝය. 1979 වන විට දහම් පාසල් පැවැත්වූයේ ටකරන් සෙවිලි කළ දැවවලින් සැකසූ තාවකාලික ශාලාවකය. ශිෂ්‍ය ශිෂ්‍යාවන් 14 දෙනෙක් වූහ. ගුරු භවත්හු හයදෙනෙකි. ළමුන්ට මෙන්ම ගුරු භවතුන්ට ද භෞතික සම්පත් මේ වකවානුවේ නොතිබුණි. අවම තරමේ ගුරු භවතෙකුට වාඩි වීමට පුටුවක් වත් ළමුන්ට කලු ලෑල්ලක් වත් නොතිබුණි.
              </p>
              
              <p>
               1980 වසරේ ප්‍රථම ත්‍යාග ප්‍රදානෝත්සවය පැවැත්වූයේ තාවකාලිකව ඉදි කළ ශාලාවකය. එදා උත්සවයට අවශ්‍ය පුටු, පොල්තෙල් පහන ආදී දෑ ගෙන ආවේ කුලියටය. අද වනවිට ළමුන්ට අවශ්‍ය ප්‍රමාණයටත් වඩා භෞතික සම්පත් ඇත. ශාලා පහසුකම්, ඩෙස් පුටු, විදුලි පංකා මෙන්ම අනෙකුත් බොහෝ දේ ඇත. දහම් පාසලේ නායකත්වය, උපදේශකාවය, සංවිධානය, කළමනාකරණය හා විනය නිසා ශීඝ්‍රයෙන් දහම් පාසල දියුණුව කරා පියනගන්නට විය. 1984 වසරේදී සමස්ත ලංකා භක්ති ගීත නිපුණතාවයෙන් ප්‍රථම ස්‍ථානය දිනාගැනීමට ශ්‍රී රතනපාල දහම් පාසලේ දූ දරුවන් සමත්වීම වර්තමානයට මනා ආලෝකයක් විය. 2004 වසරේදී ලංකාවේ හොඳම දහම් පාසල ලෙස කොළඹ තරුණ බෞද්ධ සංගමයෙන් සම්මාන ලැබීම දහම් පාසලේ ප්‍රගතිය ප්‍රදර්ශනය කිරීමකි. විශේෂයෙන්ම පුරා වසර හතලිස් පහකට අධික කාලයක් ශ්‍රී රතනපාල දහම් පාසලේ කීර්ති නාමය සුරක්ෂිත කිරීමට සහාය දුන් ආචාර්ය මණ්ඩලය කෘතවේදිව සිහිපත් කරමි. ඒ අතර විසිපස් වසරකට අධික කාලයක් උපප්‍රධානාචාර්ය ලෙස ක්‍රියා කළ පරලෝසැපත් සමරසිංහ වැලිකන්ද මහතාට ද පුණ්‍යානුමෝදනා පූර්වකව සිහිපත් කරමි. දහම් පාසලේ උන්නතිය උදෙසා සහාය ලබා දුන් දායක දායිකාවන් ද බැති සිතින් සමරමි.
              </p>
              
              <div class="pt-4 text-right">
                <div class="inline-block border-t-2 border-[#ffcd5a] pt-2 px-8">
                  <p class="font-bold text-[#001b47]">{principalMessage.name}</p>
                  <p class="text-sm text-gray-600">{principalMessage.title}</p>
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

<style>
  :global(body) {
    font-family: 'Inter', 'system-ui', sans-serif;
  }
</style>