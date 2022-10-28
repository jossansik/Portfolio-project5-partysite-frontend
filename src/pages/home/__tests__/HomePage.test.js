import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { CurrentUserProvider } from "../../../contexts/CurrentUserContext";
import HomePage from "../HomePage";

test("expect Halloween to be found as category", async () => {
  render(
    <Router>
      <CurrentUserProvider>
        <HomePage />
      </CurrentUserProvider>
    </Router>
  );

  const categoryName = await screen.findByText("Halloween")
  expect(categoryName).toBeTruthy();
});
