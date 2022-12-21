<script lang="ts">
  import Nav from "./components/Nav.svelte";
  import Hero from "./components/Hero.svelte";
  import Projects from "./components/Projects.svelte";
  import { heroContent, projects } from "./constants";

  const heroProps = {
    ...heroContent,
    buttonText: "Learn More",
    onButtonClick: () => {
      console.log("clicked");
    },
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
<footer>
  <!-- footer -->
</footer>

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
