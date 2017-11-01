import React, { Component } from 'react';
import axios from 'axios';
import './GithubUser.css';
import GithubUserGists from './GithubUserGists';
import GithubUserFollowers from './GithubUserFollowers';

class GithubUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gists: [],
            followers: []
        };

        this.fetchFollowers = this.fetchFollowers.bind(this);
        this.fetchLatestGists = this.fetchLatestGists.bind(this);
    }

    fetchLatestGists(e) {
        e.preventDefault();

        
        axios.get(this.props.userData.url + '/gists')
            .then(response => {
              console.log(response.data);
              this.setState({
                gists: response.data
              });
            })
            .catch(error => {
              console.log(error);
            });
    }

    fetchFollowers(e) {
        e.preventDefault();

        axios.get(this.props.userData.url + '/followers')
        .then(response => {
          console.log(response.data);
          this.setState({
            followers: response.data
          });
        })
        .catch(error => {
          console.log(error);
        });
    }

    render() {
      if(!this.props.userData.avatar_url) {
          return (
            <div className="GithubUser">
              <div className="GithubUser-Woops">
                  <h2>Hey, looks like you haven't fetched a user yet. Use the form above to do so!</h2>
                </div>
            </div>
            );
      }
      
      return (
        <div className="GithubUser">
            <div className="GithubUser-Avatar">
                <img src={this.props.userData.avatar_url}/>
            </div>

            <div className="GithubUser-Details">
                <ul>
                    <li><a href={this.props.userData.html_url}>{this.props.userData.login}</a></li>
                    <li className="GithubUser-Name"><b>{this.props.userData.name}</b></li>
                    <li><a href={this.props.userData.blog}>{this.props.userData.blog}</a></li>
                </ul>
            </div>

            <div className="GithubUser-Actions">
                <a href="#" onClick={this.fetchLatestGists}>see latest gists</a> | <a href="#" onClick={this.fetchFollowers}>see followers</a>
            </div>

            <GithubUserGists gists={this.state.gists}></GithubUserGists>
            <GithubUserFollowers followers={this.state.followers}></GithubUserFollowers>
        </div>
      )
    }
  }
  
  export default GithubUser;
  