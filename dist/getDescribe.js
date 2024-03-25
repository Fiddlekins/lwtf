"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDescribe = void 0;
const getIt_js_1 = require("./getIt.js");
function getDescribe(testSuite, testCategoryReport) {
    return function describe(testCategoryName, testRegistrar) {
        let finish = () => { };
        const testCategory = {
            categoryName: testCategoryName,
            categoryIndex: testSuite.testCategories.length,
            tests: [],
            result: 'pending',
            finished: new Promise((res) => (finish = res)),
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
        const it = (0, getIt_js_1.getIt)(testCategory, testReport);
        testRegistrar({
            it,
        });
    };
}
exports.getDescribe = getDescribe;
//# sourceMappingURL=getDescribe.js.map