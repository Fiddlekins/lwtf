"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.printTestCategory = void 0;
const getIndent_js_1 = require("./getIndent.js");
function printTestCategory(testCategory) {
    console.log(`${(0, getIndent_js_1.getIndent)(0)}${testCategory.categoryName}`);
}
exports.printTestCategory = printTestCategory;
//# sourceMappingURL=printTestCategory.js.map