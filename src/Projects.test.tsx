import React from "react";

import { test, describe, expect } from "vitest";
import { render } from '@testing-library/react';
import Projects from "./Projects";


describe("Projects smoke test", function () {
    test('renders without crashing', function () {
        render(<Projects />);
    });
});

describe('Projects renders correct data', function () {
    test('contains expected text', function () {
        const res = render(<Projects />);
        expect(res.queryByText('Jobly 👩🏽‍💼')).toBeInTheDocument();
        expect(res.queryByText('Pix.ly 📷')).toBeInTheDocument();
        expect(res.queryByText('Plant App 🌱')).toBeInTheDocument();
    });
    test('does not contain other component text', function () {
        const res = render(<Projects />);
        expect(res.queryByText('Software Engineer')).not.toBeInTheDocument();
        expect(res.queryByText('Sunnyvale, CA')).not.toBeInTheDocument();
        expect(res.queryByText('carl@carlmolina.com')).not.toBeInTheDocument();
    });
});


describe('Projects snapshot test', function () {
    test('matches snapshot', function () {
        const { container } = render(<Projects />);
        expect(container).toMatchSnapshot();
    });
});
