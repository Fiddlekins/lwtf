export function getAssertionReport(test) {
    return (message) => {
        test.assertions.push(message);
    };
}
//# sourceMappingURL=getAssertionReport.js.map