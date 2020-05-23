import * as actionTypes from '../actions/actionTypes';

const initialState = {
    posts : null,
    selectedPost: null,
    postsError: false,
    bookmarks: []
}

const bookmarkHandler = (state, postId) => {
    let bookmarks = [...state.bookmarks]
    const index = bookmarks.indexOf(postId)
    if(index !== -1) {
        bookmarks.splice(index, 1)
    } else {
        bookmarks.push(postId);
    }
    
    return bookmarks
}

const deleteFromBookmark = (state, postId) => {
    let bookmarks = [...state.bookmarks]
    const index = bookmarks.indexOf(postId)
    if(index !== -1) {
        bookmarks.splice(index, 1)
    }
    return bookmarks
}

const reducer = (state=initialState, action) => {

    switch(action.type) {

        case actionTypes.FETCH_POSTS : 
            return {
                ...state,
                posts: action.posts,
                postContent: null,
                selectedPost: null,
                postsError: false
            }

        case actionTypes.FETCH_POSTS_FAILED :
            return {
                ...state,
                postsError: true
            }

        case actionTypes.SHOW_POST_CONTENT :
            return {
                ...state,
                selectedPost: action.selectedPost
            }

        case actionTypes.LIKE_POST :
            return {
                ...state,
                posts: {
                    ...state.posts,
                    [action.likedPost]: {
                        ...state.posts[action.likedPost],
                        likes: state.posts[action.likedPost].likes + 1
                    }
                }
            }
        
        case actionTypes.DISLIKE_POST :
            return {
                ...state,
                posts: {
                    ...state.posts,
                    [action.dislikedPost]: {
                        ...state.posts[action.dislikedPost],
                        dislikes: state.posts[action.dislikedPost].dislikes + 1
                    }
                }
            }

        case actionTypes.BOOKMARK_POST :
            return {
                ...state,
                posts: {
                    ...state.posts,
                    [action.bookmarkedPost]: {
                        ...state.posts[action.bookmarkedPost],
                        bookmark: !state.posts[action.bookmarkedPost].bookmark
                    }
                },
                bookmarks: bookmarkHandler(state, action.bookmarkedPost)
            }

        case actionTypes.DELETE_POST :
            return {
                ...state,
                posts: {
                    ...state.posts,
                    [action.deletedPost]: null
                },
                selectedPost: null,
                bookmarks: deleteFromBookmark(state, action.deletedPost)
            }

        default : return state
    }
}

export default reducer;