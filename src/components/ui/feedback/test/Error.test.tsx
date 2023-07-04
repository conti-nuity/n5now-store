import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import ErrorMessage from "../Error";
import { FEEDBACK } from "../../../../constants/feedback";

describe("Error Message", () => {
  it("render component with props", () => {
    const message: any = "No se pudo cargar la información";
    const component = render(<ErrorMessage message={message} />);
    component.getByText(message);
  });

  it("render component with default message", () => {
    const component = render(<ErrorMessage />);
    component.getByText(FEEDBACK.DEFAULT_ERROR);
  });
});
