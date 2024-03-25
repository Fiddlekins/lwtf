"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.printTest = void 0;
const getIndent_js_1 = require("./getIndent.js");
const getResult_js_1 = require("./getResult.js");
function printTest(test) {
    console.log(`${(0, getIndent_js_1.getIndent)(1)}${(0, getResult_js_1.getResult)(test.result)} ${test.testName}`);
    if (test.result === 'failure') {
        for (const message of test.assertions) {
            console.log(`${(0, getIndent_js_1.getIndent)(2)}${(0, getResult_js_1.getResult)('success')}${message}`);
        }
        console.log(`${(0, getIndent_js_1.getIndent)(2)}${(0, getResult_js_1.getResult)('failure')}${test.error}`);
    }
}
exports.printTest = printTest;
//# sourceMappingURL=printTest.js.map