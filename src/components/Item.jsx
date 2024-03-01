import "../index.css";

const Item = ({ item, handleRemoveItems, handleToggleItems }) => {
  return (
    <li>
      <input type="checkbox" onChange={() => handleToggleItems(item.id)} />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button
        style={{ color: "red" }}
        onClick={() => handleRemoveItems(item.id)}
      >
        X
      </button>
    </li>
  );
};

export default Item;
