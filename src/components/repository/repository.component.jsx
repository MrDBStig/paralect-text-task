const Repository = ({name, description, html_url}) => {
  return (
    <article  className="repository">
      <a target='_blank' href={html_url} rel="noreferrer">
        <h4 className="repository__title">{name}</h4>
      </a>
      <p className="repository__description">
        {description ? description : name}
      </p>
    </article>)
}

export default Repository;