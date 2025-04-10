import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import { describe, it, expect, vi } from "vitest";

import App from "./App";

vi.mock("./components/organism/BlogPostList/index.jsx", () => ({
  default: () => <div>Mock BlogPostList</div>,
}));

describe.skip("App", () => {
  it("renders Home component on / route", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText("Blog Posts")).toBeInTheDocument();
  });

  it("renders mocked BlogPostList component", () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText("Mock BlogPostList")).toBeInTheDocument();
  });

  it("renders BlogComponent for /posts/:id route", () => {
    render(
      <MemoryRouter initialEntries={["/posts/123"]}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText("Post not found.")).toBeInTheDocument();
  });
});
