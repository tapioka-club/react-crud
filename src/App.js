import React, {Component} from 'react';
import axios from 'axios';
import {CLIENT_URL} from './api';

export default class App extends Component {
  state = {
    title: '',
    posts: [],
    isLoading: true,
  };

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

  handleChange = e => {
    const {name, value} = e.target;
    this.setState({[name]: value});
  };

  handleSubmit = e => {
    e.preventDefault();

    const {title} = this.state;

    const data = {
      title: title,
    };

    axios.post(`${CLIENT_URL}/posts`, data).then(() => {
      console.log('success');
    });
  };

  handleDelte = id => {
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
            <div>Loading</div>
          ) : (
            <>
              {posts.map(post => (
                <React.Fragment key={post.id}>
                  {post.title}
                  <button
                    onClick={() => {
                      this.handleDelte(post.id);
                    }}>
                    削除
                  </button>
                </React.Fragment>
              ))}
            </>
          )}
        </div>
      </div>
    );
  }
}
