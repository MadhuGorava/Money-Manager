// Write your code here
import './index.css'

const TransactionItem = props => {
  const {historyDetails} = props
  const {title, amount, displayText} = historyDetails

  const onDeleteHistory = () => {}

  return (
    <li className="history-card">
      <p>{title}</p>
      <p>Rs {amount}</p>
      <p>{displayText}</p>
      <button type="button" onClick={onDeleteHistory} className="delete-btn">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default TransactionItem
