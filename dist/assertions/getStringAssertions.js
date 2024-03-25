"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStringAssertions = void 0;
const constants_js_1 = require("../constants.js");
function getStringAssertions(input, report, label) {
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
        matches: (value) => {
            const message = `${label}: ${input} matches ${value.toString()}`;
            if (value.test(input)) {
                report(message);
                return;
            }
            throw { id: constants_js_1.frameworkSymbol, message: `Failed assertion: ${message}` };
        },
    };
}
exports.getStringAssertions = getStringAssertions;
//# sourceMappingURL=getStringAssertions.js.map