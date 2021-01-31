module.exports = {
    env: {
        "browser": true,
        "es6": true
    },
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:prettier/recommended"
    ],
    parserOptions: {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    plugins: ["react", "prettier"],
    globals: {
        "module": true
    },
    rules: {
        "generator-star-spacing": "off",
        "no-unused-vars": 1, //禁止出现未使用过的变量
        "prettier/prettier": [
            "error",
            {
                "quoteProps": "preserve",
                "tabWidth": 4,
                "trailingComma": "none",
                "bracketSpacing": true,
                "jsxBracketSameLine": true,
                "endOfLine": "auto" //不同系统换行符不一致
            }
        ]
    }
};