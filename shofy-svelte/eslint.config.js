// import prettier from 'eslint-config-prettier';
// import js from '@eslint/js';
// import { includeIgnoreFile } from '@eslint/compat';
// import svelte from 'eslint-plugin-svelte';
// import globals from 'globals';
// import { fileURLToPath } from 'node:url';
// import ts from 'typescript-eslint';
// const gitignorePath = fileURLToPath(new URL('./.gitignore', import.meta.url));

// export default ts.config(
// 	includeIgnoreFile(gitignorePath),
// 	js.configs.recommended,
// 	...ts.configs.recommended,
// 	...svelte.configs['flat/recommended'],
// 	prettier,
// 	...svelte.configs['flat/prettier'],
// 	{
// 		languageOptions: {
// 			globals: {
// 				...globals.browser,
// 				...globals.node
// 			}
// 		}
// 	},
// 	{
// 		files: ['**/*.svelte'],

// 		languageOptions: {
// 			parserOptions: {
// 				parser: ts.parser
// 			}
// 		},
// 		rules: {
// 			// Disable specific accessibility rules
// 			'a11y-click-events-have-key-events': 'off',
// 			'a11y-no-static-element-interactions': 'off',
// 			'a11y_invalid_attribute': 'off'
// 		}
// 	}
// );

import prettier from 'eslint-config-prettier';
import js from '@eslint/js';
import { includeIgnoreFile } from '@eslint/compat';
import svelte from 'eslint-plugin-svelte';
import globals from 'globals';
import { fileURLToPath } from 'node:url';
import ts from 'typescript-eslint';

const gitignorePath = fileURLToPath(new URL('./.gitignore', import.meta.url));

export default ts.config(
	includeIgnoreFile(gitignorePath),
	js.configs.recommended,
	...ts.configs.recommended,
	...svelte.configs['flat/recommended'],
	prettier,
	...svelte.configs['flat/prettier'],
	{
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node
			}
		}
	},
	{
		files: ['**/*.svelte'],
		languageOptions: {
			parserOptions: {
				parser: ts.parser
			}
		},
		rules: {
			// Disable specific accessibility rules for Svelte files
			'svelte/a11y-click-events-have-key-events': 'off',
			'svelte/a11y-no-static-element-interactions': 'off',
			'svelte/a11y-invalid-attribute': 'off',
			'svelte/a11y-missing-attribute': 'off' // Add this if you also want to disable the missing href rule
		}
	}
);
