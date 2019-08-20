/*
    package:            RingCentral API Sample Code Generator
    description:        Utility Module for handling HTTP related functionality: simple wrapper that avoids dependencies
*/

module.exports = {
    get: get
}

const https = require('https')

function get(url) {
    return new Promise((resolve, reject) => {
        const req = https.get(url, (res) => {
            if (res.statusCode < 200 || res.statusCode >= 300) {
                return reject(new Error('statusCode=' + res.statusCode));
            }
            let body = []
            res.on('data', (chunk) => {
                body.push(chunk)
            })
            res.on('end', () => {
                try {
                    body = Buffer.concat(body).toString()
                } catch (e) {
                    reject(e);
                }
                resolve(body)
            })
        }).on("error", (err) => {
            reject(e.message)
        })
        req.end()
    })
}
