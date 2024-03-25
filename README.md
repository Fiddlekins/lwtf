# lwtf

A Lightweight Test Framework that just works.

I install mocha and chai.
They don't work.
It's something to do with typescript, maybe.
Or something to do with async, maybe.
Or something to do with something else, maybe.

I have better things to do than forever debug a testing framework, such as writing my own simplistic replacement.
Progress.

## Features

- works for typescript
- works for async code
- has zero dependencies
- easy to debug because there's not much code to go wrong

## Usage

```ts
import { describe, start } from 'lwtf';

describe('Test Category Name', ({ it }) => {
  it('Test Name', async ({ assert }) => {
    const res = await fetch('https://my-endpoints/data');
    assert('Response status').number(res.status).equalTo(200);
    const json = await res.json();
    const jsonArray = assert('Response data is array').array(json).typed;
    assert('Response array has one element').number(jsonArray.length).equalTo(1);
    assert('Element is non-zero').number(jsonArray[0]).greaterThan(0);
  });
});

async function run() {
  // await someAsyncSetup();
  await start();
  // await someAsyncTeardown();
}

run().catch(console.error);
```
