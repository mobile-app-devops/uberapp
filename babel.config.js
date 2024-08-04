module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        "module:react-native-dotenv",
        {
          moduleName: "@env", // this is default, you don't actually need to specify it
          path: ".env"
        }
      ]
    ]
  };
};
