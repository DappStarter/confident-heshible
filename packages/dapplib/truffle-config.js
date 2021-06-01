require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom kiwi office spot edge rescue spawn public grace opera bottom session'; 
let testAccounts = [
"0xab8ab929f829c06541709188afe3076e51533abd490f3b0e8d4848b0a8b49ada",
"0x6e769ca69acc97fd339b33a3a8f2565c2399ca4c75c3969090971748279c0828",
"0xd4983b32f28e3c2db421b2b60020da115ceb118c86e780600d387b6879dea231",
"0xf7c8839f3df84c4a7cc8a20f4d982ab3bc166be9bb89e63bc1794cbf9ecd11dc",
"0x118fec262fca12f6d7b0b8ab8c01abcd58312e303736ce50b255aa1938537079",
"0xabcf01f4db8bcf5a83ed1818921d15f4a81a61f7b67bc666358647292fd2e2b6",
"0xca21c30b11ae179c8e2696dabbdde4b3235544795c0588ea08687e46003f346c",
"0xc2bc3324dc4f98ca942e739e2385671669759cca25e0dbc2a8303a62284ddb36",
"0x4809c006b61a0cbfe4f7a64356807e9115776361c8f96c9f5a859ebba19ad5d4",
"0x02c289a7b8c2863e1697e3ebbeb4ac22a3daee23c3eaf56e803a57699cae9baf"
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

