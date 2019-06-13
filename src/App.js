import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component { 
  constructor(){
    super();

    this.state = {
      friends: [],
      picture: '',
      name: ''
    };
  

    this.updateName = this.updateName.bind(this)
    this.updatePicture = this.updatePicture.bind(this)
    this.addFriend = this.addFriend.bind(this)
  }

  updateName(event){
    this.setState({
      name: event.target.value
    })
  }

  updatePicture(event){
    const inputValue = event.target.value;
    this.setState({
      picture: inputValue
    })
  }

  addFriend() {
    const { friends, picture, name } =
      this.state;

    let newFriends = friends.slice();
    newFriends.push({ picture, name });
    
    this.setState({ 
      friends: newFriends,
      picture: '',
      name:''    
    });
  }
  
  render () {

    const friends = this.state.friends.map((friend, index )=> (
      <div key={ `friend-${ index }-${ friend.name }` }>
        <img width='100px' scr={friend.picture} />
        <h2>{friend.name}</h2>
      </div>
    ));

    return (
      <div className="App">
       <label>Picture:</label>
       <input type="url" value={this.state.picture} onChange={this.updatePicture}/>

       <label>Name:</label>
       <input type="text" value={this.state.name} onChange={this.updateName}/>

       <button onClick={this.addFriend}>Add Friend:</button>
       {friends}
      </div>
    );
  }
}

export default App;
