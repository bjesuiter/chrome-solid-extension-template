import eslint from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import tailwind from "eslint-plugin-tailwindcss";
import globals from "globals";
import ts_eslint from "typescript-eslint";

import * as tsParser from "@typescript-eslint/parser";
import solid from "eslint-plugin-solid/configs/typescript";

export default [
  eslint.configs.recommended,
  ...ts_eslint.configs.recommended,
  ...tailwind.configs["flat/recommended"],
  {
    files: ["**/*.ts", "**/*.tsx", "**/*.js", "**/*.jsx"],
    ignores: ["./dist", "!.*"],
    ...solid,
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: "tsconfig.json",
      },
      globals: {
        ...globals.browser,
        ...globals.es6,
        ...globals.node, // needed for linting vite.config.ts
        chrome: "readonly",
      },
    },

    // legacy config
    // parser: "@typescript-eslint/parser",
    // parserOptions: {
    //   ecmaFeatures: {
    //     jsx: true,
    //   },
    //   ecmaVersion: "latest",
    //   sourceType: "module",
    // },
    // plugins: ["solid", "@typescript-eslint"],
    // rules: {},
  },
  eslintConfigPrettier,
];
