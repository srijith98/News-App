import React, {Component} from 'react';
import {connect} from 'react-redux';
import Spinner from '../../components/UI/Spinner/Spinner';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import classes from './Post.module.css';
import Image from '../../components/Image/Image';
import * as actions from '../../store/actions/actions';
import {Redirect} from 'react-router-dom';


class Post extends Component {

    bookmarkClickedHandler = () => {
        this.props.bookmarkPost(this.props.postId)
    }

    likeClickedHandler = () => {
        this.props.likePost(this.props.postId)
    }

    dislikeClickedHandler = () => {
        this.props.dislikePost(this.props.postId)
    }

    render() {

        let fullPost = <Spinner />;
        if(this.props.postId === null) {
            fullPost = <Redirect to="/" />;
        }
        else {
            let bookmarkClass = "far fa-bookmark";
            if(this.props.posts[this.props.postId].bookmark) {
                bookmarkClass = "fas fa-bookmark";
            }
            fullPost = (
                <Aux>
                    <i className={bookmarkClass} onClick={this.bookmarkClickedHandler}></i>
                    <h2>{this.props.posts[this.props.postId].title}</h2>
                    <Image link={this.props.posts[this.props.postId].image} info={this.props.posts[this.props.postId].imageInfo} />
                    <div className={classes.PostActions}>
                        <i className="far fa-thumbs-up" onClick={this.likeClickedHandler}></i>
                        <p>{this.props.posts[this.props.postId].likes}</p>
                        <i className="far fa-thumbs-down" onClick={this.dislikeClickedHandler}></i>
                        <p>{this.props.posts[this.props.postId].dislikes}</p>
                    </div>
                    <p>{this.props.posts[this.props.postId].description}</p>
                </Aux>
            );
        }

        return(
            <div className={classes.Post}>
                {fullPost}
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        posts: state.posts,
        postId: state.selectedPost,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        likePost: (postId) => dispatch(actions.likePost(postId)),
        dislikePost: (postId) => dispatch(actions.dislikePost(postId)),
        bookmarkPost: (postId) => dispatch(actions.bookmarkPost(postId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);