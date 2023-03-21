import { a, divide } from './main.js';
import { add as addition } from './main.js';
import React, { Component } from './utility.js';
import fetch, {asyncFunction} from './fetch.js';

console.log("addition", addition(3,6))
console.log("divide", divide(3,6))
console.log("React", React(3,21))
console.log("fetch", fetch)
console.log("asyncFunction", asyncFunction())