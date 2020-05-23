import React, {Component} from 'react';
import Cards from '../../components/Cards/Cards';
import Spinner from '../../components/UI/Spinner/Spinner';
import {connect} from 'react-redux';
import * as actions from '../../store/actions/actions';
import axios from '../../axios_posts';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

class Home extends Component {


    componentDidMount() {
        
    }

    showPostHandler = (e, postId) => {
        if(e.target.classList.contains("fa-thumbs-up")) {
            this.props.likePost(postId);
        } else if(e.target.classList.contains("fa-thumbs-down")) {
            this.props.dislikePost(postId);
        } else if(e.target.classList.contains("fa-bookmark")) {
            this.props.bookmarkPost(postId);
        } else if(e.target.classList.contains("fa-trash-alt")) {
            this.props.deletePost(postId);
        } else {
            console.log("Card clicked");
            this.props.history.push("/post");
            this.props.showPostContentHandler(postId);
        }
    }



    render() {
        let cards = !this.props.error? <Spinner />: <p>Couldn't load posts!</p>

        if(this.props.posts) {
            cards = (<Cards cardClicked={(e, key) => this.showPostHandler(e, key)} posts={this.props.posts} />);
        }
        return(
            <div>
                {cards}
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        posts: state.posts,
        error: state.postsError
    }
}

const mapDispatchToProps = dispatch => {
    return {
        showPostContentHandler: (postId) => dispatch(actions.showPostContent(postId)),
        likePost: (postId) => dispatch(actions.likePost(postId)),
        dislikePost: (postId) => dispatch(actions.dislikePost(postId)),
        bookmarkPost: (postId) => dispatch(actions.bookmarkPost(postId)),
        deletePost: (postId) => dispatch(actions.deletePost(postId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Home, axios));