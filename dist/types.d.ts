export interface FrameworkError {
    id: symbol;
    message: string;
}
export type AssertionReport = (message: string) => void;
export type TestReport = () => void;
export type TestCategoryReport = () => void;
export interface NumberAssertions {
    typed: number;
    equalTo: (value: number) => void;
    greaterThan: (value: number) => void;
    greaterThanOrEqual: (value: number) => void;
    lessThan: (value: number) => void;
    lessThanOrEqual: (value: number) => void;
}
export interface StringAssertions {
    typed: string;
    equalTo: (value: string) => void;
}
export interface ArrayAssertions {
    typed: unknown[];
}
export interface Assertions {
    number: (value: unknown) => NumberAssertions;
    string: (value: unknown) => StringAssertions;
    array: (value: unknown) => ArrayAssertions;
}
export interface TestContext {
    assert: (label: string) => Assertions;
}
export type TestExecutor = (testContext: TestContext) => Promise<void>;
export interface CategoryContext {
    it: (testName: string, testExecutor: TestExecutor) => Promise<void>;
}
export type TestRegistrar = (categoryContext: CategoryContext) => void;
export type Result = 'pending' | 'success' | 'failure';
export interface Test {
    testName: string;
    testIndex: number;
    start: () => Promise<void>;
    assertions: string[];
    error: string | null;
    result: Result;
    finished: Promise<void>;
}
export interface TestCategory {
    categoryName: string;
    categoryIndex: number;
    tests: Test[];
    result: Result;
    finished: Promise<void>;
}
export interface TestSuite {
    testCategories: TestCategory[];
    result: Result;
    finished: Promise<void>;
}
