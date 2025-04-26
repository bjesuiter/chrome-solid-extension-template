import "@src/styles/index.css";
import styles from "./Newtab.module.css";

const Newtab = () => {
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <img
          src="/icons/128x128.png"
          class="motion-preset-spin pointer-events-none h-[40vmin]"
          alt="logo"
        />
        <p class="font-bold">
          Edit <code>src/pages/newtab/Newtab.tsx</code> and save to reload.
        </p>
        <a
          class={styles.link}
          href="https://github.com/solidjs/solid"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Solid
        </a>
      </header>
    </div>
  );
};

export default Newtab;
