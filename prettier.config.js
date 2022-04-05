const quavePrettier = require('@quave/eslint-config-quave/prettier.config');

module.exports = {
  ...quavePrettier,
  plugins: [...(quavePrettier.plugins || []), require('prettier-plugin-tailwindcss')],
}
