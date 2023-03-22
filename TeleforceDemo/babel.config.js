module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      "module-resolver",
      {
        alias: {
          "@authNav": "./src/navigation/authNav.tsx"
        },
      },
    ],
    "react-native-reanimated/plugin",

  ],
};
