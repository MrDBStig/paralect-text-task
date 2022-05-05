import {useGlobalContext} from "../../context";
import InitialState from "../../components/initialState/initialState.component";
import ErrorState from "../../components/errorState/errorState.component";
import User from "../../components/user/user.component";
import Repos from "../../components/repos/repos.component";

const HomePage = () => {
  const {searchQuery, isError} = useGlobalContext()

  if (!searchQuery) return <InitialState/>

  if (isError) return <ErrorState/>

  return (
    <div className="container main-screen">
      <User/>
      <Repos/>
    </div>
  );
}

export default HomePage;