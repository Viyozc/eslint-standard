module.exports = (opts) => {
  if (!opts) {
    return {
      "extends": [
        "eslint:recommended",
        "plugin:import/errors",
        "plugin:import/warnings"
      ],
      "parser": "babel-eslint",
      "plugins": [
        "react"
      ],
      "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
          "jsx": true,
          "experimentalObjectRestSpread": true
        }
      },
      "env": {
        "es6": true,
        "browser": true,
        "node": true,
        "jquery": true,
        "jest": true
      },
      "rules": {
        "indent": [ "error", 2],
        "quotes": 0,
        "no-console": 0,
        "no-debugger": 1,
        "no-var": 1,
        "no-unused-vars": 1,
        "import/named": 0,
        "semi": [1, "always"],
        "eol-last": 0,
        "no-underscore-dangle": 0,
        "no-alert": 0,
        "no-lone-blocks": 0,
        "jsx-quotes": 0,
        "no-eq-null": 2,
        "no-extra-parens": 0,
        "no-irregular-whitespace": 2,
        "no-multi-spaces": 1,
        "no-trailing-spaces": 1,
        "padded-blocks": 0,
        "one-var": 0,
        "space-before-function-paren": [2, "always"],
        "key-spacing": [2, { "beforeColon": false, "afterColon": true }],
        "comma-dangle": [0, "never"],
        "no-multiple-empty-lines": [2, {"max": 1}],
        "no-mixed-spaces-and-tabs": [2, false],
        "react/display-name": [ 0, {"ignoreTranspilerName": false }],
        "react/forbid-prop-types": [1, {"forbid": ["any"]}],
        "react/jsx-boolean-value": 0,
        "react/jsx-closing-bracket-location": 0,
        "react/jsx-curly-spacing": 1,
        "react/jsx-indent-props": 0,
        "react/jsx-key": 1,
        "react/jsx-max-props-per-line": 0,
        "react/jsx-no-bind": 0,
        "react/jsx-no-duplicate-props": 1,
        "react/jsx-no-literals": 0,
        "react/jsx-no-undef": 1,
        "react/jsx-pascal-case": 1,
        "react/jsx-sort-prop-types": 0,
        "react/jsx-sort-props": 0,
        "react/jsx-uses-react": 1,
        "react/jsx-uses-vars": 1,
        "react/no-danger": 1,
        "react/no-did-mount-set-state": 0,
        "react/no-did-update-set-state": 1,
        "react/no-direct-mutation-state": 1,
        "react/no-multi-comp": 0,
        "react/no-set-state": 0,
        "react/no-unknown-property": 1,
        "react/prefer-es6-class": 1,
        "react/prop-types": 1,
        "react/react-in-jsx-scope": 1,
        "import/extensions": 1,
        "react/self-closing-comp": 1,
        "react/sort-comp": 1,
        "react/jsx-wrap-multilines": 1
      },
      "globals": {
        "window": true,
        "document": true,
        "sessionStorage": true,
        "localStorage": true
      }
    }  
  }
}