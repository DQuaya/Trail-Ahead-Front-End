import { render, screen } from "@testing-library/react";
import Navbar from "./Navbar";

// Tested by Quaya

describe("The Navbar Component", () => {
    test("renders the following fields: first name, last name, email, password, confirm password, age, gender, experience, and a sign up button", () => {
        render(<Signup />);

        const firstName = screen.getByPlaceholderText(/First Name/i);
        const lastName = screen.getByPlaceholderText(/Last Name/i);
        const password = screen.getByPlaceholderText(/Password/i);
        const confirm = screen.getByPlaceholderText(/Confirm Password/i);
        const email = screen.getByPlaceholderText(/Email/i);
        const age = screen.getByPlaceholderText(/Age/i);
        const gender = screen.getByPlaceholderText(/Gender/i);
        const experience = screen.getByPlaceholderText(/Experience/i);
        const loginLink = screen.getByRole("link", {
            name: /Sign in/i,
        });
        const buttonElement = screen.getByRole("button", {
            name: /Sign up/i,
        });

        expect(firstName).toBeInTheDocument();
        expect(lastName).toBeInTheDocument();
        expect(email).toBeInTheDocument();
        expect(password).toBeInTheDocument();
        expect(age).toBeInTheDocument();
        expect(gender).toBeInTheDocument();
        expect(experience).toBeInTheDocument();
        expect(buttonElement).toBeInTheDocument();
        expect(confirm).toBeInTheDocument();
        expect(loginLink).toBeInTheDocument();
    });

    test("", () => {});
});


// Tested by Quaya