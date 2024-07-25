// components/CastSlider.tsx
import React from 'react';
import styled from 'styled-components';

const CastList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  overflow-x: auto;
  gap: 16px;
  white-space: nowrap;

  &::-webkit-scrollbar {
    height: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #555;
    border-radius: 10px;
  }
`;

const CastItem = styled.li`
  min-width: 120px;
  text-align: center;
`;

interface CastProps {
  cast: {
    cast_id: number;
    name: string;
    character: string;
  }[];
}

const CastSlider = ({ cast }: CastProps) => {
  return (
    <CastList>
      {cast.map((actor) => (
        <CastItem key={actor.cast_id}>
          <p>{actor.name}</p>
          <p><em>{actor.character}</em></p>
        </CastItem>
      ))}
    </CastList>
  );
};

export default CastSlider;