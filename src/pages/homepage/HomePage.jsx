import {useGlobalContext} from "../../context";
import InitialState from "../../components/initialState/initialState.component";
import ErrorState from "../../components/errorState/errorState.component";
import User from "../../components/user/user.component";

const HomePage = () => {
  const {searchQuery, isError, user} = useGlobalContext()

  if (!searchQuery) return <InitialState/>

  if (isError) return <ErrorState/>

  if (user) return <User/>
}

export default HomePage;