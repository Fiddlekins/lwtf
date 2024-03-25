export type AssertionReport = (message: string) => void;

export interface ArrayAssertions {
  typed: unknown[];
}

export interface BooleanAssertions {
  typed: boolean;
  is: (value: boolean) => void;
  isTrue: () => void;
  isFalse: () => void;
}

export interface NumberAssertions {
  typed: number;
  equalTo: (value: number) => void;
  greaterThan: (value: number) => void;
  greaterThanOrEqual: (value: number) => void;
  lessThan: (value: number) => void;
  lessThanOrEqual: (value: number) => void;
}

export interface ObjectAssertions {
  typed: object;
  hasKey: (value: PropertyKey) => void;
  lacksKey: (value: PropertyKey) => void;
}

export interface StringAssertions {
  typed: string;
  equalTo: (value: string) => void;
  matches: (value: RegExp) => void;
}

export interface Assertions {
  array: (value: unknown) => ArrayAssertions;
  boolean: (value: unknown) => BooleanAssertions;
  number: (value: unknown) => NumberAssertions;
  object: (value: unknown) => ObjectAssertions;
  string: (value: unknown) => StringAssertions;
}
