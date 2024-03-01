import "../index.css";

const Stats = ({ items }) => {
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);
  return (
    <fouter className="stats">
      {numItems === 0 ? (
        <em>start adding some items to your packing list</em>
      ) : (
        <em>
          {percentage === 100
            ? "you got everything! ready to go ..."
            : `you have ${numItems} items on your list , and you already packed
        ${numPacked} (${percentage}%)`}
        </em>
      )}
    </fouter>
  );
};

export default Stats;
