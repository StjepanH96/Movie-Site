"use client";
import { useState } from 'react'

export const useMovieFilter = () => {
  const [selectedGenreId, setSelectedGenreId] = useState(0);
  const [selectedYear, setSelectedYear] = useState(0);
  const [selectedScore, setSelectedScore] = useState(0);
  const [selectedPage, setSelectedPage] = useState(1);

  return {
    selectedGenreId,
    setSelectedGenreId,
    selectedYear,
    setSelectedYear,
    selectedScore,
    setSelectedScore,
    selectedPage,
    setSelectedPage
  };
}; 