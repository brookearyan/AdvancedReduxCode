import React, { Component } from 'react';

class CommentBox extends Component {
  state = { comment: '' }

  handleChange = (event) => {
    this.setState({ comment: event.target.value })
  }
  handleSubmit = (event) => {
    event.preventDefault();
    //call action creator & save commment
    this.setState({ comment: '' })
    
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h4>add a comment</h4>
        <textarea onChange={this.handleChange} value={this.state.comment}/>
        <div>
          <button> submit </button>
        </div>
      </form>
    )
  }
}

export default CommentBox;
