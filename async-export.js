
module.exports.getKey = async function () {
  const sleep = (ms = 0) => {
    return new Promise(r => setTimeout(r, ms));
  }

  await sleep(5000)
  return 'some-value'
}
