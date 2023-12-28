import { render } from "solid-js/web";
import { App } from "./components/Demo/app";

const root = document.createElement("div");
root.id = "my-extension-root";
document.body.append(root);

render(App, root);
