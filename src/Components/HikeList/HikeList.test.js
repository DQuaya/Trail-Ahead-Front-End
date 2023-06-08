import { render, screen } from "@testing-library/react";
import HikeList from "./HikeList";
// import PlannedHike from './PlannedHike'

describe("The HikeList Component", () => {
    test("renders the title", () => {
        render(<HikeList />);

        const title = screen.getByText(/Available Hikes/i);

        expect(title).toBeInTheDocument();
    });

    test("", () => {});
    test("renders the following fields: name, picture, experience, time/date, group size, availability", () => {
        render(<HikeList />);
        const name = screen.getByText(/John Doe/i);
        const picture = screen.getByAltText(/picture of John Doe/i);
        const experience = screen.getAllByText(/experience/i);
        const timeDate = screen.getAllByText(/time date/i);
        const groupSize = screen.getAllByText(/group size/i);
        const availability = screen.getAllByText(/active/i);

        expect(name).toBeInTheDocument();
        expect(picture).toBeInTheDocument();
        expect(experience).toBeInTheDocument();
        expect(timeDate).toBeInTheDocument();
        expect(groupSize).toBeInTheDocument();
        expect(availability).toBeInTheDocument();
    });
});
