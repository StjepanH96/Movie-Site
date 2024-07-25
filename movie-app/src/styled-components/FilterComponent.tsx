import { styled } from 'styled-components';

const FiltersContainer = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  background-color: #141414;
  border-bottom: 2px solid #333;
`;

const SelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 20px;
`;

const Select = styled.select`
  padding: 10px;
  background-color: #333;
  color: white;
  border: 1px solid #555;
  border-radius: 5px;
  outline: none;
  font-size: 16px;

  &:focus {
    border-color: #e50914;
  }
`;

const Label = styled.label`
  margin-bottom: 5px;
  color: white;
  font-size: 14px;
`;

export { SelectWrapper, Select, Label, FiltersContainer };
