import { useGetArtworkByNameQuery } from "../services/artwork";
import { useParams } from "react-router-dom";

function ArtworkPage() {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading, error } = useGetArtworkByNameQuery(id as string);

  if (isLoading || data === undefined) return <div>Loading...</div>;

  if (error) return <div>Something went wrong</div>;

  return (
    <section className="flex md:flex-row flex-col">
      <img
        className="w-1/3 flex-none"
        src={`https://www.artic.edu/iiif/2/${data.image_id}/full/843,/0/default.jpg`}
        alt={data.title}
      />
      <div className="mx-4">
        <h2 className="text-xl text-white">{data.title}</h2>
        <p className="text-sky-400">{data.artist_display}</p>
        <div className="text-slate-500">{data.date_display}</div>
        <p>{data.term_titles.join(", ")}</p>
        <p className="my-4">{data.provenance_text}</p>
        <p>{data.copyright_notice}</p>
      </div>
    </section>
  );
}

export default ArtworkPage;
