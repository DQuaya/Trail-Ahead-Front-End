import { render, screen } from "@testing-library/react";
import CoverImage from "./CoverImage";

// Tested by Quaya
describe("The CoverImage Component", () => {
    test("renders the following items: coverimag", () => {
        render(<CoverImage />);

        const coverValue = screen.getByAltText('cover'); 
        
        expect(coverValue).toBe('cover');
        
        
        ;
    })
})

// Tested by Quaya