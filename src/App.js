import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import GithubUser from './components/GithubUser';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {apiResponse: {}, username: ''};
    this.usernameUpdated = this.usernameUpdated.bind(this);
    this.fetchProfile = this.fetchProfile.bind(this);
    this.triggerFetchProfile = this.triggerFetchProfile.bind(this);
  }

  fetchProfile() {
    var baseURL = 'https://api.github.com';
    
        axios.get(baseURL + '/users/' + this.state.username)
        .then(response => {
          //console.log(response.data);
          this.setState({
            apiResponse: response.data
          });
        })
        .catch(error => {
          console.log(error);
        });
  }

  triggerFetchProfile(profile) {
    this.setState({
      apiResponse: {},
      username: profile.login
    }, () => {
      this.fetchProfile();
    })
  }

  usernameUpdated(e) {
    this.setState({username: e.target.value, apiResponse: {}});
  }

  render() {
    return (
      <div className="App">
        <section className="App-Fetcher">
          <input type="text" placeholder="github username" value={this.state.username} onChange={this.usernameUpdated}/> <button onClick={this.fetchProfile}>Grab Profile!</button>
        </section>

        <section>
          <GithubUser userData={this.state.apiResponse} onClickedNewProfile={this.triggerFetchProfile}/>
        </section>
      </div>
    );
  }
}

export default App;
