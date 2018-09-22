import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import CommentBox from './CommentBox';
import CommentList from './CommentList';
import * as actions from '../actions/index';

class App extends Component {

  renderButton(){
    if (this.props.auth) {
      return (
        <button onClick={() => this.props.changeAuth(false)}>
          sign out
        </button>
      )
    } else {
      return (
        <button onClick={() => this.props.changeAuth(true)}>
          sign in
        </button>
      )
    }
  }

  renderHeader() {
    return (
      <ul>
        <li>
          <Link to="/"> home </Link>
        </li>
        <li>
          <Link to="/post"> post a comment </Link>
        </li>
        <li>
          {this.renderButton()}
        </li>
      </ul>
    )
  }

  render() {
    return (
      <div>
        {this.renderHeader()}
        <Route path="/post" component={CommentBox} />
        <Route path ="/" exact component={CommentList} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { auth: state.auth };
}

export default connect(mapStateToProps, actions)(App);
