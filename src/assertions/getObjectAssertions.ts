import { frameworkSymbol } from '../constants.ts';
import { AssertionReport, ObjectAssertions } from './types.ts';

export function getObjectAssertions(
  input: object,
  report: AssertionReport,
  label: string,
): ObjectAssertions {
  return {
    typed: input,
    hasKey: (value: PropertyKey) => {
      const message = `${label}: input has key ${String(value)}`;
      if (Object.prototype.hasOwnProperty.call(input, value)) {
        report(message);
        return;
      }
      throw { id: frameworkSymbol, message: `Failed assertion: ${message}` };
    },
    lacksKey: (value: PropertyKey) => {
      const message = `${label}: input lacks key ${String(value)}`;
      if (!Object.prototype.hasOwnProperty.call(input, value)) {
        report(message);
        return;
      }
      throw { id: frameworkSymbol, message: `Failed assertion: ${message}` };
    },
  };
}
