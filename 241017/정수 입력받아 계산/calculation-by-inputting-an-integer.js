const fs = require("fs");
let a = fs.readFileSync(0).toString();
console.log(Number(a)*2+3)