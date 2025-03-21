import { render, screen } from "@testing-library/react"
import Homepage from "./page"

describe('homepage', () => {
  it("should render welcome message", () => {
    render(<Homepage />);
    expect(screen.getByText("Welcome to App1")).not.toBeNull();
  })
 })
