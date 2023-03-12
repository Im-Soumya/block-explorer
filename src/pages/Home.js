import { useEffect, useState } from "react";

import Blocks from "../components/Blocks";
import { getLatestBlocks, getLatestTransactions } from "../utils/helpers";
import Transactions from "../components/Transactions";

const Home = () => {
  const [blocks, setBlocks] = useState([]);
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    async function getDetails() {
      const latestBlocks = await getLatestBlocks();
      // last10Blocks.forEach((block) => console.log(block));
      const latestTxs = await getLatestTransactions();
      console.log(latestTxs);

      setBlocks(latestBlocks);
      setTransactions(latestTxs);
    }
    getDetails();
  }, []);

  // (async () => {
  //   const last10Blocks = await getLatestBlocks();
  //   last10Blocks.forEach((block) => console.log(block));
  //   setBlocks(last10Blocks);
  // })();

  return (
    <div>
      <h1>Latest blocks</h1>
      {blocks.map((block) => (
        <Blocks key={block.hash} block={block} />
      ))}
      <h1>Latest transacions</h1>
      {transactions.map((transaction) => (
        <Transactions key={transaction.hash} transaction={transaction} />
      ))}
    </div>
  );
};

export default Home;
