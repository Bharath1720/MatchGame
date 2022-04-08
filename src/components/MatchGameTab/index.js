import './index.css'

const MatchGameTab = props => {
  const {tabDetails, clickTabItem, isActive} = props
  const {tabId, displayText} = tabDetails
  const activeTabBtnClassName = isActive ? 'active-tab-btn' : ''
  const onClickTabItem = () => {
    clickTabItem(tabId)
  }

  return (
    <li className="tab-item">
      <button
        onClick={onClickTabItem}
        type="button"
        className={`tab-button ${activeTabBtnClassName}`}
      >
        {displayText}
      </button>
    </li>
  )
}

export default MatchGameTab
