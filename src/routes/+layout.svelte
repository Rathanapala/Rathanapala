<script>
  import { afterNavigate } from "$app/navigation";
  import "../app.css";
  import Navbar from "../components/Navbar.svelte";
  import Footer from "../components/Footer.svelte";

  afterNavigate(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  });
</script>

<div class="min-h-screen">
  <Navbar />
  <main>
    <slot />
  </main>
  <Footer />
</div>
