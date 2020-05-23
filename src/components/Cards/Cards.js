import React from 'react';
import Card from './Card/Card';
import classes from './Cards.module.css';

const cards = props => {

    const cardElements = Object.keys(props.posts).map(postKey => {
        return props.posts[postKey]? <Card key={postKey} title={props.posts[postKey].title} image={props.posts[postKey].image} alt={props.posts[postKey].imageInfo} description={props.posts[postKey].description} bookmark={props.posts[postKey].bookmark} likes={props.posts[postKey].likes} dislikes={props.posts[postKey].dislikes} clicked={(e) => props.cardClicked(e, postKey)} />: null
    });

    return(
        <div className={classes.Cards}>
           {cardElements} 
        </div>
    );

}

export default cards;