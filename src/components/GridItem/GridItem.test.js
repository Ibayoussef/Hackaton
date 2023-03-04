import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import GridItem from "./GridItem";

describe("GridItem", () => {
  const mockItem = {
    firstname: "Lionel",
    lastname: "Messi",
    pictureURl: "https://example.com/messi.jpg",
    goal: 500,
    salary: 1000000000,
    devise: "USD",
  };

  it("renders the player name", () => {
    render(<GridItem item={mockItem} />);
    const playerName = screen.getByText("Lionel Messi");
    expect(playerName).toBeInTheDocument();
  });

  it("formats the player salary with commas and currency symbol", () => {
    render(<GridItem item={mockItem} />);
    const salaryElement = screen.getByText(/1B USD/);
    expect(salaryElement).toBeInTheDocument();
  });
});
