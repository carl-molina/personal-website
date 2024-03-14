import React from "react";
import { test, expect, describe } from "vitest";
import { render } from '@testing-library/react';

import Intro from './Intro';


describe("Intro smoke test", function () {
  test('renders without crashing', function () {
      render(<Intro />);
  });
});

describe('Intro renders correct data', function () {
  test('contains expected text', function () {
    const res = render(<Intro />);
    expect(res.queryByText('Software Engineer')).toBeInTheDocument();
    expect(res.queryByText('Sunnyvale, CA')).toBeInTheDocument();
  });
  test('does not contain other component text', function () {
    const res = render(<Intro />);
    expect(res.queryByText('carl@carlmolina.com')).not.toBeInTheDocument();
    expect(res.queryByText('Jobly 👩🏽‍💼')).not.toBeInTheDocument();
    expect(res.queryByText('Pix.ly 📷')).not.toBeInTheDocument();
    expect(res.queryByText('Plant App 🌱')).not.toBeInTheDocument();
  });
});


describe("Intro snapshot test", function () {
  test('matches snapshot', function () {
      const { container } = render(<Intro />);
      expect(container).toMatchSnapshot();
  });
});
