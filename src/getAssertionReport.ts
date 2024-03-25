import { AssertionReport, Test } from './types.ts';

export function getAssertionReport(test: Test): AssertionReport {
  return (message: string) => {
    test.assertions.push(message);
  };
}
