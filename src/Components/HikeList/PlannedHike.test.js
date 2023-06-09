import { render, screen } from '@testing-library/react'
import PlannedHike from './PlannedHike'

describe("The PlannedHike component", () => {
    test("renders the following fields: name, picture, experience, time/date, group size, availability", () => {
        render(<PlannedHike />)
        const name = screen.getByText(/John Doe/i)
        const picture = screen.getByAltText(/picture of John Doe/i)
        const experience = screen.getByText(/experience/i);
        const timeDate = screen.getByText(/time date/i);
        const groupSize = screen.getByText(/group size/i);
        const availability = screen.getByText(/active/i)

    })
  
})