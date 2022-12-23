<script lang="ts">
  export let wrapper: string = "div";
  export let wrapped: boolean = false;
  export let wrapperProps: Record<string, any> = {};
</script>

{#if wrapped}
  <svelte:element this={wrapper} {...wrapperProps}>
    <slot />
  </svelte:element>
{:else}
  <slot />
{/if}
