import styled from 'styled-components';
import SearchIcon from "../icon/SearchIcon";

const InputContainer = styled.div`
  width: 20rem;
  border: .05em solid #777;
  display: flex;
  align-items: center;
  padding: .5em;
  border-radius: .25em;
  outline: none;
  cursor: pointer;
  margin-bottom: .5rem;

  &:focus {
    border-color: hsl(135, 66%, 74%)
  }
`;

const Input = styled.input`
  outline: none;
  border-radius: 5px;
  border: none;
  padding: 5px;
  font-size: 16px;
  flex-grow: 1;
`;

const ClearButton = styled.button`
  background: none;
  color: #777;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 0;
  font-size: 1.25em;

  &:focus {
    color: #333
  }

  &:hover {
    color: #333
  }
`;

type SearchInputProps = {
    value: string
    onChange: (value: string) => void
    placeholder: string
}


export default function SearchInput({value, onChange, placeholder}: SearchInputProps) {
    return (
        <InputContainer tabIndex={0}>
            <SearchIcon/>
            <Input
                type="text"
                placeholder={placeholder}
                value={value}
                onChange={(event) => onChange(event.target.value)}
            />
            <ClearButton
                onClick={() => onChange('')}
            >
                <span>&times;</span>
            </ClearButton>
        </InputContainer>
    )
}