import { waitFor, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import React from "react";

//import the component
import Form from "../../Components/Form";

describe("Form component tests", () => {
  test("Render the form with 2 fields and validate they are present", () => {
    render(
      <Form
        inputFields={{ field1: "text", field2: "text" }}
        handleSubmit={() => {}}
      />
    );
    let inputField = screen.findAllByTestId("input-field1");
    waitFor(() => expect(inputField).toBeInTheDocument());

    inputField = screen.findAllByTestId("input-field2");
    waitFor(() => expect(inputField).toBeInTheDocument());
  });

  test("Error message is rendered if form is submitted without inputs", async () => {
    render(<Form inputFields={{ field1: "text" }} handleSubmit={() => {}} />);
    await userEvent.click(screen.getByTestId("form_submission"));

    let alertToast = screen.findAllByRole("alert");
    waitFor(() => expect(alertToast).toBeInTheDocument());
    waitFor(() => expect(alertToast).toHaveTextContent('"field1" is required'));
  });

  test("Error message is rendered if text is input to a number field", async () => {
    render(<Form inputFields={{ field1: "number" }} handleSubmit={() => {}} />);

    await userEvent.type(screen.getByTestId("input-field1"), "text");
    await userEvent.click(screen.getByTestId("form_submission"));

    let alertToast = screen.findAllByRole("alert");
    waitFor(() => expect(alertToast).toBeInTheDocument());
    waitFor(() => expect(alertToast).toHaveTextContent('"field1" is required'));
  });

  test("HandleSubmit function is called when the submit button is clicked", async () => {
    //Create a mock event which will be called - we dont care what it is, just that it fires
    const handleClick = jest.fn();

    render(
      <Form inputFields={{ field1: "text" }} handleSubmit={handleClick} />
    );

    await userEvent.click(screen.getByTestId("form_submission"));
    waitFor(() => expect(handleClick).toHaveBeenCalledTimes(1));
  });
});
