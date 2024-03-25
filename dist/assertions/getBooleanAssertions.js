import { frameworkSymbol } from '../constants.js';
export function getBooleanAssertions(input, report, label) {
    return {
        typed: input,
        is: (value) => {
            const message = `${label}: ${input} is ${value}`;
            if (input === value) {
                report(message);
                return;
            }
            throw { id: frameworkSymbol, message: `Failed assertion: ${message}` };
        },
        isTrue: () => {
            const message = `${label}: ${input} is true`;
            if (input) {
                report(message);
                return;
            }
            throw { id: frameworkSymbol, message: `Failed assertion: ${message}` };
        },
        isFalse: () => {
            const message = `${label}: ${input} is false`;
            if (!input) {
                report(message);
                return;
            }
            throw { id: frameworkSymbol, message: `Failed assertion: ${message}` };
        },
    };
}
//# sourceMappingURL=getBooleanAssertions.js.map