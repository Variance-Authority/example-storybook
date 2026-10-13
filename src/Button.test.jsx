import { renderToStaticMarkup } from 'react-dom/server';
import { expect, test } from 'vitest';
import { Button } from './Button.jsx';

test('a button reads its label', () => {
  expect(renderToStaticMarkup(<Button label="Cancel" />)).toContain('>Cancel</button>');
});

test('a primary button is filled', () => {
  expect(renderToStaticMarkup(<Button label="Save" tone="primary" />)).toContain('background:#2b5cff');
});
