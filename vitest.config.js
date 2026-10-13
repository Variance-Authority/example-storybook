import { defineConfig } from 'vitest/config';
import { withTestSelection } from '@variance-authority/sense/vitest';

// `withTestSelection` records which test ran which lines. A pull request is then
// told which tests stand on the lines it changed, and which changed lines no
// test ran.
export default withTestSelection(
  defineConfig({
    esbuild: { jsx: 'automatic' },
    test: { include: ['src/**/*.test.jsx'] },
  }),
  { suite: 'unit' },
);
