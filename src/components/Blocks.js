import { useNavigate } from "react-router-dom";

const Block = ({ block }) => {
  const navigate = useNavigate();

  const handleClick = (blockNumber) => {
    navigate(`/block/${blockNumber}`);
  };

  return (
    <div key={block.hash}>
      <h3 onClick={() => handleClick(block.number)}>
        Block number: {block.number}
      </h3>
      <h3>Block hash: {block.hash}</h3>
      <h3>Txns: {block.transactions.length}</h3>
      <h3>Nonce: {block.nonce}</h3>
    </div>
  );
};

export default Block;
