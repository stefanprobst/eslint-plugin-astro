# eslint-plugin-astro

## 1.3.0

### Minor Changes

- [#423](https://github.com/ota-meshi/eslint-plugin-astro/pull/423) [`d8d0c73`](https://github.com/ota-meshi/eslint-plugin-astro/commit/d8d0c73ee1f7400812b1524a814acaff918f4979) Thanks [@azat-io](https://github.com/azat-io)! - feat: add sort-attributes rule

## 1.2.4

### Patch Changes

- [#418](https://github.com/ota-meshi/eslint-plugin-astro/pull/418) [`b03d0d5`](https://github.com/ota-meshi/eslint-plugin-astro/commit/b03d0d5ef86e7ef572570712e3ae18581b5e7fc0) Thanks [@JoshuaKGoldberg](https://github.com/JoshuaKGoldberg)! - feat: support typescript-eslint@8

## 1.2.3

### Patch Changes

- [#405](https://github.com/ota-meshi/eslint-plugin-astro/pull/405) [`a77445e`](https://github.com/ota-meshi/eslint-plugin-astro/commit/a77445e353f8bd38c4348529c58ce242d18d36c2) Thanks [@smilosevic](https://github.com/smilosevic)! - no-export-from-components - allow "partial" exception

## 1.2.2

### Patch Changes

- [#397](https://github.com/ota-meshi/eslint-plugin-astro/pull/397) [`58b3f19`](https://github.com/ota-meshi/eslint-plugin-astro/commit/58b3f194d804ed850c91c76e45bb567c68b472f1) Thanks [@ota-meshi](https://github.com/ota-meshi)! - fix: no-exports-from-components rule, which allowed `getStaticPath` instead of `getStaticPaths`

## 1.2.1

### Patch Changes

- [#395](https://github.com/ota-meshi/eslint-plugin-astro/pull/395) [`5174590`](https://github.com/ota-meshi/eslint-plugin-astro/commit/5174590ac079ef98171a98b8000a75bcedfe783a) Thanks [@ota-meshi](https://github.com/ota-meshi)! - Update `astro/no-exports-from-components` rule to allow exceptions

## 1.2.0

### Minor Changes

- [#386](https://github.com/ota-meshi/eslint-plugin-astro/pull/386) [`876ce07`](https://github.com/ota-meshi/eslint-plugin-astro/commit/876ce074da411095916cdb291ef2ccf27a996e23) Thanks [@odanado](https://github.com/odanado)! - feat: add name of config object

## 1.1.2

### Patch Changes

- [#379](https://github.com/ota-meshi/eslint-plugin-astro/pull/379) [`3fee9b2`](https://github.com/ota-meshi/eslint-plugin-astro/commit/3fee9b276b50a6b51c52fece22432fa1ad134fc0) Thanks [@ota-meshi](https://github.com/ota-meshi)! - fix: update parser

## 1.1.1

### Patch Changes

- [#374](https://github.com/ota-meshi/eslint-plugin-astro/pull/374) [`1de0fed`](https://github.com/ota-meshi/eslint-plugin-astro/commit/1de0fed049559d401a7b8d867d4f17257dbcd522) Thanks [@jimmy-guzman](https://github.com/jimmy-guzman)! - fix: 🐛 correctly export `meta` for ESM types

## 1.1.0

### Minor Changes

- [#372](https://github.com/ota-meshi/eslint-plugin-astro/pull/372) [`9102e3d`](https://github.com/ota-meshi/eslint-plugin-astro/commit/9102e3d9bc9cd8b6bd6060a6ea943034f846da53) Thanks [@ota-meshi](https://github.com/ota-meshi)! - feat: add `astro/no-exports-from-components` rule

### Patch Changes

- [#336](https://github.com/ota-meshi/eslint-plugin-astro/pull/336) [`7695e7d`](https://github.com/ota-meshi/eslint-plugin-astro/commit/7695e7d9e08cc270a2033b68283a76a5733b8a6d) Thanks [@renovate](https://github.com/apps/renovate)! - fix(deps): update dependency globals to v15

## 1.0.3

### Patch Changes

- [#368](https://github.com/ota-meshi/eslint-plugin-astro/pull/368) [`d3cb2ef`](https://github.com/ota-meshi/eslint-plugin-astro/commit/d3cb2ef1ecad35a121a83e6b7ecc0bf85a00b414) Thanks [@ota-meshi](https://github.com/ota-meshi)! - fix: crash in ESM

## 1.0.2

### Patch Changes

- [#366](https://github.com/ota-meshi/eslint-plugin-astro/pull/366) [`31f64dd`](https://github.com/ota-meshi/eslint-plugin-astro/commit/31f64dd09387cd79f7f6bedf7e61aee31d250280) Thanks [@ota-meshi](https://github.com/ota-meshi)! - fix: add exports to package.json

## 1.0.1

### Patch Changes

- [#361](https://github.com/ota-meshi/eslint-plugin-astro/pull/361) [`6737baa`](https://github.com/ota-meshi/eslint-plugin-astro/commit/6737baa504e05137bfd5b49e41d19d621491e00f) Thanks [@ota-meshi](https://github.com/ota-meshi)! - fix: main entry

## 1.0.0

### Major Changes

- [#357](https://github.com/ota-meshi/eslint-plugin-astro/pull/357) [`4afd799`](https://github.com/ota-meshi/eslint-plugin-astro/commit/4afd799195c75867db4724fa8535bb3a1139515c) Thanks [@ota-meshi](https://github.com/ota-meshi)! - feat!: drop support for ESLint<v8.57.0

- [#355](https://github.com/ota-meshi/eslint-plugin-astro/pull/355) [`4c73905`](https://github.com/ota-meshi/eslint-plugin-astro/commit/4c739057144c3d670dbd37a04337f65b5058e6c9) Thanks [@ota-meshi](https://github.com/ota-meshi)! - feat!: Drop support for Node.js<v18.18

- [#358](https://github.com/ota-meshi/eslint-plugin-astro/pull/358) [`3626074`](https://github.com/ota-meshi/eslint-plugin-astro/commit/36260748c263a1b57dd60ad2a9bbfea51458e544) Thanks [@ota-meshi](https://github.com/ota-meshi)! - feat!: use astro-eslint-parser v1

- [#360](https://github.com/ota-meshi/eslint-plugin-astro/pull/360) [`80dfa09`](https://github.com/ota-meshi/eslint-plugin-astro/commit/80dfa090ed2c959383d0bbb5f220873a9833c943) Thanks [@ota-meshi](https://github.com/ota-meshi)! - feat!: use bundler

## 0.34.0

### Minor Changes

- [#343](https://github.com/ota-meshi/eslint-plugin-astro/pull/343) [`3dcd714`](https://github.com/ota-meshi/eslint-plugin-astro/commit/3dcd7149d57e49e8b2732236c304d2d40f2e5559) Thanks [@nix6839](https://github.com/nix6839)! - feat: compatibility flat configs type

## 0.33.1

### Patch Changes

- [#334](https://github.com/ota-meshi/eslint-plugin-astro/pull/334) [`a84fe26`](https://github.com/ota-meshi/eslint-plugin-astro/commit/a84fe26a3aa0f5d84a7d2d9630f9025c4c8a60f2) Thanks [@ota-meshi](https://github.com/ota-meshi)! - fix: client-side scripts not being able to linting in flat configs

## 0.33.0

### Minor Changes

- [#322](https://github.com/ota-meshi/eslint-plugin-astro/pull/322) [`d55a51e`](https://github.com/ota-meshi/eslint-plugin-astro/commit/d55a51eb6903f30a90d81f0a9731520e45a7de83) Thanks [@oanaOM](https://github.com/oanaOM)! - feat add `astro/missing-client-only-directive-value` rule

## 0.32.0

### Minor Changes

- [#324](https://github.com/ota-meshi/eslint-plugin-astro/pull/324) [`64abbb1`](https://github.com/ota-meshi/eslint-plugin-astro/commit/64abbb106e20ba6baa79c59a0f545769ab2c7b3d) Thanks [@ota-meshi](https://github.com/ota-meshi)! - feat: add support for flat config

## 0.31.4

### Patch Changes

- [#313](https://github.com/ota-meshi/eslint-plugin-astro/pull/313) [`f51a168`](https://github.com/ota-meshi/eslint-plugin-astro/commit/f51a168c01f034bfdd72ba1dd8fad1c16f4325fa) Thanks [@ota-meshi](https://github.com/ota-meshi)! - fix: update astro-eslint-parser to 0.16.3

## 0.31.3

### Patch Changes

- [#306](https://github.com/ota-meshi/eslint-plugin-astro/pull/306) [`babd7ef`](https://github.com/ota-meshi/eslint-plugin-astro/commit/babd7ef09c877b00f5054cce2dee55c936a31b19) Thanks [@renovate](https://github.com/apps/renovate)! - fix(deps): update dependency eslint-compat-utils to ^0.4.0

## 0.31.2

### Patch Changes

- [#304](https://github.com/ota-meshi/eslint-plugin-astro/pull/304) [`eec7e97`](https://github.com/ota-meshi/eslint-plugin-astro/commit/eec7e971758601e8f66b60bce74ca774ad662531) Thanks [@renovate](https://github.com/apps/renovate)! - fix(deps): update dependency eslint-compat-utils to ^0.3.0

## 0.31.1

### Patch Changes

- [#301](https://github.com/ota-meshi/eslint-plugin-astro/pull/301) [`12a5190`](https://github.com/ota-meshi/eslint-plugin-astro/commit/12a519057b7574f0e313e8566119af97400d5991) Thanks [@renovate](https://github.com/apps/renovate)! - fix(deps): update dependency eslint-compat-utils to ^0.2.0

## 0.31.0

### Minor Changes

- [#294](https://github.com/ota-meshi/eslint-plugin-astro/pull/294) [`5b4cf50`](https://github.com/ota-meshi/eslint-plugin-astro/commit/5b4cf50893cd557eff2f1e29920d97fc25f0450d) Thanks [@ota-meshi](https://github.com/ota-meshi)! - Improve compatibility with ESLint v9

- [#292](https://github.com/ota-meshi/eslint-plugin-astro/pull/292) [`3429da5`](https://github.com/ota-meshi/eslint-plugin-astro/commit/3429da50471f23d043374fa9cde549f66d1c7e9e) Thanks [@ota-meshi](https://github.com/ota-meshi)! - feat: add `astro/client-side-ts` processor

## 0.30.0

### Minor Changes

- [#277](https://github.com/ota-meshi/eslint-plugin-astro/pull/277) [`8e785db`](https://github.com/ota-meshi/eslint-plugin-astro/commit/8e785dbefdf342c7190fbdefb12b61803ee4b06d) Thanks [@ota-meshi](https://github.com/ota-meshi)! - feat: use eslint-compat-utils

## 0.29.1

### Patch Changes

- [#262](https://github.com/ota-meshi/eslint-plugin-astro/pull/262) [`d463159`](https://github.com/ota-meshi/eslint-plugin-astro/commit/d46315941a068d6f32a90f85fb00f50ebbf2b585) Thanks [@ota-meshi](https://github.com/ota-meshi)! - fix: update astro-eslint-parser to v0.16

## 0.29.0

### Minor Changes

- [#243](https://github.com/ota-meshi/eslint-plugin-astro/pull/243) [`0e0a858`](https://github.com/ota-meshi/eslint-plugin-astro/commit/0e0a858d293eb9345db51d452d3749e0259bd9d2) Thanks [@renovate](https://github.com/apps/renovate)! - fix(deps): update dependency astro-eslint-parser to ^0.15.0

## 0.28.0

### Minor Changes

- [#234](https://github.com/ota-meshi/eslint-plugin-astro/pull/234) [`e13ea7c`](https://github.com/ota-meshi/eslint-plugin-astro/commit/e13ea7c02d6568b251ec28af57ad6c460053343e) Thanks [@morinokami](https://github.com/morinokami)! - feat: add `astro/no-deprecated-getentrybyslug` rule

## 0.27.2

### Patch Changes

- [#220](https://github.com/ota-meshi/eslint-plugin-astro/pull/220) [`a87b659`](https://github.com/ota-meshi/eslint-plugin-astro/commit/a87b659d7595ef15185fcd21e3806561be7d8025) Thanks [@ota-meshi](https://github.com/ota-meshi)! - fix: wrong report position in client script with empty lines

## 0.27.1

### Patch Changes

- [#211](https://github.com/ota-meshi/eslint-plugin-astro/pull/211) [`639d010`](https://github.com/ota-meshi/eslint-plugin-astro/commit/639d010e7eb542e2f27e063bdc79dfde3ac2bd59) Thanks [@SudoCat](https://github.com/SudoCat)! - fix: prevent parsing of json script tags

## 0.27.0

### Minor Changes

- [#206](https://github.com/ota-meshi/eslint-plugin-astro/pull/206) [`8aec40d`](https://github.com/ota-meshi/eslint-plugin-astro/commit/8aec40d36a26f1f211aece5638249739d74f8398) Thanks [@ota-meshi](https://github.com/ota-meshi)! - fix(deps): update astro-eslint-parser

- [#204](https://github.com/ota-meshi/eslint-plugin-astro/pull/204) [`f3d54be`](https://github.com/ota-meshi/eslint-plugin-astro/commit/f3d54bee4842c781f967159cca37bdd676cab71f) Thanks [@ota-meshi](https://github.com/ota-meshi)! - feat: export meta object

## 0.26.2

### Patch Changes

- [#201](https://github.com/ota-meshi/eslint-plugin-astro/pull/201) [`cafd97c`](https://github.com/ota-meshi/eslint-plugin-astro/commit/cafd97c515498c3ca11200091754a2bdc6eb9017) Thanks [@ota-meshi](https://github.com/ota-meshi)! - fix: incompatible with ESLint v8.40 in `astro/semi` rule

## 0.26.1

### Patch Changes

- [#191](https://github.com/ota-meshi/eslint-plugin-astro/pull/191) [`8fb33ff`](https://github.com/ota-meshi/eslint-plugin-astro/commit/8fb33ff4f8b22f6973e0973bb8f8c4194f60d7de) Thanks [@ota-meshi](https://github.com/ota-meshi)! - fix: compatibility with `eol-last` rule

## 0.26.0

### Minor Changes

- [#186](https://github.com/ota-meshi/eslint-plugin-astro/pull/186) [`361f335`](https://github.com/ota-meshi/eslint-plugin-astro/commit/361f3350a05771073297164f9e004dfc44f329d4) Thanks [@ota-meshi](https://github.com/ota-meshi)! - feat: update parser and add support for typescript v5

## 0.25.0

### Minor Changes

- [#180](https://github.com/ota-meshi/eslint-plugin-astro/pull/180) [`186f9c1`](https://github.com/ota-meshi/eslint-plugin-astro/commit/186f9c1036bfcb19e918e899d59a18306cb5a5ea) Thanks [@ota-meshi](https://github.com/ota-meshi)! - feat: use `@eslint-community` packages

## 0.24.0

### Minor Changes

- [#176](https://github.com/ota-meshi/eslint-plugin-astro/pull/176) [`dce3a82`](https://github.com/ota-meshi/eslint-plugin-astro/commit/dce3a82039bfbd5370ecf5caf71bd51206f0f424) Thanks [@renovate](https://github.com/apps/renovate)! - fix(deps): update dependency astro-eslint-parser to ^0.12.0

## 0.23.0

### Minor Changes

- [#157](https://github.com/ota-meshi/eslint-plugin-astro/pull/157) [`db0b600`](https://github.com/ota-meshi/eslint-plugin-astro/commit/db0b600dc9df00c3a86c0f9c402789a3fb919aef) Thanks [@ota-meshi](https://github.com/ota-meshi)! - update astro-eslint-parser

## 0.22.0

### Minor Changes

- [#151](https://github.com/ota-meshi/eslint-plugin-astro/pull/151) [`94aff89`](https://github.com/ota-meshi/eslint-plugin-astro/commit/94aff89500a12a28fae05f95e813f28ae8561831) Thanks [@ota-meshi](https://github.com/ota-meshi)! - update astro-eslint-parser

## 0.21.1

### Patch Changes

- [#139](https://github.com/ota-meshi/eslint-plugin-astro/pull/139) [`af6ceb9`](https://github.com/ota-meshi/eslint-plugin-astro/commit/af6ceb934692bf15a83f053010ab922dfad2ffa2) Thanks [@chshouyu](https://github.com/chshouyu)! - chore(deps): replace sourcemap-codec with @jridgewell/sourcemap-codec

## 0.21.0

### Minor Changes

- [#130](https://github.com/ota-meshi/eslint-plugin-astro/pull/130) [`ac8413e`](https://github.com/ota-meshi/eslint-plugin-astro/commit/ac8413e2ee3b44ba22aa00f4b5414a5e69a8e88e) Thanks [@ota-meshi](https://github.com/ota-meshi)! - feat: add `astro/valid-compile` rule

- [#130](https://github.com/ota-meshi/eslint-plugin-astro/pull/130) [`ac8413e`](https://github.com/ota-meshi/eslint-plugin-astro/commit/ac8413e2ee3b44ba22aa00f4b5414a5e69a8e88e) Thanks [@ota-meshi](https://github.com/ota-meshi)! - BREAKING: add `astro/valid-compile` rule to recommended config

- [#130](https://github.com/ota-meshi/eslint-plugin-astro/pull/130) [`ac8413e`](https://github.com/ota-meshi/eslint-plugin-astro/commit/ac8413e2ee3b44ba22aa00f4b5414a5e69a8e88e) Thanks [@ota-meshi](https://github.com/ota-meshi)! - feat: update astro-eslint-parser to v0.9

### Patch Changes

- [#128](https://github.com/ota-meshi/eslint-plugin-astro/pull/128) [`7651071`](https://github.com/ota-meshi/eslint-plugin-astro/commit/76510719d0daa9cdf0f297c4f8b39e1146f7246e) Thanks [@ota-meshi](https://github.com/ota-meshi)! - fix: revert no-conflict-set-directives status

## 0.20.1

### Patch Changes

- [#126](https://github.com/ota-meshi/eslint-plugin-astro/pull/126) [`66d753e`](https://github.com/ota-meshi/eslint-plugin-astro/commit/66d753effaec49b92bbc9ccb270555cf149f51d4) Thanks [@ota-meshi](https://github.com/ota-meshi)! - fix: false positives for `for` attr in `astro/jsx-a11y/label-has-associated-control` rule

## 0.20.0

### Minor Changes

- [#116](https://github.com/ota-meshi/eslint-plugin-astro/pull/116) [`9c481f8`](https://github.com/ota-meshi/eslint-plugin-astro/commit/9c481f8d565dee13ddacdb669222e383f5efc486) Thanks [@renovate](https://github.com/apps/renovate)! - update dependency astro-eslint-parser to ^0.7.0

## 0.19.0

### Minor Changes

- [#105](https://github.com/ota-meshi/eslint-plugin-astro/pull/105) [`4938a61`](https://github.com/ota-meshi/eslint-plugin-astro/commit/4938a610bbfd89aabad5e0d6d5db802a52535972) Thanks [@ota-meshi](https://github.com/ota-meshi)! - feat: add `astro/semi` rule
