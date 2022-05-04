import {useGlobalContext} from "../../context";
import InitialState from "../../components/initialState/initialState.component";

const HomePage = () => {
  const {searchQuery} = useGlobalContext()

  if (!searchQuery) return <div className="state"><InitialState /></div>



}

export default HomePage;