usersHTML = document.querySelectorAll('[data-allocation-index]')

class User {
  constructor(name, imageURL) {
    this.name = name
    this.imageURL = imageURL
  }
}

users = []

for (let i = 0; i < usersHTML.length; i++) {
  try {
    users.push(new User(usersHTML[i].childNodes[1].childNodes[2].innerText, usersHTML[i].childNodes[0].childNodes[0].childNodes[0].childNodes[2].src))
  }
  catch(err) {

  }
} 

console.log(users.length)

function randomUser(users) {
  let index = Math.floor(Math.random() * users.length)
  return users[index]
}

pickedUser = randomUser(users)
console.log(pickedUser)