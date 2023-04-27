import React from 'react';
import {Container, Items, CharacterCard, CharacterImage} from './styles'
import useCharacters from "../../hooks/useCharacters";
import SearchInput from "../utils/SearchInput";
import Character from "../../models/character";


function Item({name, image}: Omit<Character, 'id'>) {
    return (
        <CharacterCard>
            <h2>{name}</h2>
            <CharacterImage src={image} alt={name}/>
        </CharacterCard>
    )
}

function Characters() {
    const {loading, error, data, searchValue, onChange} = useCharacters()
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    return (
        <Container>
            <h1>Ricky and Morty</h1>
            <SearchInput value={searchValue} onChange={onChange} placeholder={"search character ..."}/>
            <Items>
                {data.map((character: any) => (
                    <Item key={character.id} name={character.name} image={character.image}/>
                ))}
            </Items>
        </Container>
    );
}

export default Characters;