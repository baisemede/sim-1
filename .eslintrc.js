module.exports = {
  extends: [
    // add more generic rulesets here, such as:
    "eslint:recommended",
    "plugin:vue/essential"
  ],
  rules: {
    // override/add rules settings here, such as:
    // 'vue/html-self-closing': 'off'
    "no-console": 0,
    "no-unused-vars": 0,
    "no-undef": 0
  },
  parserOptions: {
    parser: "babel-eslint"
  }
};
