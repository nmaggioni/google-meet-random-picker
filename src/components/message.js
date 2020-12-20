import React from 'react'
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';

export class Message extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      id: this.props.id
    }
  }
  render() {
    return (
      <div>
        <Chip avatar={<Avatar alt={this.props.user.name} src={this.props.user.imageURL} />} label={this.props.user.name} onDelete={() => {this.props.removeUser(this.state.id)}}/>
      </div>
    )
  }
}