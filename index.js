const { getKey } = require('./async-export.js');

(async () => {
  console.log('Getting the key...');
  const key = await getKey()
  console.log("Key is:", key);
})()
