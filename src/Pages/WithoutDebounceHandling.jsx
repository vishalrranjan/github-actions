import React, { useState } from "react";
import InputHandling from "./InputHandling";

const WithoutDebounceHandling = () => {
  const [string, setString] = useState("");

  const handleText = (e) => {
    setString(e.target.value);
  };
  return (
    <>
      <h3>Normal</h3>
      <InputHandling string={string} handleText={handleText} />
    </>
  );
};

export default WithoutDebounceHandling;
