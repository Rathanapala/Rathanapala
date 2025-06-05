<script>
    import Hero from '../components/Hero.svelte';
    import Events from '../components/Events.svelte';
    import Programs from '../components/Programs.svelte';
    import Newsletter from '../components/Newsletter.svelte';
    import Messages from '../components/Messages.svelte';
    
    let showNewsletterModal = false;
  
  </script>
  
  <main>
    <Hero />
    <Events />
    <Programs />
    <Messages />
    {#if showNewsletterModal}
      <Newsletter bind:showModal={showNewsletterModal} />
    {/if}
  </main>