const Trie = require('merkle-patricia-tree');
const { Proof } = require('eth-object');
const { promisfy } = require('promisfy');

trie = new Trie();

(async() => {

  await Promise.all([].map(entry => {
    return promisfy(trie.put, trie)(entry[0], entry[1]);
  }));

  const res = await promisfy(trie.findPath, trie)(Buffer.from('a3', 'hex'));

  console.log(Proof.fromStack(res[2]));
})();
