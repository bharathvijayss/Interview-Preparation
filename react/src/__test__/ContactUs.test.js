import { render, screen } from "@testing-library/react";
import ContactUs from "../components/ContactUs";
import "@testing-library/jest-dom";


it('ContactUs component renders correctly', () => {
    render(<ContactUs />);

    const heading = screen.getByRole('heading');

    expect(heading).toBeInTheDocument();
});