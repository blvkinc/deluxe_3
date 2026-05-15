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
                {section.title && <h3>{section.title}</h3>}
                {section.note && <p className="blogpost-service-note">{section.note}</p>}
                {section.paragraphs && section.paragraphs.map((p, j) => (
                  <p key={j}>{p}</p>
                ))}
                {section.items && (
                  <ul>
                    {section.items.map((item, j) => (
                      <li key={j}>{item}</li>
                    ))}
                  </ul>
                )}
                {section.groups && section.groups.map((group, j) => (
                  <div key={j} className="blogpost-group">
                    {group.label && <p className="blogpost-group-label">{group.label}</p>}
                    <ul>
                      {group.items.map((item, k) => <li key={k}>{item}</li>)}
                    </ul>
                  </div>
                ))}
                {section.table && (
                  <div className="blogpost-table-wrap">
                    <table className="blogpost-table">
                      <thead>
                        <tr>
                          {section.table.headers.map((h, j) => (
                            <th key={j}>{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {section.table.rows.map((row, j) => (
                          <tr key={j}>
                            {row.map((cell, k) => (
                              <td key={k}>{cell}</td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    {section.table.footnote && (
                      <p className="blogpost-table-footnote">{section.table.footnote}</p>
                    )}
                  </div>
                )}
                {section.cta && (
                  <div className="blogpost-cta">
                    {section.cta.map((link, j) => (
                      <a key={j} href={link.href}>{link.label}</a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
