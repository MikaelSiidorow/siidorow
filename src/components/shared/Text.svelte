<script lang="ts">
  import { cn } from "../../utils";

  type TextVariant = "title" | "emphasis" | "subtitle" | "body";
  type TextElement = "h1" | "h2" | "h3" | "span" | "p";
  type TitleSize = "lg" | "xl";

  const classes = {
    title: {
      lg: "h-9 text-2xl before:h-6 before:translate-x-3 sm:text-3xl sm:before:h-6 before:translate-y-1/2 sm:before:translate-x-4",
      xl: "h-10 text-3xl before:h-6 before:translate-x-4 sm:text-5xl sm:before:h-8 before:translate-y-1/2 sm:before:translate-x-6",
    },
  } as const;

  let _class: string = "";
  export { _class as class };
  export let variant: TextVariant = "body";
  export let titleSize: TitleSize = "lg";
  export let element: TextElement = "span";
</script>

<svelte:element
  this={element}
  class={cn(
    variant === "title" &&
      "relative z-0 max-w-fit whitespace-nowrap font-[1000] uppercase before:absolute before:-z-10 before:w-full before:bg-accent",
    variant === "title" && classes.title[titleSize],
    variant === "emphasis" && "font-[1000] uppercase italic",
    variant === "subtitle" &&
      "bg-foreground font-[1000] uppercase text-background italic",
    _class,
  )}
>
  <slot />
</svelte:element>
