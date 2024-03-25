import { frameworkSymbol } from '../constants.ts';
import { AssertionReport, StringAssertions } from './types.ts';

export function getStringAssertions(
  input: string,
  report: AssertionReport,
  label: string,
): StringAssertions {
  return {
    typed: input,
    equalTo: (value: string) => {
      const message = `${label}: ${input} equal to ${value}`;
      if (input === value) {
        report(message);
        return;
      }
      throw { id: frameworkSymbol, message: `Failed assertion: ${message}` };
    },
    matches: (value: RegExp) => {
      const message = `${label}: ${input} matches ${value.toString()}`;
      if (value.test(input)) {
        report(message);
        return;
      }
      throw { id: frameworkSymbol, message: `Failed assertion: ${message}` };
    },
  };
}
