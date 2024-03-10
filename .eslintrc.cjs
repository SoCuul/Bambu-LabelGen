module.exports = {
    parser: 'vue-eslint-parser',
    root: true,
    env: {
        node: true
    },
    extends: [
        '@vue/typescript/recommended',
        'plugin:vue/vue3-essential'
    ],
    parserOptions: {
        ecmaVersion: 2022
    },
    rules: {
        'object-curly-spacing': [ 'warn', 'always' ],
        'array-bracket-spacing': [ 'warn', 'always' ],
        'spaced-comment': [ 'error', 'always' ],
        'semi': [ 'error', 'never' ],
        'comma-dangle': [ 'error', 'never' ],
        'indent': [ 'error', 4, { 'SwitchCase': 1 } ],
        'eol-last': [ 'error', 'never' ],
        'array-element-newline': [ 'warn', 'consistent' ],
        'object-property-newline': 'warn',

        'vue/script-indent': [ 'error', 4, {
            'baseIndent': 1,
            'switchCase': 1,
            'ignores': []
        } ],
        'vue/html-indent': [ 'error', 4, {
            'attribute': 1,
            'baseIndent': 1,
            'closeBracket': 0,
            'alignAttributesVertically': true,
            'ignores': []
        } ],

        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        'vue/no-deprecated-slot-attribute': 'off',
        'vue/multi-word-component-names': 'off',
        'vue/html-indent': 'off',
        'vue/singleline-html-element-content-newline': 'off',
        'vue/max-attributes-per-line': 'off',
        'vue/html-self-closing': 'off',
        'vue/v-on-event-hyphenation': 'off',
        'vue/multiline-html-element-content-newline': 'off',
        'vue/this-in-template': 'off',
        'vue/no-unused-vars': 'off',
        'vue/require-prop-types': 'off',
        'vue/attribute-hyphenation': 'off',
        'vue/component-definition-name-casing': 'off',
        'vue/no-mutating-props': 'off'
    },
    'overrides': [
        {
            'files': [ '*.vue' ],
            'rules': {
                'indent': 'off'
            }
        }
    ]
}