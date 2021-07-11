// npm i --S crypto  bcrypt
const bcrypt = require('bcrypt');

////// DEMO
var orgData = "Chuỗi ký tự !!!";

bcrypt.hash(orgData, 10, (err, hashtext) => {
    if (err) {
        console.log("\n ERR: ", err);
        return;
    }
    console.log("\n\n\t Org: ", orgData);
    console.log("\n\n\t Hash: ", hashtext);
});