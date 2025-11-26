const crypto=require("crypto")
const { fchown } = require("fs")
const { text } = require("stream/consumers")
const mdHash=crypto.createHash("md5")
.update("password123")
.digest('hex')
// console.log("Input:password123");
// console.log("Md5 hashed:", mdHash);

// Encrypting and Decrypting Data with the crypto Module

const algorithm='aes-256-cbc'
const key=crypto.randomBytes(32)
const iv=crypto.randomBytes(16)

function encrypt(){
    const cipher=crypto.createCipheriv(algorithm,key,iv)
    let encrypt=cipher.update(text,"utf-8","hex")
    encrypt+=cipher.final("hex ")
    return{
        iv:iv.toString('hex'),
        encryptedData:encrypt
    }
}
function decrypt(encrypt,ivHex){

}