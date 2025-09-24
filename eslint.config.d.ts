declare const _default: (
  | {
      rules: Record<string, 0 | 'off'>;
    }
  | {
      files: string[];
      languageOptions: {
        ecmaVersion: number;
        sourceType: string;
        parser: typeof typescriptParser;
        parserOptions: {
          project: string;
        };
      };
      plugins: {
        '@typescript-eslint': {
          configs: Record<
            string,
            import('@typescript-eslint/utils/ts-eslint').ClassicConfig.Config
          >;
          meta: import('@typescript-eslint/utils/ts-eslint').FlatConfig.PluginMeta;
          rules: typeof import('@typescript-eslint/eslint-plugin/use-at-your-own-risk/rules');
        };
      };
      rules: {
        '@typescript-eslint/no-unused-vars': string;
        '@typescript-eslint/no-explicit-any': string;
        '@typescript-eslint/explicit-function-return-type': string;
      };
      ignores?: undefined;
    }
  | {
      ignores: string[];
      files?: undefined;
      languageOptions?: undefined;
      plugins?: undefined;
      rules?: undefined;
    }
)[];
export default _default;
import typescriptParser from '@typescript-eslint/parser';
//# sourceMappingURL=eslint.config.d.ts.map
