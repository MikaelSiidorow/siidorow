<script lang="ts">
  import Text from "./shared/Text.svelte";

  export let name: string;
  export let title: string;
  export let content: string;
  export let buttonText: string;
  export let image: string;
</script>

<section
  id="hero"
  class="flex max-w-xl flex-col border-4 border-black shadow-repeat before:border-b-4 before:border-black dark:border-white dark:shadow-repeat-dark dark:before:border-white lg:max-w-4xl lg:flex-row lg:before:border-r-4"
>
  <div id="card-content" class="flex flex-1 flex-col gap-4 p-4">
    <hgroup>
      <Text element="h2" variant="title" titleSize="lg">{name}</Text>
      <Text element="p" variant="subtitle" class="ml-4 inline">{title}</Text>
    </hgroup>
    <Text class="flex-1">{content}</Text>
    <a
      class="self-end bg-accent-main py-2 px-4 text-2xl font-bold uppercase hover:scale-105 active:translate-x-1 active:translate-y-1 dark:bg-accent-alt cursor-pointer no-underline shadow-solid active:shadow-none dark:shadow-solid-dark"
      href="#projects">{buttonText}</a
    >
  </div>
  <figure class="-order-1 flex flex-1 items-center justify-center p-6">
    <img class="aspect-square w-full object-cover" src={image} alt="avatar" />
  </figure>
</section>
