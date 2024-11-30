const AddItemForm = ({ input, setInput, addElement }) => {
    return (
      <div>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={addElement}>Add Element</button>
      </div>
    );
  };
  
  export default AddItemForm;
  