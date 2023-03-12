import { useState, useEffect } from "react";
import { Utils } from "alchemy-sdk";
import { useParams } from "react-router-dom";

import { alchemy } from "../utils/helpers";

const BlockDetails = () => {
  const [block, setBlock] = useState(null);

  const { blockNumber } = useParams();

  useEffect(() => {
    async function getBlocks() {
      const currBlock = await alchemy.core.getBlock(blockNumber);
      console.log(currBlock);
      setBlock(currBlock);
    }
    getBlocks();
  }, []);

  return (
    <>
      {block && (
        <div>
          <h3>Block height: {block.number}</h3>
          <h3>Block hash: {block.hash}</h3>
          <h3>Timestamp: {block.timestamp}</h3>
          <h3>Transaction Count: {block.transactions.length}</h3>

          <hr />

          <h3>Gas Used: {Utils.formatEther(block.gasUsed.toString())} ETH</h3>
          <h3>Gas Limit: {Utils.formatEther(block.gasLimit.toString())} ETH</h3>
          <h3>
            Base Fee Per Gas:{" "}
            {Utils.formatEther(block.baseFeePerGas.toString())} ETH
          </h3>
          <h3>Extra Data: {block.extraData}</h3>

          <hr />

          <h3>Parent hash: {block.parentHash}</h3>
          <h3>Validator: {block.miner}</h3>
          <h3>Nonce: {block.nonce}</h3>
          <h3>Block difficulty: {block.difficulty}</h3>

          <hr />

          <div>
            <h3>Transactions</h3>
            {block.transactions.map((tx, index) => (
              <ul key={index}>
                <li>{tx}</li>
              </ul>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default BlockDetails;
