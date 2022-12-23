<script lang="ts">
  import Nav from "./components/Nav.svelte";
  import Hero from "./components/Hero.svelte";
  import Projects from "./components/Projects.svelte";
  import Footer from "./components/Footer.svelte";
  import { heroContent, projects, footerContent } from "./constants";

  const heroProps = {
    ...heroContent,
    buttonText: "Learn More",
  };
</script>

<header>
  <Nav />
</header>
<main
  class="m-20 flex flex-col items-center gap-[20vh] text-black dark:text-white"
>
  <Hero {...heroProps} />
  <Projects {projects} />
  <!-- about w/ timeline -->
</main>
<Footer {...footerContent} />
