# Dappmint

Dappmint is a decentralized social media network built on the Ethereum blockchain. It leverages the power of ReactJS, NextJS, Solidity, Sanity, and Pinata to create a secure and censorship-resistant platform for users to share and connect. Additionally, it offers an NFT minting feature to create and trade unique digital assets.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgements](#acknowledgements)

## Features

- **Decentralized Architecture**: No central authority controlling the data.
- **Blockchain Security**: Leveraging Ethereum blockchain for secure data storage.
- **Content Storage**: Media content stored securely using IPFS via Pinata.
- **Content Management**: Sanity for managing content seamlessly.
- **Scalable Frontend**: Built with ReactJS and NextJS for a fast and responsive user experience.
- **NFT Minting**: Create and trade unique digital assets directly on the platform.

## Tech Stack

- **Frontend**: ReactJS, NextJS
- **Smart Contracts**: Solidity
- **Content Management**: Sanity
- **Media Storage**: Pinata (IPFS)
- **Blockchain**: Ethereum

## Installation

Follow these steps to get a local copy up and running.

### Prerequisites

- Node.js
- npm or yarn
- MetaMask (or any Ethereum wallet)
- [Sanity CLI](https://www.sanity.io/docs/getting-started-with-sanity-cli)
- [Pinata Account](https://pinata.cloud/)

### Steps

1. **Clone the repository:**

    ```bash
    git clone https://github.com/prathamm1/dappmint.git
    cd dappmint
    ```

2. **Install dependencies:**

    ```bash
    npm install
    # or
    yarn install
    ```

3. **Set up environment variables:**

    Create a `.env.local` file in the root directory and add your environment variables:

    ```plaintext
    NEXT_PUBLIC_SANITY_PROJECT_ID=your_sanity_project_id
    NEXT_PUBLIC_PINATA_API_KEY=your_pinata_api_key
    NEXT_PUBLIC_PINATA_SECRET_API_KEY=your_pinata_secret_api_key
    NEXT_PUBLIC_INFURA_PROJECT_ID=your_infura_project_id
    ```

4. **Run the development server:**

    ```bash
    npm run dev
    # or
    yarn dev
    ```

5. **Deploy the smart contracts:**

    Navigate to the `contracts` directory and follow the instructions in the `README.md` file to deploy your Solidity contracts to the Ethereum network.

## Usage

1. **Connect your wallet:**

   Ensure you have MetaMask (or another Ethereum wallet) installed and connected to the correct network.

2. **Create a Profile:**

   Sign up and create your profile by providing the required details.

3. **Post Content:**

   Share your content by uploading media which is stored on IPFS via Pinata.

4. **Mint NFTs:**

   Create and mint your unique digital assets directly on the platform. Each NFT is securely stored on the blockchain and can be traded with other users.

5. **Interact with Content:**

   Like, comment, and share posts from other users.

## Contributing

We welcome contributions from the community! To contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature-name`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature/your-feature-name`).
6. Open a pull request.

Please make sure to update tests as appropriate.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [ReactJS](https://reactjs.org/)
- [NextJS](https://nextjs.org/)
- [Solidity](https://soliditylang.org/)
- [Sanity](https://www.sanity.io/)
- [Pinata](https://pinata.cloud/)
- [Ethereum](https://ethereum.org/)
