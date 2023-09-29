import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import ArtworkCard from "./ArtworkCard";

const artwork = {
  id: "1",
  title: "Mona Lisa",
  artist_display: "Leonardo da Vinci",
  date_display: "c. 1503-1506",
};

describe("ArtworkCard", () => {
  it("renders the artwork title", () => {
    render(<ArtworkCard artwork={artwork} />);
    const titleElement = screen.getByText(artwork.title);
    expect(titleElement).toBeDefined();
  });

  it("renders the artwork artist", () => {
    render(<ArtworkCard artwork={artwork} />);
    const artistElement = screen.getByText(artwork.artist_display);
    expect(artistElement).toBeDefined();
  });

  it("renders the artwork date", () => {
    render(<ArtworkCard artwork={artwork} />);
    const dateElement = screen.getByText(artwork.date_display);
    expect(dateElement).toBeDefined();
  });
});
