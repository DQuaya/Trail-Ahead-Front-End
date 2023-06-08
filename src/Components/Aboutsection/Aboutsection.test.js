import { render, screen } from "@testing-library/react";
import Aboutsection from "./Aboutsection";
// import AboutPage from '../About/AboutPage'

// Tested by Quaya
describe("The Aboutsection Component", () => {
    test("renders the following items: span,", () => {
        render(<Aboutsection />);

        const rightR = screen.getByText('About Trail Ahead'); 
        const detailsR = screen.getByText('Where Hikers Meet Hikers');

        

        expect(rightR).toBeInTheDocument('About Trail Ahead');
        expect (detailsR).toBeInTheDocument('Where Hikers Meet Hikers')
        
    })
})

// Tested by Quaya