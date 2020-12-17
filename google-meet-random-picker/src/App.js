import React from 'react';
import {MessageContainer} from './components/messageContainer'
import ShuffleIcon from '@material-ui/icons/Shuffle';
import Button from '@material-ui/core/Button';
import './App.css';

export class App extends React.Component {
  constructor(props) {
    super(props)
    this.getUser = this.getUser.bind(this)
    this.randomUser = this.randomUser.bind(this)
    this.removeUser = this.removeUser.bind(this)
    this.state = {
      users: []
    }
  }

  randomUser() {
    var usersHTML = document.querySelectorAll('[data-allocation-index]')

    class User {
      constructor(name, imageURL) {
        this.name = name
        this.imageURL = imageURL
      }
    }
    
    var users = []//[new User('Davis', 'https://www.simplyhappyfoodie.com/wp-content/uploads/2018/04/instant-pot-hamburgers-3-500x500.jpg'), new User('Anthony', 'https://www.simplyhappyfoodie.com/wp-content/uploads/2018/04/instant-pot-hamburgers-3-500x500.jpg'), new User('Cool Guy', 'https://www.simplyhappyfoodie.com/wp-content/uploads/2018/04/instant-pot-hamburgers-3-500x500.jpg'), new User('Tester', 'https://www.simplyhappyfoodie.com/wp-content/uploads/2018/04/instant-pot-hamburgers-3-500x500.jpg')]
    
    for (let i = 0; i < usersHTML.length; i++) {
      try {
        let name = usersHTML[i].childNodes[1].childNodes[0].childNodes[2].innerHTML;
        if (name.length < 50) {
          users.push(new User(usersHTML[i].childNodes[1].childNodes[0].childNodes[2].innerHTML, usersHTML[i].childNodes[0].childNodes[0].childNodes[0].childNodes[2].src))
        }
      }
      catch(err) {
    
      }
    } 
    let index = Math.floor(Math.random() * users.length)
    let chosenUser = users[index]
    this.getUser(chosenUser)
  }

  getUser(user) {
    let updatedUsers = this.state.users
    updatedUsers.push(user)
    this.setState({users: updatedUsers})
  }

  removeUser(key) {
    let updatedUsers = [...this.state.users]
    updatedUsers.splice(key, 1)
    this.setState({users: updatedUsers})
  }

  render() {
    return (
      <div className="App">
        <div >
          {/* <img src={chrome.extension.getURL('/static/media/random.svg')}></img> */}
          <Button
            variant="contained"
            color="default"
            onClick={this.randomUser}
            endIcon={<ShuffleIcon />}
          >
            Random
          </Button>
        </div>
        <MessageContainer users={this.state.users} removeUser={this.removeUser} />
      </div>
    );
  }
}

export default App;
