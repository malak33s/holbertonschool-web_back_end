module.exports = {
  env: {
    browser: false,
    es6: true,
    jest: true,
  },
  extends: [
    'airbnb-base',
    'plugin:jest/all',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['jest'],
  rules: {
    'no-console': 'off', // Permet d'utiliser console.log
    'no-shadow': 'off', // Autorise l'ombrage de variables locales
    'no-restricted-syntax': [
      'error',
      'LabeledStatement',
      'WithStatement',
    ], // Restreint certaines syntaxes spécifiques
    'jest/prefer-todo': 'off', // Désactive la règle qui cause des erreurs avec Jest
  },
  overrides: [
    {
      files: ['*.js'], // Applique les règles ESLint uniquement aux fichiers JS
      excludedFiles: 'babel.config.js', // Exclut le fichier de configuration Babel
    },
  ],
};
