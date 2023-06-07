import { render, screen } from "@testing-library/react";
import AboutPage from "./AboutPage";

describe("The about component", () => {
  test("renders the mission box", () => {
    render(<AboutPage />);

    const missionHeader = screen.getByText(/Mission/i);
    expect(missionHeader).toBeInTheDocument();

    const missionBoxText = screen.getByText(
      /To foster healthy connections, new friendships, and shared memories through outdoor adventures!/i
    );
    expect(missionBoxText).toBeInTheDocument();

    const ImpactHeader = screen.getByText(/Make an Impact/i);
    expect(ImpactHeader).toBeInTheDocument();


  });
});
