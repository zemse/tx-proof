const EP = require('eth-proof');

let getAndVerify = new EP.GetAndVerify('http://13.127.185.136:80');

const blockHashThatITrust = '0x41055969db3b40fd07ef1374353c051f9f24f3aff806186b1e9d134f01d8467a';
const untrustedTxHash = '0x69d8f874bd03f8f745d22510fbcfefb47f78ee25b35087f924ba93fe13111fcc';

// let getAndVerify = new EP.GetAndVerify('https://mainnet.infura.io/v3/064069bca26c4a59aa2e449205b14862');
// let getProof = new EP.GetProof();
//
// const blockHashThatITrust = '0x47d02a18ca5abd9207698ef944405218be6916b8f34c95b00d992842a06e3ec7';
// const untrustedTxHash = '0x1a3603292751045d5f5b85d88defe9c2d4dfe1d1ae5fcfd46bd27fa4a29b7104';

getAndVerify.txAgainstBlockHash(untrustedTxHash, blockHashThatITrust).then(console.log);
// getProof.transactionProof(untrustedTxHash).then(console.log);

// let getProof = new GetProof('http://13.127.185.136:80');
// getProof.transactionProof(untrustedTxHash).then(console.log);
//
// eP.getTransactionProof(untrustedTxHash).then((result)=>{
//   // console.log(result) // I now have a proof object
//
//   // I can now verify the proof against a blockhash I trust.
//   var verified = EP.transaction(result.path, result.value, result.parentNodes, result.header, blockHashThatITrust)
//   console.log(verified) // true
// }).catch((e)=>{console.log(e)})
