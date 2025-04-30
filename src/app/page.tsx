import AnimeList from "./AnimeList";
import Header from "./Header.jsx";

export default async function Home() {
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <Header></Header>
      <AnimeList></AnimeList>
    </div>
  );
}
