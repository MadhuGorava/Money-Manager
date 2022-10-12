// Write your code here
import {Component} from 'react'

import './index.css'

class MoneyDetails extends Component {
  state = {totalBalance: 0, totalIncome: 0, totalExpenses: 0}

  render() {
    const {totalBalance, totalIncome, totalExpenses} = this.state
    return (
      <div className="money-details-container">
        <div className="balance-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
            alt="balance"
            className="balance-icon"
          />
          <div className="card">
            <p className="description">Your Balance</p>
            <p className="rupees">Rs {totalBalance}</p>
          </div>
        </div>
        <div className="income-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
            alt="income"
            className="income-icon"
          />
          <div className="card">
            <p className="description">Your Income</p>
            <p className="rupees">Rs {totalIncome}</p>
          </div>
        </div>
        <div className="expenses-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
            alt="expenses"
            className="expenses-icon"
          />
          <div className="card">
            <p className="description">Your Expenses</p>
            <p className="rupees">Rs {totalExpenses}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyDetails
