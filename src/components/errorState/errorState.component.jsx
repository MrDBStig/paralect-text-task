import svg from "../../img/user-icon.svg";

const ErrorState = () => {
  return (
    <div className="state">
      <div className="empty-state">
        <img src={svg} alt="Search icon" className="empty-state__icon"/>
        <p className="empty-state__text">User not found</p>
      </div>
    </div>
  );
}

export default ErrorState;