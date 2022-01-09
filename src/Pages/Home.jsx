import React from "react";
import DebounceConcept from "./DebounceConcept";
import WithoutDebounceHandling from "./WithoutDebounceHandling";

const Home = () => {
  return (
    <div className="divider">
      <WithoutDebounceHandling />
      <span className="divider-line"></span>
      <DebounceConcept />
    </div>
  );
};

export default Home;
