import React from "react";
import { test, expect, describe } from "vitest";
import { render, screen, fireEvent } from '@testing-library/react';

import Body from './Body';


describe("Projects smoke test", function () {
  test('renders without crashing', function () {
      render(<Body />);
  });
});


describe("Projects snapshot test", function () {
  test('matches snapshot', function () {
      const { container } = render(<Body />);
      expect(container).toMatchSnapshot();
  });
});
