import React, { useState, useEffect } from 'react';
import metamaskIcon from '../../../public/metamask.png';
import walletConnectIcon from '../../../public/connect.png';
import { 
  useConnect,
  useAccount,
  Connector,
  useDisconnect
} from 'wagmi';
import { mainnet } from 'wagmi/chains';

interface WalletModalProps {
  onClose: () => void;
  onConnect: (address: string, walletType: string) => void;
    onDisconnect?: () => void; // <- Add this line
}

interface WalletOption {
  name: string;
  iconSrc: string;
  altText: string;
  connectorId: string;
  isAvailable: boolean;
}

const WalletModal: React.FC<WalletModalProps> = ({ onClose, onConnect }) => {
 const [error, setError] = useState<string | null>(null);
  const [isConnecting, setIsConnecting] = useState<string | null>(null);
  const { connect, connectors, error: connectError } = useConnect();
  const { address, isConnected } = useAccount();
  const { disconnect } = useDisconnect();


  const checkWalletReady = async (connectorId: string) => {
    if (connectorId === 'metaMask') {
      if (typeof window.ethereum === 'undefined') {
        window.open('https://metamask.io/download.html', '_blank');
        throw new Error('MetaMask extension not detected. Please install it first.');
      }

      try {
        // Check if already authorized
        const accounts = await window.ethereum.request({ method: 'eth_accounts' });
        if (accounts.length > 0) return accounts;

        // Request authorization if no accounts
        const requestedAccounts = await window.ethereum.request({ 
          method: 'eth_requestAccounts' 
        });
        
        if (requestedAccounts.length === 0) {
          throw { 
            code: 4001, 
            message: 'Please unlock your wallet and connect at least one account' 
          };
        }
        return requestedAccounts;
      } catch (err: any) {
        console.error('MetaMask connection error:', err);
        if (err.code === 4001) {
          throw new Error('Connection rejected by user');
        }
        throw err;
      }
    }
    return true;
  };

  const connectWallet = async (connectorId: string) => {
    try {
      setError(null);
      setIsConnecting(connectorId);

      // Disconnect first if already connected
      if (isConnected) {
        await disconnect();
      }

      await checkWalletReady(connectorId);

      const connector = connectors.find((c): c is Connector => c.id === connectorId);
      if (!connector) {
        throw new Error(`${connectorId} connector not found`);
      }

      await connect({ connector, chainId: mainnet.id });

    } catch (err: any) {
      console.error(`${connectorId} connection error:`, err);
      
      let errorMessage = 'Failed to connect wallet';
      if (err.code === 4001 || err.message.includes('rejected')) {
        errorMessage = 'Connection rejected. Please try again.';
      } else if (err.message.includes('pending')) {
        errorMessage = 'A connection request is already pending. Please check your wallet.';
      } else if (err.message.includes('not detected')) {
        errorMessage = err.message;
      } else {
        errorMessage = err.message || errorMessage;
      }

      setError(errorMessage);
    } finally {
      setIsConnecting(null);
    }
  };

  useEffect(() => {
    if (address) {
      const connector = connectors.find((c: Connector) => 
        c.id === 'metaMask' || c.id === 'walletConnect'
      );
      onConnect(address, connector?.id || 'unknown');
      onClose();
    }
  }, [address, onConnect, onClose, connectors]);

  useEffect(() => {
    if (connectError) {
      setError(
        connectError.message.includes('User rejected') 
          ? 'Connection request rejected' 
          : connectError.message
      );
    }
  }, [connectError]);

  const wallets: WalletOption[] = [
    {
      name: 'MetaMask',
      iconSrc: metamaskIcon,
      altText: 'MetaMask Icon',
      connectorId: 'metaMask',
      isAvailable: typeof window.ethereum?.isMetaMask === 'boolean'
    },
    {
      name: 'WalletConnect',
      iconSrc: walletConnectIcon,
      altText: 'WalletConnect Icon',
      connectorId: 'walletConnect',
      isAvailable: true
    },
  ].filter(wallet => wallet.isAvailable);

  return (
    <div className="fixed inset-0 bg-[#121313] bg-opacity-80 flex items-center justify-center z-50">
      <div className="modal-content bg-[#121313] dark:text-white rounded-lg w-full max-w-[90%] md:max-w-md mx-4 shadow-3xl border border-[#ffffff1a]">
        <div className="modal-header flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700">
          <h5 className="modal-title text-xl font-semibold text-white">Connect Wallet</h5>
          <button 
            type="button" 
            className="close text-gray-300 hover:text-gray-400  transition-colors"
            onClick={onClose}
            aria-label="Close wallet modal"
          >
            <span className="text-2xl">×</span>
          </button>
        </div>
        <div className="modal-body p-4">
          {error && (
            <div className="mb-4 p-3 bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-100 rounded-md">
              {error}
            </div>
          )}
          <div className="wallet-options space-y-3">
            {wallets.map((wallet) => (
              <button
                key={wallet.name}
                onClick={() => connectWallet(wallet.connectorId)}
                disabled={isConnecting === wallet.connectorId}
                className={`w-full flex items-center justify-between p-4 border rounded-lg transition-all
                  border-gray-200 dark:border-gray-700 
                  hover:shadow-lg
                  ${isConnecting === wallet.connectorId ? 'animate-pulse' : ''}
                  disabled:opacity-50 disabled:cursor-not-allowed`}
              >
                <div className="flex items-center gap-3">
                  <h4 className="text-lg font-medium text-white">{wallet.name}</h4>
                </div>
                <div className="flex items-center gap-2">
                  {isConnecting === wallet.connectorId && (
                    <span className="text-sm text-gray-500">Connecting...</span>
                  )}
                  <img 
                    src={wallet.iconSrc} 
                    alt={wallet.altText} 
                    className="w-8 h-8 object-contain"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                    }}
                  />
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletModal;