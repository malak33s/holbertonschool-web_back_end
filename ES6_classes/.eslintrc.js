module.exports = {
    env: {
      browser: true,
      es2021: true,
      node: true, // Ajouté pour reconnaître les globals de Node.js
    },
    extends: ['eslint:recommended'],
    parserOptions: {
      ecmaVersion: 12,
      sourceType: 'module',
    },
    rules: {
      // Vous pouvez ajouter ou modifier des règles ici selon vos préférences
    },
  };
  