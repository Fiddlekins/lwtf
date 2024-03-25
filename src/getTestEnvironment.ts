import { getDescribe } from './getDescribe.ts';
import { printSummary } from './print/printSummary.ts';
import { printTest } from './print/printTest.ts';
import { printTestCategory } from './print/printTestCategory.ts';
import { printTestsStarted } from './print/printTestsStarted.ts';
import { TestSuite } from './types.ts';

export function getTestEnvironment() {
  let finish = () => {};
  const testSuite: TestSuite = {
    testCategories: [],
    result: 'pending',
    finished: new Promise<void>((res) => (finish = res)),
  };

  const testCategoryReport = () => {
    let hasFailure = false;
    for (const { result } of testSuite.testCategories) {
      if (result === 'pending') {
        // Return early, do nothing until this runs the final time
        return;
      }
      if (result === 'failure') {
        hasFailure = true;
      }
    }
    testSuite.result = hasFailure ? 'failure' : 'success';
    finish();
  };

  const describe = getDescribe(testSuite, testCategoryReport);

  const start = async () => {
    for (const testCategory of testSuite.testCategories) {
      for (const test of testCategory.tests) {
        test.start().catch(console.error);
      }
    }

    printTestsStarted();
    for (const testCategory of testSuite.testCategories) {
      printTestCategory(testCategory);
      for (const test of testCategory.tests) {
        await test.finished;
        printTest(test);
      }
    }
    printSummary(testSuite);

    process.exitCode = testSuite.result === 'success' ? 0 : 1;
  };

  return {
    describe,
    start,
  };
}
