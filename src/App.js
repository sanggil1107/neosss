import React, { Component } from 'react';
import './App.css';
import MenuBar from './components/Menubar';
import { BrowserRouter as Router } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ''
    }
  }

  componentDidMount() {
    this.callApi() 
      .then(res => this.setState({username: res}))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const reponse = await fetch('/api');
    const body = await reponse.json();
    console.log(reponse);
    return body;
  }

  // componentDidMount() {
  //   fetch('/api')
  //     .then(data=>this.setState({username: data}))
  //     .catch(err => console.log(err));
  // }

  render() {
    const {username} = this.state.username;
    return (
      <div className="App">
        <Router>
          <MenuBar/>
          {username}
        </Router>
      </div>
    );
  }
}

export default App;
