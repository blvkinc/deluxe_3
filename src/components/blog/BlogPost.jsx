import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { blogPosts } from "./blogData";
import "./BlogPost.css";

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) return <Navigate to="/blog" replace />;

  return (
    <div style={{ backgroundColor: "#fff", color: "#000" }}>
      <div className="blogpost-container">
        <div className="blogpost-content">
          <Link to="/blog" className="blogpost-back">
            ← Back to Blogs
          </Link>
          <h1>{post.title}</h1>
          <div className="blogpost-meta">
            <span className="blogpost-category">{post.category}</span>
            <span className="blogpost-date">{post.date}</span>
          </div>
          <div className="blogpost-section">
            {post.sections.map((section, i) => (
              <div key={i} className="blogpost-service-type">
                <h3>{section.title}</h3>
                <p className="blogpost-service-note">{section.note}</p>
                <ul>
                  {section.items.map((item, j) => (
                    <li key={j}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
