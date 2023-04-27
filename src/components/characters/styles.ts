import styled from "styled-components";

const Container = styled.div`
  padding: 4rem 8rem;
`

const Items = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const CharacterCard = styled.div`
  flex-basis: 20%;
  margin-bottom: 20px;
  padding: 10px;
  background-color: #f1f1f1;
  border: 1px solid #ccc;
`;

const CharacterImage = styled.img`
  width: 100%;
  height: auto;
`;

export {Container, Items, CharacterCard, CharacterImage}