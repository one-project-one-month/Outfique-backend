// export const types = [
//   {
//     value: ':sparkles: feat',
//     name: '✨ feat:\tAdding a new feature',
//   },
//   {
//     value: ':bug: fix',
//     name: '🐛 fix:\tFixing a bug',
//   },
//   {
//     value: ':memo: docs',
//     name: '📝 docs:\tAdd or update documentation',
//   },
//   {
//     value: ':lipstick: style',
//     name: '💄 style:\tAdd or update styles, ui or ux',
//   },
//   {
//     value: ':recycle: refactor',
//     name: '♻️  refactor:\tCode change that neither fixes a bug nor adds a feature',
//   },
//   {
//     value: ':zap: perf',
//     name: '⚡️ perf:\tCode change that improves performance',
//   },
//   {
//     value: ':white_check_mark: test',
//     name: '✅ test:\tAdding tests cases',
//   },
//   {
//     value: ':truck: chore',
//     name: '🚚 chore:\tChanges to the build process or auxiliary tools\n\t\tand libraries such as documentation generation',
//   },
//   {
//     value: ':rewind: revert',
//     name: '⏪️ revert:\tRevert to a commit',
//   },
//   {
//     value: ':construction: wip',
//     name: '🚧 wip:\tWork in progress',
//   },
//   {
//     value: ':construction_worker: build',
//     name: '👷 build:\tAdd or update regards to build process',
//   },
//   {
//     value: ':green_heart: ci',
//     name: '💚 ci:\tAdd or update regards to build process',
//   },
// ];
// export const scopes = [];
// export const scopeOverrides = {
//   fix: [{ name: 'merge' }, { name: 'style' }, { name: 'test' }, { name: 'hotfix' }],
// };
// export const allowCustomScopes = true;
// export const allowBreakingChanges = ['feat', 'fix'];
// export const skipQuestions = ['footer', 'breaking'];
// export const subjectLimit = 100;

// module.exports = {
//   types: [
//     {
//       value: ':sparkles: feat',
//       name: '✨ feat:\tAdding a new feature',
//     },
//     {
//       value: ':bug: fix',
//       name: '🐛 fix:\tFixing a bug',
//     },
//     {
//       value: ':memo: docs',
//       name: '📝 docs:\tAdd or update documentation',
//     },
//     {
//       value: ':lipstick: style',
//       name: '💄 style:\tAdd or update styles, ui or ux',
//     },
//     {
//       value: ':recycle: refactor',
//       name: '♻️  refactor:\tCode change that neither fixes a bug nor adds a feature',
//     },
//     {
//       value: ':zap: perf',
//       name: '⚡️ perf:\tCode change that improves performance',
//     },
//     {
//       value: ':white_check_mark: test',
//       name: '✅ test:\tAdding tests cases',
//     },
//     {
//       value: ':truck: chore',
//       name: '🚚 chore:\tChanges to the build process or auxiliary tools\n\t\tand libraries such as documentation generation',
//     },
//     {
//       value: ':rewind: revert',
//       name: '⏪️ revert:\tRevert to a commit',
//     },
//     {
//       value: ':construction: wip',
//       name: '🚧 wip:\tWork in progress',
//     },
//     {
//       value: ':construction_worker: build',
//       name: '👷 build:\tAdd or update regards to build process',
//     },
//     {
//       value: ':green_heart: ci',
//       name: '💚 ci:\tAdd or update regards to build process',
//     },
//   ],

//   scopes: [],

//   scopeOverrides: {
//     fix: [
//       { name: 'merge' },
//       { name: 'style' },
//       { name: 'test' },
//       { name: 'hotfix' },
//     ],
//   },

//   allowCustomScopes: true,
//   allowBreakingChanges: ['feat', 'fix'],
//   skipQuestions: ['footer', 'breaking'],
//   subjectLimit: 100,
// };

// const types = [
//   {
//     value: ':sparkles: feat',
//     name: '✨ feat:\tAdding a new feature',
//   },
//   {
//     value: ':bug: fix',
//     name: '🐛 fix:\tFixing a bug',
//   },
//   {
//     value: ':memo: docs',
//     name: '📝 docs:\tAdd or update documentation',
//   },
//   {
//     value: ':lipstick: style',
//     name: '💄 style:\tAdd or update styles, UI or UX',
//   },
//   {
//     value: ':recycle: refactor',
//     name: '♻️  refactor:\tCode change that neither fixes a bug nor adds a feature',
//   },
//   {
//     value: ':zap: perf',
//     name: '⚡️ perf:\tCode change that improves performance',
//   },
//   {
//     value: ':white_check_mark: test',
//     name: '✅ test:\tAdding test cases',
//   },
//   {
//     value: ':truck: chore',
//     name: '🚚 chore:\tChanges to the build process or auxiliary tools\n\t\tand libraries such as documentation generation',
//   },
//   {
//     value: ':rewind: revert',
//     name: '⏪️ revert:\tRevert to a commit',
//   },
//   {
//     value: ':construction: wip',
//     name: '🚧 wip:\tWork in progress',
//   },
//   {
//     value: ':construction_worker: build',
//     name: '👷 build:\tAdd or update regards to build process',
//   },
//   {
//     value: ':green_heart: ci',
//     name: '💚 ci:\tAdd or update regards to CI process',
//   },
// ];

// const scopes = [];

// const scopeOverrides = {
//   fix: [{ name: 'merge' }, { name: 'style' }, { name: 'test' }, { name: 'hotfix' }],
// };

// const allowCustomScopes = true;
// const allowBreakingChanges = ['feat', 'fix'];
// const skipQuestions = ['footer', 'breaking'];
// const subjectLimit = 100;

// export default {
//   types,
//   scopes,
//   scopeOverrides,
//   allowCustomScopes,
//   allowBreakingChanges,
//   skipQuestions,
//   subjectLimit,
// };

// .cz-config.cjs
module.exports = {
  types: [
    { value: ':sparkles: feat', name: '✨ feat: Adding a new feature' },
    { value: ':bug: fix', name: '🐛 fix: Fixing a bug' },
    { value: ':memo: docs', name: '📝 docs: Add or update documentation' },
    { value: ':lipstick: style', name: '💄 style: Add or update styles, UI or UX' },
    {
      value: ':recycle: refactor',
      name: '♻️ refactor: Code change that neither fixes a bug nor adds a feature',
    },
    { value: ':zap: perf', name: '⚡️ perf: Code change that improves performance' },
    { value: ':white_check_mark: test', name: '✅ test: Adding test cases' },
    { value: ':truck: chore', name: '🚚 chore: Changes to the build process or auxiliary tools' },
    { value: ':rewind: revert', name: '⏪️ revert: Revert to a commit' },
    { value: ':construction: wip', name: '🚧 wip: Work in progress' },
    {
      value: ':construction_worker: build',
      name: '👷 build: Add or update regards to build process',
    },
    { value: ':green_heart: ci', name: '💚 ci: Add or update regards to CI process' },
  ],
  scopes: [],
  scopeOverrides: {
    fix: [{ name: 'merge' }, { name: 'style' }, { name: 'test' }, { name: 'hotfix' }],
  },
  allowCustomScopes: true,
  allowBreakingChanges: ['feat', 'fix'],
  skipQuestions: ['footer', 'breaking'],
  subjectLimit: 100,
};
