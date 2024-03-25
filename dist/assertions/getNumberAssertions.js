"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNumberAssertions = void 0;
const constants_js_1 = require("../constants.js");
function getNumberAssertions(input, report, label) {
    return {
        typed: input,
        equalTo: (value) => {
            const message = `${label}: ${input} equal to ${value}`;
            if (input === value) {
                report(message);
                return;
            }
            throw { id: constants_js_1.frameworkSymbol, message: `Failed assertion: ${message}` };
        },
        greaterThan: (value) => {
            const message = `${label}: ${input} greater than ${value}`;
            if (input > value) {
                report(message);
                return;
            }
            throw { id: constants_js_1.frameworkSymbol, message: `Failed assertion: ${message}` };
        },
        greaterThanOrEqual: (value) => {
            const message = `${label}: ${input} greater than or equal to ${value}`;
            if (input >= value) {
                report(message);
                return;
            }
            throw { id: constants_js_1.frameworkSymbol, message: `Failed assertion: ${message}` };
        },
        lessThan: (value) => {
            const message = `${label}: ${input} less than ${value}`;
            if (input < value) {
                report(message);
                return;
            }
            throw { id: constants_js_1.frameworkSymbol, message: `Failed assertion: ${message}` };
        },
        lessThanOrEqual: (value) => {
            const message = `${label}: ${input} less than or equal to ${value}`;
            if (input <= value) {
                report(message);
                return;
            }
            throw { id: constants_js_1.frameworkSymbol, message: `Failed assertion: ${message}` };
        },
    };
}
exports.getNumberAssertions = getNumberAssertions;
//# sourceMappingURL=getNumberAssertions.js.map