module.exports = {
  presets: [
    "@babel/preset-env",
    "@babel/preset-typescript",
    "@babel/preset-react",
  ],
  plugins: [
    [
      "module-resolver",
      {
        root: ["./"], // Root directory is the project root
        alias: {
          "@gluestack-button-component": path.resolve(__dirname, "./src"),
        },
      },
    ],
  ],
};
