# decode-query-string
An extremely small utility for parsing URL query strings into Javascript objects

## Installation

```shell
npm install --save decode-query-string
or
yarn add decode-query-string
```

## Usage

###### For ES6 and up
```javascript
import decodeUrlString from 'decode-query-string';
```

###### For ES5
```javascript
var decodeUrlString = require("decode-query-string");
```

###### To Decode URL
```javascript
var queryString = "?foo=bar&sam=ham&fleep=creep";
var parsedUrl = decodeUrlString(queryString);
/* parsedUrl = {
        foo: "bar",
        sam: "ham",
        fleep: "creep"
      } */
```
