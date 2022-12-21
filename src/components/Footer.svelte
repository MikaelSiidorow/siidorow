<script lang="ts">
  import Icon from "./shared/Icon.svelte";
  import Text from "./shared/Text.svelte";

  export let email: string;
  export let source: string;
</script>

<footer>
  <a href="#hero">
    <Icon class="homeIcon" icon="logo" size="2rem" />
    <span>Siidorow</span>
  </a>
  <ul>
    <li>
      <a href="mailto:{email}">
        <Text variant="subtitle2" size="xs" class="linkName">Email:</Text>
        <Text variant="subtitle1" size="xs">{email}</Text></a
      >
    </li>
    <li>
      <a href={source} target="_blank" rel="noopener noreferrer">
        <Text variant="subtitle2" size="xs" class="linkName">Source:</Text>
        <Text variant="subtitle1" size="xs">GitHub</Text>
        <Icon class="linkIcon" icon="open_in_new" />
      </a>
    </li>
  </ul>
</footer>

<style>
  footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem 0;
    gap: 2rem;
  }

  footer a {
    display: flex;
    align-items: center;
    color: var(--text-color);
    text-decoration: none;
  }

  footer a:hover {
    color: var(--accent-color-main);
  }

  footer a :global(.homeIcon) {
    fill: var(--text-color);
  }

  footer a:hover :global(.homeIcon) {
    fill: var(--accent-color-main);
  }

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  li :global(.linkName) {
    margin-right: 0.5rem;
  }

  a :global(.linkIcon) {
    fill: var(--text-color);
    margin-left: 0.25rem;
  }

  a:hover :global(.linkIcon) {
    fill: var(--accent-color-main);
  }
</style>
