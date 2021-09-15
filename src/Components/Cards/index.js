import { List } from "./style.js";
function Cards({ repoInfo }) {
  console.log(repoInfo);
  return (
    <>
      <List>
        {repoInfo.map((item, index) => (
          <li key={index}>
            <img src={item.organization.avatar_url} alt="logo" />
            <h3>{item.full_name}</h3>
            <a href={item.html_url} target={"_blank"} rel="noreferrer">
              Ir para
            </a>
            <p>{item.description} </p>
          </li>
        ))}
      </List>
    </>
  );
}

export default Cards;
