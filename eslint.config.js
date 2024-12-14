module.exports = [
  {
    files: ["**/*.js", "**/*.jsx"], // Include JavaScript and JSX files
    languageOptions: {
      ecmaVersion: 2021, // Supports ES2021 features
      sourceType: "module", // Enables import/export statements
      parser: require("@babel/eslint-parser"), // Use Babel parser for JSX
      parserOptions: {
        requireConfigFile: false, // For Babel parser, avoid requiring a config file
        babelOptions: {
          presets: ["@babel/preset-react"], // Enable React parsing
        },
      },
    },
    plugins: {
      react: require("eslint-plugin-react"),
      "react-hooks": require("eslint-plugin-react-hooks"),
    },
    rules: {
      "react/jsx-uses-react": "error", // Ensure React is marked as used in JSX
      "react/jsx-uses-vars": "error", // Prevent variables used in JSX from being marked as unused
      "react/react-in-jsx-scope": "off", // Not needed for React 17+
      "react-hooks/rules-of-hooks": "error", // Enforce Hooks rules
      "react-hooks/exhaustive-deps": "warn", // Warn about missing dependencies in useEffect
    },
    settings: {
      react: {
        version: "detect", // Automatically detect the React version
      },
    },
  },
];
