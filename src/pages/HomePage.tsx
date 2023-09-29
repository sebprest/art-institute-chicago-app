import { Link, useNavigate, useParams } from "react-router-dom";
import { useGetArtworksByPageQuery } from "../services/artwork";
import ArtworkCard from "../components/ArtworkCard";

function HomePage() {
  const { page } = useParams();
  const currentPage = page || "1";
  const navigate = useNavigate();
  const { data, isLoading, isFetching, error } =
    useGetArtworksByPageQuery(page);

  if (isLoading || isFetching || data === undefined)
    return <div>Loading...</div>;

  if (error) return <div>Something went wrong</div>;

  function handleBackButtonClick() {
    navigate(`/${Number(currentPage) - 1}`);
  }

  function handleNextButtonClick() {
    navigate(`/${Number(currentPage) + 1}`);
  }

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
      <div className="flex justify-between mt-4">
        <button
          className="bg-slate-800 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleBackButtonClick}
          disabled={currentPage === "1"}
        >
          Back
        </button>
        <button
          className="bg-slate-800 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleNextButtonClick}
        >
          Next
        </button>
      </div>
    </section>
  );
}

export default HomePage;
