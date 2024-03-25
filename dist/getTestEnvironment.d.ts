export declare function getTestEnvironment(): {
    describe: (testCategoryName: string, testRegistrar: import("./types.js").TestRegistrar) => void;
    start: () => Promise<void>;
};
