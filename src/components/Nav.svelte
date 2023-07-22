<script lang="ts">
  import Icon from "./shared/Icon.svelte";
  import { socials } from "../constants";
</script>

<nav
  class="flex flex-col items-center justify-between gap-4 py-4 px-8 sm:flex-row sm:gap-0"
>
  <a
    href="#hero"
    class="group flex items-center no-underline hover:text-accent"
  >
    <Icon
      class="fill-foreground group-hover:fill-accent"
      icon="logo"
      size="2rem"
    />
    <h1 class="ml-2 text-2xl">Siidorow</h1>
  </a>
  <ul class="flex gap-4">
    {#each socials as { id, url } (id)}
      <li>
        <a href={url} aria-label="open my {id}">
          <Icon
            class="fill-foreground hover:fill-accent"
            icon={id}
            size="2rem"
          />
        </a>
      </li>
    {/each}
  </ul>
</nav>
