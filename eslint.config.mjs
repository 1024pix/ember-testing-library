import pixEslintConfig from '@1024pix/eslint-plugin/config';
import babelParser from '@babel/eslint-parser';
import globals from 'globals';

export default [
  ...pixEslintConfig,
  {
    ignores: ['**/*.yml'],
  },
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parser: babelParser,
      parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
        requireConfigFile: false,
        babelOptions: {
          configFile: false,
          babelrc: false,
          plugins: [
            [
              '@babel/plugin-proposal-decorators',
              {
                decoratorsBeforeExport: true,
              },
            ],
          ],
        },
      },
    },
  },
];
