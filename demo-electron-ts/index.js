async function createApp() {
  let i = 0;
  console.time(`forEach`)
  Array(1000000).fill(0).forEach((v, idx) => {
    // console.log("🚀 ~ file: index.js:3 ~ Array ~ v, idx", v, idx)
    i > -1 && i++;
  })
  console.timeEnd(`forEach`)
  return i;
}
async function run() {
  console.log("🚀 ~ file: index.js:9 ~ run ~ a")
  const a = await createApp();
  console.log("🚀 ~ file: index.js:9 ~ run ~ a", a)
}
run();