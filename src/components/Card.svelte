<script lang="ts">
  import Icon from "./shared/Icon.svelte";
  import Text from "./shared/Text.svelte";
  import ConditionalWrapper from "./shared/ConditionalWrapper.svelte";
  import { tagColors } from "../constants";

  export let name: string;
  export let description: string;
  export let image: string;
  export let link: string = undefined;
  export let tags: string[];
</script>

<div
  id="card-{name}"
  class="relative z-0 flex max-w-xs flex-col p-2 before:pointer-events-none before:absolute before:top-0 before:left-0 before:h-full before:w-full before:border-4 before:border-black after:absolute after:-z-10 after:h-full after:w-full after:bg-accent-main before:dark:border-white after:dark:bg-accent-alt"
>
  <figure>
    <ConditionalWrapper
      wrapped={!!link}
      wrapper="a"
      wrapperProps={{
        href: link,
        target: "_blank",
        rel: "noopener noreferrer",
      }}
    >
      <img
        class="aspect-square w-max bg-black object-cover"
        src={image}
        alt={name}
        loading="lazy"
      />
    </ConditionalWrapper>
  </figure>
  <hgroup>
    <Text variant="h2" class="text-2xl">
      <ConditionalWrapper
        wrapped={!!link}
        wrapper="a"
        wrapperProps={{
          class: "flex items-center gap-1 no-underline hover:underline",
          href: link,
          target: "_blank",
          rel: "noopener noreferrer",
        }}
      >
        {name}
        {#if link}
          <Icon class="fill-black dark:fill-white" icon="open_in_new" />
        {/if}
      </ConditionalWrapper>
    </Text>
    <p>
      <Text variant="subtitle2">{description}</Text>
    </p>
  </hgroup>
  <div class="-mx-2 border-t-4 border-t-black dark:border-t-white">
    <Text variant="subtitle1" class="ml-2 inline-block text-xs">
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
