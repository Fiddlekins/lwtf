import { frameworkSymbol } from '../constants.js';
import { getArrayAssertions } from './getArrayAssertions.js';
import { getNumberAssertions } from './getNumberAssertions.js';
import { getStringAssertions } from './getStringAssertions.js';
export function getAssertions(report, label) {
    return {
        number: (value) => {
            if (typeof value !== 'number') {
                throw {
                    id: frameworkSymbol,
                    message: `${label}: ${value} is not a number`,
                };
            }
            return getNumberAssertions(value, report, label);
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
        array: (value) => {
            if (!Array.isArray(value)) {
                throw {
                    id: frameworkSymbol,
                    message: `${label}: ${value} is not an array`,
                };
            }
            return getArrayAssertions(value, report, label);
        },
    };
}
//# sourceMappingURL=getAssertions.js.map