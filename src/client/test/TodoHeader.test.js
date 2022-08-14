import { render, screen } from "@testing-library/react";
import TodoHeader from "../components/TodoHeader";

test("todo header has a h1 tag", () => {
  render(<TodoHeader />);
  const todoHeader = screen.getByText(/todos/i);
  expect(todoHeader).toBeInTheDocument();
});
