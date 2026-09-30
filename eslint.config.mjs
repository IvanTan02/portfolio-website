import nextPlugin from "eslint-config-next";

const config = [
  ...nextPlugin,
  {
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-unused-vars": "off",
    },
  },
];

export default config;
