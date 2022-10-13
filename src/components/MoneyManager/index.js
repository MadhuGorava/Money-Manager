import {Component} from 'react'

import MoneyDetails from '../MoneyDetails'

import TransactionItem from '../TransactionItem'

import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here
class MoneyManager extends Component {
  state = {
    transactionList: [],
    title: '',
    amount: '',
  }

  onAdd = event => {
    event.preventDefault()
    const {title, amount} = this.state
    const newTransaction = {
      title,
      amount,
      isDelete: false,
    }
    this.setState(prevState => ({
      transactionList: [...prevState.transactionList, newTransaction],
      title: '',
      amount: '',
      displayText: '',
    }))
  }

  onChangeAmount = event => {
    this.setState({amount: event.target.value})
  }

  onChangeTitle = event => {
    this.setState({title: event.target.value})
  }

  onChangeOption = event => {
    this.setState({displayText: event.target.value})
  }

  render() {
    const {title, amount, displayText, transactionList} = this.state
    return (
      <div className="app-container">
        <div className="nav-container">
          <h1 className="heading">Hi, Richard</h1>
          <p className="para">
            Welcome back to your <span>Money Manager</span>
          </p>
        </div>
        <div>
          <MoneyDetails />
        </div>
        <div className="form-container">
          <div>
            <h1 className="form-heading">Add Transaction</h1>
            <form id="myForm">
              <div className="mb-3">
                <label htmlFor="name">TITLE</label>
                <br />
                <input
                  type="text"
                  className="form-control"
                  placeholder="TITLE"
                  onChange={this.onChangeTitle}
                  id="name"
                  value={title}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="amount">AMOUNT</label>
                <br />
                <input
                  type="text"
                  className="form-control"
                  placeholder="AMOUNT"
                  onChange={this.onChangeAmount}
                  id="amount"
                  value={amount}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="status">TYPE</label>
                <br />
                <select className="form-control" id="status">
                  {transactionTypeOptions.map(eachOption => (
                    <option
                      value={eachOption.optionId}
                      selected
                      onChange={this.onChangeOption}
                    >
                      {displayText}
                    </option>
                  ))}
                </select>
              </div>
              <button type="submit" className="button" onSubmit={this.onAdd}>
                Add
              </button>
            </form>
          </div>
          <div>
            <h1>History</h1>
            <div className="transaction-card">
              <p>Title</p>
              <p>Amount</p>
              <p>Type</p>
            </div>
            <ul className="ordered-list">
              {transactionList.map(eachTitle => (
                <TransactionItem
                  key={eachTitle.displayText}
                  historyDetails={eachTitle}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
