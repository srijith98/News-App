import * as actionTypes from './actionTypes';
import axios from '../../axios_posts';

const fetchPosts = (posts) => {
    return {
        type: actionTypes.FETCH_POSTS,
        posts
    }
}

const fetchPostsFailed = () => {
    return {
        type: actionTypes.FETCH_POSTS_FAILED
    }
}

export const initFetchPosts = () => {
    return dispatch => {
        axios.get('Posts.json')
            .then(response => {
                console.log(response.data)
                dispatch(fetchPosts(response.data))
            })
            .catch(err => {
                console.log(err)
                dispatch(fetchPostsFailed())
            })
    }
}

export const showPostContent = (selectedPost) => {
    return {
        type: actionTypes.SHOW_POST_CONTENT,
        selectedPost
    }
}


export const likePost = (postId) => {
    return {
        type: actionTypes.LIKE_POST,
        likedPost: postId
    }
}

export const dislikePost = (postId) => {
    return {
        type: actionTypes.DISLIKE_POST,
        dislikedPost: postId
    }
}

export const bookmarkPost = (postId) => {
    return {
        type: actionTypes.BOOKMARK_POST,
        bookmarkedPost: postId
    }
}