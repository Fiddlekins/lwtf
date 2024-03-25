import { frameworkSymbol } from '../constants.ts';
import { getArrayAssertions } from './getArrayAssertions.ts';
import { getBooleanAssertions } from './getBooleanAssertions.ts';
import { getNumberAssertions } from './getNumberAssertions.ts';
import { getObjectAssertions } from './getObjectAssertions.ts';
import { getStringAssertions } from './getStringAssertions.ts';
import { AssertionReport, Assertions } from './types.ts';

export function getAssertions(
  report: AssertionReport,
  label: string,
): Assertions {
  return {
    array: (value: unknown) => {
      if (!Array.isArray(value)) {
        throw {
          id: frameworkSymbol,
          message: `${label}: ${value} is not an array`,
        };
      }
      return getArrayAssertions(value, report, label);
    },
    boolean: (value: unknown) => {
      if (typeof value !== 'boolean') {
        throw {
          id: frameworkSymbol,
          message: `${label}: ${value} is not a boolean`,
        };
      }
      return getBooleanAssertions(value, report, label);
    },
    number: (value: unknown) => {
      if (typeof value !== 'number') {
        throw {
          id: frameworkSymbol,
          message: `${label}: ${value} is not a number`,
        };
      }
      return getNumberAssertions(value, report, label);
    },
    object: (value: unknown) => {
      if (typeof value !== 'object' || value === null) {
        throw {
          id: frameworkSymbol,
          message: `${label}: ${value} is not an object`,
        };
      }
      return getObjectAssertions(value, report, label);
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
  };
}
