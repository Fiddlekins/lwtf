"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getIndent = void 0;
const constants_js_1 = require("../constants.js");
function getIndent(count) {
    return Array(count).fill(constants_js_1.indent).join('');
}
exports.getIndent = getIndent;
//# sourceMappingURL=getIndent.js.map