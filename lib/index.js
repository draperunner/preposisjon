"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const exceptions_1 = __importDefault(require("./exceptions"));
const suffix_rules_1 = __importDefault(require("./suffix-rules"));
const types_1 = require("./types");
function preposisjon(place) {
    if (typeof place !== 'string') {
        throw new TypeError('preposisjon expected its argument to be a string, but received ' +
            typeof place);
    }
    const p = place.toLowerCase().trim();
    // Check exceptions
    const exception = exceptions_1.default[p];
    if (exception) {
        return exception;
    }
    // Check suffix rules
    const suffixes = Object.keys(suffix_rules_1.default);
    const matchingSuffix = suffixes.find((suffix) => p.endsWith(suffix));
    if (matchingSuffix) {
        return suffix_rules_1.default[matchingSuffix];
    }
    return types_1.Preposision.I;
}
exports.default = preposisjon;
module.exports = preposisjon;
