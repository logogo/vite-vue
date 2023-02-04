module.exports = {
    "root": true,
    "parser": "vue-eslint-parser",
    "parserOptions": {
        "ecmaVersion": 2022,
        "sourceType": "module",
        "requireConfigFile": false,
        "ecmaFeatures": {
            "jsx": true
        },
        "vueFeatures": {
            "filter": true,
            "interpolationAsNonHTML": false
        }
    },
    "env": {
        "browser": true,
        "node": true,
        "es6": true
    },
    "plugins": [
        "html",
        "vue",
        "jsx"
    ],
    "extends": [
        "plugin:vue/vue3-recommended",
        "plugin:vue/vue3-strongly-recommended",
        "plugin:vue/vue3-essential",
        "eslint:recommended"
    ],
    "rules": {
        "vue/comment-directive": [
            2,
            {
                "reportUnusedDisableDirectives": false
            }
        ],
        "vue/max-attributes-per-line": [
            2,
            {
                "singleline": 10,
                "multiline": 1
            }
        ],
        "vue/multi-word-component-names": 0,
        "vue/require-explicit-emits": 1,
        "vue/no-use-v-if-with-v-for": 2,
        "vue/no-lone-template": 2,
        "vue/this-in-template": 2,
        "vue/no-useless-template-attributes": 2,
        "vue/no-v-for-template-key-on-child": 2,
        "indent": [
            2,
            4,
            {
                "SwitchCase": 2
            }
        ],
        "quotes": [
            2,
            "single",
            {
                "avoidEscape": true,
                "allowTemplateLiterals": true
            }
        ],
        "no-mixed-spaces-and-tabs": 2,
        "jsx-quotes": [
            2,
            "prefer-single"
        ],
        "comma-dangle": [
            2,
            "never"
        ],
        "no-dupe-keys": 2,
        "no-eval": 1,
        "no-implied-eval": 2,
        "no-with": 2,
        "no-redeclare": 2,
        "no-undef": 2,
        "no-undef-init": 2,
        "prefer-const": 1,
        "no-debugger": 0,
        "no-console": 0,
        "accessor-pairs": 2,
        "arrow-spacing": [
            1,
            {
                "before": true,
                "after": true
            }
        ],
        "block-spacing": [
            2,
            "always"
        ],
        "brace-style": [
            2,
            "1tbs",
            {
                "allowSingleLine": true
            }
        ],
        "camelcase": [
            0,
            {
                "properties": "always"
            }
        ],
        "comma-spacing": [
            2,
            {
                "before": false,
                "after": true
            }
        ],
        "comma-style": [
            2,
            "last"
        ],
        "constructor-super": 2,
        "curly": [
            2,
            "multi-line"
        ],
        "dot-location": [
            2,
            "property"
        ],
        "eol-last": 2,
        "generator-star-spacing": [
            2,
            {
                "before": true,
                "after": true
            }
        ],
        "handle-callback-err": [
            0,
            "^(err|error)$"
        ],
        "key-spacing": [
            2,
            {
                "beforeColon": false,
                "afterColon": true
            }
        ],
        "keyword-spacing": [
            2,
            {
                "before": true,
                "after": true
            }
        ],
        "new-cap": [
            2,
            {
                "newIsCap": true,
                "capIsNew": false
            }
        ],
        "new-parens": 2,
        "no-array-constructor": 2,
        "no-caller": 2,
        "no-class-assign": 2,
        "no-cond-assign": 0,
        "no-const-assign": 2,
        "no-control-regex": 2,
        "no-delete-var": 2,
        "no-dupe-args": 2,
        "no-dupe-class-members": 2,
        "no-duplicate-case": 2,
        "no-empty-character-class": 2,
        "no-empty-pattern": 2,
        "no-ex-assign": 2,
        "no-extend-native": 2,
        "no-extra-bind": 2,
        "no-extra-boolean-cast": 2,
        "no-extra-parens": [
            2,
            "functions"
        ],
        "no-fallthrough": 2,
        "no-floating-decimal": 2,
        "no-func-assign": 2,
        "no-inner-declarations": [
            2,
            "functions"
        ],
        "no-invalid-regexp": 2,
        "no-irregular-whitespace": 2,
        "no-iterator": 2,
        "no-label-var": 2,
        "no-labels": [
            2,
            {
                "allowLoop": false,
                "allowSwitch": false
            }
        ],
        "no-lone-blocks": 2,
        "no-multi-spaces": 2,
        "no-multi-str": 2,
        "no-multiple-empty-lines": [
            2,
            {
                "max": 1
            }
        ],
        "no-global-assign": 2,
        "no-unsafe-negation": 2,
        "no-new-object": 2,
        "no-new-require": 2,
        "no-new-symbol": 2,
        "no-new-wrappers": 2,
        "no-obj-calls": 2,
        "no-octal": 2,
        "no-octal-escape": 2,
        "no-path-concat": 2,
        "no-proto": 2,
        "no-regex-spaces": 2,
        "no-return-assign": [
            2,
            "except-parens"
        ],
        "no-self-assign": 2,
        "no-self-compare": 2,
        "no-sequences": 2,
        "no-shadow-restricted-names": 2,
        "func-call-spacing": 2,
        "no-sparse-arrays": 2,
        "no-this-before-super": 2,
        "no-throw-literal": 2,
        "no-trailing-spaces": 2,
        "no-unexpected-multiline": 2,
        "no-unmodified-loop-condition": 2,
        "no-unneeded-ternary": [
            2,
            {
                "defaultAssignment": false
            }
        ],
        "no-unreachable": 2,
        "no-unsafe-finally": 2,
        "no-unused-vars": [
            2,
            {
                "args": "none"
            }
        ],
        "no-useless-call": 2,
        "no-useless-computed-key": 2,
        "no-useless-constructor": 2,
        "no-useless-escape": 0,
        "no-whitespace-before-property": 2,
        "one-var": [
            2,
            {
                "initialized": "never"
            }
        ],
        "operator-linebreak": [
            2,
            "after",
            {
                "overrides": {
                    "?": "before",
                    ":": "before"
                }
            }
        ],
        "padded-blocks": [
            2,
            "never"
        ],
        "semi": [
            2,
            "always"
        ],
        "semi-spacing": [
            2,
            {
                "before": false,
                "after": true
            }
        ],
        "space-before-blocks": [
            2,
            "always"
        ],
        "space-before-function-paren": [
            2,
            "never"
        ],
        "space-in-parens": [
            2,
            "never"
        ],
        "space-infix-ops": 2,
        "space-unary-ops": [
            2,
            {
                "words": true,
                "nonwords": false
            }
        ],
        "spaced-comment": [
            2,
            "always",
            {
                "markers": [
                    "global",
                    "globals",
                    "eslint",
                    "eslint-disable",
                    "*package",
                    "!",
                    ","
                ]
            }
        ],
        "template-curly-spacing": [
            2,
            "never"
        ],
        "use-isnan": 2,
        "valid-typeof": 2,
        "wrap-iife": [
            2,
            "any"
        ],
        "yield-star-spacing": [
            2,
            "both"
        ],
        "yoda": [
            2,
            "never"
        ],
        "object-curly-spacing": [
            2,
            "always",
            {
                "objectsInObjects": false
            }
        ],
        "array-bracket-spacing": [
            2,
            "never"
        ]
    }
}