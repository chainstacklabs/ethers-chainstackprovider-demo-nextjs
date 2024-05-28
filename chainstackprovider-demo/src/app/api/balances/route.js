const ethers = require("ethers");

const providers = {
  ethereum: new ethers.ChainstackProvider("mainnet"),
  polygon: new ethers.ChainstackProvider("matic"),
  bnb: new ethers.ChainstackProvider("bnb"),
  arbitrum: new ethers.ChainstackProvider("arbitrum"),
};

async function getBalance(network, walletAddress) {
  const provider = providers[network];
  const balance = await provider.getBalance(walletAddress);
  return ethers.formatEther(balance); // Convert balance from wei to ether
}

async function getAllBalances(walletAddress) {
  const balances = {};
  for (const network in providers) {
    balances[network] = await getBalance(network, walletAddress);
  }
  return balances;
}

export async function POST(req) {
  const { walletAddress } = await req.json();

  if (!walletAddress) {
    return new Response(
      JSON.stringify({ error: "Wallet address is required" }),
      { status: 400 }
    );
  }

  try {
    const balances = await getAllBalances(walletAddress);
    return new Response(JSON.stringify(balances), { status: 200 });
  } catch (error) {
    console.error("Error fetching balances:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
    });
  }
}
