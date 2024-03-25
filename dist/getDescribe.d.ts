import { TestCategoryReport, TestRegistrar, TestSuite } from './types.js';
export declare function getDescribe(testSuite: TestSuite, testCategoryReport: TestCategoryReport): (testCategoryName: string, testRegistrar: TestRegistrar) => void;
