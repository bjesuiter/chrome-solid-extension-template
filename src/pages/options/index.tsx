import { render } from "solid-js/web";
import { OptionsPage } from "./Options";

const appContainer = document.querySelector("#app-container");
if (!appContainer) {
  throw new Error("Can not find AppContainer");
}

render(OptionsPage, appContainer);
