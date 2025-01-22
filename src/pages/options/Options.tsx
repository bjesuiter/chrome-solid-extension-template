import logoDataUrl from "@src/assets/img/logo.svg";
import "@src/styles/tailwind.css";

export function OptionsPage() {
  return (
    <div class="fixed inset-0 bg-[#282c34] text-white">
      <h1 class="text-xl font-bold">Options Page Template</h1>
      <section class="top-24 mx-auto w-fit p-5">
        {/* get urls for imported assets: chrome.runtime.getURL(), but NOT for images, images are inlined as data urls from vite 5 on! */}
        <img
          src={logoDataUrl}
          class="pointer-events-none max-w-80 animate-logo-spin"
          alt="logo"
        />
        <p class="flex flex-wrap pt-10 text-base font-bold">
          Edit &nbsp; <code>src/pages/options/Options.tsx</code> &nbsp; and save
          to reload.
        </p>
      </section>
    </div>
  );
}
