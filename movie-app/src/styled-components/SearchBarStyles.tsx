import { styled } from 'styled-components';

interface DropdownProps {
  isOpen: boolean;
}

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #333;
  padding: 4px 8px;
  border-radius: 4px;

  @media (max-width: 900px) {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #333;
    padding: 8px 16px;
    border-radius: 4px;
    width: 70%;
    margin-top: 20%;
    margin-left: 15%;
    position: relative;
  }
`;

const Input = styled.input`
  padding: 8px;
  font-size: 16px;
  border: none;
  background: transparent;
  color: white;
  width: 200px;
  display: block;

  @media (max-width: 900px) {
    flex-grow: 1;
    padding: 8px;
    font-size: 16px;
    border: none;
    background: transparent;
    color: white;
    &::placeholder {
      color: #aaa;
    }
  }
`;

const Button = styled.button`
  padding: 8px;
  border: none;
  background: transparent;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    color: #e2b616;
  }
`;
const Dropdown = styled.ul<DropdownProps>`
  position: absolute;
  width: calc(100% - 32px);
  background: #444;
  color: white;
  list-style: none;
  margin: 0;
  padding: 0;
  top: 100%;
  left: 0;
  border-radius: 0 0 4px 4px;
  overflow-y: auto; /* Ensures scrollbar is only vertical */
  overflow-x: hidden; /* Prevents horizontal scrollbar */
  max-height: 300px; /* Adjust as necessary */
  z-index: 1000; /* Ensures dropdown is above other content */
  transition: max-height 0.2s ease-out;
  visibility: ${(props) => (props.isOpen ? 'visible' : 'hidden')};
  opacity: ${(props) => (props.isOpen ? 1 : 0)};
  transform: ${(props) =>
    props.isOpen ? 'translateY(0)' : 'translateY(-20px)'};

  @media (max-width: 1500px) {
    margin-top: 3%;
  }
`;

const DropdownItem = styled.li`
  padding: 8px 16px;
  cursor: pointer;
  &:hover,
  &.selected {
    background-color: #555;
  }
`;

export { DropdownItem, SearchContainer, Dropdown, Button, Input };
