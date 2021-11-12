import React from "react";
import { render, screen } from "@testing-library/react";
import {Field} from ".";

describe('Field', () => {
  test("renders Field component", () => {
    render(
      <Field
        sizes={{width: 4, height: 2}}
        cells={Array.from({ length: 8 }, (_, i) => ({
          isChecked: false,
          serialNumber: (i+1),
          id: i,
        }))}
      />
    );
    expect(screen.getByText("3")).toBeInTheDocument();
  });

  test("renders Field component", () => {
    render(
      <Field
        sizes={{width: 4, height: 2}}
        cells={Array.from({ length: 8 }, (_, i) => ({
          isChecked: false,
          serialNumber: (i+1),
          id: i,
        }))}
      />
    );
    expect(screen.getAllByText(/\d+/)).toHaveLength(8);
  });
});