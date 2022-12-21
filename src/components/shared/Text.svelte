<script lang="ts">
  type TextVariant = "h1" | "subtitle" | "body";
  type TextSize = "sm" | "md" | "lg";

  const sizes = {
    sm: "1rem", // 16px
    md: "2rem", // 32px
    lg: "3rem", // 48px
  } as const;

  export let variant: TextVariant = "body";
  export let size: TextSize = "md";
</script>

{#if variant === "h1"}
  <h1 class={$$props.class} style="--text-size: {sizes[size]}">
    <slot />
  </h1>
{:else if variant === "subtitle"}
  <i class={$$props.class} style="--text-size: {sizes[size]}">
    <slot />
  </i>
{:else}
  <p class={$$props.class}>
    <slot />
  </p>
{/if}

<style>
  h1 {
    position: relative;
    z-index: 0;

    font-size: var(--text-size);
    font-weight: 1000;
    line-height: calc(var(--text-size) * 1.5);
    max-width: fit-content;
    height: calc(var(--text-size) * 1.5);
    text-transform: uppercase;
  }

  h1::before {
    content: "";
    position: absolute;
    z-index: -1;

    width: 100%;
    height: calc(var(--text-size) * 0.75);
    background-color: var(--accent-color-main);
    transform: translate(5%, 75%);
  }

  i {
    font-size: 1rem;
    font-weight: 700;
    text-transform: uppercase;

    margin-left: 8px;
    color: var(--primary-color);
    background-color: var(--text-color);
  }
</style>
