import {useGlobalContext} from "../../context";
import InitialState from "../../components/initialState/initialState.component";
import ErrorState from "../../components/errorState/errorState.component";

const HomePage = () => {
  const {searchQuery, isError} = useGlobalContext()

  if (!searchQuery) return <InitialState />

  if (isError) return <ErrorState />

}

export default HomePage;