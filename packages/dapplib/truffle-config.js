require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea nasty forget spray fine note oven pumpkin grace local flock gather'; 
let testAccounts = [
"0x421bbc0425d1049ffc904c2880a4e4b659724d0d1c7d22356d9a555eaa26b395",
"0x4f4e2c760eaf9f5ac724f58381c966ca6d533d06db032bd44ed99cd4d61f7384",
"0x1d09174bbe1756486aef1a7d9f8c467d2adc4bf5c96f39b79ba35a77da0e9a22",
"0x68f8aa3da717328dca8ab07fc534edddd225efecf2eef173f14440309cdcdf44",
"0xa6f12b851e387c4de0962d2bb6ed034b1916d802cb36b8a698ec43b8c93e1c02",
"0x3b5c41bc27b2033797e09039117a994b8aee971d312875569dd5f9c2021283cf",
"0x7077cfe6992d8d857ecb64548d4ee4aa76d9ecc08c903db1b81b35ba638e7861",
"0x0c39279f8ad3c61879764d569d2e54354dc9652cfc9dabcc774a7b408a8d1830",
"0x398c406e5dcfb2cdf4622c3239d46b85f670cb5981e06abed987bf33ba61c259",
"0x2d44f4d5dd2f411af746e6153d5b2596867133b4c784dcbd8024d04d4dafdc52"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

