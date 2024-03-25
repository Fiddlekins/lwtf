import { frameworkSymbol } from '../constants.ts';
import { AssertionReport, NumberAssertions } from '../types.ts';

export function getNumberAssertions(
  input: number,
  report: AssertionReport,
  label: string,
): NumberAssertions {
  return {
    typed: input,
    equalTo: (value: number) => {
      const message = `${label}: ${input} equal to ${value}`;
      if (input === value) {
        report(message);
        return;
      }
      throw { id: frameworkSymbol, message: `Failed assertion: ${message}` };
    },
    greaterThan: (value: number) => {
      const message = `${label}: ${input} greater than ${value}`;
      if (input > value) {
        report(message);
        return;
      }
      throw { id: frameworkSymbol, message: `Failed assertion: ${message}` };
    },
    greaterThanOrEqual: (value: number) => {
      const message = `${label}: ${input} greater than or equal to ${value}`;
      if (input >= value) {
        report(message);
        return;
      }
      throw { id: frameworkSymbol, message: `Failed assertion: ${message}` };
    },
    lessThan: (value: number) => {
      const message = `${label}: ${input} less than ${value}`;
      if (input < value) {
        report(message);
        return;
      }
      throw { id: frameworkSymbol, message: `Failed assertion: ${message}` };
    },
    lessThanOrEqual: (value: number) => {
      const message = `${label}: ${input} less than or equal to ${value}`;
      if (input <= value) {
        report(message);
        return;
      }
      throw { id: frameworkSymbol, message: `Failed assertion: ${message}` };
    },
  };
}
