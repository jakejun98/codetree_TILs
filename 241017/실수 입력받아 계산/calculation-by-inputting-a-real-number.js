const fs = require("fs");
let arr = fs.readFileSync(0).toString().split("\n");

console.log((Number(arr[0])+Number(arr[1])).toFixed(2));