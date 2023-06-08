import { render, screen } from '@testing-library/react'
import HikeList from './HikeList'

describe("The HikeList Component", () => {
    test("renders the title", () => {
        render(<HikeList />)

        const title = screen.getByText(/Available Hikes/i);

        expect(title).toBeInTheDocument();
    })

    test("", () => {
        
    })
})