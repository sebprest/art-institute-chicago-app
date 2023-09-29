import { Artwork } from "../services/artwork/types";

interface ArtworkCardProps {
  artwork: Artwork;
}

function ArtworkCard({ artwork }: ArtworkCardProps) {
  return (
    <figure className="md:flex rounded-xl p-8 md:p-0 bg-slate-800">
      <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
        <h3 className="text-lg font-medium">{artwork.title}</h3>
        <div className="text-sky-400">{artwork.artist_display}</div>
        <div className="text-slate-500">{artwork.date_display}</div>
      </div>
    </figure>
  );
}

export default ArtworkCard;
