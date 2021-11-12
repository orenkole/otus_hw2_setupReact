import React, {useState} from "react";
import { Field } from "@/components/Field";

type CellInfo = {
  isChecked: boolean;
  serialNumber: number;
  id: number;
}

type InitialState = CellInfo[]

const App = () => {

  const sizes = {width: 4, height: 2};
  const initialCellsState: InitialState = Array.from({ length: (sizes.height * sizes.width) }, (_, i) => ({
    isChecked: false,
    serialNumber: (i+1),
    id: i,
  }));

  const [cells, setCells] = useState(initialCellsState);

  const handleCellClick = (serialNumber: number) => {
    setCells((prevState) => {
      return [
        ...prevState.map(cell => {
          if(cell.serialNumber !== serialNumber) {
            return cell;
          }
          return {...cell, isChecked: !cell.isChecked};
        })
      ];});
  };

  return (
    <div>
      <Field
        sizes={sizes}
        cells={cells}
        handleCellClick={handleCellClick}
      />
    </div>
  );
};

export {App};