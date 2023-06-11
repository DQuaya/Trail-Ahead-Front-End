import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("The Button Component", () => {
    test("renders the following fields: a getting started button", () => {
        render(<Button />);

        
        const buttonElement = screen.getByRole("button", {
            name: /Get Started/i,
        });

        
        expect(buttonElement).toBeInTheDocument();
       
    });

    test("", () => {});
});


//Tested By Quaya