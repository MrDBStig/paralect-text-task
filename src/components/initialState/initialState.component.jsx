import svg from '../../img/search-icon.svg'

const InitialState = () => {
  return (
    <div className="state">
      <div className="empty-state">
        <img src={svg} alt="Search icon" className="empty-state__icon"/>
        <p className="empty-state__text">Start with searching <br/>
          a GitHub user</p>
      </div>
    </div>
  );
}

export default InitialState;