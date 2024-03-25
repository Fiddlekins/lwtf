import { getIndent } from './getIndent.js';
import { getResult } from './getResult.js';
export function printTest(test) {
    console.log(`${getIndent(1)}${getResult(test.result)} ${test.testName}`);
    if (test.result === 'failure') {
        for (const message of test.assertions) {
            console.log(`${getIndent(2)}${getResult('success')}${message}`);
        }
        console.log(`${getIndent(2)}${getResult('failure')}${test.error}`);
    }
}
//# sourceMappingURL=printTest.js.map