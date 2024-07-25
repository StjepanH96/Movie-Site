import React from 'react';
import { useDispatch } from 'react-redux';
import { setError } from '../redux/reducers/movies/movieSlice';
import {
  CloseButton,
  ModalContent,
  ModalOverlay,
  StyledDetailError,
  StyledDetailErrorTitle,
} from '@/styled-components/ErrorModalStyles';

interface ErrorModalProps {
  message: string | null;
  onClose?: () => void;
}

export const ErrorModal = ({ message, onClose }: ErrorModalProps) => {
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(setError(null));
    if (onClose) {
      onClose();
    }
  };

  if (!message) {
    return null;
  }

  return (
    <ModalOverlay>
      <ModalContent>
        <StyledDetailErrorTitle>Error</StyledDetailErrorTitle>
        <StyledDetailError>{message}</StyledDetailError>
        <CloseButton onClick={handleClose}>Close</CloseButton>
      </ModalContent>
    </ModalOverlay>
  );
};
