import AnimeList from "./AnimeList";

export default async function Home() {
  return (
    <div className="flex overflow-auto justify-center">
      <AnimeList></AnimeList>
    </div>
  );
}
