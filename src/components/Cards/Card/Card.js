import React from 'react';
import classes from './Card.module.css';
import Image from '../../Image/Image';

const card = props => {

    let bookmarkClass = "far fa-bookmark";
    if(props.bookmark) {
        bookmarkClass = "fas fa-bookmark";
    }

    const re = /[^.]+\./;
    const result = props.description.match(re);
    const description = result[0]
    console.log(result)
    return (
        <div className={classes.Card} onClick={props.clicked}>
            <i className={bookmarkClass}></i>
            <h3>{props.title}</h3>
            <Image link={props.image} info={props.alt} />
            <p>{description}</p>
            <div className={classes.CardActions}>
                <i className="far fa-thumbs-up"></i>
                <p>{props.likes}</p>
                <i className="far fa-thumbs-down"></i>
                <p>{props.dislikes}</p>
            </div>
        </div>
    );
}
    


export default card;