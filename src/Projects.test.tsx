import React from "react";

import { test, afterEach, describe, expect, vi } from "vitest";
import { render, fireEvent, screen } from '@testing-library/react';
import Projects from "./Projects";


describe("Projects smoke test", function () {
    test('renders without crashing', function () {
        render(<Projects />);
    });
});


describe("Projects snapshot test", function () {
    test('matches snapshot', function () {
        const { container } = render(<Projects />);
        expect(container).toMatchSnapshot();
    });
});


// describe("Projects renders correct data", function () {
//     test('contains expected text', function () {
//         const res = render(<Projects />);
//         expect(res.queryByText('Welcome back CARL!')).toBeInTheDocument();
//         expect(res.queryByText('❌ Include a number')).toBeInTheDocument();
//         expect(res.queryByText('❌ Password must match')).toBeInTheDocument();
//     });

//     test('button attribute set to disabled on initial render', function () {
//         const { container } = render(<Projects />);
//         const btn = container.querySelector('button')!;
//         expect(btn.getAttribute('disabled')).toBeDefined();
//         expect(btn).toBeDisabled();
//     });
// });


// describe("Projects valid inputting and submitting", function () {
//     test('returns valid form changes andcalled',
//         async function () {
//             const { container } = render(
//                 <Projects />
//             );

//             const submitBtn = container.querySelector("button")!;
//             const newPwInput = container.querySelector(
//                 `input[name="newPw"]`) as HTMLInputElement;
//             const confirmPwInput = container.querySelector(
//                 `input[name="confirmNewPw"]`) as HTMLInputElement;

//             expect(submitBtn).toContainHTML("Reset Password");
//             expect(newPwInput).toHaveValue("");

//             fireEvent.change(newPwInput, { target: { value: "ABC123abc" } });

//             expect(newPwInput).toHaveValue("ABC123abc");
//             expect(confirmPwInput).toHaveValue("");

//             fireEvent.change(
//                 confirmPwInput,
//                 {
//                     target: {
//                         value: "ABC123abc"
//                     }
//                 }
//             );

//             expect(confirmPwInput).toHaveValue("ABC123abc");

//             fireEvent.click(submitBtn);

//             expect.toHaveBeenCalledTimes(1);
//         });

//     test('returns valid form changes and form submit',
//         async function () {
//             const { container } = render(
//                 <Projects{checkSubmit} />
//             );

//             function checkSubmit(formData: IPasswordFormData): void {
//                 expect(formData.newPw).toEqual("ABC123abc");
//                 expect(formData.confirmNewPw).toEqual("ABC123abc");
//             }

//             const submitBtn = container.querySelector("button")!;
//             const newPwInput = container.querySelector(
//                 `input[name="newPw"]`) as HTMLInputElement;

//             expect(newPwInput).toHaveValue("");

//             fireEvent.change(newPwInput, { target: { value: "ABC123abc" } });
//             const confirmPw = container.querySelector(
//                 `input[name="confirmNewPw"]`) as HTMLInputElement;

//             expect(confirmPw).toHaveValue("");

//             fireEvent.change(confirmPw, { target: { value: "ABC123abc" } });
//             fireEvent.click(submitBtn);
//         });
// });


// describe("Projects invalid inputs", function () {
//     test("input does not meet 1 uppercase letter password requirement",
//         async function () {
//             render(<Projects />);

//             const submitBtn = screen.getByRole(
//                 'button',
//                 {
//                     name: 'Reset Password'
//                 }
//             );

//             const newPwInput = screen.getByRole(
//                 'textbox',
//                 {
//                     name: 'Enter new password *'
//                 }
//             );

//             expect(submitBtn).toBeDisabled();
//             expect(newPwInput).toHaveValue("");

//             fireEvent.change(newPwInput, { target: { value: "abc123test" } });
//             await screen.findByText('❌ Include an uppercase letter');
//             expect(submitBtn).toBeDisabled();
//         });
//     test("input does not meet 1 lowercase letter password requirement",
//         async function () {
//             render(<Projects />);

//             const submitBtn = screen.getByRole(
//                 'button',
//                 {
//                     name: 'Reset Password'
//                 }
//             );

//             const newPwInput = screen.getByRole(
//                 'textbox',
//                 {
//                     name: 'Enter new password *'
//                 }
//             );

//             expect(submitBtn).toBeDisabled();
//             expect(newPwInput).toHaveValue("");

//             fireEvent.change(newPwInput, { target: { value: "ABC123TEST" } });
//             await screen.findByText('❌ Include a lowercase letter');
//             expect(submitBtn).toBeDisabled();
//         });
//     test("input does not meet 1 number password requirement",
//         async function () {
//             render(<Projects />);

//             const submitBtn = screen.getByRole(
//                 'button',
//                 {
//                     name: 'Reset Password'
//                 }
//             );

//             const newPwInput = screen.getByRole(
//                 'textbox',
//                 {
//                     name: 'Enter new password *'
//                 }
//             );

//             expect(submitBtn).toBeDisabled();
//             expect(newPwInput).toHaveValue("");

//             fireEvent.change(newPwInput, { target: { value: "ABCdefGHI" } });
//             await screen.findByText('❌ Include a number');
//             expect(submitBtn).toBeDisabled();
//         });
//     test("newPw does not match confirmNewPw", async function () {
//         render(<Projects />);

//         const submitBtn = screen.getByRole(
//             'button',
//             {
//                 name: 'Reset Password'
//             }
//         );
//         const newPwInput = screen.getByRole(
//             'textbox',
//             {
//                 name: 'Enter new password *'
//             }
//         );
//         const confirmPwInput = screen.getByRole(
//             'textbox',
//             {
//                 name: 'Confirm password *'
//             }
//         );

//         expect(submitBtn).toBeDisabled();
//         expect(newPwInput).toHaveValue("");
//         expect(confirmPwInput).toHaveValue("");

//         fireEvent.change(newPwInput, { target: { value: "ABC123abc" } });
//         fireEvent.change(confirmPwInput, { target: { value: "ABC123test" } });
//         await screen.findByText('❌ Password must match');
//         expect(submitBtn).toBeDisabled();
//     });
// });
