import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import App from "./App";

// test("renders learn react link", () => {
// default
// render(<App />);
// const linkElement = screen.getByText(/learn react/i);
// expect(linkElement).toBeInTheDocument();
// });

// redux-mock-store
// https://github.com/reduxjs/redux-mock-store

// more test properties can find in testing-library online

describe("With React Testing Library", () => {
  const mockStore = configureStore();
  let store;
  it("Input field is rendered correctly", () => {
    store = mockStore([]);
    const { getByPlaceholderText, getByTestId } = render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    expect(getByPlaceholderText("Input your todo")).not.toBeNull();
    expect(getByPlaceholderText("Input your todo")).toBeInTheDocument();
    expect(getByTestId("add-todo-btn")).toBeInTheDocument();
  });

  it("List is rendered correctly", () => {
    store = mockStore([
      { content: "write some code", isCompleted: false },
      { content: "watch some movies", isCompleted: false },
    ]);
    const { getByTestId } = render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    expect(getByTestId("write-some-code-0")).toBeInTheDocument();
    expect(getByTestId("watch-some-movies-1")).toBeInTheDocument();
  });
});
