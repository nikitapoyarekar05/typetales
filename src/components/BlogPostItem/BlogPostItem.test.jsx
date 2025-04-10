import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { MemoryRouter } from "react-router-dom";

import BlogPostItem from "./index";

describe("BlogPostItem Component", () => {
  const mockPost = {
    title: "I am test title",
    summary: "I am test summary of the blog post.",
    date: "2025-03-10",
    id: "1",
  };

  it("renders the blog post's - title, summary, link and formatted date", () => {
    render(
      <MemoryRouter>
        <BlogPostItem {...mockPost} />
      </MemoryRouter>
    );

    const linkElement = screen.getByRole("link");

    expect(screen.getByText(mockPost.title)).toBeInTheDocument();
    expect(screen.getByText(mockPost.summary)).toBeInTheDocument();
    expect(linkElement).toHaveAttribute("href", mockPost.url);
    expect(screen.getByTestId("date")).toBeInTheDocument();
  });
});
