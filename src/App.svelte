<script lang="ts">
  import Nav from "./components/Nav.svelte";
  import Hero from "./components/Hero.svelte";
  import { heroContent } from "./constants";

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
  <!-- cards -->
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
    gap: 2rem;
    padding: 2rem;
    color: var(--text-color);
  }
</style>
