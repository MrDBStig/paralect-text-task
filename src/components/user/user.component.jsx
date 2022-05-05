import {useGlobalContext} from "../../context";

import {GroupIcon} from "../../img/group-icon";
import {PersonIcon} from "../../img/person-icon";

const User = () => {
  const {user, formatThousand} = useGlobalContext();

  if (user) {
    const {followers, following, login, avatarUrl, name, htmlUrl} = user;
    return (
      <section className="user">
        <img src={avatarUrl} alt={name} className="user__photo"/>
        <h3 className="user__name">{name}</h3>
        <a href={htmlUrl} className="user__link">{login}</a>
        <div className="user__follow">
          <p className="user__follow--item"><GroupIcon/> {formatThousand(followers)} followers</p>
          <p className="user__follow--item"><PersonIcon/> {formatThousand(following)} following</p>
        </div>
      </section>
    );
  }
}

export default User;

