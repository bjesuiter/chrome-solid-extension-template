import { render } from "solid-js/web";
import packageJson from "../../../package.json";
import { App } from "./components/Demo/app";

const root = document.createElement("div");
root.id = packageJson.name;
document.body.append(root);

render(App, root);
