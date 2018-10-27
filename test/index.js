/*
* @Author: shubhambansal
* @Date:   2018-10-27 06:48:33
* @Last Modified by:   Shubham Bansal
* @Last Modified time: 2018-10-27 07:35:07
*/
const pdf2base64 = require("./../pdf-to-base64.js");
const assert = require("assert");
const pt = require("path");

let url = "http://www.africau.edu/images/default/sample.pdf";
let path = pt.resolve("test/sample.pdf");
let validBase64 = new RegExp("^([A-Za-z0-9+/]{4})*([A-Za-z0-9+/]{4}|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{0,2}==)$","gim");

describe("must to be resolved the promise", function(){
    it("Getting the pdf from the url and convert to base64", function(){
        pdf2base64(url)
        .then((data) => {
            assert(validBase64.test(data), true);
        }).catch((err) => assert(err, true));
    });

    it("get pdf from the path and convert to base64", function(){
        pdf2base64(path)
        .then((data) => {
            assert(validBase64.test(data).test(data), true);
        })
        .catch((err) => assert(err, true));
    });
});
