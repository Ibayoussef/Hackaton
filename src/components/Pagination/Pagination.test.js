import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Pagination from "./Pagination";

const mockData = [
  [
    { id: 1, name: "player 1" },
    { id: 2, name: "player 2" },
  ],
  [
    { id: 3, name: "player 3" },
    { id: 4, name: "player 4" },
  ],
  [
    { id: 5, name: "player 5" },
    { id: 6, name: "player 6" },
  ],
];

describe("Pagination", () => {
  it("renders the correct number of pages", () => {
    const setPage = jest.fn();
    const page = 0;
    const { getAllByTestId } = render(
      <Pagination data={mockData} setPage={setPage} page={page} />
    );
    expect(getAllByTestId("pagination-page").length).toBe(3);
  });

  it("disables the 'previous' button on the first page", () => {
    const setPage = jest.fn();
    const page = 0;
    const { getByText } = render(
      <Pagination data={mockData} setPage={setPage} page={page} />
    );
    const prevButton = getByText("Precedent");
    expect(prevButton).toBeDisabled();
  });

  it("disables the 'next' button on the last page", () => {
    const setPage = jest.fn();
    const page = 2;
    const { getByText } = render(
      <Pagination data={mockData} setPage={setPage} page={page} />
    );
    const nextButton = getByText("Suivant");
    expect(nextButton).toBeDisabled();
  });
});
