<script lang="ts">
  type ButtonVariant = "primary";

  export let variant: ButtonVariant;
</script>

{#if variant === "primary"}
  <button class={"primary " + $$props.class} on:click>
    <slot />
  </button>
{/if}

<style>
  button {
    border: none;
    background: none;
    cursor: pointer;

    padding: 0.5rem 1rem;

    font-size: 1.5rem;
    font-weight: 700;
    text-transform: uppercase;

    background-color: var(--accent-color-main);
    box-shadow: 4px 4px var(--text-color);
  }

  button:hover {
    transform: scale(1.05);
  }

  button:active {
    transform: translate(4px, 4px);
    box-shadow: none;
  }
</style>
