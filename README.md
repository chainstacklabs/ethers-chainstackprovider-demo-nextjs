<img width="1200" alt="Labs" src="https://user-images.githubusercontent.com/99700157/213291931-5a822628-5b8a-4768-980d-65f324985d32.png">

<p>
 <h3 align="center">Chainstack is the leading suite of services connecting developers with Web3 infrastructure</h3>
</p>

<p align="center">
  <a target="_blank" href="https://chainstack.com/build-better-with-ethereum/"><img src="https://github.com/soos3d/blockchain-badges/blob/main/protocols_badges/Ethereum.svg" /></a>&nbsp;  
  <a target="_blank" href="https://chainstack.com/build-better-with-bnb-smart-chain/"><img src="https://github.com/soos3d/blockchain-badges/blob/main/protocols_badges/BNB.svg" /></a>&nbsp;
  <a target="_blank" href="https://chainstack.com/build-better-with-polygon/"><img src="https://github.com/soos3d/blockchain-badges/blob/main/protocols_badges/Polygon.svg" /></a>&nbsp;
  <a target="_blank" href="https://chainstack.com/build-better-with-avalanche/"><img src="https://github.com/soos3d/blockchain-badges/blob/main/protocols_badges/Avalanche.svg" /></a>&nbsp;
  <a target="_blank" href="https://chainstack.com/build-better-with-solana/"><img src="https://github.com/soos3d/blockchain-badges/blob/main/protocols_badges/Solana.svg" /></a>&nbsp;
</p>

<p align="center">
  <a target="_blank" href="https://chainstack.com/protocols/">Supported protocols</a> •
  <a target="_blank" href="https://chainstack.com/blog/">Chainstack blog</a> •
  <a target="_blank" href="https://docs.chainstack.com/quickstart/">Chainstack docs</a> •
  <a target="_blank" href="https://docs.chainstack.com/quickstart/">Blockchain API reference</a> •
  <a target="_blank" href="https://console.chainstack.com/user/account/create">Start for free</a>
</p>

# ethers.js `ChainstackProvider` demo

A simple demo to showcase the `ChainstackProvider` with ethers.js. This DApp uses Next.js 14 to fetch address balances from all the chains supported by the ethers `ChainstackProvider`.

> Check out the tutorial on the [Chainstack Dev Portal]().

Learn more about the `ChainstackProvider` and which chains are supported on the [Chainstack Docs](https://docs.chainstack.com/reference/ethersjs-chainstackprovider).

## Quick start

Clone this repository:

```sh
git clone https://github.com/chainstacklabs/ethers-chainstackprovider-demo-nextjs.git
```

Move into the Next app:

```sh
cd chainstackprovider-demo
```

Install dependencies:

```sh
npm ci
```

Start dev server

```sh
npm run dev
```

The DApp is now running on `http://localhost:3000`. Input an Ethereum address and click the button to fetch the balances from all the chains supported by the `ChainstackProvider`.
