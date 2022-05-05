import {useGlobalContext} from "../../context";
import EmptyList from "../emptyList/emptyList.component";

const Repos = () => {
  const {user, repos} = useGlobalContext();

  // When user doesn't have public repos or repos at all
  if (user && !repos) {
    return <section className="empty">
      <EmptyList />
    </section>
  }

  // When user have at least 1 public repo
  if (repos) {
    return <section className="repos">REPOS</section>;
  }
}

export default Repos;