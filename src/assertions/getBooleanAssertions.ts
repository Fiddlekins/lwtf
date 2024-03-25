import { frameworkSymbol } from '../constants.ts';
import { AssertionReport, BooleanAssertions } from './types.ts';

export function getBooleanAssertions(
  input: boolean,
  report: AssertionReport,
  label: string,
): BooleanAssertions {
  return {
    typed: input,
    is: (value: boolean) => {
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
