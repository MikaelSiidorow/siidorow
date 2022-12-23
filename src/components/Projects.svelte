<script lang="ts">
  import Text from "./shared/Text.svelte";
  import Card from "./Card.svelte";
  import type { Project } from "../types";

  export let projects: Project[];
</script>

<section id="projects" class="flex flex-col items-center gap-8 py-8">
  <hgroup>
    <p>
      <Text variant="subtitle1" class="ml-6 text-2xl">My personal</Text>
    </p>
    <Text variant="h1" size="xl">Projects</Text>
  </hgroup>
  <div class="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
    {#each projects as project (project.name)}
      <Card {...project} />
    {/each}
  </div>
</section>
