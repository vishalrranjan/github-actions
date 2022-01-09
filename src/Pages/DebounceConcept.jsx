import React, { useState } from "react";
import InputHandling from "./InputHandling";

const DebounceConcept = () => {
  const [string, setString] = useState("");
  let debounce;

  const handleText = (e) => {
    clearTimeout(debounce);

    debounce = setTimeout(() => {
      setString(e.target.value);
    }, 5000);
  };

  return (
    <>
      <h3>With Debounce</h3>
      <InputHandling string={string} handleText={handleText} />
    </>
  );
};

export default DebounceConcept;
