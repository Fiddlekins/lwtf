"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAssertionReport = void 0;
function getAssertionReport(test) {
    return (message) => {
        test.assertions.push(message);
    };
}
exports.getAssertionReport = getAssertionReport;
//# sourceMappingURL=getAssertionReport.js.map