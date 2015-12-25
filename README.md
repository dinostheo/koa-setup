# koa-setup
Basic koa mongoose testable setup with example endpoint.

## Intro
This is a koa mongoose setup that I came up while learning koa. Feel free to use it you like it, or if you think that some things could be or should be better, write an issue or send a pull request.

## Configuration
This setup expects configuration `config/config.js` for the port and the database uri. The following example configuration is for development and test environment, but it could be expanded for a production environment in a similar fashion.

```js
module.exports = {
    test: {
        port: 8889,
        dbUri: 'localhost/YOUR_TEST_DB'
    },

    dev: {
        port: 3000,
        dbUri: 'localhost/YOUR_DEV_DB'
    }
};
```

## Tests
To run the tests execute:
```
    npm test
```

## Code coverage
To get the code coverage of the application execute:
```
    npm run cover
```

## License

Copyright (c) 2015, Dinos Theodorou

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
