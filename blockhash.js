const { Header } = require('eth-object');
const { keccak, encode } = require('eth-util-lite');
const Rpc  = require('isomorphic-rpc');

const rpc = new Rpc('http://13.127.185.136:80');

(async() => {
    let rpcBlock = await rpc.eth_getBlockByHash('0x41055969db3b40fd07ef1374353c051f9f24f3aff806186b1e9d134f01d8467a', true);
    const blockHeader = Header.fromRpc(rpcBlock);
    const blockHash = keccak(encode(blockHeader));
    console.log(blockHash);
})();
