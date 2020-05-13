import * as actionTypes from '../actions/actionTypes';

const initialState = {
    posts : null,
    postContent: null,
    selectedPost: null
}

const reducer = (state=initialState, action) => {

    switch(action.type) {

        case actionTypes.FETCH_POSTS : 
            return {
                ...state,
                posts: action.posts,
                postContent: null,
                selectedPost: null
            }

        case actionTypes.FETCH_POST_CONTENT :
            return {
                ...state,
                postContent: action.postContent,
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
                }
            }

        default : return state
    }
}

export default reducer;