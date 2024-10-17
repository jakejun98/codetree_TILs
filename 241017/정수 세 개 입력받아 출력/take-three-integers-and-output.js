const fs = require("fs");
const arr = fs.readFileSync(0).toString().split("\n");

const first = arr[0];
const second= arr[1];
console.log(first,second)