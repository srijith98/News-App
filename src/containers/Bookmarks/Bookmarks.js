import React, {Component} from 'react';
import {connect} from 'react-redux';
import Card from '../../components/Cards/Card/Card';
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
        
        if(this.props.posts) {
            bookmarkedPosts = Object.keys(this.props.posts).map(postKey => {
                return this.props.posts[postKey].bookmark? <Card key={postKey} title={this.props.posts[postKey].title} image={this.props.posts[postKey].image} alt={this.props.posts[postKey].imageInfo} description={this.props.posts[postKey].description} bookmark={this.props.posts[postKey].bookmark} likes={this.props.posts[postKey].likes} dislikes={this.props.posts[postKey].dislikes} clicked={(e) => this.showPostHandler(e, postKey)}  />: null
            });
        }

        let bookmarks = false
        bookmarkedPosts.forEach(bookmarkedPost => {
            if(bookmarkedPost !== null) {
                bookmarks = true
            } 
        })

        return(
            <div>
                {bookmarks? bookmarkedPosts: <p>No bookmarks found!</p>}
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
        showPostContentHandler: (postId) => dispatch(actions.showPostContent(postId)),
        likePost: (postId) => dispatch(actions.likePost(postId)),
        dislikePost: (postId) => dispatch(actions.dislikePost(postId)),
        bookmarkPost: (postId) => dispatch(actions.bookmarkPost(postId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Bookmarks);