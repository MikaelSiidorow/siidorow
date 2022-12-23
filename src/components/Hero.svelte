<script lang="ts">
  import Text from "./shared/Text.svelte";
  import Button from "./shared/Button.svelte";

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
      <Text variant="h1" size="lg">{name}</Text>
      <p>
        <Text variant="subtitle2" class="ml-4">{title}</Text>
      </p>
    </hgroup>
    <Text class="flex-1">{content}</Text>
    <Button class="self-end" variant="primary" href="#projects" type="link"
      >{buttonText}</Button
    >
  </div>
  <figure class="-order-1 flex flex-1 items-center justify-center p-6">
    <img class="aspect-square w-full object-cover" src={image} alt="avatar" />
  </figure>
</section>
