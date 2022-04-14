/*
Bang Bang Bang Jangan Ganti Authornya
Authornya Capek - capek Buat kau seenaknya ganti author
*/
const fs = require("fs");
const rl = require("readline").createInterface ({
    input: process.stdin,
    output: process.stdout
});

console.log(`
[-]=======================================[-]
[-]              Host Maker               [-]
[-]     YT: Wild XYZ                      [-]
[-] Github: https://github.com/awraihangt [-]   
[-]=======================================[-]`)
rl.question('Name of gtps :', function(name) {
    fs.createWriteStream(`${name}`)
    const place = name
    rl.question('Your GTPS Ip :', function(ip) {
        fs.writeFileSync(place, 
`${ip} growtopia1.com
${ip} growtopia2.com`)
            console.clear()
            console.log(`
[-]=======================================[-]
[-]              Host Maker               [-]
[-]     YT: Wild XYZ                      [-]
[-] Github: https://github.com/awraihangt [-]   
[-]=======================================[-]
[-]     Success Create ${name} Host
[-]     ${name} Ip : ${ip}
[-]=======================================[-]
`)
    })
})
