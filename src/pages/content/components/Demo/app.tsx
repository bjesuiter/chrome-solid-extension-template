import "@src/styles/tailwind.css";
import { createSignal } from "solid-js";
import LogosChrome from "~icons/logos/chrome";
import packageJson from "../../../../../package.json";

export function App() {
  const [dialogRef, setDialogRef] = createSignal<HTMLDialogElement>();
  function close() {
    if (dialogRef()) {
      dialogRef().close();
    }
  }
  return (
    <dialog
      ref={setDialogRef}
      open
      class="fixed top-[50%] left-[50%] z-[2000] w-150 -translate-x-1/2 -translate-y-1/2 rounded-xl bg-[#282c34] p-5 text-white"
    >
      <div class="flex justify-between gap-4">
        <LogosChrome class="motion-preset-spin motion-duration-[2s] pointer-events-none inline-block text-4xl" />
        <span class="font-bold">
          {" "}
          Content Script component from <br />
          <code>{packageJson.name}</code>
        </span>
        <button
          style={{
            border: "2px solid white",
            "border-radius": "10%",
            padding: "0.25rem 1.25rem",
          }}
          class="cursor-pointer text-white"
          onClick={close}
        >
          X
        </button>
      </div>
      <p class="">
        Edit <code>src/pages/content/components/Demo/app.tsx</code> <br />
        and save to reload.
      </p>
    </dialog>
  );
}
