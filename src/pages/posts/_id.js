import React, {Component} from 'react';
import axios from 'axios';
import {CLIENT_URL} from '../../helper/api';

export default class PostId extends Component {
  state = {
    post: {},
  };
  componentDidMount() {
    this.fetchPostDetail(this.props);
  }

  fetchPostDetail = props => {
    axios
      .get(`${CLIENT_URL}/posts/${this.props.match.params.id}`)
      .then(res => {
        console.log(res);
        const post = res.data;
        this.setState({post});
      })
      .catch(err => {
        console.log(err);
      });
  };
  render() {
    const {post} = this.state;
    return <div>{post.title}</div>;
  }
}
