import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

// Tested by Quaya

describe("The Footer Component", () => {
    test("renders the following items: 4 img", () => {
        render(<Footer />);

        const faceValue = screen.getByAltText('facebook'); 
        const tikValue = screen.getByAltText('tiktok');
        const twitValue = screen.getByAltText('twitter');
        const instaValue = screen.getByAltText('instagram');
        
       

        expect(faceValue).toBeInTheDocument();
        expect(tikValue).toBeInTheDocument();
        expect(twitValue).toBeInTheDocument()
        expect(instaValue).toBeInTheDocument();
        
    })
})

// Tested by Quaya