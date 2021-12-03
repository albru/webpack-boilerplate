const parensNewLine = "parens-new-line";

module.exports = {
  plugins: [
    "@typescript-eslint",
    "jsx-a11y",
    "optimize-regex",
    "promise",
    "sonarjs",
    "prettier",
    "jest"
  ],
  extends: [
    "airbnb",
    "airbnb/hooks",
    "airbnb-typescript",
    "prettier",
    "plugin:jsx-a11y/recommended",
    "plugin:optimize-regex/recommended",
    "plugin:promise/recommended",
    "plugin:sonarjs/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:jest/recommended"
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
    ecmaVersion: 2021,
    sourceType: "module"
  },
  settings: {
    "import/resolver": {
      alias: [
        ["@/src", "./src"],
        ["@/app", "./app"],
        ["@/entities", "./entities"],
        ["@/pages", "./pages"],
        ["@/features", "./features"],
        ["@/shared", "./shared"],
      ],
      node: {
        extensions: [
          ".ts",
          ".tsx",
          ".js",
        ]
      }
    }
  },
  rules: {
    "optimize-regex/optimize-regex": "warn",
    "no-param-reassign": "off",
    "object-curly-spacing": [
      "warn",
      "always"
    ],
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "no-unused-vars": [
      "error",
      {
        vars: "all",
        args: "none"
      }
    ],
    "@typescript-eslint/semi": [
      "error"
    ],
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        vars: "all",
        args: "none"
      }
    ],
    "@typescript-eslint/no-explicit-any": [
      "error",
      {
        ignoreRestArgs: true
      }
    ],
    "@typescript-eslint/explicit-function-return-type": [
      "error",
      {
        "allowExpressions": true,
        "allowTypedFunctionExpressions": true,
        "allowHigherOrderFunctions": true,
        "allowDirectConstAssertionInArrowFunctions": true,
        "allowConciseArrowFunctionExpressionsStartingWithVoid": true,
      }
    ],
    "max-len": [
      "warn",
      {
        code: 100,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreComments: true
      }
    ],
    "no-plusplus": [
      "error",
      {
        allowForLoopAfterthoughts: true
      }
    ],
    "react/jsx-key": "error",
    "import/order": [
      "error",
      {
        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling"
        ],
        pathGroups: [
          {
            pattern: "@/**",
            group: "internal",
            position: "after"
          },
          {
            pattern: "react",
            group: "builtin",
            position: "after"
          },
        ],
        pathGroupsExcludedImportTypes: [
          "react"
        ],
        "newlines-between": "always",
        alphabetize: {
          order: "asc",
          caseInsensitive: true
        }
      }
    ],
    "react/jsx-wrap-multilines": [
      "error",
      {
        declaration: parensNewLine,
        assignment: parensNewLine,
        return: parensNewLine,
        arrow: parensNewLine,
        condition: parensNewLine,
        logical: parensNewLine,
        prop: parensNewLine
      }
    ],
    "react/jsx-props-no-spreading": "off",
    "import/prefer-default-export": "off",
    "import/extensions": "off",
    "react/jsx-boolean-value": "off",
    "react/prop-types": "off",
    "react/no-unescaped-entities": "off",
    'react/destructuring-assignment': "off"
  }
};

