import React from "react";
import { render } from "@testing-library/react";
import PlayerGrid from "./PlayerGrid";
import "@testing-library/jest-dom";
const mockData = [
  {
    id: 1,
    firstname: "John",
    lastname: "Doe",
    pictureURl: "https://example.com/picture.jpg",
    goal: "score a goal",
    salary: 100,
    devise: "$",
  },
  {
    id: 2,
    firstname: "Jane",
    lastname: "Doe",
    pictureURl: "https://example.com/picture2.jpg",
    goal: "assist a goal",
    salary: 200,
    devise: "$",
  },
];

describe("PlayerGrid", () => {
  it("renders correctly", () => {
    const { getAllByTestId } = render(<PlayerGrid data={mockData} />);
    const items = getAllByTestId("grid-item");
    expect(items.length).toBe(2);
  });
});
