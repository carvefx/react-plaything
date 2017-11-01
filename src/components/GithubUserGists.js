import React, { Component } from 'react';
import './GithubUserGists.css';

class GithubUserGists extends Component {

    render() {
        return(
            <div className="GithubUserGists">
                <ul>
                {
                    this.props.gists.map(gist => {
                        return <li key={gist.id}><a href={gist.html_url}>{gist.html_url}</a></li>
                    })
                }
                </ul>
            </div>
        );
      
    }
}
  
export default GithubUserGists;