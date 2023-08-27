// Write your JS code here
import {Link} from 'react-router-dom'

import './index.css'

const BlogItem = props => {
  const {blogItem} = props
  const {id, title, imageUrl, avatarUrl, author, topic} = blogItem

  return (
    <Link to={`/blogs/${id}`} className="blog-item-card">
      <div className="blog-item">
        <img src={imageUrl} className="blog-item-img" alt={`item${id}`} />
        <div className="blog-details">
          <p className="item-topic">{topic}</p>
          <h1 className="item-title">{title}</h1>
          <div className="author-details">
            <img src={avatarUrl} className="avatar-img" alt={`avatar${id}`} />
            <p className="item-author">{author}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default BlogItem
