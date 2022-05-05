import {useGlobalContext} from "../../context";

const Repos = () => {
  const {repos} = useGlobalContext();

  return <div>REPOS</div>;
}

export default Repos;