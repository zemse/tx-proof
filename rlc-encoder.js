const { keccak, encode, decode, toBuffer, toWord } = require('eth-util-lite')

const data_hex = '0x'+'12'.repeat(+process.argv[2]);
const buffer = toBuffer(data_hex);

console.log(buffer);
console.log(encode(buffer).toString('hex'));

// for(let i = 1; i < 200000000000000000; i*=2) {
//   console.log(i, encode(toBuffer(i)), decode(encode(i)), toBuffer(i));
// }

// console.log(decode('0xf85d80808094c8e1f3b9a0cdfcef9ffd2343b943989a22517b2701801ba05fe7086a5de66d23b1ed541e5d639f9c8d0256ad2cf790df4973e42bc38d39f0a0671ec0154b8d631f3f13bbbca5fed862fac44abab6aecf519c79c37b71332451'));
