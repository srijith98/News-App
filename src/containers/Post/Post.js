import React, {Component} from 'react';
import {connect} from 'react-redux';
import Spinner from '../../components/UI/Spinner/Spinner';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import classes from './Post.module.css';
import Image from '../../components/Image/Image';

class Post extends Component {

    render() {
        let fullPost = <Spinner />;
        if(this.props.postContent) {
            fullPost = (
                <Aux>
                    <h2>{this.props.posts[this.props.postId].title}</h2>
                    <Image link={this.props.posts[this.props.postId].image} info={this.props.posts[this.props.postId].imageInfo} />
                    <p>{this.props.postContent}</p>
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
        postContent: state.postContent,
        postId: state.selectedPost
    }
}

export default connect(mapStateToProps)(Post);