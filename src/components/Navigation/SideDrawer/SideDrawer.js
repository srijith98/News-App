import React from 'react';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.module.css';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import BackDrop from '../../UI/BackDrop/BackDrop';
import Logo from '../../Logo/Logo';

const sideDrawer = props => {

    let assignedClasses = [classes.SideDrawer, classes.Open];

        if(!props.open) {
            assignedClasses = [classes.SideDrawer, classes.Close];
        }

        return (
            <Aux>
                <BackDrop show={props.open} clicked={props.closeClicked} />
                <div className={assignedClasses.join(' ')}>
                    <div className={classes.Logo}>
                        <Logo />
                    </div>
                    <nav>
                        <NavigationItems isAuthenticated={props.isAuth} />
                    </nav>
                </div>
            </Aux>
        );
}


export default sideDrawer;