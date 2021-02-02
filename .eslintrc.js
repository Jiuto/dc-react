module.exports = {
    root: true,
    env: {
        "browser": true,
        "es6": true
    },
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:prettier/recommended"
    ],
    parser: "babel-eslint",
    parserOptions: {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 6,
        "sourceType": "module"
    },
    plugins: ["react", "prettier"],
    globals: {
        "module": true,
        "_": true,
        "$": true,
    },
    rules: {
        "generator-star-spacing": "off",
        "no-unused-vars": 1, //禁止出现未使用过的变量
        "react/prop-types": "off",
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
