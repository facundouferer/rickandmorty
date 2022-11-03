import axios from "axios";

const allCharacters = async (state, page) => {
  var url = page
    ? `https://rickandmortyapi.com/api/character?page=${page}`
    : `https://rickandmortyapi.com/api/character/`;
  const response = await axios.get(url);
  state(response);
};

const singleCharacter = async (id, state) => {
  const response = await axios.get(
    `https://rickandmortyapi.com/api/character/${id}`
  );
  state(response.data);
};

export { allCharacters, singleCharacter };
