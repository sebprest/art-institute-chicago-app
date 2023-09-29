import { Link, useNavigate, useParams } from "react-router-dom";
import { useGetArtworksByPageQuery } from "../services/artwork";
import ArtworkCard from "../components/ArtworkCard";

function HomePage() {
  const { page = "1" } = useParams();
  const navigate = useNavigate();
  const { data, isLoading, isFetching, error } =
    useGetArtworksByPageQuery(page);

  if (isLoading || isFetching || data === undefined)
    return <div>Loading...</div>;

  if (error) return <div>Something went wrong</div>;

  if(Number(page) > data.pagination.total_pages) {
    navigate(`/${data.pagination.total_pages}`)
  }

  function handleBackButtonClick() {
    navigate(`/${Number(page) - 1}`);
  }

  function handleNextButtonClick() {
    navigate(`/${Number(page) + 1}`);
  }

  const { data: artworks, pagination } = data;

  return (
    <section>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {artworks.map((artwork) => (
          <li key={artwork.id}>
            <Link to={`/artwork/${artwork.id}`}>
              <ArtworkCard artwork={artwork} />
            </Link>
          </li>
        ))}
      </ul>
      <div className="flex justify-between mt-4">
        <button
          className="bg-slate-800 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleBackButtonClick}
          disabled={page === "1"}
        >
          Back
        </button>
        <span>
          Page {page} of {pagination.total_pages}
        </span>
        <button
          className="bg-slate-800 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleNextButtonClick}
          disabled={Number(page) >= pagination.total_pages}
        >
          Next
        </button>
      </div>
    </section>
  );
}

export default HomePage;
