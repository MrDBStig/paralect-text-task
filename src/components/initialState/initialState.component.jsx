import svg from '../../img/search-icon.svg'

const InitialState = () => {
  return (
    <div className="initial-state">
      <img src={svg} alt="Search icon" className="initial-state__icon"/>
      <p className="initial-state__text">Start with searching
        a GitHub user</p>
    </div>
  );
}

export default InitialState;