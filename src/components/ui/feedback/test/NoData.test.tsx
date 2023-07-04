import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import NoData from "../NoData";
import { FEEDBACK } from "../../../../constants/feedback";

describe("Not Found message", () => {
  it("render component with props", () => {
    const message: any = "No hay datos";
    const component = render(<NoData message={message} />);
    component.getByText(message);
  });

  it("render component with default message", () => {
    const component = render(<NoData />);
    component.getByText(FEEDBACK.NOT_DATA);
  });
});
