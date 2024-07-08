import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { expect, test } from "vitest";

import App from "@/App";

test("Should render App", async () => {
  render(<App />);

  const currentTemp = await screen.findByText(
    /Current Temperature: -?\d*\.?\d+/,
  );
  expect(currentTemp).toBeInTheDocument();

  const counterButton = screen.getByRole("button", { name: /^count is/ });

  await userEvent.click(counterButton);

  expect(
    screen.getByRole("button", { name: "count is 1" }),
  ).toBeInTheDocument();
});
