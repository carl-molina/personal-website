import React from "react";
import { test, expect, describe } from "vitest";
import { render, screen, fireEvent } from '@testing-library/react';

import Contact from './Contact';


describe("Projects smoke test", function () {
  test('renders without crashing', function () {
      render(<Contact />);
  });
});


describe("Projects snapshot test", function () {
  test('matches snapshot', function () {
      const { container } = render(<Contact />);
      expect(container).toMatchSnapshot();
  });
});
