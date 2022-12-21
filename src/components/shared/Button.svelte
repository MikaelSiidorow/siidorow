<script lang="ts">
  type ButtonVariant = "primary";

  export let variant: ButtonVariant;
  export let type: "button" | "link" = "button";
  export let href: string = undefined;
</script>

{#if type === "button"}
  <button class="{variant} {$$props.class}" on:click>
    <slot />
  </button>
{:else if type === "link"}
  <a {href} class="{variant} {$$props.class}">
    <slot />
  </a>
{/if}

<style>
  .primary {
    padding: 0.5rem 1rem;

    font-size: 1.5rem;
    font-weight: 700;
    text-transform: uppercase;

    background-color: var(--accent-color-main);
    box-shadow: 4px 4px var(--text-color);
  }

  .primary:hover {
    transform: scale(1.05);
  }

  .primary:active {
    transform: translate(4px, 4px);
    box-shadow: none;
  }

  a {
    text-decoration: none;
    color: var(--text-color);
  }

  button {
    border: none;
    background: none;
    cursor: pointer;
  }
</style>
