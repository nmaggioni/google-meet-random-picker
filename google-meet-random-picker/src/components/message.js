import React from 'react'

export class Message extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user = this.props.user
    }
  }
  render() {
    (
      <div>
        <img src="{this.props.user.imageURL}"></img>
        <p>{this.props.user.name}</p>
      </div>
    )
  }
}