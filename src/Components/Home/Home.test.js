import { render, screen } from "@testing-library/react";
import Home from "./Home";

// Tested by Quaya
describe("The Home Component", () => {
    test("renders the following items: h1, img, about", () => {
        render(<Home />);

        const headerValue = screen.getByText('Trail Ahead'); 
        const pValue = screen.getByText('Blah');
        const imageValue = screen.getByAltText('heroImage');
        const button2Element = screen.getByRole("button", {
            name: /Get Started/i,
        })
        const buttonElement = screen.getByRole("button", {
            name: /More Info/i,
        });

        expect(headerValue).toHaveTextContent('Trail Ahead');
        expect(buttonElement).toBeInTheDocument();
        expect (imageValue).toBeInTheDocument()
        expect(pValue).toHaveTextContent('Blah')
        expect(button2Element).toBeInTheDocument();
    })
})

// Tested by Quaya