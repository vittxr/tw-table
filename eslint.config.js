// eslint.config.js
export default [
    {
        extends: [
            'eslint:recommended',
        ],
        files: ["**/*.js","**/*.ts", "**/*.tsx"],
        rules: {
            "jsdoc/require-description": "error",
            "jsdoc/check-values": "error"
        }
    }
];