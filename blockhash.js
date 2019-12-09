const { Header } = require('eth-object');
const { keccak, encode } = require('eth-util-lite');
const Rpc  = require('isomorphic-rpc');

// A Parity PoA chain block
const rpc = new Rpc('http://13.127.185.136:80');
const inputBlockHash = '0x41055969db3b40fd07ef1374353c051f9f24f3aff806186b1e9d134f01d8467a';

// A recent Ethereum mainnet block
// const rpc = new Rpc('https://mainnet.infura.io');
// const inputBlockHash = '0x3419812fd8adad94cc4162ff852ac8b9543186398049f4ed0a2c8ae928589193';

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
