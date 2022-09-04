import { render, screen } from "@testing-library/react";
import About from "../pages/About";
import Provider from "./AppContext";
import '@testing-library/jest-dom'

test("should render Cześć", () => {
  render(
    <Provider>
      <About />
    </Provider>
  );
  const message = screen.getByText(/cześć/i);
  expect(message).toBeInTheDocument();
});
