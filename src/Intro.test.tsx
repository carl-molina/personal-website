import React from "react";
import { test, expect, describe } from "vitest";
import { render, screen, fireEvent } from '@testing-library/react';

import Intro from './Intro';


describe("Projects smoke test", function () {
  test('renders without crashing', function () {
      render(<Intro />);
  });
});


describe("Projects snapshot test", function () {
  test('matches snapshot', function () {
      const { container } = render(<Intro />);
      expect(container).toMatchSnapshot();
  });
});
