<script lang="ts">
  export let name: string;
  export let title: string;
  export let content: string;
  export let buttonText: string;
  export let image: string;
  export let onButtonClick: () => void;
</script>

<section>
  <div>
    <hgroup>
      <h1>{name}</h1>
      <i>{title}</i>
    </hgroup>
    <p>{content}</p>
    <button on:click={onButtonClick}>{buttonText}</button>
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

  @media (max-width: 768px) {
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

  section div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
    flex: 1;
  }

  section div p {
    flex: 1;
  }

  h1 {
    position: relative;
    z-index: 0;

    font-size: 2rem;
    font-weight: 1000;
    line-height: 48px;
    max-width: fit-content;
    height: 48px;
    text-transform: uppercase;
  }

  h1::before {
    content: "";
    position: absolute;
    z-index: -1;

    width: 100%;
    height: 24px;
    background-color: var(--accent-color-main);
    transform: translate(8px, 75%);
  }

  hgroup i {
    font-size: 1rem;
    font-weight: 700;
    text-transform: uppercase;

    margin-left: 8px;
    color: var(--primary-color);
    background-color: var(--text-color);
  }

  button {
    border: none;
    background: none;
    cursor: pointer;

    align-self: flex-end;
    padding: 0.5rem 1rem;

    font-size: 1.5rem;
    font-weight: 700;
    text-transform: uppercase;

    background-color: var(--accent-color-main);
    box-shadow: 4px 4px var(--text-color);
  }

  button:hover {
    transform: scale(1.05);
  }

  button:active {
    transform: translate(4px, 4px);
    box-shadow: none;
  }
</style>
