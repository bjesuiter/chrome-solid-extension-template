import logo from "@src/assets/img/logo.svg";
import "@src/styles/tailwind.css";

export function PopupPage() {
  return (
    <div class="h-[200px] w-[400px] bg-[#282c34] text-white">
      <section class="w-[fit-content] p-5">
        <img
          src={chrome.runtime.getURL(logo)}
          class="pointer-events-none animate-logo-spin"
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
