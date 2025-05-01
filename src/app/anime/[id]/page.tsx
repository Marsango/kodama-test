import { notFound } from "next/navigation";
import Header from "../../Header";

type AnimeDetail = {
  data: {
    mal_id: number;
    title: string;
    synopsis: string;
    score: number;
    episodes: number;
    images: {
      jpg: {
        large_image_url: string;
      };
    };
    genres: { name: string }[];
    rating: string;
    status: string;
    season: string;
    year: string;
  };
};

export default async function AnimePage({
  params,
}: {
  params: { id: string };
}) {
  const res = await fetch(`https://api.jikan.moe/v4/anime/${params.id}`);

  if (!res.ok) return notFound();

  const json: AnimeDetail = await res.json();
  const anime = json.data;
  const fields = "font-bold";
  return (
    <>
      <Header setSearchText={null} isAnimePage={true}></Header>
      <div className="flex flex-auto justify-start gap-20 text-white px-5 overflow-auto">
        <div className="flex flex-col items-center w-2/6">
          <h1 className="text-3xl font-bold my-2">{anime.title}</h1>
          <img
            src={anime.images.jpg.large_image_url}
            alt={anime.title}
            className="h-full mb-4"
          />
        </div>
        <div className="flex flex-col max-w-5/11 justify-end gap-2">
          <p className="mb-2">
            <span className={fields}>Score:</span> {anime.score}
          </p>
          <p className="mb-2">
            <span className={fields}>Episodes: </span>
            {anime.episodes}
          </p>
          <p className="mb-2">
            <span className={fields}>Year/season of release:</span> {anime.year}
            , {anime.season}
          </p>
          <p className="mb-2">
            <span className={fields}>Rating:</span> {anime.rating}
          </p>
          <p>
            {" "}
            <span className={fields}>Genres:</span>{" "}
            {anime.genres.map((genre, index) =>
              index === anime.genres.length - 1 ? (
                <span key={index}>{genre.name}.</span>
              ) : (
                <span key={index}> {genre.name}, </span>
              )
            )}
          </p>
          <p className="font-bold border-b-1 border-white">Sinopsis</p>
          <p className="mb-4">{anime.synopsis}</p>
        </div>
      </div>
    </>
  );
}
