<script>
    export let showModal;
    
    let email = '';
    let isSubmitting = false;
    let success = false;
    let error = '';
    
    async function handleSubmit() {
      if (!email) {
        error = 'Please enter your email address';
        return;
      }
      
      isSubmitting = true;
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      success = true;
      isSubmitting = false;
    }
  </script>
  
  <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
       on:click={() => showModal = false}>
    <div class="bg-white p-8 rounded-lg max-w-md mx-4" 
         on:click|stopPropagation>
      {#if !success}
        <h3 class="text-2xl font-semibold mb-4">Subscribe to Our Newsletter</h3>
        <p class="mb-4">Stay updated with our latest events and announcements.</p>
        
        <form on:submit|preventDefault={handleSubmit}>
          <input type="email"
                 bind:value={email}
                 placeholder="Enter your email" />
                  {#if error}
                    <p class="text-red-500">{error}</p>
                  {/if}
                  <button type="submit" class="mt-4 bg-blue-500 text-white py-2 px-4 rounded" disabled={isSubmitting}>
                    {#if isSubmitting}
                      Submitting...
                    {:else}
                      Subscribe
                    {/if}
                  </button>
                </form>
              {:else}
                <h3 class="text-2xl font-semibold mb-4">Thank you for subscribing!</h3>
                <p class="mb-4">You have successfully subscribed to our newsletter.</p>
                <button class="mt-4 bg-blue-500 text-white py-2 px-4 rounded" on:click={() => showModal = false}>
                  Close
                </button>
              {/if}
            </div>
          </div>