import { render } from "solid-js/web";
import { PopupPage } from "./Popup";

const appContainer = document.querySelector("#app-container");
if (!appContainer) {
  throw new Error("Can not find AppContainer");
}

render(PopupPage, appContainer);
