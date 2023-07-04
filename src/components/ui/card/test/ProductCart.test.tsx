import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import ProductCart from "../ProductCart";

describe("Product Card", () => {
  it("render component with props", () => {
    const product: any = {
      name: "Arroz",
      price: 3000,
      amount: 10,
      id: 11,
    };
    const component = render(<ProductCart {...product} />);
    component.getByText("Arroz");
    component.getByText("$3,000");
    component.getByText("Cantidad: 10");
  });
});
