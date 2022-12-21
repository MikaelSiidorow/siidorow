<script lang="ts">
  import Text from "./shared/Text.svelte";
  import Card from "./Card.svelte";
  import type { Project } from "../types";

  export let projects: Project[];
</script>

<section>
  <hgroup>
    <p>
      <Text variant="subtitle1" indent>My personal</Text>
    </p>
    <Text variant="h1" size="xl">Projects</Text>
  </hgroup>
  <div class="content">
    {#each projects as project (project.name)}
      <Card {...project} />
    {/each}
  </div>
</section>

<style>
  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem 0;
    gap: 2rem;
  }

  .content {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
  }

  @media (max-width: 900px) {
    .content {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 600px) {
    .content {
      grid-template-columns: 1fr;
    }
  }
</style>
