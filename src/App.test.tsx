import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { App } from "./App";

describe("App", () => {
  test("click on cell reveals text", () => {
    render(
      <App />
    );
    expect(screen.queryByText("3")).not.toBeVisible();
    userEvent.click(screen.queryByText("3"));
    expect(screen.getByText("3")).toBeVisible();
  });
});
