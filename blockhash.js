const { Header } = require('eth-object');
const { keccak, encode } = require('eth-util-lite');
const Rpc  = require('isomorphic-rpc');

// A Parity PoA chain block
// const rpc = new Rpc('http://13.127.185.136:80');
// const inputBlockHash = '0x03675d9c090710e25605554e3a95ba4640fb4533ac200dce3e1b8c5eff0596a8';

// A recent Ethereum mainnet block
const rpc = new Rpc('https://mainnet.infura.io');
const inputBlockHash = '0x3419812fd8adad94cc4162ff852ac8b9543186398049f4ed0a2c8ae928589193';

(async() => {
    let rpcBlock = await rpc.eth_getBlockByHash(inputBlockHash, true);
    console.log('RPC block', rpcBlock);

    const blockHeader = Header.fromRpc(rpcBlock);
    console.log('block header', blockHeader);

    const rlpEncodedBlock = encode(blockHeader);
    console.log('rlp encoded block', rlpEncodedBlock);

    const calculatedBlockHash = '0x'+(keccak(rlpEncodedBlock)).toString('hex');
    console.log('blockHash', calculatedBlockHash);

    console.log(inputBlockHash === calculatedBlockHash ? 'Matching' : 'Mismatching');
})();
