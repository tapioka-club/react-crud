import React from 'react';
import {Link} from 'react-router-dom';

const Card = ({posts, handleDelete}) => (
  <div>
    {posts.map(post => (
      <React.Fragment key={post.id}>
        <Link to={`/posts/${post.id}`}>
          {post.title}
          {post.created_at}
        </Link>
        <button
          onClick={() => {
            handleDelete(post.id);
          }}>
          削除
        </button>
      </React.Fragment>
    ))}
  </div>
);

export default Card;
