"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAssertions = void 0;
const constants_js_1 = require("../constants.js");
const getArrayAssertions_js_1 = require("./getArrayAssertions.js");
const getBooleanAssertions_js_1 = require("./getBooleanAssertions.js");
const getNumberAssertions_js_1 = require("./getNumberAssertions.js");
const getObjectAssertions_js_1 = require("./getObjectAssertions.js");
const getStringAssertions_js_1 = require("./getStringAssertions.js");
function getAssertions(report, label) {
    return {
        array: (value) => {
            if (!Array.isArray(value)) {
                throw {
                    id: constants_js_1.frameworkSymbol,
                    message: `${label}: ${value} is not an array`,
                };
            }
            return (0, getArrayAssertions_js_1.getArrayAssertions)(value, report, label);
        },
        boolean: (value) => {
            if (typeof value !== 'boolean') {
                throw {
                    id: constants_js_1.frameworkSymbol,
                    message: `${label}: ${value} is not a boolean`,
                };
            }
            return (0, getBooleanAssertions_js_1.getBooleanAssertions)(value, report, label);
        },
        number: (value) => {
            if (typeof value !== 'number') {
                throw {
                    id: constants_js_1.frameworkSymbol,
                    message: `${label}: ${value} is not a number`,
                };
            }
            return (0, getNumberAssertions_js_1.getNumberAssertions)(value, report, label);
        },
        object: (value) => {
            if (typeof value !== 'object' || value === null) {
                throw {
                    id: constants_js_1.frameworkSymbol,
                    message: `${label}: ${value} is not an object`,
                };
            }
            return (0, getObjectAssertions_js_1.getObjectAssertions)(value, report, label);
        },
        string: (value) => {
            if (typeof value !== 'string') {
                throw {
                    id: constants_js_1.frameworkSymbol,
                    message: `${label}: ${value} is not a string`,
                };
            }
            return (0, getStringAssertions_js_1.getStringAssertions)(value, report, label);
        },
    };
}
exports.getAssertions = getAssertions;
//# sourceMappingURL=getAssertions.js.map