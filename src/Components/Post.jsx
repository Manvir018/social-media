import React, { useContext } from 'react'
import { MdDelete } from "react-icons/md";
import { PostList } from '../Store/PostList_store';

const Post = ({ post }) => {
  console.log(post);
  const { deletePost } = useContext(PostList);

  return (
    <div className="card text-post" style={{ width: "30rem" }}>
      <div className="card-body">
        <h5 className="card-title">
          {post.tittle}
          <span
            className='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger'
            onClick={() => deletePost(post.id)}
          ><MdDelete />
          </span>
        </h5>
        <p className="card-text">{post.body}</p>
        {post.tags.map((tag) => (
          <span key={tag} className='badge text-bg-primary hashtag'>{tag}</span>
        ))}
        <div className="alert alert-success reactions" role='alert'>
          This post has been reacted by {post.reactions.likes}  likes and {post.reactions.dislikes}dislikes.
        </div>
      </div>
    </div>
  );
};

export default Post