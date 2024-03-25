import { Test } from '../types.ts';
import { getIndent } from './getIndent.ts';
import { getResult } from './getResult.ts';

export function printTest(test: Test) {
  console.log(`${getIndent(1)}${getResult(test.result)} ${test.testName}`);
  if (test.result === 'failure') {
    for (const message of test.assertions) {
      console.log(`${getIndent(2)}${getResult('success')}${message}`);
    }
    console.log(`${getIndent(2)}${getResult('failure')}${test.error}`);
  }
}
