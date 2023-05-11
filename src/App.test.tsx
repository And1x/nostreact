import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter, MemoryRouter } from "react-router-dom";

import App from "./App";

test("app rendering and user navigation", async () => {
  render(<App />, { wrapper: BrowserRouter });
  const user = userEvent.setup();

  expect(screen.getByText(/What is Nostr/i)).toBeInTheDocument();

  await user.click(screen.getByText(/resources/i));
  expect(screen.getByText(/NOSTR - Resources/i)).toBeInTheDocument();
});

test("page not found", () => {
  const invalidRoute = "/route/not/found";

  // <MemoryRouter> is used to manually control the history
  render(
    <MemoryRouter initialEntries={[invalidRoute]}>
      <App />
    </MemoryRouter>
  );

  expect(screen.getByText(/404 page not found/i)).toBeInTheDocument();
});

// tbd route for text search without prefixes like note or npub
test("tbd route", async () => {
  render(<App />, { wrapper: BrowserRouter });
  const user = userEvent.setup();

  const searchEl = screen.getByPlaceholderText("npub, note, hex...");

  expect(searchEl).toBeInTheDocument();

  const someText = "some random text";

  await userEvent.type(searchEl, someText);

  expect(searchEl).toHaveValue(someText);

  // send request
  await userEvent.click(screen.getByText("🔎"));
  expect(screen.getByText(/Coming Soon/i)).toBeInTheDocument();
});
