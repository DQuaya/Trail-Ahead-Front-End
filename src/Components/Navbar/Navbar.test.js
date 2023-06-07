import { render, screen } from "@testing-library/react";
import Navbar from "./Navbar";

// Tested by Quaya
describe("The Navbar Component", () => {
    test("renders the following items: h1, img, about", () => {
        render(<Navbar />);

        const headerValue = screen.getByText('Testing Nav'); 
        
       

        expect(headerValue).toHaveTextContent('Testing Nav');
        
    })
})

// Tested by Quaya