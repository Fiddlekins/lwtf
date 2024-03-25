import { frameworkSymbol } from '../constants.js';
import { getArrayAssertions } from './getArrayAssertions.js';
import { getBooleanAssertions } from './getBooleanAssertions.js';
import { getNumberAssertions } from './getNumberAssertions.js';
import { getObjectAssertions } from './getObjectAssertions.js';
import { getStringAssertions } from './getStringAssertions.js';
export function getAssertions(report, label) {
    return {
        array: (value) => {
            if (!Array.isArray(value)) {
                throw {
                    id: frameworkSymbol,
                    message: `${label}: ${value} is not an array`,
                };
            }
            return getArrayAssertions(value, report, label);
        },
        boolean: (value) => {
            if (typeof value !== 'boolean') {
                throw {
                    id: frameworkSymbol,
                    message: `${label}: ${value} is not a boolean`,
                };
            }
            return getBooleanAssertions(value, report, label);
        },
        number: (value) => {
            if (typeof value !== 'number') {
                throw {
                    id: frameworkSymbol,
                    message: `${label}: ${value} is not a number`,
                };
            }
            return getNumberAssertions(value, report, label);
        },
        object: (value) => {
            if (typeof value !== 'object' || value === null) {
                throw {
                    id: frameworkSymbol,
                    message: `${label}: ${value} is not an object`,
                };
            }
            return getObjectAssertions(value, report, label);
        },
        string: (value) => {
            if (typeof value !== 'string') {
                throw {
                    id: frameworkSymbol,
                    message: `${label}: ${value} is not a string`,
                };
            }
            return getStringAssertions(value, report, label);
        },
    };
}
//# sourceMappingURL=getAssertions.js.map