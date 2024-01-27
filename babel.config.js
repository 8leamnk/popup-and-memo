const babelConfig = {
  presets: [
    'next/babel',
    ['@babel/preset-env', { targets: { node: 'current' } }],
    '@babel/preset-typescript',
  ],
  plugins: ['babel-plugin-styled-components'],
};

module.exports = babelConfig;
