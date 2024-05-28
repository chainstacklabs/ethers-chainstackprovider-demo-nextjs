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
