import React, { Component } from 'react';
import LikeList from './LikeList';

class MovieDetail extends Component {
    render() {
        const { movie, users, likes } = this.props
        
        return(
            <div>
                <h2>{movie.name}</h2>
                <p>Liked By:</p>
                <LikeList likes={likes} users={users}/>
            </div>
        )
    }
}

export default MovieDetail