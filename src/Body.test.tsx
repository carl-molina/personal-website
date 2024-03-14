import React from "react";
import { test, expect, describe } from "vitest";
import { render } from '@testing-library/react';

import Body from './Body';


describe("Body smoke test", function () {
  test('renders without crashing', function () {
      render(<Body />);
  });
});

describe('Body renders correct data', function () {
  test('contains expected text', function () {
      const res = render(<Body />);
      expect(res.queryByText('Experience')).toBeInTheDocument();
      expect(res.queryByText('Education')).toBeInTheDocument();
      expect(res.queryByText('Bachelor of Arts, Screenwriting')).toBeInTheDocument();
  });
});

describe("Body snapshot test", function () {
  test('matches snapshot', function () {
      const { container } = render(<Body />);
      expect(container).toMatchSnapshot();
  });
});
