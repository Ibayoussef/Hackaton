import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Searchbar from "./Searchbar";

const mockData = [
  {
    id: 1,
    firstname: "Lionel",
    lastname: "Messi",
  },
  {
    id: 2,
    firstname: "Cristiano",
    lastname: "Ronaldo",
  },
];

describe("Searchbar", () => {
  it("renders the search bar with placeholder text", () => {
    const { getByPlaceholderText } = render(
      <Searchbar
        setDisplayedData={jest.fn()}
        setSearchValue={jest.fn()}
        data={mockData}
      />
    );
    expect(
      getByPlaceholderText("Recherchez un joueur içi...")
    ).toBeInTheDocument();
  });

  it("updates the displayed data when the search value changes", () => {
    const mockSetDisplayedData = jest.fn();
    const mockSetSearchValue = jest.fn();
    const { getByRole } = render(
      <Searchbar
        setDisplayedData={mockSetDisplayedData}
        setSearchValue={mockSetSearchValue}
        data={mockData}
      />
    );
    const searchInput = getByRole("textbox");
    fireEvent.change(searchInput, { target: { value: "lion" } });
    expect(mockSetSearchValue).toHaveBeenCalledWith("lion");
    expect(mockSetDisplayedData).toHaveBeenCalledWith([
      [{ id: 1, firstname: "Lionel", lastname: "Messi" }],
    ]);
  });
});
