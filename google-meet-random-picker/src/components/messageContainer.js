import React from 'react'
import {Message} from './message'
import '../content.css'

export class MessageContainer extends React.Component {
  render() {
    let messages = []
    for (let i = 0; i < this.props.users.length; i++) {
      messages.push(<Message user={this.props.users[i]} key={i} id={i} removeUser={this.props.removeUser}/>)
    }
    return (<div className="rp-message-container">
      { messages }
    </div>)
  }
} 