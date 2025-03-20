const Rasha = require('rasha');
const fs = require('fs');

let keyname = process.argv[2];
if(!keyname){
console.log("provide a key name");
process.exit();
}

Rasha.generate({ format: 'jwk' }).then(function (keypair) {
  console.log(keypair.private);
  console.log(keypair.public);
  keypair.public['kid'] = keyname;
  keypair.public['alg'] = "RS256";
  keypair.public['use'] = "sig";
  fs.writeFileSync('' + keyname + '_public.json', JSON.stringify(keypair.public));
  fs.writeFileSync('' + keyname + '_private.json', JSON.stringify(keypair.private));
  process.exit();
});


