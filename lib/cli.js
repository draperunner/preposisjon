#! /usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("./index"));
if (process.argv.length >= 3) {
    for (let i = 2; i < process.argv.length; i++) {
        console.log(index_1.default(process.argv[i]));
    }
}
