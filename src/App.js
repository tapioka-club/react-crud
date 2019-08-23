import React, {Component} from 'react';
import axios from 'axios';

export default class App extends Component {
  state = {
    title: '',
    posts: [],
  };

  componentDidMount() {
    axios.get(`http://localhost:3001/posts`).then(res => {
      const data = res.data;

      this.setState({
        posts: data,
      });
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

    axios.post(`http://localhost:3001/posts`, data).then(() => {
      console.log('success');
    });
  };

  handleDelte = id => {
    axios.delete(`http://localhost:3001/posts/` + id).then(() => {
      console.log('success');
    });
  };

  render() {
    const {title, posts} = this.state;
    return (
      <div className="App">
        App
        <div>
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
        </div>
        <input
          type="text"
          name="title"
          value={title}
          onChange={this.handleChange}
        />
        <button onClick={this.handleSubmit}>追加</button>
      </div>
    );
  }
}
