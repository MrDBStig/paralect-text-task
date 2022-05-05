import {useGlobalContext} from "../../context";

const Repos = () => {
  const {user, repos} = useGlobalContext();

  if (!repos) return <div>NO REPOS</div>

  return <div>REPOS</div>;
}

export default Repos;