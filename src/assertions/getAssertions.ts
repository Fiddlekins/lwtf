import { frameworkSymbol } from '../constants.ts';
import { AssertionReport, Assertions } from '../types.ts';
import { getArrayAssertions } from './getArrayAssertions.ts';
import { getNumberAssertions } from './getNumberAssertions.ts';
import { getStringAssertions } from './getStringAssertions.ts';

export function getAssertions(
  report: AssertionReport,
  label: string,
): Assertions {
  return {
    number: (value: unknown) => {
      if (typeof value !== 'number') {
        throw {
          id: frameworkSymbol,
          message: `${label}: ${value} is not a number`,
        };
      }
      return getNumberAssertions(value, report, label);
    },
    string: (value: unknown) => {
      if (typeof value !== 'string') {
        throw {
          id: frameworkSymbol,
          message: `${label}: ${value} is not a string`,
        };
      }
      return getStringAssertions(value, report, label);
    },
    array: (value: unknown) => {
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
