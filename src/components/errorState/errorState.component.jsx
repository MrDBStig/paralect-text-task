import svg from "../../img/user-icon.svg";

const ErrorState = () => {
  return (
    <div className="state">
      <div className="initial-state">
        <img src={svg} alt="Search icon" className="initial-state__icon"/>
        <p className="initial-state__text">User not found</p>
      </div>
    </div>
  );
}

export default ErrorState;