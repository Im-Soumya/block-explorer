import { Utils } from "alchemy-sdk";

const Transactions = ({ transaction }) => {
  return (
    <div>
      <h3>Transaction hash: {transaction.hash}</h3>
      <h3>From: {transaction.from}</h3>
      <h3>To: {transaction.to}</h3>
      <h3>Amount: {Utils.formatEther(transaction.value.toString())}</h3>
    </div>
  );
};

export default Transactions;
