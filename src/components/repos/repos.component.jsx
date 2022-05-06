import {useGlobalContext} from "../../context";
import EmptyList from "../emptyList/emptyList.component";

const Repos = () => {
  const {user, repos} = useGlobalContext();

  // When user doesn't have public repos or repos at all
  if (user && !repos) {
    return <section className="empty">
      <EmptyList/>
    </section>
  }

  // When user have at least 1 public repo
  if (repos) {
    const {publicRepos} = user;

    return <section className="repos">
      <h2 className="repos__title">Repositories ({publicRepos})</h2>
      <div className="repos__list">
        {repos.map((repository) => {
          return (
            <article className="repository" key={repository.id}>
              <a target='_blank' href={repository.html_url} rel="noreferrer">
                <h4 className="repository__title">{repository.name}</h4>
              </a>
              {/* Provides repo description if it is !== null, else provides repo name */}
              <p className="repository__description">
                {repository.description ? repository.description : repository.name}
              </p>
            </article>
          );
        })}
      </div>
    </section>;
  }
}

export default Repos;