require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.2',
  networks: {
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/sx9I1QWyeR0RlAbX21yMiVcGiT_kIh4o',
      accounts: [
        '160f67506e7135c0396e875d92515bf38a858497bcb469d67c860d855f145b70',
      ],
    },
  },
}
