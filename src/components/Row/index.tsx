import React from "react";

const Row = (props: any) => {
  return (
    <div
      css={{
        display: "flex",
      }}
    >{props.children}</div>
  );
};

export {Row};