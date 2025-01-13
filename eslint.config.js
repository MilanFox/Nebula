import stylistic from '@stylistic/eslint-plugin';
import pluginVue from 'eslint-plugin-vue';
import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt([
  ...pluginVue.configs['flat/recommended'],
  {
    plugins: { '@stylistic': stylistic },
    rules: {
      // Vue & Nuxt
      'vue/multi-word-component-names': ['error', { 'ignores': ['index'], ignorePattern: '^pages/' }],
      'vue/max-attributes-per-line': ['error', { singleline: 5, multiline: 1 }],

      // Error Prevention
      'no-irregular-whitespace': 'error',
      'no-loss-of-precision': 'error',
      'no-unreachable-loop': 'error',
      'no-unreachable': 'error',
      'no-unused-vars': ['error', { 'destructuredArrayIgnorePattern': '^_' }],
      'use-isnan': 'error',
      '@typescript-eslint/no-unused-expressions': ['error', { allowShortCircuit: true, allowTernary: true }],

      // Suggestions
      'arrow-body-style': ['warn', 'as-needed'],
      'camelcase': 'error',
      'consistent-return': 'warn',
      'eqeqeq': 'error',
      'func-style': ['error', 'expression'],
      'max-depth': ['error', 3],
      'max-params': ['warn', 3],
      'no-console': 'warn',
      'no-eval': 'error',
      'no-implied-eval': 'error',
      'no-shadow': 'error',
      'no-unneeded-ternary': 'error',
      'no-useless-return': 'error',
      'object-shorthand': ['warn'],
      'prefer-const': 'warn',
      'prefer-destructuring': 'warn',
      'prefer-template': 'warn',
      'radix': 'error',

      // Stylistic
      '@stylistic/arrow-spacing': 'error',
      '@stylistic/comma-dangle': ['error', 'only-multiline'],
      '@stylistic/brace-style': 'error',
      '@stylistic/comma-spacing': ['error', { 'before': false, 'after': true }],
      '@stylistic/computed-property-spacing': ['error', 'never'],
      '@stylistic/curly-newline': ['error', { 'multiline': true, 'minElements': 3, 'consistent': true }],
      '@stylistic/dot-location': ['error', 'property'],
      '@stylistic/eol-last': ['error', 'always'],
      '@stylistic/indent': ['error', 2],
      '@stylistic/linebreak-style': ['error', 'unix'],
      '@stylistic/max-len': ['error', { 'code': 120 }],
      '@stylistic/no-multiple-empty-lines': ['error', { max: 1 }],
      '@stylistic/object-curly-newline': ['error', { 'multiline': true, consistent: true }],
      '@stylistic/object-curly-spacing': ['error', 'always'],
      '@stylistic/quotes': ['error', 'single'],
      '@stylistic/semi': ['error', 'always'],
      '@stylistic/space-before-blocks': 'error',
    },
  },
]);
