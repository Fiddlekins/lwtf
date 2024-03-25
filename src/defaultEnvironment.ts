import { getTestEnvironment } from './getTestEnvironment.ts';

const environment = getTestEnvironment();

export const describe = environment.describe;
export const start = environment.start;
