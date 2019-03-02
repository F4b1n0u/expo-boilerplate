module.exports = (api) => {
  api.cache(true)

  return {
    presets: [
      'babel-preset-expo',
      'module:react-native-dotenv',
    ],

    env: {
      development: {
        plugins: [
          '@babel/transform-react-jsx-source'],
      },
    },
    plugins: [
      [
        'module-resolver', {
          alias: {
            '#actions': './src/actions',
            '#components': './src/components',
            '#containers': './src/containers',
            '#modules': './src/modules',
            '#selectors': './src/selectors',
            '#services': './src/services',
            '#store': './src/store',
            '#utils': './src/utils',
          },
        },
      ]
    ]
  }
}
