import './index.css'

const TabItem = props => {
  const {tabDetails, updateActiveTab, isActiveTabId} = props
  const {tabId, displayText} = tabDetails
  const activeTabClassName = isActiveTabId ? 'active-tab-btn' : ''
  const onClickTabItem = () => {
    updateActiveTab(tabId)
  }

  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`tab-btn ${activeTabClassName}`}
        onClick={onClickTabItem}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
