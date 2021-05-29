/*///////////////////////////////// ABOUT \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\*\

  ESLINT CONFIGURATION for URSYS/STEPSYS with VISUAL STUDIO CODE

\*\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ * /////////////////////////////////////*/

export default {
  'extends': 'eslint:recommended',
  'env': {
    'node': true,
    'es6': true
  },
  'parserOptions': {
    'ecmaVersion': 2019
  },
  'rules': {
    'no-unused-vars': 'warn'
  }
};
