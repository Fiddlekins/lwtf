import { ArrayAssertions, AssertionReport } from '../types.ts';

export function getArrayAssertions<Type>(
  input: Type[],
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  report: AssertionReport,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  label: string,
): ArrayAssertions {
  return {
    typed: input,
  };
}
