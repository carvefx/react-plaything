import React, { Component } from 'react';


class GithubUserFollowers extends Component {

    render() {
        return(
            <div className="GithubUserFollowers">
                <ul>
                {
                    this.props.followers.map(follower => {
                        return <li key={follower.id}><img src={follower.avatar_url}/> {follower.login}</li>
                    })
                }
                </ul>
            </div>
        );
      
    }
  }
  
  export default GithubUserFollowers;
  