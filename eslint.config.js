// import eslintConfigPrettier from "eslint-config-prettier";
import js from "@eslint/js";

export default [
    js.configs.recommended,
    {
        files: ["**/*.js","**/*.ts", "**/*.tsx"],
    },
];

// eslint.config.js
// module.exports = [
//     {
//         extends: [
//             'eslint:recommended',
//             "plugin:react/recommended",
//             'prettier'
//         ],
//         files: ["**/*.js","**/*.ts", "**/*.tsx"],
//         rules: {
//             "jsdoc/require-description": "error",
//             "jsdoc/check-values": "error"
//         }
//     },
//     // eslintConfigPrettier
// ];