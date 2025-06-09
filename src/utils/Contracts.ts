// src/constants/contracts.ts
export const ROUTER_ADDRESS = "0xa5768b2b04a17a3e2153173053a8f8aa1e6a5be8";
export const FACTORY_ADDRESS = "0x1721e94AfBf96d69898aaa1D98DfaF764a480954";
export const WBNB_ADDRESS = "0x3654d1E4649C33458f1C873277B8220B31554aDE";
export const USDT_ADDRESS = "0x8d5458F44469935B40986810Daf1459f768eBbB1";
export const TOKEN_ADDRESS = "0x9f7a77484827fe18eec30a5bf972027e8bdcd30e";

export const ROUTER_ABI = [
  // ... Router ABI methods you need
  "function addLiquidity(address tokenA, address tokenB, uint amountADesired, uint amountBDesired, uint amountAMin, uint amountBMin, address to, uint deadline) external returns (uint amountA, uint amountB, uint liquidity)",
  "function createPair(address tokenA, address tokenB) external returns (address pair)"
];

export const FACTORY_ABI = [
  "function getPair(address tokenA, address tokenB) external view returns (address pair)",
  "function allPairs(uint) external view returns (address pair)",
  "function allPairsLength() external view returns (uint)"
];

export const ERC20_ABI = [
  "function approve(address spender, uint256 amount) external returns (bool)",
  "function allowance(address owner, address spender) external view returns (uint256)",
  "function balanceOf(address owner) external view returns (uint256)",
  "function decimals() external view returns (uint8)",
  "function symbol() external view returns (string memory)"
];