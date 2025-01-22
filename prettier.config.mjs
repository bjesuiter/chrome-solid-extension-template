// prettier.config.mjs

import * as prettierPluginTailwind from "prettier-plugin-tailwindcss";

const config = {
  // prettierPluginTailwind auto-detects: tailwindConfig: './tailwind.config.js',
  plugins: [prettierPluginTailwind],
  // default: trailingComma: "es5",
  singleQuote: false,
  requirePragma: false,
  arrowParens: "always",
};

export default config;
