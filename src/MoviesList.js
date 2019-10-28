import React, { Component } from 'react';
import MovieDetail from './MovieDetail.js'

class MoviesList extends Component {
    constructor() {
        super()
        this.moviesByLikes = {}
    }
    render() {
        const { movies, users, profiles } = this.props
        
        for (const profile of profiles) {
            const movieId = profile.favoriteMovieID
            if (this.moviesByLikes[movieId]) {
                this.moviesByLikes[movieId].push(profile.userID)
            } else {
                this.moviesByLikes[movieId] = [profile.userID]
            }
        }

        return(
            <div>
                {Object.keys(movies).map(movieId => <MovieDetail key={movies[movieId].id} movie={movies[movieId]} users={users} likes={this.moviesByLikes[movieId]}/>)}
            </div>
        )
    }
}

export default MoviesList