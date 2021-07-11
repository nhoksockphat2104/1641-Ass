// npm i --S crypto  bcrypt
const crypto = require('crypto');
const alg = "aes-256-cbc";
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

////////////////////////////////////////---------------------------------------------
function encrypt(text) {
    var cipher = crypto.createCipheriv(alg, Buffer.from(key), iv);
    var encrypted = cipher.update(text);

    encrypted = Buffer.concat([encrypted, cipher.final()]);
    return {
        iv: iv.toString("hex"),
        encryptedData: encrypted.toString("hex"),
    }
}

function decrypt(cipherText) {
    var iv = Buffer.from(cipherText.iv, "hex");
    var encryptedText = Buffer.from(cipherText.encryptedData, "hex");
    var decipher = crypto.createDecipheriv(alg, Buffer.from(key), iv);

    var decrypted = decipher.update(encryptedText);
    decrypted = Buffer.concat([decrypted, decipher.final()]);

    return decrypted.toString();
}

////// DEMO
var org = "Chuỗi ký tự !!!";
var hw = encrypt(org);
console.log("\n\n\t Org: ", org);
console.log("\n\n\t Encrypt: ", hw);
console.log("\n\n\t Decrypt: ", decrypt(hw));