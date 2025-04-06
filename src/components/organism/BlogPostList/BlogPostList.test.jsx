import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";

import BlogPostList from "./index";
import BLOG_POSTS from "../../../constants/mockData";

vi.mock("../../molecules/BlogPostItem", () => ({
  default: ({ title, id }) => (
    <div data-testid={`blog-post-${id}`}>
      <h2>{title}</h2>
    </div>
  ),
}));

describe("BlogPostList", () => {
  it("renders blog posts correctly", () => {
    render(<BlogPostList />);

    BLOG_POSTS.forEach((blog) => {
      const blogPostElement = screen.getByTestId(`blog-post-${blog.id}`);
      expect(blogPostElement).toBeInTheDocument();
      expect(blogPostElement).toHaveTextContent(blog.title);
    });
  });

  it("renders 'No blog posts available' when there are no blog posts", () => {
    vi.mock("../../../constants/mockData", () => ({
      default: [],
    }));

    render(<BlogPostList />);

    expect(screen.getByText("No blog posts available.")).toBeInTheDocument();
  });
});
