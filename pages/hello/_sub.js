import React from "react";

const HelloSub = props => {
  return (
    <div>
      Props coming in
      <span>{JSON.stringify(props, null, 2)}</span>
    </div>
  );
};

export default HelloSub;
