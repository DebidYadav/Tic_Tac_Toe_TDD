import React from "react";
import Square from "./Board";
import Board from "./Board";
import { fireEvent, render, screen } from "@testing-library/react";


describe("Checking crash", ()=>{
    it('Checking if Square renders without crashing', () => {
        render(<Square/>);
      });
      it('Checking if board renders without crashing', () => {
        render(<Board/>);
      });
});

describe("If Board is displayed",()=>{
    it("Should be enable",()=>{
        render(<Square/>);
        const buttons = screen.getAllByRole("button");
        buttons.forEach((button)=>{
            expect(button).not.toBeDisabled();
        }) 
    });
    it("There should be 9 squares",()=>{
        render(<Board/>)
        const squares = screen.getAllByRole("button");
        expect(squares.length).toBe(9);
    });
});

describe("Checking if value in the square is chenged or not after clicking", () => {
    test("Changed to X in first click", () => {
      render(<Square />);
      const buttons = screen.getAllByRole("button")
      fireEvent.click(buttons[1]);
      fireEvent.click(buttons[2]);    
      expect(buttons[1].textContent).toBe("X");
    });
    test("Changed to O on second click", () => {
        render(<Square />);
        const buttons = screen.getAllByRole("button")
        fireEvent.click(buttons[1]);
        fireEvent.click(buttons[2]);
        expect(buttons[2].textContent).toBe("O");
      });
  });