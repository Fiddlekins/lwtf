import { getIt } from './getIt.ts';
import {
  TestCategory,
  TestCategoryReport,
  TestRegistrar,
  TestSuite,
} from './types.ts';

export function getDescribe(
  testSuite: TestSuite,
  testCategoryReport: TestCategoryReport,
) {
  return function describe(
    testCategoryName: string,
    testRegistrar: TestRegistrar,
  ) {
    let finish = () => {};
    const testCategory: TestCategory = {
      categoryName: testCategoryName,
      categoryIndex: testSuite.testCategories.length,
      tests: [],
      result: 'pending',
      finished: new Promise<void>((res) => (finish = res)),
    };
    testSuite.testCategories.push(testCategory);

    const testReport = () => {
      let hasFailure = false;
      for (const { result } of testCategory.tests) {
        if (result === 'pending') {
          // Return early, do nothing until this runs the final time
          return;
        }
        if (result === 'failure') {
          hasFailure = true;
        }
      }
      testCategory.result = hasFailure ? 'failure' : 'success';
      testCategoryReport();
      finish();
    };

    const it = getIt(testCategory, testReport);

    testRegistrar({
      it,
    });
  };
}
