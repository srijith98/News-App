import React, {Component} from 'react';
import {connect} from 'react-redux';
import Cards from '../../components/Cards/Cards';
import * as actions from '../../store/actions/actions';
import { Redirect } from 'react-router-dom';

class Bookmarks extends Component {

    showPostHandler = (e, postId) => {
        if(e.target.classList.contains("fa-thumbs-up")) {
            this.props.likePost(postId);
        } else if(e.target.classList.contains("fa-thumbs-down")) {
            this.props.dislikePost(postId);
        } else if(e.target.classList.contains("fa-bookmark")) {
            this.props.bookmarkPost(postId);
        } else {
            console.log("Card clicked");
            this.props.history.push("/post");
            this.props.showPostContentHandler(postId);
        }
    }

    render() {

        let bookmarkedPosts = <Redirect to="/" />
        
        if(this.props.posts && this.props.bookmarks.length) {
            let posts = {}

            this.props.bookmarks.forEach(postId => {
                posts = {
                    ...posts,
                    [postId]: this.props.posts[postId]
                }
            });
            bookmarkedPosts = (<Cards cardClicked={(e, key) => this.showPostHandler(e, key)} posts={posts} />);
            
        }

        console.log(bookmarkedPosts)

        return(
            <div>
                {this.props.bookmarks.length? bookmarkedPosts: <p>No bookmarks found!</p>}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        posts: state.posts,
        bookmarks: state.bookmarks
    }
}

const mapDispatchToProps = dispatch => {
    return {
        showPostContentHandler: (postId) => dispatch(actions.showPostContent(postId)),
        likePost: (postId) => dispatch(actions.likePost(postId)),
        dislikePost: (postId) => dispatch(actions.dislikePost(postId)),
        bookmarkPost: (postId) => dispatch(actions.bookmarkPost(postId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Bookmarks);