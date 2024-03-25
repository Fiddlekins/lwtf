import { getDescribe } from './getDescribe.js';
import { printSummary } from './print/printSummary.js';
import { printTest } from './print/printTest.js';
import { printTestCategory } from './print/printTestCategory.js';
import { printTestsStarted } from './print/printTestsStarted.js';
export function getTestEnvironment() {
    let finish = () => { };
    const testSuite = {
        testCategories: [],
        result: 'pending',
        finished: new Promise((res) => (finish = res)),
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
//# sourceMappingURL=getTestEnvironment.js.map