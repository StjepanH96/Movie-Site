import { styled } from 'styled-components';

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
  @media (max-width: 768px) {
    margin-right: 20px;
  }
`;

const DropdownButton = styled.button`
  padding: 8px 16px;
  cursor: pointer;
  border: none;
  border-radius: 4px;
  background-color: transparent;
  color: white;
  font-size: 16px;
  margin-bottom: 5x;
  transition: background-color 0.3s;
  &:hover {
    background-color: #555;
  }
  @media (max-width: 768px) {
    margin-right: 30px;
  }
`;

const DropdownContent = styled.div`
  position: absolute;
  background-color: #222;
  min-width: 200px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.5);
  z-index: 1;
  display: none;
  flex-direction: column;
  max-height: 0;
  transition:
    max-height 0.5s ease-out,
    opacity 0.5s ease-out;
  opacity: 0;
  border-radius: 0 0 4px 4px;
  overflow-y: auto; 
  overflow-x: hidden;
  max-height: 300px; 
  z-index: 1000; 
  transition: max-height 0.2s ease-out;

  &.show {
    display: flex;
    max-height: 500px;
    opacity: 1;
  }
`;

const DropdownItem = styled.div`
  padding: 12px 16px;
  color: white;
  display: block;
  transition: background-color 0.3s;

  &:hover {
    background-color: #333;
  }
`;

export { DropdownButton, DropdownContainer, DropdownContent, DropdownItem };
