const ethers = require('ethers');

const provider = new ethers.providers.JsonRpcProvider("https://rinkeby.infura.io/v3/7204527111984696b007e28cfe5682e0");
const signer = provider.getSigner();

console.log(signer);