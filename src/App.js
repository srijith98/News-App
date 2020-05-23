import React, {Component} from 'react';
import './App.css';
import Layout from './hoc/Layout/Layout';
import {Route, Switch, Redirect} from 'react-router-dom';
import Home from './containers/Home/Home';
import Post from './containers/Post/Post'
import Bookmarks from './containers/Bookmarks/Bookmarks';
import {connect} from 'react-redux';
import * as actions from './store/actions/actions';

class App extends Component {

  componentDidMount() {
    this.props.fetchPostsHandler();
  }
  
  render() {
    return (
      <div className="App">
        <Layout>
          <Switch>
            <Route path="/post" component={Post} />
            <Route path="/bookmarks" component={Bookmarks} />
            <Route path="/" exact component={Home} />
            <Redirect to="/" />
          </Switch>
        </Layout>
      </div>
    );
  }

}

const mapDispatchToProps = dispatch => {
  return {
    fetchPostsHandler: () => dispatch(actions.initFetchPosts())
  }
}

export default connect(null, mapDispatchToProps)(App);
