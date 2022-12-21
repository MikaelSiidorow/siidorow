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
<main>
  <Hero {...heroProps} />
  <Projects {projects} />
  <!-- about w/ timeline -->
</main>
<Footer {...footerContent} />

<style>
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20vh;
    margin: 5rem;
    color: var(--text-color);
  }
</style>
