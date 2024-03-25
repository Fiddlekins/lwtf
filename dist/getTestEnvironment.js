"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTestEnvironment = void 0;
const getDescribe_js_1 = require("./getDescribe.js");
const printSummary_js_1 = require("./print/printSummary.js");
const printTest_js_1 = require("./print/printTest.js");
const printTestCategory_js_1 = require("./print/printTestCategory.js");
const printTestsStarted_js_1 = require("./print/printTestsStarted.js");
function getTestEnvironment() {
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
    const describe = (0, getDescribe_js_1.getDescribe)(testSuite, testCategoryReport);
    const start = () => __awaiter(this, void 0, void 0, function* () {
        for (const testCategory of testSuite.testCategories) {
            for (const test of testCategory.tests) {
                test.start().catch(console.error);
            }
        }
        (0, printTestsStarted_js_1.printTestsStarted)();
        for (const testCategory of testSuite.testCategories) {
            (0, printTestCategory_js_1.printTestCategory)(testCategory);
            for (const test of testCategory.tests) {
                yield test.finished;
                (0, printTest_js_1.printTest)(test);
            }
        }
        (0, printSummary_js_1.printSummary)(testSuite);
        process.exitCode = testSuite.result === 'success' ? 0 : 1;
    });
    return {
        describe,
        start,
    };
}
exports.getTestEnvironment = getTestEnvironment;
//# sourceMappingURL=getTestEnvironment.js.map