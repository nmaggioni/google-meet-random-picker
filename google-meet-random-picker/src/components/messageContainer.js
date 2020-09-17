import React from 'react'

export class MessageContainer extends React.Component {
  constructor() {
    this.state = {
      messages = []
    }
  }

  render() {
    (<div className="rp-message-container">
      { this.state.messages }
    </div>)
  }
}