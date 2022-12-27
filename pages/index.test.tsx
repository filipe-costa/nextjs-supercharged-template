import { render } from "@testing-library/react";
import Home from "../pages/index";
import "@testing-library/jest-dom";
describe("Home", () => {
  it('renders "Hello, World!" text', () => {
    const { screen } = render(<Home />);

    screen.getByText(/Hello, world!/i);
  });
});
