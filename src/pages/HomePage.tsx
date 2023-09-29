import { Link } from "react-router-dom";
import { useGetArtworksQuery } from "../services/artwork";
import ArtworkCard from "../components/ArtworkCard";

function HomePage() {
  const { data, isLoading, error } = useGetArtworksQuery();

  if (isLoading || data === undefined) return <div>Loading...</div>;

  if (error) return <div>Something went wrong</div>;

  return (
    <section>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data.map((artwork) => (
          <li key={artwork.id}>
            <Link to={`/artwork/${artwork.id}`}>
              <ArtworkCard artwork={artwork} />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default HomePage;
