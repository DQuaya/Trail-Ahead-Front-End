import { render, screen } from "@testing-library/react";
import Home from "./Home";

// Tested by Quaya
describe("The Home Component", () => {
    test("renders the following items: h1, img, about", () => {
        render(<Home />);

        const headerValue = screen.getByText('Home'); 
        const pValue = screen.getByText('Blah')
        const imageValue = screen.getByAltText('heroImage')
        const buttonElement = screen.getByRole("button", {
            name: /More Info/i,
        });

        expect(headerValue).toHaveTextContent('Home');
        expect(buttonElement).toBeInTheDocument();
        expect (imageValue).toBeInTheDocument()
        expect(pValue).toHaveTextContent('Blah')
    })
})

// Tested by Quaya