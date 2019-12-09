const Trie = require('merkle-patricia-tree')

trie = new Trie();

const triePut = (rlcIndex, rlcTx) => new Promise(function(resolve, reject) {
  trie.put('test', '0x1234', resolve);
});

const trieGet = rlcIndex => new Promise(function(resolve, reject) {
  trie.get(rlcIndex, (err, value) => {
    resolve(value);
  });
});

const trieFindPath = rlcIndex => new Promise(function(resolve, reject) {
  trie.findPath(rlcIndex, (err, value) => {
    resolve(value);
  });
});

(async() => {
  await triePut(Buffer.from('ababab', 'hex'), Buffer.from('ababab', 'hex'), { keyEncoding: 'binary', valueEncoding: 'binary' });
  // await triePut('0x01', '0x5678');
  // await triePut('0x02', '0x9ABC');

  const trieNode = await trieGet(Buffer.from('ababab', 'hex'));
  console.log(trieNode);
})();
