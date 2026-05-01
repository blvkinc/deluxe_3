import React from "react";
import { Link } from "react-router-dom";
import { blogPosts } from "./blogData";
import "./Blog.css";

function Blog() {
  return (
    <div className="blog-page">
      <div className="blog-hero">
        <h1 className="blog-heading">BLOGS</h1>
        <p className="blog-subheading">News, guides and caravan insights</p>
      </div>
      <div className="blog-grid">
        {blogPosts.map((post) => (
          <Link to={`/blog/${post.slug}`} key={post.id} className="blog-card">
            <div className="blog-card-category">{post.category}</div>
            <h2 className="blog-card-title">{post.title}</h2>
            <p className="blog-card-excerpt">{post.excerpt}</p>
            <div className="blog-card-footer">
              <span className="blog-card-date">{post.date}</span>
              <span className="blog-card-cta">READ MORE →</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default React.memo(Blog);
