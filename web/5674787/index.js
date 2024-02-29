"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// here, we have a user object of dictionary type
var user = {
    name: "Hritik",
    email: "gfg@gmail.com",
    isActive: true,
    mobile: 9876543210,
};
// convert this dictionary into array
var keys = Object.keys(user);
var values = Object.values(user);
var arrOfArr = Object.entries(user);
var arrOfObj = Object.entries(user).map(function (_a) {
    var key = _a[0], value = _a[1];
    return { key: key, value: value };
});
// results of every methods
console.log("array of all keys");
console.log(keys);
console.log();
console.log("array of all values");
console.log(values);
console.log();
console.log("array of arrays containing key, value pairs");
console.log(arrOfArr);
console.log();
console.log("array of objects containing key, value pairs");
console.log(arrOfObj);
