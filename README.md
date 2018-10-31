# pdf-to-base64
Generate a base64 from pdf path or url.

[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]
[![Build Status](https://travis-ci.org/ShubhamBansal1997/pdf-to-base64.svg?branch=master)](https://travis-ci.org/ShubhamBansal1997/pdf-to-base64)
[![devDependencies Status](https://david-dm.org/ShubhamBansal1997/pdf-to-base64/dev-status.svg)](https://david-dm.org/ShubhamBansal1997/pdf-to-base64?type=dev)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/d66858b831d74e358e6ce381dd27b931)](https://www.codacy.com/app/ShubhamBansal1997/pdf-to-base64?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=ShubhamBansal1997/pdf-to-base64&amp;utm_campaign=Badge_Grade)
<a href="https://www.npmjs.com/package/vue"><img src="https://img.shields.io/npm/l/vue.svg" alt="License"></a>


## About
It was all about converting the pdf into base64 string

## Getting Started

Install
```bash
npm i -S pdf-to-base64
```
After:
After:
```js
const pdf2base64 = require('pdf-to-base64');
pdf2base64("test/sample.pdf")
    .then(
        (response) => {
            console.log(response); //cGF0aC90by9maWxlLmpwZw==
        }
    )
    .catch(
        (error) => {
            console.log(error); //Exepection error....
        }
    )
```

```js
const pdf2base64 = require('pdf-to-base64');
pdf2base64("http://www.africau.edu/images/default/sample.pdf")
    .then(
        (response) => {
            console.log(response); //cGF0aC90by9maWxlLmpwZw==
        }
    )
    .catch(
        (error) => {
            console.log(error); //Exepection error....
        }
    )
```

### LICENSE
 [MIT](https://opensource.org/licenses/MIT)

[npm-image]: https://img.shields.io/npm/v/pdf-to-base64.svg
[npm-url]: https://npmjs.org/package/pdf-to-base64
[downloads-image]: https://img.shields.io/npm/dm/pdf-to-base64.svg
[downloads-url]: https://npmjs.org/package/pdf-to-base64




