import React from "react";


const Container = ({ children }) => {
  return (
    <>
      <div className="ContainerBg">{children}</div>
    </>
  );
};

export default Container;
