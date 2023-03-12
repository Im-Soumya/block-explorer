import { Alchemy, Network } from "alchemy-sdk";

const settings = {
  apiKey: process.env.REACT_APP_ALCHEMY_API_KEY,
  network: Network.ETH_MAINNET,
};

export const alchemy = new Alchemy(settings);

export const getLatestBlocks = async () => {
  const last10Blocks = [];
  const latestBlockNumber = await alchemy.core.getBlockNumber();

  let temp = latestBlockNumber;
  while (temp > latestBlockNumber - 15) {
    last10Blocks.push(await alchemy.core.getBlock(temp));
    temp--;
  }

  return last10Blocks;
};

export const getBlock = async (blockNumber) => {
  const block = await alchemy.core.getBlock(blockNumber);

  return block;
};

export const getLatestTransactions = async () => {
  const last10Txs = [];
  const latestBlockNumber = await alchemy.core.getBlockNumber();
  const latestBlock = await alchemy.core.getBlock(latestBlockNumber);
  const latestBlockTxs = latestBlock.transactions.slice(0, 15);

  for (let txHash of latestBlockTxs) {
    const tx = await alchemy.core.getTransaction(txHash);
    last10Txs.push(tx);
  }

  return last10Txs;
};

export const getTransaction = async (txHash) => {
  const transaction = await alchemy.core.getTransaction(txHash);

  return transaction;
};
