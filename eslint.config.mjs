import { createRequire } from 'module';

const require = createRequire(import.meta.url);



export default [

    {

        ignores: ['node_modules/', '**/dist/', '*.config.js', '**/*.d.ts', '**/coverage/'],

        files: ['*/classes/*', '**/*.ts', '**/*.tsx'],

        languageOptions: {

            parser: require('@typescript-eslint/parser'),

            parserOptions: {

                ecmaVersion: 'latest',

                sourceType: 'module',

                project: './tsconfig.json',

            },

        },

        plugins: {

            '@typescript-eslint': require('@typescript-eslint/eslint-plugin'),

        },

        rules: {

            '@typescript-eslint/no-unused-expressions': [

                'error',

                {

                    allowShortCircuit: true,

                    allowTernary: true,

                    allowTaggedTemplates: true,

                },

            ],

            '@typescript-eslint/no-unused-vars': [

                'error',

                {

                    vars: 'all',

                    args: 'after-used',

                    ignoreRestSiblings: true,

                    argsIgnorePattern: '^_',

                },

            ],

            'prefer-const': [

                'error',

                {

                    destructuring: 'any',

                    ignoreReadBeforeAssign: false,

                },

            ],

            'spaced-comment': ['error', 'always', { exceptions: ['-', '+'] }],

        },

    },

];