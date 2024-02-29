import React from "react";
import { test, expect, describe } from "vitest";
import { render, screen, fireEvent } from '@testing-library/react';

import Contact from './Contact';


describe("Contact smoke test", function () {
  test('renders without crashing', function () {
      render(<Contact />);
  });
});


describe("Contact snapshot test", function () {
  test('matches snapshot', function () {
      const { container } = render(<Contact />);
      expect(container).toMatchSnapshot();
  });
});
