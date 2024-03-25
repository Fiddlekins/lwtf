import { frameworkSymbol } from '../constants.js';
export function getStringAssertions(input, report, label) {
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
    };
}
//# sourceMappingURL=getStringAssertions.js.map