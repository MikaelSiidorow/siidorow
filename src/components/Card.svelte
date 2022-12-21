<script lang="ts">
  import Icon from "./shared/Icon.svelte";
  import Text from "./shared/Text.svelte";
  import { tagColors } from "../constants";

  export let name: string;
  export let description: string;
  export let image: string;
  export let link: string = undefined;
  export let tags: string[];
</script>

<div class="card">
  <figure>
    {#if link}
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img src={image} alt={name} />
      </a>
    {:else}
      <img src={image} alt={name} />
    {/if}
  </figure>
  <hgroup>
    <Text variant="h2" size="md">
      {#if link}
        <a href={link} target="_blank" rel="noopener noreferrer"
          >{name} <Icon class="linkIcon" icon="open_in_new" /></a
        >
      {:else}
        {name}
      {/if}
    </Text>

    <p>
      <Text variant="subtitle2" size="sm">{description}</Text>
    </p>
  </hgroup>
  <div class="tagsContainer">
    <Text variant="subtitle1" size="xs" class="tags">
      {#each tags as tag (tag)}
        <span class="tag" style="--tag-color: {tagColors[tag]}">{tag} </span>
      {/each}
    </Text>
  </div>
</div>

<style>
  .card {
    display: flex;
    position: relative;
    flex-direction: column;
    z-index: 0;

    padding: 0.5rem;
  }

  .card::after {
    content: "";
    position: absolute;
    z-index: -1;

    width: 100%;
    height: 100%;
    background-color: var(--accent-color-main);
  }

  .card::before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    border: 4px solid var(--text-color);
    pointer-events: none;
  }

  .card .tagsContainer {
    border-top: 4px solid var(--text-color);
    margin: 0 -0.5rem;
  }

  .card :global(.tags) {
    margin-left: 0.5rem;
    display: inline-block;
  }

  .card .tag {
    display: inline-block;
  }
  .card .tag::before {
    content: "■ ";
    color: var(--tag-color);
  }

  .card :global(.tag:not(:last-child)::after) {
    content: "|";
    margin-right: 0.5rem;
    font-style: italic;
  }

  .card a {
    text-decoration: none;
    color: var(--text-color);
  }

  .card a:hover {
    text-decoration: underline;
  }

  .card :global(.linkIcon) {
    fill: var(--text-color);
  }
</style>
