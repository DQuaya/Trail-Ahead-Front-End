import { render, screen } from "@testing-library/react";
import Home from "./Home";

// Tested by Quaya
describe("The Home Component", () => {
    test("renders the following items: h3, h1, p,link btn", () => {
        render(<Home />);

        const homeValue = screen.getByText('Trail Ahead offers a quick and easy way for'); 
        const sloganValue = screen.getByText('Hikers');
        const detailsValue = screen.getByText('Go checkout the avaliable Hikes');
        

        expect(homeValue).toHaveTextContent('Trail Ahead offers a quick and easy way for');
        
        expect (detailsValue).toBeInTheDocument('Go checkout the avaliable Hikes')
        expect(sloganValue).toHaveTextContent('Hikers');
    })
})

// Tested by Quaya