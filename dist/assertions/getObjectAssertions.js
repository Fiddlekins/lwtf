"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getObjectAssertions = void 0;
const constants_js_1 = require("../constants.js");
function getObjectAssertions(input, report, label) {
    return {
        typed: input,
        hasKey: (value) => {
            const message = `${label}: input has key ${String(value)}`;
            if (Object.prototype.hasOwnProperty.call(input, value)) {
                report(message);
                return;
            }
            throw { id: constants_js_1.frameworkSymbol, message: `Failed assertion: ${message}` };
        },
        lacksKey: (value) => {
            const message = `${label}: input lacks key ${String(value)}`;
            if (!Object.prototype.hasOwnProperty.call(input, value)) {
                report(message);
                return;
            }
            throw { id: constants_js_1.frameworkSymbol, message: `Failed assertion: ${message}` };
        },
    };
}
exports.getObjectAssertions = getObjectAssertions;
//# sourceMappingURL=getObjectAssertions.js.map