# pad-right

Pads text by a given number of spaces to the right

## Installation

```bash
npm install pad-right
```

## Usage

```javascript
const padRight = require('pad-right');

// Pad a string to 10 characters
console.log(padRight('hello', 10));
// Output: 'hello     '

// If string is already longer or equal, returns as is
console.log(padRight('hello', 5));
// Output: 'hello'

// Works with numbers too
console.log(padRight(123, 6));
// Output: '123   '
```

## API

### padRight(str, length)

- `str` (String|Number): The string to pad. Numbers will be converted to strings.
- `length` (Number): The desired total length after padding.
- Returns: The padded string.

## License

MIT
