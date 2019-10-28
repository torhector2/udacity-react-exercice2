import React, { Component } from 'react';

class LikeList extends Component {
    render() {
        const {users, likes} = this.props

        if (!likes || likes.length === 0) {
            return(<p>None of the current users liked this movie</p>)
        }

        let liElements = likes.map(likeUserId => (
            <li key={users[likeUserId].name}>{users[likeUserId].name}</li>
        ))

        return(
            <ul>{liElements}</ul>
        )
    }
}

export default LikeList