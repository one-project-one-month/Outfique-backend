export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    // Allow emoji prefixes in commit messages
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'docs',
        'style',
        'refactor',
        'perf',
        'test',
        'chore',
        'revert',
        'wip',
        'build',
        'ci',
        // Also allow emoji versions
        ':sparkles: feat',
        ':bug: fix',
        ':memo: docs',
        ':lipstick: style',
        ':recycle: refactor',
        ':zap: perf',
        ':white_check_mark: test',
        ':truck: chore',
        ':rewind: revert',
        ':construction: wip',
        ':construction_worker: build',
        ':green_heart: ci',
      ],
    ],
    'subject-case': [2, 'never', ['start-case', 'pascal-case', 'upper-case']],
    'subject-max-length': [2, 'always', 100],
    // Disable type-empty and subject-empty for emoji format
    'type-empty': [0],
    'subject-empty': [0],
  },
};
