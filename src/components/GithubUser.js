import React, { Component } from 'react';
import axios from 'axios';
import './GithubUser.css';
import GithubUserFollowers from './GithubUserFollowers';

class GithubUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            followers: []
        };

        this.fetchFollowers = this.fetchFollowers.bind(this);
        this.clickedNewProfile = this.clickedNewProfile.bind(this);
    }
    
    clickedNewProfile(profile) {
        this.setState({followers:[]});
        this.props.onClickedNewProfile(profile);
    }

    fetchFollowers(e) {
        e.preventDefault();

        axios.get(this.props.userData.url + '/followers')
        .then(response => {
          //console.log(response.data);
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
        <div className="GithubUser" key={this.props.userData.id}>
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
                <a href="#" onClick={this.fetchFollowers}>see followers</a>
            </div>

            <GithubUserFollowers followers={this.state.followers} onClickNewProfile={this.clickedNewProfile}></GithubUserFollowers>
        </div>
      )
    }
  }
  
  export default GithubUser;
  