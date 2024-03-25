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
exports.getIt = void 0;
const getAssertions_js_1 = require("./assertions/getAssertions.js");
const constants_js_1 = require("./constants.js");
const getAssertionReport_js_1 = require("./getAssertionReport.js");
function getIt(testCategory, testReport) {
    return function it(testName, testExecutor) {
        return __awaiter(this, void 0, void 0, function* () {
            let finish = () => { };
            const test = {
                testName,
                testIndex: testCategory.tests.length,
                assertions: [],
                error: null,
                result: 'pending',
                finished: new Promise((res) => (finish = res)),
                start: () => __awaiter(this, void 0, void 0, function* () { }),
            };
            testCategory.tests.push(test);
            const assertionReport = (0, getAssertionReport_js_1.getAssertionReport)(test);
            const testContext = {
                assert: (label) => {
                    return (0, getAssertions_js_1.getAssertions)(assertionReport, label);
                },
            };
            test.start = () => __awaiter(this, void 0, void 0, function* () {
                try {
                    yield testExecutor(testContext);
                    test.result = 'success';
                }
                catch (err) {
                    test.result = 'failure';
                    const frameworkError = err;
                    if (frameworkError.id === constants_js_1.frameworkSymbol) {
                        test.error = frameworkError.message;
                    }
                    else {
                        // Run-time error
                        test.error = err.toString();
                    }
                }
                testReport();
                finish();
            });
        });
    };
}
exports.getIt = getIt;
//# sourceMappingURL=getIt.js.map