import React, { Component } from 'react';
import './GithubUserFollowers.css';

class GithubUserFollowers extends Component {
    clickedNewProfile(follower) {
        this.props.onClickNewProfile(follower);
    }
    render() {
        return(
            <div className="GithubUserFollowers">
                <ul>
                {
                    this.props.followers.map(follower => {
                        return <li key={follower.id}><a href="#" onClick={() => this.clickedNewProfile(follower)}><img src={follower.avatar_url}/> {follower.login}</a></li>
                    })
                }
                </ul>
            </div>
        );
      
    }
  }
  
  export default GithubUserFollowers;
  