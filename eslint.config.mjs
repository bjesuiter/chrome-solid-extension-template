import eslint from "@eslint/js";
import tailwind from "eslint-plugin-tailwindcss";
import globals from "globals";
import ts_eslint from "typescript-eslint";

import * as tsParser from "@typescript-eslint/parser";
import solid from "eslint-plugin-solid/configs/typescript";

// import prettierRecommended from "eslint-config-prettier";

export default [
  eslint.configs.recommended,
  // ts_eslint.configs.recommended,
  ...tailwind.configs["flat/recommended"],
  // prettierRecommended,
  {
    files: ["**/*.ts", "**/*.tsx", "**/*.js", "**/*.jsx"],
    ignores: ["watch.js", "dist/**"],
    ...solid,
    // extends: [
    // "prettier",
    // ],
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
];
