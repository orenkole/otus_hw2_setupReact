import React from "react";

export type CellProps = {
  cell: {
    isChecked: boolean,
    serialNumber: number,
    id: number,
  },
  handleCellClick: (serialNumber: number) => void
}

const Cell = (props: CellProps) => {

  const cellBoxStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "4px",
    border: "1px solid black",
    width: "20px",
    height: "20px",
  };

  const cellInfoStyle = {
    visibility: props.cell.isChecked ? "visible" : "hidden"
  };

  return (
    <div
      css={cellBoxStyle}
      onClick={() => {
        props.handleCellClick(props.cell.serialNumber);
      }}
    >
      <span
        css={cellInfoStyle}
      >
        {props.cell.serialNumber}
      </span>
    </div>
  );
};

export {Cell};