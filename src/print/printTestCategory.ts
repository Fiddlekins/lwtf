import { TestCategory } from '../types.ts';
import { getIndent } from './getIndent.ts';

export function printTestCategory(testCategory: TestCategory) {
  console.log(`${getIndent(0)}${testCategory.categoryName}`);
}
