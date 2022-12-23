<script lang="ts">
  type ButtonVariant = "primary";

  export let variant: ButtonVariant;
  export let type: "button" | "link" = "button";
  export let href: string = undefined;

  const types = {
    button: "button",
    link: "a",
  };

  const variants = {
    primary: "primary",
  };
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<svelte:element
  this={types[type]}
  {href}
  class="{variant} bg-accent-main py-2 px-4 text-2xl font-bold uppercase hover:scale-105 active:translate-x-1 active:translate-y-1 dark:bg-accent-alt {$$props.class} cursor-pointer no-underline shadow-solid active:shadow-none dark:shadow-solid-dark"
  on:click
>
  <slot />
</svelte:element>
