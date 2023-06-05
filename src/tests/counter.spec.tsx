import { waitFor, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import React from "react";

//import the component
import Counter from "../Components/Counter";

describe("Counter component tests", () => {
  test("The counter renders a number", async () => {
    render(<Counter count={1} />);

    let counterElement = screen.findByTestId("counter");
    let counter = Number((await counterElement).textContent);

    expect(typeof counter).toBe("number");
  });

  test("Clicking increment increases the counter by 1", async () => {
    let counter: number = 0;

    render(<Counter count={counter} />);

    await userEvent.click(screen.getByTestId("increment"));

    let counterElement = screen.findByTestId("counter");
    let incrCounter: number = Number((await counterElement).textContent);

    expect(incrCounter).toEqual(counter + 1);
  });

  test("Clicking decrement decreases the counter by 1", async () => {
    render(<Counter count={1} />);

    await userEvent.click(screen.getByTestId("decrement"));

    let counterElement = screen.findByTestId("counter");
    let decrCounter: number = Number((await counterElement).textContent);

    expect(decrCounter).toEqual(0);
  });
});
