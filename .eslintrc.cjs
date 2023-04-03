module.exports = {
    // ...
    extends: ["plugin:svelte/recommended", "plugin:@typescript-eslint/recommended"],
    // ...
    parser: "@typescript-eslint/parser",
    parserOptions: {
      // ...
      project: "tsconfig.json",
      extraFileExtensions: [".svelte"], // This is a required setting in `@typescript-eslint/parser` v4.24.0.
    },
    rules:{
        "@typescript-eslint/no-unsafe-member-access": "error"
    },
    overrides: [
      {
        files: ["*.svelte"],
        parser: "svelte-eslint-parser",
        parserOptions: {
          parser: "@typescript-eslint/parser",
        },
      },
      // ...
    ],
    // ...
  }