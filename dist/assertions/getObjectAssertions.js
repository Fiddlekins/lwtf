import { frameworkSymbol } from '../constants.js';
export function getObjectAssertions(input, report, label) {
    return {
        typed: input,
        hasKey: (value) => {
            const message = `${label}: input has key ${String(value)}`;
            if (Object.prototype.hasOwnProperty.call(input, value)) {
                report(message);
                return;
            }
            throw { id: frameworkSymbol, message: `Failed assertion: ${message}` };
        },
        lacksKey: (value) => {
            const message = `${label}: input lacks key ${String(value)}`;
            if (!Object.prototype.hasOwnProperty.call(input, value)) {
                report(message);
                return;
            }
            throw { id: frameworkSymbol, message: `Failed assertion: ${message}` };
        },
    };
}
//# sourceMappingURL=getObjectAssertions.js.map