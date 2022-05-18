import { useGlobalContext } from "../../context";
import Spinner from "../../components/spinner/spinner.component";
import InitialState from "../../components/initialState/initialState.component";
import ErrorState from "../../components/errorState/errorState.component";
import User from "../../components/user/user.component";
import Repos from "../../components/repos/repos.component";

const HomePage = () => {
  const { isLoading, searchQuery, isError, user } = useGlobalContext();

  if (isLoading) return <Spinner />;

  if (isError) return <ErrorState />;

  if (!user && !searchQuery) return <InitialState />;

  return (
    <div className="container main-screen">
      <User />
      <Repos />
    </div>
  );
};

export default HomePage;
