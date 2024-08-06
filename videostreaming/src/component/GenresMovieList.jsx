/* eslint-disable react/jsx-key */
// import React from "react";
import GenresList from "../constants/GenresList";
import MovieList from "./MovieList";

export default function GenresMovieList() {
  return (
    <div>
      {GenresList.genere.map(
        (item, index) =>
          index <= 4 && (
            <div className="p-8 px-8 md:px-16">
              <h2 className="text-[20px] text-white font-bold">{item.name}</h2>
              <MovieList genreId={item.id} index_={index} />
            </div>
          )
      )}
    </div>
  );
}
