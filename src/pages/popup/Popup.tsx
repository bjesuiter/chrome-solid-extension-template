import "@src/styles/tailwind.css";

export function PopupPage() {
  return (
    <div class="h-[200px] w-[400px] bg-[#282c34] text-white">
      <h1 class="text-xl font-bold">Popup Page Template</h1>
      <section class="w-fit p-5">
        {/* get urls for imported assets: chrome.runtime.getURL(), but NOT for images, images are inlined as data urls from vite 5 on! */}
        <img
          src="/icons/128x128.png"
          class="motion-preset-spin motion-duration-[2s] pointer-events-none"
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
