import {useGlobalContext} from "../../context";
import EmptyList from "../emptyList/emptyList.component";
import Repository from "../repository/repository.component";
import Pagination from "../pagination/pagination.component";

const Repos = () => {
  const {user, repos, REPOS_PER_PAGE} = useGlobalContext();

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
        {repos.map((rep) => <Repository key={rep.id} {...rep} />)}
      </div>
      {/* Display pagination only when user has more than 4 repos */}
      {publicRepos > REPOS_PER_PAGE && <Pagination/>}
    </section>;
  }
}

export default Repos;