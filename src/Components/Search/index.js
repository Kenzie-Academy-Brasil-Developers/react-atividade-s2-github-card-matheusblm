import { useState } from "react";
import Cards from "../Cards";
import { Container } from "./style";
import { Errop } from "./style";
function Search() {
  const [userInput, setUserInput] = useState("");
  const [repoInfo, setRepoInfo] = useState([]);
  const [erro, setErro] = useState(false);
  function handle(event) {
    setUserInput(event);
    setErro(false);
  }
  function searchIn() {
    const firstInput = userInput.split("/")[0];
    const secondInput = userInput.split("/")[1];
    fetch(`https://api.github.com/repos/${firstInput}/${secondInput}`)
      .then((response) => response.json())
      .then((response) =>
        response.message === "Not Found"
          ? setErro(true)
          : setRepoInfo([...repoInfo, response])
      );
  }

  return (
    <Container>
      <input
        type="text"
        value={userInput}
        onChange={(event) => handle(event.target.value)}
        placeholder={"Digite o nome do repo"}
      />
      {erro && <Errop>Erro na busca do repo</Errop>}
      <button onClick={searchIn}>Pesquisar</button>
      <Cards repoInfo={repoInfo} />
    </Container>
  );
}

export default Search;
