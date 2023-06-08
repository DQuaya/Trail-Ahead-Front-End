import { render, screen } from "@testing-library/react";
import HikeList from "./HikeList";
// import PlannedHike from './PlannedHike'

describe("The HikeList Component", () => {
    test("renders the title", () => {
        render(<HikeList />);

        const title = screen.getByText(/Available Hikes/i);

        expect(title).toBeInTheDocument();
    });

    test("renders the following fields: name, picture, experience, time/date", () => {
        render(<HikeList />);

        const name = screen.getByText(/John Doe/i);
        const picture = screen.getByAltText(/picture of John Doe/i);
        const experience = screen.getByText(/2 years/i);
        const timeDate = screen.getByText(/10-24-2023/i);

        expect(name).toBeInTheDocument();
        expect(picture).toBeInTheDocument();
        expect(experience).toBeInTheDocument();
        expect(timeDate).toBeInTheDocument();
    });

    test("", () => {});
});
