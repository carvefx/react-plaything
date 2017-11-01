import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import GithubUser from './components/GithubUser';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {apiResponse: {}};
  }

  componentDidMount() {
    var baseURL = 'https://api.github.com';

    axios.get(baseURL + '/users/carvefx')
    .then(response => {
      console.log(response.data);
      this.setState({
        apiResponse: response.data
      });
    })
    .catch(error => {
      console.log(error);
    });
  }

  render() {
    return (
      <div className="App">
        <section>
          <GithubUser userData={this.state.apiResponse}/>
        </section>
      </div>
    );
  }
}

export default App;
