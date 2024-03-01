import Contact from "../Contact";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";


describe("should load the contact us page",()=>{
  beforeAll(()=>{
    console.log('before all test cases')
  })

  beforeEach(()=>{
    console.log('before ech test case')
  })

  afterAll(()=>{
    console.log("after all test cases")
  })

  afterEach(()=>{
    console.log("after each tes case")
  })

    test("should return the header", () => {
        render(<Contact />);
        const heading = screen.getByRole("heading");
        expect(heading).toBeInTheDocument();
      });
      
      test("should return 3 input boxes", () => {
        render(<Contact />);
        const input = screen.getAllByRole("textbox");
        expect(input.length).toBe(3);
      });

      test("should not return 2 input boxes", () => {
        render(<Contact />);
        const input = screen.getAllByRole("textbox");
        expect(input.length).not.toBe(2);
      });
      
      it("should return the button text", () => {
        render(<Contact />);
        const button = screen.getByText("SUBMIT");
        expect(button).toBeInTheDocument();
      });
      
      it("should return the placeholder text", () => {
        render(<Contact />);
        const placeholder = screen.getByPlaceholderText("YOUR NAME");
        expect(placeholder).toBeInTheDocument();
      });
})

