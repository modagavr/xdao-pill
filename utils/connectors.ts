import { InjectedConnector } from "@web3-react/injected-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";

export const injected = new InjectedConnector({
  supportedChainIds: [1, 56, 128, 137, 1337],
});

export const walletconnect = new WalletConnectConnector({
  rpc: {
    1: "https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161",
    56: "https://bsc-dataseed.binance.org",
    128: "https://http-mainnet.hecochain.com",
    137: "https://polygon-rpc.com/",
    1337: "http://localhost:8545",
  },
  qrcode: true,
});
