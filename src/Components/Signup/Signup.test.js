import { render, screen } from "@testing-library/react";
import Signup from "./Signup";

describe("The Signup Component", () => {
    test("renders the following fields: first name, last name, email, password, age, sex, experience, and a sign up button", () => {
        render(<Signup />);

        const firstName = screen.getByPlaceholderText(/Enter first name here.../i);
        const lastName = screen.getByPlaceholderText(/Enter last name here.../i);
        const password = screen.getByPlaceholderText(/Enter password here.../i);
        const confirm = screen.getByPlaceholderText(/Confirm password here.../i);
        const email = screen.getByPlaceholderText(/Enter email here.../i);
        const age = screen.getByPlaceholderText(/Enter age here.../i);
        const sex = screen.getByPlaceholderText(/Enter sex here.../i);
        const experience = screen.getByPlaceholderText(/Enter experience here.../i);
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
        expect(sex).toBeInTheDocument();
        expect(experience).toBeInTheDocument();
        expect(buttonElement).toBeInTheDocument();
        expect(confirm).toBeInTheDocument();
        expect(loginLink).toBeInTheDocument();
    })

    test("", () => {

    })
})