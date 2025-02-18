// IMPORTANT!
// This file has been automatically generated by "update-rules-index.ts",
// in order to update its content, update "update-rules-index.ts" and execute "npm run update"
import missingClientOnlyDirectiveValue from "./missing-client-only-directive-value"
import noConflictSetDirectives from "./no-conflict-set-directives"
import noDeprecatedAstroCanonicalurl from "./no-deprecated-astro-canonicalurl"
import noDeprecatedAstroFetchcontent from "./no-deprecated-astro-fetchcontent"
import noDeprecatedAstroResolve from "./no-deprecated-astro-resolve"
import noDeprecatedGetentrybyslug from "./no-deprecated-getentrybyslug"
import noExportsFromComponents from "./no-exports-from-components"
import noSetHtmlDirective from "./no-set-html-directive"
import noSetTextDirective from "./no-set-text-directive"
import noUnusedCssSelector from "./no-unused-css-selector"
import noUnusedDefineVarsInStyle from "./no-unused-define-vars-in-style"
import preferClassListDirective from "./prefer-class-list-directive"
import preferObjectClassList from "./prefer-object-class-list"
import preferSplitClassList from "./prefer-split-class-list"
import semi from "./semi"
import sortAttributes from "./sort-attributes"
import validCompile from "./valid-compile"
import { buildA11yRules } from "../a11y"

export const originalRules = [
  missingClientOnlyDirectiveValue,
  noConflictSetDirectives,
  noDeprecatedAstroCanonicalurl,
  noDeprecatedAstroFetchcontent,
  noDeprecatedAstroResolve,
  noDeprecatedGetentrybyslug,
  noExportsFromComponents,
  noSetHtmlDirective,
  noSetTextDirective,
  noUnusedCssSelector,
  noUnusedDefineVarsInStyle,
  preferClassListDirective,
  preferObjectClassList,
  preferSplitClassList,
  semi,
  sortAttributes,
  validCompile,
]
export const rules = [...originalRules, ...buildA11yRules()]
