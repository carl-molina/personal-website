import React from "react";
import { test, expect, describe } from "vitest";
import { render, screen, fireEvent } from '@testing-library/react';

import Contact from './Contact';


describe("Contact smoke test", function () {
  test('renders without crashing', function () {
      render(<Contact />);
  });
});

describe('Contact renders correct data', function () {
  test('contains expected text', function () {
      const res = render(<Contact />);
      expect(res.queryByText('carl@carlmolina.com')).toBeInTheDocument();
  });
  test('does not contain other component text', function () {
    const res = render(<Contact />);
    expect(res.queryByText('Software Engineer')).not.toBeInTheDocument();
    expect(res.queryByText('Sunnyvale, CA')).not.toBeInTheDocument();
    expect(res.queryByText('Jobly 👩🏽‍💼')).not.toBeInTheDocument();
});
});


describe("Contact snapshot test", function () {
  test('matches snapshot', function () {
      const { container } = render(<Contact />);
      expect(container).toMatchSnapshot();
  });
});
