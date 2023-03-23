module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      "module-resolver",
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          "@appAuth": "./src/navigation/authNav",
          "@appNav": "./src/navigation/appNav",
          '@components': './src/components/index',
          '@screens': './src/screens/*',
          '@assets': './src/assets/*',
          '@theme': './src/theme/index',
          "@global": './src/global/*',
          "@utils": './src/utils/*',
          // '@hooks': './src/hooks/index',
        },
      },
    ],
    "react-native-reanimated/plugin",

  ],
};
