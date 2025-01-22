import logoDataUrl from "@src/assets/img/logo.svg";
import "@src/styles/tailwind.css";

export function App() {
  return (
    <div class="fixed left-5 top-5 z-[2000] w-80 rounded-xl bg-[#282c34] text-white">
      <img
        src={logoDataUrl}
        class="pointer-events-none animate-logo-spin"
        alt="logo"
      />
      <p class="flex flex-wrap font-bold">
        Edit <code>src/pages/content/index.tsx</code> and save to reload.
      </p>
    </div>
  );
}
