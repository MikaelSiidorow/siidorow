<script lang="ts">
  import Icon from "./shared/Icon.svelte";
  import Text from "./shared/Text.svelte";
  import { tagColors } from "../constants";

  export let name: string;
  export let description: string;
  export let image: string;
  export let link: string;
  export let tags: string[];
</script>

<div
  id="card-{name}"
  class="relative z-0 flex max-w-xs flex-col p-2 before:pointer-events-none before:absolute before:top-0 before:left-0 before:h-full before:w-full before:border-4 before:border-foreground after:absolute after:-z-10 after:h-full after:w-full after:bg-accent"
>
  <figure>
    <a href={link} target="_blank" rel="noopener noreferrer">
      <img
        class="aspect-square w-max bg-black object-cover"
        src={image}
        alt={name}
        loading="lazy"
      />
    </a>
  </figure>
  <hgroup>
    <Text element="h3" variant="emphasis" class="text-2xl not-italic">
      <a
        class="flex items-center gap-1 no-underline hover:underline"
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        {name}
        <Icon class="fill-foreground" icon="open_in_new" />
      </a>
    </Text>
    <p>
      <Text variant="subtitle">{description}</Text>
    </p>
  </hgroup>
  <div class="-mx-2 border-t-4 border-t-foreground">
    <Text variant="emphasis" class="ml-2 inline-block text-xs">
      {#each tags as tag (tag)}
        <span
          class="inline-block before:mr-1 before:text-[color:var(--tag-color)] before:content-['■'] after:italic after:[&:not(:last-child)]:mr-1 after:[&:not(:last-child)]:content-['|']"
          style="--tag-color: {tagColors[tag]}"
          >{tag}
        </span>
      {/each}
    </Text>
  </div>
</div>
