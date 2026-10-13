import { renderToStaticMarkup } from 'react-dom/server';
import { expect, test } from 'vitest';
import { Panel } from './Panel.jsx';

test('a panel leads with its heading', () => {
  expect(renderToStaticMarkup(<Panel heading="Settings" />)).toMatch(/^<section[^>]*><h2[^>]*>Settings<\/h2>/);
});
