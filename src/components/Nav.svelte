<script lang="ts">
  import Icon from "./shared/Icon.svelte";
  import { socials } from "../constants";
</script>

<nav>
  <a href="/">
    <Icon class="homeIcon" icon="logo" size="2rem" />
    <span>Siidorow</span>
  </a>
  <ul>
    {#each socials as { id, url } (id)}
      <li>
        <a href={url}>
          <Icon class="socialIcon" icon={id} size="2rem" />
        </a>
      </li>
    {/each}
  </ul>
</nav>

<style>
  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 2rem;
    background-color: var(--secondary-color);
  }

  @media (max-width: 600px) {
    nav {
      flex-direction: column;
      gap: 1rem;
    }
  }

  nav a {
    display: flex;
    align-items: center;
    color: var(--text-color);
    text-decoration: none;
  }

  nav a:hover {
    color: var(--accent-color-main);
  }

  nav a :global(.homeIcon) {
    fill: var(--text-color);
  }

  nav a:hover :global(.homeIcon) {
    fill: var(--accent-color-main);
  }

  nav a span {
    margin-left: 0.5rem;
    font-size: 1.5rem;
  }

  nav ul {
    display: flex;
    list-style: none;
    gap: 1rem;
  }

  :global(.socialIcon) {
    fill: var(--text-color);
  }
  :global(.socialIcon:hover) {
    fill: var(--accent-color-main);
  }
</style>
