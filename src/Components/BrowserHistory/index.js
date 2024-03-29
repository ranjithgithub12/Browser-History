import './index.css'

const HistoryListDetails = props => {
  const {browseHistory, deleteHistory} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = browseHistory

  const onDelete = () => {
    deleteHistory(title)
  }

  return (
    <li className="list-of-histore">
      <div className="time-container">
        <p className="time">{timeAccessed}</p>
      </div>
      <div className="logo-container">
        <img className="logo-image" src={logoUrl} alt={title} />
        <h1 className="title">{title}</h1>
        <p className="domain-url">{domainUrl}</p>
      </div>
      <div className="delete-container">
        <button
          type="button"
          className="button"
          data-testid="delete"
          onClick={onDelete}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default HistoryListDetails
