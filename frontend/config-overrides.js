const webpack = require('webpack');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = function override(config, env) {
  // Fallback configuration for node modules that require browser polyfills
  config.resolve.fallback = {
    ...config.resolve.fallback,
    "http": require.resolve("stream-http"),
    "https": require.resolve("https-browserify"),
    "util": require.resolve("util/"),
    "zlib": require.resolve("browserify-zlib"),
    "stream": require.resolve("stream-browserify"),
    "url": require.resolve("url/"),
    "assert": require.resolve("assert/"),
    "buffer": require.resolve("buffer/"),
    "process": require.resolve("process/browser")
  };

  // Add polyfills for Node.js modules
  config.plugins = (config.plugins || []).concat([
    new webpack.ProvidePlugin({
      process: 'process/browser',
      Buffer: ['buffer', 'Buffer'],
    }),
  ]);

  // Enable React fast refresh in development
  if (env === 'development') {
    config.plugins.push(new ReactRefreshWebpackPlugin());
    config.module.rules.forEach(rule => {
      if (rule.oneOf) {
        rule.oneOf.forEach(oneOfRule => {
          if (oneOfRule.loader && oneOfRule.loader.includes('babel-loader')) {
            oneOfRule.options.plugins = (oneOfRule.options.plugins || []).concat([
              require.resolve('react-refresh/babel')
            ]);
          }
        });
      }
    });
  }

  // Fix for axios and process/browser in ESM mode
  config.resolve.alias = {
    ...config.resolve.alias,
    'process': 'process/browser',
    'axios': require.resolve('axios')  // Ensure axios is resolved correctly
  };

  return config;
};
