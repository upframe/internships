import CopyWebpackPlugin from 'copy-webpack-plugin'
import envVars from 'preact-cli-plugin-env-vars';
import asyncPlugin from 'preact-cli-plugin-fast-async';

export default function (config, env, helpers) {
  asyncPlugin(config);
  config.plugins.push(new CopyWebpackPlugin([{ context: `${__dirname}/public/`, from: `*.*` }]));
  envVars(config, env, helpers);
}