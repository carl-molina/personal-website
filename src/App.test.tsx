import React from "react";
import { test, expect, describe } from "vitest";
import { render, screen, fireEvent } from '@testing-library/react';

import App from './App';


describe("App smoke test", function () {
  test('renders without crashing', function () {
      render(<App />);
  });
});


describe("App snapshot test", function () {
  test('matches snapshot', function () {
      const { container } = render(<App />);
      expect(container).toMatchSnapshot();
  });
});
