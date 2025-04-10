import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, it, expect, vi } from "vitest";

import BlogComponent from "./index";
import BLOG_POSTS from "../../utilities/mockData";
import { formatDate } from "../../utilities/helpers";

describe("Blog Component when post exists", () => {
  vi.mock("./index.jsx", () => ({
    default: () => (
      <div>
        <h1>{BLOG_POSTS[1].title}</h1>
        <h4>Published on {formatDate(BLOG_POSTS[1].date)}</h4>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
            libero! Sequi neque rem maiores quo iste aspernatur. Ea vitae
            ratione, harum laudantium possimus non! Dignissimos nihil voluptate
            culpa quidem dolore!
          </p>
        </div>
      </div>
    ),
  }));

  it("renders correct title", async () => {
    render(
      <MemoryRouter initialEntries={["/posts/2"]}>
        <BlogComponent />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByText(BLOG_POSTS[1].title)).toBeInTheDocument();
    });
  });
});
