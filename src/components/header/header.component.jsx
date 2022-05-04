import {useGlobalContext} from "../../context";
import {GithubIcon} from "../../img/github-icon";

const Header = () => {
  const {searchQuery, setSearchQuery, handleSubmit} = useGlobalContext()

  return (
    <header className="header">
      <GithubIcon/>
      <form className="search-form" onSubmit={handleSubmit}>
        <input type="text" className="search-form__input" value={searchQuery} placeholder="Enter GitHub Username"
               onChange={(e) => setSearchQuery(e.target.value)}/>
      </form>
    </header>
  )
}

export default Header;