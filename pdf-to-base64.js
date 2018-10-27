/*
* @Author: shubhambansal
* @Date:   2018-10-27 06:30:04
* @Last Modified by:   shubhambansal
* @Last Modified time: 2018-10-27 06:59:59
*/
(function(escope){
    "use strict";

    function validUrl (url) {
        return /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/gi.test(url);
    }

    function validTypePdf (pdf) {
        return /(\.(pdf))/gi.test(pdf);
    }

    function base64ToBrowser (buffer) {
        return window.btoa([].slice.call(new Uint8Array(buffer)).map(function(bin) { return String.fromCharCode(bin) }).join(""));
    }

    function base64ToNode (buffer) {
        return buffer.toString("base64");
    }

    function readFileAndConvert (fileName) {
        var fileSystem = require("fs");
        var path = require("path");

        if (fileSystem.statSync(fileName).isFile()) {
            return base64ToNode(fileSystem.readFileSync(path.resolve(fileName)).toString("base64"));
        }
        return null;
    }

    function isPdf (urlOrPdf) {
        if (validTypePdf(urlOrPdf)) {
            return Promise.resolve(readFileAndConvert(urlOrPdf));
        } else {
            return Promise.reject("[*] Occurent some error... [validTypePdf] == false");
        }
    }

    function isBrowser (urlOrPdf, param) {
        if (!("fetch" in window && "Promise" in window)) {
            return Promise.reject("[*] It's pdf2base64 not compatible with your browser.");
        }
        return fetch(urlOrPdf, param || {}).then(function(response){
            return response.arrayBuffer();
        }).then(base64ToBrowser);
    }

    function isNodeJs (urlOrPdf) {
        if (validUrl(urlOrPdf)) {
            var fetch = require("node-fetch");
            return fetch(urlOrPdf).then(function(response){
                return response.buffer();
            }).then(base64ToNode);
        } else {
            return isPdf(urlOrPdf);
        }
    }

    function pdfToBase64(urlOrPdf, param) {
        if (typeof window !== "undefined" && ("document" in window && "navigator" in window)) {
            return isBrowser(urlOrPdf, param);
        } else {
            return isNodeJs(urlOrPdf);
        }
    }

    if (typeof module !== "undefined") {
        module.exports = pdfToBase64;
    } else {
        escope.pdfToBase64 = pdfToBase64;
    }

})(this);
