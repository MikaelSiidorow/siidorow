<script lang="ts">
  type TextVariant = "h1" | "h2" | "subtitle1" | "subtitle2" | "body";
  type TextSize = "lg" | "xl";

  const classes = {
    h1: {
      lg: "h-9 text-3xl before:h-6 before:translate-y-1/2 before:translate-x-4",
      xl: "h-10 text-5xl before:h-8 before:translate-y-1/2 before:translate-x-6",
    },
  } as const;

  let _class: string = "";
  export { _class as class };
  export let variant: TextVariant = "body";
  export let size: TextSize = "lg";
</script>

{#if variant === "h1"}
  <h1
    class="relative z-0 max-w-fit whitespace-nowrap font-[1000] uppercase before:absolute before:-z-10 before:w-full before:bg-accent-main dark:before:bg-accent-alt {classes
      .h1[size]} {_class}"
  >
    <slot />
  </h1>
{:else if variant === "h2"}
  <h2 class="font-[1000] uppercase {_class}">
    <slot />
  </h2>
{:else if variant === "subtitle1"}
  <i class="font-[1000] uppercase {_class}">
    <slot />
  </i>
{:else if variant === "subtitle2"}
  <i
    class="bg-black font-[1000] uppercase text-white dark:bg-white dark:text-black {_class}"
  >
    <slot />
  </i>
{:else}
  <p class={_class}>
    <slot />
  </p>
{/if}
