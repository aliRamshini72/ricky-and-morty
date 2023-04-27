import {useQuery} from "@apollo/client";
import GET_CHARACTERS from "../gql/characters/character";
import {useCallback, useEffect, useState} from "react";
import useDebounce from "./utils/useDebounce";
import Character from "../models/character";


export default function useCharacters() {
    const {loading, error, data} = useQuery(GET_CHARACTERS);
    const [searchValue, setSearchValue] = useState('');
    const [filteredData, setFilteredData] = useState<Character[]>([]);
    const debounceValue = useDebounce<string>(searchValue, 1000)

    useEffect(() => {
        if (data && data.characters && data.characters.results && data.characters.results.length > 0) {
            if (debounceValue) {
                const filter = data.characters.results.filter((c: Character) => c.name.toLowerCase().includes(debounceValue.toLowerCase()))
                setFilteredData(filter)
            } else setFilteredData(data.characters.results)
        }
    }, [debounceValue, data])
    const onChange = useCallback((value: string) => {
        setSearchValue(value)
    }, [])

    return {loading, error, data: filteredData, searchValue, onChange}
}