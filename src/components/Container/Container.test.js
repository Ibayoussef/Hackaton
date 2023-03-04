import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Container from "./Container";
describe("Container Test", () => {
  it("should render", () => {
    const { getByTestId } = render(<Container>Hello</Container>);
    const container = getByTestId("container");
    expect(container).toBeInTheDocument();
  });
});
