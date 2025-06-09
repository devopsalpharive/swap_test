import { useEffect } from "react";
import { ethers } from "ethers";

const ShowChainId = () => {
  useEffect(() => {
    const fetchChainIdAndAccounts = async () => {
      try {
        if (!(window as any).ethereum) {
          console.warn("MetaMask not found");
          return;
        }

        // Request account access
        const accounts: string[] = await (window as any).ethereum.request({
          method: "eth_requestAccounts",
        });

        if (!accounts || accounts.length === 0) {
          console.error("No accounts returned. Please connect at least one account in MetaMask.");
          return;
        }

        const provider = new ethers.BrowserProvider((window as any).ethereum);
        const network = await provider.getNetwork();
        console.log("Connected Chain ID:", network.chainId);
        console.log("Connected Account:", accounts[0]);

      } catch (err: any) {
        if (err.code === 4001) {
          // User rejected request
          console.error("User rejected the wallet connection.");
        } else {
          console.error("An unexpected error occurred:", err);
        }
      }
    };

    fetchChainIdAndAccounts();
  }, []);

  return null;
};

export default ShowChainId;
