import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';

class CommentBox extends Component {
  state = { comment: '' }

  componentDidMount() {
    this.shouldNavigateAway()
  }

  componentDidUpdate() {
    this.shouldNavigateAway()
  }

  shouldNavigateAway() {
    if (!this.props.auth) {
      console.log('NO')
    }
  }

  handleChange = (event) => {
    this.setState({ comment: event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.saveComment(this.state.comment);
    this.setState({ comment: '' });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h4>add a comment</h4>
          <textarea onChange={this.handleChange} value={this.state.comment}/>
          <div>
            <button> submit </button>
          </div>
        </form>
        <button className="fetch-comments" onClick={this.props.fetchComments}>get comments</button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { auth: state.auth };
}

export default connect(mapStateToProps, actions)(CommentBox);
