"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBooleanAssertions = void 0;
const constants_js_1 = require("../constants.js");
function getBooleanAssertions(input, report, label) {
    return {
        typed: input,
        is: (value) => {
            const message = `${label}: ${input} is ${value}`;
            if (input === value) {
                report(message);
                return;
            }
            throw { id: constants_js_1.frameworkSymbol, message: `Failed assertion: ${message}` };
        },
        isTrue: () => {
            const message = `${label}: ${input} is true`;
            if (input) {
                report(message);
                return;
            }
            throw { id: constants_js_1.frameworkSymbol, message: `Failed assertion: ${message}` };
        },
        isFalse: () => {
            const message = `${label}: ${input} is false`;
            if (!input) {
                report(message);
                return;
            }
            throw { id: constants_js_1.frameworkSymbol, message: `Failed assertion: ${message}` };
        },
    };
}
exports.getBooleanAssertions = getBooleanAssertions;
//# sourceMappingURL=getBooleanAssertions.js.map