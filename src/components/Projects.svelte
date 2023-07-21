<script lang="ts">
  import Text from "./shared/Text.svelte";
  import Card from "./Card.svelte";
  import type { Project } from "../types";

  export let projects: Project[];
</script>

<section id="projects" class="flex flex-col items-center gap-8 py-8">
  <hgroup>
    <Text element="p" variant="emphasis" class="ml-6 text-2xl">My personal</Text
    >
    <Text element="h2" variant="title" titleSize="xl">Projects</Text>
  </hgroup>
  <div class="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
    {#each projects as project (project.name)}
      <Card {...project} />
    {/each}
  </div>
</section>
