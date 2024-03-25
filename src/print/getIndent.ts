import { indent } from '../constants.ts';

export function getIndent(count: number): string {
  return Array(count).fill(indent).join('');
}
