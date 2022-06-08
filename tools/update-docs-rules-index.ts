import path from "path"
import renderRulesTableContent from "./render-rules"
import { formatAndSave } from "./lib/utils"

// -----------------------------------------------------------------------------
const readmeFilePath = path.resolve(__dirname, "../docs/rules.md")
void formatAndSave(
  readmeFilePath,
  `# Available Rules

The \`--fix\` option on the [command line](https://eslint.org/docs/user-guide/command-line-interface#fixing-problems) automatically fixes problems reported by rules which have a wrench :wrench: below.  
The rules with the following star :star: are included in the \`plugin:astro/recommended\` config.

<!-- This file is automatically generated in tools/update-docs-rules-index.js, do not change! -->
${renderRulesTableContent()}
[eslint-plugin-jsx-a11y]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y
`,
)
