import { createConfig, http } from 'wagmi';
import { mainnet } from 'wagmi/chains';
import { walletConnect } from 'wagmi/connectors';
import { bsc } from '../config/chain'

const projectId = "d08b9c594b8c2901dace58a32786c347";

if (!projectId) {
  console.warn('WalletConnect project ID not found in environment variables');
}

export const config = createConfig({
  chains: [bsc,mainnet],
  connectors: [
    walletConnect({
      projectId: projectId || '', // Fallback to empty string if not found
      showQrModal: true,
    }),
  ],
  transports: {
    [mainnet.id]: http(),
     [bsc.id]: http('https://bsc-dataseed.binance.org/'),
  },
});