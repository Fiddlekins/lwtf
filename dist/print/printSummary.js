"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.printSummary = void 0;
const getIndent_js_1 = require("./getIndent.js");
const getResult_js_1 = require("./getResult.js");
function printSummary(testSuite) {
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
                console.log(`${(0, getIndent_js_1.getIndent)(1)}${(0, getResult_js_1.getResult)(test.result)}${test.testName}`);
            }
            else {
                successfulTests++;
            }
        }
    }
    if (successfulTests < totalTests) {
        console.log('');
    }
    console.log(`There are ${successfulTests}/${totalTests} tests passing`);
}
exports.printSummary = printSummary;
//# sourceMappingURL=printSummary.js.map