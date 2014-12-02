# mape

Mean absolute percentage error (MAPE).

[![wercker status](https://app.wercker.com/status/558ce6ce6dc2278c56f5ab215e654301/s "wercker status")](https://app.wercker.com/project/bykey/558ce6ce6dc2278c56f5ab215e654301)

# usage
## mape(dataset)

Calculate the Mean absolute percentage error for a dataset.

# example

```javascript
var mape = require('mape');
 var dataset = [{
      actual: 3,
      predicted: 2.5
    }, {
      actual: -0.5,
      predicted: 0.0
    }, {
      actual: 2,
      predicted: 2
    }, {
      actual: 7,
      predicted: 8
    }];

    rmse(dataset)
```


# License

(The MIT License)

Copyright (c) 2014 Nick Poorman <mail@nickpoorman.com>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
