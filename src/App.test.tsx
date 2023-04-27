import React, {useState} from 'react';
import {render, fireEvent, act} from '@testing-library/react';
import useDebounce from "./hooks/utils/useDebounce";
import SearchInput from "./components/utils/SearchInput";

describe('useDebounce', () => {
    jest.useFakeTimers();
    it('should debounce the value change', () => {
        const TestComponent = () => {
            const [value, setValue] = useState('');
            const debouncedValue = useDebounce(value, 100);
            return (
                <div>
                    <input data-testid="search-input" value={value} onChange={e => setValue(e.target.value)}/>
                    <p data-testid="debounced-value">{debouncedValue}</p>
                </div>
            );
        };
        const {getByTestId} = render(<TestComponent/>);
        const searchInput = getByTestId('search-input');
        const debouncedValue = getByTestId('debounced-value');
        fireEvent.change(searchInput, {target: {value: 'Rick and Morty'}});
        expect(debouncedValue.textContent).toEqual('');
        act(() => {
            jest.advanceTimersByTime(100);
        });
        expect(debouncedValue.textContent).toEqual('Rick and Morty');
    });
});

test('SearchInput changes value on input change', () => {
    const onChange = jest.fn();
    const {getByPlaceholderText} = render(
        <SearchInput value={""} onChange={onChange} placeholder='Search...'/>
    );
    fireEvent.change(getByPlaceholderText('Search...'), {
        target: {value: 'hello'}
    });
    expect(onChange).toHaveBeenCalledWith('hello');
});

test('SearchInput passes value and onChange props correctly', () => {
    const onChange = jest.fn();
    const {getByDisplayValue} = render(
        <SearchInput
            value='hello'
            onChange={onChange}
            placeholder='Search...'
        />
    );
    expect(getByDisplayValue('hello')).toBeInTheDocument();
});


