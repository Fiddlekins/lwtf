import { TestSuite } from '../types.ts';
import { getIndent } from './getIndent.ts';
import { getResult } from './getResult.ts';

export function printSummary(testSuite: TestSuite) {
  console.log('');
  console.log('Summary:');
  if (testSuite.result === 'failure') {
    console.log('');
    console.log('Failed tests:');
  }
  let totalTests = 0;
  let successfulTests = 0;
  for (const testCategory of testSuite.testCategories) {
    if (testCategory.result === 'failure') {
      console.log(`${testCategory.categoryName}`);
    }
    for (const test of testCategory.tests) {
      totalTests++;
      if (test.result === 'failure') {
        console.log(`${getIndent(1)}${getResult(test.result)}${test.testName}`);
      } else {
        successfulTests++;
      }
    }
  }
  if (successfulTests < totalTests) {
    console.log('');
  }
  console.log(`There are ${successfulTests}/${totalTests} tests passing`);
}
