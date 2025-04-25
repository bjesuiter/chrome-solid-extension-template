import { ILogObj, IMeta, Logger } from "tslog";
import packageJson from "../../package.json";

export const mainLogger: Logger<ILogObj> = new Logger({
  type: "pretty",
  name: packageJson.name,
  hideLogPositionForProduction: import.meta.env.MODE === "production",
  overwrite: {
    addPlaceholders: (
      logObjMeta: IMeta,
      placeholderValues: Record<string, string>,
    ) => {
      placeholderValues["newline"] = "\n";
    },
  },
  // Available template vars:
  // https://tslog.js.org/#/?id=pretty-templates-and-styles-color-settings
  prettyLogTemplate:
    import.meta.env.MODE === "production"
      ? `{{yyyy}}.{{mm}}.{{dd}} {{hh}}:{{MM}}:{{ss}} [{{name}}] {{logLevelName}}: {{newline}}`
      : `{{yyyy}}.{{mm}}.{{dd}} {{hh}}:{{MM}}:{{ss}} [{{name}}] {{logLevelName}}: {{newline}}`,
});
