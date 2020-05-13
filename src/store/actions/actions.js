import * as actionTypes from './actionTypes';
import axios from '../../axios_posts';

const fetchPosts = (posts) => {
    return {
        type: actionTypes.FETCH_POSTS,
        posts
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
            })
    }
}

const fetchPostContent = (postContent, selectedPost) => {
    return {
        type: actionTypes.FETCH_POST_CONTENT,
        postContent,
        selectedPost
    }
}

export const initFetchPostContent = (postId) => {
    return dispatch => {
        axios.get(`Post contents/${postId}.json`)
            .then(response => {
                console.log(response.data)
                dispatch(fetchPostContent(response.data, postId))
            })
            .catch(err => {
                console.log(err)
            })
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