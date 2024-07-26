import React, { useEffect } from 'react';
import { useMovieActions } from '@/redux/reducers/movies/movieStateManagement';
import {
  FiltersContainer,
  Label,
  Select,
  SelectWrapper,
} from '@/styled-components/FilterComponent';
import { useMovieData, useMovieFilter } from '@/lib';

export const FilterComponent = () => {
  const { initializeSortByGenre, initializeFilteredMovies } = useMovieActions();
  const { genres } = useMovieData();
  const {
    selectedGenreId,
    setSelectedGenreId,
    selectedYear,
    setSelectedYear,
    selectedScore,
    setSelectedScore,
    selectedPage,
  } = useMovieFilter();
  useEffect(() => {
    if (
      selectedGenreId !== null &&
      selectedYear !== null &&
      selectedScore !== null
    ) {
      initializeFilteredMovies(
        selectedGenreId,
        selectedScore,
        selectedYear,
        selectedPage
      );
    }
  }, [selectedGenreId, selectedYear, selectedScore, initializeFilteredMovies]);

  useEffect(() => {
    initializeSortByGenre();
  }, [initializeSortByGenre]);

  return (
    <FiltersContainer>
      <SelectWrapper>
        <Label>Genre:</Label>
        <Select
          value={selectedGenreId}
          onChange={(e) => setSelectedGenreId(Number(e.target.value))}
        >
          {' '}
          <option value="">Select Genre</option>
          {genres.map((genre) => (
            <option key={genre.id} value={genre.id}>
              {genre.name}
            </option>
          ))}
        </Select>
      </SelectWrapper>
      <SelectWrapper>
        <Label>Year:</Label>
        <Select
          value={selectedYear}
          onChange={(e) => setSelectedYear(Number(e.target.value))}
        >
          {' '}
          <option value="">Select Year</option>
          <option value="">Select Year</option>
          {Array.from({ length: 125 }, (_, i) => 2024 - i).map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </Select>
      </SelectWrapper>
      <SelectWrapper>
        <Label>Score:</Label>
        <Select
          value={selectedScore}
          onChange={(e) => setSelectedScore(Number(e.target.value))}
        >
          {' '}
          <option value="">Select Score</option>
          <option value="">Select Score</option>
          {Array.from({ length: 10 }, (_, i) => i + 1).map((score) => (
            <option key={score} value={score}>
              {score}
            </option>
          ))}
        </Select>
      </SelectWrapper>
    </FiltersContainer>
  );
};
