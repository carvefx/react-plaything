import React, { Component } from 'react';
import axios from 'axios';
import './GithubUser.css';

class GithubUser extends Component {
    fetchLatestGists(e) {
        e.preventDefault();
        alert('gists');
    }

    fetchFollowers(e) {
        e.preventDefault();
        alert('followers');
    }

    render() {
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
        </div>
      )
    }
  }
  
  export default GithubUser;
  