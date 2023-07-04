import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import Loading from "../Loading";
import { FEEDBACK } from "../../../../constants/feedback";

describe("Loading message", () => {
  it("render component with props", () => {
    const message: any = "Obteniendo información";
    const component = render(<Loading message={message} />);
    component.getByText(message);
  });

  it("render component with default message", () => {
    const component = render(<Loading />);
    component.getByText(FEEDBACK.DEFAULT_LOADING);
  });
});
