<script lang="ts">
  type TextVariant = "h1" | "h2" | "subtitle1" | "subtitle2" | "body";
  type TextSize = "xs" | "sm" | "md" | "lg" | "xl";

  const sizes = {
    xs: "0.75rem", // 12px
    sm: "1rem", // 16px
    md: "1.5rem", // 24px
    lg: "2rem", // 32px
    xl: "3rem", // 48px
  } as const;

  export let variant: TextVariant = "body";
  export let size: TextSize = "md";
  export let indent: boolean = false;
</script>

{#if variant === "h1"}
  <h1 class={$$props.class} style="--text-size: {sizes[size]}">
    <slot />
  </h1>
{:else if variant === "h2"}
  <h2 class={$$props.class} style="--text-size: {sizes[size]}">
    <slot />
  </h2>
{:else if variant === "subtitle1"}
  <i
    class="subtitle1 {indent && 'indent'} {$$props.class}"
    style="--text-size: {sizes[size]}"
  >
    <slot />
  </i>
{:else if variant === "subtitle2"}
  <i
    class="subtitle2 {indent && 'indent'} {$$props.class}"
    style="--text-size: {sizes[size]}"
  >
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
    line-height: calc(var(--text-size) * 1.25);
    max-width: fit-content;
    height: calc(var(--text-size) * 1.25);
    text-transform: uppercase;
  }

  h1::before {
    content: "";
    position: absolute;
    z-index: -1;

    width: 100%;
    height: calc(var(--text-size) * 0.75);
    background-color: var(--accent-color-main);
    transform: translate(calc(var(--text-size) * 0.5), 60%);
  }

  h2 {
    font-size: var(--text-size);
    font-weight: 1000;
    line-height: calc(var(--text-size) * 1.25);
    text-transform: uppercase;
  }

  i {
    font-weight: 1000;
    font-size: var(--text-size);
    text-transform: uppercase;
  }

  .indent {
    margin-left: calc(var(--text-size));
  }

  .subtitle2 {
    color: var(--primary-color);
    background-color: var(--text-color);
  }
</style>
