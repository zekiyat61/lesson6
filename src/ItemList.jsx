const ItemList = ({ items, handleDelete }) => {
  return (
    <ul>
      {items.length === 0 ? (
        <p>No items</p>
      ) : (
        items.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))
      )}
    </ul>
  );
};

export default ItemList;
