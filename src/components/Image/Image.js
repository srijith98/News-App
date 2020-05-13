import React from 'react';
import classes from './Image.module.css'

const image = props => (<img className={classes.Image} src={props.link} alt={props.info} />);

export default image;