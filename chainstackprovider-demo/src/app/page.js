"use client";
import { useState } from "react";
import { ethers } from "ethers";

export default function Home() {
  const [walletAddress, setWalletAddress] = useState("");
  const [balances, setBalances] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleCheckBalances = async () => {
    if (!ethers.isAddress(walletAddress)) {
      setError("Invalid Ethereum address");
      return;
    }

    setLoading(true);
    setError(null);
    setBalances(null); // Clear previous balances
    try {
      const response = await fetch(`/api/balances`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ walletAddress }),
      });
      if (!response.ok) throw new Error("Failed to fetch balances");
      const data = await response.json();
      setBalances(data);
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white py-4">
      <h1 className="text-4xl font-bold mb-4">Chainstack Powered</h1>
      <h2 className="text-2xl mb-4">Multi-chain Wallet Balance Aggregator</h2>
      <h3 className="text-lg mb-4">
        This simple DApp uses the <code>ChainstackProvider</code> from ether.js
        to interact with those chains.
      </h3>
      <h4 className="text-lg mb-4">
        Learn more about the <code>ChainstackProvider</code> from ether.js on
        the{" "}
        <a
          href="https://docs.chainstack.com/reference/ethersjs-chainstackprovider"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          Chainstack documentation
        </a>
        .
      </h4>

      <div className="w-full max-w-md bg-gray-800 p-6 rounded-lg shadow-md">
        <input
          type="text"
          placeholder="Enter Wallet Address"
          value={walletAddress}
          onChange={(e) => setWalletAddress(e.target.value)}
          className="w-full p-2 mb-4 border rounded bg-gray-700 border-gray-600 text-white"
        />
        <button
          onClick={handleCheckBalances}
          className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          disabled={!walletAddress || loading}
        >
          {loading ? "Checking..." : "Check Balances"}
        </button>
        {error && <p className="text-red-500 mt-4">{error}</p>}
        {balances && (
          <div className="mt-4">
            <p>
              <strong>Ethereum:</strong>{" "}
              {parseFloat(balances.ethereum).toFixed(5)} ETH
            </p>
            <p>
              <strong>Polygon:</strong>{" "}
              {parseFloat(balances.polygon).toFixed(5)} MATIC
            </p>
            <p>
              <strong>BNB Smart Chain:</strong>{" "}
              {parseFloat(balances.bnb).toFixed(5)} BNB
            </p>
            <p>
              <strong>Arbitrum:</strong>{" "}
              {parseFloat(balances.arbitrum).toFixed(5)} ETH
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
