import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Movie } from "../redux/reducers/movies/movieSlice";

interface FavoritesContextType {
  favorites: number[];
  addFavoriteById: (movieId: number) => void;
  removeFavoriteById: (movieId: number) => void;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export const FavoriteContextProvider = ({ children, movies }: { children: ReactNode, movies: Movie[] }) => {
    const [favorites, setFavorites] = useState<number[]>([]);

    useEffect(() => {
        const storedFavorites = localStorage.getItem('favorites');
        if (storedFavorites) {
            const favoriteIds: number[] = JSON.parse(storedFavorites);
            setFavorites(favoriteIds);
        }
    }, []);

    const addFavoriteById = (movieId: number) => {
        if (!favorites.includes(movieId)) {
            const updatedFavorites = [...favorites, movieId];
            setFavorites(updatedFavorites);
            localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
        }
    };

    const removeFavoriteById = (movieId: number) => {
        const updatedFavorites = favorites.filter(id => id !== movieId);
        setFavorites(updatedFavorites);
        localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    };

    return (
        <FavoritesContext.Provider value={{ favorites, addFavoriteById, removeFavoriteById }}>
            {children}
        </FavoritesContext.Provider>
    );
};

export const useFavorites = () => {
    const context = useContext(FavoritesContext);
    if (context === undefined) {
        throw new Error('useFavorites must be used within a FavoritesProvider');
    }
    return context;
};