const EP = require('eth-proof');
const { encode, keccak } = require('eth-util-lite');

// let getAndVerify = new EP.GetAndVerify('http://13.127.185.136:80');

const txRootThatITrust = '0xcd7785fa487da3469d80db2381c536aeeb8d5b08cae7cc017ec999264a8d83e8';
const untrustedTxHash = '0xa0e58a664cbcce35a8d0d2e95a85f1415b54dd130d602e93d221a16c21569b05';

let getProof = new EP.GetProof('http://13.127.185.136:80');

getProof.transactionProof(untrustedTxHash).then(obj => {
  const {header, txProof, txIndex} = obj;
  console.log('proof from ESN', txProof);
  const calculatedTxRoot = '0x'+keccak(encode(txProof[0])).toString('hex');
  console.log('calculated tx-root from proof', calculatedTxRoot, calculatedTxRoot === txRootThatITrust);

});

// eP.getTransactionProof(untrustedTxHash).then((result)=>{
//   // console.log(result) // I now have a proof object
//
//   // I can now verify the proof against a blockhash I trust.
//   var verified = EP.transaction(result.path, result.value, result.parentNodes, result.header, blockHashThatITrust)
//   console.log(verified) // true
// }).catch((e)=>{console.log(e)})
