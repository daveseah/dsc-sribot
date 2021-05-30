/*///////////////////////////////// ABOUT \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\*\

  ESLINT CONFIGURATION for URSYS/STEPSYS with VISUAL STUDIO CODE

\*\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ * /////////////////////////////////////*/

module.exports = {
  'extends': 'eslint:recommended',
  'env': {
    'node': true,
    'es6': true
  },
  'parserOptions': {
    'ecmaVersion': 2019,
    'sourceType': 'module'
  },
  'rules': {
    'no-unused-vars': 'warn'
  }
};
