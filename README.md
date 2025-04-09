# transliterate.js: Lightweight JavaScript Transliteration Library

A **lightweight**, **open-source JavaScript library** for converting **accented**, **special**, and **non-Latin characters** into **plain ASCII text**. This library offers flexible options for handling different normalization forms and custom character mappings. It is ideal for tasks such as generating URL slugs, creating search-friendly text, and improving readability in systems that do not fully support Unicode. It works seamlessly in both **browser** and **Node.js** environments.

## Usage

The `transliterate` function takes a string as input and returns its transliterated version. By default, it uses the "NFD" normalization form and a predefined set of mappings for common Latin accented characters.

```javascript
const { transliterate } = require('@playfulsparkle/transliterate-js');

const text = 'éàîëûçô';
const transliteratedText = transliterate(text);

console.log(transliteratedText); // Output: eaieuco
```

## Installation

### NPM

```bash
npm install @playfulsparkle/transliterate-js
```

### Bower

```bash
bower install playfulsparkle/transliterate.js
```

## API

### `transliterate`

The main function for transliterating text.

***Parameters:***

* `text` (String): The input string to be transliterated.
* `normalization` (String, optional): The Unicode normalization form to apply. Must be one of 'NFC', 'NFD', 'NFKC', or 'NFKD'. Defaults to 'NFD'.
* `useDefaultMapping` (Boolean, optional): A flag indicating whether to use the default Latin character mappings. Defaults to `true`.
* `customMapping` (Object, optional): An object containing custom character mappings. Keys are the characters to be replaced, and values are their replacements. Defaults to `null`.

***Return Value:***

* (String): The transliterated string.

***Throws:***

* `SyntaxError`: If an invalid normalization form is provided.

```
string transliterate(text, [normalization='NFD'], [useDefaultMapping=true], [customMapping=null])
```

## Features

* **Lightweight:** Minimal dependencies and a small footprint.
* **Handles Accented Characters:** Converts a wide range of Latin accented characters to their basic ASCII equivalents using a default mapping.
* **Supports Special Characters:** Attempts to transliterate or remove special characters based on normalization and custom mappings.
* **Handles Non-Latin Characters:** By default, non-Latin characters (outside the basic ASCII range of 0-127) are removed. You can provide custom mappings to handle them.
* **Unicode Normalization:** Supports all four Unicode normalization forms (NFC, NFD, NFKC, NFKD) for advanced text processing.
* **Customizable Mappings:** Allows you to define your own character mappings for specific transliteration requirements.
* **Browser and Node.js Support:** Works seamlessly in both client-side and server-side JavaScript environments.
* **Modular Design:** Easy to integrate into existing JavaScript projects.
* **Open Source:** Freely available for use and modification under the BSD 3-Clause License.

## Support

### Node.js

`transliterate.js` runs in all active Node versions (4+).

### Browser Support

This library is written using modern ECMAScript 2015 (ES6) features. While the following browser versions and later are expected to work, older browsers might require polyfills for certain ES6 features.

| Browser                  | Minimum Supported Version |
| ------------------------ | ------------------------- |
| **Desktop Browsers**     |                           |
| Chrome                   | 1                         |
| Edge                     | 12                        |
| Firefox                  | 1                         |
| Opera                    | 5                         |
| Safari                   | 1                         |
| **Mobile Browsers**      |                           |
| Chrome Android           | 18                        |
| Firefox for Android      | 4                         |
| Opera Android            | 10.1                      |
| Safari on iOS            | 1                         |
| Samsung Internet         | 1                         |
| WebView Android          | 4.4                       |
| WebView on iOS           | 1                         |
| **Other**                |                           |
| Node.js                  | 0.10                      |

## License

**transliterate.js** is licensed under the terms of the BSD 3-Clause License.
