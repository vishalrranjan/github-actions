const InputHandling = ({ handleText, string }) => {
  return (
    <div className="sidebar">
      <input type="text" onChange={handleText} placeholder="Type anything..." />
      <br />
      <div>
        <h1>Text will be print below.</h1>
        <p>{string}</p>
      </div>
    </div>
  );
};

export default InputHandling;
