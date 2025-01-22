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
  eslintConfigPrettier,
  {
    ...solid,
    files: ["src/**/*", "vite.config.ts", "utils/**/*"],
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
  // Global ignore object
  // (CAUTION: DO NOT add more options to this config, since ignores will stop working!)
  // see: https://github.com/eslint/eslint/discussions/18304#discussioncomment-9069706
  {
    ignores: ["dist/**", "coverage/**", "node_modules/**"],
  },
];
