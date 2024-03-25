import { getAssertions } from './assertions/getAssertions.js';
import { frameworkSymbol } from './constants.js';
import { getAssertionReport } from './getAssertionReport.js';
export function getIt(testCategory, testReport) {
    return async function it(testName, testExecutor) {
        let finish = () => { };
        const test = {
            testName,
            testIndex: testCategory.tests.length,
            assertions: [],
            error: null,
            result: 'pending',
            finished: new Promise((res) => (finish = res)),
            start: async () => { },
        };
        testCategory.tests.push(test);
        const assertionReport = getAssertionReport(test);
        const testContext = {
            assert: (label) => {
                return getAssertions(assertionReport, label);
            },
        };
        test.start = async () => {
            try {
                await testExecutor(testContext);
                test.result = 'success';
            }
            catch (err) {
                test.result = 'failure';
                const frameworkError = err;
                if (frameworkError.id === frameworkSymbol) {
                    test.error = frameworkError.message;
                }
                else {
                    // Run-time error
                    test.error = err.toString();
                }
            }
            testReport();
            finish();
        };
    };
}
//# sourceMappingURL=getIt.js.map