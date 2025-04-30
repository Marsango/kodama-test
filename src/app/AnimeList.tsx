'use client'
import { useEffect, useState } from "react";

type Anime = {
  mal_id: number;
  title: string;
  score: number;
  episodes: number;
  images: {
    jpg: {
      image_url: string;
    };
  };
};

type AnimesAvailable = {
  data: Anime[];
  pagination: any;
};

export default function AnimeList() {
  const [animes, setAnimes] = useState<Anime[]>([]);

  useEffect(() => {
    const fetchAnimes = async () => {
      const res = await fetch("https://api.jikan.moe/v4/anime");
      const json: AnimesAvailable = await res.json();
      setAnimes(json.data);
      console.log(json.data);
    };

    fetchAnimes();
  }, []);

  return (
    <div className="grid grid-cols-[repeat(5,215px)] justify-center align-middle gap-x-12 gap-y-12">
        {animes.map((anime) => (
          <div className="bg-[#B6EADA] flex flex-col justify-top items-center px-1 py-1"  key={anime.mal_id}>
            <img className="h-[305px] w-[215px]" src={anime.images.jpg.image_url} alt={anime.title} />
            <h1 className="whitespace-normal break-words text-center">{anime.title}</h1>
            <span>{anime.score}</span>
            <span>Episódios: {anime.episodes}</span>
          </div>
        ))}
    </div>
  );
}