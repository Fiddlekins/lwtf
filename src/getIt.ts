import { getAssertions } from './assertions/getAssertions.ts';
import { frameworkSymbol } from './constants.ts';
import { getAssertionReport } from './getAssertionReport.ts';
import {
  CategoryContext,
  FrameworkError,
  Test,
  TestCategory,
  TestContext,
  TestReport,
} from './types.ts';

export function getIt(
  testCategory: TestCategory,
  testReport: TestReport,
): CategoryContext['it'] {
  return async function it(testName, testExecutor) {
    let finish = () => {};
    const test: Test = {
      testName,
      testIndex: testCategory.tests.length,
      assertions: [],
      error: null,
      result: 'pending',
      finished: new Promise<void>((res) => (finish = res)),
      start: async () => {},
    };
    testCategory.tests.push(test);

    const assertionReport = getAssertionReport(test);

    const testContext: TestContext = {
      assert: (label: string) => {
        return getAssertions(assertionReport, label);
      },
    };

    test.start = async () => {
      try {
        await testExecutor(testContext);
        test.result = 'success';
      } catch (err: unknown) {
        test.result = 'failure';
        const frameworkError = err as FrameworkError;
        if (frameworkError.id === frameworkSymbol) {
          test.error = frameworkError.message;
        } else {
          // Run-time error
          test.error = (err as Error).toString();
        }
      }

      testReport();
      finish();
    };
  };
}
