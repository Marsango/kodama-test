"use client";

import AnimeList from "./AnimeList";
import { useState } from "react";
import Header from "./Header";

export default function Home() {
  const [searchText, setSearchText] = useState<string>("");

  return (
    <div className="flex flex-col justify-start w-full overflow-y-auto">
      <Header setSearchText={setSearchText} isAnimePage={false}></Header>
      <AnimeList searchText={searchText}></AnimeList>
    </div>
  );
}
