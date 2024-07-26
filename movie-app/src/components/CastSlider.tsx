import React from 'react';
import { CastList, CastItem } from '@/styled-components/SliderCastStyles';

interface CastProps {
  cast: {
    cast_id: number;
    name: string;
    character: string;
  }[];
}

export const CastSlider = ({ cast }: CastProps) => {
  return (
    <CastList>
      {cast.map((actor) => (
        <CastItem key={actor.cast_id}>
          <p>{actor.name}</p>
          <p>
            <em>{actor.character}</em>
          </p>
        </CastItem>
      ))}
    </CastList>
  );
};

