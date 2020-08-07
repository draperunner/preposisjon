"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arrayToObject = void 0;
function arrayToObject(arrayOfKeys, value) {
    return arrayOfKeys.reduce((accumulator, key) => ({
        ...accumulator,
        [key]: value,
    }), {});
}
exports.arrayToObject = arrayToObject;
