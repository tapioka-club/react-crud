import React, {Component} from 'react';
import axios from 'axios';
import {CLIENT_URL} from '../helper/api';
import Card from '../components/Card';
import Loading from '../components/Loading';

export default class App extends Component {
  state = {
    title: '',
    posts: [],
    isLoading: true,
  };

  // GET all post. Endpoint /posts
  componentDidMount() {
    axios
      .get(`${CLIENT_URL}/posts`)
      .then(res => {
        const data = res.data;

        this.setState({
          posts: data,
          isLoading: false,
        });
      })
      .then(err => {
        console.log(err);
      });
  }

  componentDidUpdate(prevProps, prevState) {
    const {foo, bar} = prevProps;
    if (prevState.baz && this.props.isLoading) {
    }
    console.log('didupdate');
  }

  handleChange = e => {
    const {name, value} = e.target;
    this.setState({[name]: value});
  };

  // CREATE
  handleSubmit = e => {
    e.preventDefault();

    const {title} = this.state;

    const data = {
      title: title,
      created_at: Date.now(),
    };

    axios.post(`${CLIENT_URL}/posts`, data).then(() => {
      console.log('success');
      this.setState({
        title: '',
      });
    });
  };

  // DELETE
  handleDelete = id => {
    axios
      .delete(`${CLIENT_URL}/posts/` + id)
      .then(() => {
        console.log('success');
      })
      .then(err => {
        console.log(err);
      });
  };

  render() {
    const {title, posts, isLoading} = this.state;

    // if (!!posts) {
    //   return <div>表示するポストがありません</div>;
    // }
    return (
      <div className="App">
        App
        <input
          type="text"
          name="title"
          value={title}
          onChange={this.handleChange}
        />
        <button onClick={this.handleSubmit}>追加</button>
        <div>
          {isLoading ? (
            <Loading />
          ) : (
            <>
              <Card posts={posts} handleDelete={this.handleDelete} />
            </>
          )}
        </div>
      </div>
    );
  }
}
