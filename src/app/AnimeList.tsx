"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

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

type AnimeListProps = {
  searchText: string;
};

const calculateColumnWidth = () => {
  const newColumnWidth = (window.innerWidth * 5) / 6 / 5 - 50;
  return newColumnWidth;
};

export default function AnimeList({ searchText }: AnimeListProps) {
  const [animes, setAnimes] = useState<Anime[]>([]);
  const [desiredData, setDesiredData] = useState<Anime[]>([]);
  const [currentWidth, setCurrentWidth] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<bool>(true);

  useEffect(() => {
    const updateList = () => {
      setCurrentWidth(calculateColumnWidth());
    };

    updateList();

    window.addEventListener("resize", updateList);

    return () => {
      window.removeEventListener("resize", updateList);
    };
  }, []);

  useEffect(() => {
    const newDesiredData: Anime[] = animes.filter((anime) =>
      anime.title.toLowerCase().includes(searchText.toLowerCase())
    );
    setDesiredData(newDesiredData);
  }, [searchText, animes]);

  useEffect(() => {
    const fetchAnimes = async () => {
      const res = await fetch("https://api.jikan.moe/v4/anime");
      const json: AnimesAvailable = await res.json();
      setAnimes(json.data);
      setIsLoading(false);
    };

    fetchAnimes();
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="flex justify-center items-center"><
            p className="text-white font-bold">Carregando...</p></div>
      ) : (
        <div
          className="grid justify-center align-middle gap-x-12 gap-y-12 overflow-y-auto overflow-x-hidden p-5"
          style={{
            gridTemplateColumns: `repeat(5, ${currentWidth}px)`,
          }}
        >
          {desiredData.map((anime) => (
            <Link
              href={`/anime/${anime.mal_id}`}
              className="bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 p-3 text-white flex flex-col items-center cursor-pointer"
              key={anime.mal_id}
            >
              <img
                className="h-[305px] w-[215px]"
                src={anime.images.jpg.image_url}
                alt={anime.title}
              />
              <h1 className="whitespace-normal break-words text-center">
                {anime.title}
              </h1>
              <span>⭐{anime.score}</span>
              <span>Episodes: {anime.episodes}</span>
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
