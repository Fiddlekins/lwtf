"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.start = exports.describe = void 0;
const getTestEnvironment_js_1 = require("./getTestEnvironment.js");
const environment = (0, getTestEnvironment_js_1.getTestEnvironment)();
exports.describe = environment.describe;
exports.start = environment.start;
//# sourceMappingURL=defaultEnvironment.js.map