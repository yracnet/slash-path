![](logo.svg)

# slash-path

## Motivation

It's good or bad practice, but we need to compose file paths uniformly, I need to ignore Windows backslash and adopt Linux forward slash to compose paths to system files and resources.

## Description

This library wraps the routes library and exposes the same methods with the slash method, to use slash as the default separator.

## Example
```js

// import path from "path";
import path from "slash-path";

const filePath = path.resolve('./file.txt')

console.log('path: ', filePath);
// output
// path: c:/path/to/ptoject/file.txt

```

