<script lang="ts">
  import Text from "./shared/Text.svelte";
  import Button from "./shared/Button.svelte";

  export let name: string;
  export let title: string;
  export let content: string;
  export let buttonText: string;
  export let image: string;
</script>

<section id="hero">
  <div class="content">
    <hgroup>
      <Text variant="h1" size="lg">{name}</Text>
      <p>
        <Text variant="subtitle2" size="sm" indent>{title}</Text>
      </p>
    </hgroup>
    <Text class="bodyText">{content}</Text>
    <Button class="actionButton" variant="primary" href="#projects" type="link"
      >{buttonText}</Button
    >
  </div>
  <figure>
    <img src={image} alt="avatar" />
  </figure>
</section>

<style>
  section {
    display: flex;

    background-color: var(--secondary-color);
    border: 4px solid var(--text-color);
    box-shadow: 24px 24px var(--accent-color-main),
      24px 24px 0 4px var(--text-color);
  }

  section::before {
    content: "";
    border-right: 4px solid var(--text-color);
  }

  @media (max-width: 900px) {
    section {
      flex-direction: column;
    }

    section::before {
      border-bottom: 4px solid var(--text-color);
    }
  }

  figure {
    order: -1;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1.5rem;
    flex: 1;
  }

  .content {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
    flex: 1;
  }

  section :global(.bodyText) {
    flex: 1;
  }

  section :global(.actionButton) {
    align-self: flex-end;
  }
</style>
