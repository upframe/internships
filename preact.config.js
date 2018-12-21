import CopyWebpackPlugin from 'copy-webpack-plugin'
import envVars from 'preact-cli-plugin-env-vars';

export default function (config, env, helpers) {
  config.plugins.push(new CopyWebpackPlugin([{ context: `${__dirname}/public/`, from: `*.*` }]));
  envVars(config, env, helpers);
}