import { frameworkSymbol } from '../constants.js';
export function getNumberAssertions(input, report, label) {
    return {
        typed: input,
        equalTo: (value) => {
            const message = `${label}: ${input} equal to ${value}`;
            if (input === value) {
                report(message);
                return;
            }
            throw { id: frameworkSymbol, message: `Failed assertion: ${message}` };
        },
        greaterThan: (value) => {
            const message = `${label}: ${input} greater than ${value}`;
            if (input > value) {
                report(message);
                return;
            }
            throw { id: frameworkSymbol, message: `Failed assertion: ${message}` };
        },
        greaterThanOrEqual: (value) => {
            const message = `${label}: ${input} greater than or equal to ${value}`;
            if (input >= value) {
                report(message);
                return;
            }
            throw { id: frameworkSymbol, message: `Failed assertion: ${message}` };
        },
        lessThan: (value) => {
            const message = `${label}: ${input} less than ${value}`;
            if (input < value) {
                report(message);
                return;
            }
            throw { id: frameworkSymbol, message: `Failed assertion: ${message}` };
        },
        lessThanOrEqual: (value) => {
            const message = `${label}: ${input} less than or equal to ${value}`;
            if (input <= value) {
                report(message);
                return;
            }
            throw { id: frameworkSymbol, message: `Failed assertion: ${message}` };
        },
    };
}
//# sourceMappingURL=getNumberAssertions.js.map