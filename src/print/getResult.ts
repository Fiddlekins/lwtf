import { Result } from '../types.ts';

export function getResult(result: Result) {
  if (result === 'success') {
    return `✓ `;
  }
  return `✗ `;
}
