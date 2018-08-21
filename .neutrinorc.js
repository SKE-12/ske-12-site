module.exports = {
  options: {
    output: 'public',
    node_modules: 'src',
  },
  use: [
    ['@neutrinojs/standardjs',{
      eslint: {
        rules: {
          'indent': ['error', 'tab'],
          'react/jsx-indent': ['error', 'tab'],
          'no-tabs': 'off',
          'comma-dangle': ['error', 'always-multiline']
        }
      }
    }],
    [
      '@neutrinojs/react',
      {
        html: {
          title: 'ske-12-site'
        }
      }
    ],
    '@neutrinojs/jest',
  ],
}
