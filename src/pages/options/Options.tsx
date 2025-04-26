import "@src/styles/tailwind.css";
import { mainLogger } from "@src/utils/logger";
import DeviconLinux from "~icons/devicon/linux";

const logger = mainLogger.getSubLogger({ name: "options.page" });

export function OptionsPage() {
  logger.info("Options Page Template logger example");

  return (
    <div class="fixed inset-0 bg-[#282c34] text-white">
      <h1 class="text-xl font-bold">Options Page Template</h1>
      <section class="top-24 mx-auto w-fit p-5">
        {/* get urls for imported assets: chrome.runtime.getURL(), but NOT for images, images are inlined as data urls from vite 5 on! */}
        <div class="flex flex-row items-center gap-4">
          {/* how to use imported images: */}
          <img
            src="/icons/128x128.png"
            class="motion-preset-spin motion-duration-2000 pointer-events-none max-w-80"
            alt="logo"
          />
          {/* how to use icons: */}
          <DeviconLinux class="motion-preset-spin motion-duration-2000 pointer-events-none max-w-80 text-[150pt]" />
        </div>

        <p class="flex flex-wrap pt-10 text-base font-bold">
          Edit &nbsp; <code>src/pages/options/Options.tsx</code> &nbsp; and save
          to reload.
        </p>
      </section>
    </div>
  );
}
