import { waitFor, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";

//import the component
import { Card } from "../Components/Card";

test("loads and displays a greeting", async () => {
  render(<Card title="Card Title" paragraph="Lorem ipsum" />);

  const cardElement = screen.findAllByRole("heading");
  waitFor(() => expect(cardElement).toBeInTheDocument());
});
