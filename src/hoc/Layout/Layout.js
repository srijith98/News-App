import React, {Component} from 'react';
import Aux from '../Auxiliary/Auxiliary';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import classes from './Layout.module.css';

class Layout extends Component {

    state={
        showSideDrawer: false
    };

    closeSideDrawerHandler = () => {
        this.setState({showSideDrawer: false});
    }

    toggleSideDrawerHandler = () => {
        this.setState((prevState) => ({showSideDrawer: !prevState.showSideDrawer}));
    }


    render() {
        return (
            <Aux>
                <Toolbar clickedMenu={this.toggleSideDrawerHandler} />
                <SideDrawer open={this.state.showSideDrawer} closeClicked={this.closeSideDrawerHandler} />
                <main className = {classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        );
    }
}



export default Layout;