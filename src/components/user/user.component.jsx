import {useGlobalContext} from "../../context";
import Repos from "../repos/repos.component";
import {GroupIcon} from "../../img/group-icon";
import {PersonIcon} from "../../img/person-icon";

const User = () => {
  const {user, repos} = useGlobalContext();

  if (user) {
    const {followers, following, login, avatarUrl, name, htmlUrl} = user;
    return (
      <div className="container main-screen">
        <section className="user">
          <img src={avatarUrl} alt={name} className="user__photo"/>
          <h3 className="user__name">{name}</h3>
          <a href={htmlUrl} className="user__link">{login}</a>
          <div className="user__follow">
            <p className="user__follow--item"><GroupIcon /> {followers} followers</p>
            <p className="user__follow--item"><PersonIcon /> {following} following</p>
          </div>
        </section>
        {repos ? <Repos/> : <Repos/>}
      </div>
    );
  }
}

export default User;

