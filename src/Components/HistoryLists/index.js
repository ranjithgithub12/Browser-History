import {Component} from 'react'
import './index.css'
import HistoryListDetails from '../BrowserHistory'

class HistoryLists extends Component {
  state = {searchInput: '', userTitle: ''}

  onSearchHistory = event => {
    this.setState({searchInput: event.target.value})
  }

  deleteHistory = title => {}

  render() {
    const {searchInput} = this.state

    const {initialHistoryList} = this.props

    const filterTheSearchInput = initialHistoryList.filter(each =>
      each.title.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="app-container">
        <div className="top-search-bar-container">
          <div className="image-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
              alt="app logo"
            />
          </div>
          <div className="search-bar-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              alt="search"
            />
            <input
              className="search-input"
              type="search"
              placeholder="Search history"
              onChange={this.onSearchHistory}
            />
          </div>
        </div>
        <div className="browser-history-container">
          <ul className="browse-history-details">
            {filterTheSearchInput.map(eachHistory => (
              <HistoryListDetails
                browseHistory={eachHistory}
                deleteHistory={this.deleteHistory}
                key={eachHistory.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default HistoryLists
