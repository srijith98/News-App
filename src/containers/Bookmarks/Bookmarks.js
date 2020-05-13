import React, {Component} from 'react';
import {connect} from 'react-redux';
import Card from '../../components/Cards/Card/Card';
import * as actions from '../../store/actions/actions';

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
            this.props.fetchPostContentHandler(postId);
        }
    }

    render() {
        
        const bookmarkedPosts = Object.keys(this.props.posts).map(postKey => {
            return this.props.posts[postKey].bookmark? <Card key={postKey} title={this.props.posts[postKey].title} description={this.props.posts[postKey].description} bookmark={this.props.posts[postKey].bookmark} likes={this.props.posts[postKey].likes} dislikes={this.props.posts[postKey].dislikes} clicked={(e) => this.showPostHandler(e, postKey)} />: null
        });
        return(
            <div>
                {bookmarkedPosts}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        posts: state.posts
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchPostContentHandler: (postId) => dispatch(actions.initFetchPostContent(postId)),
        likePost: (postId) => dispatch(actions.likePost(postId)),
        dislikePost: (postId) => dispatch(actions.dislikePost(postId)),
        bookmarkPost: (postId) => dispatch(actions.bookmarkPost(postId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Bookmarks);