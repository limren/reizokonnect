module.exports = {
    env: {
        node: true,
    },
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "prettier"
      ],
    rules: {
        "react/jsx-uses-react": "error",
        "react/jsx-uses-vars": "error",
      }
}