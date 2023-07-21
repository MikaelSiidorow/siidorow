<script lang="ts">
  import Icon from "./shared/Icon.svelte";
  import Text from "./shared/Text.svelte";

  export let email: string;
  export let source: string;
</script>

<footer class="flex flex-col items-center gap-8 py-8">
  <a
    href="#hero"
    class="group flex items-center no-underline hover:text-accent-main hover:dark:text-accent-alt"
  >
    <Icon
      class="fill-black group-hover:fill-accent-main dark:fill-white dark:group-hover:fill-accent-alt"
      icon="logo"
      size="2rem"
    />
    <span class="ml-2 text-2xl">Siidorow</span>
  </a>
  <ul class="flex flex-col gap-2">
    <li>
      <a
        href="mailto:{email}"
        class="flex items-center no-underline hover:text-accent-main hover:dark:text-accent-alt"
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
        class="group flex items-center no-underline hover:text-accent-main hover:dark:text-accent-alt"
      >
        <Text variant="subtitle" class="mr-2 text-xs">Source:</Text>
        <Text variant="emphasis" class="text-xs">GitHub</Text>
        <Icon
          class="ml-1 fill-black group-hover:fill-accent-main dark:fill-white dark:group-hover:fill-accent-alt"
          icon="open_in_new"
        />
      </a>
    </li>
  </ul>
</footer>
