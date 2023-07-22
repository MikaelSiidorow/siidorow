<script lang="ts">
  import Icon from "./shared/Icon.svelte";
  import Text from "./shared/Text.svelte";

  export let email: string;
  export let source: string;
</script>

<footer class="flex flex-col items-center gap-8 py-8">
  <a
    href="#hero"
    class="group flex items-center no-underline hover:text-accent"
  >
    <Icon
      class="fill-foreground group-hover:fill-accent"
      icon="logo"
      size="2rem"
    />
    <span class="ml-2 text-2xl">Siidorow</span>
  </a>
  <ul class="flex flex-col gap-2">
    <li>
      <a
        href="mailto:{email}"
        class="flex items-center no-underline hover:text-accent"
      >
        <Text variant="subtitle" class="mr-2 text-xs">Email:</Text>
        <Text variant="emphasis" class="text-xs">{email}</Text></a
      >
    </li>
    <li>
      <a
        href={source}
        target="_blank"
        rel="noopener noreferrer"
        class="group flex items-center no-underline hover:text-accent"
      >
        <Text variant="subtitle" class="mr-2 text-xs">Source:</Text>
        <Text variant="emphasis" class="text-xs">GitHub</Text>
        <Icon
          class="ml-1 fill-foreground group-hover:fill-accent"
          icon="open_in_new"
        />
      </a>
    </li>
  </ul>
</footer>
