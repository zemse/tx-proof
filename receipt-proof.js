const EP = require('eth-proof');
const { encode, keccak } = require('eth-util-lite');

// let getAndVerify = new EP.GetAndVerify('http://13.127.185.136:80');

const receiptRootThatITrust = '0xb44a204913f6bae083acb8c3ecd61849e60068a36179cf7b2326e1daece7c2ac';
const untrustedTxHash = '0xa0e58a664cbcce35a8d0d2e95a85f1415b54dd130d602e93d221a16c21569b05';

let getProof = new EP.GetProof('http://13.127.185.136:80');

getProof.receiptProof(untrustedTxHash).then(obj => {
  const {header, receiptProof, txIndex} = obj;
  console.log('proof from ESN', receiptProof);
  const calculatedReceiptRoot = '0x'+keccak(encode(receiptProof[0])).toString('hex');
  console.log('calculated tx-root from proof', calculatedReceiptRoot, calculatedReceiptRoot === receiptRootThatITrust);

});

// eP.getTransactionProof(untrustedTxHash).then((result)=>{
//   // console.log(result) // I now have a proof object
//
//   // I can now verify the proof against a blockhash I trust.
//   var verified = EP.transaction(result.path, result.value, result.parentNodes, result.header, blockHashThatITrust)
//   console.log(verified) // true
// }).catch((e)=>{console.log(e)})
