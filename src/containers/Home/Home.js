import React, {Component} from 'react';
import Cards from '../../components/Cards/Cards';
import Spinner from '../../components/UI/Spinner/Spinner';
import {connect} from 'react-redux';
import * as actions from '../../store/actions/actions';

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
        } else {
            console.log("Card clicked");
            this.props.history.push("/post");
            this.props.fetchPostContentHandler(postId);
        }
    }


    render() {
        let cards = <Spinner />

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

export default connect(mapStateToProps, mapDispatchToProps)(Home);