<script lang="ts">
  type ButtonVariant = keyof typeof variants;
  type ButtonType = keyof typeof types;

  const types = {
    button: "button",
    link: "a",
  };

  const variants = {
    primary: "primary",
  };

  let _class: string = "";

  export { _class as class };
  export let variant: ButtonVariant;
  export let type: ButtonType = "button";
  export let href: string = undefined;
</script>

{#if type === "button"}
  <button
    class="{variant} bg-accent-main py-2 px-4 text-2xl font-bold uppercase hover:scale-105 active:translate-x-1 active:translate-y-1 dark:bg-accent-alt {_class} cursor-pointer no-underline shadow-solid active:shadow-none dark:shadow-solid-dark"
    on:click
  >
    <slot />
  </button>
{:else if type === "link"}
  <a
    class="{variant} bg-accent-main py-2 px-4 text-2xl font-bold uppercase hover:scale-105 active:translate-x-1 active:translate-y-1 dark:bg-accent-alt {_class} cursor-pointer no-underline shadow-solid active:shadow-none dark:shadow-solid-dark"
    {href}
  >
    <slot />
  </a>
{/if}
